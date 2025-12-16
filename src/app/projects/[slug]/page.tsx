import { notFound } from 'next/navigation';
import styles from './projectPage.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from 'components/lv1/Footer';
import { projects } from 'data/projects';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  if (!params?.slug) {
    notFound();
  }
  
  const project = projects.find(p => p.slug === params.slug);
  
  if (!project) {
    notFound();
  }
  

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.projectName}>{project.name}</h1>
            {project.tagline && <p className={styles.tagline}>{project.tagline}</p>}
            <div className={styles.metaInfo}>
              {project.role && (
                <>
                  <span className={styles.role}>{project.role}</span>
                  {(project.duration || project.status) && <span className={styles.separator}>•</span>}
                </>
              )}
              {project.duration && (
                <>
                  <span className={styles.duration}>{project.duration}</span>
                  {project.status && <span className={styles.separator}>•</span>}
                </>
              )}
              {project.status && (
                <span
                  className={
                    project.status === 'live' ? styles.statusLive : styles.statusDev
                  }
                >
                  {project.status === 'live' ? '🟢 Live' : '🟡 In Development'}
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Description Section */}
        {project.description && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Project Overview</h2>
            <p className={styles.description}>{project.description}</p>
          </section>
        )}

        {/* Images Section */}
        {project.images && project.images.length > 0 && (
          <section className={styles.section}>
            <div className={styles.imagesGrid}>
              {project.images.map((image, index) => (
                <div key={index} className={styles.imageWrapper}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={800}
                    className={styles.projectImage}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Technologies Section */}
        {project.technologies && project.technologies.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Technologies and Concepts</h2>
            <div className={styles.techStack}>
              {project.technologies.map((tech, index) => (
                <span key={index} className={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Responsibilities Section */}
        {project.responsibilities && project.responsibilities.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Responsibilities</h2>
            <ul className={styles.responsibilitiesList}>
              {project.responsibilities.map((responsibility, index) => (
                <li key={index} className={styles.responsibilityItem}>
                  {responsibility}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Features Section */}
        {project.features && project.features.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Key Features</h2>
            <div className={styles.featuresGrid}>
              {project.features.map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <ul className={styles.featureList}>
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className={styles.featureItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

          <section className={styles.section}>
            <div className={styles.linksContainer}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.visitLink}
                >
                  Visit Website →
                </a>
            </div>
          </section>

        {/* Navigation */}
        {(() => {
          const currentIndex = projects.findIndex((p) => p.slug === params.slug);
          const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
          const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];
          
          return (
            <div className={styles.navigation}>
              <Link href="/#projects" className={`${styles.navButton} ${styles.navButtonback}`}>
                <span className={styles.navButtonIcon}>⇐</span> Back to Projects
              </Link>
              <div className={styles.projectNav}>
                <Link href={`/projects/${prevProject.slug}`} className={styles.navButton}>
                  ← Previous Project
                  <span className={styles.navProjectName}>{prevProject.name}</span>
                </Link>
                <Link href={`/projects/${nextProject.slug}`} className={styles.navButton}>
                  Next Project →
                  <span className={styles.navProjectName}>{nextProject.name}</span>
                </Link>
              </div>
            </div>
          );
        })()}
      </div>
    </main>
  );
}


