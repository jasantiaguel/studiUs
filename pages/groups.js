import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/Groups.module.css";
import HeadArea from "@/components/HeadArea";
import GroupCard from "@/components/GroupCard";
import Banner from "@/components/Banner";
import { groups } from "@/data/groups";
import { useState, useEffect } from "react";
import Button from "@/components/Button";
import CreateOverlay from "@/components/CreateOverlay";
import Image from "next/image";

export default function Groups() {  
  const [groupData, setGroupData] = useState(groups);
  const [showCreate, setShowCreate] = useState(false);
  const [groupToRemove, setGroupToRemove] = useState();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");

  const newGroup = (data) => {
    let a = [...groupData];
    a.unshift(data);
    setGroupData(a);
    setSnackbarText(
      <p>Created group: {data.title}</p>
    )
    displaySnackbar();
  }

  const returnGroup = (data) => {
    setGroupToRemove(data);
  }

  const removeGroup = () => {
    let a = [...groupData];
    setGroupData(a.filter(e => e !== groupToRemove));
    setSnackbarText(
      <p>Left group: {groupToRemove.title}</p>
    )
    displaySnackbar();
  }

  function displaySnackbar() {
    setShowSnackbar(true);
    setTimeout(() => setShowSnackbar(false), 2000);
  }

  return(
      <div className="frame">
        <div className={styles.bgImage}>
        <Image 
          src="/images/topographic/graphic.topo2.svg" 
          width={656} 
          height={748} 
          className={styles.bgTopo}
        />
      </div>
        <HeadArea/>
        <main className={styles.main}>
          <Header name="Your Groups"/>
          <Banner 
            title3="Looking for groups to join?" 
            title1="Explore Nearby" 
            buttonSpace="216px"
            buttonText="Explore"
            path="/"
            bgImage="/images/groups.banner-bg.png"
          />
          <section className={styles.groupsHeader}>
            <h2 style={{margin: '0 0 16px'}}>Joined</h2>
            <h2 style={{margin: '0 0 16px'}}>{groupData.length}/5</h2>
          </section>
          {
              groupData.map((group) => {
                  return <GroupCard tabIndex={3} group={group} todo={removeGroup} returnGroup={returnGroup}/>
              })
          }
          
          {/* This is a filler section to make the bottom of page not cut off */}
          <section className={styles.bottomFiller} style={{margin: '196px 0'}}>
          </section>
          {
            showSnackbar &&
            <div className={styles.snackbar}>
              {snackbarText}
            </div>
          }
          <div className={styles.createButton}>
            <Button 
              text="+ Create Group" 
              size="chonky2" 
              width="398px"
              onclick={() => setShowCreate(true)}
              tabIndex={4}
            />
        </div>
          <Footer bdRadius={0} dshadow='4px -32px 32px #2E384D59;'/>
        </main>
        {
          showCreate &&
          <CreateOverlay
            onclick={() => setShowCreate(false)}
            newGroup={newGroup}
          />
        }
      </div>
  )
}