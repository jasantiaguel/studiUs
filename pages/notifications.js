import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/Notifications.module.css";

export default function Notifications() {
    return(
        <div className="frame">
            <Header/>
            <main className={styles.main}>
                <h1>StudiUs</h1>
            </main>
            <Footer/>
        </div>
    )
}