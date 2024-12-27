export interface TestimonialAuthor {
  name: string;
  position: string;
  company: string;
  image: string;
}

export interface Testimonial {
  id: string;
  content: string;
  author: TestimonialAuthor;
  rating: number;
  featured: boolean;
  category: 'desarrollo-web' | 'apps-moviles' | 'ui-ux' | 'consultoria' | 'ciberseguridad';
}