import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/search/Results.module.css"
import HeadArea from "@/components/HeadArea";
import { useState, useEffect , useRef } from "react";
import { groups } from "@/data/groups";
import Image from "next/image";
import Tag from "@/components/Tag";
import GroupCard from "@/components/GroupCard";
import { useRouter } from "next/router";

import Map from "@/components/Map";

export default function Results() {
  const router = useRouter();
  const selectedSubject = router.query.subject;
  const results = router.query.search;

  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    router.push(`/search/results?search=${searchTerm}`);
  };

  const [selectedTags, setSelectedTags] = useState([]);

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

  function filter(groups) {
    const filteredGroups = groups.filter(group =>
      group.tags.includes(selectedSubject) ||
      group.tags.includes(searchTerm || results)
    );
    return filteredGroups;
  }

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
        <Header name="Search" backBtn={true}/>
        <section className={styles.searchBar}>
          <Image src='/images/icon.magnifying-glass.svg' width={21.6} height={24}/>
          <form onSubmit={handleSearchSubmit}>
            <input 
              className={styles.searchInput} 
              type="text" value={searchTerm} 
              onChange={handleSearchChange}
              placeholder="Search for tags"
            />
          </form>
        </section>
        <section className={styles.filterSection}>
          <section className={styles.filterSectionScroll} ref={sliderRef}>
            <Tag text='Outgoing' type='homeFilter' selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            <Tag text='Music' type='homeFilter' selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            <Tag text='Anime' type='homeFilter' selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            <Tag text='Coding' type='homeFilter' selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            <Tag text='Coffee' type='homeFilter' selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            <Tag text='Food' type='homeFilter' selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            <Tag text='Pizza' type='homeFilter' selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
          </section>
        </section>
        <h2 style={{margin: '32px 0', lineHeight: '150%'}}>
          Study Groups with "{selectedTags.length > 0 ? selectedTags.join(', ') : selectedSubject || searchTerm || results}"
        </h2>
        <section className={styles.searchResultsContainer}>
          {
            filter(groups).length > 0 ? (
              filter(groups).map(group => <GroupCard group={group} selectedTags={selectedTags}/>)
            ) : (
              <p style={{margin: '0', lineHeight: '150%'}}>Oops, no groups have been scheduled for this yet!</p>
            )
          }
        </section>

        {/* This is a filler section to make the bottom of page not cut off */}
        <section className={styles.bottomFiller} style={{margin: '64px 0'}}>
          <p> </p>
        </section>
        <Footer/>
      </main>
    </div>
  )
}