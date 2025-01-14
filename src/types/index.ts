export interface NavSubItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  subItems?: NavSubItem[];
}
  
  export interface Service {
    icon: string;
    title: string;
    description: string;
  }
  
  export interface PortfolioItem {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    technologies: string[];
  }
  
  export interface Testimonial {
    id: number;
    name: string;
    position: string;
    company: string;
    quote: string;
    avatar: string;
  }