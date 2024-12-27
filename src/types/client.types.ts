export interface ClientProject {
  name: string;
  year: number;
  category: 'desarrollo-web' | 'apps-moviles' | 'ui-ux' | 'consultoria' | 'ciberseguridad';
}

export interface Client {
  id: string;
  name: string;
  logo: string;
  industry: 'finanzas' | 'ecommerce' | 'telecomunicaciones' | 'alimentos' | 'salud' | 'educacion';
  description: string;
  link: string;
  featured: boolean;
  projects: ClientProject[];
}