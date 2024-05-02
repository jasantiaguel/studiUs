import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Button from "@/components/Button";

import styles from "@/styles/Quiz.module.css";
import Link from "next/link";
import HeadArea from "@/components/HeadArea";

import { studyMethods } from "@/data/studymethods";
import PopupButton from "@/components/PopupButton";

export default function Quiz() {    
    return(
        <div className="frame">
            <HeadArea/>
            <div className={styles.main}>
                <Header name="Methods"/>
                <div className={styles.top}>
                    <Image src="/images/img.studymethods.svg" width={150} height={186}/>
                    <div className={styles.methodsBanner}>
                        <h2>Trouble Studying?</h2>
                        <p>Take our quiz and find what study method works best for you!</p>
                        <Link href="./questions">
                            <Button text={"Start Quiz"} size="chonky"/>
                        </Link>
                    </div>
                </div>
                <h2>Study Methods</h2>
                <div className={styles.studyMethods}>
                {
                    studyMethods.map((method) => {
                        return <PopupButton methodName={method.name}/>
                    })
                }
                </div>
                <div className={styles.resources}>
                    <h3>Resources</h3>
                    <p>More information from credible sources!</p>
                    <Button text="Read More"/>
                </div>

                {/* This is a filler section to make the bottom of page not cut off */}
                <section className={styles.bottomFiller} style={{margin: '120px 0'}}>
                <p> </p>
                </section>
            </div>
            <Footer/>
        </div>
    )
}