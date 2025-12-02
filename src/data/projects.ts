import gorologo from "assets/images/project-images/goro/gorologo.png";
import goroWeb from "assets/images/project-images/goro/gorowebimg.png";
import beaulinklogo from "assets/images/project-images/beaulink/beaulinklogo.png";
import beaulinkbg from "assets/images/project-images/beaulink/beaulinkbg.png";  
import vizatranzlogo from "assets/images/project-images/vizatranz/vizatranzlogo.png";
import vizatranzbg from "assets/images/project-images/vizatranz/vizatranzbg.png";
import metalldellogo from "assets/images/project-images/metalldel/metalldellogo.png";
import metalldelbg from "assets/images/project-images/metalldel/metalldelbg.png";
import fanzblylogo from "assets/images/project-images/fanzbly/fanzblylogo.png";
import fanzblybg from "assets/images/project-images/fanzbly/fanzblybg.png";
import mowobloglogo from "assets/images/project-images/mowo/mowobloglogo.png";
// import mowoblogbg from "assets/images/project-images/mowo/mowoblogbg.png";

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

export type Project = {
    id: number;
    name: string;
    slug: string;
    logo: string;
    bg?: string;
    url?: string;
    desc: string;
}

export { projectColors };

export const projects = [
  {
    id: 1,
    name: "Goro",
    slug: "goro",
    logo: gorologo,
    bg: goroWeb,
    url: "https://goroex.com",
    desc: "A self-custodial crypto wallet and peer-to-peer marketplace.",
  },
  {
    id: 4,
    name: "Beaulink",
    slug: "mowo-blog",
    logo: beaulinklogo,
    bg: beaulinkbg,
    url: "https://beaulink.ng",
    desc: "A beauty platform connecting Nigeria's beauty professionals with their clients.",
  },
  {
    id: 2,
    name: "Vizatranz",
    slug: "vizatranz",
    logo: vizatranzlogo,
    bg: vizatranzbg,
    url: "https://vizatranz.com",
    desc: "A travel agency that simplifies global travel by making eVisa applications fast, stress-free, and affordable.",
  },
  {
    id: 3,
    name: "Metalldel",
    slug: "metalldel",
    logo: metalldellogo,
    bg: metalldelbg,
    url: "https://metalldel.no",
    desc: "A web application for a metal fabrication and finishing provider.",                
  },
  {
    id: 6,
    name: "Fanzbly",
    slug: "fanzbly",
    logo: fanzblylogo,
    bg: fanzblybg,
    url: "",
    desc: "A social network for football lovers to connect and earn rewards through engagement.",
  },
  {
    id: 5,
    name: "Mowo's Blog",
    slug: "mowo-blog",
    logo: mowobloglogo,
    url: "",
    desc: "A space for the articulating my thoughts, and then some.",
  },
];
