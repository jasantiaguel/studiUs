import styles from "./popupButton.module.css";
import InfoPopUp from "../InfoPopUp";
import Image from "next/image";
import { useState } from "react";

export default function PopupButton({methodName, path}) {
    const [popup, setPopup] = useState(false);

    return(
        <>
            <div className={styles.container} onClick={() => setPopup(true)}>
                <Image src={path} height={110} width={132}/>
                <p>{methodName}</p>
            </div>
            {
                popup && <InfoPopUp methodName={methodName} onclick={() => setPopup(null)}/>
            }
        </>
    )
}