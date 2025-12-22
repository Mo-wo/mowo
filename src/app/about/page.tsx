"use client";
import React, { useState, useEffect, Fragment } from "react";
import styles from "./aboutPage.module.css";
import { Socials } from "components/lv3/Socials";
import Link from "next/link";
import { Section } from "components/lv1/Section";
import { aboutText, communityImages } from "data/about";
import { openContactEmail } from "utils/contact";
import Image from "next/image";
import imgStyles from "styles/about.module.css";
import mowo from "assets/images/mowo2.jpeg";

// interface ImageModalProps {
//   image: typeof communityImages[0];
//   isOpen: boolean;
//   onClose: () => void;
// }

// const ImageModal: React.FC<ImageModalProps> = ({ image, isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div className={styles.modalOverlay} onClick={onClose}>
//       <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
//         <button className={styles.modalClose} onClick={onClose} aria-label="Close modal">
//           ×
//         </button>
//         <div className={styles.modalImageWrapper}>
//           <Image
//             src={image.src}
//             alt={image.alt}
//             fill
//             className={styles.modalImage}
//             sizes="90vw"
//           />
//         </div>
//         <p className={styles.modalCaption}>{image.caption}</p>
//       </div>
//     </div>
//   );
// };

export default function AboutPage() {
  // const [selectedImage, setSelectedImage] = useState<
  //   (typeof communityImages)[0] | null
  // >(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add("about-page");
    return () => {
      document.body.classList.remove("about-page");
    };
  }, []);

  // const handleImageClick = (image: (typeof communityImages)[0]) => {
  //   setSelectedImage(image);
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  //   setSelectedImage(null);
  // };

  return (
    <main className={styles.main}>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerWrapper} />
      </div>
      {/* <div className={styles.container}> */}
      <Section
        sectionStyle={styles.section}
        contentWrapperStyle={styles.content}
      >
        <div className={styles.aboutTextWrapper}>
          {/* <div className={styles.contentWithImage}> */}
          <article className={styles.aboutText}>{aboutText.section1}</article>

          <div className={styles.section2Wrapper}>
            <div className={styles.articleWrapper}>
          <h3>{aboutText.section2Heading}</h3>
            <article className={styles.aboutText}>{aboutText.section2}</article>
             </div>

            <div className={`${imgStyles.imgContainer}  ${styles.imgContainer}`}>
                <Image
                  src={mowo}
                  alt="mowo's portrait"
                  className={`${imgStyles.img}`}
                  priority
                />
            </div>
          </div>

          <div className={styles.section3Wrapper}>
            <h3>{aboutText.section3Heading}</h3>
            <div className={styles.article3Wrapper}>
              <article className={styles.aboutText}>{aboutText.section3}</article>
              <article className={styles.aboutText}>{aboutText.section4}</article>
            </div>

            <article className={styles.aboutText}>{aboutText.section5}</article>

          </div>

          {/* </div> */}
        </div>
      </Section>
      {/* </div> */}

      <section className={styles.gallerySection}>
        <h3>{aboutText.galleryHeading}</h3>
        <div className={styles.staggeredGallery}>
          {communityImages.map((image, index) => {
            const srcString =
              typeof image.src === "string" ? image.src : image.src.src;
            const isVideo = /\.(mp4|mov|webm|ogg)$/i.test(srcString);

            return (
              <figure
                key={index}
                className={`${styles.galleryItem} ${
                  styles[`galleryItem${index + 1}`]
                }`}
                // onClick={() => handleImageClick(image)}
              >
                {/* <div className={styles.galleryImageWrapper}> */}
                {isVideo ? (
                  <video
                    src={image.src}
                    className={styles.galleryVideo}
                    loop
                    playsInline
                    preload="metadata"
                    onMouseEnter={(e) => {
                      const video = e.currentTarget;
                      video.play().catch(() => {
                        // Ignore autoplay errors
                      });
                    }}
                    onMouseLeave={(e) => {
                      const video = e.currentTarget;
                      video.pause();
                    }}
                  />
                ) : (
                  <div
                    className={styles.galleryImage}
                    style={{ backgroundImage: `url(${image.src})` }}
                  />

                  // <Image
                  //   src={image.src}
                  //   alt={image.alt}
                  //   className={styles.galleryImage}
                  //   // fill
                  //   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  // />
                )}
                <div className={styles.galleryOverlay}>
                  <figcaption className={styles.galleryCaption}>
                    {image.caption}
                  </figcaption>
                </div>
                {/* </div> */}
              </figure>
            );
          })}
        </div>

        <div className={styles.ctaSection}>
            <div className={styles.ctaLinks}>
              <Link
                href="/#projects"
                className={`${styles.ctaLink} ${styles.portfolioLink}`}
              >
                View My Projects
              </Link>
              <Link
                href="/#contact"
                className={`${styles.ctaLink} ${styles.contactLink}`}
                onClick={openContactEmail}
              >
                Get In Touch
              </Link>
            </div>
            <div className={styles.socialsWrapper}>
              <Socials />
            </div>
          </div>

        <div className={styles.backToHome}>
          <Link href="/#about" className={styles.backLink}>
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
