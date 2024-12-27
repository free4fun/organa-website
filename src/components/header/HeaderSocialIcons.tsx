import React from 'react';

const HeaderSocialIcons: React.FC = () => {
  return (
    <ul className="header-social-icons social-icons d-none d-sm-block">
      <li className="social-icons-facebook">
        <a href="http://www.facebook.com/" target="_blank" rel="noopener noreferrer" title="Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
      </li>
      <li className="social-icons-x">
        <a href="http://www.x.com/" target="_blank" rel="noopener noreferrer" title="X">
          <i className="fab fa-x-twitter"></i>
        </a>
      </li>
      <li className="social-icons-linkedin">
        <a href="http://www.linkedin.com/" target="_blank" rel="noopener noreferrer" title="Linkedin">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </li>
    </ul>
  );
};

export default HeaderSocialIcons;