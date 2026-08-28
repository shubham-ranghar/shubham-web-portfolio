# Code Canvas

Build a modern, animated personal portfolio website for a Full-Stack Developer. Use React, Tailwind CSS, and Framer Motion for all animations. Design should feel premium, minimal, and dark-themed (dark background with a vibrant accent color like electric blue or emerald green), with smooth scroll-based animations, hover micro-interactions, and staggered entrance animations for sections.

## Personal Info
- Name: Shubham Ranghar
- Title: Full-Stack Developer 
- Location: Rishikesh, Uttarakhand, India
- Email: shubhamranghar46@gmail.com
- Phone: +91 8445923501
- GitHub: github.com/shubham-ranghar
- LinkedIn: linkedin.com/in/shubham-ranghar

## Sections to include

### 1. Hero Section
- Animated intro with name and title, typewriter or fade-up text animation using Framer Motion.
- Short tagline: "Full-stack developer skilled in React, Node.js, and MongoDB, building production-grade applications end-to-end — from real-time backend systems to polished, responsive UIs."
- Animated CTA buttons: "View Projects" and "Contact Me", plus icon buttons linking to GitHub and LinkedIn.
- Subtle animated background (gradient blobs, particles, or grid pattern with parallax on mouse move).

### 2. About Me
- Brief paragraph: Fresher, available immediately, currently interning at a Delhi-based Web3 development studio, contributing to live production products alongside a professional engineering team.
- Animate this section with a fade/slide-in on scroll (use `whileInView` from Framer Motion).

### 3. Experience (Timeline style)
Animated vertical timeline with scroll-triggered reveal for each entry:

**Software Development Intern — Quon Labs (OPC) Pvt. Ltd.**
*July 2026 – Present | Remote*
- Working as part of the Engineering team at a New Delhi-based studio building production-grade web, mobile, and Web3 products.
- Contributing to feature development and bug fixes on live client products using React.js and Node.js in a remote, fast-paced team environment.
- Collaborating with senior engineers on code reviews and best practices, strengthening production-level development workflow and Git collaboration.

### 4. Projects
Display as animated cards with hover lift/tilt effect (scale + shadow on hover) and staggered entrance:

**LinguaLens — AI-Powered Browser Translation Extension**
*Tech: React 19, TypeScript, Tailwind CSS, WXT (Chrome Extension Framework), Chrome APIs*
- Built and published a Chrome extension on the Chrome Web Store for real-time text translation across 17 languages, using a Shadow DOM-based floating UI to avoid CSS conflicts on any website.
- Integrated the MyMemory Translation API with an OpenAI-compatible LLM as a fallback, powering text simplification, grammar correction, summarization, tone rewriting, and Hinglish translation.
- Designed a primary + AI-backup translation pipeline with debouncing and caching to cut redundant API calls and reduce latency.
- Implemented reliable text-selection handling across single-page apps and iframes using mutation observers, plus translation history and vocabulary tracking via the Chrome Storage API and a Render.com proxy server for secure key management.
- Include a "View on Chrome Web Store" style button and a GitHub button (link placeholders).

### 5. Skills Section (Animated)
Group into categories, each skill shown as an animated badge/chip or icon card (use `react-icons` for tech logos — e.g., `SiJavascript`, `SiTypescript`, `SiReact`, `SiNodedotjs`, `SiExpress`, `SiMongodb`, `SiTailwindcss`, `SiSocketdotio`, `SiPostman`, `SiCloudinary`, `SiSupabase`, `SiGit`, `SiGithub`, `SiVite`). Animate skills with a staggered pop-in / float animation on scroll, and a subtle hover scale + glow on each icon.

- **Languages (with icons):** JavaScript (ES6+), TypeScript
- **Frontend (with icons):** React.js, HTML5, CSS3, Tailwind CSS, Zustand, React Query, Vite
- **Backend (with icons):** Node.js, Express.js, REST APIs, Socket.IO, JWT Auth
- **Database & Tools (with icons):** MongoDB, Supabase, Git, GitHub, Postman, Cloudinary
- **Spoken Languages:** English, Hindi

### 6. Education
**Bachelor of Computer Applications (BCA)**
Swami Rama Himalayan University, Dehradun — 2023 to 2026
Animate as a simple card with fade-in on scroll.

### 7. Contact Section
- Animated contact form (name, email, message) with focus/hover animations on inputs and a submit button with a loading/success micro-animation.
- Show email, phone, and social icons (GitHub, LinkedIn) with hover bounce animation.
- Footer with copyright and quick links.

## Animation & Interaction Requirements
- Use Framer Motion `initial`, `animate`, and `whileInView` for scroll-triggered section reveals (fade + slide up, staggered children).
- Page transition or loading animation on first load (e.g., animated name reveal or loader).
- Smooth scroll navigation with an animated sticky navbar that changes style on scroll and highlights the active section.
- Hover animations on buttons, cards, and icons (scale, glow, or shadow lift).
- Fully responsive for mobile, tablet, and desktop.
- Include a light/dark mode toggle if feasible, defaulting to dark theme.

## Design Style
- Clean, modern, developer-portfolio aesthetic (similar to Vercel/Linear-style minimalism).
- Bold heading typography, generous white space, subtle gradients, and glassmorphism cards where appropriate.
- Consistent accent color used across buttons, links, and highlights.

Generate the full site structure with all these sections, real content as given above, working icons for every listed skill, and smooth Framer Motion animations throughout.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e29a5358-aa08-495a-bb5f-6ca74431fe25).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
