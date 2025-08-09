export const SITE = {
  name: "Dibyajyoti Talukdar",
  role: "Software Developer",
  tagline: "Turning ideas into scalable, high-performance web applications",
  description:
    "I am a passionate software developer specializing in Next.js, React.js, Node.js, Express.js, MongoDB, and modern web technologies. I build clean, maintainable, and efficient web applications with a focus on great user experience. I’m always eager to learn and explore new technologies.",
  github: "https://github.com/dibya290",
  linkedin: "https://linkedin.com/in/dibyajyoti-talukdar",
  resumeUrl: "#", // placeholder
};

export type Skill = {
  name: string;
  levelPercent: number; // 0-100
  icon?: string; // react-icons key as string hint
  category:
    | "Languages"
    | "Frameworks"
    | "Databases"
    | "Tools & Tech"
    | "Others";
};

export const SKILLS: Skill[] = [
  { name: "JavaScript", levelPercent: 90, category: "Languages" },
  { name: "TypeScript", levelPercent: 85, category: "Languages" },
  { name: "HTML5", levelPercent: 90, category: "Languages" },
  { name: "CSS3", levelPercent: 85, category: "Languages" },
  { name: "Next.js", levelPercent: 90, category: "Frameworks" },
  { name: "React.js", levelPercent: 90, category: "Frameworks" },
  { name: "Node.js", levelPercent: 85, category: "Frameworks" },
  { name: "Express.js", levelPercent: 85, category: "Frameworks" },
  { name: "MongoDB", levelPercent: 85, category: "Databases" },
  { name: "MySQL", levelPercent: 75, category: "Databases" },
  { name: "Tailwind CSS", levelPercent: 90, category: "Tools & Tech" },
  { name: "Git & GitHub", levelPercent: 85, category: "Tools & Tech" },
  { name: "REST API", levelPercent: 90, category: "Tools & Tech" },
  { name: "JWT Auth", levelPercent: 85, category: "Tools & Tech" },
  { name: "WebSockets", levelPercent: 75, category: "Tools & Tech" },
  { name: "UI/UX design", levelPercent: 70, category: "Others" },
  { name: "API integration", levelPercent: 90, category: "Others" },
  { name: "Deployment (Vercel/Heroku)", levelPercent: 80, category: "Others" },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  points: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Gotisheel Technologies LLP",
    role: "Software Developer",
    period: "2023–Present",
    points: [
      "Built scalable MERN stack applications with complex data filtering and analytics features.",
      "Integrated APIs and implemented authentication & authorization flows.",
      "Worked on video analytics app with AI/ML integration for camera devices.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  live?: string;
  github?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Video Analytics App",
    description:
      "Real-time video analytics with event tracking, filtering, and reporting.",
    tech: ["Next.js", "Node.js", "WebSockets", "MongoDB"],
    image: "/placeholder.svg",
    live: "#",
    github: "#",
  },
  {
    title: "Client Management System",
    description:
      "Next.js + MongoDB CRUD app for managing clients, locations, and reports.",
    tech: ["Next.js", "MongoDB", "Tailwind CSS"],
    image: "/placeholder.svg",
    live: "#",
    github: "#",
  },
  {
    title: "Event Report Dashboard",
    description:
      "Advanced filtering, PDF/Excel downloads, and data visualization.",
    tech: ["React", "Express", "MySQL"],
    image: "/placeholder.svg",
    live: "#",
    github: "#",
  },
];