import styles from "./Button.module.css"
import { useState } from "react";

export default function Button({text, onclick, bgColor='var(--med-blue)', bgColorHover='var(--dark-blue)', size='default', width}) {
    const sizeStyles = {
        default: {
            padding: '12px 28px'
        },
        chonky: {
            padding: '16px 36px'
        }
    }
    
    if (bgColor === "var(--med-green)") {
        bgColorHover = "var(--dark-green)";
    }

    const hoverStyle = {
        backgroundColor: bgColorHover
    }
    
    const [hover, setHover] = useState(false);

    return(
        <button 
            onClick={onclick} 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={styles.main}
            style={{
                backgroundColor: !hover ? bgColor: bgColorHover,
                padding: sizeStyles[size].padding,
                width: width || 'auto',
            }}
        >
            {text}
        </button>
    )
}