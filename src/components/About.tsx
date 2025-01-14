import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaAward, FaUsers, FaBriefcase } from 'react-icons/fa';
import styles from '../styles/About.module.css';
import StatsCounter from './common/StatsCounter';

const About: React.FC = () => {
  const stats = [
    {
      icon: <FaBriefcase size={24} />,
      value: 100,  // Cambiado de number a value
      label: 'Proyectos Completados'
    },
    {
      icon: <FaUsers size={24} />,
      value: 50,   // Cambiado de number a value
      label: 'Clientes Satisfechos'
    },
    {
      icon: <FaAward size={24} />,
      value: 10,   // Cambiado de number a value
      label: 'Años de Experiencia'
    }
  ];

  const features = [
    'Desarrollo web y móvil personalizado',
    'Diseño UI/UX centrado en el usuario',
    'Optimización SEO y marketing digital',
    'Consultoría tecnológica estratégica',
    'Soluciones escalables en la nube',
    'Mantenimiento y soporte continuo'
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
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            className={styles.textContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={containerVariants}
          >
            <motion.h2 
              className={styles.title}
              variants={itemVariants}
            >
              Sobre Nosotros
            </motion.h2>
            
            <motion.p 
              className={styles.description}
              variants={itemVariants}
            >
              En Organa Global, nos dedicamos a transformar ideas innovadoras en soluciones digitales excepcionales. 
              Nuestro equipo de expertos combina creatividad y tecnología para crear experiencias digitales que impulsan 
              el crecimiento de tu negocio.
            </motion.p>

            <motion.div 
              className={styles.features}
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className={styles.feature}
                  variants={itemVariants}
                >
                  <FaCheck size={20} className={styles.checkIcon} />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className={styles.imageSection}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <div className={styles.imageWrapper}>
              <img 
                src="/assets/about-image.jpg" 
                alt="Equipo de Organa Global trabajando" 
                className={styles.aboutImage}
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
  className={styles.stats}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false }}
  variants={containerVariants}
>
  {stats.map((stat, index) => (
    <StatsCounter
      key={index}
      icon={stat.icon}
      value={stat.value}
      label={stat.label}
    />
  ))}
</motion.div>
      </div>
    </section>
  );
};

export default About;