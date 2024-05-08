import Link from "next/link";
import Image from "next/image";
import styles from "../Menu.module.css"

export default function AboutButton({path, text=""}) {
    return(
        <Link className={styles.button} href="#">
            <Image src={path} width={40} height={40}/>
            {text}
        </Link>
    )
}