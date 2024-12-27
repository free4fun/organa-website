import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItemProps {
  to: string;
  label: string;
  hasDropdown?: boolean;
  children?: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({
  to,
  label,
  hasDropdown = false,
  children
}) => {
  const location = useLocation();
  const isActive = location.pathname === to || location.pathname.startsWith(to + '/');

  return (
    <li className={`nav-item ${hasDropdown ? 'dropdown' : ''} ${isActive ? 'active' : ''}`}>
      <Link 
        to={to}
        className={`nav-link ${hasDropdown ? 'dropdown-toggle' : ''}`}
      >
        {label}
      </Link>
      {children && (
        <ul className="dropdown-menu">
          {children}
        </ul>
      )}
    </li>
  );
};

export default NavItem;