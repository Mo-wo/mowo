// import about1 from "assets/images/about/about-9.jpg";
// import about2 from "assets/images/about/about-8.jpeg";
// import about3 from "assets/images/about/about-3.jpg";
// import about4 from "assets/images/about/about-4.jpg";
// // import about5 from "assets/images/about/about-6.jpg";
// import about6 from "assets/images/about/about-14.jpg";
// import about7 from "assets/images/about/about-17.jpg";
// import about8 from "assets/images/about/about-11.jpg";
// import about9 from "assets/images/about/about-19.png";
// import about10 from "assets/images/about/about-38.jpg";
// import about11 from "assets/images/about/about-29.png";
// import about12 from "assets/images/about/about-24.jpg";
// import about13 from "assets/images/about/about-31.JPG";
// import about14 from "assets/images/about/about-32.mp4";
// import about15 from "assets/images/about/about-21.jpg";

export interface CommunityImage {
  src: any;
  alt: string;
  caption: string;
  size?: "small" | "medium" | "large" | "wide" | "tall";
}

export const aboutText = {
  section1:
    "I'm Onyemowo Victoria Akwubo, a Front-end Developer with half a decade spent on building digital experiences across industries as wide-ranging as sports, fintech, hospitality, culture, blockchain, and social applications. My journey has taken me through companies where I've led front-end development for 10+ web and mobile applications, engineered 100+ reusable components, implemented design systems that cut development time by 30%, and consistently delivered high-quality code backed by comprehensive test coverage. But beyond frameworks, performance optimisations, and clean architecture, my story didn’t start with code. It started in a kitchen.",
  section2Heading: 'Where It All Began',
  section2:
    "Cooking has always been my quiet sanctuary, a place where discipline meets creativity, where precision and intuition coexist. As a child, I learned that great meals aren't accidents; they're the result of structure, timing, patience, and the courage to experiment. I never knew that those values would one day shape the way I build digital products. Cooking taught me flow. Development gave me purpose. Both taught me craft.",
  section3Heading: 'Craft, Community, and Purpose',
  section3:
    "That craft grew into something bigger than myself. As my career expanded, so did my passion for people. The tech community became an extension of home, a space where I could give, teach, and build with others. Through volunteering with She Code Africa, contributing to Community Health Analytics in Open Source Software (CHAOSS) DEI initiatives, and co-organising community events with Google Developer Groups (GDG), I've helped foster conversations, mentorship networks, and safe, collaborative spaces for young professionals finding their place in tech.",
  section4:
    "Today, every part of my journey connects. My experience across companies has grounded me in execution and excellence. My community impact reflects my commitment to helping others grow. And my personal story, rooted in the art of cooking, continues to inform my patience, precision, and creativity as a developer. I build products the way I cook: thoughtfully, iteratively, and always with the people who will use them at the center. This is who I am: a developer, a community builder, and someone whose love for craft began long before the first line of code.",
  section5: "If you're looking for a developer who treats code with the care and precision of a craftsman, and who is passionate about building projects that make a real difference, I’d love to hear from you.",
    galleryHeading: "Moments in Community: Learning, Leading, and Growing Together"
};

export const communityImages: CommunityImage[] = [
  {
    src: "/assets/about/about-9.jpg",
    alt: "Me and 5 other ladies from She Code Africa Abuja at International Women's Day 2022, organised by Women TechMakers Mpape",
    caption:
      "My first tech event: International Women's Day 2022, organised by Women TechMakers Mpape",
    size: "wide",
  },
  {
    src: "/assets/about/about-8.jpeg",
    alt: "Me with the laptop I received during the She Code Africa first quarter laptop scholarship, 2022",
    caption: "She Code Africa laptop scholarship recipient in 2022",
    size: "small",
  },
  {
    src: "/assets/about/about-3.jpg",
    alt: "Me and one of the OSCA Abuja co-orgainsers at OpenSource Day event, 2022",
    caption:
      "Me and one of the OSCA Abuja co-organisers at OpenSource Day event, 2022",
    size: "small",
  },
  {
    src: "/assets/about/about-4.jpg",
    alt: "Me and Omotola, a one-time community manager of She Code Africa  at OSCA OpenSource Day event, Abuja, 2022",
    caption:
      "Me and Omotola, a one-time community manager of She Code Africa  at OSCA OpenSource Day event, Abuja, 2022",
    size: "small",
  },
  // {
  //   src: '/assets/about/about-6.jpg',
  //   alt: "Me and Daniella, my tech event buddy at OSCA OpenSource Day event, Abuja, 2022",
  //   caption: "Me and Daniella, my tech event buddy at OSCA OpenSource Day event, Abuja, 2022",
  //   size: 'small'
  // },
  {
    src: "/assets/about/about-14.jpg",
    alt: "Me and Daniella, my tech event buddy at Google I/O 2022, organised by GDG Mpape",
    caption:
      "Me and Daniella, my tech event buddy at Google I/O 2022, organised by GDG Mpape",
    size: "small",
  },
  {
    src: "/assets/about/about-17.jpg",
    alt: "Volunteering at Flutter Forward Extended 2023, organised by GDG Mpape",
    caption:
      "Volunteering at Flutter Forward Extended 2023, organised by GDG Mpape",
    size: "small",
  },
  {
    src: "/assets/about/about-11.jpg",
    alt: "Hosting Build With AI 2024, as a GDG Mpape co-organiser",
    caption:
      "A picture of me hosting Build With AI 2024, as a GDG Mpape co-organiser",
    size: "small",
  },
  {
    src: "/assets/about/about-19.png",
    alt: "Hosting Google I/O Extended 2024, as a GDG Mpape co-organiser",
    caption: "Hosting Google I/O Extended 2024, as a GDG Mpape co-organiser",
    size: "small",
  },
  {
    src: "/assets/about/about-38.jpg",
    alt: "Hosting OSCA Blocksource 2024, as a volunteer",
    caption: "Hosting OSCA Blocksource 2024, as a volunteer",
    size: "small",
  },
  {
    src: "/assets/about/about-29.png",
    alt: "Hosting Devfest Abuja 2024, as a co-organiser",
    caption: "Hosting Devfest Abuja 2024, as a co-organiser",
    size: "wide",
  },
  {
    src: "/assets/about/about-24.jpg",
    alt: "Me and other co-organisers at Devfest Abuja 2024",
    caption: "Me and other co-organisers at Devfest Abuja 2024",
    size: "wide",
  },
  {
    src: "/assets/about/about-31.jpg",
    alt: "Me and other co-organisers at Devfest Abuja 2024",
    caption: "Me and other co-organisers at Devfest Abuja 2024",
    size: "large",
  },
  {
    src: "/assets/about/about-32.mp4",
    alt: "Doing the Minions Trend at Devfest Abuja 2024",
    caption: "Doing the Minions Trend at Devfest Abuja 2024",
    size: "large",
  },
  {
    src: "/assets/about/about-21.jpg",
    alt: "Me and my event buddies at Devfest Abuja 2024",
    caption: "Me and my event buddies at Devfest Abuja 2024",
    size: "large",
  },
];
