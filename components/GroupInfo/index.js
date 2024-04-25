import { usePathname } from "next/navigation"
import Button from "../Button"
import Map from "../Map"
import Tag from "../Tag"
import styles from "./GroupInfo.module.css"

export default function GroupInfo({onclick, group, function}) {
    const path = usePathname();

    return(
        <>
        <div className={styles.overlay}>
            <div className={styles.container}>
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
                <p><span style={{fontWeight: "var(--font-weight-bold"}}>{group.location}</span> {group.time.day}, {group.time.time}</p>
                <h3>Members</h3>
                <ul>
                    {
                        group.members.map((member) => {
                            return(
                                <div className={styles.member}>
                                    <div className={styles.pfp}/>
                                    <p>{member}</p>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
            {
                path === "/groups" ?
                <Button text="Leave Group" width="398px" size="chonky" bgColor="var(--med-red)" bgColorHover="var(--bold-red)"/>:
                <Button text="Join Group" width="398px" size="chonky" bgColor="var(--med-blue)" bgColorHover="var(--bold-blue)"/>
            }
        </div>
        <div className={styles.background} onClick={onclick}/>
        </>
    )
}