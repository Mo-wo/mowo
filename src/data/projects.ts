import type { StaticImageData } from "next/image";
import gorologo from "assets/images/project-images/goro/gorologo.png";
import goroBg from "assets/images/project-images/goro/gorowebimg.png";
import goroApp from "assets/images/project-images/goro/goroapp.png";
import goroWeb from "assets/images/project-images/goro/goroweb.png";
import goroAdmin from "assets/images/project-images/goro/goroadmin.png";
import beaulinklogo from "assets/images/project-images/beaulink/beaulinklogo.png";
import beaulinkbg from "assets/images/project-images/beaulink/beaulinkbg.png";  
import vizatranzlogo from "assets/images/project-images/vizatranz/vizatranzlogo.png";
import vizatranzbg from "assets/images/project-images/vizatranz/vizatranzbg.png";
import vizatranzweb from "assets/images/project-images/vizatranz/vizatranzweb.png";
import metalldellogo from "assets/images/project-images/metalldel/metalldellogo.png";
import metalldelbg from "assets/images/project-images/metalldel/metalldelbg.png";
import fanzblylogo from "assets/images/project-images/fanzbly/fanzblylogo.png";
import fanzblybg from "assets/images/project-images/fanzbly/fanzblybg.png";
import mowobloglogo from "assets/images/project-images/mowo/mowobloglogo.png";

const projectColors = [
  "#2c2c2c", // Dark grey
  "#3a3a3a", // Medium dark grey
  "#4a4a4a", // Medium grey
  "#5a5a5a", // Light medium grey
  "#6a6a6a", // Light grey
  "#7a7a7a", // Lighter grey
  "#8a8a8a", // Very light grey
  "#9a9a9a", // Almost light grey
];

export type ProjectFeature = {
  title: string;
  items: string[];
};

export type ProjectLink = {
  label: string;
  url: string;
};

export type ProjectImage = {
  src: string | StaticImageData;
  alt: string;
};

export type ProjectImages = ProjectImage[];

export type Project = {
  id: number;
  name: string;
  slug: string;
  logo: string | StaticImageData;
  bg?: string | StaticImageData;
  url?: string;
  desc: string;
  // Detailed project page data
  tagline?: string;
  description?: string;
  role?: string;
  duration?: string;
  technologies?: string[];
  responsibilities?: string[];
  features?: ProjectFeature[];
  images?: ProjectImages;
  links?: ProjectLink[];
  status?: 'live' | 'in-development';
};

export { projectColors };

export const projects: Project[] = [
  {
    id: 1,
    name: "Goro",
    slug: "goro",
    logo: gorologo,
    bg: goroBg,
    url: "https://goroex.com",
    desc: "A self-custodial crypto wallet and peer-to-peer marketplace.",
    tagline: "Cryptocurrency Exchange Platform",
    description: "Goro is a self-custodial crypto wallet and peer-to-peer marketplace that gives users across Africa complete control of their digital assets, with secure and fast trading across 40+ cryptocurrencies and multiple blockchains.",
    role: "Cross-platform Frontend Developer",
    duration: "2023 - 2025",
    technologies: [
      "React Native",
      "TypeScript",
      "Expo",
      "Next.js",
      "Material-UI",
      "React Context API",
      "Axios",
      "Web3/Crypto Libraries",
    ],
    responsibilities: [
      "Translated designs to flawless interfaces for mobile, web, and admin dashboard platforms using React Native (Expo), Next.js, and TypeScript.",
      "Designed and implemented design system with reusable components, consistent styling patterns, responsive layouts, navigation flows, and component architecture to ensure visual consistency across all platforms.",
      "Maintained and updated all three platforms (mobile, web, admin) with bug fixes, UI improvements, feature enhancements, and ongoing refinements to ensure optimal user experience and platform stability.",
    ],
    features: [
      {
        title: "Platform Features",
        items: [
          "Self-custody wallet supporting 40+ cryptocurrencies across multiple blockchains with secure address storage",
          "Biometric authentication (Face ID/Touch ID) with PIN protection for enhanced security",
          "P2P marketplace with escrow system, custom ad creation, and real-time chat for trading",
          "Direct buy/sell cryptocurrency with bank transfer integration and real-time FX rate calculations",
          "Comprehensive transaction management with send/receive functionality, QR code generation, and transaction history tracking",
        ],
      },
    ],
    images: [
      { src: goroWeb, alt: "Web Platform screenshot" },
      { src: goroApp, alt: "Mobile Application screenshot" },
      { src: goroAdmin, alt: "Admin Dashboard screenshot" },
    ],
    links: [
      {
        label: "Visit Website",
        url: "https://goroex.com",
      },
    ],
    status: "live",
  },
  {
    id: 2,
    name: "Vizatranz",
    slug: "vizatranz",
    logo: vizatranzlogo,
    bg: vizatranzbg,
    url: "https://vizatranz.com",
    desc: "A travel agency that simplifies global travel by making eVisa applications fast, stress-free, and affordable.",
    tagline: "Financial Services Platform",
    description: "A modern financial services platform that provides seamless visa processing and travel-related services.",
    role: "Frontend Developer - SEO & Optimization",
    duration: "2024",
    technologies: ["Next.js", "TypeScript", "SEO", "Core Web Vitals", "Accessibility"],
    responsibilities: [
      "Implemented comprehensive SEO strategies including metadata optimization, OpenGraph tags, and page-specific meta tags, along with Google Search Console setup and Google Business Profile management",
      "Optimized website performance and Core Web Vitals through code optimization, image optimization, and accessibility improvements",
      "Enhanced user experience through UI/UX improvements, semantic HTML structure, and responsive design implementation",
    ],
    features: [
      {
        title: "SEO Implementation",
        items: [
          "Root-level and page-specific metadata with comprehensive title, description, and keyword optimization",
          "OpenGraph tags for enhanced social media sharing and preview cards",
          "Semantic HTML structure with proper heading hierarchy and image alt text optimization",
          "Google Search Console integration for search performance monitoring and indexing management",
          "Google Business Profile setup and maintenance for local search optimization",
        ],
      },
    ],
    images: [
      { src: vizatranzweb, alt: "Vizatranz project screenshot" },
    ],
    links: [
      {
        label: "Visit Website",
        url: "https://www.vizatranz.com",
      },
    ],
    status: "live",
  },
  {
    id: 3,
    name: "Metalldel",
    slug: "metalldel",
    logo: metalldellogo,
    bg: metalldelbg,
    url: "https://metalldel.no",
    desc: "A web application for a metal fabrication and finishing provider.",
    tagline: "Metal Trading Platform",
    description: "A Norwegian platform for metal trading and industry services.",
    role: "Frontend Developer",
    duration: "2024",
    technologies: ["React", "TypeScript", "Next.js"],
    responsibilities: [
      "Added new features and integrated additional functionality into existing codebase to enhance user experience",
      "Collaborated with team on feature improvements and maintained code quality and consistency",
      "Developed responsive interfaces and optimized performance for the metal trading platform",
    ],
    features: [],
    images: [
      { src: "/images/project-images/metalldel/metalldel-main.png", alt: "Metalldel project screenshot" },
    ],
    links: [
      {
        label: "Visit Website",
        url: "https://metalldel.no",
      },
    ],
    status: "live",
  },
  {
    id: 4,
    name: "Beaulink",
    slug: "beaulink",
    logo: beaulinklogo,
    bg: beaulinkbg,
    url: "https://beaulink.ng",
    desc: "A beauty platform connecting Nigeria's beauty professionals with their clients.",
    tagline: "Beauty Services Platform",
    description: "A modern, mobile-first beauty platform connecting Nigeria's beauty professionals with their clients.",
    role: "Frontend Developer",
    duration: "2024",
    technologies: ["React", "TypeScript", "Next.js"],
    responsibilities: [
      "Developed responsive web platform with user-friendly interface for booking, scheduling, and client management",
      "Implemented payment integration and messaging features for seamless client-professional communication",
      "Created and maintained design system with consistent styling patterns and component architecture",
    ],
    features: [],
    images: [
      { src: "/images/project-images/beaulink/beaulink-main.png", alt: "Beaulink project screenshot" },
    ],
    links: [
      {
        label: "Visit Website",
        url: "https://beaulink.ng",
      },
    ],
    status: "live",
  },
  {
    id: 5,
    name: "Mowo's Blog",
    slug: "mowo-blog",
    logo: mowobloglogo,
    url: "",
    desc: "A space for the articulating my thoughts, and then some.",
    tagline: "Personal Blog",
    description: "A personal blog space for sharing thoughts, experiences, and technical insights.",
    role: "Full Stack Developer",
    duration: "2024",
    technologies: ["Next.js", "TypeScript", "React"],
    responsibilities: [
      "Designed and developed personal blog platform with content management system",
      "Created responsive and accessible design with performance and SEO optimization",
      "Implemented user interface components and maintained platform with ongoing updates",
    ],
    features: [],
    images: [
      { src: "/images/project-images/mowo/mowo-blog-main.png", alt: "Mowo's Blog project screenshot" },
    ],
    links: [],
    status: "live",
  },
  {
    id: 6,
    name: "Fanzbly",
    slug: "fanzbly",
    logo: fanzblylogo,
    bg: fanzblybg,
    url: "",
    desc: "A social network for football lovers to connect and earn rewards through engagement.",
    tagline: "Football Community Platform",
    description: "A gamified football community where fans create, engage, and earn rewards by supporting their clubs and reviewing top sports products.",
    role: "Frontend Developer",
    duration: "2024",
    technologies: ["React Native", "Expo", "TypeScript", "React"],
    responsibilities: [
      "Developed mobile application using React Native and Expo with engaging user interface for sports content",
      "Built social networking features and implemented gamification and reward systems for football fans",
      "Created and maintained design system with consistent styling patterns across the application",
    ],
    features: [],
    images: [
      { src: "/images/project-images/fanzbly/fanzbly-main.png", alt: "Fanzbly project screenshot" },
    ],
    links: [],
    status: "in-development",
  },
];
