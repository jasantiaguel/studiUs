import GroupInfo from "@/components/GroupInfo";
import Tag from "@/components/Tag";
import { useEffect, useState } from "react";
import styles from "./GroupCard.module.css";

export default function Card({group, todo=null, returnGroup=null}) {
    const [isActive, setIsActive] = useState(false);
    const [popup, setPopup] = useState(false);

    useEffect(() => {
        if (getStatus(group.time) === "In Progress") setIsActive(true);
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
            case 0: return "Sunday"
        }
    }

    function timeParser(hours, minutes) {
        let meridiem = "AM";
        if (hours >= 12) meridiem = "PM";
        if (hours > 12) hours -= 12;
        if (hours.length < 2) hours = '0'+hours;
        if (minutes.length < 2) minutes = '0'+minutes;
        return `${hours}:${minutes}${meridiem}`
    }

    function getStatus(date) {
        let now = new Date();
        let difference = date.getTime() - now.getTime();
        if (difference < 0) {
            return "In Progress";
        }
        return `Starts in ${
            Math.round((Math.floor(difference/10000)*10)/60/60)
        } hour${Math.round((Math.floor(difference/10000)*10)/60/60) > 1 ? 's':''}`
    }

    let day = dateParser(group.time.getDay());
    let time = timeParser(''+group.time.getHours(), ''+group.time.getMinutes());
    
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
                        <p className={styles.status}>{getStatus(group.time)}</p>
                    </div>
                    <div 
                        className={styles.timeBlock} 
                        style={isActive?{backgroundColor: "var(--bright-af-75)", 
                        color: "var(--dark-green"}:{backgroundColor: "var(--med-green-85)", 
                        color: "white"}}
                    >
                        <p style={{fontWeight: "var(--font-weight-bold)"}}>{day}</p>
                        <p>{time}</p>
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
                            return <div 
                                        style={{
                                        backgroundImage: "url('/images/icon.profile-filled-small.svg')", 
                                        backgroundPosition: "center",
                                        width: "28px", 
                                        height: "28px", 
                                        borderRadius: "32px"
                                        }}>
                                    </div>
                        })
                    }
                </div>
            </div>
        </div>
        {
            popup && <GroupInfo group={group} todo={handleButton} returnGroup={returnData} onclick={() => setPopup(false)} day={day} time={time}/>
        }
        </>
    )
}