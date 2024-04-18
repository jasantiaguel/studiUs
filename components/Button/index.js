import styles from "./Button.module.css"
import { useState } from "react";

export default function Button({text, onclick, bgColor='var(--med-blue)', bgColorHover='var(--dark-blue)', size='default', width, tabIndex, onKeyDown}) {
    const sizeStyles = {
        default: {
            padding: '12px 28px'
        },
        chonky: {
            padding: '16px 36px',
            height: "51px"
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
            tabIndex={tabIndex}
            onClick={onclick} 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onKeyDown={onKeyDown}
            className={styles.main}
            style={{
                backgroundColor: !hover ? bgColor: bgColorHover,
                padding: sizeStyles[size].padding,
                height: sizeStyles[size].height,
                width: width || 'auto',
            }}
        >
            {text}
        </button>
    )
}