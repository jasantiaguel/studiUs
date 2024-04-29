import Map from "../Map";
import styles from "./CreateOverlay.module.css"
import { useState } from "react";

export default function CreateOverlay({onclick, newGroup}) {
    const [title, setTitle] = useState("Title");
    const [description, setDescription] = useState("Description");
    const [tags, setTags] = useState([]);
    
    //custom tag stuff
    const [tagInputDisplay, setTagInputDisplay] = useState({display: "none"});
    const [tagDisplay, setTagDisplay] = useState(["Javascript", "Chill", "Design"]);
    const [custom, setCustom] = useState(false);
    const [customText, setCustomText] = useState("Custom");
    const [customTag, setCustomTag] = useState("");

    //date stuff
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    
    const handleClick = () => {
        onclick();
        newGroup({
            title: title,
            description: description,
            tags: tags,
            time: new Date(parseInt(date.substring(0, 4)), parseInt(date.substring(5, 7))-1, parseInt(date.substring(8, 10)), parseInt(time.substring(0, 2)), parseInt(time.substring(3, 5))), //YYYY, MM, DD, HOURS, MINUTES, SECONDS
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

    const handleCustomTag = () => {
        if (!custom) {
            setTagInputDisplay({display: "inline"});
            setCustom(true);
            setCustomText("Add");
        }
        else {
            setTagInputDisplay({display: "none"});
            setCustom(false);
            setCustomText("Custom");
            setTagDisplay([...tagDisplay, customTag]);
        }
    }
    return(
        <>
        <div className={styles.container}>
            <input type="text" placeholder="Title" onChange={e => setTitle(e.currentTarget.value)}/>
            <input type="text" placeholder="Description" onChange={e => setDescription(e.currentTarget.value)}/>
            <div>
                {
                    tagDisplay.map((value) => {
                        return(
                            <label>{value}<input type="checkbox" value={value} onChange={handleTags}/></label>
                        );
                    })
                }
                <input type="text" placeholder="Tag" style={tagInputDisplay} onChange={e => setCustomTag(e.currentTarget.value)}></input>
                <button onClick={handleCustomTag}>{customText}</button>
            </div>
            <label>Location & Time</label>
            <Map/>
            <input type="date" onChange={(e) => setDate(e.currentTarget.value)}/>
            <input type="time" onChange={(e) => setTime(e.currentTarget.value)}/>
            <button onClick={handleClick}>Create group</button>
        </div>
        <div className="overlaybg" onClick={onclick}/>
        </>
    )
}