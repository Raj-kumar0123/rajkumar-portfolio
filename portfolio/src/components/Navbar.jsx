// src/components/Navbar.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Experience', link: '#experience' },
    { name: 'Projects', link: '#projects' },
    { name: 'Certifications', link: '#certifications' },
    { name: 'Contact', link: '#contact' }
  ];

  return (
    <nav className="navbar glass-card">
      <div className="nav-container">
        {/* 👇 Logo section yahan se poori tarah saaf kar diya */}
        
        <ul className={`nav-links ${isOpen ? 'mobile-open' : ''}`}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} onClick={() => setIsOpen(false)}>{item.name}</a>
            </li>
          ))}
        </ul>

        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
