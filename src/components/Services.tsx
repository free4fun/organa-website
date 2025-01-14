import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaChartLine, FaGlobe, FaDatabase, FaShieldAlt } from 'react-icons/fa';
import styles from '../styles/Services.module.css';

const Services: React.FC = () => {
  const services = [
    {
      icon: <FaCode size={32} />,
      title: 'Desarrollo Web',
      description: 'Creamos aplicaciones web modernas y escalables utilizando las últimas tecnologías y mejores prácticas.',
      features: ['React/Next.js', 'Node.js/Express', 'APIs RESTful', 'Bases de datos']
    },
    {
      icon: <FaPalette size={32} />,
      title: 'Diseño UI/UX',
      description: 'Diseñamos interfaces intuitivas y atractivas que mejoran la experiencia del usuario y aumentan la conversión.',
      features: ['Diseño Responsivo', 'Prototipado', 'Design Systems', 'Testing de Usabilidad']
    },
    {
      icon: <FaChartLine size={32} />,
      title: 'Marketing Digital',
      description: 'Estrategias de marketing digital personalizadas para aumentar tu presencia online y generar leads.',
      features: ['SEO', 'Redes Sociales', 'Email Marketing', 'Análisis de Datos']
    },
    {
      icon: <FaGlobe size={32} />,
      title: 'SEO',
      description: 'Optimizamos tu sitio web para mejorar su visibilidad en los motores de búsqueda y atraer tráfico orgánico.',
      features: ['Optimización On-page', 'Link Building', 'Contenido SEO', 'Análisis de Keywords']
    },
    {
      icon: <FaDatabase size={32} />,
      title: 'Desarrollo Backend',
      description: 'Construimos APIs robustas y sistemas escalables que potencian tu aplicación.',
      features: ['Arquitectura Cloud', 'Microservicios', 'DevOps', 'Seguridad']
    },
    {
      icon: <FaShieldAlt size={32} />,
      title: 'Ciberseguridad',
      description: 'Protegemos tu negocio digital con las mejores prácticas de seguridad y cumplimiento normativo.',
      features: ['Auditorías', 'Pentesting', 'Compliance', 'Formación']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          Nuestros Servicios
        </motion.h2>
        
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false }}
        >
          Soluciones digitales integrales para impulsar tu negocio
        </motion.p>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={styles.serviceCard}
              variants={itemVariants}
            >
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;