import React, { useState } from 'react';

const HeaderSearch: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header-nav-feature header-nav-features-search d-inline-flex">
      <a 
        href="#" 
        className="header-nav-features-toggle text-decoration-none" 
        data-focus="headerSearch"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-label="Search"
      >
        <i className="fas fa-search header-nav-top-icon"></i>
      </a>
      <div className={`header-nav-features-dropdown ${isOpen ? 'show' : ''}`} id="headerTopSearchDropdown">
        <form role="search" action="page-search-results.html" method="get">
          <div className="simple-search input-group">
            <input 
              className="form-control text-1" 
              id="headerSearch" 
              name="q" 
              type="search" 
              placeholder="Search..."
            />
            <button className="btn" type="submit" aria-label="Search">
              <i className="fas fa-search header-nav-top-icon"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeaderSearch;