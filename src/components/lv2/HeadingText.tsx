import React from "react";
import styles from "./headingText.module.css";
import "animate.css";

type Props = {
  heading: string;
}

export const HeadingText:React.FC<Props> = ({ heading }) => {
  return (
    <h2 className={styles.h2}><span className={styles.colouredText}>{heading[0]}</span>{`${heading.slice(1)}.`}</h2>
  );
};
