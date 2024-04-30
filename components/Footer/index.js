import NavTab from "@/components/NavTab"
import styles from "./Footer.module.css"
import { usePathname } from "next/navigation";

export default function Footer({bdRadius}) {

    return(
        <div className={styles.footer} style={{borderRadius: bdRadius}}>
            <NavTab 
              image="/images/icon.home-selected.svg" 
              activeImage="/images/icon.home.svg" 
              path="/"
              width={35}
              height={50}
              activeHeight={41}
            />
            <NavTab 
              image="/images/icon.search-selected.svg" 
              activeImage="/images/icon.search.svg" 
              path="/search"
              width={41}
              height={50}
              activeHeight={41}
            />
            <NavTab 
              image="/images/icon.groups-selected.svg" 
              activeImage="/images/icon.groups.svg" 
              path="/groups"
              width={42}
              height={50}
              activeHeight={41}
            />
            <NavTab 
              image="/images/icon.quiz-selected.svg" 
              activeImage="/images/icon.quiz.svg" 
              path="/quiz/home"
              width={50}
              height={50}
              activeHeight={41}
            />
            <NavTab 
              image="/images/icon.profile-selected.svg" 
              activeImage="/images/icon.profile.svg" 
              path="/profile"
              width={38}
              height={50}
              activeHeight={41}
            />
        </div>
    )
}