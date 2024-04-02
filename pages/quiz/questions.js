import Header from "@/components/Header";
import Footer from "@/components/Footer";

import styles from "@/styles/Questions.module.css";

import { questions } from "@/data/quiz";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Question from "@/components/Question";
import Button from "@/components/Button";

export default function Questions() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const router = useRouter();

    const handleClick = () => {
        if (currentQuestion < 3) {
            setCurrentQuestion(currentQuestion+1);
        }
        else {
            router.push("./results");
        }
    }
    return(
        <div className="frame">
            <Header/>
            <div className={styles.main}>
                <h1>{questions[currentQuestion].question}</h1>
                {questions[currentQuestion].answers.map((answer) => {
                    return <Question onclick={handleClick} text={Object.values(answer)}/>
                })}
            </div>
            <div className={styles.buttons}>
                <Button onclick={() => setCurrentQuestion(currentQuestion-1)} text="back"/>
            </div>
            <Footer/>
        </div>
    )
}