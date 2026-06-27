// src/components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaHourglassHalf } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const steps = [
    { 
      icon: <FaGraduationCap />, 
      title: "Bachelor of Technology (Computer Science)", 
      sub: "Academic Foundation", 
      date: "2023 – Present", 
      desc: "Building a strong foundation in Computer Science while exploring Machine Learning, Artificial Intelligence, and Data Analytics." 
    },
    { 
      icon: <FaCode />, 
      title: "Aspiring Data analyst", 
      sub: "Projects and intership", 
      date: "2026", 
      desc: "Hands-on experience through Data Analytics projects and a U.S.-based data research internship, focusing on business data collection, validation, and analytical workflows."
    },
    { 
      icon: <FaHourglassHalf />, 
      title: "Machine Learning Engineer", 
      sub: "Career Goal", 
      date: "Future", 
      desc: "Continuously learning Machine Learning, Deep Learning, and Predictive Models while building practical end-to-end AI pipelines and refining core analytical problem-solving skills." 
    }
  ];

  return (
    <section id="experience" className="timeline-section">
      <div className="section-title-wrapper">
        {/* 👇 Title 'Journey Timeline' se 'Learning Journey' ho gaya */}
        <h2 className="gradient-text">Learning Journey</h2>
        <div className="horizontal-line"></div>
      </div>

      <div className="timeline-axis">
        <div className="vertical-line-track"></div>
        {steps.map((step, idx) => (
          <motion.div 
            className="timeline-row" key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="node-icon">{step.icon}</div>
            <div className="node-body glass-card">
              <span className="node-date">{step.date}</span>
              <h3>{step.title}</h3>
              <h4>{step.sub}</h4>
              <p>{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;