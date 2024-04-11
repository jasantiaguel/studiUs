import styles from "./Button.module.css"

const sizeStyles = {
    default: {
        padding: '12px 28px'
    },
    chonky: {
        padding: '16px 36px'
    }
}

export default function Button({text, onclick, bgColor = 'var(--med-blue)', size = 'default', width}) {
    return(
        <button 
            onClick={onclick} 
            className={styles.main}
            style={{
                backgroundColor: bgColor,
                padding: sizeStyles[size].padding,
                width: width || 'auto'
            }}
        >
            {text}
        </button>
    )
}