import React from 'react';
import { Link } from 'gatsby';

import './menu.css';

function Menu() {
  return (
    <div className="container menu">
      <ul className="nav">
        <li className="navitem">
          <Link to="/" activeClassName="active">
            <div className="item">
              <div className="bar" />
              Home
            </div>
          </Link>
        </li>
        <li className="navitem">
          <Link to="/blog" activeClassName="active">
            <div className="item">
              <div className="bar" />
              Articles
            </div>
          </Link>
        </li>
        <li className="navitem">
          <Link to="/contact" activeClassName="active">
            <div className="item">
              <div className="bar" />
              Contact
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
