import React, { useState } from "react";
import styles from "styles/skills.module.css";
import "animate.css";
import { HeadingText } from 'components/lv2/HeadingText';
import css from "images/css.png";
import html from "images/html.png";
import javascript from "images/javascript.png";
import react from "images/reactjs.png";
import tailwind from "images/tailwind.png";
import typescript from "images/typescript.png";
import git from "images/git.png";
import github from "images/github.png";
import gitlab from "images/gitlab.png";
import mui from "images/mui.png";
import next from "images/nextjs.jpeg";
import expo from "images/expo.png";
import jest from "images/jest.svg";
import sonar from "images/sonar.png";
import rtl from "images/rtl.png";
import slack from "images/slack.png";
import trello from "images/trello.png";
import notion from "images/notion.png";
import vercel from "images/vercel.jpeg";

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
    {name: 'Trello', icon: trello},
    {name: 'Notion', icon: notion},

  ]

  return (
    <section className={styles.section} id="skills">
      <div className={styles. skillsContainer}>
      <HeadingText heading={'Tech stack'} />
        <div className={styles.skillsWrapper}>
        {technologies.map((technology) => (
          <div key={technology.name} className={styles.skills}>
            <img src={technology.icon.src} alt={`${technology.name}-icon`} className={styles.icon} />
            <p className={styles.text}>{technology.name}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};
