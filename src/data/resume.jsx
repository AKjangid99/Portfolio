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
  SiHtml5,
  SiCss3,
  SiUnity,
  SiCplusplus,
  SiGithub,
  SiLinkedin,
  SiX,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";

export const DATA = {
  name: "Ankur Jangid",
  initials: "AJ",
  url: "https://github.com/",
  location: "India",
  locationLink: "https://www.google.com/maps/",
  description:
    "Full Stack Developer. I love building things and helping people.",
  summary:
    "Full Stack Developer skilled in building scalable web applications across the front-end and back-end using technologies like React.js, Node.js, MongoDB and PostgreSQL. Proficient in designing RESTful APIs and managing databases. Passionate about writing clean, maintainable code, optimizing performance, and delivering seamless user experiences. Strong problem-solving skills with a proven ability to collaborate across cross-functional teams to deliver high-quality, full-stack solutions on time.",
  avatarUrl: "/me.png",

  // `color` is the official brand color. `darkColor` overrides it in dark mode
  // for brands whose mark is black and would otherwise disappear.
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
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Go", icon: SiGo, color: "#00ADD8" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "Unity", icon: SiUnity, color: "#000000", darkColor: "#FFFFFF" },
  ],

  navbar: [{ href: "#", icon: HomeIcon, label: "Home" }],

  contact: {
    email: "jangidankur60@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/",
        icon: SiGithub,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/",
        icon: SiLinkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/",
        icon: SiX,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:jangidankur60@gmail.com",
        icon: MdEmail,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Trilasoft",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "",
      start: "2024",
      end: "Present",
      description:
        "Enhanced the RedSky Mobility platform with new UI components and implemented Ionic for cross-platform mobile compatibility. Updated and optimized UI components for Shift Krado, improving user engagement and ensuring consistency across web and mobile interfaces using React and modern frontend frameworks.",
    },
    {
      company: "Infotact Solution",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Full Stack Intern",
      logoUrl: "",
      start: "2024",
      end: "2024",
      description:
        "Developed and maintained full-stack applications using MongoDB, Express.js, React.js and Node.js. Built interactive UI components with React.js and Redux, and designed RESTful APIs alongside third-party integrations.",
    },
  ],

  education: [
    {
      school: "Bachelor's Degree",
      href: "#",
      degree: "Computer Science",
      logoUrl: "",
      start: "2021",
      end: "2025",
    },
  ],

  projects: [
    {
      title: "Job Portal",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "A full-stack job portal where recruiters post openings and candidates apply, with authentication, search and application tracking.",
      technologies: ["React", "Tailwind CSS", "Express.js", "MongoDB"],
      links: [{ type: "Source", href: "#", icon: SiGithub }],
      image: "",
      video: "",
    },
    {
      title: "Shooting Game",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "A 3D shooting game built in Unity with custom enemy AI, weapon mechanics and level design.",
      technologies: ["C#", "Unity 3D", "Graphics"],
      links: [{ type: "Source", href: "#", icon: SiGithub }],
      image: "",
      video: "",
    },
    {
      title: "Weather App",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "A responsive weather dashboard that fetches live forecast data and renders current conditions for any searched city.",
      technologies: ["React", "Tailwind CSS"],
      links: [{ type: "Source", href: "#", icon: SiGithub }],
      image: "",
      video: "",
    },
    {
      title: "Flappy Bird",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "A clone of the classic Flappy Bird with physics-based movement, procedural obstacles and score tracking.",
      technologies: ["C#", "Unity"],
      links: [{ type: "Source", href: "#", icon: SiGithub }],
      image: "",
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
      links: [{ type: "Source", href: "#", icon: SiGithub }],
      image: "",
      video: "",
    },
  ],

  hackathons: [],
};

export default DATA;
