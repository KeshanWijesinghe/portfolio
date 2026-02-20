export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  gridClass: string;
  year: string;
}

export interface TechSkill {
  name: string;
  level: number;
}

export interface TechCategory {
  title: string;
  techs: TechSkill[];
}

export interface ContactInfo {
  icon: any;
  label: string;
  value: string;
  href: string;
}

export interface SocialLink {
  icon: any;
  href: string;
  label: string;
  platform: string;
}
