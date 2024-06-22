import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Francisco José Rodríguez Afonso",
  initials: "FJrodafo",
  location: "La Orotava, Canary Islands, Spain",
  locationLink: "https://www.google.com/maps/place/Canarias",
  about: "Full-Stack web application developer, musician, trumpeter and pianist from the Canary Islands.",
  summary: "As a Full-Stack web application developer, I design and develop both the frontend and backend, providing comprehensive and satisfying solutions for my clients.",
  avatarUrl: "https://avatars.githubusercontent.com/u/126250262?v=4",
  personalWebsiteUrl: "https://fjrodafo.vercel.app/",
  contact: {
    email: "FJrodafo@gmail.com",
    website: "https://fjrodafo.vercel.app/",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fjrodafo",
        icon: LinkedInIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/FJrodafo",
        icon: GitHubIcon,
      },
    ],
  },
  experience: [
    {
      company: "...",
      link: "...",
      badges: ["..."],
      title: "...",
      start: "...",
      end: "...",
      description: "...",
    },
  ],
  education: [
    {
      school: "IES Puerto de la Cruz - Telesforo Bravo",
      degree: "Higher Degree Training Cycle, Web Application Development",
      start: "2022",
      end: "Present",
    },
    {
      school: "CSMC - Conservatorio Superior de Música de Canarias",
      degree: "Musical performance, Trumpet",
      start: "2020",
      end: "Present",
    },
    {
      school: "CPMT - Conservatorio Profesional de Música de Tenerife",
      degree: "Musical performance, Trumpet",
      start: "2018",
      end: "2021",
    },
  ],
  skills: [
    "Git",
    "HTML",
    "CSS",
    "React",
    "Node.js",
    "JavaScript",
    "Java",
    "PHP",
    "SQL",
    "MySQL",
  ],
  projects: [
    {
      title: "DiscordBOT",
      techStack: ["App", "JavaScript"],
      description: "A simple Discord bot made in JavaScript!",
      link: {
        label: "github.com",
        href: "https://github.com/FJrodafo/DiscordBOT",
      },
    },
    {
      title: "dauntless-builder",
      techStack: ["Contribution", "TypeScript"],
      description: "Create and share Dauntless builds with your friends!",
      link: {
        label: "github.com",
        href: "https://github.com/atomicptr/dauntless-builder",
      },
    },
    {
      title: "free-port",
      techStack: ["Package", "JavaScript"],
      description: "Fast and minimalist port finder!",
      link: {
        label: "github.com",
        href: "https://github.com/FJrodafo/free-port",
      },
    },
    {
      title: "colors",
      techStack: ["Package", "JavaScript"],
      description: "Fast and minimalist library for terminal output formatting with ANSI colors!",
      link: {
        label: "github.com",
        href: "https://github.com/FJrodafo/colors",
      },
    },
  ],
} as const;
