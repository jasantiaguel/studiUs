import styles from "./Header.module.css";
import Menu from "@/components/Menu";

export default function Header({name, bgColor}) {
    return(
        <div style={{backgroundColor: bgColor}} className={styles.header}>
            <h2 style={{
              fontSize: "var(--largerer-title", 
              fontWeight: "var(--font-weight-bold)",
              margin: "0px",
            }}>
              {name}
            </h2>
            <Menu/>
        </div>
    )
}