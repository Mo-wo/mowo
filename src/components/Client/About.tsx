import React, { useState } from 'react'
import styles from "styles/about.module.css";
import "animate.css";
import { Socials } from 'components/Socials';
import girl from "images/8762097.jpg";
import Image from 'next/image';


export const About = () => {
  const [expand, setExpand] = useState<boolean>(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <section className={styles.section}>
      {/* <div className={styles.wrapper}> */}
      {/* <div className={styles.aboutTextWrapper}> */}
      <div className={expand ? styles.aboutTextWrapper : styles.aboutTextWrapperClose}>
        <h2><span className={styles.coloured}>A</span>bout me.</h2>
        <article className={expand ? styles.aboutText : styles.aboutTextClose}>
            My name is Onyemowo Akwubo (aka Mowo). I am a frontend developer specialised in a range of frontend technologies which includes React, React Native, TypeScript, Next.js, and Material-UI. With a focus on delivering exceptional user experiences, I prioritise cross-browser compatibility and employ a mobile-first approach to ensure responsive designs.<br/><br/>

            {/* In addition to my technical expertise, I uphold core values of integrity, honesty, and teamwork. I thrive in collaborative environments, building positive relationships with colleagues and stakeholders to drive successful projects. Beyond my professional commitments, I actively engage with developer communities through volunteering, demonstrating my dedication to continuous growth.<br/><br/> */}

            Outside of work, I enjoy experimenting with various cuisines.  I can cook up a storm and eat it too 🤭. I am an adventurous soul, always eager to explore new places and cultures. Whether at work setting or outside of it, I pride myself in being a delightful presence. Don't just take my word for it – let's connect and experience it firsthand!<br/><br/>

            I am a front-end wizard! (self-acclaimed) With a tech toolkit featuring React, React Native, TypeScript, Next.js, and Material-UI, I weave digital wonders that delight users across all devices. 🌟 My mantra? Craft exceptional experiences with a sprinkle of cross-browser magic and a dash of mobile-first mojo!
But hey, it's not just about the code! Integrity, honesty, and teamwork are my secret sauce, ensuring projects sizzle with success. 🔥 I'm all about that collaboration groove, building bonds with colleagues and stakeholders to make magic happen.
Oh, and did I mention I'm a coding crusader by day, and an open-source superhero by night? 💻 Volunteering in developer communities is my jam, spreading knowledge and goodwill like confetti! 🎉 From squashing bugs to mentoring newbies, I'm there with a cape (albeit invisible) and a smile.
And when I'm not busy coding or saving the digital world, you'll find me whipping up culinary creations in the kitchen. 🍳👨‍🍳 From spicy to sweet, I can cook up a storm and eat it with a mischievous grin! 😋 Adventure calls to me like a siren song – I'm always up for exploring new places and soaking in diverse cultures.
Whether in the code trenches, lending a hand to open-source projects, or out in the wild, I'm known for bringing a splash of joy wherever I go. Don't just take my word for it – let's connect and sprinkle some fun into our journey together! 🚀
            {/* <p onClick={handleExpand} className={expand ? styles.expand : styles.expandClose}>{expand ? "See Less..." : "See More..."}</p> */}
        </article>
        <div className={styles.socials}>
          <Socials />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src={girl} alt="" style={{ width: 'auto', height: 'auto'}} className={styles.img} />
      </div>
      {/* </div> */}
  </section>
  );
};
