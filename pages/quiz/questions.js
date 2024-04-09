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
    const [questionIsSelected, setQuestionIsSelected] = useState(false);
    const [answerSelected, setAnswerSelected] = useState();
    const [showInfo, setShowInfo] = useState(false);

    const router = useRouter();

    const selectedStyle = {
        backgroundColor: "darkgray"
    }

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
    }

    const handleNext = () => {
        setQuestionIsSelected(false);
        setShowInfo(true);
        if (answerSelected.method.includes("Feynman"))setFeynman(feynman + answerSelected.value);
        if (answerSelected.method.includes("Leitner")) setLeitner(leitner + answerSelected.value);
        if (answerSelected.method.includes("SQ3R/PQ4R")) setQR(qr + answerSelected.value);
        if (answerSelected.method.includes("Retrieval")) setRetrieval(retrieval + answerSelected.value);
    }
    const handleNextQuestion = () => {
        setShowInfo(false);
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
        setShowInfo(false);
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
            <Header/>
            <h1>{questions[currentQuestion].question}</h1>
            <div className={styles.main}>
                {   !showInfo ?
                    questions[currentQuestion].answers.map((answer) => {
                        return <Question onclick={handleQuestion} answerData={answer} returnData={returnData} style={answer == answerSelected ? selectedStyle : null}/>
                    }) :
                    <div>
                        {answerSelected.description}
                        {showSubmit ?
                            <Link href={{pathname: "./results", query: {method: determineMethod()}}}><Button text="Finish"/></Link> :
                            <Button onclick={handleNextQuestion} text="Next Question"/>
                        }
                    </div>
                }
                {
                    questionIsSelected ?
                    <Button onclick={handleNext} text="Next"/> : null
                }
            </div>
            <div className={styles.buttons}>
                <Button onclick={handleBack} text="Previous Question"/>
            </div>
            <Footer/>
        </div>
    )
}