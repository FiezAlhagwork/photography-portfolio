import { NavBar } from "../types";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaVideo, FaPalette, FaMagic, FaCamera, FaMobileAlt, FaBriefcase } from "react-icons/fa";



export const navbar: NavBar[] = [
  { id: 1, Link: "/", name: "Home" },
  { id: 2, Link: "/About", name: "About" },
  { id: 3, Link: "/portfolio", name: "portfolio" },
];

export const socialMedia = [
  { id: 1, icon: <FaFacebookF size={15} />, link: "" },
  {
    id: 2,
    icon: <FaInstagram size={15} />,
    link: "https://www.instagram.com/saqalah.9?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    id: 3,
    icon: <FaWhatsapp size={15} />,
    link: "https://wa.me/992965934?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%A3%D8%B3%D8%AA%D8%A7%D8%B0%D8%8C%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%AA%D9%83.",
  },
];

export const Accordions = [
  {
    id: 1,
    nameAccordin: "journey",
    section:
      " My photography journey began on the bustling streets of London,starting as a hobby and quickly blossoming into a fervent passion.",
  },
  {
    id: 2,
    nameAccordin: "philosophy",
    section:
      " My photography journey began on the bustling streets of London,starting as a hobby and quickly blossoming into a fervent passion.",
  },
  {
    id: 3,
    nameAccordin: "accolades",
    section:
      " My photography journey began on the bustling streets of London,starting as a hobby and quickly blossoming into a fervent passion.",
  },
  {
    id: 4,
    nameAccordin: "lens",
    section:
      " My photography journey began on the bustling streets of London,starting as a hobby and quickly blossoming into a fervent passion.",
  },
];

 export const images = [
  { src: "./gallery14.jpg", cols: "col-span-8", rows: "row-span-1" },
  { src: "./gallery8.jpg", cols: "col-span-4", rows: "row-span-1" },
  { src: "./gallery12.jpg", cols: "col-span-5", rows: "row-span-1" },
  { src: "./gallery1.jpg", cols: "col-span-7", rows: "row-span-1" },
  { src: "./gallery7.jpg", cols: "col-span-4", rows: "row-span-1" },
  { src: "./gallery2.jpg", cols: "col-span-8", rows: "row-span-1" },
  { src: "./gallery9.jpg", cols: "col-span-7", rows: "row-span-1" },
  { src: "./gallery10.jpg", cols: "col-span-5", rows: "row-span-1" },

];


export const services = [
  {
    id: 1,
    icon: <FaVideo size={30}  />,
    title: "Video Editing",
    description: "Professional video editing to transform your footage into compelling stories.",
  },
  {
    id: 2,
    icon: <FaPalette size={30}  />,
    title: "Color Grading & Correction",
    description: "Enhancing video colors to give a cinematic and professional look.",
  },
  {
    id: 3,
    icon: <FaMagic size={30}  />,
    title: "Motion Graphics & VFX",
    description: "Adding visual effects and motion graphics for dynamic video content.",
  },
  {
    id: 4,
    icon: <FaCamera size={30}  />,
    title: "Photography & Editing",
    description: "Capturing and editing stunning photos for various occasions.",
  },
  {
    id: 5,
    icon: <FaMobileAlt size={30}  />,
    title: "Social Media Content",
    description: "Creating engaging video content optimized for social media platforms.",
  },
  {
    id: 6,
    icon: <FaBriefcase size={30}  />,
    title: "Corporate & Event Videography",
    description: "Filming and editing business and event videos with high quality.",
  },
];