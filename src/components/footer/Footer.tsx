import React from 'react';
import FooterNewsletter from './FooterNewsletter';
import FooterPosts from './FooterPosts';
import FooterContact from './FooterContact';
import FooterSocial from './FooterSocial';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="mt-0">
      <div className="container">
        <div className="footer-ribbon">
          <span>Get in Touch</span>
        </div>
        <div className="row py-5 my-4">
          <div className="col-lg-3">
            <FooterNewsletter />
          </div>
          <FooterPosts />
          <div className="col-lg-3">
            <h4 className="font-weight-bold text-3">USEFUL LINKS</h4>
            <ul className="list list-icons list-icons-sm">
              <li><i className="fas fa-angle-right"></i><a href="#" className="link-hover-style-1 ms-1">About Us</a></li>
              <li><i className="fas fa-angle-right"></i><a href="#" className="link-hover-style-1 ms-1">FAQ</a></li>
              <li><i className="fas fa-angle-right"></i><a href="#" className="link-hover-style-1 ms-1">Services</a></li>
              <li><i className="fas fa-angle-right"></i><a href="#" className="link-hover-style-1 ms-1">Contact Us</a></li>
            </ul>
          </div>
          <FooterContact />
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container py-2">
          <div className="row py-4">
            <div className="col-lg-7 d-flex align-items-center justify-content-center justify-content-lg-start mb-4 mb-lg-0">
              <p>© Copyright 2024. All Rights Reserved.</p>
            </div>
            <div className="col-lg-5 d-flex align-items-center justify-content-center justify-content-lg-end">
              <FooterSocial />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;