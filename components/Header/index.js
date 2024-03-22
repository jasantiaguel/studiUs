import styles from "./Header.module.css";
import Switch from "@/components/Switch";
import Image from "next/image";

export default function Header() {
    return(
        <div className={styles.header}>
            <Image width={32} height={32} className={styles.logo}/>
            <Switch/>
        </div>
    )
}