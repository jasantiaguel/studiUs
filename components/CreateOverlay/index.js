import Map from "../Map";
import styles from "./CreateOverlay.module.css"
import { useState } from "react";

export default function CreateOverlay({onclick, newGroup}) {
    const [title, setTitle] = useState("Title");
    const [description, setDescription] = useState("Description");
    const [tags, setTags] = useState([]);
    
    const handleClick = () => {
        onclick();
        newGroup({
            title: title,
            description: description,
            tags: tags,
            time: {day: "Saturday", time: "12:30PM"},
            location: "BCIT Library",
            members: ["Jerome"],
            status: "Starts in 1 day",
            coords: {centerPoint: "49.249234265894394,-123.00899574963694", circlePoint: "49.24936795802063,-123.00199080213194"}
        })
    }

    const handleTags = (e) => {
        if (e.target.checked) {
            setTags([...tags, e.target.value]);
        }
        else {
            setTags(tags.splice(e.target.value, 1));
        }
    }
    
    return(
        <>
        <div className={styles.container}>
            <input type="text" placeholder="Title" onChange={e => setTitle(e.currentTarget.value)}/>
            <input type="text" placeholder="Description" onChange={e => setDescription(e.currentTarget.value)}/>
            <div>
                <label>Tag<input type="checkbox" value="Tag" onChange={handleTags}/></label>
                <label>Tag 2<input type="checkbox" value="Tag 2" onChange={handleTags}/></label>
                <label>Tag 3<input type="checkbox" value="Tag 3" onChange={handleTags}/></label>
            </div>
            <label>Location & Time</label>
            <Map/>
            <input type="date" value="2024-04-27"/>
            <button onClick={handleClick}>Create group</button>
        </div>
        <div className="overlaybg" onClick={onclick}/>
        </>
    )
}