import styles from "./page.module.css";
import { Hero } from "components/lv3/Hero";
import { About, Skills, Projects, Contact } from "components/lv3/Client/Clients";
import { Footer } from 'components/lv1/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <Hero />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
