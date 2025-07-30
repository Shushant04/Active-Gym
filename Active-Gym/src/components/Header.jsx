import React, { useState } from 'react';
import './Header.css';
import './UI/Hero.css'
import logo from '../assets/dumble.png';

const nav_links = [
  { path: '#', display: 'Home' },
  { path: '#', display: 'Schedule' },
  { path: '#', display: 'Classes' },
  { path: '#', display: 'Pricing' }
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(prev => !prev);

  return (
    <header>
      <div className="container">
        <div className="nav_wrapper">

          {/* Logo */}
          <div className="logo">
            <div className="logo_img">
              <img src={logo} alt="Dumble" />
            </div>
            <h2>Active-Gym</h2>
          </div>

          {/* Navigation Menu */}
          <div className="navigation">
            <ul className={`menu ${showMenu ? 'show' : ''}`}>
              {nav_links.map((item, index) => (
                <li className="nav_item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Nav */}
          <div className="nav_right">
            <button className="register_btn">Register</button>
            <span className="mobile_menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
