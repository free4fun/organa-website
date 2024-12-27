import React from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderTopNav from './HeaderTopNav';
import HeaderSearch from './HeaderSearch';
import HeaderCart from './HeaderCart';
import HeaderMainNav from './HeaderMainNav';
import HeaderSocialIcons from './HeaderSocialIcons';

const Header: React.FC = () => {
  return (
    <header 
      id="header" 
      data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyStartAt': 45, 'stickySetTop': '-45px', 'stickyChangeLogo': true}"
    >
      <div className="header-body">
        <div className="header-container container">
          <div className="header-row">
            <div className="header-column">
              <div className="header-row">
                <HeaderLogo 
                  logoSrc="img/logo-default-slim.png"
                  alt="Porto"
                  width={100}
                  height={48}
                  stickyWidth={82}
                  stickyHeight={40}
                  stickyTop={25}
                />
              </div>
            </div>
            <div className="header-column justify-content-end">
              <div className="header-row pt-3">
                <HeaderTopNav />
                <div className="header-nav-features">
                  <HeaderSearch />
                  <HeaderCart />
                </div>
              </div>
              <div className="header-row">
                <div className="header-nav pt-1">
                  <div className="header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1">
                    <HeaderMainNav />
                  </div>
                  <HeaderSocialIcons />
                  <button 
                    className="btn header-btn-collapse-nav" 
                    data-bs-toggle="collapse" 
                    data-bs-target=".header-nav-main nav"
                  >
                    <i className="fas fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;