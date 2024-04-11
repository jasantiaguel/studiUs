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
        setAnswerSubmitted(false);
        setAnswerSelected(null);
        setAnswerIsSelected(false);
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
        else {
            router.push("./home");
        }
    }
    return (
        <div className="frame">
            <HeadArea />
            <Image src='/images/header.elipse.svg' width={430} height={313} className={styles.quizBackground}/> 
            <Image src='/images/topography6.svg' width={1033} height={743} className={styles.quizTopo}/>  
            <div className={styles.main}>             
                <div className={styles.quizHeader}>
                    <h1 className={styles.headerText}>StudiUs Quiz</h1>
                </div>

                <h2 className={styles.questionName}>{questions[currentQuestion].question}</h2>
                {   // Screen 1
                    !answerSubmitted ?
                        <div className={styles.questions}>
                            {
                                questions[currentQuestion].answers.map((answer) => {
                                    return <Question onclick={handleQuestion} answerData={answer} returnData={returnData} style={answer == answerSelected ? selectedStyle : null} />
                                })
                            }
                        </div>
                        :
                        // Screen 2 (After hitting Next)    
                        <div className={styles.description}>
                            <Question answerData={answerSelected} onclick={null} className={styles.expandedQuestion}/>
                            <div>  
                                <p className={styles.insight}>{answerSelected.description}</p>
                            </div>
                        </div>
                }
                <div className={styles.bottom}>
                    <div className={styles.buttons}>
                        {!answerSubmitted ?
                            // Screen 1 buttons
                            <>
                                <Button onclick={handleBack}><Image src='/images/back.arrow.svg' width={41} height={48}/></Button>
                                {
                                    answerIsSelected &&
                                    <Button onclick={handleNext} text="Next" /> // "Submits selected answer"
                                }
                            </>
                            :
                            // Screen 2 buttons
                            <>
                                <Button onclick={() => setPopup(true)} text="Learn More"/>
                                {   // Handles which button to show on last question
                                    showSubmit ?
                                        <Link href={{ pathname: "./results", query: { results: JSON.stringify(getResults()) } }}><Button text="Finish" /></Link> :
                                        <Button onclick={handleNextQuestion} text="Next Question" />
                                }
                            </>
                        }
                    </div>
                    {
                        popup && <InfoPopUp methodName={answerSelected.method[0]} onclick={() => setPopup(null)}/>
                    }
                    <ProgressBar progress={currentQuestion} length={questions.length} />
                </div>
            </div>
            <Footer />
        </div>
    )
}