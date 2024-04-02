import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Button from "@/components/Button";

import styles from "@/styles/Quiz.module.css";
import Link from "next/link";

export default function Quiz() {
    return(
        <div className="frame">
            <Header/>
            <div className={styles.main}>
                <div className={styles.top}>
                    <Image src="/" width={50} height={50}/>
                    <div>
                        <h1>Trouble Studying?</h1>
                        <p>Take our quiz and find what study method works best for you!</p>
                        <Link href="./questions">
                            <Button text={"Start Quiz"}/>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}