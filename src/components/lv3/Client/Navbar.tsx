import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import logo from "assets/images/logo.svg";
import styles from "styles/navbar.module.css";
import Link from "next/link";
// import { useLightMode } from 'hooks/useTheme';
import { openContactEmail } from 'utils/contact';
import { usePathname } from "next/navigation";
import useMediaQuery from "utils/useMediaQuery";


export const Navbar = () => {
  const [ closeNav, setCloseNav ] = useState<boolean>(false);
  const [ isScrolled, setIsScrolled ] = useState<boolean>(false);
  const pathname = usePathname();
  const isDesktop = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(isDesktop ? window.scrollY > 120 : window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const light = useLightMode();
  // const lineColor = light ? styles.darkLine : styles.whiteLine;


  const handleNavClose = () => {
    setCloseNav(!closeNav);
  }

  const isAboutPage = pathname === '/about';
  const navClassName = `${styles.nav} ${isAboutPage ? styles.aboutPage : ''} ${isAboutPage && isScrolled ? styles.scrolled : ''}`;

  return (
    <nav className={navClassName}>
      {/* <div className={`${styles.logoBg}`}>
        <Image src={logo} alt="logo" className={styles.logo} />
      </div> */}

      <div className={closeNav ? styles.ul :  `${styles.ulClose}`}>
        <ul className={styles.listWrapper}>
      
      
        <li className={styles.li} onClick={handleNavClose}>
          <Link href='/#projects'>Projects</Link>
        </li>
        <li className={styles.li} onClick={handleNavClose}>
          <Link href='/#skills'>Skills</Link>
        </li>
        <li 
          className={styles.li} 
          onClick={(e) => {
            handleNavClose();
            e.preventDefault();
            openContactEmail();
          }}
        >
          <a 
            href="#contact" 
            // onClick={(e) => e.preventDefault()}
            // style={{ cursor: 'pointer', textDecoration: 'none' }}
          >
            Contact
          </a>
        </li>
        <li className={styles.li} onClick={handleNavClose}>
          <Link href='/about'>About</Link>
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
      </div>

      <div className={styles.menuWrapper} onClick={handleNavClose}>
        <span className={`${closeNav ? styles.line1 : styles.line} ${styles.lineColour}`}></span>
        <span className={closeNav ? styles.line2 : styles.line}></span>
        <span className={closeNav ? styles.line3 : `${styles.line} ${styles.lineColour}`}></span>
      </div>
    </nav>
  );
};
