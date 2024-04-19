import styles from "./Banner.module.css"
import Button from "../Button";
import Link from "next/link";
import { useState } from "react";

export default function Banner({title1, title3, body, buttonSpace, buttonText}) {
  return(
    <section className={styles.bannerSection}>
      <div className={styles.bannerBg}>
        <p style={{
          fontSize: "var(--title-3)", 
          margin: "24px 0 0"
        }}>
          {title3}
        </p>
        <p style={{
          fontSize: "var(--title-1)", 
          fontWeight: "var(--font-weight-bold)",
          margin: "8px 0"
        }}>
          {title1}
        </p>
        <Link href="" className={styles.buttonPos} style={{marginLeft: `${buttonSpace}`}}>
          <Button text={`${buttonText}`} size="chonky"/>
        </Link>
      </div>
    </section>
  )
}