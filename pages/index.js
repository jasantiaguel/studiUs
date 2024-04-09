import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Switch from "@/components/Switch";
import GroupCard from "@/components/GroupCard";
import styles from "@/styles/Home.module.css";

import { groups } from "@/data/groups.js";
import HeadArea from "@/components/HeadArea";

export default function Home() {
  const data = groups;
  
  return (
    <div className="frame">
      <HeadArea/>
      <Header/>
      <main className={styles.main}>
        <h1>StudiUs</h1>
        <Switch/>
        {
          data && data.map((group) => {
            return <GroupCard title={group.title} description={group.description} tags={group.tags}/>
          })
        }
      </main>
      <Footer/>
    </div>
  );
}
