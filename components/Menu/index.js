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
            <Image src="/" width={32} height={32} onClick={handleClick}/>
            {
                expand ?
                <div className={`${styles.menu}`}>
                    <h1>burger menu</h1>
                    <p onClick={handleClick}>close</p>
                </div> : null
            }
        </>
    )
}