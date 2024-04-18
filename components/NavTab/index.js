import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./NavTab.module.css";

export default function NavTab({ image, activeImage, path }) {
    const currentPage = (usePathname() == path);


    return (
        <div className={styles.container}>
            <Link href={path}>
                {
                    currentPage ?
                    <Image src={image} width={32} height={32} className={styles.icon}/>:
                    <Image src={activeImage} width={32} height={32} className={styles.icon}/>
                }
            </Link>
        </div>
    )
}

