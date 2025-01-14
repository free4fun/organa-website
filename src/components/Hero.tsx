import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Innovación Digital para tu Negocio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Soluciones de vanguardia en blockchain, SEO y desarrollo web
        </motion.p>
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#contact" className={styles.primaryBtn}>
            Contáctanos
          </a>
          <a href="#services" className={styles.secondaryBtn}>
            Nuestros Servicios
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
