import Image from "next/image";
import styles from "./Menu.module.css";
import { useState } from "react";
import AboutButton from "./AboutButton";

export default function Menu() {
    const [expand, setExpand] = useState(false);
    const handleClick = () => {
        expand ? setExpand(false) : setExpand(true);
    }

    return(
        <>
            {
                expand &&
                <div className={styles.all}>
                    <div className={styles.menu}>
                        <div className={styles.top}>
                            <Image style={{width: "258px", height: "auto"}} src="/images/logo/logomark-white.svg" width={597} height={175}/>
                        </div>
                        <div className={styles.body}>
                            <AboutButton path="/images/icons/icon.about.svg" text="About"/>
                            <AboutButton path="/images/icons/icon.settings.svg" text="Settings"/>
                            <AboutButton path="/images/icons/icon.resources.svg" text="Resources"/>

                        </div>
                    </div>
                    <div className={styles.background} onClick={handleClick}/>
                </div>
            }
            <Image src="/images/icon.burger-menu.svg" width={32} height={32} onClick={handleClick}/>
        </>
    )
}