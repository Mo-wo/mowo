import Link from "next/link";
import React from "react";
import styles from "styles/socials.module.css";
import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill, PiTwitterLogoFill, PiInstagramLogoFill } from "react-icons/pi";
import "animate.css";
import threads from "images/threads.png";
import Image from "next/image";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";

type Props = {
  containerStyle?: any;
  iconWrapperStyle?: any;
  iconStyle?: any;
}

export const Socials:React.FC<Props> = ({ containerStyle, iconWrapperStyle, iconStyle }) => {

  const socials = [
    {id: 1, icon: <FaLinkedinIn className={`${styles.icon} ${iconStyle} ${"animate__animated animate__rotateIn"}`}/>, url: 'https://www.linkedin.com/in/victoria-akwubo-59b009153/'},
    {id: 2, icon: <PiGithubLogoFill className={`${styles.icon} ${iconStyle} ${"animate__animated animate__rotateIn"}`}/>, url: 'https://github.com/Mo-wo'},
    {id: 3, icon: <PiTwitterLogoFill className={`${styles.icon} ${iconStyle} ${"animate__animated animate__rotateIn"}`}/>, url: 'https://twitter.com/iammowo'},
    {id: 4, icon: <PiInstagramLogoFill className={`${styles.icon} ${iconStyle} ${"animate__animated animate__rotateIn"}`}/>, url: 'https://www.instagram.com/_____mowo/?hl=en'},
  ];


  return (
    <ul className={`${styles.container} ${containerStyle} ${"animate__animated animate__slideInUp"}`}> 
      {socials.map((social, index) => (
        <li key={index.toString()} className={`${styles.iconWrapper} ${iconWrapperStyle}`}>
          <Link href={social.url} style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
            {social.icon}
          </Link>
        </li>
      ))}
      {/* <li className={`${styles.iconWrapper} ${iconWrapperStyle}`}>
          <Link href='https://www.instagram.com/_____mowo/?hl=en' style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Image src={threads} alt="" style={{ width: 'auto', height: 'auto'}} className={`${styles.icon2} ${iconStyle} ${"animate__animated animate__rotateIn"}`} />
          </Link>
        </li> */}
    </ul>
  );
};
