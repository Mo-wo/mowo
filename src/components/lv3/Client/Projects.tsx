import React, { useState } from "react";
import styles from "styles/projects.module.css";
import "animate.css";
import Link from "next/link";
import { Section } from "components/lv1/Section";
import { HeadingText } from 'components/lv2/HeadingText';

import goroApp from "assets/images/project-images/goro/goro-app.png";
import goroApp2 from "assets/images/project-images/goro/goroapp.png";
import goroWeb from "assets/images/project-images/goro/goro-web.png";
import goroAdmin from "assets/images/project-images/goro/goro-admin.png";
import useMediaQuery from "utils/useMediaQuery";

export const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(1);
  const isDesktop  = useMediaQuery('(min-width: 800px)');

  const handleExpand = (id: number) => {
    setExpandedProject(id);
  };

  const projects = [
    {
      id: 1,
      name: "Goro",
      slug: "goro",
      thumbnail: goroApp,
      thumbnailDesktop: goroWeb,
      url: "https://goroex.com",
      desc: "A Peer-to-Peer cryptocurrency trading platform with a mobile app, web application, and admin dashboard.",
    },
    {
      id: 2,
      name: "Vizatranz",
      slug: "vizatranz",
      thumbnail: goroApp, 
      thumbnailDesktop: goroWeb,
      url: "https://vizatranz.com",
      desc: "Financial services platform. Implemented SEO strategies and performance optimizations for enhanced user experience.",
      status: "live",
    },
    // {
    //   id: 3,
    //   name: "Metalladell",
    //   slug: "metalladell",
    //   thumbnail: goroApp, // Placeholder - will be replaced
    //   url: "https://metalladell.no",
    //   desc: "Norwegian metal trading platform. Added features and enhanced functionality to existing application.",
    //   status: "live",
    // },
    // {
    //   id: 4,
    //   name: "Speedax",
    //   slug: "speedax",
    //   thumbnail: goroApp, // Placeholder - will be replaced
    //   url: "",
    //   desc: "Delivery and logistics platform. Developed frontend for mobile app, web platform, and admin portal with real-time tracking.",
    //   status: "development",
    // },
  ];

  return (
    <Section sectionStyle={styles.section} id="projects" sectionHeading={<HeadingText heading={''} />}>
      <div className={styles.projectsContainer}>
        {projects.map((project:any, index:number) => {
          const expand = expandedProject === project.id;
          return (
          <div key={index.toString()} className={expand ? `${styles.projectsWrapper} ${styles.projectsWrapperExpand}` : styles.projectsWrapper}>
            <div style={{ backgroundImage: isDesktop && expand ? `url(${project.thumbnailDesktop.src})` : `url(${project.thumbnail.src})` }} className={styles.projectsWrapperInner} />
            <div className={expand ? `${styles.overlay} ${styles.overlayExpand}` : styles.overlay} onClick={() => handleExpand(project.id)}>
              <h3 style={{display: expand ? 'none' : 'block'}} className={styles.name}>{project.name}</h3>
              <div className={expand ? styles.projectInfoExpand : styles.projectInfo}>
                <h3 className={expand ? styles.nameExpand : styles.name}>{project.name}</h3>
                <p className={styles.desc}>{project.desc}</p>
                <Link href={`/projects/${project.slug}`} className={styles.link}>
                  View Details
                </Link>
              </div>
            </div>
          </div>
        )})}
      </div>
    </Section>
  );
};
