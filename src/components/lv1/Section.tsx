import React, { HTMLAttributes } from "react";
import styles from "styles/section.module.css";

type Props = {
  children: React.ReactNode;
  sectionStyle?: any;
  sectionHeading?: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const Section:React.FC<Props> = ({ sectionStyle, sectionHeading, children, ...props}) => {

  return (
    <section className={`${sectionStyle} ${styles.section}`} {...props}>
      <div className={styles.contentWrapper}>
        {sectionHeading}
        {children}
      </div>
    </section>
  );
};
