'use client';

import React, { useState, useEffect } from "react";
import pageStyles from "./aboutPage.module.css";
import { Socials } from "components/lv3/Socials";
import mowo from "assets/images/mowo2.jpeg";
import aboutBanner from "assets/images/about/about-28.JPG";
import Image from "next/image";
import Link from "next/link";
import { Section } from "components/lv1/Section";
import { Footer } from "components/lv1/Footer";
import { communityImages } from "data/about";
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
  const [selectedImage, setSelectedImage] = useState<typeof communityImages[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add('about-page');
    return () => {
      document.body.classList.remove('about-page');
    };
  }, []);

  const handleImageClick = (image: typeof communityImages[0]) => {
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
      <div className={pageStyles.container}>
        <Section sectionStyle={pageStyles.section}>
          <div className={pageStyles.aboutTextWrapper}>
            <div className={pageStyles.contentWithImage}>
              <article className={pageStyles.aboutText}>
                <p>
                I&apos;m Onyemowo Victoria Akwubo, a Front-End Developer with half a
            decade of building digital experiences across industries as
            wide-ranging as sports, fintech, hospitality, culture, blockchain,
            and social applications. My journey has taken me through companies
            where I&apos;ve led front-end development for 10+ web and mobile
            applications, engineered 100+ reusable components, implemented
            design systems that cut development time by 30%, and consistently
            delivered high-quality code backed by comprehensive test coverage.
                </p>

                <br />

                <p>
                  But beyond frameworks, performance optimisations, and clean architecture, my story didn&apos;t start with code. It started in a kitchen.

                </p>

                <p>
                  Cooking has always been my quiet sanctuary, a place where discipline meets creativity, where precision and intuition coexist. As a child, I learned that great meals aren&apos;t accidents; they&apos;re the result of structure, timing, patience, and the courage to experiment. I never knew that those same values would one day shape the way I build digital products.
                </p>
                <br />

                <p>
                  Cooking taught me flow. Development gave me purpose. Both taught me craft.
                </p>

                <p>
                  That craft grew into something bigger than myself. As my career expanded, so did my passion for people. The tech community became an extension of home, a space where I could give, teach, and build with others. Through volunteering with She Code Africa, contributing to CHAOSS DEI initiatives, and co-organizing community events with Google Developer Groups (GDG), I&apos;ve helped foster conversations, mentorship networks, and safe, collaborative spaces for young professionals finding their place in tech. Hosting monthly X (formerly Twitter) Spaces and leading physical events allowed me to take the same love I bring to the kitchen: gathering, nurturing, creating and pour it into the community that raised me.
                </p>

                <br />
                <p>
                  Today, every part of my journey connects:
                </p>

                <p>
                  My experience across companies has grounded me in execution and excellence.
                </p>

                <p>
                  My community impact reflects my commitment to helping others grow.
                </p>

                <p>
                  And my personal story, rooted in the art of cooking, continues to inform my patience, precision, and creativity as a developer.
                </p>

                <br />
                <p>
                  I build products the way I cook: thoughtfully, iteratively, and always with the people who will use them at the center. My goal is simple: to create meaningful digital experiences and to continue shaping spaces where others can learn, flourish, and discover their own paths.
                </p>

                <br />
                <p>
                  This is who I am; a developer, a community builder, and someone whose love for craft began long before the first line of code.
                </p>

                <br />
                <p>
                If you&apos;re looking for a developer who treats code with the care and precision of a craftsman, and who is passionate about building projects that make a real difference, I&apos;d love to hear from you. Let&apos;s create something meaningful together.
                </p>
              </article>

              {/* <div className={pageStyles.imgContainer}>
                <Image
                  src={mowo}
                  alt="Mowo's portrait"
                  className={pageStyles.img}
                  priority
                />
              </div> */}
            </div>

            {/* <div className={pageStyles.gallerySection}>
              <div className={pageStyles.staggeredGallery}>
                {communityImages.map((image, index) => (
                  <figure 
                    key={index} 
                    className={`${pageStyles.galleryItem} ${pageStyles[`galleryItem${index + 1}`]}`}
                    onClick={() => handleImageClick(image)}
                  >
                    <div className={pageStyles.galleryImageWrapper}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        className={pageStyles.galleryImage}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className={pageStyles.galleryOverlay}>
                        <figcaption className={pageStyles.galleryCaption}>
                          {image.caption}
                        </figcaption>
                      </div>
                    </div>
                  </figure>
                ))}
              </div>
            </div> */}

            <div className={pageStyles.ctaSection}>
              <div className={pageStyles.ctaLinks}>
                <Link href="/#projects" className={`${pageStyles.ctaLink} ${pageStyles.portfolioLink}`}>
                  View My Portfolio
                </Link>
                <Link href="/#contact" className={`${pageStyles.ctaLink} ${pageStyles.contactLink}`} onClick={openContactEmail}>
                  Get In Touch
                </Link>
              </div>
              <div className={pageStyles.socialsWrapper}>
                <Socials />
              </div>
            </div>
          </div>
        </Section>
        <div className={pageStyles.backToHome}>
          <Link href="/#about" className={pageStyles.backLink}>
            ← Back to Home
          </Link>
        </div>
      </div>
      {/* <Footer /> */}
      {/* {selectedImage && (
        <ImageModal
          image={selectedImage}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )} */}
    </main>
  );
}

