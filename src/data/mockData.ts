import { NavItem, Service, PortfolioItem, Testimonial } from '../types';

export const navItems: NavItem[] = [
  {
    label: 'Inicio',
    href: '/'
  },
  {
    label: 'Servicios',
    href: '/servicios',
    subItems: [
      { label: 'Desarrollo Web', href: '/servicios/desarrollo-web' },
      { label: 'Diseño UI/UX', href: '/servicios/diseno-uiux' },
      { label: 'Marketing Digital', href: '/servicios/marketing-digital' },
      { label: 'SEO', href: '/servicios/seo' },
      { label: 'Desarrollo Backend', href: '/servicios/backend' },
      { label: 'Ciberseguridad', href: '/servicios/ciberseguridad' }
    ]
  },
  {
    label: 'Portfolio',
    href: '/portfolio'
  },
  {
    label: 'Sobre Nosotros',
    href: '/sobre-nosotros'
  },
  {
    label: 'Testimonios',
    href: '/testimonios'
  },
  {
    label: 'Contacto',
    href: '/contacto'
  }
];

export const services: Service[] = [
  {
    icon: 'code',
    title: 'Desarrollo Blockchain',
    description: 'Implementación de smart contracts y desarrollo de dApps personalizadas.',
  },
  {
    icon: 'search',
    title: 'SEO Internacional',
    description: 'Estrategias de posicionamiento global y optimización multilingüe.',
  },
  {
    icon: 'zap',
    title: 'Optimización de Rendimiento',
    description: 'Mejora de la velocidad y eficiencia de aplicaciones web y móviles.',
  },
  {
    icon: 'shield',
    title: 'Seguridad Web3',
    description: 'Auditorías de seguridad en smart contracts y protección de datos blockchain.',
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'DeFi Dashboard',
    category: 'blockchain',
    image: '/assets/portfolio/defi-dashboard.jpg',
    description: 'Dashboard interactivo para monitorear y gestionar activos DeFi.',
    technologies: ['React', 'Web3.js', 'Solidity', 'GraphQL'],
  },
  {
    id: 2,
    title: 'SEO Global',
    category: 'marketing',
    image: '/assets/portfolio/seo-global.jpg',
    description: 'Estrategia de SEO multilingüe para empresa de e-commerce.',
    technologies: ['SEO', 'Content Strategy', 'Analytics', 'International SEO'],
  },
  {
    id: 3,
    title: 'Smart Contract Audit',
    category: 'blockchain',
    image: '/assets/portfolio/smart-contract-audit.jpg',
    description: 'Auditoría de seguridad para smart contracts de una plataforma NFT.',
    technologies: ['Solidity', 'Truffle', 'Slither', 'MythX'],
  },
  {
    id: 4,
    title: 'Performance Optimization',
    category: 'development',
    image: '/assets/portfolio/performance-optimization.jpg',
    description: 'Optimización de rendimiento para aplicación web de alta carga.',
    technologies: ['React', 'Redux', 'Webpack', 'Lighthouse'],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ana Martínez',
    position: 'CEO',
    company: 'TechInnovate',
    quote: 'Organa Global transformó nuestra presencia en línea con su experiencia en SEO y desarrollo blockchain.',
    avatar: '/assets/testimonials/ana-martinez.jpg',
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    position: 'CTO',
    company: 'CryptoVentures',
    quote: 'Su auditoría de smart contracts nos ayudó a identificar y corregir vulnerabilidades críticas.',
    avatar: '/assets/testimonials/carlos-rodriguez.jpg',
  },
  {
    id: 3,
    name: 'Laura Sánchez',
    position: 'Marketing Director',
    company: 'GlobalReach',
    quote: 'Gracias a Organa Global, nuestra estrategia de SEO internacional ha dado resultados excepcionales.',
    avatar: '/assets/testimonials/laura-sanchez.jpg',
  },
];