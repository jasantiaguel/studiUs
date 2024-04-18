import NavTab from "@/components/NavTab"
import styles from "./Footer.module.css"

export default function Footer() {
    return(
        <div className={styles.footer}>
            <NavTab image="/images/icon.home.svg" activeImage="/images/icon.home-selected.svg" path="/"/>
            <NavTab image="/images/icon.search.svg" activeImage="/images/icon.search-selected.svg" path="/search"/>
            <NavTab image="/images/icon.groups.svg" activeImage="/images/icon.groups-selected.svg" path="/groups"/>
            <NavTab image="/images/icon.quiz.svg" activeImage="/images/icon.quiz-selected.svg" path="/quiz/home"/>
            <NavTab image="/images/icon.profile.svg" activeImage="/images/icon.profile-selected.svg" path="/profile"/>
        </div>
    )
}