import { useState } from "react";
import { groups } from "@/data/groups";
import GroupCard from "@/components/GroupCard";
import styles from "./SubjectCard.module.css";
import Link from "next/link";

export default function SubjectSearchCard({ title, tabIndex }) {
  
  return(
    <Link 
      href={{ pathname: "/search/results", query: { subject: title } }}
      style={{textDecoration: 'none'}}
      tabIndex={tabIndex}
    >
      <section className={styles.fullCard}>
        <div className={styles.overCard}>
        </div>
        <h5 className={styles.subjectTitle}>{title}</h5>
      </section>
    </Link>
  )
}