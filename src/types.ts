export interface TeamMember {
  name: string;
  role: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  fullDescription?: string;
  features?: string[];
  role?: string;
  team?: TeamMember[];
  year?: string;
  tags: string[];
  status: string;
  appLogo: string;
  accentColor?: string;
  iconColor: string;
  link: string;
  cardImage?: string;
  bannerImage?: string;
  gallery?: string[];
}

export interface Socials {
  email: string;
  github: string;
  linkedin: string;
}

export interface Assets {
  profileImage: string;
  profileFallback: string;
}