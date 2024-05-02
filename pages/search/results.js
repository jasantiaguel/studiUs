import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/search/Results.module.css"
import HeadArea from "@/components/HeadArea";
import { useState, useEffect } from "react";
import { groups } from "@/data/groups";
import Image from "next/image";
import Tag from "@/components/Tag";
import GroupCard from "@/components/GroupCard";
import { useRouter } from "next/router";

import Map from "@/components/Map";

export default function Results() {
  const router = useRouter();
  const selectedSubject = router.query.subject;

  const [groupData, setGroupData] = useState(groups);
  
  useEffect(() => {
    const filteredGroups = groupData.filter(groupData =>
    groupData.tags.includes(selectedSubject)
  );
  setGroupData(filteredGroups);
  }, [selectedSubject]);

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
        <h2 style={{margin: '32px 0 16px'}}>Results for: {selectedSubject}</h2>
        <section className={styles.searchResultsContainer}>
          {
            groupData.length > 0 ? (
              groupData.map(group => <GroupCard group={group} />)
            ) : (
              <p>Oops! No groups for this subject yet.</p>
            )
          }
        </section>

        {/* This is a filler section to make the bottom of page not cut off */}
        <section className={styles.bottomFiller} style={{margin: '64px 0'}}>
          <p> </p>
        </section>
      </main>
      <Footer/>
    </div>
  )
}