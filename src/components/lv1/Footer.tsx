import React from "react";
import styles from "styles/footer.module.css";
import "animate.css";
import { Socials } from "../lv3/Socials";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* <Socials/> */}
     <div className={styles.footerText}>
     <span>&copy;</span>
     <p>2023-2024, Mowo. All rights reserved </p>

      </div> 
    </footer>
  );
};
