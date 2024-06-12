import { useState, useEffect } from "react";
import styles from "styles/backToTop.module.css";
import { BiUpArrowAlt } from "react-icons/bi";

export const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };
  
  
  return (
  <>
    { showButton && (
      <button onClick={scrollToTop} className={styles.iconWrapper}>
        <BiUpArrowAlt className={styles.arrow} />
      </button>
       )
     }
  </>
  );
};

