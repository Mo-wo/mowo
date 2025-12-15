"use client";

import React, { useState, useEffect, Fragment } from "react";
import pageStyles from "./aboutPage.module.css";
import { Socials } from "components/lv3/Socials";
import mowo from "assets/images/mowo2.jpeg";
import aboutBanner from "assets/images/about/about-28.JPG";
import Image from "next/image";
import Link from "next/link";
import { Section } from "components/lv1/Section";
import { Footer } from "components/lv1/Footer";
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
//     <div className={pageStyles.modalOverlay} onClick={onClose}>
//       <div className={pageStyles.modalContent} onClick={(e) => e.stopPropagation()}>
//         <button className={pageStyles.modalClose} onClick={onClose} aria-label="Close modal">
//           ×
//         </button>
//         <div className={pageStyles.modalImageWrapper}>
//           <Image
//             src={image.src}
//             alt={image.alt}
//             fill
//             className={pageStyles.modalImage}
//             sizes="90vw"
//           />
//         </div>
//         <p className={pageStyles.modalCaption}>{image.caption}</p>
//       </div>
//     </div>
//   );
// };

export default function AboutPage() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof communityImages)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add("about-page");
    return () => {
      document.body.classList.remove("about-page");
    };
  }, []);

  const handleImageClick = (image: (typeof communityImages)[0]) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <main className={pageStyles.main}>
      <div className={pageStyles.bannerContainer}>
        <div className={pageStyles.bannerWrapper}>
          <Image
            src={aboutBanner}
            alt="About Mowo banner"
            fill
            className={pageStyles.bannerImage}
            priority
            sizes="100vw"
          />
        </div>
      </div>
      {/* <div className={pageStyles.container}> */}
        <Section sectionStyle={pageStyles.section}>
          <div className={pageStyles.aboutTextWrapper}>
            <div className={pageStyles.contentWithImage}>
            <article className={pageStyles.aboutText}>
              {aboutText.map((paragraph, index) => (
                <Fragment key={index}>
                <p key={index}>{paragraph.paragraph}</p>
                <br />
                </Fragment>
              ))}
              </article>
            </div>

            <div className={pageStyles.ctaSection}>
              <div className={pageStyles.ctaLinks}>
                <Link
                  href="/#projects"
                  className={`${pageStyles.ctaLink} ${pageStyles.portfolioLink}`}
                >
                  View My Portfolio
                </Link>
                <Link
                  href="/#contact"
                  className={`${pageStyles.ctaLink} ${pageStyles.contactLink}`}
                  onClick={openContactEmail}
                >
                  Get In Touch
                </Link>
              </div>
              <div className={pageStyles.socialsWrapper}>
                <Socials />
              </div>
            </div>
          </div>

         

          <div className={pageStyles.backToHome}>
            <Link href="/#about" className={pageStyles.backLink}>
              ← Back to Home
            </Link>
          </div>
        </Section>
      {/* </div> */}

      <section className={pageStyles.gallerySection}>
        <div className={pageStyles.staggeredGallery}>
          {communityImages.map((image, index) => {
            const srcString = String(image.src);
            const isVideo = /\.(mp4|mov|webm|ogg)$/i.test(srcString);
            
            return (
              <figure 
                key={index} 
                className={`${pageStyles.galleryItem} ${pageStyles[`galleryItem${index + 1}`]}`}
                onClick={() => handleImageClick(image)}
              >
                {/* <div className={pageStyles.galleryImageWrapper}> */}
                  {isVideo ? (
                    <video
                      src={image.src}
                      className={pageStyles.galleryVideo}
                      muted
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
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className={pageStyles.galleryImage}
                      // fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  )}
                  <div className={pageStyles.galleryOverlay}>
                    <figcaption className={pageStyles.galleryCaption}>
                      {image.caption}
                    </figcaption>
                  </div>
                {/* </div> */}
              </figure>
            );
          })}
        </div>
      </section>
    </main>
  );
}
