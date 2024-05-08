import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/search/Search.module.css"
import HeadArea from "@/components/HeadArea";
import { useState , useEffect , useRef } from "react";
import { useRouter } from "next/router";
import { groups } from "@/data/groups";
import Image from "next/image";
import Tag from "@/components/Tag";
import GroupCard from "@/components/GroupCard";
import SubjectSearchCard from "@/components/SubjectSearchCard";

import Map from "@/components/Map";

export default function Search() {
  const [selectedTags, setSelectedTags] = useState([]);

  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    router.push(`/search/results?search=${searchTerm}`);
  };

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
    });
    slider.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const offset = (x - startX);
      slider.scrollLeft = scrollLeft - offset;
    });
  }, []);

  return(
    <div className="frame">
      <div className={styles.bgImage}>
        <Image 
          src="/images/topographic/graphic.topo1.svg" 
          width={1201} 
          height={961} 
          className={styles.bgTopo}
        />
      </div>
      <HeadArea/>
      <main className={styles.main}>
        <Header name="Search"/>
        <section className={styles.searchBar}>
          <Image src='/images/icon.magnifying-glass.svg' width={21.6} height={24}/>
          <form onSubmit={handleSearchSubmit}>
            <input 
              className={styles.searchInput} 
              type="text" value={searchTerm} 
              onChange={handleSearchChange}
              placeholder="Search groups with tags"
            />
          </form>
        </section>
        <section className={styles.filterSection}>
          <section className={styles.filterSectionScroll} ref={sliderRef}>
            <Tag text='Sort' type='filter' selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            <Tag text='Music' type='filter' selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            <Tag text='Anime' type='filter' selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            <Tag text='Food' type='filter' selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            <Tag text='Quiet' type='filter' selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            <Tag text='Coffee' type='filter' selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            <Tag text='Quiet' type='filter' selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            <Tag text='Quiet' type='filter' selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
          </section>
        </section>
        <h2 style={{margin: '32px 0 16px'}}>Computer & Technology</h2>
        <section className={styles.subjectSection}>
          <SubjectSearchCard title='Computer Science'/>
          <SubjectSearchCard title='Front End Development'/>
          <SubjectSearchCard title='Digital Design & Development'/>
        </section>
        <h2 style={{margin: '32px 0 16px'}}>Science</h2>
        <section className={styles.subjectSection}>
          <SubjectSearchCard title='Biology'/>
          <SubjectSearchCard title='Chemistry'/>
          <SubjectSearchCard title='Physics'/>
          <SubjectSearchCard title='Environmental Studies'/>
        </section>
        <h2 style={{margin: '32px 0 16px'}}>Mathematics</h2>
        <section className={styles.subjectSection}>
          <SubjectSearchCard title='Algebra'/>
          <SubjectSearchCard title='Calculus'/>
          <SubjectSearchCard title='Geometry'/>
        </section>
        <h2 style={{margin: '32px 0 16px'}}>Engineering</h2>
        <section className={styles.subjectSection}>
          <SubjectSearchCard title='Electrical Engineering'/>
          <SubjectSearchCard title='Mechanical Engineering'/>
          <SubjectSearchCard title='Civil Engineering'/>
        </section>
        <h2 style={{margin: '32px 0 16px'}}>More Coming Soon!</h2>

        {/* This is a filler section to make the bottom of page not cut off */}
        <section className={styles.bottomFiller} style={{margin: '48px 0'}}>
          <p> </p>
        </section>
        <Footer dshadow='4px -160px 32px #2E384D59'/>
      </main>
    </div>
  )
}