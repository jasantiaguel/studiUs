import { useState } from "react";
import { groups } from "@/data/groups";
import GroupCard from "@/components/GroupCard";
import styles from "./SubjectCard.module.css";
import Link from "next/link";

export default function SubjectSearchCard({ title }) {
  const [selected, setSelected] = useState('');

  const handleSubjectSelect = () => {
    setSelected({title});
  }

  return(
    <Link 
      onClick={handleSubjectSelect} 
      href={{ pathname: "/search/results", query: { subject: JSON.stringify(selected) } }}
      style={{textDecoration: 'none'}}
    >
      <section className={styles.fullCard}>
        <div className={styles.overCard}>
        </div>
        <h5 className={styles.subjectTitle}>{title}</h5>
      </section>
    </Link>
  )
}