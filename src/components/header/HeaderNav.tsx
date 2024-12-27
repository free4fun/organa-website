import React from 'react';
import NavItem from '../common/NavItem';
import NavDropdownItem from '../common/NavDropdownItem';

const HeaderNav: React.FC = () => {
  return (
    <div className="header-nav-bar">
      <nav className="collapse">
        <ul className="nav nav-pills" id="mainNav">
          <NavItem to="/" label="Inicio" />
          
          <NavItem to="/servicios" label="Servicios" hasDropdown={true}>
            <NavDropdownItem to="/servicios/desarrollo-web" label="Desarrollo Web" />
            <NavDropdownItem to="/servicios/apps-moviles" label="Apps Móviles" />
            <NavDropdownItem to="/servicios/consultoria" label="Consultoría" />
          </NavItem>

          <NavItem to="/portfolio" label="Portfolio" />
          
          <NavItem to="/sobre-nosotros" label="Sobre Nosotros" hasDropdown={true}>
            <NavDropdownItem to="/sobre-nosotros/equipo" label="Equipo" />
            <NavDropdownItem to="/sobre-nosotros/historia" label="Historia" />
          </NavItem>

          <NavItem to="/blog" label="Blog" />
          
          <NavItem to="/contacto" label="Contacto" />
        </ul>
      </nav>
    </div>
  );
};

export default HeaderNav;