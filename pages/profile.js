import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from "@/styles/Profile.module.css";
import Image from "next/image";
import Button from "@/components/Button";
import HeadArea from '@/components/HeadArea';
import Tag from '@/components/Tag';
import SubjectSearchCard from '@/components/SubjectSearchCard';

export default function profile() {
    return (
        <div className="frame">
            <div className={styles.bgImage}>
                <Image 
                    src="/images/topographic/graphic.topo4.svg" 
                    width={755} 
                    height={1095} 
                    className={styles.bgTopo}
                />
            </div>
            <HeadArea/>
            <div className={styles.main}>
                <section className={styles.profileSection}>
                    <Header name='ㅤ' bgColor='var(--bright-af)'/>
                    {/* Replace below with profile photo */}
                    <div style={{
                        backgroundImage: "url('/images/profile.alira-photo.png')", 
                        backgroundPosition: "center",
                        width: "74px", 
                        height: "74px", 
                        borderRadius: "74px",
                        margin: '-72px 0 0',
                        zIndex: '1',
                        }}>
                    </div>
                    <h1 style={{
                        fontSize: 'var(--large-title)',
                        margin: '16px 0 0'
                    }}>
                        Alira Ivanova
                    </h1>
                    <p style={{margin: '0'}}>BCIT</p>
                    <p style={{margin: '0'}}>Digital Design & Development</p>
                    <p style={{margin: '8px 0 0', color: 'var(--med-green)'}}>She/Her - It's a beautiful day to code!</p>
                    <section className={styles.profileTags}>
                        <Tag text="UI/UX" type="profileTag"/>
                        <Tag text="JavaScript" type="profileTag"/>
                        <Tag text="Russian" type="profileTag"/>
                        <Tag text="Coffee" type="profileTag"/>
                    </section>
                </section>
                <h2 style={{margin: '32px 0 16px', width: '398px'}}>Study Hours</h2>
                <section className={styles.studyHourSection}>
                    {/* Replace below with graph */}
                    <div style={{
                        backgroundImage: "url('/images/card.study-time.svg')",
                        width: "398px", 
                        height: "204px", 
                        borderRadius: "16px",
                        }}>
                    </div>
                </section>
                <h2 style={{margin: '32px 0 16px', width: '398px'}}>Top Subjects</h2>
                <section className={styles.topSubjectsSection}>
                    <SubjectSearchCard title='Computer Science'/>
                    <SubjectSearchCard title='Front End Development'/>
                </section>

                {/* This is a filler section to make the bottom of page not cut off */}
                <section className={styles.bottomFiller} style={{margin: '88px 0'}}>
                <p> </p>
                </section>
            </div>
            <div className={styles.navbarButtons}>
                    <Button 
                        text="Edit Profile" 
                        size="chonky2" 
                        width="191px"
                    />
                    <Button 
                        text="Log Out" 
                        size="chonky2" 
                        width="191px"
                        bgColor='var(--bright-blue)'
                    />
                </div>
            <Footer bdRadius='0' dshadow='drop-shadow(var(--drop-shadow-4-80-32))'/>
        </div>
    )
}
