import { notFound } from 'next/navigation';
import styles from './project.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from 'components/lv1/Footer';

// Project data
const projects = {
  goro: {
    name: 'Goro',
    tagline: 'Cryptocurrency Trading Platform',
    description: 'A comprehensive cryptocurrency trading ecosystem comprising a mobile application, web platform, and administrative dashboard. Goro empowers users to trade cryptocurrencies seamlessly through peer-to-peer transactions or direct platform trades, all while maintaining full custody of their digital assets.',
    role: 'Frontend Developer',
    duration: '2023 - 2024',
    technologies: [
      'React Native',
      'Expo',
      'Next.js',
      'TypeScript',
      'Material-UI',
      'React Context API',
      'Axios',
      'Web3/Crypto Libraries',
    ],
    responsibilities: [
      'Architected and developed the complete frontend for the mobile application using React Native and Expo',
      'Implemented secure biometric authentication (Face ID/Touch ID) for wallet protection',
      'Built self-custody cryptocurrency wallet interface with multi-coin support',
      'Developed P2P marketplace interface enabling users to create and manage trading advertisements',
      'Created real-time trading dashboard with live cryptocurrency rates and transaction history',
      'Implemented responsive web platform frontend with Next.js for seamless desktop trading experience',
      'Designed and built comprehensive admin dashboard for monitoring transactions, managing disputes, and overseeing platform operations',
      'Integrated Web3 functionality for blockchain interactions and wallet management',
      'Implemented secure authentication flows across all three platforms',
      'Optimized performance for smooth animations and real-time data updates',
    ],
    features: [
      {
        title: 'Mobile Application',
        items: [
          'Intuitive onboarding experience with multi-step introduction',
          'Biometric authentication for enhanced security',
          'Self-custody wallet with seed phrase backup',
          'Buy and sell cryptocurrency instantly',
          'P2P marketplace with custom ad creation',
          'Real-time price tracking and notifications',
          'Comprehensive transaction history',
          'Multi-currency support',
        ],
      },
      {
        title: 'Web Platform',
        items: [
          'Responsive design optimized for desktop trading',
          'Quick buy/sell interface with real-time rates',
          'Advanced P2P trading marketplace',
          'Wallet management and portfolio tracking',
          'Trade history and analytics',
          'Security features showcase',
          'User testimonials and platform statistics',
          'Downloadable mobile app promotion',
        ],
      },
      {
        title: 'Admin Dashboard',
        items: [
          'Overview dashboard with key metrics (total funds, customers, users)',
          'Transaction monitoring and management',
          'Dispute resolution interface',
          'User account management',
          'Settings and configuration panel',
          'Notification system',
        ],
      },
    ],
    images: {
      app: '/images/project-images/goro/goro-app.png',
      web: '/images/project-images/goro/goro-web.png',
      admin: '/images/project-images/goro/goro-admin.png',
    },
    links: [
      {
        label: 'Visit Website',
        url: 'https://goroex.com',
      },
    ],
    status: 'live',
  },
  vizatranz: {
    name: 'Vizatranz',
    tagline: 'Financial Services Platform',
    description: 'A modern financial services platform that provides seamless visa processing and travel-related services.',
    role: 'Frontend Developer - SEO & Optimization',
    duration: '2024',
    technologies: ['Next.js', 'TypeScript', 'SEO Optimization', 'React'],
    responsibilities: [
      'Implemented comprehensive SEO strategies to improve search engine rankings',
      'Optimized website performance and loading speeds',
      'Enhanced user experience through UI/UX improvements',
      'Implemented meta tags and structured data for better search visibility',
      'Improved Core Web Vitals metrics',
    ],
    features: [],
    images: {
      main: '/images/project-images/vizatranz/vizatranz-main.png',
    },
    links: [
      {
        label: 'Visit Website',
        url: 'https://www.vizatranz.com',
      },
    ],
    status: 'live',
  },
  metalladell: {
    name: 'Metalladell.no',
    tagline: 'Metal Trading Platform',
    description: 'A Norwegian platform for metal trading and industry services.',
    role: 'Frontend Developer',
    duration: '2024',
    technologies: ['React', 'TypeScript', 'Next.js'],
    responsibilities: [
      'Added new features to enhance user experience',
      'Integrated additional functionality into existing codebase',
      'Collaborated with team on feature improvements',
      'Maintained code quality and consistency',
    ],
    features: [],
    images: {
      main: '/images/project-images/metalladell/metalladell-main.png',
    },
    links: [
      {
        label: 'Visit Website',
        url: 'https://metalladell.no',
      },
    ],
    status: 'live',
  },
  speedax: {
    name: 'Speedax',
    tagline: 'Delivery & Logistics Platform',
    description: 'A comprehensive delivery and logistics platform comprising a mobile application, web platform, and administrative portal for managing deliveries and courier services.',
    role: 'Frontend Developer',
    duration: '2024',
    technologies: [
      'React Native',
      'Next.js',
      'TypeScript',
      'Material-UI',
      'Google Maps Integration',
    ],
    responsibilities: [
      'Developed complete frontend for mobile application using React Native',
      'Built web platform frontend with Next.js for customer-facing services',
      'Created comprehensive admin portal for managing deliveries and couriers',
      'Implemented real-time tracking and notifications',
      'Integrated maps and location services',
    ],
    features: [],
    images: {
      main: '/images/project-images/speedax/speedax-main.png',
    },
    links: [],
    status: 'in-development',
  },
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects];

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
            <p className={styles.tagline}>{project.tagline}</p>
            <div className={styles.metaInfo}>
              <span className={styles.role}>{project.role}</span>
              <span className={styles.separator}>•</span>
              <span className={styles.duration}>{project.duration}</span>
              <span className={styles.separator}>•</span>
              <span
                className={
                  project.status === 'live' ? styles.statusLive : styles.statusDev
                }
              >
                {project.status === 'live' ? '🟢 Live' : '🟡 In Development'}
              </span>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Project Overview</h2>
          <p className={styles.description}>{project.description}</p>
        </section>

        {/* Images Section */}
        {params.slug === 'goro' && 'app' in project.images && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Platform Showcase</h2>
            <div className={styles.imagesGrid}>
              <div className={styles.imageWrapper}>
                <h3 className={styles.imageTitle}>Mobile Application</h3>
                <Image
                  src={project.images.app}
                  alt="Goro Mobile App"
                  width={1200}
                  height={800}
                  className={styles.projectImage}
                />
              </div>
              <div className={styles.imageWrapper}>
                <h3 className={styles.imageTitle}>Web Platform</h3>
                <Image
                  src={project.images.web}
                  alt="Goro Web Platform"
                  width={1200}
                  height={800}
                  className={styles.projectImage}
                />
              </div>
              <div className={styles.imageWrapper}>
                <h3 className={styles.imageTitle}>Admin Dashboard</h3>
                <Image
                  src={project.images.admin}
                  alt="Goro Admin Dashboard"
                  width={1200}
                  height={800}
                  className={styles.projectImage}
                />
              </div>
            </div>
          </section>
        )}

        {/* Technologies Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Technologies Used</h2>
          <div className={styles.techStack}>
            {project.technologies.map((tech, index) => (
              <span key={index} className={styles.techBadge}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Responsibilities Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>My Responsibilities</h2>
          <ul className={styles.responsibilitiesList}>
            {project.responsibilities.map((responsibility, index) => (
              <li key={index} className={styles.responsibilityItem}>
                {responsibility}
              </li>
            ))}
          </ul>
        </section>

        {/* Features Section - Only for Goro */}
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

        {/* Links Section */}
        {project.links && project.links.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>View Project</h2>
            <div className={styles.linksContainer}>
              {project.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  {link.label}
                  <span className={styles.linkIcon}>→</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back to Home */}
        <div className={styles.backToHome}>
          <Link href="/#projects" className={styles.backLink}>
            ← Back to Projects
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}

