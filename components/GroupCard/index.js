import styles from "./GroupCard.module.css";

export default function Card({title, description, tags}) {
    return(
        <div className={styles.main}>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className={styles.tags}>
                {
                    tags.map((tag) => {
                        return <p>{tag}</p>
                    })
                }
            </div>
        </div>
    )
}