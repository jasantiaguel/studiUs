import styles from "./popupButton.module.css";
import InfoPopUp from "../InfoPopUp";
import { useState } from "react";

export default function PopupButton({method}) {
    const [popup, setPopup] = useState(false);

    return(
        <>
            <div className={styles.main} onClick={() => setPopup(true)}>
                <p>{method.name}</p>
            </div>
            {
                popup && <InfoPopUp method={method} onclick={() => setPopup(null)}/>
            }
        </>
    )
}