import styles from "./Banner.module.css"
import Button from "../Button";
import Link from "next/link";
import { useState } from "react";

export default function Banner({title1, title3, buttonSpace, buttonText, path="", bgImage}) {
  return(
    <section className={styles.bannerSection}>
      <div className={styles.bannerBg} style={{backgroundImage: `url(${bgImage})`}}>
        <p style={{
          fontSize: "var(--title-3)", 
          margin: "24px 0 0",
          color: "var(--bright-af)"
        }}>
          {title3}
        </p>
        <p style={{
          fontSize: "var(--title-1)", 
          fontWeight: "var(--font-weight-bold)",
          margin: "8px 0",
          color: "var(--bright-af)"
        }}>
          {title1}
        </p>
        <Link href={path} className={styles.buttonPos} style={{marginLeft: `${buttonSpace}`}}>
          <Button text={`${buttonText}`} size="chonky" tabIndex={2}/>
        </Link>
      </div>
    </section>
  )
}