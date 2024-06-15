import React, { useState } from "react";
import Image from "next/image";
import styles from "styles/skills.module.css";
import "animate.css";
import { HeadingText } from 'components/lv2/HeadingText';
import css from "images/tech/css.png";
import html from "images/tech/html.png";
import javascript from "images/tech/javascript.png";
import react from "images/tech/reactjs.png";
import tailwind from "images/tech/tailwind.png";
import typescript from "images/tech/typescript.png";
import git from "images/tech/git.png";
import github from "images/tech/github2.png";
import gitlab from "images/tech/gitlab.png";
import mui from "images/tech/mui.png";
import next from "images/tech/nextjs.jpeg";
import expo from "images/tech/expo.png";
import jest from "images/tech/jest.svg";
import sonar from "images/tech/sonar.png";
import rtl from "images/tech/rtl.png";
import slack from "images/tech/slack.png";
import trello from "images/tech/trello.png";
import notion from "images/tech/notion.png";
import vercel from "images/tech/vercel.jpeg";
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
