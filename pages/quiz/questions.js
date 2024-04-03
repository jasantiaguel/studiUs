import Header from "@/components/Header";
import Footer from "@/components/Footer";

import styles from "@/styles/Questions.module.css";

import { questions } from "@/data/quiz"; //edit questions here
import { useState } from "react";
import Question from "@/components/Question";
import Button from "@/components/Button";
import Link from "next/link";

export default function Questions() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [feynman, setFeynman] = useState(0);
    const [pqr, setPqr] = useState(0);
    const [sqr, setSqr] = useState(0);
    const [showSubmit, setShowSubmit] = useState(false);

    function determineMethod() {
        if (feynman >= pqr && feynman >= sqr) return "Feynman"; //defaults to feynman if tied; not ideal but not sure what to do for now
        if (pqr > feynman && pqr >= sqr) return "PQ4R"; //defaults to PQ4R if tied with SQ3R - also not ideal
        if (sqr > feynman && sqr > pqr) return "SQ3R";
    }

    //processes data coming back from Question component (go to component for more details)
    const returnData = (data) => { //`data` is the value returned by Question
        if (data.method.includes("Feynman")) setFeynman(feynman + data.value);
        if (data.method.includes("PQ4R")) setPqr(pqr + data.value);
        if (data.method.includes("SQ3R")) setSqr(sqr + data.value);
    }

    //dictates question click behaviour
    const handleClick = () => {
        if (currentQuestion < 3) { //needs this condition so that it doesn't overflow
            setCurrentQuestion(currentQuestion+1);
        }
        else {
            setShowSubmit(true);
        }
    }

    //back button
    const handleBack = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion-1);
        }
        else {
            router.push("./home");
        }
    }

    return(
        <div className="frame">
            <Header/>
            <div className={styles.main}>
                <h1>{questions[currentQuestion].question}</h1>
                {questions[currentQuestion].answers.map((answer) => {
                    return <Question onclick={handleClick} answerData={answer} returnData={returnData}/>
                })}
            </div>
            <div className={styles.buttons}>
                <Button onclick={handleBack} text="back"/>
                {   showSubmit ?
                    <Link href={{pathname: "./results", query: {method: determineMethod()}}}><Button text="Finish"/></Link> : null
                }
            </div>
            <Footer/>
        </div>
    )
}