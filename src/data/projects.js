import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiExpress, SiMongodb } from "react-icons/si";

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

export const skills = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: FaReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Framer Motion", icon: SiFramer },

  // Backend
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },

  { name: "Git", icon: FaGitAlt },
];

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
    image: "/projects/portfolio.png",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "#",
    demo: "#",
  },
  {
    title: "Landing Page",
    description:
      "Modern responsive landing page focused on clean UI and performance.",
    image: "/projects/landing.png",
    tech: ["React", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "Dashboard UI",
    description: "Frontend dashboard interface with reusable components.",
    image: "/projects/dashboard.png",
    tech: ["React", "CSS"],
    github: "#",
    demo: "#",
  },
];
