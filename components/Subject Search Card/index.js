import { useState } from "react";
import { groups } from "@/data/groups";
import GroupCard from "@/components/GroupCard";
import styles from "./SubjectCard.module.css";
import Link from "next/link";

export default function SubjectSearchCard({ title, onSelect }) {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(true);
    onSelect(title);
  }

  return(
    <Link href="/search/results" onClick={handleSelect} style={{textDecoration: 'none'}}>
      <section className={styles.fullCard}>
        <div className={styles.overCard}>
        </div>
        <h5 className={styles.subjectTitle}>{title}</h5>
      </section>
    </Link>
  )
}