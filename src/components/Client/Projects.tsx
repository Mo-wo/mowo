import React, { useState } from "react";
import styles from "styles/projects.module.css";
import "animate.css";
import Image from "next/image";
import Link from "next/link";
import { HeadingText } from 'components/lv2/HeadingText';
import links from "images/projects/links.png";
import daniella from "images/projects/daniella.png";
import medEd from "images/projects/medEd.png";

export const Projects = () => {
  const [expand, setExpand] = useState<boolean>(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  const projects = [
    {id:1, name: 'Links', thumbnail: links, url:'', desc: '', status:'live'},
    {id:3, name: 'Stone', thumbnail: links, url:'', desc: '', status:'live'},
    {id:4, name: 'Daniella', thumbnail: daniella, url:'', desc: '', status:'live'},
    {id:5, name: 'TruexGold', thumbnail: '', url:'', desc: '', status:'live'},
    {id:6, name: 'MedEdCloud', thumbnail: medEd, url:'https://bcforraji-414038-react.b414038.dev.eastus.az.svc.builder.cafe/', desc: '', status:'live'},
    {id:1, name: 'Speedax', thumbnail: '', url:'', desc: '', status:''},
    {id:7, name: 'CHSE Express', thumbnail: '', url:'', desc: '', status:''},
    {id:8, name: 'Iungogram', thumbnail: '', url:'', desc: '', status:''},
  ]

  return (
    <section className={styles.section} id="projects">
      <HeadingText heading={'Projects'} />
      <div className={styles.projectsContainer}>
        {projects.map((project:any, index:number) => (
          <div key={index.toString()} style={{backgroundImage: `url(${project.thumbnail})`}} className={styles.projectsWrapper}>
            <div className={styles.overlay}>
              <h3 className={styles.name}>{project.name}</h3>
              <div>
                <h3 className={styles.name}>{project.name}</h3>
                <p>{project.desc}</p>
                <Link href={project.url}>{project.status === 'live' ? 'View Demo' : 'View Design System'}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
