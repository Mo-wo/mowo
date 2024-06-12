import React, { HTMLAttributes} from "react";
import styles from "styles/section.module.css";
import { StaticImageData } from "next/image";
import { useLightMode } from "hooks/useTheme";

type Props = {
  urlLight?: StaticImageData;
  urlDark?: StaticImageData;
  children: React.ReactNode;
  bgImageStyle?: any;
  sectionStyle?: any;
} & HTMLAttributes<HTMLDivElement>;

export const Section:React.FC<Props> = ({ urlLight, urlDark, bgImageStyle, sectionStyle, children, ...props}) => {
  const light = useLightMode();


  return (
    <section className={`${sectionStyle} ${styles.section}`} {...props}>
      {light && <div style={{ backgroundImage: `url(${urlLight?.src})` }} className={`${bgImageStyle} ${styles.container}`}></div>}
      {!light && <div style={{ backgroundImage: `url(${urlDark?.src})` }} className={`${bgImageStyle} ${styles.container}`}></div>}
      {children}
    </section>
  );
};
