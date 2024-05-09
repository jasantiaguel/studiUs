import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./NavTab.module.css";

export default function NavTab({ image, activeImage, path, width, height, activeHeight }) {
    const currentPage = (usePathname() == path);


    return (
        <Link href={path} className={styles.container}>
          {
            currentPage ?
            <Image src={image} width={width} height={height} className={styles.icon}/>:
            <Image src={activeImage} width={width} height={activeHeight} className={styles.activeIcon}/>
          }
        </Link>
    )
}

