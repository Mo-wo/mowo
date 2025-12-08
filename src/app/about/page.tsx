'use client';

import React, { useState } from "react";
import pageStyles from "./aboutPage.module.css";
import aboutStyles from "styles/about.module.css";
import { Socials } from "components/lv3/Socials";
import mowo from "assets/images/mowo2.jpeg";
import Image from "next/image";
import Link from "next/link";
import { HeadingText } from "components/lv2/HeadingText";
import { Section } from "components/lv1/Section";
import { Footer } from "components/lv1/Footer";
import { communityImages } from "data/about";

interface ImageModalProps {
  image: typeof communityImages[0];
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={aboutStyles.modalOverlay} onClick={onClose}>
      <div className={aboutStyles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={aboutStyles.modalClose} onClick={onClose} aria-label="Close modal">
          ×
        </button>
        <div className={aboutStyles.modalImageWrapper}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className={aboutStyles.modalImage}
            sizes="90vw"
          />
        </div>
        <p className={aboutStyles.modalCaption}>{image.caption}</p>
      </div>
    </div>
  );
};

export default function AboutPage() {
  const [selectedImage, setSelectedImage] = useState<typeof communityImages[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <div className={pageStyles.container}>
        <Section sectionStyle={aboutStyles.section}>
          <div className={aboutStyles.aboutTextWrapper}>
            <div className={aboutStyles.contentWithImage}>
              <article className={aboutStyles.aboutText}>
                <h1 className={aboutStyles.title}>About Mowo: Code, Community & Culinary Adventures</h1>
                
                <p className={aboutStyles.greeting}>
                  Hey there! I&apos;m Mowo 👋
                </p>

                <p>
                  I&apos;m a software developer who believes that building for the web is equal parts logic, artistry, and human connection. Since kicking off my tech journey in 2022, I&apos;ve been passionately crafting digital experiences that are not just functional, but a delight to use.
                </p>

                <p>
                  My playground is the frontend, where I specialize in turning ideas into responsive, accessible, and pixel-perfect realities. I champion a mobile-first approach and obsess over cross-browser compatibility because everyone deserves a seamless experience, no matter their device.
                </p>

                <p>
                  My journey began as an intern at Isense Technologies, where I cut my teeth on real-world projects and was thrilled to be retained as a full-time developer. That experience taught me more than code—it showed me the power of collaborative spirit.
                </p>

                <h2 className={aboutStyles.subheading}>More Than Code: A Community Catalyst</h2>

                <p>
                  This spirit led me beyond my desk and into the heart of tech communities. For me, growth isn&apos;t just solitary learning; it&apos;s about lifting others as you climb.
                </p>

                <ul className={aboutStyles.communityList}>
                  <li>I&apos;m a proud co-organizer for GDG Mpape, where I help create learning opportunities for budding developers.</li>
                  <li>I played a key role in co-organizing DevFest Abuja &apos;24, bringing together hundreds to celebrate technology.</li>
                  <li>I&apos;ve co-organized hackathons and engagement activities with SheCodeAfrica, empowering more women in tech.</li>
                  <li>I contribute to healthier open-source ecosystems by badging DEI (Diversity, Equity, and Inclusion) events for the CHAOSS project.</li>
                </ul>

                <p>
                  These experiences have sharpened my skills in communication, project management, and empathy—making me not just a better developer, but a more effective team member.
                </p>

                <h2 className={aboutStyles.subheading}>The Human Behind the Screen</h2>

                <p>
                  When I&apos;m not debugging or planning the next community event, you&apos;ll find me embarking on two other favorite adventures:
                </p>

                <p>
                  <strong>Culinary Experiments:</strong> My kitchen is my other creative lab. I love to cook up a storm, exploring flavors from various cuisines—and I certainly enjoy eating the delicious results! 🤭
                </p>

                <p>
                  <strong>Global Exploration:</strong> I&apos;m an adventurous soul with a deep curiosity for new places and cultures. Every journey fuels my perspective and creativity.
                </p>

                <p>
                  I bring this blend of enthusiasm, curiosity, and collaborative energy to everything I do. Colleagues and friends describe me as a delightful, positive presence—but don&apos;t just take their word for it.
                </p>

                <h2 className={aboutStyles.subheading}>Community in Action</h2>
              </article>

              <div className={aboutStyles.imgContainer}>
                <Image
                  src={mowo}
                  alt="Mowo's portrait"
                  className={aboutStyles.img}
                  priority
                />
              </div>
            </div>

            <div className={aboutStyles.gallerySection}>
              <div className={aboutStyles.staggeredGallery}>
                {communityImages.map((image, index) => (
                  <figure 
                    key={index} 
                    className={`${aboutStyles.galleryItem} ${aboutStyles[`galleryItem${index + 1}`]}`}
                    onClick={() => handleImageClick(image)}
                  >
                    <div className={aboutStyles.galleryImageWrapper}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        className={aboutStyles.galleryImage}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className={aboutStyles.galleryOverlay}>
                        <figcaption className={aboutStyles.galleryCaption}>
                          {image.caption}
                        </figcaption>
                      </div>
                    </div>
                  </figure>
                ))}
              </div>
            </div>

            <div className={aboutStyles.ctaSection}>
              <h2 className={aboutStyles.subheading}>Let&apos;s Build Something Amazing Together</h2>
              <p>
                I&apos;m actively seeking opportunities to bring my blend of technical skill, community-driven passion, and positive collaboration to a forward-thinking team. If you&apos;re looking for a developer who codes with care and connects with people, let&apos;s talk!
              </p>
              <div className={aboutStyles.ctaLinks}>
                <Link href="/#portfolio" className={aboutStyles.ctaLink}>
                  View My Portfolio
                </Link>
                <Link href="/#contact" className={aboutStyles.ctaLink}>
                  Get In Touch
                </Link>
              </div>
              <div style={{ marginTop: '30px' }}>
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
      <Footer />
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </main>
  );
}

