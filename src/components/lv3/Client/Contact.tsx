import React, { useState } from "react";
import styles from "styles/contact.module.css";
import "animate.css";
import { HeadingText } from "components/lv2/HeadingText";
import { Section } from "components/lv1/Section";

export const Contact = () => {
  const [expand, setExpand] = useState<boolean>(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <Section className={styles.section} id="contact">
      <div className={styles.container}>
        <HeadingText heading={"Get in touch"} headingStyle={styles.heading} />
        <form className={styles.contactForm}>
          <label className={styles.label} htmlFor="name">
            Name
            <input
              className={styles.input}
              id="name"
              name="name"
              type="text"
              required
            />
          </label>
          <label className={styles.label} htmlFor="email">
            Email
            <input
              className={styles.input}
              id="email"
              name="email"
              type="email"
              required
            />
          </label>
          <label className={styles.label} htmlFor="message">
            Message
            <textarea
              className={`${styles.input} ${styles.message}`}
              cols={30}
              rows={5}
            ></textarea>
          </label>

          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </Section>
  );
};
