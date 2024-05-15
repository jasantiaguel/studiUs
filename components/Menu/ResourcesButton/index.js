import Link from "next/link";
import Image from "next/image";
import styles from "../Menu.module.css"

export default function ResourcesButton({path, text=""}) {
    return(
        <Link className={styles.button} href="https://www.usa.edu/blog/study-techniques/">
            <Image src={path} width={40} height={40}/>
            {text}
        </Link>
    )
}