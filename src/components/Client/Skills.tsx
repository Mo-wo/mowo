import React, { useState } from "react";
import styles from "styles/skills.module.css";
import "animate.css";
import { HeadingText } from 'components/lv2/HeadingText';
import BallCanvas from './Ball';
import css from "images/css.png";
import html from "images/html.png";
import javascript from "images/javascript.png";
import react from "images/reactjs.png";
import tailwind from "images/tailwind.png";
import typescript from "images/typescript.png";
import git from "images/git.png";
import mui from "images/mui.png";
import rn from "images/rn.png";

export const Skills = () => {
  const [expand, setExpand] = useState<boolean>(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  const technologies = [
    {name: 'HTML5', icon: html},
    // {name: 'CSS3', icon: css},
    // {name: 'JavaScript', icon: javascript},
    // {name: 'Typescript', icon: typescript},
    // {name: 'TailwindCSS', icon: tailwind},
    // {name: 'MUI', icon: mui},
    // {name: 'React', icon: react},
    // {name: 'React Native', icon: rn},
    // {name: 'Expo', icon: html},
    // {name: 'Next', icon: html},
    // {name: 'Git', icon: git},
    // {name: 'Github', icon: html},
    // {name: 'Gitlab', icon: html},
    // {name: 'Jest', icon: html},
    // {name: 'SonarQube', icon: html},
    // {name: 'React Testing Library', icon: html},
  ]

  return (
    <section className={styles.section} id="skills">
      <div className={styles. skillsContainer}>
      <HeadingText heading={'Tech stack'} />
        <div className={styles.skillsWrapper}>
        {technologies.map((technology) => (
          <div key={technology.name} className={styles.skills}>
            <BallCanvas icon={technology.icon} text={technology.name} />
            {/* <Image src={technology.icon} alt=""/> */}
          </div>
        ))}
        </div>
      {/* {technologies.map((technology, index) => (
          <div key={index.toString()} className={styles.techWrapper}>
            <p>{technology.name}</p>
            {/* <BallCanvas icon={technology.icon} />
          </div>
        ))} */}
      </div>
    </section>
  );
};
