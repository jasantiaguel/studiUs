import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "@/styles/Results.module.css";

export default function Results() {
    return(
        <div className="frame">
            <Header/>
            <div className={styles.main}>
                Results
            </div>
            <Footer/>
        </div>
    )
}