import styles from "./Question.module.css";
import { useState } from "react";

export default function Question({ answerData, onclick, returnData, style, currentQuestion }) {   //answerData is one of the objects in the answers array in the data file quiz.js:
    //                                                                    {text: "Feynman, SQ3R +1", method: ["Feynman", "SQ3R"], value: 1}

    //combines passed onclick function with additional functionality
    const handleClick = () => {
        if (!onclick) return;
        onclick(); //onclick function passed from questions.js (it goes to the next question)
        returnData(answerData); //passes this answer object back to the main file (questions.js)
    }

    
    return (
        <div className={styles.quizBackground} onClick={handleClick} style={currentQuestion % 2 == 0 ? {marginLeft: "auto"} : {marginRight: "auto"}}>
            <div className={styles.ellipse} style={style}>
                {answerData.number} 
            </div>
            <div className={styles.rectangle}>
                {answerData.text}
            </div>
        </div>
    )
}