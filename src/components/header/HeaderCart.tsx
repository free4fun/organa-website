import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HeaderCart: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header-nav-feature header-nav-features-cart d-inline-flex ms-2">
      <a 
        href="#" 
        className="header-nav-features-toggle"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-label="Cart"
      >
        <img src="img/icons/icon-cart.svg" width="14" alt="" className="header-nav-top-icon-img" />
        <span className="cart-info d-none">
          <span className="cart-qty">1</span>
        </span>
      </a>
      <div className={`header-nav-features-dropdown ${isOpen ? 'show' : ''}`} id="headerTopCartDropdown">
        <ol className="mini-products-list">
          <li className="item">
            <Link to="/product" title="Camera X1000" className="product-image">
              <img src="img/products/product-1.jpg" alt="Camera X1000" />
            </Link>
            <div className="product-details">
              <p className="product-name">
                <Link to="/product">Camera X1000</Link>
              </p>
              <p className="qty-price">
                1X <span className="price">$890</span>
              </p>
              <a href="#" title="Remove This Item" className="btn-remove" onClick={(e) => e.preventDefault()}>
                <i className="fas fa-times"></i>
              </a>
            </div>
          </li>
        </ol>
        <div className="totals">
          <span className="label">Total:</span>
          <span className="price-total"><span className="price">$890</span></span>
        </div>
        <div className="actions">
          <Link className="btn btn-dark" to="/cart">View Cart</Link>
          <Link className="btn btn-primary" to="/checkout">Checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderCart;