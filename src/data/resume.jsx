import { HomeIcon, NotebookIcon } from "lucide-react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiGo,
  SiVite,
  SiExpo,
  SiHtml5,
  SiCss3,
  SiUnity,
  SiCplusplus,
  SiGithub,
  SiLinkedin,
  SiX,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { Trilasoft } from "../Component/ui/svgs/Trilasoft";
import { Infotact } from "../Component/ui/svgs/Infotact";


import me from "../assets/me.jpg";
import unoImage from "../assets/uno.png";
import perps1 from "../assets/perps1.png";
import perps2 from "../assets/perps2.png";
import perps3 from "../assets/perps3.png";
import perps4 from "../assets/perps4.png";
import perps5 from "../assets/perps5.png";
import carRental1 from "../assets/car_rental1.png";
import carRental2 from "../assets/car_rental2.png";
import carRental3 from "../assets/car_rental3.png";
import carRental4 from "../assets/car_rental4.png";
import carRental5 from "../assets/car_rental5.png";
import flappybird1 from "../assets/flappybird1.png";
import flappybird2 from "../assets/flappybird2.png";

import jp1 from "../assets/jp1.png";
import jp2 from "../assets/jp2.png";
import jp3 from "../assets/jp3.png";
import jp4 from "../assets/jp4.png";

import E1 from "../assets/E1.png";
import E2 from "../assets/E2.png";

import UL from "../assets/UL.png";
import UL1 from "../assets/UL1.png";

export const DATA = {
  name: "Ankur Jangid",
  initials: "AJ",
  url: "https://github.com/",
  location: "India",
  // locationLink: "https://www.google.com/maps/",
  description:
    "Full Stack Developer. I love building things and helping people.",
  summary:
    "I’m a **Full Stack Developer** focused on building scalable, high-performance products end to end. I work with **React, React Native, Node.js, MongoDB, and PostgreSQL**, delivering everything from real-time applications to full-stack platforms. I prioritize **clean code, performance, maintainability, and great user experiences**.",
  avatarUrl: me,

  skills: [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "#000000",
      darkColor: "#FFFFFF",
    },
    { name: "Expo", icon: SiExpo, color: "#fcfdfc" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "Unity", icon: SiUnity, color: "#000000", darkColor: "#FFFFFF" },
  ],

  navbar: [{ href: "#", icon: HomeIcon, label: "Home" }],

  contact: {
    email: "jangidankur61@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AKjangid99",
        icon: SiGithub,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ankurjangid/",
        icon: SiLinkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/AnkurJangid02",
        icon: SiX,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "jangidankur61@gmail.com",
        icon: MdEmail,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Trilasoft",
      // href: "#",
      badges: [],
      location: "Remote",
      title: " Junior Software Engineer",
      logo: Trilasoft,
      start: "Jan 2025",
      end: "May 2026",
      description:
        "Enhanced the RedSky Mobility platform with new UI components and implemented Ionic for cross-platform mobile compatibility. Updated and optimized UI components for Shift Krado, improving user engagement and ensuring consistency across web and mobile interfaces using React and modern frontend frameworks.",
    },
    {
      company: "Infotact Solution",
      // href: "#",
      badges: [],
      location: "Remote",
      title: "Full Stack Intern",
      logo: Infotact,
      start: "Jul 2024",
      end: "Jan 2025",
      description:
        "Developed and maintained full-stack applications using MongoDB, Express.js, React.js and Node.js. Built interactive UI components with React.js and Redux, and designed RESTful APIs alongside third-party integrations.",
    },
  ],

  education: [
    {
      school: "Bachelor's Degree",
      // href: "#",
      degree: "Computer Science",
      logoUrl: "/Education-College-UP.png",
      start: "2021",
      end: "2024",
    },
  ],

  projects: [
    {
      title: "Trading App",
      href: "#",
      dates: "2026",
      active: true,
      description:
        "Built a perpetual trading mobile app with React Native and Expo, featuring real-time markets, order books, trading, positions, and account management.",
      technologies: ["React Native", "Expo"],
      links: [{ type: "Source", href: "https://github.com/AKjangid99/perps_Mobile", icon: SiGithub }],
      images: [perps1, perps2, perps3, perps4, perps5],
      // video: "",
    },
    {
      title: "UI library",
      href: "#",
      dates: "2026",
      active: true,
      description:
        "Built a reusable React Native UI component library with customizable, production-ready components, consistent theming, and a focus on accessibility and developer experience.",
      technologies: ["React Native", "Expo"],
      links: [{ type: "Source", href: "https://github.com/AKjangid99/Component-Library-for-Mobile", icon: SiGithub }],
      images: [UL, UL1],
      // video: "",
    },
    {
      title: "Car Rental App",
      href: "#",
      dates: "2026",
      active: true,
      description:
        "A car rental platform where users browse available cars, book rentals, and manage their trips, with authentication and a responsive interface.",
      technologies: ["React Native", "Expo", "Node.js", "MongoDB"],
      links: [{ type: "Source", href: "https://github.com/AKjangid99/car-rental-frontend", icon: SiGithub }],
      images: [carRental1, carRental2, carRental3, carRental4, carRental5],
      video: "",
    },
    {
      title: "Job Portal",
      href: "#",
      dates: "2024  ",
      active: true,
      description:
        "A full-stack job portal where recruiters post openings and candidates apply, with authentication, search and application tracking.",
      technologies: ["React", "Tailwind CSS", "Express.js", "MongoDB"],
      links: [{ type: "Source", href: "https://github.com/AKjangid99/Job_protel", icon: SiGithub }],
      image: [jp1, jp2, jp3, jp4],
      video: "",
    },
    // {
    //   title: "Shooting Game",
    //   href: "#",
    //   dates: "2023",
    //   active: true,
    //   description:
    //     "A 3D shooting game built in Unity with custom enemy AI, weapon mechanics and level design.",
    //   technologies: ["C#", "Unity 3D", "Graphics"],
    //   links: [{ type: "Source", href: "#", icon: SiGithub }],
    //   image: "",
    //   video: "",
    // },
    // {
    //   title: "Weather App",
    //   href: "#",
    //   dates: "2023",
    //   active: true,
    //   description:
    //     "A responsive weather dashboard that fetches live forecast data and renders current conditions for any searched city.",
    //   technologies: ["React", "Tailwind CSS"],
    //   links: [{ type: "Source", href: "#", icon: SiGithub }],
    //   image: "",
    //   video: "",
    // },
    {
      title: "Flappy Bird",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "A clone of the classic Flappy Bird with physics-based movement, procedural obstacles and score tracking.",
      technologies: ["C#", "Unity"],
      links: [{ type: "Source", href: "https://github.com/AKjangid99/Flappy_Bird", icon: SiGithub }],
      image: [flappybird1, flappybird2],
      video: "",
    },
    {
      title: "UNO Game",
      href: "#",
      dates: "2022",
      active: true,
      description:
        "A browser-based UNO card game implementing full turn logic, card effects and win conditions in vanilla JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [{ type: "Source", href: "https://github.com/AKjangid99/Uno-card-game", icon: SiGithub }],
      image: unoImage,
      video: "",
    },
    {
      title: "3js",
      href: "#",
      dates: "2026",
      active: true,
      description:
        "Built an interactive 3D engine visualization to practice Three.js, featuring smooth animations and immersive 3D interactions.",
      technologies: ["Three.js"],
      links: [{ type: "Source", href: "https://github.com/AKjangid99/Uno-card-game", icon: SiGithub }],
      image: [E1, E2],
      video: "",
    },
  ],

  hackathons: [],
};

export default DATA;
