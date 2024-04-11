import styles from "./InfoPopUp.module.css";
import { studyMethods } from "@/data/studymethods";

export default function InfoPopUp({methodName, onclick}) {
    let method = studyMethods.find((method) => {
        return method.name == methodName;
    })
    return(
        <div className={styles.background} onClick={onclick}>
            <div className={styles.container}>
                <h2>The {method.name}</h2>
                <h4>{method.sub}</h4>
                <h2>Description</h2>
                <p>{method.description}</p>
                <h2>How To Use</h2>
                <ol>
                    {
                        method.howToUse.map((point) => {
                            return <li>{`${point.point}: ${point.description}`}</li>
                        })
                    }
                </ol>
                <h2>Benefits</h2>
                <ul>
                    {
                        method.benefits.map((point) => {
                            return <li>{point}</li>
                        })
                    }
                </ul>
                <h2>Who Can Benefit</h2>
                <p>{method.whoCanBenefit}</p>
            </div>
        </div>
    )
}