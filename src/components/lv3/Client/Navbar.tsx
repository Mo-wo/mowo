import React, { useState } from "react";
import Image from "next/image";
import logo from "images/logo.svg";
import styles from "styles/navbar.module.css";
import 'animate.css';
import Link from "next/link";
import { useLightMode } from 'hooks/useTheme';


export const Navbar = () => {
  const [ closeNav, setCloseNav ] = useState<boolean>(false);
  const light = useLightMode();

  const lineColor = light ? styles.darkLine : styles.whiteLine;

  const handleNavClose = () => {
    setCloseNav(!closeNav);
  }

  return (
    <nav className={styles.nav}>
      {/* <div className={`${styles.logoBg}`}>
        <Image src={logo} alt="logo" className={styles.logo} />
      </div> */}

      <ul className={closeNav ? styles.ul :  `${styles.ulClose}`}>
      <li className={styles.li} onClick={handleNavClose}>
          <Link href='#about'>About</Link>
        </li>
      <li className={styles.li} onClick={handleNavClose}>
          <Link href='#skills'>Skills</Link>
        </li>
        <li className={styles.li} onClick={handleNavClose}>
          <Link href='#projects'>Projects</Link>
        </li>
        <li className={styles.li} onClick={handleNavClose}>
          <Link href='#contact'>Contact</Link>
        </li>
        {/* <li className={styles.li} onClick={handleNavClose}>
          <Link href='/'>Blog</Link>
        </li> */}
        <li className={`${styles.li} ${styles.resumeWrapper}`} onClick={handleNavClose}>
          <Link href='https://docs.google.com/document/d/1nPvYHClUmQ2rgR9_vbVKQx7HTQAWCiBzRcN37wEHVKU/edit?usp=sharing' passHref legacyBehavior><a target="_blank" className={styles.resume}>Resume</a></Link>
        </li>
        {/* <li className={`${styles.li} ${styles.resume}`} onClick={handleNavClose}>
          <Link href='/'>Buy Me Coffee</Link>
        </li> */}
      </ul>

      <div className={styles.menuWrapper} onClick={handleNavClose}>
        <span className={`${closeNav ? styles.line1 : styles.line} ${styles.lineColour}`}></span>
        <span className={closeNav ? styles.line2 : styles.line}></span>
        <span className={closeNav ? styles.line3 : `${styles.line} ${styles.lineColour}`}></span>
      </div>
    </nav>
  );
};
