import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface MenuItem {
  label: string;
  path?: string;
  children?: MenuItem[];
  badge?: {
    text: string;
    type: string;
  };
  isActive?: boolean;
}

const menuData: MenuItem[] = [
  {
    label: 'Home',
    path: '/',
    isActive: true,
    children: [
      {
        label: 'Landing Page',
        path: '/'
      },
      {
        label: 'Demos',
        path: '/#demos',
        badge: {
          text: 'hot',
          type: 'dark'
        }
      },
      {
        label: 'Classic',
        children: [
          { label: 'Classic - Original', path: '/index-classic' },
          { label: 'Classic - Color', path: '/index-classic-color' },
          { label: 'Classic - Light', path: '/index-classic-light' },
          { label: 'Classic - Video', path: '/index-classic-video' },
          { label: 'Classic - Video - Light', path: '/index-classic-video-light' }
        ]
      }
    ]
  },
  {
    label: 'Pages',
    children: [
      {
        label: 'Contact Us',
        children: [
          { label: 'Contact Us - Advanced', path: '/contact-us-advanced' },
          { label: 'Contact Us - Basic', path: '/contact-us' },
          { label: 'Contact Us - Recaptcha', path: '/contact-us-recaptcha' }
        ]
      }
    ]
  },
  {
    label: 'Shop',
    children: [
      {
        label: 'Single Product',
        children: [
          { label: 'Full Width', path: '/shop-product-full-width' },
          { label: 'Left Sidebar', path: '/shop-product-sidebar-left' },
          { label: 'Right Sidebar', path: '/shop-product-sidebar-right' },
          { label: 'Left and Right Sidebar', path: '/shop-product-sidebar-left-and-right' }
        ]
      },
      { label: '4 Columns', path: '/shop-4-columns' },
      {
        label: '3 Columns',
        children: [
          { label: 'Full Width', path: '/shop-3-columns-full-width' },
          { label: 'Left Sidebar', path: '/shop-3-columns-sidebar-left' },
          { label: 'Right Sidebar', path: '/shop-3-columns-sidebar-right' }
        ]
      }
    ]
  }
];

const MenuItem: React.FC<{ item: MenuItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = Boolean(item.children && item.children.length > 0);
  const className = `${hasChildren ? 'dropdown-item dropdown-toggle' : 'dropdown-item'}${item.isActive ? ' active' : ''}`;

  if (hasChildren && item.children) {
    return (
      <li className={`dropdown${isOpen ? ' show' : ''}`} 
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}>
        <a className={className} href="#" onClick={(e) => e.preventDefault()}>
          {item.label}
          {item.badge && (
            <span className={`tip tip-${item.badge.type}`}>{item.badge.text}</span>
          )}
        </a>
        <ul className={`dropdown-menu${isOpen ? ' show' : ''}`}>
          {item.children.map((child, idx) => (
            <MenuItem key={idx} item={child} />
          ))}
        </ul>
      </li>
    );
  }

  return (
    <li>
      <Link className={className} to={item.path || '#'}>
        {item.label}
        {item.badge && (
          <span className={`tip tip-${item.badge.type}`}>{item.badge.text}</span>
        )}
      </Link>
    </li>
  );
};

const HeaderMainNav: React.FC = () => {
  return (
    <nav className="collapse">
      <ul className="nav nav-pills" id="mainNav">
        {menuData.map((item, idx) => (
          <MenuItem key={idx} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default HeaderMainNav;