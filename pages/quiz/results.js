import Footer from "@/components/Footer";
import HeadArea from "@/components/HeadArea";
import Header from "@/components/Header";
import styles from "@/styles/Results.module.css";

import { useRouter } from "next/router";

export default function Results() {
    const router = useRouter();
    try {
        const results = JSON.parse(decodeURIComponent(router.query.results));
        console.log(results);
    }
    catch {
        console.log("No data. Restart quiz.");
    }
    return(
        <div className="frame">
            <HeadArea/>
            <Header/>
            <div className={styles.main}>
                {}
            </div>
            <Footer/>
        </div>
    )
}