import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub,FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebook size={20} />, url: 'https://facebook.com/organa.global' },
    { icon: <FaTwitter size={20} />, url: 'https://twitter.com/organa_global' },
    { icon: <FaLinkedin size={20} />, url: 'https://linkedin.com/company/organa-global' },
    { icon: <FaInstagram size={20} />, url: 'https://instagram.com/organa.global' },
    { icon: <FaGithub size={20} />, url: 'https://github.com/organa-global' }
  ];


  const footerLinks = [
    {
      title: 'Servicios',
      links: [
        { name: 'Desarrollo Web', url: '/servicios/desarrollo-web' },
        { name: 'Diseño UI/UX', url: '/servicios/diseno-ui-ux' },
        { name: 'Marketing Digital', url: '/servicios/marketing-digital' },
        { name: 'SEO', url: '/servicios/seo' },
        { name: 'Consultoría', url: '/servicios/consultoria' }
      ]
    },
    {
      title: 'Compañía',
      links: [
        { name: 'Sobre Nosotros', url: '/sobre-nosotros' },
        { name: 'Equipo', url: '/equipo' },
        { name: 'Carreras', url: '/carreras' },
        { name: 'Blog', url: '/blog' },
        { name: 'Prensa', url: '/prensa' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Términos de Servicio', url: '/terminos' },
        { name: 'Política de Privacidad', url: '/privacidad' },
        { name: 'Cookies', url: '/cookies' },
        { name: 'FAQ', url: '/faq' }
      ]
    }
  ];

  const contactInfo = [
    { icon: <FaEnvelope size={20} />, text: 'contacto@organa.global' },
    { icon: <FaPhone size={20} />, text: '+598 99 123 456' },
    { icon: <FaMapMarkerAlt size={20} />, text: 'Montevideo, Uruguay' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.companyInfo}>
            <motion.img
              src="/assets/logo.svg"
              alt="Organa Global"
              className={styles.logo}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
            <p>
              Transformando ideas en soluciones digitales innovadoras. 
              Creamos experiencias web excepcionales que impulsan el crecimiento 
              de tu negocio.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className={styles.linksSection}>
            {footerLinks.map((section, index) => (
              <div key={index} className={styles.linkColumn}>
                <h3>{section.title}</h3>
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: linkIndex * 0.1 }}
                    >
                      <a href={link.url}>{link.name}</a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.contactSection}>
            <h3>Contacto</h3>
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className={styles.contactItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {info.icon}
                <span>{info.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className={styles.bottomSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className={styles.copyright}>
            © {currentYear} Organa Global. Todos los derechos reservados.
          </div>
          <div className={styles.bottomLinks}>
            <a href="/terminos">Términos</a>
            <span>|</span>
            <a href="/privacidad">Privacidad</a>
            <span>|</span>
            <a href="/cookies">Cookies</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;