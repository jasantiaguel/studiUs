import styles from "./Header.module.css";
import Menu from "@/components/Menu";

export default function Header({name}) {
    return(
        <div className={styles.header}>
            <h2 style={{
              fontSize: "var(--largerer-title", 
              fontWeight: "var(--font-weight-bold)",
              margin: "0px",
              padding: "0 16px"
            }}>
              {name}
            </h2>
            <Menu/>
        </div>
    )
}