import React, { useState } from "react";
import Image from "next/image";
import logo from "images/logo.svg";
import styles from "styles/navbar.module.css";
import 'animate.css';
import Link from "next/link";


export const Navbar = () => {
  const [ closeNav, setCloseNav ] = useState<boolean>(false);

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
          <Link href='#projects'>Projects</Link>
        </li>
        <li className={styles.li} onClick={handleNavClose}>
          <Link href='#projects'>Skills</Link>
        </li>
        <li className={styles.li} onClick={handleNavClose}>
          <Link href='#contact'>Contact</Link>
        </li>
        <li className={styles.li} onClick={handleNavClose}>
          <Link href='/'>Blog</Link>
        </li>
        {/* <li className={`${styles.li} ${styles.resume}`} onClick={handleNavClose}>
          <Link href='/'>Buy Me Coffee</Link>
        </li> */}
      </ul>

      <div className={styles.menuWrapper} onClick={handleNavClose}>
        <span className={closeNav ? styles.line1 : styles.line}></span>
        <span className={closeNav ? styles.line2 : styles.line}></span>
        <span className={closeNav ? styles.line3 : styles.line}></span>
      </div>
    </nav>
  );
};
