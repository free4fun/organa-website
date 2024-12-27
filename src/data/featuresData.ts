import { Feature } from '../types/feature.types';
import { 
  Code2, 
  Globe, 
  LayoutDashboard, 
  Shield, 
  Smartphone, 
  Zap
} from 'lucide-react';

export const featuresData: Feature[] = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description: "Creamos sitios web modernos, responsivos y optimizados para SEO que impulsan el crecimiento de tu negocio.",
    link: "/servicios/desarrollo-web"
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Móviles",
    description: "Desarrollo de apps nativas y multiplataforma con las últimas tecnologías y mejores prácticas.",
    link: "/servicios/apps-moviles"
  },
  {
    icon: LayoutDashboard,
    title: "UI/UX Design",
    description: "Diseño centrado en el usuario que mejora la experiencia y aumenta las conversiones.",
    link: "/servicios/diseno-ux"
  },
  {
    icon: Shield,
    title: "Ciberseguridad",
    description: "Protección integral de datos y sistemas con los más altos estándares de seguridad.",
    link: "/servicios/ciberseguridad"
  },
  {
    icon: Code2,
    title: "Desarrollo Backend",
    description: "Arquitecturas escalables y APIs robustas para potenciar tu infraestructura digital.",
    link: "/servicios/backend"
  },
  {
    icon: Zap,
    title: "Optimización",
    description: "Mejora del rendimiento y velocidad de tus aplicaciones existentes.",
    link: "/servicios/optimizacion"
  }
];

// Tipos de características destacadas para la página de inicio
export const highlightedFeatures = featuresData.slice(0, 3);

// Características para sección de servicios
export const serviceFeatures = featuresData;

// Características para la página de precios
export const pricingFeatures = featuresData.map(feature => ({
  name: feature.title,
  description: feature.description
}));