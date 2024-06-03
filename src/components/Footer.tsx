import React from "react";
import styles from "styles/footer.module.css";
import "animate.css";
import { Socials } from "./Socials";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* <Socials/> */}
     <div className={styles.footerText}>
     <span>&copy;</span>
     <p>Mowo</p>

      </div> 
    </footer>
  );
};
