// src/components/Projects.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaEye, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Projects.css';

// ✅ Helphub Local Images Imported Properly
import helphub1 from '../assets/helphub1.png';
import helphub2 from '../assets/helphub2.png';
import helphub3 from '../assets/helphub3.png';

// ✅ Smart India Hackathon (SIH) Local Images Imported Properly (FIXED TYPO)
import sih1 from '../assets/SIH-1.png';
import sih2 from '../assets/SIH-2.png';
import sih3 from '../assets/SIH-3.png';
import sih4 from '../assets/SIH-4.png';
import sih5 from '../assets/SIH-5.png';
import sih6 from '../assets/SIH-6.png';
import sih7 from '../assets/SIH-7.png';

// ✅ Maps to Metrics Local Images Imported Properly
import mm1 from '../assets/MM-1.png';
import mm2 from '../assets/MM-2.png';
import mm3 from '../assets/MM-3.png';
import mm4 from '../assets/MM-4.png';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  const dynamicCards = [
    {
      title: "Helphub",
      desc: "HelpHub is a humanitarian support platform that connects NGOs with people affected during disasters or emergencies. It streamlines communication, request management, and resource coordination to ensure timely and organized assistance.",
      stack: ["Python", "SQL", "HTML", "JavaScript"],
      git: "https://github.com/Raj-kumar0123/Helphub-",
      images: [helphub1, helphub2, helphub3],
      features: [
        "NGO & Victim Registration",
        "Secure User Authentication",
        "Emergency Help Requests",
        "Transparent Communication",
        "Resource Management"
      ]
    },
    {
      title: "Gramik Digital Pathshala",
      desc: "An innovative digital learning UI and platform designed for rural empowerment, developed as part of the Smart India Hackathon (SIH). It bridges the educational gap by providing structural curriculum tracking and offline-capable resource access for Class 5 and village education programs.",
      stack: ["HTML", "CSS", "JavaScript"],
      git: "https://github.com/Raj-kumar0123/SIH--hackathon-2025-idea-project",
      images: [sih1, sih2, sih3, sih4, sih5, sih6, sih7],
      features: [
        "Interactive Digital Classroom UI Layout",
        "Rural-Centric Resource Distribution Architecture",
        "Class 5 Management and Worksheet Workflows",
        "Offline-First Performance Access Mechanics",
        "Student-Friendly Navigation Console"
      ]
    },
    {
      title: "Maps to Metrics",
      desc: "Maps to Metrics is a business data intelligence platform that automates location-based business data collection and transforms raw information into actionable insights. Users can search by country, state, city, business category, and data limit to generate structured datasets with analytical reports.",
      stack: ["Python"],
      git: "https://github.com/Raj-kumar0123/MapsToMetrics",
      images: [mm1, mm2, mm3, mm4],
      features: [
        "Location-Based Business Search",
        "Automated Data Collection",
        "Contact Information Extraction",
        "Structured Dataset Generation",
        "Analytics Dashboard",
        "Email, Phone & Website Coverage Analysis"
      ]
    }
  ];

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeProject]);

  // Keyboard navigation for carousel and exit
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeProject) return;
      if (e.key === 'Escape') setActiveProject(null);
      if (e.key === 'ArrowRight' && activeProject.images.length > 1) {
        setCurrentImgIdx((prev) => (prev + 1) % activeProject.images.length);
      }
      if (e.key === 'ArrowLeft' && activeProject.images.length > 1) {
        setCurrentImgIdx((prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject]);

  return (
    <section id="projects" className="projects-view">
      <div className="section-title-wrapper">
        <h2 className="gradient-text">Featured Projects</h2>
        <div className="horizontal-line"></div>
      </div>

      <div className="projects-matrix">
        {dynamicCards.map((card, idx) => (
          <motion.div 
            className="project-blueprint glass-card" key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="blueprint-visual" onClick={() => { setActiveProject(card); setCurrentImgIdx(0); }}>
              <img src={card.images[0]} alt={card.title} loading="lazy" className="card-lazy-thumb" />
              <div className="visual-overlay"><span>[ Click to Preview System ]</span></div>
            </div>
            <div className="blueprint-meta">
              <h3>{card.title}</h3>
              <p className="line-clamp-desc">{card.desc}</p>
              <div className="blueprint-stack">
                {card.stack.map((s, i) => <span key={i} className="chip">{s}</span>)}
              </div>
              <div className="blueprint-links">
                <a href={card.git} target="_blank" rel="noreferrer"><FaGithub /> Code</a>
                <button className="highlight preview-btn" onClick={() => { setActiveProject(card); setCurrentImgIdx(0); }}>
                  <FaEye /> Preview
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Premium Glassmorphism Modal Experience */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div 
              className="modal-window glass-card"
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-btn" onClick={() => setActiveProject(null)}>
                <FaTimes />
              </button>

              <div className="modal-grid-layout">
                {/* Image Carousel Container */}
                <div className="modal-visual-pane">
                  <div className="carousel-wrapper">
                    <img 
                      src={activeProject.images[currentImgIdx]} 
                      alt="Project Showcase" 
                      className="modal-main-img"
                    />
                    
                    {activeProject.images.length > 1 && (
                      <>
                        <button className="nav-arrow left" onClick={() => setCurrentImgIdx((prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length)}>
                          <FaChevronLeft />
                        </button>
                        <button className="nav-arrow right" onClick={() => setCurrentImgIdx((prev) => (prev + 1) % activeProject.images.length)}>
                          <FaChevronRight />
                        </button>
                      </>
                    )}
                  </div>
                  
                  {/* Step indicators dots */}
                  {activeProject.images.length > 1 && (
                    <div className="carousel-dots">
                      {activeProject.images.map((_, i) => (
                        <span 
                          key={i} 
                          className={`dot ${i === currentImgIdx ? 'active' : ''}`}
                          onClick={() => setCurrentImgIdx(i)}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Meta Description Info Pane */}
                <div className="modal-info-pane">
                  <h3>{activeProject.title}</h3>
                  <div className="horizontal-line micro"></div>
                  <p className="modal-desc">{activeProject.desc}</p>
                  
                  <h4>Tech Stack</h4>
                  <div className="blueprint-stack modal-stack">
                    {activeProject.stack.map((s, i) => <span key={i} className="chip">{s}</span>)}
                  </div>

                  <h4>Key Features</h4>
                  <ul className="modal-features-list">
                    {activeProject.features.map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>

                  <div className="modal-footer-actions">
                    <a href={activeProject.git} target="_blank" rel="noreferrer" className="modal-action-git">
                      <FaGithub /> View GitHub
                    </a>
                    <button className="modal-action-close" onClick={() => setActiveProject(null)}>
                      ✖ Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;