import Image from "next/image";
import styles from "./page.module.css";
import { Hero } from "components/Hero";
import { About } from "components/Client/Clients";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <Hero />
        <About />
        {/* <About /> */}
      </div>
    </main>
  );
}
