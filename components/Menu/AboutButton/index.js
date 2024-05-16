import Link from "next/link";
import Image from "next/image";
import styles from "../Menu.module.css"

export default function AboutButton({imgPath, text="", path="#"}) {
    return(
        <Link className={styles.button} href={path}>
            <Image src={imgPath} width={40} height={40}/>
            {text}
        </Link>
    )
}