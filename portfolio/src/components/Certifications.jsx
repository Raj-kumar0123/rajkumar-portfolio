// src/components/Certifications.jsx
import React from 'react';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import './Certifications.css';

// 📝 Import PDFs from assets folder
import hpCert from '../assets/hpCert.pdf';
import internCert from '../assets/internCert.pdf';

const Certifications = () => {
  const assets = [
    { 
      title: "Artificial Intelligence for Beginners", 
      platform: "HP Foundation", 
      year: "2025",
      link: hpCert 
    },
    { 
      title: "US IT Staffing Internship", 
      platform: "JP IT STAFFING LLC", 
      year: "2026",
      link: internCert 
    }
  ];

  return (
    <section id="certifications" className="certs-view">
      <div className="section-title-wrapper">
        <h2 className="gradient-text">Certifications</h2>
        <div className="horizontal-line"></div>
      </div>

      <div className="certs-deck">
        {assets.map((asset, index) => (
          <div className="cert-row-card glass-card" key={index}>
            <div className="cert-badge-icon"><FaCertificate /></div>
            <div className="cert-txt-info">
              <h3>{asset.title}</h3>
              <p>{asset.platform} • <span className="highlight-date">{asset.year}</span></p>
            </div>
            <a 
              href={asset.link} 
              target="_blank" 
              rel="noreferrer" 
              className="cert-redirect" 
              aria-label="Verify credential"
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;