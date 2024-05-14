import styles from "./popupButton.module.css";
import InfoPopUp from "../InfoPopUp";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PopupButton({methodName, path}) {
    const [popup, setPopup] = useState(false);

    return(
        <>
            <motion.div whileHover={{scale: 1.05}} className={styles.container} onClick={() => setPopup(true)}>
                <Image src={path} height={110} width={132}/>
                <p>{methodName}</p>
            </motion.div>
            <AnimatePresence>
            {
                popup && <InfoPopUp methodName={methodName} onclick={() => setPopup(null)}/>
            }
            </AnimatePresence>
        </>
    )
}