import GroupInfo from "@/components/GroupInfo";
import Tag from "@/components/Tag";
import { useEffect, useState } from "react";
import styles from "./GroupCard.module.css";

export default function Card({group, todo=null, returnGroup=null}) {
    const [isActive, setIsActive] = useState(false);
    const [popup, setPopup] = useState(false);

    useEffect(() => {
        if (group.status === "In Progress") setIsActive(true);
        else setIsActive(false);
    }, [group])

    const handleButton = () => {
        setPopup(false);
        todo && todo();
    }

    const returnData = (data) => {
        returnGroup && returnGroup(data);
    }

    function dateParser(dayNum) {
        switch (dayNum) {
            case 1: return "Monday"
            case 2: return "Tuesday"
            case 3: return "Wednesday"
            case 4: return "Thursday"
            case 5: return "Friday"
            case 6: return "Saturday"
            case 7: return "Sunday"
        }
    }
    
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
                        style={isActive?{backgroundColor: "var(--bright-af-75)", 
                        color: "black"}:{backgroundColor: "var(--med-green-85)", 
                        color: "white"}}
                    >
                        <p style={{fontWeight: "var(--font-weight-bold)"}}>{dateParser(group.time.getDay())}</p>
                        <p>{`${group.time.getHours()}:${group.time.getMinutes()}`}</p>
                    </div>
                </div> 
                <div className={styles.tags}>
                    {
                        group.tags.map((tag) => {
                            return(
                                <Tag text={tag} type='tag'/>
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
            popup && <GroupInfo group={group} todo={handleButton} returnGroup={returnData} onclick={() => setPopup(false)}/>
        }
        </>
    )
}