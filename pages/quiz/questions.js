import Header from "@/components/Header";
import Footer from "@/components/Footer";

import styles from "@/styles/Questions.module.css";

import { questions } from "@/data/quiz"; //edit questions here
import { useState } from "react";
import { useRouter } from "next/navigation";
import Question from "@/components/Question";
import Button from "@/components/Button";
import Link from "next/link";

export default function Questions() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [feynman, setFeynman] = useState(0);
    const [qr, setQR] = useState(0);
    const [leitner, setLeitner] = useState(0);
    const [retrieval, setRetrieval] = useState(0);
    const [showSubmit, setShowSubmit] = useState(false);
    const router = useRouter();

    function determineMethod() {
        if (feynman >= qr && feynman >= leitner >= feynman >= retrieval) return "Feynman"; // in case of tie, first prio
        if (qr >= leitner && qr >= retrieval && pq > feynman) return "SQ3R/PQ4R"; // second prio
        if (leitner > qr && leitner > feynman && leitner >= retrieval) return "Leitner"; // third prio
        if (retrieval > qr && retrieval > leitner && retrieval > feynman) return "Retrieval"; //fourth prio
    }

    //processes data coming back from Question component (go to component for more details)
    const returnData = (data) => { //`data` is the object returned by Question
        if (data.method.includes("Feynman")) setFeynman(feynman + data.value);
        if (data.method.includes("Leitner")) setLeitner(leitner + data.value);
        if (data.method.includes("SQ3R/PQ4R")) setQR(qr + data.value);
        if (data.method.includes("Retrieval")) setRetrieval(retrieval + data.value);
    }

    //dictates question click behaviour
    const handleClick = () => {
        if (currentQuestion < questions.length-1) { //needs this condition so that it doesn't overflow
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