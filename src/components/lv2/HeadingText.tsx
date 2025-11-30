import React from "react";
import styles from "./headingText.module.css";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  heading: string;
  headingStyle?: string;
}

export const HeadingText:React.FC<Props> = ({ heading, headingStyle, className, ...props }) => {
  return (
    <h2 className={`${styles.h2} ${headingStyle || ''} ${className || ''}`.trim()} {...props}><span className={styles.colouredText}>{heading[0]}</span>{`${heading.slice(1)}${heading !== '' ? '.' : ''}`}</h2>
  );
};
