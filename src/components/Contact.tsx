import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapPin, FaPaperPlane } from 'react-icons/fa';
import styles from '../styles/Contact.module.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Aquí iría la lógica de envío del formulario
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulación de envío
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope size={24} />,
      title: 'Email',
      content: 'info@organa.global',
      link: 'mailto:info@organa.global'
    },
    {
      icon: <FaPhone size={24} />,
      title: 'Teléfono',
      content: '+598 91 234 567',
      link: 'tel:+59891234567'
    },
    {
      icon: <FaMapPin size={24} />,
      title: 'Ubicación',
      content: 'Montevideo, Uruguay',
      link: 'https://goo.gl/maps/yourLocation'
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
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={containerVariants}
        >
          <motion.div className={styles.contactInfo} variants={containerVariants}>
            <motion.h2 className={styles.title} variants={itemVariants}>
              Contáctanos
            </motion.h2>
            <motion.p className={styles.description} variants={itemVariants}>
              ¿Tienes un proyecto en mente? Nos encantaría escuchar tus ideas y ayudarte a hacerlas realidad.
            </motion.p>

            <div className={styles.infoItems}>
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className={styles.infoItem}
                  variants={itemVariants}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.infoIcon}>
                    {item.icon}
                  </div>
                  <div className={styles.infoContent}>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            variants={containerVariants}
          >
            <motion.div className={styles.formGroup} variants={itemVariants}>
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.div className={styles.formGroup} variants={itemVariants}>
              <input
                type="email"
                name="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.div className={styles.formGroup} variants={itemVariants}>
              <input
                type="text"
                name="subject"
                placeholder="Asunto"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.div className={styles.formGroup} variants={itemVariants}>
              <textarea
                name="message"
                placeholder="Tu mensaje"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
              disabled={isSubmitting}
              variants={itemVariants}
            >
              {isSubmitting ? (
                'Enviando...'
              ) : (
                <>
                  Enviar Mensaje
                  <FaPaperPlane size={20} />
                </>
              )}
            </motion.button>

            {submitStatus === 'success' && (
              <motion.div
                className={`${styles.submitMessage} ${styles.success}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ¡Mensaje enviado con éxito!
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                className={`${styles.submitMessage} ${styles.error}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Error al enviar el mensaje. Por favor, intenta nuevamente.
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;