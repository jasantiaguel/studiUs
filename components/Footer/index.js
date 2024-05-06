import NavTab from "@/components/NavTab"
import styles from "./Footer.module.css"
import { usePathname } from "next/navigation";

export default function Footer({bdRadius, dshadow}) {

    return(
        <div className={styles.footer} style={{borderRadius: bdRadius, filter: dshadow}}>
            <NavTab 
              image="/images/icon.home-selected.svg" 
              activeImage="/images/icon.home.svg" 
              path="/"
              width={35}
              height={51}
              activeHeight={42}
            />
            <NavTab 
              image="/images/icon.search-selected.svg" 
              activeImage="/images/icon.search.svg" 
              path="/search/search"
              width={41}
              height={51}
              activeHeight={42}
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
              width={80}
              height={50}
              activeHeight={41}
            />
            <NavTab 
              image="/images/icon.profile-selected.svg" 
              activeImage="/images/icon.profile.svg" 
              path="/profile"
              width={38}
              height={51}
              activeHeight={42}
            />
        </div>
    )
}