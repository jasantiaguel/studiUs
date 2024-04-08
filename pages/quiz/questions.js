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
    const [questionSelected, setQuestionSelected] = useState(false);
    const [answerSelected, setAnswerSelected] = useState();
    const router = useRouter();

    function determineMethod() {
        let result = [feynman, qr, leitner, retrieval];
        let max = Math.max(...result);
        if (feynman == max) return "Feynman";
        if (qr == max) return "SQ3R/PQ4R";
        if (leitner == max) return "Leitner";
        if (retrieval == max) return "Retrieval";
    }

    //processes data coming back from Question component (go to component for more details)
    const returnData = (data) => { //`data` is the object returned by Question
        setAnswerSelected(data);
        if (data.method.includes("Feynman"))setFeynman(feynman + data.value);
        if (data.method.includes("Leitner")) setLeitner(leitner + data.value);
        if (data.method.includes("SQ3R/PQ4R")) setQR(qr + data.value);
        if (data.method.includes("Retrieval")) setRetrieval(retrieval + data.value);
    }

    const handleNext = () => {
        setQuestionSelected(false);
        if (currentQuestion < questions.length-1) {
            setCurrentQuestion(currentQuestion+1);
        }
    }

    const handleQuestion = () => {
        setQuestionSelected(true);
        if (currentQuestion == questions.length-1) {
            setShowSubmit(true);
        }
    }
    console.log(determineMethod());
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
            <h1>{questions[currentQuestion].question}</h1>
                <div className={styles.main}>
                {   !questionSelected ?
                    questions[currentQuestion].answers.map((answer) => {
                        return <Question onclick={handleQuestion} answerData={answer} returnData={returnData}/>
                    }) : 
                    <>
                        <p>{answerSelected.description}</p>
                        {
                            showSubmit ?
                            <Link href={{pathname: "./results", query: {method: determineMethod()}}}><Button text="Finish"/></Link> :
                            <Button onclick={handleNext} text="next"/>
                        }
                    </>
                }
                </div>
            <div className={styles.buttons}>
                <Button onclick={handleBack} text="back"/>
            </div>
            <Footer/>
        </div>
    )
}