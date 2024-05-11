import React, { useState, useEffect } from 'react';
import '../index.css';
import { logo } from '../assets';

const Navbar = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrollY > 0 ? 'scrolled' : ''}`}>
      <div className="navbar__left">
        <img className='logo' src={logo} alt="" />
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
