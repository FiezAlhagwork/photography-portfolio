import { NavBar, Photo, videos } from "../types";
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
  { id: 1, icon: <FaFacebookF size={15} />, link: "" , ariaLabel:"زيارة فيسبوك" },
  {
    id: 2,
    icon: <FaInstagram size={15} />,
    link: "https://www.instagram.com/saqalah.9?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    ariaLabel:"زيارة انستغرام "
  },
  {
    id: 3,
    icon: <FaWhatsapp size={15} />,
    link: "https://wa.me/992965934?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%A3%D8%B3%D8%AA%D8%A7%D8%B0%D8%8C%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%AA%D9%83.",
    ariaLabel:"زيارة واتس اب "
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



export const photos: Photo[] = [
  { id: 1, src: "./headar1.jpg", alt: "Photo 1" },
  { id: 2, src: "./headar2.jpg", alt: "Photo 2" },
  { id: 3, src: "./headar3.jpg", alt: "Photo 3" },
  { id: 4, src: "./headar4.jpg", alt: "Photo 4" },
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

export const testimonials = [
  {
    text: "Oliver's unique eye for urban landscapes has brought our campaign to life. His ability to capture the soul of the city is unparalleled.",
    author: "Emily Clark",
    role: "Marketing Director - Cityscape Magazine",
  },
  {
    text: "I hired Oliver for a personal photoshoot, and he exceeded all expectations. His work is not just photography; it's storytelling at its finest.",
    author: "Liam Thompson",
    role: "Entrepreneur",
  },
  {
    text: "Oliver's workshop opened my eyes to the beauty of urban photography. His guidance and techniques were invaluable. A true master of his craft!",
    author: "Sarah Jenkins",
    role: "Aspiring Photographer",
  },
];


export const videoProjects:videos[] = [
  {
    id: 1,
    title: 'مشروع فيديو 1',
    thumbnail: './reels3.PNG',
    videoUrl: 'https://res.cloudinary.com/dtvf9kxxu/video/upload/q_auto,f_auto/v1739698898/lv_7320806994355571986_20240902015420_s818ar.mp4'
  },
  {
    id: 2,
    title: 'مشروع فيديو 2',
    thumbnail: './reels.PNG',
    videoUrl: 'https://res.cloudinary.com/dtvf9kxxu/video/upload/q_auto,f_auto/v1739698703/lv_7227878550014151942_20240921020605_ncvfuo.mp4'
              // "https://res.cloudinary.com/dtvf9kxxu/video/upload/q_auto,f_auto/v1739698703/lv_7227878550014151942_20240921020605_ncvfuo.mp4"
  },
  {
    id: 3,
    title: 'مشروع فيديو 3',
    thumbnail: './reels4.PNG',
    videoUrl: 'https://res.cloudinary.com/dtvf9kxxu/video/upload/q_auto,f_auto/v1739696366/lv_0_20240602193947_b7fnmx.mp4'
  },
  {
    id: 4,
    title: 'مشروع فيديو 4',
    thumbnail: './reels1.PNG',
    videoUrl: 'https://res.cloudinary.com/dtvf9kxxu/video/upload/q_auto,f_auto/v1739698534/lv_0_20240726220901_z4wwut.mp4'
  },
  {
    id: 5,
    title: 'مشروع فيديو 5',
    thumbnail: './reels5.PNG',
    videoUrl: 'https://res.cloudinary.com/dtvf9kxxu/video/upload/q_auto,f_auto/v1739698358/lv_0_20240717181229_dxnzwx.mp4'
  },
  {
    id: 6,
    title: 'مشروع فيديو 6',
    thumbnail: './reels6.PNG',
    videoUrl: 'https://res.cloudinary.com/dtvf9kxxu/video/upload/q_auto,f_auto/v1739698245/lv_0_20240715165717_bi18fp.mp4'
  },
];

export const videoProjects2:videos[] = [
  {
    id: 1,
    title: 'مشروع فيديو 1',
    thumbnail: './video1.PNG',
    videoUrl: 'https://res.cloudinary.com/dtvf9kxxu/video/upload/v1739692525/bozy_i0bodd.mp4  '
  },
  {
    id: 2,
    title: 'مشروع فيديو 2',
    thumbnail: './video2.PNG',
    videoUrl: 'https://res.cloudinary.com/dtvf9kxxu/video/upload/v1740062612/Sequence_06_zqm8jk.mp4'
  },
  {
    id: 3,
    title: 'مشروع فيديو 3',
    thumbnail: './video3.PNG',
    videoUrl: 'https://res.cloudinary.com/dtvf9kxxu/video/upload/v1740062805/Sequence_04_untofo.mp4'
  },

];