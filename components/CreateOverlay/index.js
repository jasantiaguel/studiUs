import Checkbox from "../Checkbox";
import Map from "../Map";
import Button from "../Button";
import styles from "./CreateOverlay.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CreateOverlay({ onclick, newGroup }) {
  const [title, setTitle] = useState("Title");
  const [description, setDescription] = useState("Description");
  const [tags, setTags] = useState([]);

  //custom tag stuff
  const [tagInputDisplay, setTagInputDisplay] = useState({ display: "none" });
  const [tagDisplay, setTagDisplay] = useState([
    "Javascript",
    "Chill",
    "Design",
  ]);
  const [custom, setCustom] = useState(false);
  const [customText, setCustomText] = useState("+");
  const [customTag, setCustomTag] = useState("");

  //date stuff
  const [date, setDate] = useState(todaysDate());
  const [time, setTime] = useState(todaysTime());

  //members
  const [memberCount, setMemberCount] = useState(2);
  function getMembers(count) {
    let a = ["Alira Ivanova"];
    for (let i = 0; i < count - 1; i++) {
      a.push("");
    }
    return a;
  }
  const groupMemberValues = [2, 3, 4, 5];

  //location
  const defaultLocation = "BCIT Library";
  const [location, setLocation] = useState({
    name: defaultLocation,
    coords: getCoords(defaultLocation),
  });
  let locations = ["BCIT Library", "Burnaby Public Library", "Starbucks"];
  const [locationMap, setLocationMap] = useState(
    <Map
      centerPoint={location.coords.centerPoint}
      circlePoint={location.coords.circlePoint}
    />
  );

  useEffect(() => {
    setLocationMap(
      <Map
        centerPoint={location.coords.centerPoint}
        circlePoint={location.coords.circlePoint}
      />
    );
  }, [location]);

  function todaysTime() {
    let today = new Date();
    let minutes = "" + today.getMinutes();
    if (minutes.length < 2) minutes = "0" + minutes;
    return `${today.getHours()}:${minutes}`;
  }

  function todaysDate() {
    let today = new Date();
    let month = "" + (today.getMonth() + 1);
    let day = "" + today.getDate();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return `${today.getFullYear()}-${month}-${day}`;
  }

  const handleClick = () => {
    onclick();
    newGroup({
      title: title,
      description: description,
      tags: tags,
      time: new Date(
        parseInt(date.substring(0, 4)),
        parseInt(date.substring(5, 7)) - 1,
        parseInt(date.substring(8, 10)),
        parseInt(time.substring(0, 2)),
        parseInt(time.substring(3, 5))
      ), //YYYY, MM, DD, HOURS, MINUTES, SECONDS
      members: getMembers(memberCount),
      location: location.name,
      coords: location.coords,
    });
  };

  const selected = (tag) => {
    let a = [...tags];
    if (a.includes(tag)) {
      a.splice(a.indexOf(tag), 1);
    } else {
      a.push(tag);
    }
    setTags(a);
  };

  const handleCustomTag = () => {
    if (!custom) {
      setTagInputDisplay({ display: "inline" });
      setCustom(true);
      // setCustomText("Add");
    } else {
      setTagInputDisplay({ display: "none" });
      setCustom(false);
      // setCustomText("+");
      setTagDisplay([...tagDisplay, customTag]);
    }
  };

  function getCoords(locationName) {
    if (locationName === "BCIT Library")
      return {
        centerPoint: "49.249234265894394,-123.00899574963694",
        circlePoint: "49.24936795802063,-123.00199080213194",
      };
    if (locationName === "Burnaby Public Library")
      return {
        circlePoint: "49.22830066960166,-123.00645433238849",
        centerPoint: "49.23294399299716,-123.01548055074332",
      };
    if (locationName === "Starbucks")
      return {
        circlePoint: "49.256500573312074,-123.00687841485916",
        centerPoint: "49.25503999698177,-122.99757892021863",
      };
  }

  const [isChecked, setIsChecked] = useState(false);
  const handleRadio = (e) => {
    setMemberCount(e.currentTarget.value);
  };

  return (
    <>
      <div className={styles.overlay}>
        <motion.div
          key="create"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ scale: 0 }}
          className={styles.container}
        >
          <h2>Create Group</h2>
          <div className={styles.formBlock}>
            <span className={styles.formLabel}>Group Name</span>
            <input
              className={styles.titleInput}
              type="text"
              placeholder="Name your group"
              onChange={(e) => setTitle(e.currentTarget.value)}
            />
          </div>
          <div className={styles.formBlock}>
            <span className={styles.formLabel}>Description</span>
            <textarea
              className={styles.descriptionInput}
              placeholder="Write something about your group (Optional)"
              onChange={(e) => setDescription(e.currentTarget.value)}
            />
          </div>
          <div className={styles.formBlock}>
            <span className={styles.formLabel}>Tags</span>
            <div
              className={styles.tagsInput}
              style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}
            >
              {tagDisplay.map((value) => {
                return (
                  // <label className={styles.tag}>{value}<input className={styles.checkbox} type="checkbox" value={value} onChange={handleTags}/></label>
                  <Checkbox
                    title={value}
                    selected={selected}
                    customTag={handleCustomTag}
                  />
                );
              })}
              <input
                className={styles.tagInput}
                size={1 + customTag.length * 0.65}
                type="text"
                placeholder="Tag"
                style={tagInputDisplay}
                onChange={(e) => setCustomTag(e.currentTarget.value)}
              ></input>
              <button
                className={styles.addCustom}
                style={
                  custom
                    ? { backgroundColor: "var(--med-green)", color: "white" }
                    : null
                }
                onClick={handleCustomTag}
              >
                {customText}
              </button>
            </div>
          </div>

          <div className={styles.formBlock}>
            <span className={styles.formLabel}>Choose a location</span>
            <select
              className={styles.locationSelect}
              onChange={(e) =>
                setLocation({
                  name: e.currentTarget.value,
                  coords: getCoords(e.currentTarget.value),
                })
              }
            >
              {locations.map((location) => {
                return <option value={location}>{location}</option>;
              })}
            </select>
          </div>
          <div className={styles.formBlock}>
            <span className={styles.formLabel}>Schedule a time</span>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <input
                className={styles.dateInput}
                type="date"
                value={date}
                onChange={(e) => setDate(e.currentTarget.value)}
              />
              <input
                className={styles.timeInput}
                type="time"
                value={time}
                onChange={(e) => setTime(e.currentTarget.value)}
              />
            </div>
          </div>
          <div className={styles.formBlock}>
            <label className={styles.formLabel}>Group Members</label>
            <div className={styles.radioButtons}>
              {groupMemberValues.map((value) => {
                return (
                  <label className={styles.radioButton}>
                    {value}
                    <input
                      className={styles.radio}
                      type="radio"
                      value={value}
                      name="members"
                      onChange={handleRadio}
                    />
                  </label>
                );
              })}
            </div>
          </div>
        </motion.div>
        <Button
          text="Create group"
          size="chonky"
          bgColor="var(--light-green)"
          bgColorHover="var(--dark-green)"
          textColor="white"
          bg
          width="398px"
          onclick={handleClick}
        />
      </div>
      <div className={styles.background} onClick={onclick} />
    </>
  );
}
