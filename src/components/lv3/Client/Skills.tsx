import React, { useState } from "react";
import Image from "next/image";
import styles from "styles/skills.module.css";
import "animate.css";
import { HeadingText } from 'components/lv2/HeadingText';
import css from "assets/images/tech/css.png";
import html from "assets/images/tech/html.png";
import javascript from "assets/images/tech/javascript.png";
import react from "assets/images/tech/reactjs.png";
import tailwind from "assets/images/tech/tailwind.png";
import typescript from "assets/images/tech/typescript.png";
import git from "assets/images/tech/git.png";
import github from "assets/images/tech/github2.png";
import gitlab from "assets/images/tech/gitlab.png";
import mui from "assets/images/tech/mui.png";
import next from "assets/images/tech/nextjs.jpeg";
import expo from "assets/images/tech/expo.png";
import jest from "assets/images/tech/jest.svg";
import sonar from "assets/images/tech/sonar.png";
import rtl from "assets/images/tech/rtl.png";
import slack from "assets/images/tech/slack.png";
import trello from "assets/images/tech/trello.png";
import notion from "assets/images/tech/notion.png";
import vercel from "assets/images/tech/vercel.jpeg";
import { Section } from "components/lv1/Section";

export const Skills = () => {
  const [expand, setExpand] = useState<boolean>(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  const technologies = [
    {name: 'HTML5', icon: html},
    {name: 'CSS3', icon: css},
    {name: 'JavaScript', icon: javascript},
    {name: 'Typescript', icon: typescript},
    {name: 'TailwindCSS', icon: tailwind},
    {name: 'Material-UI', icon: mui},
    {name: 'React', icon: react},
    {name: 'Expo', icon: expo},
    {name: 'React Native', icon: react},
    {name: 'Next', icon: next},
    {name: 'Git', icon: git},
    {name: 'Github', icon: github},
    {name: 'Gitlab', icon: gitlab},
    {name: 'Jest', icon: jest},
    {name: 'SonarQube', icon: sonar},
    {name: 'Testing Library', icon: rtl},
    {name: 'Vercel', icon: vercel},
    {name: 'Slack', icon: slack},
    {name: 'Notion', icon: notion},
    {name: 'Trello', icon: trello}

  ]

  return (
    <Section sectionStyle={styles.section} id="skills" sectionHeading={<HeadingText heading={'Tech stack'} />}>
      <div className={styles. skillsContainer}>
        <div className={expand ? styles.skillsWrapper : `${styles.skillsWrapper} ${styles.skillsWrapperClose}`}>
        {technologies.map((technology) => (
          <div key={technology.name} className={styles.skills}>
            <img src={technology.icon.src} alt={`${technology.name}-icon`} className={styles.icon} />
            <p className={styles.text}>{technology.name}</p>
          </div>
        ))}
        </div>
        <span
            onClick={handleExpand}
            className={styles.expand}
          >
            {expand ? 'See Less' : 'See More...'}
          </span>
      </div>
    </Section>
  );
};
