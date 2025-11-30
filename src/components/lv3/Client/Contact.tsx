import React from "react";
import styles from "styles/contact.module.css";
import { HeadingText } from "components/lv2/HeadingText";
import { Section } from "components/lv1/Section";
import { openContactEmail } from "utils/contact";
import { FaArrowRight } from "react-icons/fa";

export const Contact = () => {
  const handleContactClick = () => {
    openContactEmail();
  };

  return (
    <Section sectionStyle={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.collaborateWrapper} onClick={handleContactClick}>
          <HeadingText heading={"Let's Collaborate"} headingStyle={styles.heading} />
          <FaArrowRight className={styles.arrowIcon} />
        </div>
      </div>
    </Section>
  );
};
