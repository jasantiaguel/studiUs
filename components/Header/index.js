import styles from "./Header.module.css";
import Menu from "@/components/Menu";

export default function Header({name, bgColor}) {
    return(
        <div style={{backgroundColor: bgColor}} className={styles.header}>
            <h2 className={styles.headerFont}>
                {name}
            </h2>
            <Menu/>
        </div>
    )
}