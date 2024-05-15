import Image from "next/image";
import styles from "./Menu.module.css";
import { useState } from "react";
import AboutButton from "./AboutButton";
import ResourcesButton from "./ResourcesButton";
import { AnimatePresence, motion } from "framer-motion";

export default function Menu() {
    const [expand, setExpand] = useState(false);
    const handleClick = () => {
        expand ? setExpand(false) : setExpand(true);
    }

    return(
        <>
            <AnimatePresence>
            {
                expand &&
                <div className={styles.all}>
                    <motion.div
                    key="menu"
                    initial={{x: 50}}
                    animate={{x: 0}}
                    exit={{x: 50}}
                    transition={{type: "easeIn"}}
                    className={styles.menu}>
                        <div className={styles.top}>
                            <Image style={{width: "258px", height: "auto"}} src="/images/logo/logomark-white.svg" width={597} height={175}/>
                        </div>
                        <div className={styles.body}>
<<<<<<< HEAD
                            <AboutButton path="/images/icons/icon.about.svg" text="About"/>
                            <AboutButton path="/images/icons/icon.settings.svg" text="Settings"/>
                            <ResourcesButton path="/images/icons/icon.resources.svg" text="Resources"/>
=======
                            <AboutButton imgPath="/images/icons/icon.about.svg" text="About" path="/menuContent/about"/>
                            <AboutButton imgPath="/images/icons/icon.settings.svg" text="Settings"/>
                            <AboutButton imgPath="/images/icons/icon.resources.svg" text="Resources"/>
>>>>>>> 57c9e75684686d399cb6a5810aab6a1ce3834ceb

                        </div>
                    </motion.div>
                    <div className={styles.background} onClick={handleClick}/>
                </div>
            }
            </AnimatePresence>

            <Image tabIndex={1} src="/images/icon.burger-menu.svg" width={32} height={32} onClick={handleClick}/>
        </>
    )
}