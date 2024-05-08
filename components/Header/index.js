import styles from "./Header.module.css";
import Menu from "@/components/Menu";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Header({ name , bgColor , backBtn }) {
    const router = useRouter();

    return(
        <div style={{backgroundColor: bgColor}} className={styles.header}>
            <div className={styles.titleContainer}>
                {backBtn && (
                    <Image 
                        src='/images/icons/icon.back-arrow.svg' 
                        width={44} 
                        height={41} 
                        onClick={() => router.back()}
                    />
                )}
                <h2 className={styles.headerFont}>
                    {name}
                </h2>
            </div>
            <Menu/>
        </div>
    )
}