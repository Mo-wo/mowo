import React, { useState } from "react";
import styles from "styles/about.module.css";
import "animate.css";
import { Socials } from "components/Socials";
import mowo from "images/mowo2.jpeg";
import Image from "next/image";
import Link from "next/link";
import { HeadingText } from 'components/lv2/HeadingText';

export const About = () => {
  const [expand, setExpand] = useState<boolean>(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <section className={styles.section} id="about">
      <div className={styles.aboutTextWrapper}>
        <HeadingText heading={'My gist'} />
        <article className={expand ? styles.aboutText : styles.aboutTextClose}>
          My name is Onyemowo Akwubo (aka Mowo). I am a software developer
          specialised in a range of{" "}
          <Link
            href="#skills"
            style={{ display: "inline" }}
            className={styles.skillsLink}
          >
            frontend technologies
          </Link>
          . With a focus on delivering exceptional user experiences, I
          prioritise cross-browser compatibility and employ a mobile-first
          approach to ensure responsive designs.
          <span
            onClick={handleExpand}
            className={expand ? styles.hide : `${styles.show} ${styles.expand}`}
          >
            See More...
          </span>
          <p className={expand ? styles.show : styles.hide}>
            <br />
            <br />
            But hey, it's not just about the code! Beyond my professional
            commitments, I actively engage with developer communities through
            volunteering, demonstrating my dedication to continuous growth and
            community building.{" "}
          </p>
          <p className={expand ? styles.show : styles.hide}>
            <br />
            <br />
            Outside of work, I enjoy experimenting with various cuisines. I can
            cook up a storm and eat it too 🤭. I am an adventurous soul, always
            eager to explore new places and cultures. At work or outside of it,
            I am a delightful presence. Don't just take my word for it {
              "-"
            }{" "}
            let's connect and sprinkle some fun into our life and tech journey
            together😀
          </p>
          <span
            onClick={handleExpand}
            className={
              expand
                ? `${styles.show} ${styles.expand}`
                : `${styles.hide} ${styles.hideLessText}`
            }
          >
            See Less
          </span>
          <div
            className={
              expand
                ? `${styles.show} ${styles.socials}`
                : `${styles.hide} ${styles.hideSocials}`
            }
          >
            <Socials containerStyle={styles.socialsWrapper} />
          </div>
        </article>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src={mowo}
          alt="mowo's portrait"
          className={styles.img}
          priority
        />
      </div>
    </section>
  );
};
