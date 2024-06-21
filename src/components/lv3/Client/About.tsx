import React, { useState } from "react";
import styles from "styles/about.module.css";
import "animate.css";
import { Socials } from "components/lv3/Socials";
import mowo from "images/mowo2.jpeg";
import Image from "next/image";
import Link from "next/link";
import { HeadingText } from "components/lv2/HeadingText";
import { Section } from "components/lv1/Section";

export const About = () => {
  const [expand, setExpand] = useState<boolean>(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <Section sectionStyle={styles.section} id="about" sectionHeading={<HeadingText heading={"My gist"} />}>
      <div className={styles.aboutTextWrapper}>
        <article className={expand ? styles.aboutText : styles.aboutTextClose}>
          <p>My name is Onyemowo Akwubo (aka Mowo). I am a software developer
          specialised in a range of&nbsp;
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
          </p>
          <span
            onClick={handleExpand}
            className={expand ? styles.hide : `${styles.show} ${styles.expand}`}
          >
            See More...
          </span>
          <p style={{marginTop: '20px'}} className={expand ? styles.show : styles.hide}>
            But hey, it&apos;s not just about the code! Beyond my professional
            commitments, I actively engage with developer communities through
            volunteering, demonstrating my dedication to continuous growth and
            community building.
          </p>
          <p style={{marginTop: '20px'}} className={expand ? styles.show : styles.hide}>
            Outside of work, I enjoy experimenting with various cuisines. I can
            cook up a storm and eat it too 🤭. I am an adventurous soul, always
            eager to explore new places and cultures. At work or outside of it,
            I am a delightful presence. Don&apos;t just take my word for it -
            let&apos;s connect and you can experience it first hand😀
            {/* connect and sprinkle some fun into our life and tech */}
            {/* journey together */}
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
        <div className={styles.imgContainer}>
          <Image
            src={mowo}
            alt="mowo's portrait"
            className={styles.img}
            priority
          />
        </div>
      </div>
    </Section>
  );
};
