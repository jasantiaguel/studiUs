import Tag from "../Tag"
import styles from "./GroupInfo.module.css"

export default function GroupInfo({onclick, group}) {
    return(
        <>
            <div className={styles.container}>
                <h2>{group.title}</h2>
                <p>{group.description}</p>
                <div className={styles.tags}>
                {
                    group.tags.map((tag) => {
                        return <Tag text={tag}/>
                    })
                }
                </div>
            </div>
            <div className={styles.background} onClick={onclick}/>
        </>
    )
}