export interface SlideButton {
    text: string;
    link: string;
  }
  
  export interface SlideCTA {
    primary: SlideButton;
    secondary?: SlideButton;
  }
  
  export interface Slide {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    cta: SlideCTA;
    theme: 'light' | 'dark'; // Para controlar el color del texto según el fondo
    alignment?: 'left' | 'center' | 'right'; // Opcional: para controlar la alineación del contenido
    overlay?: {
      enabled: boolean;
      opacity?: number;
      color?: string;
    };
    animation?: {
      title?: string;      // Clase de animación para el título
      subtitle?: string;   // Clase de animación para el subtítulo
      description?: string;// Clase de animación para la descripción
      cta?: string;       // Clase de animación para los botones
    };
    video?: {
      url: string;
      type: 'background' | 'inline';
      autoplay?: boolean;
      muted?: boolean;
      loop?: boolean;
    };
    mobile?: {
      image?: string;     // Imagen alternativa para móviles
      alignment?: 'left' | 'center' | 'right';
    };
    metadata?: {
      category?: string;
      tags?: string[];
      order?: number;
    };
  }
  
  export interface SlideGroup {
    id: string;
    name: string;
    slides: Slide[];
    settings?: {
      autoplay: boolean;
      interval: number;
      transition: 'fade' | 'slide';
      showArrows: boolean;
      showDots: boolean;
      pauseOnHover: boolean;
    };
  }
  
  export interface SliderSettings {
    slidesToShow: number;
    slidesToScroll: number;
    autoplay: boolean;
    autoplaySpeed: number;
    dots: boolean;
    arrows: boolean;
    infinite: boolean;
    responsive?: Array<{
      breakpoint: number;
      settings: {
        slidesToShow: number;
        slidesToScroll: number;
        infinite?: boolean;
        dots?: boolean;
      };
    }>;
  }
  
  // Constantes para configuraciones predeterminadas
  export const DEFAULT_SLIDER_SETTINGS: SliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };
  
  export const SLIDE_ANIMATIONS = {
    FADE_IN: 'fade-in',
    SLIDE_UP: 'slide-up',
    SLIDE_DOWN: 'slide-down',
    SLIDE_LEFT: 'slide-left',
    SLIDE_RIGHT: 'slide-right',
    ZOOM_IN: 'zoom-in',
    ZOOM_OUT: 'zoom-out'
  } as const;
  
  export const SLIDE_THEMES = {
    LIGHT: 'light',
    DARK: 'dark'
  } as const;