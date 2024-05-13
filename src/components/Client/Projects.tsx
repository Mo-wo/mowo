import React, { useState } from "react";
import styles from "styles/about.module.css";
import "animate.css";
import { Socials } from "components/Socials";
import mowo from "images/mowo2.jpeg";
import Image from "next/image";
import Link from "next/link";
import { HeadingText } from 'components/lv2/HeadingText';

export const Projects = () => {
  const [expand, setExpand] = useState<boolean>(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <section className={styles.section} id="about">
      <HeadingText heading={'Projects'} />
      <div className={styles.projectsContainer}>
        
      </div>
    </section>
  );
};
