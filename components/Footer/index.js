import NavTab from "@/components/NavTab"
import styles from "./Footer.module.css"

export default function Footer() {
    return(
        <div className={styles.footer}>
            <NavTab image="/#" activeImage="/#" path="/"/>
            <NavTab image="/#" activeImage="/#" path="/search"/>
            <NavTab image="/#" activeImage="/#" path="/notifications"/>
        </div>
    )
}