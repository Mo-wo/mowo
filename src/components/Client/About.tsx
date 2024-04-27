import React, { useState } from "react";
import styles from "styles/about.module.css";
import "animate.css";
import { Socials } from "components/Socials";
import girl from "images/8762097.jpg";
import Image from "next/image";

export const About = () => {
  const [expand, setExpand] = useState<boolean>(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <section className={styles.section}>
      {/* <div className={styles.wrapper}> */}
      {/* <div className={styles.aboutTextWrapper}> */}
      <div
        className={
          expand ? styles.aboutTextWrapper : styles.aboutTextWrapperClose
        }
      >
        <h2>
          <span className={styles.coloured}>A</span>bout me.
        </h2>
        <article className={expand ? styles.aboutText : styles.aboutTextClose}>
          My name is Onyemowo Akwubo (aka Mowo). I am a software developer
          specialised in a range of frontend technologies which includes React,
          React Native, TypeScript, Next.js, and Material-UI. With a focus on
          delivering exceptional user experiences, I prioritise cross-browser
          compatibility and employ a mobile-first approach to ensure responsive
          designs. 
          
          But hey, it's not just about the code! In addition to my technical expertise, I uphold core values
          of integrity, honesty, and teamwork. I thrive in collaborative
          environments, building positive relationships with colleagues and
          stakeholders to drive successful projects. Beyond my professional
          commitments, I actively engage with developer communities through
          volunteering, demonstrating my dedication to continuous growth and community buildng . 
          
          Outside of work, I enjoy experimenting with various cuisines. I can
          cook up a storm and eat it too 🤭. I am an adventurous soul, always
          eager to explore new places and cultures. At work or outside of it, I
          am a delightful presence. Don't just take my word for it {'-'} let's
          connect and sprinkle some fun into our life and tech journey together
          {/* <p onClick={handleExpand} className={expand ? styles.expand : styles.expandClose}>{expand ? "See Less..." : "See More..."}</p> */}
        </article>
        <div className={styles.socials}>
          <Socials />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src={girl}
          alt=""
          style={{ width: "auto", height: "auto" }}
          className={styles.img}
        />
      </div>
      {/* </div> */}
    </section>
  );
};
