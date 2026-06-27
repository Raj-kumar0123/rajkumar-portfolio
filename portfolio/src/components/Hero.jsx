import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { DotLottieReact } from '@lottiefiles/dotlottie-react'; 
import './Hero.css';

// 👇 Yahan humne aapki local JSON file ko import kiya
import developerAnimation from '../assets/developer.json';

// 👇 Yahan humne assets folder se resume ko import kar liya
import resumePdf from '../assets/resume.pdf';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <motion.div 
          className="hero-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="tagline">Data Analyst</span>
          <h1 className="gradient-text">Hi, I'm Raj Kumar</h1>
          <p>B.Tech Computer Science student passionate about Machine Learning, Artificial Intelligence, and Data Analytics. Driven to build intelligent solutions through data, algorithms, and continuous learning while solving real-world challenges.</p>
          
          <div className="hero-cta">
            <a href="#projects" className="btn-main">View Work</a>
            
            {/* 👇 Resume link aur download attribute yahan add kar diya hai */}
            <a 
              href={resumePdf} 
              target="_blank" 
              rel="noreferrer" 
              download="Raj_Kumar_Resume.pdf" 
              className="btn-sub"
            >
              <FaDownload /> Resume
            </a>
          </div>

          <div className="hero-social-row">
            <a href="https://github.com/Raj-kumar0123" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/raj-kumar-63a38b339/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-right"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="photo-box glass-card" style={{ padding: '10px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '350px', width: '100%' }}>
            <DotLottieReact
              data={developerAnimation} 
              loop
              autoplay
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;