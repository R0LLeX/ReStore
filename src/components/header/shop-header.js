import React from 'react';
import { Link } from 'react-router-dom';
import './shop-header.css';
const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header">
      <Link to="/">
        <div className="header_title">ReStore</div>
      </Link>
      <Link to="/cart" className="link">
        <div className="shoping-cart">
          <i className="cart-icon bi bi-cart2" />
          {numItems} items ($ {total})
        </div>
      </Link>
    </header>
  );
};

export default ShopHeader;
