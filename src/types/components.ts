import { Link, Section, CTA, Image, NavigationItem, ContactInfo, SocialMedia } from './common';

export interface HeroContent extends Section {
  cta: CTA;
}

export interface HeroBannerContent {
  id: string;
  title: {
    main: string;
    emphasis: string;
  };
  subtitle: {
    text: string;
    emphasis: string[];
  };
  cta: CTA;
}

export interface AboutContent extends Section {
  image: Image;
  skills: string[];
  experience: {
    years: number;
    description: string;
  };
}

export interface ContactContent extends Section {
  form: {
    fields: {
      name: string;
      email: string;
      message: string;
    };
    submit: CTA;
  };
  contactInfo: ContactInfo;
}

export interface FooterContent {
  brand: {
    name: string;
    author: string;
  };
  information: {
    siret: string;
    tva: string;
    tvaNote: string;
  };
  navigation: NavigationItem[];
  socialMedia: SocialMedia[];
}

export interface HeaderContent {
  logo: Image;
  navigation: NavigationItem[];
  cta: CTA;
}

export interface ProcessContent extends Section {
  steps: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface PromisesContent extends Section {
  promises: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface ExamplesContent extends Section {
  examples: {
    title: string;
    description: string;
    image: Image;
    link: Link;
  }[];
}

export interface MVPContent extends Section {
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  cta: CTA;
} 