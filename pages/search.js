import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/Search.module.css"

export default function Search() {
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