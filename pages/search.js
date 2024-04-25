import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/Search.module.css"
import HeadArea from "@/components/HeadArea";
import { useState } from "react";
import { groups } from "@/data/groups";
import Image from "next/image";
import Tag from "@/components/Tag";
import GroupCard from "@/components/GroupCard";

import Map from "@/components/Map";

export default function Search() {
    const [groupData, setGroupData] = useState(groups);
    
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
                    <Tag text='quiet' type='filter'/>
                 </section>

                 <h2 style={{margin: '32px 0 16px'}}>Results</h2>

                 {
                        groupData.map((group) => {
                         return <GroupCard group={group}/>
                     })
                }


                
                
                
               
            </main>
            <Footer/>
        </div>
    )
}