import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLink, FaGithub } from 'react-icons/fa';
import styles from '../styles/PortfolioModal.module.css';
import { Project } from './Portfolio'; // Asegúrate de exportar la interface Project desde Portfolio.tsx

interface PortfolioModalProps {
  project: Project;
  onClose: () => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ project, onClose }) => {
  return (
    <motion.div
      className={styles.modalOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.modalContent}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        onClick={e => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>
          <FaTwitter size={24} />
        </button>

        <div className={styles.modalImage}>
          <img src={project.image} alt={project.title} />
        </div>

        <div className={styles.modalInfo}>
          <h2>{project.title}</h2>
          <p className={styles.description}>{project.description}</p>

          <div className={styles.technologies}>
            <h3>Tecnologías</h3>
            <div className={styles.techGrid}>
              {project.technologies.map((tech, index) => (
                <span key={index} className={styles.tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.links}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <FaLink size={20} />
                Ver Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <FaGithub size={20} />
                Ver Código
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioModal;
