import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from "@/styles/Profile.module.css";

export default function profile() {
    return (
        <div className="frame">
            <Header />
            <div className={styles.main}
                >profile
            </div>
            <Footer />
        </div>

    )
}
