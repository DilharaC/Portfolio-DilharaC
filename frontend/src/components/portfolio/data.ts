
import bgpng from "../../assets/bg.png";
export type SocialLink = { label: string; href: string };

export type Profile = {
  name: string;
  role: string;
  location: string;
  email: string;
  tagline: string;
  socials: SocialLink[];
};

export type Images = {
  heroBg: string;
  portrait: string;
  projectTrading: string;
  projectAI: string;
  blogKeyboard: string;
};

export type NavLink = { label: string; href: string };

export type SkillCategory = "Frontend" | "Backend" | "Architecture" | "Tools";

export type ProjectImage = "projectTrading" | "projectAI" | null;

export type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  year: string;
  description: string;
  stack: string[];
  image: ProjectImage;
  href: string;
  size: "lg" | "sm" | "md";
};

export type Experience = {
  year: string;
  role: string;
  company: string;
  note: string;
};

export type BlogPost = {
  id: string;
  kicker: string;
  title: string;
  date: string;
  excerpt?: string;
  featured?: boolean;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const profile: Profile = {
  name: "Chamuditha Dilhara",
  role: "Software Developer / Engineer",
  location: "Kandy, Sri Lanka",
  email: "chamudithadilhara985@gmail.com",
  tagline:
    "I design scalable systems and build intuitive, custom interfaces focused on real-world use.",
  socials: [
    { label: "Github", href: "https://github.com/DilharaC" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dilharachamuditha/" },
    { label: "Twitter / X", href: "https://x.com/chamuditha985?s=21" },
    { label: "Dribbble", href: "https://dribbble.com" },
  ],
};

export const images: Images = {
  heroBg:
    bgpng,
  portrait:
    "https://static.prod-images.emergentagent.com/jobs/f3bfbba1-2645-4875-9cae-cfed9919f314/images/2a3fa6f99ca1e4e16f7ac58c8d114080fe09a182e10a3d882b70a6803c1cb359.png",
  projectTrading:
    "https://static.prod-images.emergentagent.com/jobs/f3bfbba1-2645-4875-9cae-cfed9919f314/images/2ae23d31fba92b1d1e21fde7050e1399c1a55655149586ec17bcfea8cb45fad5.png",
  projectAI:
    "https://static.prod-images.emergentagent.com/jobs/f3bfbba1-2645-4875-9cae-cfed9919f314/images/ffd29e11239b5a7152bcaf1ba17b3defaf91f9f8dc9b3a3c53e9fd54c5074844.png",
  blogKeyboard:
    "https://static.prod-images.emergentagent.com/jobs/f3bfbba1-2645-4875-9cae-cfed9919f314/images/7b3f310df871283a4e966b9a9b0f4b7d5b1576d954b419d02887ce892ef0a207.png",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export const skills: Record<SkillCategory, string[]> = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind", "Three.js", "Framer Motion"],
  Backend: ["Node.js", "Python", "FastAPI", "RestAPI", "GraphQL", "PostgreSQL"],
  Architecture: ["Microservices", "Event-Driven", "Domain-Driven", "Kubernetes", "AWS", "Terraform"],
  Tools: ["Git", "Figma", "Linear", "Docker", "Vercel", "Sentry"],
};

export const projects: Project[] = [
  {
    id: "trading-os",
    index: "01",
    title: "Aperture / Trading OS",
    category: "Fintech · Real-time",
    year: "2025",
    description:
      "A sub-50ms market terminal handling 1.2M events/min with a custom charting system and clean dashboard UI.",
    stack: ["React", "TypeScript", "Tailwind", "Node.js"],
    image: "projectTrading",
    href: "#",
    size: "lg",
  },
  {
    id: "nimbus-ai",
    index: "02",
    title: "Nimbus AI Studio",
    category: "AI · Developer Tools",
    year: "2025",
    description:
      "An AI workflow builder for creating chatbot flows, prompts, and automation tools with a modern interface.",
    stack: ["Next.js", "Python", "FastAPI", "PostgreSQL"],
    image: "projectAI",
    href: "#",
    size: "sm",
  },
  {
    id: "northwind",
    index: "03",
    title: "Northwind Analytics",
    category: "Analytics · Dashboard",
    year: "2025",
    description:
      "A realtime analytics dashboard for ecommerce operations, orders, customers, and sales performance.",
    stack: ["React", "TypeScript", "MongoDB", "Express"],
    image: null,
    href: "#",
    size: "md",
  },
  {
    id: "lumen-ide",
    index: "04",
    title: "Lumen IDE",
    category: "Developer Tool · Web App",
    year: "2024",
    description:
      "A browser-based collaborative IDE with project management, code preview, and AI assistant features.",
    stack: ["React", "WebSockets", "Monaco", "Node.js"],
    image: null,
    href: "#",
    size: "md",
  },
];

export const experience: Experience[] = [
  {
    year: "2026 — Present",
    role: "Full-Stack Developer",
    company: "Gencey Global",
    note: "Building full-stack web applications, dashboards, APIs, and chatbot features.",
  },
  {
    year: "2025",
    role: "Frontend Developer",
    company: "Personal Projects",
    note: "Designed and developed modern portfolio websites, dashboards, and landing pages.",
  },
  {
    year: "2024 — 2025",
    role: "Student Developer",
    company: "ICBT Projects",
    note: "Created academic web applications using React, TypeScript, Node.js, and databases.",
  },
];

export const blog: BlogPost[] = [
  {
    id: "p1",
    kicker: "Essay · 2 min read",
    title: "How I Build Clean Full-Stack Applications",
    date: "2026",
    excerpt:
      "My process for planning frontend, backend, database, API structure, and clean UI before writing production code.",
    featured: true,
  },
  {
    id: "p2",
    kicker: "Notes · 3 min read",
    title: "Why TypeScript Makes React Projects Better",
    date: "2026",
  },
  {
    id: "p3",
    kicker: "Notes · 4 min read",
    title: "Designing Dashboards That Feel Professional",
    date: "2025",
  },
  {
    id: "p4",
    kicker: "Notes · 3 min read",
    title: "What I Learned From Building Chatbot Features",
    date: "2025",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Chamuditha builds clean interfaces and focuses on making the user experience simple and professional.",
    author: "Project Collaborator",
    role: "QA / Product Review",
  },
  {
    quote:
      "He is improving fast as a full-stack developer and pays attention to both UI design and backend logic.",
    author: "Team Member",
    role: "Development Partner",
  },
  {
    quote:
      "A motivated developer with strong interest in modern web applications, dashboards, and chatbot systems.",
    author: "Academic Reviewer",
    role: "Project Evaluation",
  },
];