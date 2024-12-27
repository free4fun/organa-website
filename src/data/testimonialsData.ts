import { Testimonial } from '../types/testimonial.types';

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    content: "La transformación digital de nuestra empresa fue un éxito total. El equipo entendió perfectamente nuestras necesidades y entregó una solución que superó nuestras expectativas.",
    author: {
      name: "Carlos Rodríguez",
      position: "Director de Tecnología",
      company: "Mercado Express",
      image: "/images/testimonials/carlos-rodriguez.jpg"
    },
    rating: 5,
    featured: true,
    category: "desarrollo-web"
  },
  {
    id: "t2",
    content: "La aplicación móvil que desarrollaron para nuestra startup ha sido clave en nuestro crecimiento. El proceso fue transparente y los resultados, excepcionales.",
    author: {
      name: "Ana María Silva",
      position: "CEO & Fundadora",
      company: "HealthTech Uruguay",
      image: "/images/testimonials/ana-silva.jpg"
    },
    rating: 5,
    featured: true,
    category: "apps-moviles"
  },
  {
    id: "t3",
    content: "Su expertise en UX/UI transformó completamente la experiencia de nuestros usuarios. Vimos un incremento del 150% en las conversiones después del rediseño.",
    author: {
      name: "Diego Martínez",
      position: "Product Manager",
      company: "FinTech Solutions",
      image: "/images/testimonials/diego-martinez.jpg"
    },
    rating: 5,
    featured: false,
    category: "ui-ux"
  },
  {
    id: "t4",
    content: "La implementación de la estrategia de ciberseguridad fue impecable. Ahora tenemos la tranquilidad de contar con una infraestructura robusta y segura.",
    author: {
      name: "Laura Benítez",
      position: "CISO",
      company: "Banco Digital",
      image: "/images/testimonials/laura-benitez.jpg"
    },
    rating: 5,
    featured: false,
    category: "ciberseguridad"
  },
  {
    id: "t5",
    content: "El servicio de consultoría nos ayudó a identificar oportunidades de mejora que no habíamos considerado. La inversión se recuperó en menos de 6 meses.",
    author: {
      name: "Gabriel Torres",
      position: "Director General",
      company: "Logística Total",
      image: "/images/testimonials/gabriel-torres.jpg"
    },
    rating: 5,
    featured: true,
    category: "consultoria"
  }
];

// Testimonios destacados para la página de inicio
export const featuredTestimonials = testimonialsData.filter(t => t.featured);

// Testimonios por categoría
export const getTestimonialsByCategory = (category: Testimonial['category']) => 
  testimonialsData.filter(t => t.category === category);

// Testimonios aleatorios
export const getRandomTestimonials = (count: number) => {
  const shuffled = [...testimonialsData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export interface TestimonialCarouselConfig {
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  dots: boolean;
  arrows: boolean;
  responsive: Array<{
    breakpoint: number;
    settings: {
      slidesToShow: number;
    };
  }>;
}

// Configuración del carrusel de testimonios
export const testimonialCarouselConfig: TestimonialCarouselConfig = {
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};