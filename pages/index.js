import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Switch from "@/components/Switch";
import GroupCard from "@/components/GroupCard";
import Banner from "@/components/Banner";
import styles from "@/styles/Home.module.css";
import Tag from "@/components/Tag";
import Image from "next/image";

import { groups, schedGroups } from "@/data/groups.js";
import HeadArea from "@/components/HeadArea";

export default function Home() {
  const data = groups;
  const schedData = schedGroups;
  
  return (
    <div className="frame">
      {/* <div className={styles.bgImage}>
        <Image 
          src="/images/topographic/graphic.topo4.svg" 
          width={755} 
          height={1095} 
          className={styles.bgTopo}
        />
      </div> */}
      <HeadArea/>
      <main className={styles.main}>
        <Header name="Home"/>
        <section className={styles.homeWelcomeSection}>
          <div style={{
            backgroundColor: "gray", 
            width: "40px", 
            height: "40px", 
            borderRadius: "40px",
            marginRight: "16px"
            }}>
          </div>
          <div className={styles.welcomeMessage}>
            <h1 style={{margin: "0"}}>Good Morning Alira!</h1>
            <p style={{fontSize: "var(--body-copy)"}}>Keep at it! You're doing amazing.</p>
          </div>
        </section>
        <Banner 
          title3="Discover Your Perfect Study Method" 
          title1="Take Our Short Quiz" 
          buttonSpace="164px"
          buttonText="StudiUs Quiz"
          path="/quiz/home"
        />
        <section className={styles.filterSection}>
          <Tag text='Sort' type='filter'/>
          <Tag text='Music' type='filter'/>
          <Tag text='Anime' type='filter'/>
          <Tag text='Food' type='filter'/>
        </section>
        <h2 style={{margin: '32px 0 16px'}}>Today</h2>
        {
          data && data.map((group) => {
            return <GroupCard group={group}/>
          })
        }
        <h2 style={{margin: '8px 0 16px'}}>Upcoming</h2>
        {
          schedData && schedData.map((schedGroups) => {
            return <GroupCard group={schedGroups}/>
          })
        }
        {/* This is a filler section to make the bottom of page not cut off */}
        <section className={styles.bottomFiller} style={{margin: '40px 0'}}>
          <p> </p>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
