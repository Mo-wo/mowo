import styles from "styles/hero.module.css";
import localFont from "next/font/local";
import { Socials } from "./Socials";
import Link from "next/link";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "sanity/live";
import { HeroCollaborateButton } from "./HeroCollaborateButton";


const PAGES_QUERY = defineQuery(`*[
  _type == "pages"
  && defined(page)
  && page == "home"
]|order(page asc){_id, page, job_title, tagline, projects}`
);

const detacher = localFont({
  src: "../../assets/font/detacher_regular-webfont.woff2",
});

export const Hero = async () => {
  let pages = [];
  try {
    const result = await sanityFetch({ query: PAGES_QUERY });
    pages = result?.data || [];
    console.log('pages', pages);
  } catch (error) {
    console.error("Error fetching pages from Sanity:", error);
    // Continue with empty pages array if fetch fails
  }

  return (
    <section className={styles.heroSection}>
      <div className={`${styles.bgImageStyle} ${styles.container}`}></div>
      <div className={styles.heroContent}>
        <div className={styles.intro}>
          <div style={{ display: 'flex', marginBottom: '-10px' }}>
            {/* <p className={`${styles.hello} ${"animate__animated animate__bounceIn"}`}>Hey! </p>
            <p className={styles.emoji}>👋</p>
            <p>&nbsp;It&apos;s</p> */}
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
              Frontend Engineer
            </p>
            <p
              className={`${styles.p} ${"animate__animated animate__zoomIn"}`}
            >
              {/* I create user interfaces where pixel precision
              meets exceptional user experience. */}
              {/* Half a decade of making pixels behave, I speak fluent code and client. */}
              {/* I build scalable, data-driven and real-time web applications using React and Next.js. 
              I focus on performance, maintainable state management, and reliable user experiences, 
              contributing to faster releases, improved stability, and efficient development workflows.

              I build production-ready web and mobile applications with React, Next.js, and React Native, focusing on performance, maintainability, scalability and reliable user experiences. I’ve led frontend systems from architecture to deployment, improving release speed, stability, and development efficiency across multiple products. */}

              I build scalable, data-driven and real-time applications using React and Next.js.
              I’ve led frontend development from architecture to production, focusing on performance,
              maintainability, and reliable user experiences.
            </p>
            <div className={styles.ctaContainer}>
              <Link href="#projects" className={styles.primaryCta}>
                View Projects
              </Link>
              <HeroCollaborateButton className={styles.secondaryCta} />
            </div>
          </div>
        </div>
        <div className={styles.socialsWrapper}>
          <Socials containerStyle={styles.socials} />
        </div>
      </div>
    </section>
  );
};
