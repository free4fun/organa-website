import React from 'react';

interface DropdownItem {
  label: string;
  href: string;
  items?: DropdownItem[];
  badge?: {
    text: string;
    type: string;
  };
}

interface DropdownMenuProps {
  items: DropdownItem[];
  isSubmenu?: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, isSubmenu = false }) => {
  return (
    <ul className={`dropdown-menu ${isSubmenu ? '' : 'dropdown-menu-start'}`}>
      {items.map((item, index) => (
        <li key={index} className={item.items ? 'dropdown-submenu' : ''}>
          <a className="dropdown-item" href={item.href}>
            {item.label}
            {item.badge && (
              <span className={`tip tip-${item.badge.type}`}>{item.badge.text}</span>
            )}
          </a>
          {item.items && <DropdownMenu items={item.items} isSubmenu />}
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;