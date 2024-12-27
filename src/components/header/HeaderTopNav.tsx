import React from 'react';
import { Link } from 'react-router-dom';

const HeaderTopNav: React.FC = () => {
  return (
    <nav className="header-nav-top">
      <ul className="nav nav-pills">
        <li className="nav-item nav-item-anim-icon d-none d-md-block">
          <Link className="nav-link ps-0" to="/about-us">
            <i className="fas fa-angle-right"></i> About Us
          </Link>
        </li>
        <li className="nav-item nav-item-anim-icon d-none d-md-block">
          <Link className="nav-link" to="/contact-us">
            <i className="fas fa-angle-right"></i> Contact Us
          </Link>
        </li>
        <li className="nav-item nav-item-left-border nav-item-left-border-remove nav-item-left-border-md-show">
          <span className="ws-nowrap">
            <i className="fas fa-phone"></i> (123) 456-789
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderTopNav;