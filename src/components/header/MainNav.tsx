import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import MegaMenu from './MegaMenu';
import { mainNavData } from '../../data/navData';

const MainNav: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="header-row">
      <div className="header-nav pt-1">
        <div className={`header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1 ${isCollapsed ? 'collapse' : ''}`}>
          <nav className="collapse">
            <ul className="nav nav-pills" id="mainNav">
              {mainNavData.map((item, index) => (
                <li key={index} className={item.megaMenu ? 'dropdown dropdown-mega' : 'dropdown'}>
                  <a 
                    className={`dropdown-item dropdown-toggle ${item.active ? 'active' : ''}`} 
                    href={item.href}
                  >
                    {item.label}
                  </a>
                  {item.megaMenu ? (
                    <MegaMenu sections={item.megaMenu} />
                  ) : item.items ? (
                    <DropdownMenu items={item.items} />
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <button 
          className="btn header-btn-collapse-nav" 
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </div>
  );
};

export default MainNav;