import NavTab from "@/components/NavTab"
import styles from "./Footer.module.css"

export default function Footer({bdRadius}) {
    return(
        <div className={styles.footer} style={{borderRadius: bdRadius}}>
            <NavTab image="/images/icon.home-selected.svg" activeImage="/images/icon.home.svg" path="/"/>
            <NavTab image="/images/icon.search-selected.svg" activeImage="/images/icon.search.svg" path="/search"/>
            <NavTab image="/images/icon.groups-selected.svg" activeImage="/images/icon.groups.svg" path="/groups"/>
            <NavTab image="/images/icon.quiz-selected.svg" activeImage="/images/icon.quiz.svg" path="/quiz/home"/>
            <NavTab image="/images/icon.profile-selected.svg" activeImage="/images/icon.profile.svg" path="/profile"/>
        </div>
    )
}