import styles from "styles/whatIDo.module.css";
import { Section } from "components/lv1/Section";
import { HeadingText } from "components/lv2/HeadingText";

const focusAreas = [
  // "Build data-heavy dashboards with filtering, sorting, and pagination for clear product insights.",
  // "Develop real-time features with WebSockets and event-driven flows for live, responsive experiences.",
  // "Optimize performance and rendering to keep large applications fast, stable, and scalable.",
  // "Implement SEO foundations such as metadata strategy, semantic structure, and crawl-friendly pages.",
  // "Maintain and improve production apps with debugging, refactoring, testing, and release support.",
  // "Design reusable component systems that improve consistency and speed up delivery across products.",
  "Build data-heavy dashboards with filtering, sorting, and pagination for complex product workflows.",
  "Develop real-time features using WebSockets and event-driven architecture for responsive user experiences.",
  "Optimise performance and rendering to keep large-scale applications fast and efficient.",
  "Design reusable component systems and state management patterns for scalable, maintainable codebases.",
];

export const WhatIDo = () => {
  return (
    <Section sectionStyle={styles.section} id="what-i-do">
      <div className={styles.wrapper}>
        <HeadingText heading={"What I Do"} />
        <div className={styles.grid}>
          {focusAreas.map((item) => (
            <article key={item} className={styles.card}>
              <span className={styles.dot} aria-hidden="true"></span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
};
