import styles from "./Header.module.css";
import Menu from "@/components/Menu";
import Link from "next/link";

export default function Header() {
    return(
        <div className={styles.header}>
            <Menu/>
        </div>
    )
}