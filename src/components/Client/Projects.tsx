import React, { useState } from "react";
import styles from "styles/projects.module.css";
import "animate.css";
import Image from "next/image";
import Link from "next/link";
import { HeadingText } from 'components/lv2/HeadingText';
import links from "images/projects/links.png";
import daniella from "images/projects/daniella.png";
import medEd from "images/projects/medEd.png";
import stone from "images/projects/stone.png";
import truex from "images/projects/truex.png";
import speedax from "images/projects/speedax.png";
import iungo from "images/projects/iungo.png";

export const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(2);

  const handleExpand = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const projects = [
    {id:1, name: 'Links', thumbnail: links, url:'https://www.linkstheapp.ng/', desc: 'A mobile application that connects individuals with service providers and businesses.', status:'live'},
    {id:2, name: 'Daniella', thumbnail: daniella, url:'https://daniella.vercel.app/', desc: 'A portfolio website for a product designer', status:'live'},
    {id:3, name: 'Stone', thumbnail: stone, url:'', desc: 'A portfolio website for a product designer', status:'live'},
    {id:4, name: 'MedEd Cloud', thumbnail: medEd, url:'https://bcforraji-414038-react.b414038.dev.eastus.az.svc.builder.cafe/', desc: '', status:'live'},
    {id:5, name: 'TruexGold', thumbnail: truex, url:'', desc: '', status:'live'},
    // {id:6, name: 'Speedax', thumbnail: speedax, url:'', desc: '', status:''},
    {id:7, name: 'Iungogram', thumbnail: iungo, url:'', desc: '', status:''},
  ]

  return (
    <section className={styles.section} id="projects">
      <HeadingText heading={'Projects'} />
      <div className={styles.projectsContainer}>
        {projects.map((project:any, index:number) => {
          const expand = expandedProject === project.id
          return (
          <div key={index.toString()} style={{ backgroundImage: `url(${project.thumbnail.src})` }} className={expand ? `${styles.projectsWrapper} ${styles.projectsWrapperExpand}` : styles.projectsWrapper}>
            <div className={expand ? `${styles.overlay} ${styles.overlayExpand}` : styles.overlay} onClick={() => handleExpand(project.id)}>
              <h3 style={{display: expand ? 'none' : 'block'}} className={styles.name}>{project.name}</h3>
              <div className={expand ? styles.projectInfoExpand : styles.projectInfo}>
                <h3 className={expand ? styles.nameExpand : styles.name}>{project.name}</h3>
                <p className={styles.desc}>{project.desc}</p>
                <Link href={project.url}  passHref legacyBehavior>
                  <a className={styles.link} target="_blank">{project.status === 'live' ? 'View' : 'View Design System'}
                    </a>
                    </Link>
              </div>
            </div>
          </div>
        )})}
      </div>
    </section>
  );
};
