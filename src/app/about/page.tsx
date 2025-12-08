'use client';

import React from "react";
import pageStyles from "./aboutPage.module.css";
import aboutStyles from "styles/about.module.css";
import { Socials } from "components/lv3/Socials";
import mowo from "assets/images/mowo2.jpeg";
import Image from "next/image";
import Link from "next/link";
import { HeadingText } from "components/lv2/HeadingText";
import { Section } from "components/lv1/Section";
import { Footer } from "components/lv1/Footer";

export default function AboutPage() {
  return (
    <main className={pageStyles.main}>
      <div className={pageStyles.container}>
        <Section sectionStyle={aboutStyles.section} 
        // sectionHeading={<HeadingText heading={"My gist"} />}
        >
          <div className={aboutStyles.aboutTextWrapper}>
            <article className={aboutStyles.aboutText}>
              <p>
                My name is Onyemowo Akwubo (aka Mowo). I am a software developer
                specialised in a range of&nbsp;
                <Link
                  href="/#skills"
                  style={{ display: "inline" }}
                  className={aboutStyles.skillsLink}
                >
                  frontend technologies
                </Link>
                . With a focus on delivering exceptional user experiences, I
                prioritise cross-browser compatibility and employ a mobile-first
                approach to ensure responsive designs.
              </p>
              <span style={{ display: 'block', height: '20px' }}></span>
              <p>
                But hey, it&apos;s not just about the code! Beyond my professional
                commitments, I actively engage with developer communities through
                volunteering, demonstrating my dedication to continuous growth and
                community building.
              </p>
              <span style={{ display: 'block', height: '20px' }}></span>
              <p>
                Outside of work, I enjoy experimenting with various cuisines. I can
                cook up a storm and eat it too 🤭. I am an adventurous soul, always
                eager to explore new places and cultures. At work or outside of it,
                I am a delightful presence. Don&apos;t just take my word for it -
                let&apos;s connect and you can experience it first hand😀
              </p>
              <div style={{ marginTop: '30px' }}>
                <Socials />
              </div>
            </article>
            <div className={aboutStyles.imgContainer}>
              <Image
                src={mowo}
                alt="mowo's portrait"
                className={aboutStyles.img}
                priority
              />
            </div>
          </div>
        </Section>
        <div className={pageStyles.backToHome}>
          <Link href="/#about" className={pageStyles.backLink}>
            ← Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}

