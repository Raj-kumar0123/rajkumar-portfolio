// src/components/Footer.jsx
import React from 'react';
import { FaChevronUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const returnToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <p className="f-title">Raj Kumar</p>
          <p className="f-sub">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <button className="top-arrow glass-card" onClick={returnToTop} aria-label="Top"><FaChevronUp /></button>
      </div>
    </footer>
  );
};

export default Footer;