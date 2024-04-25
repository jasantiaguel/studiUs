import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./NavTab.module.css";

export default function NavTab({ image, activeImage, path }) {
    const currentPage = (usePathname() == path);


    return (
        <Link href={path} className={styles.container}>
            {
                currentPage ?
                <Image src={image} width={50} height={41} className={styles.icon}/>:
                <Image src={activeImage} width={50} height={50} className={styles.icon}/>
            }
        </Link>
    )
}

