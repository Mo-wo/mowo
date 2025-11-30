import styles from "./page.module.css";
import { Hero } from "components/lv3/Hero";
import dynamic from 'next/dynamic';
import { Footer } from 'components/lv1/Footer';

const About = dynamic(() => import('components/lv3/Client/Clients').then(mod => ({ default: mod.About })), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});

const Skills = dynamic(() => import('components/lv3/Client/Clients').then(mod => ({ default: mod.Skills })), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});

const Projects = dynamic(() => import('components/lv3/Client/Clients').then(mod => ({ default: mod.Projects })), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});

const Contact = dynamic(() => import('components/lv3/Client/Clients').then(mod => ({ default: mod.Contact })), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <Hero />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
