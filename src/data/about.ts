// Import all community images from the about folder
import about8 from "assets/images/about/about-8.jpeg";
import about11 from "assets/images/about/about-11.jpg";
import about13 from "assets/images/about/about-13.jpg";
import about15 from "assets/images/about/about-15.jpg";
import about17 from "assets/images/about/about-17.jpg";
import about18 from "assets/images/about/about-18.jpg";
import about23 from "assets/images/about/about-23.JPG";
import about24 from "assets/images/about/about-24.jpg";
import about28 from "assets/images/about/about-28.JPG";
import about30 from "assets/images/about/about-30.jpg";
import about31 from "assets/images/about/about-31.JPG";
import about2 from "assets/images/about/about2.jpg";
import me3 from "assets/images/about/me-3.jpg";

export interface CommunityImage {
  src: any;
  alt: string;
  caption: string;
  size?: 'small' | 'medium' | 'large' | 'wide' | 'tall';
}

export const communityImages: CommunityImage[] = [
  {
    src: about11,
    alt: "Sharing insights at a GDG Mpape workshop",
    caption: "Sharing insights at a GDG Mpape workshop",
    size: 'wide'
  },
  {
    src: about13,
    alt: "The amazing team behind DevFest Abuja '24!",
    caption: "The amazing team behind DevFest Abuja '24!",
    size: 'large'
  },
  {
    src: about15,
    alt: "Mentoring participants at a SheCodeAfrica hackathon",
    caption: "Mentoring participants at a SheCodeAfrica hackathon",
    size: 'medium'
  },
  {
    src: about17,
    alt: "My other passions: global flavors and global travels",
    caption: "My other passions: global flavors and global travels",
    size: 'tall'
  },
  {
    src: about8,
    alt: "Community engagement and tech events",
    caption: "Community engagement and tech events",
    size: 'small'
  },
  {
    src: about18,
    alt: "Tech community activities",
    caption: "Tech community activities",
    size: 'medium'
  },
  {
    src: about23,
    alt: "Developer community participation",
    caption: "Developer community participation",
    size: 'wide'
  },
  {
    src: about24,
    alt: "Tech meetup and networking",
    caption: "Tech meetup and networking",
    size: 'small'
  },
  {
    src: about28,
    alt: "Community building and collaboration",
    caption: "Community building and collaboration",
    size: 'tall'
  },
  {
    src: about30,
    alt: "Tech events and workshops",
    caption: "Tech events and workshops",
    size: 'medium'
  },
  {
    src: about31,
    alt: "Developer community involvement",
    caption: "Developer community involvement",
    size: 'large'
  },
  {
    src: about2,
    alt: "Community activities and engagement",
    caption: "Community activities and engagement",
    size: 'small'
  },
  {
    src: me3,
    alt: "Personal moments and experiences",
    caption: "Personal moments and experiences",
    size: 'wide'
  }
];

