import { imageHero,  NavBar, Photo, videos } from "../types";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaVideo, FaPalette, FaMagic, FaCamera, FaMobileAlt, FaBriefcase } from "react-icons/fa";



export const navbar: NavBar[] = [
  { id: 1, Link: "/", name: "Home" },
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
      "My passion for photography began with capturing moments and turning them into compelling visual stories. Over time, I honed my skills in photography and editing using software like Photoshop, Premiere Pro, and DaVinci Resolve, allowing me to enhance visuals and add creative touches.",
  },
  {
    id: 2,
    nameAccordin: "philosophy",
    section:
      " I believe that every picture tells a story, and every video captures an emotion. My approach to photography and video editing is not just about technical precision but about creating visuals that resonate with people. For me, lighting, composition, and colors are tools to enhance the essence of a moment. In editing, I focus on bringing life to raw footage, using color grading, transitions, and effects to create an immersive experience. Creativity and storytelling are at the heart of my work. Whether it's a simple portrait or a cinematic video, my goal is to capture authenticity and emotion, ensuring that every frame leaves a lasting impact.",
  },
  {
    id: 3,
    nameAccordin: "accolades",
    section:
      " I have worked on successful projects in both personal and commercial photography, gaining extensive experience in capturing moments with a professional touch , I have participated in producing promotional and advertising videos for brands and organizations, helping to convey their messages in creative ways , I have refined my video editing and color grading techniques, giving my work a cinematic quality and strong visual impact.",
  },
  {
    id: 4,
    nameAccordin: "lens",
    section:
      " My photography journey began on the bustling streets of London,starting as a hobby and quickly blossoming into a fervent passion.",
  },
];



export const photos: Photo[] = [

  { id: 1, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1741113995/DSC01286_gtdjrv.jpg", alt: "Photo 1" },
  { id: 2, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1741113969/DSC01215_sshbww.jpg", alt: "Photo 2" },
  { id: 3, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1741113963/DSC01175_o4y39u.jpg", alt: "Photo 3" },
  { id: 20, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1741113926/DSC01307_1_g3rjqi.jpg", alt: "Photo 20" },
  { id: 21, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1741113910/DSC01252_oz7kct.jpg", alt: "Photo 21" },
  { id: 22, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1741113872/DSC01267_ymb3pt.jpg", alt: "Photo 22" },
  { id: 23, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1741113832/DSC01278_emw3pd.jpg", alt: "Photo 23" },
  { id: 24, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1741059645/DSC01261_aizpqj.jpg", alt: "Photo 24" },
  { id: 4, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740216108/headar4_el3pht.jpg", alt: "Photo 4" },
  { id: 5, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740390605/IMG_9621_sw7cjq.jpg", alt: "Photo 5" },
  { id: 6, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740390611/IMG_9593_ctd4bl.jpg", alt: "Photo 6" },
  { id: 7, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740390611/IMG_9576_mklrih.jpg", alt: "Photo 7" },
  { id: 8, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740390613/IMG_9618_b5pjqf.jpg", alt: "Photo 8" },
  { id: 9, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740390612/IMG_9573_oc5uvv.jpg", alt: "Photo 9" },
  { id: 10, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740390612/IMG_9603_z79skd.jpg", alt: "Photo 10" },
  { id: 11, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740390630/IMG_9662_c5gc31.jpg", alt: "Photo 11" },
  { id: 12, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740390634/IMG_9597_uka5sp.jpg", alt: "Photo 12" },
  { id: 13, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740390652/IMG_9602_b3w3nh.jpg", alt: "Photo 13" },
  { id: 14, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740390656/IMG_9595_sjam44.jpg", alt: "Photo 14" },
  { id: 15, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740390664/IMG_9685_re7rdy.jpg", alt: "Photo 15" },
  { id: 16, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740390673/IMG_9556_cjnqw2.jpg", alt: "Photo 16" },
  { id: 17, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740390689/IMG_9688_zlomco.jpg", alt: "Photo 17" },
  { id: 18, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740390704/IMG_9596_qsg6cf.jpg", alt: "Photo 18" },
  { id: 19, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740390710/IMG_9692_n8np0s.jpg", alt: "Photo 19" },
];

export const Photos1:Photo[] = [
  { id: 1, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740297907/IMG_9107_npeyxu.jpg", alt: "Photo 1" },
  { id: 2, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740387672/DSC09537_lw65ua.jpg", alt: "Photo 2" },
  { id: 3, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740387644/IMG_5507_nausna.jpg", alt: "Photo 3" },
  { id: 4, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740387657/IMG_5588_cvghf4.jpg", alt: "Photo 4" },
  { id: 5, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740388072/IMG_5552_jiq110.jpg", alt: "Photo 5" },
  { id: 6, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740388240/20240703175959_IMG_8687_hkgiqx.jpg", alt: "Photo 6" },
]
//REELS
export const Photos2:Photo[] = [
  { id: 1, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740297363/IMG_7830_dskrwf.jpg", alt: "Photo 1" },
  // { id: 11, src:"https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740297368/IMG_7835_mjppcq.jpg", alt: "Photo 11" },
  { id: 2, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740297377/IMG_7802_dyznz4.jpg", alt: "Photo 2" },
  { id: 3, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740297444/IMG_5914_xxdmel.jpg", alt: "Photo 3" },
  { id: 4, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740297450/IMG_5890_prrza1.jpg", alt: "Photo 4" },
  { id: 5, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740297463/IMG_7781_dcke3z.jpg", alt: "Photo 5" },
  { id: 6, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740297457/IMG_7790_fvurkm.jpg", alt: "Photo 6" },
  // { id: 7, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740297457/IMG_7790_fvurkm.jpg", alt: "Photo 7" },
  { id: 8, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740297378/IMG_5781_xnxqvd.jpg", alt: "Photo 8" },
  { id: 9, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740387651/IMG_5652_v1fpl9.jpg", alt: "Photo 9" },
  { id: 10, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740387692/IMG_5677_oluhrn.jpg", alt: "Photo 10" },
  { id: 12, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740388197/DSC08797_ortd1p.jpg", alt: "Photo 12" },
  { id: 13, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740388241/DSC08799_yvnxtn.jpg", alt: "Photo 13" },
  { id: 14, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740388249/DSC08798_iuovlr.jpg", alt: "Photo 14" },
  { id: 15, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740388262/DSC08800_ywdnra.jpg", alt: "Photo 16" },
  { id: 16, src: "https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740388253/DSC09185_pahjsc.jpg", alt: "Photo 17" },
]

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
    text: "Honestly, the photos you captured are absolutely stunning! You managed to highlight the beauty of the dishes and every little detail in a way that makes anyone crave the food just by looking at them.",
    author: "Emily Clark",
    role: "Habak Restaurant",
  },
  {
    text: "The photos you captured showcase incredible professionalism and creativity! Your ability to play with lighting and angles made every shot tell a story and grab attention. Your work added real value to the content and significantly enhanced the brand’s visual identity.",
    author: "Liam Thompson",
    role: "address social media",
  },
  {
    text: "Your creativity in filming the music video brought the song to life, transforming the lyrics into powerful and emotional visuals. The photoshoot was truly professional, capturing moments that reflect my personality and artistry in a unique way",
    author: "Sharif Al-Khairy",
    role: "Al-Khairy",
  },
];


export const videoProjects:videos[] = [
  {
    id: 9,
    title: 'مشروع فيديو 9',
    thumbnail: 'https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1746353246/photo3_ett601.png'  ,
    videoUrl: 'https://res.cloudinary.com/dtvf9kxxu/video/upload/q_auto,f_auto/v1746351469/MADRAMY_ke9sxp.mp4'
  },
  {
    id: 8,
    title: 'مشروع فيديو 8',
    thumbnail: 'https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1746353244/photo2_cbv2sc.png'  ,
    videoUrl: 'https://res.cloudinary.com/dtvf9kxxu/video/upload/q_auto,f_auto/v1746350515/karkdeh_pjlqy6.mp4'
  },
  {
    id: 7,
    title: 'مشروع فيديو 7',
    thumbnail: 'https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1746353449/photo1_gojjp3.png',
    videoUrl: 'https://res.cloudinary.com/dtvf9kxxu/video/upload/q_auto,f_auto/v1746350050/rman_iden0p.mp4'
  },
  {
    id: 1,
    title: 'مشروع فيديو 1',
    thumbnail: 'https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740216165/reels3_dmevqa.png',
    videoUrl: 'https://res.cloudinary.com/dtvf9kxxu/video/upload/q_auto,f_auto/v1739698898/lv_7320806994355571986_20240902015420_s818ar.mp4'
  },
  {
    id: 2,
    title: 'مشروع فيديو 2',
    thumbnail: 'https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740216195/reels_bldssa.png',
    videoUrl: 'https://res.cloudinary.com/dtvf9kxxu/video/upload/q_auto,f_auto/v1739698703/lv_7227878550014151942_20240921020605_ncvfuo.mp4'
  },
  {
    id: 3,
    title: 'مشروع فيديو 3',
    thumbnail: 'https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740216163/reels4_zpdptu.png',
    videoUrl: 'https://res.cloudinary.com/dtvf9kxxu/video/upload/q_auto,f_auto/v1739696366/lv_0_20240602193947_b7fnmx.mp4'
  },
  {
    id: 4,
    title: 'مشروع فيديو 4',
    thumbnail: 'https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740216160/reels1_dhpmfz.png',
    videoUrl: 'https://res.cloudinary.com/dtvf9kxxu/video/upload/q_auto,f_auto/v1739698534/lv_0_20240726220901_z4wwut.mp4'
  },
  {
    id: 5,
    title: 'مشروع فيديو 5',
    thumbnail: 'https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740216163/reels5_kc7bxp.png',
    videoUrl: 'https://res.cloudinary.com/dtvf9kxxu/video/upload/q_auto,f_auto/v1739698358/lv_0_20240717181229_dxnzwx.mp4'
  },
  {
    id: 6,
    title: 'مشروع فيديو 6',
    thumbnail: 'https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740216149/reels6_wy2fvf.png',
    videoUrl: 'https://res.cloudinary.com/dtvf9kxxu/video/upload/q_auto,f_auto/v1739698245/lv_0_20240715165717_bi18fp.mp4'
  },
  {
    id: 7,
    title: 'مشروع فيديو 7',
    thumbnail: 'https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1741341098/abd17_cymn1i.png',
    videoUrl: 'https://res.cloudinary.com/dtvf9kxxu/video/upload/f_auto,q_auto/v1741340702/lv_0_20240730151224_zvsbn5.mp4'
  },
];

export const videoProjects2:videos[] = [
  {
    id: 1,
    title: 'مشروع فيديو 1',
    thumbnail: 'https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740216180/video1_dbmcai.png',
    videoUrl: 'https://res.cloudinary.com/dtvf9kxxu/video/upload/q_auto,f_auto/v1739692525/bozy_i0bodd.mp4  '
  },
  {
    id: 2,
    title: 'مشروع فيديو 2',
    thumbnail: 'https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740216149/video2_kcqtto.png',
    videoUrl: 'https://res.cloudinary.com/dtvf9kxxu/video/upload/q_auto,f_auto/v1740062612/Sequence_06_zqm8jk.mp4'
  },
  {
    id: 3,
    title: 'مشروع فيديو 3',
    thumbnail: 'https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1740216179/video3_iix9dl.png',
    videoUrl: 'https://res.cloudinary.com/dtvf9kxxu/video/upload/q_auto,f_auto/v1740062805/Sequence_04_untofo.mp4'
  },
  {
    id: 4,
    title: 'مشروع فيديو 4=',
    thumbnail: 'https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1741341098/abd14_acjqtr.png',
    videoUrl: 'https://res.cloudinary.com/dtvf9kxxu/video/upload/f_auto,q_auto/v1741340275/abd12_vxg3aa.mp4'
  },
  {
    id: 5,
    title: 'مشروع فيديو 5',
    thumbnail: 'https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1741341102/abd16_kynupq.png',
    videoUrl: 'https://res.cloudinary.com/dtvf9kxxu/video/upload/f_auto,q_auto/v1741340040/Timeline_1_rbea7m.mp4'
  },
  {
    id: 6,
    title: 'مشروع فيديو 6',
    thumbnail: 'https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto,q_auto/v1741341098/abd15_h5aooo.png',
    videoUrl: 'https://res.cloudinary.com/dtvf9kxxu/video/upload/f_auto,q_auto/v1741340572/C0010_1_ahrkgk.mp4'
  },

];


export const images:imageHero[] = [ 
  {id:1, img:"https://res.cloudinary.com/dtvf9kxxu/image/upload/v1746110328/photo_5_2025-05-01_17-37-32_fmzuab.jpg"},
  {id:2, img:"https://res.cloudinary.com/dtvf9kxxu/image/upload/v1746110331/photo_3_2025-05-01_17-37-32_q7bc7z.jpg"},
  {id:3, img:"https://res.cloudinary.com/dtvf9kxxu/image/upload/v1746110346/photo_2_2025-05-01_17-37-32_rn6qit.jpg"},
  {id:4, img:"https://res.cloudinary.com/dtvf9kxxu/image/upload/v1746110331/photo_6_2025-05-01_17-37-32_narvsc.jpg"},
  {id:5, img:"https://res.cloudinary.com/dtvf9kxxu/image/upload/v1746110335/photo_1_2025-05-01_17-37-32_icu2bn.jpg"},
  {id:6, img:"https://res.cloudinary.com/dtvf9kxxu/image/upload/v1746110344/photo_8_2025-05-01_17-37-32_clllch.jpg"},
  // {id:7, img:"https://res.cloudinary.com/dtvf9kxxu/image/upload/v1746110333/photo_4_2025-05-01_17-37-32_dwc108.jpg"},
  // {id:8, img:"https://res.cloudinary.com/dtvf9kxxu/image/upload/v1746110344/photo_5_2025-05-01_17-37-32_kvjjpi.jpg"},
]