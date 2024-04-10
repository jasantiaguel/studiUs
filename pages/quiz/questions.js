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

export default function Questions() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [feynman, setFeynman] = useState(0);
    const [qr, setQR] = useState(0);
    const [leitner, setLeitner] = useState(0);
    const [retrieval, setRetrieval] = useState(0);
    const [showSubmit, setShowSubmit] = useState(false);
    const [questionIsSelected, setQuestionIsSelected] = useState(false);
    const [answerSelected, setAnswerSelected] = useState();
    const [questionSubmitted, setQuestionSubmitted] = useState(false);

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
        setQuestionIsSelected(false);
        setQuestionSubmitted(true);
        if (answerSelected.method.includes("Feynman")) setFeynman(feynman + answerSelected.value);
        if (answerSelected.method.includes("Leitner")) setLeitner(leitner + answerSelected.value);
        if (answerSelected.method.includes("SQ3R/PQ4R")) setQR(qr + answerSelected.value);
        if (answerSelected.method.includes("Retrieval")) setRetrieval(retrieval + answerSelected.value);
    }
    const handleNextQuestion = () => {
        setQuestionSubmitted(false);
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    }
    const handleLearnMore = () => {

    }
    const handleQuestion = () => {
        setQuestionIsSelected(true);
        if (currentQuestion == questions.length - 1) {
            setShowSubmit(true);
        }
    }
    //back button
    const handleBack = () => {
        setQuestionSubmitted(false);
        setAnswerSelected(null);
        setQuestionIsSelected(false);
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
            <div className={styles.main}>
                <h2>{questions[currentQuestion].question}</h2>
                {   // Screen 1
                    !questionSubmitted ?
                        <div className={styles.questionLayout}>
                            <div className={styles.questions}>
                                {
                                    questions[currentQuestion].answers.map((answer) => {
                                        return <Question onclick={handleQuestion} answerData={answer} returnData={returnData} style={answer == answerSelected ? selectedStyle : null} />
                                    })
                                }
                            </div>
                        </div>
                        :
                        // Screen 2 (After hitting Next)    
                        <div className={styles.description}>
                            <p>{answerSelected.description}</p>
                        </div>
                }
                <div className={styles.bottom}>
                    <div className={styles.buttons}>
                        {!questionSubmitted ?
                            // Screen 1 buttons
                            <>
                                <Button onclick={handleBack} text="Back" />
                                {
                                    questionIsSelected &&
                                    <Button onclick={handleNext} text="Next" /> // "Submits selected answer"
                                }
                            </>
                            :
                            // Screen 2 buttons
                            <>
                                <Button onclick={handleLearnMore} text="Learn More" />
                                {   // Handles which button to show on last question
                                    showSubmit ?
                                        <Link href={{ pathname: "./results", query: { results: JSON.stringify(getResults()) } }}><Button text="Finish" /></Link> :
                                        <Button onclick={handleNextQuestion} text="Next Question" />
                                }
                            </>

                        }

                    </div>
                    <ProgressBar progress={currentQuestion} length={questions.length} />
                </div>
            </div>
            <Footer />
        </div>
    )
}