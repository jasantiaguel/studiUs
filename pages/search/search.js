import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/search/Search.module.css"
import HeadArea from "@/components/HeadArea";
import { useState } from "react";
import { groups } from "@/data/groups";
import Image from "next/image";
import Tag from "@/components/Tag";
import GroupCard from "@/components/GroupCard";
import SubjectSearchCard from "@/components/Subject Search Card";

import Map from "@/components/Map";

export default function Search() {
  const [selectedSubject, setSelectedSubject] = useState("");
  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
  };
  
  return(
    <div className="frame">
      <HeadArea/>
      <main className={styles.main}>
        <Header name="Search"/>
        <div className={styles.searchBar}>
          <Image src='/images/icon.magnifying-glass.svg' width={21.6} height={24}/>
        </div>
        <section className={styles.filterSection}>
          <Tag text='Sort' type='filter'/>
          <Tag text='Music' type='filter'/>
          <Tag text='Anime' type='filter'/>
          <Tag text='Food' type='filter'/>
          <Tag text='Quiet' type='filter'/>
        </section>
        <h2 style={{margin: '32px 0 16px'}}>Computer & Technology</h2>
        <section className={styles.subjectSection}>
          <SubjectSearchCard title='Computer Scienc...'/>
          <SubjectSearchCard title='Front End Develo...'/>
          <SubjectSearchCard title='Digital Design & D...'/>
        </section>
        <h2 style={{margin: '32px 0 16px'}}>Science</h2>
        <section className={styles.subjectSection}>
          <SubjectSearchCard title='Biology'/>
          <SubjectSearchCard title='Chemistry' onSelect={handleSubjectSelect}/>
          <SubjectSearchCard title='Physics'/>
          <SubjectSearchCard title='Environmental St...'/>
        </section>
        <h2 style={{margin: '32px 0 16px'}}>Mathematics</h2>
        <section className={styles.subjectSection}>
          <SubjectSearchCard title='Algebra'/>
          <SubjectSearchCard title='Calculus'/>
          <SubjectSearchCard title='Geometry'/>
        </section>
        <h2 style={{margin: '32px 0 16px'}}>Engineering</h2>
        <section className={styles.subjectSection}>
          <SubjectSearchCard title='Electrical Enginee...'/>
          <SubjectSearchCard title='Mechanical Engin...'/>
          <SubjectSearchCard title='Civil Engineering'/>
        </section>
        <h2 style={{margin: '32px 0 16px'}}>More Coming Soon!</h2>

        {/* This is a filler section to make the bottom of page not cut off */}
        <section className={styles.bottomFiller} style={{margin: '64px 0'}}>
          <p> </p>
        </section>
      </main>
      <Footer/>
    </div>
  )
}