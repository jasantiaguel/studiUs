import styles from "../styles/Home.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Notifications() {
    return(
        <div className={`${styles.frame} ${styles.notifications}`}>
            <Header/>
            <main className={styles.main}>
                <h1>StudiUs</h1>
            </main>
            <Footer/>
        </div>
    )
}