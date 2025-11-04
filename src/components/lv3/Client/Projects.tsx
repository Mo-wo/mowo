import React, { useState } from "react";
import styles from "styles/projects.module.css";
import "animate.css";
import Link from "next/link";
import { HeadingText } from 'components/lv2/HeadingText';
import goroApp from "images/projects/goro/goro-app.png";
import goroWeb from "images/projects/goro/goro-web.png";
import goroAdmin from "images/projects/goro/goro-admin.png";
import { Section } from "components/lv1/Section";

export const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(1);

  const handleExpand = (id: number) => {
    setExpandedProject(id);
  };

  const projects = [
    {
      id: 1,
      name: "Goro",
      slug: "goro",
      thumbnail: goroWeb,
      url: "https://goro.ng",
      desc: "Cryptocurrency trading platform with mobile app, web platform, and admin dashboard. Built complete frontend for seamless P2P and instant trading experience.",
      status: "live",
    },
    {
      id: 2,
      name: "Vizatranz",
      slug: "vizatranz",
      thumbnail: goroApp, // Placeholder - will be replaced
      url: "https://vizatranz.com",
      desc: "Financial services platform. Implemented SEO strategies and performance optimizations for enhanced user experience.",
      status: "live",
    },
    {
      id: 3,
      name: "Metalladell",
      slug: "metalladell",
      thumbnail: goroApp, // Placeholder - will be replaced
      url: "https://metalladell.no",
      desc: "Norwegian metal trading platform. Added features and enhanced functionality to existing application.",
      status: "live",
    },
    {
      id: 4,
      name: "Speedax",
      slug: "speedax",
      thumbnail: goroApp, // Placeholder - will be replaced
      url: "",
      desc: "Delivery and logistics platform. Developed frontend for mobile app, web platform, and admin portal with real-time tracking.",
      status: "development",
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
