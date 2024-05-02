import Map from "../Map";
import styles from "./CreateOverlay.module.css"
import { useEffect, useState } from "react";

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
    const [date, setDate] = useState(todaysDate());
    const [time, setTime] = useState(todaysTime());

    //members
    const [members, setMembers] = useState(["Jerome"]);

    //location
    const [location, setLocation] = useState({
        name: "BCIT Library",
        coords: {centerPoint: "49.249234265894394,-123.00899574963694", circlePoint: "49.24936795802063,-123.00199080213194"}
    })
    let locations = [
        "BCIT Library",
        "Burnaby Public Library",
        "Starbucks"
    ]

    function todaysTime() {
        let today = new Date();
        let minutes = ''+(today.getMinutes());
        if (minutes.length < 2) minutes = '0' + minutes;
        return `${today.getHours()}:${minutes}`;
    }

    function todaysDate() {
        let today = new Date();
        let month = '' + (today.getMonth()+1);
        let day = '' + today.getDate();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return `${today.getFullYear()}-${month}-${day}`;
    }

    const handleClick = () => {
        onclick();
        newGroup({
            title: title,
            description: description,
            tags: tags,
            time: new Date(parseInt(date.substring(0, 4)), parseInt(date.substring(5, 7))-1, parseInt(date.substring(8, 10)), parseInt(time.substring(0, 2)), parseInt(time.substring(3, 5))), //YYYY, MM, DD, HOURS, MINUTES, SECONDS
            members: members,
            location: location.name,
            coords: location.coords
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

    function getCoords(locationName) {
        if (locationName === "BCIT Library") return {centerPoint: "49.249234265894394,-123.00899574963694", circlePoint: "49.24936795802063,-123.00199080213194"};
        if (locationName === "Burnaby Public Library") return {circlePoint: "49.22830066960166,-123.00645433238849", centerPoint: "49.23294399299716,-123.01548055074332"};
        if (locationName === "Starbucks") return {circlePoint: "49.256500573312074,-123.00687841485916", centerPoint: "49.25503999698177,-122.99757892021863"};
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
                <select onChange={(e) => setLocation({
                    name: e.currentTarget.value,
                    coords: getCoords(e.currentTarget.value)
                })}>
                    {
                        locations.map((location) => {
                            return <option value={location}>{location}</option>
                        })
                    }
                </select>
                <input type="date" value={date} onChange={(e) => setDate(e.currentTarget.value)}/>
                <input type="time" value={time} onChange={(e) => setTime(e.currentTarget.value)}/>
                <button onClick={handleClick}>Create group</button>
            </div>
        <div className={styles.background} onClick={onclick}/>
        </>
    )
}