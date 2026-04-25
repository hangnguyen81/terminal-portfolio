export interface Experience {
  company: string;
  title: string;
  location: string;
  period: string;
  current?: boolean;
  team?: string;
  bullets: string[];
  stack?: string[];
}

export interface ShowcaseProject {
  name: string;
  year: string;
  description: string;
  tags: string[];
  role: string;
  highlight: string;
}

export interface ArchiveItem {
  name: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface ArchiveGroup {
  category: string;
  items: ArchiveItem[];
}

export interface Education {
  school: string;
  degree: string;
  location: string;
  period: string;
  grade?: string;
}

export interface Contact {
  email: string;
  linkedin: string;
  github: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Beyond {
  languages: Language[];
  hobbies: string;
  references: string;
}

export interface Portfolio {
  name: string;
  role: string;
  location: string;
  tagline: string;
  tagline_long: string;
  years: string;
  specialties: string[];
  contact: Contact;
  experience: Experience[];
  showcase: ShowcaseProject[];
  archive: ArchiveGroup[];
  stack: Record<string, string[]>;
  education: Education[];
  beyond: Beyond;
}

export interface Theme {
  bg: string;
  bgAlt: string;
  bgPanel: string;
  text: string;
  textMute: string;
  textDim: string;
  rule: string;
  accent: string;
  accent2: string;
  keyword: string;
  string: string;
  comment: string;
  number: string;
}

export type FileKey =
  | 'about.md'
  | 'relex.ts'
  | 'earlier.ts'
  | 'featured.tsx'
  | 'archive.tsx'
  | 'stack.json'
  | 'education.md'
  | 'contact.sh';

export interface FileEntry {
  icon: string;
  name: string;
  type: 'md' | 'ts' | 'tsx' | 'json' | 'sh' | 'dir';
  child?: boolean;
}
