import Header from "@/components/Header";
import Footer from "@/components/Footer";

import styles from "@/styles/Questions.module.css";

import { questions } from "@/data/quiz"; //edit questions here
import { useState } from "react";
import { useRouter } from "next/navigation";
import Question from "@/components/Question";
import Button from "@/components/Button";
import Link from "next/link";
import HeadArea from "@/components/HeadArea";
import ProgressBar from "@/components/ProgressBar";
import Image from "next/image";
import InfoPopUp from "@/components/InfoPopUp";

export default function Questions() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [feynman, setFeynman] = useState(0);
    const [qr, setQR] = useState(0);
    const [leitner, setLeitner] = useState(0);
    const [retrieval, setRetrieval] = useState(0);
    const [showSubmit, setShowSubmit] = useState(false);

    const [answerIsSelected, setAnswerIsSelected] = useState(false); // is an answer selected
    const [answerSelected, setAnswerSelected] = useState(); // the actual answer selected
    const [answerSubmitted, setAnswerSubmitted] = useState(false); // is the answer submitted

    const [popup, setPopup] = useState(false); //for "learn more" overlay

    const router = useRouter();

    const selectedStyle = {
        backgroundColor: "var(--dark-green)"
    }

    function getResults() {
        return [
            { name: "SQ3R/PQ4R", value: qr },
            { name: "Leitner", value: leitner },
            { name: "Retrieval", value: retrieval },
            { name: "Feynman", value: feynman },
        ]
    }

    //processes data coming back from Question component (go to component for more details)
    const returnData = (data) => { //`data` is the object returned by Question
        setAnswerSelected(data);
    }

    const handleNext = () => {
        setAnswerIsSelected(false);
        setAnswerSubmitted(true);
        if (answerSelected.method.includes("Feynman")) setFeynman(feynman + answerSelected.value);
        if (answerSelected.method.includes("Leitner")) setLeitner(leitner + answerSelected.value);
        if (answerSelected.method.includes("SQ3R/PQ4R")) setQR(qr + answerSelected.value);
        if (answerSelected.method.includes("Retrieval")) setRetrieval(retrieval + answerSelected.value);
    }
    const handleNextQuestion = () => {
        setAnswerSubmitted(false);
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    }
    const handleQuestion = () => {
        setAnswerIsSelected(true);
        if (currentQuestion == questions.length - 1) {
            setShowSubmit(true);
        }
    }
    //back button
    const handleBack = () => {
        if (!answerSubmitted) {
            if (currentQuestion > 0) {
                setCurrentQuestion(currentQuestion - 1);
            }
            else {
                router.push("./home");
            }
        }
        else {
            if (answerSelected.method.includes("Feynman")) setFeynman(feynman - answerSelected.value);
            if (answerSelected.method.includes("Leitner")) setLeitner(leitner - answerSelected.value);
            if (answerSelected.method.includes("SQ3R/PQ4R")) setQR(qr - answerSelected.value);
            if (answerSelected.method.includes("Retrieval")) setRetrieval(retrieval - answerSelected.value);
            setAnswerSubmitted(false);
        }
        setAnswerIsSelected(false);  
        setAnswerSelected(null);    }
    return (
        <div className="frame">
            <HeadArea />
            <Image src='/images/header.elipse.svg' width={430} height={313} className={styles.ellipseBackground}/> 
            <div className={styles.main}>
                <div className={styles.quizHeader}>
                    <h1 className={styles.headerText}>StudiUs Quiz</h1>
                </div>
                <div className={styles.topContainer}>
                    <h2 className={styles.questionName}>{questions[currentQuestion].question}</h2>
                    {   // Screen 1
                        !answerSubmitted ?
                            <div className={styles.questions}>
                                {
                                    questions[currentQuestion].answers.map((answer, index) => {
                                        return <Question 
                                                    tabIndex={index + 1}
                                                    onclick={handleQuestion} 
                                                    answerData={answer} 
                                                    returnData={returnData} 
                                                    style={answer == answerSelected ? selectedStyle : null}
                                                />
                                    })
                                }
                            </div>
                            :
                            // Screen 2 (After hitting Next)   
                            <>
                                <div className={styles.content}>
                                    <div className={styles.questionContainer}>
                                        <Image src={answerSelected.image} width={430} height={313} className={styles.img}/>
                                        <Question answerData={answerSelected} onclick={null}/> 
                                    </div>
                                    <div className={styles.descriptionBox}>  
                                        <p className={styles.description}>{answerSelected.description}</p>
                                    </div>
                                </div>
                            </>
                    }
                </div>
                <div className={styles.bottom}>
                    <div className={styles.buttons}>
                        {!answerSubmitted ?
                            // Screen 1 buttons
                            <>
                                {
                                    answerIsSelected &&
                                    <Button 
                                        tabIndex={5} 
                                        onclick={handleNext}
                                        text="Submit" 
                                        bgColor="var(--med-green)" 
                                    /> // "Submits selected answer"
                                }
                            </>
                            :
                            // Screen 2 buttons
                            <>
                                <Button 
                                    tabIndex={6} 
                                    onclick={() => setPopup(true)}
                                    bgColor="var(--bright-blue)" 
                                    text="Learn More" 
                                    width="179px" 
                                />
                                {   // Handles which button to show on last question
                                    showSubmit ?
                                        <Link tabIndex={-1} href={{ pathname: "./results", query: { results: JSON.stringify(getResults()) } }}>
                                            <Button tabIndex={8} text="See Results" bgColor="var(--med-green)" width="179px"/>
                                        </Link> :
                                        <Button tabIndex={7} onclick={handleNextQuestion} text="Next Question" bgColor="var(--med-green)" width="179px" />
                                }
                            </>
                        }
                    </div>
                    {
                        popup && <InfoPopUp methodName={answerSelected.method} onclick={() => setPopup(null)}/>
                    }
                    <div className={styles.progressContainer}>
                        <button tabIndex={9} onClick={handleBack} className={styles.buttonOverride}>
                            <Image src='/images/back.arrow.svg' width={41} height={48}/>
                        </button>
                        <ProgressBar progress={currentQuestion} length={questions.length} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}