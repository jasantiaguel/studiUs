import styles from "@/styles/onboarding/Onboard.module.css";
import HeadArea from "@/components/HeadArea";

import Map from "@/components/Map";

export default function Onboard() {
  return(
    <div className="frame">
      <HeadArea/>
      <main className={styles.main}>
        <h2 className={styles.introTitle}>Welcome to</h2>
        <h1 className={styles.title}>StudiUs</h1>
        <p className={styles.description}>As your premier study companion, StudiUs is designed to connect you with peers and optimize your learning experience!</p>
      </main>
    </div>
  )
}