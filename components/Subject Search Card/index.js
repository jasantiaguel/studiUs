import { useState } from "react";
import { groups } from "@/data/groups";
import GroupCard from "@/components/GroupCard";
import styles from "./SubjectCard.module.css";

export default function SubjectSearchCard({ title }) {
  const [groupData, setGroupData] = useState(groups);

  return(
    <section className={styles.fullCard}>
      <div className={styles.overCard}>
      </div>
      <h5 className={styles.subjectTitle}>{title}</h5>
    </section>
  )
}