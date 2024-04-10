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
            <Header/>
            <div className={styles.main}>
                <div className={styles.top}>
                    <Image src="/" width={50} height={50}/>
                    <div>
                        <h2>Trouble Studying?</h2>
                        <p>Take our quiz and find what study method works best for you!</p>
                        <Link href="./questions">
                            <Button text={"Start Quiz"}/>
                        </Link>
                    </div>
                </div>
                {
                    studyMethods.map((method) => {
                        return <PopupButton method={method}/>
                    })
                }
            </div>
            <Footer/>
        </div>
    )
}