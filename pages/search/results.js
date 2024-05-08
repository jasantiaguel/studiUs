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

  const [selectedTags, setSelectedTags] = useState([]);

  function filter(groups) {
    const filteredGroups = groups.filter(groups =>
    groups.tags.includes(selectedSubject)
    );
    return filteredGroups;
  }

  return(
    <div className="frame">
      <div className={styles.bgImage}>
        <Image 
          src="/images/topographic/graphic.topo1.svg" 
          width={1201} 
          height={961} 
          className={styles.bgTopo}
        />
      </div>
      <HeadArea/>
      <main className={styles.main}>
        <Header name="Search" backBtn={true}/>
        <div className={styles.searchBar}>
          <Image src='/images/icon.magnifying-glass.svg' width={21.6} height={24}/>
        </div>
        <section className={styles.filterSection}>
          <section className={styles.filterSectionScroll}>
            <Tag text='Sort' type='filter' selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            <Tag text='Music' type='filter' selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            <Tag text='Anime' type='filter' selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            <Tag text='Food' type='filter' selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            <Tag text='Quiet' type='filter' selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            <Tag text='Quiet' type='filter' selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            <Tag text='Quiet' type='filter' selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            <Tag text='Quiet' type='filter' selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
          </section>
        </section>
        <h2 style={{margin: '32px 0', lineHeight: '150%'}}>
          Study Groups for "{selectedTags.length > 0 ? selectedTags.join(', ') : selectedSubject}"
        </h2>
        <section className={styles.searchResultsContainer}>
          {
            filter(groups).length > 0 ? (
              filter(groups).map(group => <GroupCard group={group} selectedTags={selectedTags}/>)
            ) : (
              <p style={{margin: '0', lineHeight: '150%'}}>Oops, no groups have been scheduled for this yet!</p>
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