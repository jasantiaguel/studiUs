import { useState } from "react";
import { groups } from "@/data/groups";
import GroupCard from "@/components/GroupCard";
import styles from "./SubjectCard.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SubjectSearchCard({ title, tabIndex }) {
  
  return(
    <Link 
      href={{ pathname: "/search/results", query: { subject: title } }}
      style={{textDecoration: 'none'}}
      tabIndex={tabIndex}
    >
      <motion.section
        initial={{scaleY: 0.8}}
        animate={{scaleY: 1}}
        whileHover={{scale: 1.05}}
        className={styles.fullCard}>
        <div className={styles.overCard}>
        </div>
        <h5 className={styles.subjectTitle}>{title}</h5>
      </motion.section>
    </Link>
  )
}