import { 
  FaVideo, 
  FaGraduationCap, 
  FaShoppingCart, 
  FaTasks, 
  FaPalette, 
  FaUser,
} from "react-icons/fa";
import { IconType } from "react-icons";
export const SITE = {
  name: "Dibyajyoti Talukdar",
  title: "Full-Stack Software Developer",
  description:
    "I am a passionate full-stack software developer with 3+ years of experience specializing in Next.js, React.js, Node.js, Express.js, MongoDB, and modern web technologies. I build clean, maintainable, and efficient web applications with a focus on great user experience. I'm always eager to learn and explore new technologies to deliver cutting-edge solutions.",
  github: "https://github.com/akashtal",
  linkedin: "https://linkedin.com/in/dibyajyoti-talukdar",
  resumeUrl: "#", // placeholder
};

export type Skill = {
  name: string;
  levelPercent: number;
  icon?: string; // react-icons key as string hint
  category:
    | "Languages"
    | "Frameworks & Libraries"
    | "Databases"
    | "Tools & Tech"
    | "Others";
};

export const SKILLS: Skill[] = [
  { name: "JavaScript", levelPercent: 95, category: "Languages" },
  { name: "PHP", levelPercent: 75, category: "Languages" },
  { name: "WordPress", levelPercent: 75, category: "Languages" },
  { name: "TypeScript", levelPercent: 90, category: "Languages" },
  { name: "HTML5", levelPercent: 95, category: "Languages" },
  { name: "CSS3", levelPercent: 90, category: "Languages" },
  { name: "Next.js", levelPercent: 95, category: "Frameworks & Libraries" },
  { name: "React.js", levelPercent: 95, category: "Frameworks & Libraries" },
  { name: "Node.js", levelPercent: 90, category: "Frameworks & Libraries" },
  { name: "Express.js", levelPercent: 90, category: "Frameworks & Libraries" },
  { name: "MongoDB", levelPercent: 90, category: "Databases" },
  { name: "MySQL", levelPercent: 80, category: "Databases" },
  { name: "PostgreSQL", levelPercent: 85, category: "Databases" },
  { name: "Tailwind CSS", levelPercent: 95, category: "Frameworks & Libraries" },
  { name: "Bootstrap", levelPercent: 90, category: "Frameworks & Libraries" },
  { name: "Git & GitHub", levelPercent: 90, category: "Tools & Tech" },
  { name: "Docker", levelPercent: 80, category: "Tools & Tech" },
  { name: "JWT Auth", levelPercent: 90, category: "Tools & Tech" },
  { name: "WebSockets", levelPercent: 85, category: "Tools & Tech" },
  { name: "OAuth.js", levelPercent: 85, category: "Tools & Tech" },
  { name: "AI (ChatGPT, Claude)", levelPercent: 80, category: "Tools & Tech" },
  { name: "Frontend Design", levelPercent: 80, category: "Others" },
  { name: "API Integration", levelPercent: 90, category: "Others" },
  { name: "Deployment (Vercel/Heroku)", levelPercent: 85, category: "Others" },
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
    period: "2024–Present",
    points: [
      "Led development of scalable MERN stack applications with complex data filtering and analytics features, improving user experience by 40%.",
      "Integrated third-party APIs and implemented robust authentication & authorization flows using JWT and OAuth2.",
      "Developed a real-time video analytics application with AI/ML integration for camera devices, processing 1000+ video streams simultaneously.",
      "Mentored junior developers and conducted code reviews to maintain high code quality standards.",
      "Collaborated with cross-functional teams to deliver projects on time and within budget.",
    ],
  },
  {
    company: "Freelance Developer",
    role: "Full-Stack Developer",
    period: "2024–2025",
    points: [
      "Built 10+ custom web applications for clients across various industries including e-commerce, healthcare, and education.",
      "Implemented responsive designs and optimized applications for performance, achieving 95+ Lighthouse scores.",
      "Developed RESTful APIs and integrated payment gateways for e-commerce platforms.",
      "Provided ongoing maintenance and support for client applications.",
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
  category?: string;
  icon?: IconType;
};

export const PROJECTS: Project[] = [
  {
    title: "Video Analytics Platform",
    description:
      "A comprehensive real-time video analytics platform with AI-powered object detection, event tracking, and advanced reporting capabilities. Supports multiple camera feeds with real-time processing and alerting system.",
    tech: ["Next.js", "Node.js", "WebSockets", "MongoDB", "TensorFlow.js", "Redis"],
    image: "/video.png",
    live: "#",
    github: "#",
    category: "AI & Machine Learning",
    icon: FaVideo,
  },
  {
    title: "School Management System",
    description:
      "A comprehensive school management system built with PHP and MySQL, featuring student enrollment, teacher management, class scheduling, attendance tracking, exam results, and admin dashboards. Styled with Bootstrap for responsive design and enhanced with custom CSS and JavaScript for interactive functionality.",
    tech: ["PHP", "MySQL", "Bootstrap", "CSS", "JavaScript"],
    image: "/school-dash.jpeg",
    live: "#",
    github: "#",
    category: "Educational Technology",
    icon: FaGraduationCap,
  },
  {
    title: "E-commerce Platform",
    description:
      "A dynamic e-commerce platform built with PHP and MySQL, featuring product catalog management, shopping cart, secure checkout, order tracking, and admin dashboard. Designed with Bootstrap for a responsive UI and enhanced with custom CSS and JavaScript for interactive user experience.",
    tech: ["PHP", "MySQL", "Bootstrap", "CSS", "JavaScript"],
    image: "/ecom-1.jpeg",
    live: "#",
    github: "#",
    category: "E-commerce Solution",
    icon: FaShoppingCart,
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, team collaboration, file sharing, and progress tracking. Includes kanban boards and calendar integration.",
    tech: ["Next.js", "Socket.io", "PostgreSQL", "Prisma", "NextAuth", "Tailwind CSS"],
    image: "/task.png",
    live: "#",
    github: "#",
    category: "Productivity Tool",
    icon: FaTasks,
  },
  {
    title: "Multi Theme Selector",
    description:
      "A customizable theme selector allowing users to switch between multiple color schemes and UI themes in real time, with preferences saved for future visits.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Context API", "LocalStorage"],
    image: "/multi-theam.png",
    live: "#",
    github: "#",
    category: "UI Component",
    icon: FaPalette,
  },
  {
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio website with smooth animations, dark mode support, contact form, and SEO optimization. Built with performance and accessibility in mind.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Icons"],
    image: "/port.png",
    live: "#",
    github: "#",
    category: "Personal Branding",
    icon: FaUser,
  },
];