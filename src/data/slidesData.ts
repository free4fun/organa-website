import { CarouselSlideType } from '../types/carousel.types';

export const slidesData: CarouselSlideType[] = [
  {
    title: "Transformación Digital",
    subtitle: "Impulsa tu Negocio",
    description: "Soluciones tecnológicas innovadoras que transforman tu empresa para la era digital",
    background: "/images/slides/digital-transformation.jpg",
    backgroundColor: "rgba(0,0,0,0.5)",
    buttonText: "Comenzar Ahora",
    buttonLink: "/contacto"
  },
  {
    title: "Desarrollo Web",
    subtitle: "Sitios que Convierten",
    description: "Creamos experiencias web únicas optimizadas para resultados",
    background: "/images/slides/web-development.jpg",
    backgroundColor: "rgba(0,0,0,0.5)",
    buttonText: "Ver Portfolio",
    buttonLink: "/portfolio"
  },
  {
    title: "Aplicaciones Móviles",
    subtitle: "Conecta con tus Usuarios",
    description: "Apps nativas y multiplataforma que destacan en el mercado",
    background: "/images/slides/mobile-apps.jpg",
    backgroundColor: "rgba(0,0,0,0.5)",
    buttonText: "Ver Demos",
    buttonLink: "/demos/apps"
  }
];

export const carouselSettings = {
  autoplay: true,
  interval: 5000,
  indicators: true,
  controls: true,
  pause: true
};