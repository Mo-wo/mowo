import React, { HTMLAttributes } from "react";
import styles from "styles/section.module.css";
import { useLightMode } from "hooks/useTheme";

type Props = {
  children: React.ReactNode;
  sectionStyle?: any;
  sectionHeading?: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const Section:React.FC<Props> = ({ sectionStyle, sectionHeading, children, ...props}) => {
  const light = useLightMode();

  return (
    <section className={`${sectionStyle} ${styles.section}`} {...props}>
      <div className={styles.contentWrapper}>
        {sectionHeading}
        {children}
      </div>
    </section>
  );
};
