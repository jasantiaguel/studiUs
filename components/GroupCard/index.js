import GroupInfo from "@/components/GroupInfo";
import Tag from "@/components/Tag";
import { useEffect, useState } from "react";
import styles from "./GroupCard.module.css";

export default function Card({group}) {
    const [isActive, setIsActive] = useState(false);
    const [popup, setPopup] = useState(false);
    useEffect(() => {
        if (group.status === "In Progress") setIsActive(true);
    }, [])
    
    return(
        <>
        <div className={styles.all}>
            <div 
                className={isActive ? styles.active : styles.inactive} 
                onClick={() => setPopup(true)}
            >
                <div className={styles.top}>
                    <div>
                        <h3 className={styles.title}>{group.title}</h3>
                        <p className={styles.status}>{group.status}</p>
                    </div>
                    <div 
                        className={styles.timeBlock} 
                        style={isActive?{backgroundColor: "var(--bright-green)", 
                        color: "black"}:{backgroundColor: "var(--med-green-85)", 
                        color: "white"}}
                    >
                        <p style={{fontWeight: "var(--font-weight-bold)"}}>{group.time.day}</p>
                        <p>{group.time.time}</p>
                    </div>
                </div> 
                <div className={styles.tags}>
                    {
                        group.tags.map((tag) => {
                            return(
                                <Tag text={tag} size='tag'/>
                            )
                        })
                    }
                </div>
            </div>
            <div className={styles.footer}>
                <p style={{fontWeight: "var(--font-weight-bold)", margin: "0"}}>{group.location}</p>
                <div className={styles.icons}>
                    {
                        group.members.map(() => {
                            return <div style={{backgroundColor: "gray", width: "28px", height: "28px", borderRadius: "32px"}}></div>
                        })
                    }
                </div>
            </div>
        </div>
        {
            popup && <GroupInfo group={group} onclick={() => setPopup(false)}/>
        }
        </>
    )
}