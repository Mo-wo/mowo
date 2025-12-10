import React from "react";
import styles from "styles/about.module.css";
import mowo from "assets/images/mowo2.jpeg";
import Image from "next/image";
import Link from "next/link";
import { HeadingText } from "components/lv2/HeadingText";
import { Section } from "components/lv1/Section";

export const About = () => {
  return (
    <Section sectionStyle={styles.section} id="about">
      <div className={styles.aboutTextWrapper}>
        <article className={styles.aboutText}>
          <HeadingText heading={"My Gist"} />
          {/* <p>My name is Onyemowo Akwubo (aka Mowo). I am a software developer
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
            Read more...
          </Link> */}
          {/* I turn designs into pixel-perfect, accessible interfaces and channel my spare time into growing up tech communities. 
          I’m Mowo, a cross-platform frontend developer who works where logic bends toward creativity and where solo effort amplifies collective progress. I’m obsessed with performance, allergic to unnecessary friction, and wired to solve problems before they grow teeth. My aim? To build digital experiences that don’t just function—they feel intentional, inclusive, and consistently smooth on every device.</p> <p>But the code is only half the story. */}
          <p>
            I&apos;m Onyemowo Victoria Akwubo, a Front-End Developer with half a
            decade of building digital experiences across industries as
            wide-ranging as sports, fintech, hospitality, culture, blockchain,
            and social applications. My journey has taken me through companies
            where I&apos;ve led front-end development for 10+ web and mobile
            applications, engineered 100+ reusable components, implemented
            design systems that cut development time by 30%, and consistently
            delivered high-quality code backed by comprehensive test coverage.
          </p>


          <p>
            But beyond frameworks, performance optimisations, and clean
            architecture, my story didn&apos;t start with code. It started in the
            kitchen.
            <Link href="/about" className={styles.continue}>
              Read more...
            </Link>
          </p>
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
