"use client";
import React, { useState, useEffect, Fragment } from "react";
import styles from "./aboutPage.module.css";
import { Socials } from "components/lv3/Socials";
import Link from "next/link";
import { Section } from "components/lv1/Section";
import { aboutText, communityImages } from "data/about";
import { openContactEmail } from "utils/contact";

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
        <Section sectionStyle={styles.section} contentWrapperStyle={styles.content}>
          <div className={styles.aboutTextWrapper}>
            {/* <div className={styles.contentWithImage}> */}
            <article className={styles.aboutText}>
              {aboutText.map((paragraph, index) => (
                <Fragment key={index}>
                <p key={index}>{paragraph.paragraph}</p>
                <br />
                </Fragment>
              ))}
              </article>
            {/* </div> */}

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
          </div>

         

          
        </Section>
      {/* </div> */}

      <section className={styles.gallerySection}>
        <div className={styles.staggeredGallery}>
          {communityImages.map((image, index) => {
            const srcString = typeof image.src === "string" ? image.src : image.src.src;
            const isVideo = /\.(mp4|mov|webm|ogg)$/i.test(srcString);
            
            return (
              <figure 
                key={index} 
                className={`${styles.galleryItem} ${styles[`galleryItem${index + 1}`]}`}
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
                    <div className={styles.galleryImage} style={{backgroundImage: `url(${image.src})`}}  />

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

        <div className={styles.backToHome}>
            <Link href="/#about" className={styles.backLink}>
              ← Back to Home
            </Link>
          </div>
      </section>
    </main>
  );
}
