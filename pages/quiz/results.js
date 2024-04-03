import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "@/styles/Results.module.css";

import { useRouter } from "next/router";

export default function Results() {
    const router = useRouter();
    const {method} = router.query;
    
    return(
        <div className="frame">
            <Header/>
            <div className={styles.main}>
                {method}
            </div>
            <Footer/>
        </div>
    )
}