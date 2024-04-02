import NavTab from "@/components/NavTab"
import styles from "./Footer.module.css"

export default function Footer() {
    return(
        <div className={styles.footer}>
            <NavTab image="/" activeImage="/" path="/"/>
            <NavTab image="/" activeImage="/" path="/search"/>
            <NavTab image="/" activeImage="/" path="/groups"/>
            <NavTab image="/" activeImage="/" path="/quiz/home"/>
            <NavTab image="/" activeImage="/" path="/profile"/>
        </div>
    )
}