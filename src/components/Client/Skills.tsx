import React, { useState } from "react";
import styles from "styles/skills.module.css";
import "animate.css";
import { motion } from 'framer-motion';
import { BallCanvas } from './Ball';

export const Skills = () => {
  const [expand, setExpand] = useState<boolean>(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  const technologies = [
    {id: 1, name: 'HTML5', icon: ''},
    {id: 2, name: 'CSS3', icon: ''},
    {id: 3, name: 'JavaScript', icon: ''},
    {id: 4, name: 'Typescript', icon: ''},
    {id: 5, name: 'TailwindCSS', icon: ''},
    {id: 6, name: 'MUI', icon: ''},
    {id: 7, name: 'React Native', icon: ''},
    {id: 8, name: 'Expo', icon: ''},
    {id: 9, name: 'Next', icon: ''},
    {id: 10, name: 'Git', icon: ''},
    {id: 12, name: 'Github', icon: ''},
    {id: 10, name: 'Gitlab', icon: ''},
    {id: 11, name: 'Jest', icon: ''},
    {id: 12, name: 'SonarQube', icon: ''},
    {id: 13, name: 'React Testing Library', icon: ''},
    {id: 14, name: 'Enzyme', icon: ''},
    {id: 15, name: 'Netlify', icon: ''},
    {id: 16, name: 'Vercel', icon: ''},
    {id: 17, name: 'Slack', icon: ''},
    {id: 18, name: 'Notion', icon: ''},
    {id: 19, name: 'Trello', icon: ''},
  ]

  return (
    <section className={styles.section} id="skills">
      <div className={styles. skillsWrapper}>
      <h2>
          <span className={styles.coloured}>T</span>ech stack.
        </h2>
      {technologies.map((technology, index) => (
          <div key={index.toString()} className={styles.techWrapper}>
            <p>{technology.name}</p>
            {/* <BallCanvas icon={technology.icon} /> */}
          </div>
        ))}
      </div>
    </section>
  );
};
