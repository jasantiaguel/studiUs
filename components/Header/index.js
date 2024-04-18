import styles from "./Header.module.css";
import Menu from "@/components/Menu";

export default function Header({name}) {
    return(
        <div className={styles.header}>
            <h1>{name}</h1>
            <Menu/>
        </div>
    )
}