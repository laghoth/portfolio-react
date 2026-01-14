import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiVercel,
} from "react-icons/si";

export const projects = [
  {
    title: "Portfolio",
    description: "React + Tailwind",
    github: "#",
  },
];

export const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const services = [
  { title: "Frontend", desc: "React, Tailwind, JavaScript" },
  { title: "UI Focus", desc: "Clean layouts & animations" },
  { title: "Performance", desc: "Optimized & scalable code" },
  { title: "Growth", desc: "Always learning & improving" },
];

export const skills = {
  frontend: [
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJs },
    { name: "React", icon: FaReact },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Framer Motion", icon: SiFramer },
  ],

  backend: [
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express.js", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
  ],

  tools: [
    { name: "Git", icon: FaGitAlt },
    { name: "Vercel", icon: SiVercel },
  ],
};

export const experiences = [
  {
    title: "Frontend Developer (Freelance)",
    date: "2024 – Present",
    desc: "Building responsive websites and landing pages using React, Tailwind CSS and modern UI patterns.",
  },
  {
    title: "Personal React Projects",
    date: "2023 – 2024",
    desc: "Developed multiple projects including portfolios, dashboards and landing pages with animations.",
  },
  {
    title: "Learning & Practice",
    date: "2022 – 2023",
    desc: "Focused on HTML, CSS, JavaScript fundamentals and UI/UX principles.",
  },
  {
    title: "Learning & Practice",
    date: "2022 – 2023",
    desc: "Focused on HTML, CSS, JavaScript fundamentals and UI/UX principles.",
  },
];

export const projectsPortfolio = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React, Tailwind CSS and Framer Motion.",
    image: "/projects/saas-landing-page.png",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "#",
    demo: "#",
  },
  {
    title: "Blond – Modern Landing Page",
    description:
      "A clean and modern landing page built with React and Tailwind CSS, showcasing services and key information in an attractive and user-friendly way.",
    image: "/projects/landing-page-1.png",
    tech: ["React", "Tailwind"],
    github: "#",
    demo: "https://landing-page-project-blond.vercel.app/v1",
  },
  {
    title: "Blond – Modern Landing Page",
    description:
      "A clean and modern landing page built with React and Tailwind CSS, showcasing services and key information in an attractive and user-friendly way.",
    image: "/projects/landing-page-2.png",
    tech: ["React", "CSS"],
    github: "#",
    demo: "https://landing-page-project-blond.vercel.app/v2",
  },
  {
    title: "Wekcar – Car Rental Management Platform Dashboard",
    description:
      "A complete car rental platform featuring a user-friendly dashboard to add, update, and remove cars, track daily bookings, and manage customer reservations efficiently. Built with React for the frontend and Node.js with Express for the backend, this application ensures seamless interaction between users and the system, providing a smooth rental experience.",
    image: "/projects/wekcar.png",
    tech: ["React", "CSS"],
    github: "#",
    demo: "https://wekcar.ma/",
  },
  {
    title: "Educate – Online Learning Platform Website",
    description:
      "A fully responsive and dynamic multi-page website for an e-learning platform, built entirely with React.js. It features reusable components, smooth navigation, category filtering, and modern design. This project showcases a scalable architecture and optimized UI/UX for online education platforms.",
    image: "/projects/school.png",
    tech: ["React", "CSS"],
    github: "#",
    demo: "https://educate-school.vercel.app/",
  },
];
