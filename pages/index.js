import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className="frame">
      <Header/>
      <main className={styles.main}>
        <h1>StudiUs</h1>
      </main>
      <Footer/>
    </div>
  );
}
