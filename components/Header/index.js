import styles from "./Header.module.css";
import Menu from "@/components/Menu";
import Link from "next/link";

export default function Header() {
    return(
        <div className={styles.header}>
            <Menu/>
            <Link href="/profile">
                <button className={styles.profile}>
                    profile
                </button>
            </Link>
        </div>
    )
}