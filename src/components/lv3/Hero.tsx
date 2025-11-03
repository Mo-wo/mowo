'use client'
import React from "react";
import styles from "styles/hero.module.css";
import "animate.css";
import localFont from "next/font/local";
import { Socials } from "./Socials";
import { Projects } from "./Client/Projects";

const detacher = localFont({
  src: "../../asset/font/detacher_regular-webfont.woff2",
});

export const Hero = () => {

  return (
    <section className={styles.heroSection}>
      <div className={`${styles.bgImageStyle} ${styles.container}`}></div>
      <div className={styles.heroContent}>
        <div className={styles.intro}>
          <div style={{display: 'flex', marginBottom: '-10px'}}>
          <p className={`${styles.hello} ${"animate__animated animate__bounceIn"}`}>Hey! </p>
          <p className={styles.emoji}>👋</p>
          <p>&nbsp;It&apos;s</p>
          </div>
          <h1 className={`${styles.h1} ${detacher.className}`}>
            <span className={styles.letter}>M</span>
            <span className={styles.letter}>o</span>
            <span className={styles.letter}>w</span>
            <span className={styles.letter}>o</span>
          </h1>
          <div>
            <p
              className={`${styles.p1
                } ${"animate__animated animate__zoomIn"}`}
            >
              Software Developer
            </p>
            <p
              className={`${styles.p} ${"animate__animated animate__zoomIn"}`}
            >
              I create user interfaces where pixel precision
              meets exceptional user experience.
            </p>
          </div>
        </div>
        <div className={styles.socialsWrapper}>
            {/* <div
                className={`${"animate__animated animate__slideInLeft"} ${
                  styles.contactWrapper
                } `}
              >
                <p>Get In Touch</p>
              </div> */}

            <Socials containerStyle={styles.socials} />
        </div>
      <Projects />
      </div>
    </section>
  );
};
