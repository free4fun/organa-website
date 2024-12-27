import React from 'react';
import { Link } from 'react-router-dom';

interface NavDropdownItemProps {
  to: string;
  label: string;
}

const NavDropdownItem: React.FC<NavDropdownItemProps> = ({ to, label }) => {
  return (
    <li>
      <Link to={to} className="dropdown-item">
        {label}
      </Link>
    </li>
  );
};

export default NavDropdownItem;