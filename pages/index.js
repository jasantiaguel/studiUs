import Footer from "@/components/Footer";
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <>
      <div className={`${styles.frame} ${styles.home}`}>
        <header>
          header
        </header>
        <main className={styles.main}>
          <h1>StudiUs</h1>
        </main>
        <Footer/>
      </div>
    </>
  );
}
