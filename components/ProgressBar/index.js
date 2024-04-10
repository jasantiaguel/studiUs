import styles from "./ProgressBar.module.css";

export default function ProgressBar({progress, length}) {
    const filled = {backgroundColor: "darkgray"};
    let steps = [];
    for (let i=0; i<length; i++) {
        steps.push(i);
    }
    
    return(
        <div className={styles.progressBar}>
            {
                steps.map((value) => {
                    return <div className={styles.node} style={progress >= value ? filled : null}/>
                })
            }
        </div>
    )
}