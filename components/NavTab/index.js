import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./NavTab.module.css";

export default function NavTab({image, path}) {
    const currentPage = (usePathname() == path);
    
    return(
        <Link href={path} className={currentPage ? styles.currentTab : styles.tab}>
            <Image src={image} width={32} height={32}/>
        </Link>
    )
}