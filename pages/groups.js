import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/Groups.module.css";
import HeadArea from "@/components/HeadArea";
import GroupCard from "@/components/GroupCard";
import Banner from "@/components/Banner";
import { groups } from "@/data/groups";
import { useState } from "react";
import Button from "@/components/Button";
import CreateOverlay from "@/components/CreateOverlay";

export default function Groups() {
    const [groupData, setGroupData] = useState(groups);
    const [showCreate, setShowCreate] = useState(false);

    const newGroup = (data) => {
      let a = [...groupData];
      a.unshift(data);
      setGroupData(a);
    }
    
    return(
        <div className="frame">
          <HeadArea/>
          <Header name="Your Groups"/>
          <main className={styles.main}>
            <Banner 
              title3="Looking for groups to join?" 
              title1="Explore Nearby" 
              buttonSpace="216px"
              buttonText="Explore"
            />
            <h2 style={{margin: '0 0 16px'}}>Joined</h2>
            {
                groupData.map((group) => {
                    return <GroupCard group={group}/>
                })
            }
            {/* This is a filler section to make the bottom of page not cut off */}
            <section className={styles.bottomFiller} style={{margin: '180px 0'}}>
              <p> </p>
            </section>
          </main>
          <div className={styles.createButton}>
              <Button 
                text="+ Create Group" 
                size="chonky2" 
                width="398px"
                onclick={() => setShowCreate(true)}
              />
          </div>
          {
            showCreate &&
            <CreateOverlay
              onclick={() => setShowCreate(false)}
              newGroup={newGroup}
            />
          }
          <Footer/>
        </div>
    )
}