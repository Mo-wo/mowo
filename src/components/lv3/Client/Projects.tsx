import React, { useState } from "react";
import styles from "styles/projects.module.css";
import Link from "next/link";
import { Section } from "components/lv1/Section";
import { HeadingText } from 'components/lv2/HeadingText';
import { projects, projectColors } from "data/projects";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";


export const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(2);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const handleExpand = (id: number | null) => {
    setExpandedProject(id);
  };

  const handleMouseOver = (id: number) => {
    setHoveredProject(id);
    handleExpand(id);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
    handleExpand(null);
  };

  const handleTouchStart = (id: number) => {
    setHoveredProject(id);
    handleExpand(null);
  };

  const handleTouchEnd = () => {
    setTimeout(() => setHoveredProject(null), 200);
  };



  return (
    <Section sectionStyle={styles.section} id="projects" sectionHeading={<HeadingText heading={''} />}>
      <div className={styles.projectsContainer}>
          {projects.map((project:any, index:number) => {
          const expand = expandedProject === project.id;
          const isHovered = hoveredProject === project.id;
          return (
          <div 
            key={index.toString()} 
            className={expand ? `${styles.projectsWrapper} ${styles.projectsWrapperExpand}` : styles.projectsWrapper}
            onMouseEnter={() => handleMouseOver(project.id)}
            onMouseLeave={handleMouseLeave}
            onTouchStart={() => handleTouchStart(project.id)}
            onTouchEnd={handleTouchEnd}
          >
            {project.bg ? (
              <Image 
                src={project.bg} 
                alt={project.name}
                fill
                sizes="50vw"
                className={isHovered ? `${styles.bgImage} ${styles.bgImageHover}` : styles.bgImage}
              />
            ) : (
              <div 
                className={isHovered ? `${styles.bgImage} ${styles.bgImageHover}` : styles.bgImage}
                style={{ backgroundColor: projectColors[index % projectColors.length] }}
              />
            )}
            <div className={expand ? `${styles.overlay} ${styles.overlayExpand}` : isHovered ? `${styles.overlay} ${styles.overlayHover} ${styles.overlayExpand}` : styles.overlay} 
            // onClick={() => handleExpand(project.id)}
            >
              <div className={`${styles.projectLogo} ${project.slug === 'metalldel' ? styles.metalldelLogo : ''}`}>
                <Image src={project.logo} alt={project.name} width={100} height={100} className={styles.projectLogoImage} />
              </div>
              <h3 
                className={expand ? styles.titleExpand : styles.title}
                aria-hidden={expand ? "true" : "false"}
              >
                {project.name}
              </h3>
              <div className={expand ? styles.projectInfoExpand : styles.projectInfo}>
                <h3 className={expand ? styles.nameExpand : styles.name}>{project.name}</h3>
                <p className={styles.desc}>{project.desc}</p>
                
                <div className={styles.buttonContainer}>
                  {project.url ? (
                    <>
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.btn}
                        aria-label={`Visit ${project.name}`}
                      >
                        <FaExternalLinkAlt />
                      </a>
                      <Link href={`/projects/${project.slug}`} className={styles.link}>
                        View Details
                      </Link>
                    </>
                  ) : (
                    <a href={`/projects/${project.slug}`} className={styles.link}>
                      View Details
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )})}
      </div>
    </Section>
  );
};
