import React, { HTMLAttributes} from "react";
import styles from "styles/section.module.css";
import { StaticImageData } from "next/image";
import { useLightMode } from "hooks/useTheme";

type Props = {
  // url?: StaticImageData;
  // urlDark?: StaticImageData;
  children: React.ReactNode;
  // bgImageStyle?: any;
  sectionStyle?: any;
} & HTMLAttributes<HTMLDivElement>;

export const Section:React.FC<Props> = ({ sectionStyle, children, ...props}) => {
  const light = useLightMode();
  // const url = light ? urlLight : urlDark;

  // console.log('section', url?.src)

  return (
    <section className={`${sectionStyle} ${styles.section}`} {...props}>
      {/* <div
          style={{ backgroundImage: `url(${url?.src})` }}
          className={`${bgImageStyle} ${styles.container}`}
        ></div> */}
      {/* {light ? (
        
      ) : (
        <div
          style={{ backgroundImage: `url(${urlDark?.src})` }}
          className={`${bgImageStyle} ${styles.container}`}
        ></div>
      )} */}
      {children}
    </section>
  );
};
