import React from 'react';
import { Link } from 'react-router-dom';

export interface HeaderLogoProps {
  logoSrc?: string;
  alt?: string;
  stickyWidth?: number;
  stickyHeight?: number;
  stickyTop?: number;
  width?: number;
  height?: number;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ 
  logoSrc = 'img/logo-default-slim.png',
  alt = 'Porto',
  stickyWidth = 82,
  stickyHeight = 40,
  stickyTop = 25,
  width = 100,
  height = 48
}) => {
  return (
    <div className="header-logo">
      <Link to="/">
        <img 
          src={logoSrc} 
          alt={alt} 
          width={width} 
          height={height}
          data-sticky-width={stickyWidth}
          data-sticky-height={stickyHeight}
          data-sticky-top={stickyTop}
        />
      </Link>
    </div>
  );
};

export default HeaderLogo;