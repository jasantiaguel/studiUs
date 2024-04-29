import Button from "@/components/Button";
import Link from "next/link";
import Footer from "@/components/Footer";
import HeadArea from "@/components/HeadArea";
import Header from "@/components/Header";
import styles from "@/styles/Results.module.css";
import PieChart from "@/components/Graph";

import { useRouter } from "next/router";

export default function Results() {
    const router = useRouter();
    const results = JSON.parse(router.query.results);
    let total = 0;
    results.forEach((result) => {
        total += result.value;
    })

    //percentages
    let QR = results[0].value/total*100;
    let LEITNER = results[1].value/total*100;
    let RETRIEVAL = results[2].value/total*100;
    let FEYNMAN = results[3].value/total*100;

    function determineMethod() {
        let result = [QR, RETRIEVAL, LEITNER, FEYNMAN];
        let max = Math.max(...result);
        if (QR == max) return {method: "SQ3R/PQ4R", percentage: QR};
        if (LEITNER == max) return {method: "Leitner", percentage: LEITNER};
        if (RETRIEVAL == max) return {method: "Retrieval", percentage: RETRIEVAL};
        if (FEYNMAN == max) return {method: "Feynman", percentage: FEYNMAN};
    }

    let winner = determineMethod();

    return(
        <div className="frame">
            <HeadArea/>
            <div className={styles.main}>
                <div className={styles.quizHeader}>
                    <h1 className={styles.headerText}>StudiUs Quiz</h1>
                </div>
                <h2 className={styles.header}>{`${winner.method} is the most effective approach for your learning style`}</h2>
                <h4>{`${winner.percentage}% of your answers corresponded to ${winner.method}`}</h4>
                <p>Here is a summary of your results:</p>
                {/* <div className={styles.resultsDisplay}>
                    {
                        results.map((result) => {
                            return(
                                <div className={styles.block}>
                                    <p>{result.name}</p>
                                    <p>{`${result.value/total*100}%`}</p>
                                </div>
                            )
                        })
                    }
                </div> */}
                <PieChart results={results}/>
            </div>
            <Link href="/quiz/home"><Button text="Quiz Home"/></Link>
            <Footer/>
        </div>
    )
}