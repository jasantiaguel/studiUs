import styles from "./Switch.module.css";
import { useState } from "react";

export default function Switch() {
    const [variant, setVariant] = useState(true);
    const toggleVariant = () => {
        if (variant) {
            setVariant(false);
        }
        else {
            setVariant(true);
        }
    }
    
    return(
        <>
        <button onClick={toggleVariant} className={`${styles.switch} ${variant ? styles.on : styles.off}`}>
            <p>switch</p>
        </button>
        </>
    )
}