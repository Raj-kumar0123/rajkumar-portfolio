// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
// 100% Stable Icons From Font Awesome & Simple Icons Packs
import { FaPython, FaFileExcel, FaDatabase, FaChartPie, FaChartLine, FaBrain, FaCode } from 'react-icons/fa';
import { SiScikitlearn, SiPandas, SiNumpy, SiJupyter, SiGooglecolab } from 'react-icons/si'; 
import './Skills.css';

const Skills = () => {
  const dataset = [
    {
      title: "🤖 Machine Learning",
      items: [
        { name: "Machine Learning Fundamentals", icon: <FaBrain />, label: "Beginner", barWidth: "45%" },
        { name: "NumPy", icon: <SiNumpy />, label: "Beginner", barWidth: "48%" },
        { name: "Pandas", icon: <SiPandas />, label: "Beginner", barWidth: "50%" },
        { name: "Scikit-learn", icon: <SiScikitlearn />, label: "Beginner", barWidth: "45%" }
      ]
    },
    {
      title: "📊 Data Analytics",
      items: [
        { name: "Excel", icon: <FaFileExcel />, label: "Intermediate", barWidth: "75%" },
        { name: "Power BI", icon: <FaChartPie />, label: "Beginner", barWidth: "48%" },
        { name: "Data Visualization", icon: <FaChartLine />, label: "Beginner", barWidth: "50%" },
        { name: "Statistics", icon: <FaCode />, label: "Beginner", barWidth: "45%" }
      ]
    },
    {
      title: "💻 Programming",
      items: [
        { name: "Python", icon: <FaPython />, label: "Intermediate", barWidth: "72%" },
        { name: "SQL", icon: <FaDatabase />, label: "Beginner", barWidth: "50%" }
      ]
    },
    {
      title: "🛠️ Tools & Platforms",
      items: [
        { name: "Jupyter Notebook", icon: <SiJupyter />, label: "Intermediate", barWidth: "70%" },
        { name: "Google Colab", icon: <SiGooglecolab />, label: "Intermediate", barWidth: "70%" },
        { name: "VS Code", icon: <FaCode />, label: "Advanced", barWidth: "90%" } /* FaCode icon 100% safe aur crash-proof hai */
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-title-wrapper">
        <h2 className="gradient-text">Skills Dashboard</h2>
        <div className="horizontal-line"></div>
      </div>

      <div className="skills-tree">
        {dataset.map((cat, i) => (
          <div key={i} className="skill-bucket">
            <h3>{cat.title}</h3>
            <div className="skill-cards-grid">
              {cat.items.map((item, j) => (
                <div key={j} className="skill-pill glass-card">
                  <div className="pill-top">
                    <span className="icon-wrap">{item.icon}</span>
                    <span className="name-wrap">{item.name}</span>
                    <span className="percent-wrap">{item.label}</span>
                  </div>
                  <div className="pill-bar-bg">
                    <motion.div 
                      className="pill-bar-fill" 
                      initial={{ width: 0 }}
                      whileInView={{ width: item.barWidth }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;