export interface NavLink {
  label: string;
  href: string;
  section: string;
}

export interface PhilosophyCard {
  num: string;
  icon: string;
  title: string;
  text: string;
}

export interface EducationItem {
  year: string;
  degree: string;
  school: string;
  logoUrl?: string;
}

export interface ProjectTag {
  icon?: string;
  label: string;
}

export interface Project {
  caseNum: string;
  category: string;
  title: string;
  titleEm: string;
  description: string;
  challenge: string;
  solution: string;
  imageSrc: string;
  imageAlt: string;
  imageLabel: string;
  tags: ProjectTag[];
  demoHref: string;
  repoHref: string;
}

export interface MatrixColumn {
  heading: string;
  items: { icon: string; label: string }[];
}

export interface Certificate {
  org: string;
  name: string;
  meta: string;
  verifyHref: string;
  badgeIcon: string;
  watermarkSrc: string;
}

export interface Article {
  date: string;
  title: string;
  href: string;
}

export interface ContactLink {
  icon: string;
  sublabel: string;
  name: string;
  href: string;
}
