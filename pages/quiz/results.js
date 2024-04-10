import Button from "@/components/Button";
import Link from "next/link";
import Footer from "@/components/Footer";
import HeadArea from "@/components/HeadArea";
import Header from "@/components/Header";
import styles from "@/styles/Results.module.css";

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
    let RETRIEVAL = results[1].value/total*100;
    let LEITNER = results[2].value/total*100;
    let FEYNMAN = results[3].value/total*100;

    function determineMethod() {
        let result = [QR, RETRIEVAL, LEITNER, FEYNMAN];
        let max = Math.max(...result);
        if (QR == max) return "SQ3R/PQ4R";
        if (LEITNER == max) return "Leitner";
        if (RETRIEVAL == max) return "Retrieval";
        if (FEYNMAN == max) return "Feynman";
    }

    return(
        <div className="frame">
            <HeadArea/>
            <Header/>
            <div className={styles.main}>
                <h2>{`${determineMethod()} is the most effective approach for your learning style`}</h2>
                <p>{`SQ3R/PQ4R: ${QR}%`}</p>
                <p>{`Retrieval: ${RETRIEVAL}%`}</p>
                <p>{`Leitner: ${LEITNER}%`}</p>
                <p>{`Feynman: ${FEYNMAN}%`}</p>
            </div>
            <Link href="/quiz/home"><Button text="Quiz Home"/></Link>
            <Footer/>
        </div>
    )
}