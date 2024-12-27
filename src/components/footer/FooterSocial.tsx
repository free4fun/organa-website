import React from 'react';

interface SocialLink {
  icon: string;
  link: string;
  name: string;
}

const FooterSocial: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { icon: "fab fa-facebook-f", link: "#", name: "Facebook" },
    { icon: "fab fa-twitter", link: "#", name: "Twitter" },
    { icon: "fab fa-linkedin-in", link: "#", name: "LinkedIn" },
    { icon: "fab fa-instagram", link: "#", name: "Instagram" }
  ];

  return (
    <div className="footer-social-icons">
      <ul className="social-icons">
        {socialLinks.map((social, index) => (
          <li key={index} className="social-icons-{social.name.toLowerCase()}">
            <a 
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer"
              title={social.name}
            >
              <i className={social.icon}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSocial;