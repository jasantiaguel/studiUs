import styles from "./Button.module.css"

export default function Button({text, onclick}) {
    return(
        <button onClick={onclick} className={styles.main}>
            {text}
        </button>
    )
}