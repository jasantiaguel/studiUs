import { useState } from "react";
import styles from "./Checkbox.module.css";

export default function Checkbox({title, selected}) {
    const [isSelected, setIsSelected] = useState(false);
    
    const handleClick = () => {
        selected(title);
        if (isSelected) {
            setIsSelected(false);
        }
        else {
            setIsSelected(true);
        }
    }
    
    return(
        <div className={isSelected ? styles.containerSelected : styles.container} onClick={handleClick}>
            {title}
        </div>
    )
}