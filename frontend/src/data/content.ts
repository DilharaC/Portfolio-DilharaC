import type {
  Article,
  Certificate,
  ContactLink,
  EducationItem,
  MatrixColumn,
  NavLink,
  PhilosophyCard,
  Project,
} from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about", section: "about" },
  { label: "Engineering", href: "#projects", section: "projects" },
  { label: "Stack", href: "#matrix", section: "matrix" },
  { label: "Journal", href: "#writing", section: "writing" },
  { label: "Contact", href: "#contact", section: "contact" },
];

export const MARQUEE_ITEMS: { icon: string; label: string }[] = [
  { icon: "bx bxl-react", label: "React" },
  { icon: "bx bx-code-block", label: "Next.js" },
  { icon: "bx bxl-typescript", label: "TypeScript" },
  { icon: "bx bxl-nodejs", label: "Node.js" },
  { icon: "bx bx-data", label: "PostgreSQL" },
  { icon: "bx bx-transfer", label: "Socket.io" },
  { icon: "bx bxl-docker", label: "Docker" },
  { icon: "bx bxl-php", label: "Laravel" },
  { icon: "bx bx-server", label: "Redis" },
  { icon: "bx bx-cloud", label: "Supabase" },
  { icon: "bx bxl-aws", label: "AWS" },
  { icon: "bx bx-git-branch", label: "Prisma" },
];

export const PHILOSOPHY_CARDS: PhilosophyCard[] = [
  {
    num: "01",
    icon: "bx bx-shield-quarter",
    title: "Reliability",
    text: "Systems designed with strict type-safety and automated testing to ensure 99.9% uptime in production environments.",
  },
  {
    num: "02",
    icon: "bx bx-zap",
    title: "Velocity",
    text: "Optimized workflows and modular architecture that allow for rapid, confident feature deployment at any scale.",
  },
  {
    num: "03",
    icon: "bx bx-bullseye",
    title: "Observability",
    text: "Deep instrumentation to understand exactly how users interact with every byte of the system in real time.",
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    year: "2018 — 2022",
    degree: "BSc (Hons) in Software Engineering",
    school: "Cardiff Metropolitan University Via ICBT Campus",
    logoUrl: "https://icbt.lk/wp-content/uploads/2026/02/Uni-Logo-01-3-2048x1448.png",
  },
  {
    year: "Ongoing",
    degree: "Postgraduate Diploma in CS",
    school: "IIT (Informatics Institute of Technology)",
  },
];

export const PROJECTS: Project[] = [
  {
    caseNum: "Case 01 / Social Impact Platform",
    category: "EDUCATION PLATFORM",
    title: "School Donation ",
    titleEm: "Platform",
    description:
      "Designed and developed a platform that enables donors to discover school needs, fund educational initiatives, and track contributions with complete transparency.",
    challenge: "Limited Educational Funding.",
    solution: "Transparent Donation Tracking.",
    imageSrc: "./images/donateweb.png",
    imageAlt: "School Donation Platform",
    imageLabel: "EDUCATION PLATFORM",
    tags: [
      { icon: "bx bxl-react", label: "React" },
      { icon: "bx bxl-typescript", label: "TypeScript" },
      { icon: "bx bxl-php", label: "Laravel" },
      { icon: "bx bx-transfer-alt", label: "RestAPI" },
      { icon: "bx bx-palette", label: "TailwindCSS" },
    ],
    demoHref: "#",
    repoHref: "#",
  },
  {
    caseNum: "Case 02 / Fitness Management Platform",
    category: "FITZONE • FITNESS MANAGEMENT PLATFORM",
    title: "Fitzone ",
    titleEm: "Platform",
    description:
      "Built a fitness management platform that streamlines member engagement, program discovery, and online fitness services through a responsive and user-focused digital experience.",
    challenge: "Limited Online Fitness Accessibility.",
    solution: "Centralized Fitness Management Platform.",
    imageSrc: "./images/1.png",
    imageAlt: "Fitzone Platform",
    imageLabel: "FITZONE • FITNESS MANAGEMENT PLATFORM",
    tags: [
      { icon: "bx bxl-php", label: "PHP" },
      { icon: "bx bx-data", label: "MySQL" },
      { icon: "bx bxl-javascript", label: "JavaScript" },
      { label: "HTML5" },
      { icon: "bx bxl-css3", label: "CSS3" },
    ],
    demoHref: "#",
    repoHref: "#",
  },
  {
    caseNum: "Case 03 / Social Impact Platform",
    category: "EDUCATION PLATFORM",
    title: "School Donation ",
    titleEm: "Platform",
    description:
      "Designed and developed a platform that enables donors to discover school needs, fund educational initiatives, and track contributions with complete transparency.",
    challenge: "Limited Educational Funding.",
    solution: "Transparent Donation Tracking.",
    imageSrc: "./images/donateweb.png",
    imageAlt: "School Donation Platform",
    imageLabel: "EDUCATION PLATFORM",
    tags: [
      { icon: "bx bxl-react", label: "React" },
      { icon: "bx bxl-typescript", label: "TypeScript" },
      { icon: "bx bxl-php", label: "Laravel" },
      { icon: "bx bx-transfer-alt", label: "RestAPI" },
      { icon: "bx bx-palette", label: "TailwindCSS" },
    ],
    demoHref: "#",
    repoHref: "#",
  },
];

export const MATRIX_COLUMNS: MatrixColumn[] = [
  {
    heading: "Frontend",
    items: [
      { icon: "bx bxl-react", label: "React / Next.js" },
      { icon: "bx bxl-typescript", label: "TypeScript (Strict)" },
      { icon: "bx bxl-javascript", label: "JavaScript (ES6+)" },
      { icon: "bx bx-palette", label: "Tailwind CSS" },
    ],
  },
  {
    heading: "Backend",
    items: [
      { icon: "bx bxl-nodejs", label: "Node.js / Express" },
      { icon: "bx bxl-php", label: "Laravel (PHP)" },
      { icon: "bx bx-code-alt", label: "ASP.NET / C#" },
      { icon: "bx bx-transfer", label: "REST APIs / Socket.io" },
    ],
  },
  {
    heading: "Database",
    items: [
      { icon: "bx bx-data", label: "PostgreSQL" },
      { icon: "bx bx-data", label: "MySQL" },
      { icon: "bx bxl-firebase", label: "Firebase (Firestore / Auth)" },
    ],
  },
  {
    heading: "Tools & Infra",
    items: [
      { icon: "bx bxl-github", label: "Git & GitHub" },
      { icon: "bx bxl-docker", label: "Docker / Containers" },
      { icon: "bx bxl-aws", label: "AWS / S3" },
      { icon: "bx bx-map", label: "QGIS / RStudio" },
    ],
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    org: "SLIIT",
    name: "AI/ML Engineer — Stage 2",
    meta: "May 2026 · Credential ID: fxk5l59cif",
    verifyHref: "https://code.sliit.org/certificates/fxk5l59cif",
    badgeIcon: "bx bx-certification",
    watermarkSrc: "https://upload.wikimedia.org/wikipedia/commons/a/a0/New_Logo_of_SLIIT.png",
  },
  {
    org: "University of Moratuwa",
    name: "Python Programming",
    meta: "May 2026 · Credential ID: Z7UGDMWPPN",
    verifyHref: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
    badgeIcon: "bx bxl-python",
    watermarkSrc: "https://upload.wikimedia.org/wikipedia/en/6/60/University_of_Moratuwa_logo.png",
  },
  {
    org: "LinkedIn Learning",
    name: "RESTful API Developer",
    meta: "May 2026 · Credential ID: Z7UGDMWPPN",
    verifyHref:
      "https://www.linkedin.com/learning/certificates/02fddc7c446d2646a12dbf5f797ae4224a3cda9c31cbba74f0df0f12b86cab7e",
    badgeIcon: "bx bx-transfer-alt",
    watermarkSrc: "https://images.seeklogo.com/logo-png/41/1/linkedin-learning-logo-png_seeklogo-412128.png",
  },
  {
    org: "SLIIT",
    name: "AI/ML Engineer — Stage 1",
    meta: "May 2026 · Credential ID: tlrkor5b7x",
    verifyHref: "https://code.sliit.org/certificates/tlrkor5b7x",
    badgeIcon: "bx bx-certification",
    watermarkSrc: "https://upload.wikimedia.org/wikipedia/commons/a/a0/New_Logo_of_SLIIT.png",
  },
  {
    org: "LinkedIn Learning",
    name: "Cisco Network Security: Secure Routing and Switching",
    meta: "May 2026",
    verifyHref:
      "https://www.linkedin.com/learning/certificates/5f1c9703d040a65cfa0a870a50246234132cf7e310383168d4a45445d7c0c313?trk=share_certificate",
    badgeIcon: "bx bx-transfer-alt",
    watermarkSrc: "https://images.seeklogo.com/logo-png/41/1/linkedin-learning-logo-png_seeklogo-412128.png",
  },
  {
    org: "LinkedIn Learning",
    name: "PostgreSQL: Advanced Queries",
    meta: "May 2026",
    verifyHref:
      "https://www.linkedin.com/learning/certificates/473673056aa2bdcc28b7a65d3130731bff0940accb656a3060dfea68bf5ee21e?trk=share_certificate",
    badgeIcon: "bx bx-transfer-alt",
    watermarkSrc: "https://images.seeklogo.com/logo-png/41/1/linkedin-learning-logo-png_seeklogo-412128.png",
  },
];

export const ARTICLES: Article[] = [
  {
    date: "NOV 2024",
    title: "The State of Real-time Systems: Beyond WebSockets",
    href: "https://medium.com",
  },
  {
    date: "SEP 2024",
    title: "Why Local-First is the Future of Mobile Web PWAs",
    href: "https://medium.com",
  },
  {
    date: "JUN 2024",
    title: "Type-Safety in Large Scale Node.js Environments",
    href: "https://medium.com",
  },
];

export const CONTACT_LINKS: ContactLink[] = [
  { icon: "bx bxl-linkedin-square", sublabel: "Professional Hub", name: "LinkedIn", href: "#" },
  { icon: "bx bxl-github", sublabel: "Source Control", name: "GitHub", href: "#" },
  { icon: "bx bx-x", sublabel: "Microblog", name: "X / Twitter", href: "#" },
  { icon: "bx bxl-instagram", sublabel: "Visual Feed", name: "Instagram", href: "#" },
  { icon: "bx bx-edit-alt", sublabel: "Editorial", name: "Medium / Journal", href: "https://medium.com" },
];
