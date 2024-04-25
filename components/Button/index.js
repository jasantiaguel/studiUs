import styles from "./Button.module.css"
import { useState } from "react";

export default function Button({text, onclick, textColor='var(--bright-af)', bgColor='var(--med-blue)', bgColorHover='var(--dark-blue)', size='default', width="auto", tabIndex, onKeyDown}) {
    const sizeStyles = {
        default: {
            padding: '12px 28px',
            borderRadius: "24px"
        },
        chonky: {
            padding: '16px 36px',
            height: "56px",
            borderRadius: "32px",
            fontSize: 'var(--title-2)'
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
                color: textColor,
                width: width,
                borderRadius: sizeStyles[size].borderRadius,
                fontSize: sizeStyles[size].fontSize
            }}
        >
            {text}
        </button>
    )
}