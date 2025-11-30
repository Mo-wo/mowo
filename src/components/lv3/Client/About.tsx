import React from "react";
import styles from "styles/about.module.css";
import mowo from "assets/images/mowo2.jpeg";
import Image from "next/image";
import Link from "next/link";
import { HeadingText } from "components/lv2/HeadingText";
import { Section } from "components/lv1/Section";

export const About = () => {
  return (
    <Section sectionStyle={styles.section} id="about" sectionHeading={<HeadingText heading={"My Gist"} />}>
      <div className={styles.aboutTextWrapper}>
        <article className={styles.aboutText}>
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
          <Link
            href="/about"
            className={styles.continue}
          >
            Continue...
          </Link>
          
          
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
