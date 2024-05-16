import { usePathname } from "next/navigation"
import Button from "../Button"
import Map from "../Map"
import Tag from "../Tag"
import styles from "./GroupInfo.module.css"
import {motion, AnimatePresence} from "framer-motion"

export default function GroupInfo({onclick, group, todo=null, returnGroup=null, day, time}) {
    const path = usePathname();
    const leaveGroup = () => {
        todo && todo();
    }
    returnGroup && returnGroup(group);

    return(
        <>
            <div className={styles.overlay}>
                <motion.div
                key="overlay"
                initial={{y: 100}}
                animate={{y: 0}}
                exit={{scale: 0}}
                className={styles.container}>
                    <h2 className={styles.title}>{group.title}</h2>
                    <p>{group.description}</p>
                    <div className={styles.tags}>
                    {
                        group.tags.map((tag) => {
                            return <Tag text={tag}/>
                        })
                    }
                    </div>
                    <Map centerPoint={group.coords.centerPoint} circlePoint={group.coords.circlePoint}/>
                    <p><span style={{fontWeight: "var(--font-weight-bold"}}>{group.location}</span> {day}, {time}</p>
                    <h3>Members</h3>
                    <ul>
                        {
                            group.members.map((member) => {
                                return(
                                    <div className={styles.member}>
                                        <div className={styles.pfp} style={{backgroundImage: member == "" ? "url('/images/icons/icon.profile-large-non.svg')":"url('/images/icons/icon.profile-large.svg')"}}/>
                                        <p>{member}</p>
                                    </div>
                                )
                            })
                        }
                    </ul>
                </motion.div>
                {
                    path === "/groups" ?
                    <Button onclick={leaveGroup} text="Leave Group" width="398px" size="chonky" bgColor="var(--med-red)" bgColorHover="var(--bold-red)"/>:
                    <Button onclick={leaveGroup} text="Join Group" width="398px" size="chonky" bgColor="var(--med-blue)" bgColorHover="var(--bold-blue)"/>
                }
            </div>
        <div className={styles.background} onClick={onclick}/>
        </>
    )
}