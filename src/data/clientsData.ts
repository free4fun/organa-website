import { Client } from '../types/client.types';

export const clientsData: Client[] = [
  {
    id: "c1",
    name: "TechCorp Uruguay",
    logo: "/images/clients/techcorp.png",
    industry: "finanzas",
    description: "Líder en soluciones tecnológicas empresariales",
    link: "https://techcorp.uy",
    featured: true,
    projects: [
      {
        name: "Plataforma de Pagos Digital",
        year: 2024,
        category: "desarrollo-web"
      }
    ]
  },
  {
    id: "c2",
    name: "Fintech Solutions",
    logo: "/images/clients/fintech.png",
    industry: "finanzas",
    description: "Innovación en servicios financieros digitales",
    link: "https://fintech-solutions.com",
    featured: true,
    projects: [
      {
        name: "App Móvil de Inversiones",
        year: 2024,
        category: "apps-moviles"
      }
    ]
  },
  {
    id: "c3",
    name: "HealthTech Uruguay",
    logo: "/images/clients/healthtech.png",
    industry: "salud",
    description: "Tecnología para el sector salud",
    link: "https://healthtech.uy",
    featured: false,
    projects: [
      {
        name: "Sistema de Gestión Hospitalaria",
        year: 2023,
        category: "desarrollo-web"
      }
    ]
  }
];