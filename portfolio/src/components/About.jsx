// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-title-wrapper">
        <h2 className="gradient-text">About Me</h2>
        <div className="horizontal-line"></div>
      </div>

      <div className="about-grid-layout">
        <motion.div 
          className="about-card-wide glass-card"
          whileInView={{ opacity: [0, 1], y: [20, 0] }}
          viewport={{ once: true }}
        >
          <h3>Career Objective</h3>
          <p>Aspiring Machine Learning Engineer and Computer Science undergraduate passionate about Artificial Intelligence, Machine Learning, and Data Analytics. Seeking opportunities to apply analytical thinking, build intelligent solutions, and continuously enhance my technical skills while contributing to impactful real-world projects.</p>
        </motion.div>

        <motion.div 
          className="about-card-split glass-card"
          whileInView={{ opacity: [0, 1], y: [20, 0] }}
          viewport={{ once: true }}
        >
          <h3>Education</h3>
          <h4>B.Tech Student</h4>
          <p className="sub">Computer Science & Engineering</p>
          <p className="timeline-badge-year">2023 - Present</p>
        </motion.div>

        <motion.div 
          className="about-card-split glass-card"
          whileInView={{ opacity: [0, 1], y: [20, 0] }}
          viewport={{ once: true }}
        >
          <h3>Experience Summary</h3>
          <p>Built academic and personal projects focused on problem-solving, data analysis, and practical software development. Gained hands-on experience by implementing real-world concepts while continuously improving technical and analytical skills.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;