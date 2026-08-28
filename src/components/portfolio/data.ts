import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiSocketdotio,
  SiPostman,
  SiCloudinary,
  SiSupabase,
  SiGit,
  SiGithub,
  SiVite,
  SiHtml5,
  SiCss3,
  SiReactquery,
  SiJsonwebtokens,
  SiZod,
} from "react-icons/si";
import { TbApi, TbLanguage } from "react-icons/tb";
import type { IconType } from "react-icons";

export const profile = {
  name: "Shubham Ranghar",
  title: "Full-Stack Developer",
  location: "Rishikesh, Uttarakhand, India",
  email: "shubhamranghar46@gmail.com",
  phone: "+91 8445923501",
  github: "https://github.com/shubham-ranghar",
  linkedin: "https://linkedin.com/in/shubham-ranghar",
  tagline:
    "Full-stack developer skilled in React, Node.js, and MongoDB, building production-grade applications end-to-end — from real-time backend systems to polished, responsive UIs.",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const experience = [
  {
    role: "Software Development Intern",
    company: "Quon Labs (OPC) Pvt. Ltd.",
    period: "July 2026 – Present",
    mode: "Remote",
    points: [
      "Working as part of the Engineering team at a New Delhi-based studio building production-grade web, mobile, and Web3 products.",
      "Contributing to feature development and bug fixes on live client products using React.js and Node.js in a remote, fast-paced team environment.",
      "Collaborating with senior engineers on code reviews and best practices, strengthening production-level development workflow and Git collaboration.",
    ],
  },
];

export const projects = [
  {
    name: "LinguaLens",
    subtitle: "AI-Powered Browser Translation Extension",
    tech: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "WXT (Chrome Extension Framework)",
      "Chrome APIs",
    ],
    points: [
      "Built and published a Chrome extension on the Chrome Web Store for real-time text translation across 17 languages, using a Shadow DOM-based floating UI to avoid CSS conflicts on any website.",
      "Integrated the MyMemory Translation API with an OpenAI-compatible LLM as a fallback, powering text simplification, grammar correction, summarization, tone rewriting, and Hinglish translation.",
      "Designed a primary + AI-backup translation pipeline with debouncing and caching to cut redundant API calls and reduce latency.",
      "Implemented reliable text-selection handling across single-page apps and iframes using mutation observers, plus translation history and vocabulary tracking via the Chrome Storage API and a Render.com proxy server for secure key management.",
    ],
    store: "#",
    repo: "#",
  },
];

export type Skill = { name: string; Icon: IconType };

export const skillGroups: { category: string; skills: Skill[] }[] = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", Icon: SiJavascript },
      { name: "TypeScript", Icon: SiTypescript },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", Icon: SiReact },
      { name: "HTML5", Icon: SiHtml5 },
      { name: "CSS3", Icon: SiCss3 },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Zustand", Icon: SiZod },
      { name: "React Query", Icon: SiReactquery },
      { name: "Vite", Icon: SiVite },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express.js", Icon: SiExpress },
      { name: "REST APIs", Icon: TbApi },
      { name: "Socket.IO", Icon: SiSocketdotio },
      { name: "JWT Auth", Icon: SiJsonwebtokens },
    ],
  },
  {
    category: "Database & Tools",
    skills: [
      { name: "MongoDB", Icon: SiMongodb },
      { name: "Supabase", Icon: SiSupabase },
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "Postman", Icon: SiPostman },
      { name: "Cloudinary", Icon: SiCloudinary },
    ],
  },
  {
    category: "Spoken Languages",
    skills: [
      { name: "English", Icon: TbLanguage },
      { name: "Hindi", Icon: TbLanguage },
    ],
  },
];

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  school: "Swami Rama Himalayan University, Dehradun",
  period: "2023 – 2026",
};
