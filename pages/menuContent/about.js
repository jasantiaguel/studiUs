import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GroupCard from "@/components/GroupCard";
import Banner from "@/components/Banner";
import Tag from "@/components/Tag";
import Image from "next/image";
import { groups, schedGroups } from "@/data/groups.js";
import HeadArea from "@/components/HeadArea";
import { useState, useEffect, useRef } from "react";
import styles from "@/styles/menuContent/About.module.css";
import Button from "@/components/Button";


export default function About() {

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
      <HeadArea />
      <main className={styles.main}>
        <Header name="About" />

        <section className={styles.headerContainer}>
          <Image
            src="/images/top-rectangle.svg"
            width={430}
            height={259}
            className={styles.topRectangle}
          />
          <div className={styles.headerText}>
            <h2 className={styles.introTitle}>Welcome to</h2>
            <h1 className={styles.title}>StudiUs!</h1>
          </div>

        </section>

        <section className={styles.description1}>
          <Image
            src="/images/sitting-graphic.svg"
            width={239}
            height={152}
            className={styles.sittingGuy}
          />

          <Image
            src="/images/header-shape.svg"
            width={239}
            height={152}
            className={styles.headerShape}
          />
          <div className={styles.description1Container}>
            <p className={styles.headerTitle}>What is it?</p>
            <p className={styles.descriptionBox1}>Studius is your ultimate destination for connecting with study groups and peers to enhance your learning experience</p>
          </div>
        </section>

        <section className={styles.description2}>
          <Image
            src="/images/globe-graphic.svg"
            width={239}
            height={152}
            className={styles.globe}
          />
          <Image
            src="/images/header-shape.svg"
            width={239}
            height={152}
            className={styles.headerShape2}
          />

          <div className={styles.description2Container}>
            <p className={styles.headerTitle2}>Our Mission</p>
            <p className={styles.descriptionBox2}>StudiUs aims to make finding study groups effortless, efficient, and enjoyable for students worldwide.</p>
          </div>
        </section>


        <div className={styles.resources}>
          <h3>Resources</h3>
          <p>More information from credible sources!</p>
          <Button text="Read More" />
        </div>




        {/* <Banner 
          title3="Discover Your Perfect Study Method" 
          title1="Take Our Short Quiz" 
          buttonSpace="164px"
          buttonText="StudiUs Quiz"
          path="/quiz/home"
          bgImage="/images/home.banner-bg.png"
        /> */}


        {/* This is a filler section to make the bottom of page not cut off */}
        <section className={styles.bottomFiller} style={{ margin: '40px 0' }}>
          <p> </p>
        </section>
        <Footer />
      </main>
    </div>
  );
}
