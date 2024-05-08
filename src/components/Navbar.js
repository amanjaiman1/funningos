import React, { useState } from 'react';
import '../index.css';

const Navbar = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        {/* <img src="/path/to/logo.png" alt="Logo" className="navbar__logo" /> */}
        <h1>Funningos</h1>
      </div>
      <div className="navbar__right">
        <ul className="navbar__categories">
          <li className={`navbar__category ${activeCategory === 'Activities' ? 'active' : ''}`}>
            <a href="#" onClick={() => handleCategoryClick('Activities')}>Activities</a>
          </li>
          <li className={`navbar__category ${activeCategory === 'Events' ? 'active' : ''}`}>
            <a href="#" onClick={() => handleCategoryClick('Events')}>Events</a>
          </li>
          <li className={`navbar__category ${activeCategory === 'Corporate' ? 'active' : ''}`}>
            <a href="#" onClick={() => handleCategoryClick('Corporate')}>Corporate</a>
          </li>
          <li className={`navbar__category ${activeCategory === 'Packages' ? 'active' : ''}`}>
            <a href="#" onClick={() => handleCategoryClick('Packages')}>Packages</a>
          </li>
          <li className={`navbar__category ${activeCategory === 'Franchise' ? 'active' : ''}`}>
            <a href="#" onClick={() => handleCategoryClick('Franchise')}>Franchise</a>
          </li>
          <li className={`navbar__category ${activeCategory === 'Gallery' ? 'active' : ''}`}>
            <a href="#" onClick={() => handleCategoryClick('Gallery')}>Gallery</a>
          </li>
          <li className={`navbar__category ${activeCategory === 'Contact' ? 'active' : ''}`}>
            <a href="#" onClick={() => handleCategoryClick('Contact')}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
