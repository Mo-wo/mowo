import React from "react";
import styles from "./headingText.module.css";
import "animate.css";

type Props = {
  heading: string;
  headingStyle?: any;
}

export const HeadingText:React.FC<Props> = ({ heading, headingStyle }) => {
  return (
    <h2 className={`${styles.h2} ${headingStyle}`}><span className={styles.colouredText}>{heading[0]}</span>{`${heading.slice(1)}.`}</h2>
  );
};
