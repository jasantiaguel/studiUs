import styles from "./Question.module.css";

export default function Question({answerData, onclick, returnData, style}) {   //answerData is one of the objects in the answers array in the data file quiz.js:
    //                                                                    {text: "Feynman, SQ3R +1", method: ["Feynman", "SQ3R"], value: 1}
    
    //combines passed onclick function with additional functionality
    const handleClick = () => {
        onclick(); //onclick function passed from questions.js (it goes to the next question)
        returnData(answerData); //passes this answer object back to the main file (questions.js)
    }
    
    return(
        <div onClick={handleClick} className={styles.question} style={style}>
            {answerData.text}
        </div>
    )
}