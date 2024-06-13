import React, { HTMLAttributes} from "react";
import styles from "styles/section.module.css";
import { useLightMode } from "hooks/useTheme";

type Props = {
  children: React.ReactNode;
  sectionStyle?: any;
} & HTMLAttributes<HTMLDivElement>;

export const Section:React.FC<Props> = ({ sectionStyle, children, ...props}) => {
  const light = useLightMode();

  return (
    <section className={`${sectionStyle} ${styles.section}`} {...props}>
      {children}
    </section>
  );
};
