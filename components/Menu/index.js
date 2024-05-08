import Image from "next/image";
import styles from "./Menu.module.css";
import { useState } from "react";

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
                    <div className={`${styles.menu}`}>
                        
                    </div>
                    <div className={styles.background} onClick={handleClick}/>
                </div>
            }
            <Image src="/images/icon.burger-menu.svg" width={32} height={32} onClick={handleClick}/>
        </>
    )
}