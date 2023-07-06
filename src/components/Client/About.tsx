import React, { useRef } from 'react'
import styles from "styles/about.module.css";
import "animate.css";
import { Section } from 'components/Section';
import bgAbout from "images/bgAbout.jpeg";


export const About = () => {
  return (
    <Section url={bgAbout} bgImageStyle={styles.bgContainer} sectionStyle={styles.aboutSection}>
      <div className={styles.aboutTextWrapper}>
        <h2>About</h2>
        <article className={styles.aboutText}>
          I am an exceptional frontend developer, specialised in technologies such as React, React Native, Typescript, Next.js, Material-UI amongst others. My approach to frontend development emphasizes cross-browser compatibility and the adoption of mobile-first approach for responsive design. My dedication to professional growth extends beyond my individual work, as I actively participate in developer communities through volunteeing.
        </article>
      </div>
      {/* <div className={styles.aboutImg}></div> */}
  </Section>
  );
};
