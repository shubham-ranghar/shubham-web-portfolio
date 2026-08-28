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
  SiCss,
  SiReactquery,
  SiJsonwebtokens,
  SiNextdotjs,
} from "react-icons/si";
import { TbApi, TbLanguage } from "react-icons/tb";
import type { IconType } from "react-icons";
import { ZustandIcon } from "./ZustandIcon";

export const profile = {
  name: "Shubham Ranghar",
  title: "Full-Stack Developer",
  location: "Rishikesh, Uttarakhand, India",
  email: "shubhamranghar46@gmail.com",
  phone: "+91 8445923501",
  github: "https://github.com/shubham-ranghar",
  linkedin:
    "https://www.linkedin.com/in/shubham-ranghar-928361322?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  tagline:
    "Full-stack developer specializing in React, Node.js, and MongoDB — building complete applications from real-time backend systems to polished, responsive frontends.",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
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
      "Part of the engineering team at a New Delhi-based studio shipping web, mobile, and Web3 products for live clients.",
      "Develop features and resolve bugs on production applications using React.js and Node.js in a remote, fast-paced environment.",
      "Participate in code reviews and follow team best practices, strengthening Git workflows and professional development habits.",
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
    store:
      "https://chromewebstore.google.com/detail/debmlhdfkbkbgbckliegaelccegmfigc?utm_source=item-share-cb",
    repo: "",
  },
];

export type Skill = { name: string; Icon: IconType; color: string; lightColor?: string };

export const skillGroups: { category: string; skills: Skill[] }[] = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF", lightColor: "#000000" },
      { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", Icon: SiCss, color: "#1572B6" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Zustand", Icon: ZustandIcon, color: "#ED8936" },
      { name: "React Query", Icon: SiReactquery, color: "#FF4154" },
      { name: "Vite", Icon: SiVite, color: "#646CFF" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", Icon: SiExpress, color: "#FFFFFF", lightColor: "#000000" },
      { name: "REST APIs", Icon: TbApi, color: "#38BDF8", lightColor: "#0284C7" },
      { name: "Socket.IO", Icon: SiSocketdotio, color: "#FFFFFF", lightColor: "#010101" },
      { name: "JWT Auth", Icon: SiJsonwebtokens, color: "#D63E56" },
    ],
  },
  {
    category: "Database & Tools",
    skills: [
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "Supabase", Icon: SiSupabase, color: "#3FCF8E" },
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub", Icon: SiGithub, color: "#FFFFFF", lightColor: "#181717" },
      { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
      { name: "Cloudinary", Icon: SiCloudinary, color: "#3448C5" },
    ],
  },
  {
    category: "Spoken Languages",
    skills: [
      { name: "English", Icon: TbLanguage, color: "#3B82F6" },
      { name: "Hindi", Icon: TbLanguage, color: "#F97316" },
    ],
  },
];

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  school: "Swami Rama Himalayan University, Dehradun",
  period: "2023 – 2026",
};
