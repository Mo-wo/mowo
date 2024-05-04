import React, { useState } from "react";
import styles from "styles/skills.module.css";
import "animate.css";

export const Skills = () => {
  const [expand, setExpand] = useState<boolean>(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <section className={styles.section} id="skills">
      <div className={styles. skillsWrapper}>
        
      </div>
    </section>
  );
};
