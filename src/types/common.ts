export interface Link {
  text: string;
  href: string;
}

export interface Section {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
}

export interface CTA extends Link {
  variant?: 'primary' | 'secondary';
}

export interface Image {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface NavigationItem extends Link {
  icon?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

export interface SocialMedia {
  platform: string;
  url: string;
  icon: string;
} 