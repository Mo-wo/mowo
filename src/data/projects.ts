import type { StaticImageData } from "next/image";
import gorologo from "assets/images/project-images/goro/gorologo.png";
import goroBg from "assets/images/project-images/goro/gorobg.png";
import goroWeb from "assets/images/project-images/goro/goroweb.png";
import goroAdmin from "assets/images/project-images/goro/goroadmin.png";
import beaulinklogo from "assets/images/project-images/beaulink/beaulinklogo.png";
import beaulinkbg from "assets/images/project-images/beaulink/beaulinkbg.png"; 
import beaulinkweb from "assets/images/project-images/beaulink/beaulinkweb.png";
import vizatranzlogo from "assets/images/project-images/vizatranz/vizatranzlogo.png";
import vizatranzbg from "assets/images/project-images/vizatranz/vizatranzbg.png";
import vizatranzweb from "assets/images/project-images/vizatranz/vizatranzweb.png";
import metalldellogo from "assets/images/project-images/metalldel/metalldellogo.png";
import metalldelbg from "assets/images/project-images/metalldel/metalldelbg.png";
import metalldelweb from "assets/images/project-images/metalldel/metalldelweb.png";
import metalldeladmin from "assets/images/project-images/metalldel/metalldeladmin.png";
import fanzblylogo from "assets/images/project-images/fanzbly/fanzblylogo.png";
import fanzblybg from "assets/images/project-images/fanzbly/fanzblybg.png";
import appimg1 from "assets/images/project-images/fanzbly/appimg1.png";
import appimg2 from "assets/images/project-images/fanzbly/appimg2.png";
import appimg3 from "assets/images/project-images/fanzbly/appimg3.png";
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
          "Self-custody wallet supporting 40+ cryptocurrencies across multiple blockchains with secure address storage.",
          "Biometric authentication (Face ID/Touch ID) with PIN protection for enhanced security.",
          "P2P marketplace with escrow system, custom ad creation, and real-time chat for trading.",
          "Direct buy/sell cryptocurrency with bank transfer integration and real-time FX rate calculations.",
          "Comprehensive transaction management with send/receive functionality, QR code generation, and transaction history tracking.",
        ],
      },
    ],
    images: [
      { src: goroWeb, alt: "Goro web and mobile platform device mockups" },
      { src: goroAdmin, alt: "Goro admin dashboard device mockup" },
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
    tagline: "Travel Services Platform",
    description: "Vizatranz is a travel agency platform that simplifies Nigeria visa on arrival applications, making global travel accessible through fast, stress-free, and affordable eVisa processing services. The platform streamlines the entire visa application journey, from tourist and business visas to specialized services like meet and greet assistance, luggage handling, and passenger facilitation at Lagos airport, ensuring a seamless experience for travelers, Nigerians in diaspora, and international visitors.",
    role: "Frontend Developer - SEO & Optimisation",
    duration: "2024",
    technologies: ["Next.js", "TypeScript", "SEO", "Core Web Vitals", "Accessibility"],
    responsibilities: [
      "Implemented technical SEO strategies including root-level and page-specific metadata optimisation, robots.txt and XML sitemap configuration, Google Search Console and Google Business Profile setup, OpenGraph tags, and semantic HTML structure with proper heading hierarchy for improved search engine visibility and crawlability.",
      "Optimised website performance and Core Web Vitals through Next.js Image component implementation, code splitting, and efficient resource loading strategies.",
      "Enhanced accessibility and user experience through comprehensive image alt text optimisation, semantic HTML structure, and responsive design implementation.",
    ],
    images: [
      { src: vizatranzweb, alt: "Vizatranz web platform device mockups" },
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
    tagline: "Metal Fabrication and Finishing Platform",
    description: "Metalldel is a Norwegian platform for providing comprehensive solutions for metal fabrication and finishing. The platform serves as a digital marketplace connecting metal suppliers, manufacturers, and industry professionals across Norway.",
    role: "Frontend Developer",
    duration: "2025",
    technologies: ["React", "TypeScript", "Next.js", "SCSS", "BEM", "i18next", "Redux Toolkit"],
    responsibilities: [
      "Implemented complete website translation using i18next and React Context API with English and Norwegian language support, including language detection, localization configuration, and comprehensive translation coverage across all pages and components.",
      "Developed and maintained UI updates, component improvements, and responsive design enhancements to improve user experience and platform functionality.",
      "Built and integrated admin dashboard with UI updates, feature implementations, and seamless integration with the main platform for comprehensive backend management.",
    ],
    features: [],
    images: [
      { src: metalldelweb, alt: "Metalldel landing page laptop device mockup" },
      { src: metalldeladmin, alt: "Metalldel admin dashboard screenshot" },
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
    description: "Beaulink is a comprehensive, mobile-first beauty platform designed to bridge the gap between beauty service providers and clients across Nigeria. The platform offers a seamless experience for discovering top-rated salons and stylists, booking appointments in seconds with real-time availability, managing beauty services, and connecting beauty professionals with their target audience. Built specifically for the Nigerian market, Beaulink features verified professionals, smart AI-powered matching, secure payment processing, and comprehensive business management tools for beauty service providers.",
    role: "Frontend Developer",
    duration: "2024",
    technologies: ["React", "TypeScript", "Vite", "SCSS", "BEM", "Redux Toolkit"],
    responsibilities: [
      "Built the website with complete routing, navigation, and responsive mobile-first design implementation.",
      "Developed comprehensive design system with reusable components, consistent SCSS styling patterns using BEM methodology, custom SVG icons, and modular architecture for maintainability and scalability.",
      "Implemented SEO optimisation including sitemap generation, robots.txt configuration, metadata management, and structured data for improved search engine visibility and discoverability.",
    ],
    features: [
      {
        title: "Platform Features",
        items: [
          "Service discovery and booking system with real-time availability for 8+ beauty service categories.",
          "Professional profiles with ratings, reviews, and testimonials system for verified beauty professionals with client feedback and service showcase capabilities.",
          "Pricing plans and subscription management, offering different features for individual professionals and businesses.",
          "Help center with search functionality, FAQ categories, and detailed article pages for customer support and platform guidance.",
          "Blog page with article listings, detail pages, and content management for beauty tips, industry news, and platform updates.",
        ],
      },
    ],
    images: [
      { src: beaulinkweb, alt: "Beaulink web platform device mockup" },
    ],
    status: "live",
  },
  {
    id: 5,
    name: "Fanzbly",
    slug: "fanzbly",
    logo: fanzblylogo,
    bg: fanzblybg,
    url: "",
    desc: "A social network for football fans to connect and earn rewards through engagement.",
    tagline: "Social Network for Football Fans",
    description: "Fanzbly is a gamified football community platform that connects football fans worldwide. The platform enables fans to create and monetize their own fan pages, engage in live sessions toreview football matches and VAR decisions, earn points through various activities, and monetize their passion by promoting and reviewing products from top sports brands like Nike, Adidas, and Puma. Users can redeem points for product reviews and discount shopping, participate in leaderboards, join fan groups, and interact through live video streaming with real-time chat features.",
    role: "Cross-platform Frontend Developer",
    duration: "2025",
    technologies: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "React Native Agora", "Socket.io"],
    responsibilities: [
      "Built the mobile application using React Native and Expo with comprehensive social networking features including feeds, live video streaming, chat functionality, and user profiles.",
      "Developed live video streaming using Agora SDK, real-time chat with mentions and hashtags, match reviews, VAR decision reviews, and interactive engagement features for football discussions.",
      "Implemented gamification system with points rewards, leaderboards, referral programs, and product review system integrated with e-commerce functionality for sports brand products.",
      "Built comprehensive admin dashboard using React, TypeScript, and Redux Toolkit for managing products, brands, categories, variants, orders, cart, and admin users with full CRUD operations and data management capabilities.",
    ],
    features: [
      {
        title: "Platform Features",
        items: [
          "Social networking features with feeds, posts, stories, fan pages, following/followers system, and interactive engagement through likes, comments, and shares.",
          "Live video streaming with Agora SDK integration, real-time chat with mentions and hashtags, match reviews, VAR decision reviews, and live viewer engagement.",
          "Gamification system with rewards for daily login, referrals, content creation, engagement activities, leaderboards, and redemption for product reviews and discount shopping.",
          "E-commerce integration with product catalog, brand management, categories, variants, shopping cart, checkout, and product review system for top sports brands.",
          "Admin dashboard with comprehensive management tools for products, brands, categories, variants, orders, cart management, and admin user administration with full CRUD operations.",
        ],
      },
    ],
    images: [
      { src: appimg1, alt: "Fanzbly mobile app device mockup" },
      { src: appimg2, alt: "Fanzbly mobile app device mockup" },
      { src: appimg3, alt: "Fanzbly mobile app device mockup" },
    ],
    status: "in-development",
  },
  //   {
  //   id: 6,
  //   name: "Mowo's Blog",
  //   slug: "mowo-blog",
  //   logo: mowobloglogo,
  //   url: "",
  //   desc: "A space for the articulating my thoughts, and then some.",
  //   tagline: "Personal Blog",
  //   description: "A personal blog space for sharing thoughts, experiences, and technical insights.",
  //   role: "Full Stack Developer",
  //   duration: "2025",
  //   technologies: ["Next.js", "TypeScript", "Redux Toolkit"],
  //   responsibilities: [
  //     "Designed and developed personal blog platform with content management system",
  //     "Created responsive and accessible design with performance and SEO optimisation",
  //     "Implemented user interface components and maintained platform with ongoing updates",
  //   ],
  //   features: [],
  //   images: [
  //     { src: "/images/project-images/mowo/mowo-blog-main.png", alt: "Mowo's Blog project screenshot" },
  //   ],
  //   status: "in-development",
  // },
];
