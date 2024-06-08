import React, { HTMLAttributes} from "react";
import styles from "styles/section.module.css";
import { StaticImageData } from "next/image";

type Props = {
  url?: StaticImageData;
  children: React.ReactNode;
  bgImageStyle?: any;
  sectionStyle?: any;
} & HTMLAttributes<HTMLDivElement>;

export const Section:React.FC<Props> = ({ url, bgImageStyle, sectionStyle, children, ...props}) => {
  return (
    <section className={`${sectionStyle} ${styles.section}`} {...props}>
      <div style={{ backgroundImage: `url(${url?.src})` }} className={`${bgImageStyle} ${styles.container}`}></div>
      {children}
    </section>
  );
};
