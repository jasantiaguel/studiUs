import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/Groups.module.css";
import HeadArea from "@/components/HeadArea";
import GroupCard from "@/components/GroupCard";
import { groups } from "@/data/groups";
import { useState } from "react";
import Button from "@/components/Button";

export default function Groups() {
    const [groupData, setGroupData] = useState(groups);
    
    return(
        <div className="frame">
            <HeadArea/>
            <Header name="Your Groups"/>
            <main className={styles.main}>
                <div style={{height: "200px"}}/>
                <h2>Joined</h2>
                {
                    groupData.map((group) => {
                        return <GroupCard group={group}/>
                    })
                }
            </main>
            {
            }
            <div className={styles.createButton}>
                <Button text="Create Group" size="chonky" width="398px"/>
            </div>
            <Footer/>
        </div>
    )
}