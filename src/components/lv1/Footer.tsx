import React from "react";
import styles from "styles/footer.module.css";
import { Socials } from "../lv3/Socials";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* <Socials/> */}
     <div className={styles.footerText}>
     <span>&copy;&nbsp;</span>
     <p>2023-2025, Mowo. All rights reserved </p>

      </div> 
    </footer>
  );
};
