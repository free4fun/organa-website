import React from 'react';

const FooterContact: React.FC = () => {
  return (
    <div className="col-lg-3">
      <h4 className="font-weight-bold text-3">CONTACT US</h4>
      <ul className="list list-icons list-icons-lg">
        <li className="mb-1">
          <i className="far fa-dot-circle text-color-primary"></i>
          <p className="m-0">
            234 Street Name, City Name<br />
            United States
          </p>
        </li>
        <li className="mb-1">
          <i className="fab fa-whatsapp text-color-primary"></i>
          <p className="m-0">
            <a href="tel:8001234567">(800) 123-4567</a>
          </p>
        </li>
        <li className="mb-1">
          <i className="far fa-envelope text-color-primary"></i>
          <p className="m-0">
            <a href="mailto:mail@example.com">mail@example.com</a>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default FooterContact;