import styles from "./InfoPopUp.module.css";
import { studyMethods } from "@/data/studymethods";
import { motion } from "framer-motion";

export default function InfoPopUp({methodName, onclick}) {
    let method = studyMethods.find((method) => {
        return method.name == methodName;
    })
    return(
        <>
            <motion.div
            key="info"
            initial={{y: 100}}
            animate={{y: 0}}
            exit={{scale: 0, duration: .2}}
            className={styles.container}>
                <h2>The {method.name}</h2>
                <h4>{method.sub}</h4>
                <h3>Description</h3>
                <p>{method.description}</p>
                <h3>How To Use</h3>
                <ol>
                    {
                        method.howToUse.map((point) => {
                            return <li>{`${point.point}: ${point.description}`}</li>
                        })
                    }
                </ol>
                <h3>Benefits</h3>
                <ul>
                    {
                        method.benefits.map((point) => {
                            return <li>{point}</li>
                        })
                    }
                </ul>
                <h3>Who Can Benefit</h3>
                <p>{method.whoCanBenefit}</p>
            </motion.div>
            <div className={styles.background} onClick={onclick}/>
        </>
    )
}