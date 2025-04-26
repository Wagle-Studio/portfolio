import {
  HeroContent,
  HeroBannerContent,
  AboutContent,
  ContactContent,
  FooterContent,
  HeaderContent,
  ProcessContent,
  PromisesContent,
  ExamplesContent,
  MVPContent
} from '../types/components';

export const heroContent: HeroContent = {
  id: 'hero',
  title: 'Développeur Web Full Stack',
  subtitle: 'Création de sites web modernes et performants',
  description: 'Je conçois et développe des applications web sur mesure, en utilisant les dernières technologies pour offrir une expérience utilisateur optimale.',
  cta: {
    text: 'Découvrir mes projets',
    href: '#projects',
    variant: 'primary'
  }
};

export const heroBannerContent: HeroBannerContent = {
  id: 'hero-banner',
  title: {
    main: 'Libérez votre potentiel',
    emphasis: 'avec une application métier sur mesure'
  },
  subtitle: {
    text: 'Je conçois et développe des applications métiers intuitives et efficaces pour automatiser vos tâches, libérer votre temps et faire progresser votre entreprise',
    emphasis: [
      'applications métiers intuitives et efficaces',
      'automatiser vos tâches, libérer votre temps'
    ]
  },
  cta: {
    text: 'Découvrez comment',
    href: '#',
    variant: 'primary'
  }
};

export const aboutContent: AboutContent = {
  id: 'about',
  title: 'À propos',
  subtitle: 'Mon parcours et mes compétences',
  description: 'Passionné par le développement web et l\'innovation, je mets mon expertise au service de vos projets.',
  image: {
    src: '/images/about.jpg',
    alt: 'Photo de profil'
  },
  skills: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Docker'],
  experience: {
    years: 5,
    description: 'Années d\'expérience dans le développement web'
  }
};

export const contactContent: ContactContent = {
  id: 'contact',
  title: 'Contact',
  subtitle: 'Parlons de votre projet',
  form: {
    fields: {
      name: 'Nom',
      email: 'Email',
      message: 'Message'
    },
    submit: {
      text: 'Envoyer',
      href: '#',
      variant: 'primary'
    }
  },
  contactInfo: {
    email: 'contact@waglestudio.fr',
    phone: '+33 6 12 34 56 78',
    address: 'Paris, France'
  }
};

export const footerContent: FooterContent = {
  brand: {
    name: 'Wagle Studio',
    author: 'Par Kévin Wolff'
  },
  information: {
    siret: 'SIRET : 84132048400022',
    tva: 'TVA : FR27841320484',
    tvaNote: 'TVA non applicable Org. Form.'
  },
  navigation: [
    { text: 'Haut de la page', href: '#' },
    { text: 'Méthode', href: '#' },
    { text: 'À propos', href: '#' },
    { text: 'Contact', href: '#' }
  ],
  socialMedia: [
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: 'linkedin'
    },
    {
      platform: 'GitHub',
      url: 'https://github.com',
      icon: 'github'
    }
  ]
};

export const headerContent: HeaderContent = {
  logo: {
    src: '/images/logo.svg',
    alt: 'Wagle Studio Logo'
  },
  navigation: [
    { text: 'Accueil', href: '#', icon: 'home' },
    { text: 'Services', href: '#services', icon: 'services' },
    { text: 'Projets', href: '#projects', icon: 'projects' },
    { text: 'Contact', href: '#contact', icon: 'contact' }
  ],
  cta: {
    text: 'Demander un devis',
    href: '#contact',
    variant: 'primary'
  }
};

export const processContent: ProcessContent = {
  id: 'process',
  title: 'Notre processus',
  subtitle: 'Une méthodologie éprouvée',
  steps: [
    {
      title: 'Analyse',
      description: 'Compréhension approfondie de vos besoins',
      icon: 'analysis'
    },
    {
      title: 'Conception',
      description: 'Création d\'une solution sur mesure',
      icon: 'design'
    },
    {
      title: 'Développement',
      description: 'Implémentation avec les meilleures pratiques',
      icon: 'development'
    },
    {
      title: 'Livraison',
      description: 'Support et maintenance continue',
      icon: 'delivery'
    }
  ]
};

export const promisesContent: PromisesContent = {
  id: 'promises',
  title: 'Nos engagements',
  subtitle: 'Des solutions fiables et performantes',
  promises: [
    {
      title: 'Qualité',
      description: 'Code propre et maintenable',
      icon: 'quality'
    },
    {
      title: 'Performance',
      description: 'Applications rapides et optimisées',
      icon: 'performance'
    },
    {
      title: 'Sécurité',
      description: 'Protection des données et des utilisateurs',
      icon: 'security'
    }
  ]
};

export const examplesContent: ExamplesContent = {
  id: 'examples',
  title: 'Nos réalisations',
  subtitle: 'Des projets qui font la différence',
  examples: [
    {
      title: 'E-commerce',
      description: 'Plateforme de vente en ligne sur mesure',
      image: {
        src: '/images/ecommerce.jpg',
        alt: 'Projet e-commerce'
      },
      link: {
        text: 'Voir le projet',
        href: '#'
      }
    },
    {
      title: 'Application métier',
      description: 'Solution de gestion interne',
      image: {
        src: '/images/business.jpg',
        alt: 'Projet application métier'
      },
      link: {
        text: 'Voir le projet',
        href: '#'
      }
    }
  ]
};

export const mvpContent: MVPContent = {
  id: 'mvp',
  title: 'MVP',
  subtitle: 'Version minimale viable',
  features: [
    {
      title: 'Fonctionnalités essentielles',
      description: 'Focus sur les fonctionnalités clés',
      icon: 'core'
    },
    {
      title: 'Développement rapide',
      description: 'Time-to-market optimisé',
      icon: 'speed'
    },
    {
      title: 'Feedback utilisateur',
      description: 'Validation rapide des hypothèses',
      icon: 'feedback'
    }
  ],
  cta: {
    text: 'En savoir plus',
    href: '#',
    variant: 'primary'
  }
}; 