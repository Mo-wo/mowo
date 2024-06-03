import styles from "./page.module.css";
import { Hero } from "components/Hero";
import { About, Skills, Projects, Contact } from "components/Client/Clients";
import { Footer } from 'components/Footer';
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
