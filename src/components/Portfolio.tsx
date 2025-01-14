import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLink, FaGithub } from 'react-icons/fa';
import styles from '../styles/Portfolio.module.css';
import PortfolioModal from './PortfolioModal';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Plataforma de comercio electrónico moderna con carrito de compras, pagos y panel de administración. Implementación completa de funcionalidades de e-commerce incluyendo gestión de productos, carritos de compra persistentes, procesamiento de pagos con Stripe, y panel de administración para gestionar pedidos e inventario.',
      image: '/assets/projects/ecommerce.jpg',
      category: ['web', 'fullstack'],
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'TailwindCSS'],
      liveUrl: 'https://demo-ecommerce.organa.global',
      githubUrl: 'https://github.com/organa-global/ecommerce'
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: 'Dashboard interactivo para visualización de datos y análisis de métricas empresariales. Incluye gráficos en tiempo real, filtros avanzados, y reportes personalizables. La plataforma permite el seguimiento de KPIs, análisis de tendencias y exportación de datos en múltiples formatos.',
      image: '/assets/projects/dashboard.jpg',
      category: ['web', 'frontend'],
      technologies: ['React', 'D3.js', 'Material-UI', 'Redux', 'TypeScript', 'WebSocket'],
      liveUrl: 'https://demo-dashboard.organa.global'
    },
    {
      id: 3,
      title: 'CRM System',
      description: 'Sistema de gestión de relaciones con clientes con seguimiento de leads y análisis. Características principales incluyen gestión de contactos, seguimiento de oportunidades de venta, automatización de marketing y generación de informes detallados.',
      image: '/assets/projects/crm.jpg',
      category: ['web', 'fullstack'],
      technologies: ['Vue.js', 'Laravel', 'PostgreSQL', 'Docker', 'Redis', 'Elasticsearch'],
      githubUrl: 'https://github.com/organa-global/crm'
    }
  ];

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Web' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Fullstack' }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' ? true : project.category.includes(activeFilter)
  );

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          Nuestro Portfolio
        </motion.h2>

        <motion.div
          className={styles.filters}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`${styles.filterButton} ${activeFilter === filter.id ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode='wait'>
          <motion.div
            className={styles.grid}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                className={styles.projectCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
                onClick={() => setSelectedProject(project)}
              >
                <div className={styles.imageContainer}>
                  <img src={project.image} alt={project.title} />
                  <div className={styles.overlay}>
                    <div className={styles.links}>
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaLink size={24} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub size={24} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className={styles.content}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={styles.technologies}>
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className={styles.tech}>
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className={styles.tech}>+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {selectedProject && (
            <PortfolioModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
