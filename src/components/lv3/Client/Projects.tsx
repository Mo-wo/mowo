import React, { useState } from "react";
import styles from "styles/projects.module.css";
import "animate.css";
import Link from "next/link";
import { HeadingText } from 'components/lv2/HeadingText';
import links from "images/projects/links.png";
import daniella from "images/projects/daniella.png";
import medEd from "images/projects/medEd.png";
import stone from "images/projects/stone.png";
import truex from "images/projects/truex.png";
import iungo from "images/projects/iungo.png";
import { Section } from "components/lv1/Section";

export const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(2);

  const handleExpand = (id: number) => {
    setExpandedProject(id);
  };

  const projects = [
    {
      id: 1,
      name: "Links",
      thumbnail: links,
      url: "https://www.linkstheapp.ng/",
      desc: "A mobile application that connects individuals with service providers and businesses.",
      status: "live",
    },
    {
      id: 2,
      name: "Daniella",
      thumbnail: daniella,
      url: "https://daniella.vercel.app/",
      desc: "A digital portfolio for a product designer",
      status: "live",
    },
    {
      id: 3,
      name: "MedEd Cloud",
      thumbnail: medEd,
      url: "https://bcforraji-414038-react.b414038.dev.eastus.az.svc.builder.cafe/",
      desc: "A healthcare education web application that creates personalized and adaptive learning experiences for medical students and professionals.",
      status: "live",
    },
    {
      id: 4,
      name: "TruexGold",
      thumbnail: truex,
      url: "https://truexgold.app/",
      desc: "A cryptocurrency peer-to-peer web application.",
      status: "live",
    },
    {
      id: 5,
      name: "Stonesark",
      thumbnail: stone,
      url: "",
      desc: "A digital portfolio for a product designer",
      status: "",
    },
    {
      id: 6,
      name: "Iungo",
      thumbnail: iungo,
      url: "",
      desc: "A video chat mobile application to connect with favorite celebrities.",
      status: "",
    },
  ];

  return (
    <Section sectionStyle={styles.section} id="projects" sectionHeading={<HeadingText heading={''} />}>
      <div className={styles.projectsContainer}>
        {projects.map((project:any, index:number) => {
          const expand = expandedProject === project.id;
          const live = project.status === 'live'
          return (
          <div key={index.toString()} style={{ backgroundImage: `url(${project.thumbnail.src})` }} className={expand ? `${styles.projectsWrapper} ${styles.projectsWrapperExpand}` : styles.projectsWrapper}>
            <div className={expand ? `${styles.overlay} ${styles.overlayExpand}` : styles.overlay} onClick={() => handleExpand(project.id)}>
              <h3 style={{display: expand ? 'none' : 'block'}} className={styles.name}>{project.name}</h3>
              <div className={expand ? styles.projectInfoExpand : styles.projectInfo}>
                <h3 className={expand ? styles.nameExpand : styles.name}>{project.name}</h3>
                <p className={styles.desc}>{project.desc}</p>
                {live ? <Link href={project.url} passHref legacyBehavior>
                  <a className={styles.link} target="_blank">View</a>
                </Link> : 
                  <p className={styles.btn}>{'Coming Soon...'}</p> 
                }
              </div>
            </div>
          </div>
        )})}
      </div>
    </Section>
  );
};
