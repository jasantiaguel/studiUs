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
        backgroundColor: "darkgray"
    }

    function getResults() {
        return [
            {name: "SQ3R/PQ4R", value: qr},
            {name: "Leitner", value: leitner},
            {name: "Retrieval", value: retrieval},
            {name: "Feynman", value: feynman},
        ]
    }
    // function determineMethod() {
    //     let result = [qr, leitner, retrieval, feynman];
    //     let max = Math.max(...result);
    //     if (qr == max) return "SQ3R/PQ4R";
    //     if (leitner == max) return "Leitner";
    //     if (retrieval == max) return "Retrieval";
    //     if (feynman == max) return "Feynman";
    // }

    //processes data coming back from Question component (go to component for more details)
    const returnData = (data) => { //`data` is the object returned by Question
        setAnswerSelected(data);
    }

    const handleNext = () => {
        setQuestionIsSelected(false);
        setQuestionSubmitted(true);
        if (answerSelected.method.includes("Feynman"))setFeynman(feynman + answerSelected.value);
        if (answerSelected.method.includes("Leitner")) setLeitner(leitner + answerSelected.value);
        if (answerSelected.method.includes("SQ3R/PQ4R")) setQR(qr + answerSelected.value);
        if (answerSelected.method.includes("Retrieval")) setRetrieval(retrieval + answerSelected.value);
    }
    const handleNextQuestion = () => {
        setQuestionSubmitted(false);
        if (currentQuestion < questions.length-1) {
            setCurrentQuestion(currentQuestion+1);
        }
    }

    const handleQuestion = () => {
        setQuestionIsSelected(true);
        if (currentQuestion == questions.length-1) {
            setShowSubmit(true);
        }
    }
    //back button
    const handleBack = () => {
        setQuestionSubmitted(false);
        setAnswerSelected(null);
        setQuestionIsSelected(false);
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion-1);
        }
        else {
            router.push("./home");
        }
    }
    return(
        <div className="frame">
            <HeadArea/>
            <div className={styles.main}>
                <h2>{questions[currentQuestion].question}</h2>
                {   // Screen 1
                    !questionSubmitted ?
                    <div className={styles.questions}>
                        {
                            questions[currentQuestion].answers.map((answer) => {
                                return <Question onclick={handleQuestion} answerData={answer} returnData={returnData} style={answer == answerSelected ? selectedStyle : null}/>
                            })
                        }
                        {
                            questionIsSelected &&
                            <Button onclick={handleNext} text="Next"/> // "Submits selected answer"
                        }
                    </div>
                    :
                    // Screen 2 (After hitting Next)
                    <> 
                        <div className={styles.description}>
                            <p>{answerSelected.description}</p>
                        </div>
                        <div className={styles.buttons}>
                            {   // Handles which button to show on last question
                                showSubmit ?
                                <Link href={{pathname: "./results", query: {results: JSON.stringify(getResults())}}}><Button text="Finish"/></Link> :
                                <Button onclick={handleNextQuestion} text="Next Question"/>
                            }
                        </div>    
                    </>
                }
                <div className={styles.buttons}>
                    <Button onclick={handleBack} text="Previous Question"/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}