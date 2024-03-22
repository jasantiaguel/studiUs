import styles from "../styles/Home.module.css";
import Footer from "@/components/Footer";

export default function Notifications() {
    return(
        <div className={`${styles.frame} ${styles.notifications}`}>
            <header>
                header
            </header>
            <main className={styles.main}>
                <h1>StudiUs</h1>
            </main>
            <Footer/>
        </div>
    )
}