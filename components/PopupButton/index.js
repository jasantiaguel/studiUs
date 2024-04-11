import styles from "./popupButton.module.css";
import InfoPopUp from "../InfoPopUp";
import { useState } from "react";

export default function PopupButton({methodName}) {
    const [popup, setPopup] = useState(false);

    return(
        <>
            <div className={styles.container} onClick={() => setPopup(true)}>
                <p>{methodName}</p>
            </div>
            {
                popup && <InfoPopUp methodName={methodName} onclick={() => setPopup(null)}/>
            }
        </>
    )
}