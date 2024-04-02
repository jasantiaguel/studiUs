import styles from "./Question.module.css";

export default function Question({text, onclick}) {
    return(
        <div onClick={onclick} className={styles.question}>
            {text}
        </div>
    )
}