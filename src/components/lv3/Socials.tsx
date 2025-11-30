import Link from "next/link";
import React from "react";
import styles from "styles/socials.module.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiGithubLogoFill, PiInstagramLogoFill } from "react-icons/pi";

type Props = {
  containerStyle?: any;
  iconWrapperStyle?: any;
  iconStyle?: any;
}

export const Socials:React.FC<Props> = ({ containerStyle, iconWrapperStyle, iconStyle }) => {

  const socials = [
    {id: 1, icon: <FaLinkedinIn className={`${styles.icon} ${iconStyle} ${"animate__animated animate__rotateIn"}`}/>, url: 'https://www.linkedin.com/in/victoria-akwubo-59b009153/'},
    {id: 2, icon: <PiGithubLogoFill className={`${styles.icon} ${iconStyle} ${"animate__animated animate__rotateIn"}`}/>, url: 'https://github.com/Mo-wo'},
    {id: 3, icon: <FaXTwitter className={`${styles.icon} ${iconStyle} ${"animate__animated animate__rotateIn"}`}/>, url: 'https://twitter.com/iammowo'},
    {id: 4, icon: <PiInstagramLogoFill className={`${styles.icon} ${iconStyle} ${"animate__animated animate__rotateIn"}`}/>, url: 'https://www.instagram.com/iammowo_/'},
  ];


  return (
    <ul className={`${styles.container} ${containerStyle}`}> 
      {socials.map((social, index) => (
        <li key={index.toString()} className={`${styles.iconWrapper} ${iconWrapperStyle}`}>
          <Link href={social.url} passHref legacyBehavior>
            <a target="_blank" style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>{social.icon}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
