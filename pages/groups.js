import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/Groups.module.css";
import HeadArea from "@/components/HeadArea";
import GroupCard from "@/components/GroupCard";
import Banner from "@/components/Banner";
import { groups } from "@/data/groups";
import { useState } from "react";
import Button from "@/components/Button";

export default function Groups() {
    const [groupData, setGroupData] = useState(groups);
    
    return(
        <div className="frame">
          <HeadArea/>
          <main className={styles.main}>
            <Header name="Your Groups"/>
            <Banner 
              title3="Looking for groups to join?" 
              title1="Explore Nearby" 
              buttonSpace="224px"
              buttonText="Explore"
            />
            <h2>Joined</h2>
            {
                groupData.map((group) => {
                    return <GroupCard group={group}/>
                })
            }
          </main>
          <div className={styles.createButton}>
              <Button 
                text="Create Group" 
                size="chonky" 
                width="398px"
              />
          </div>
          <Footer/>
        </div>
    )
}