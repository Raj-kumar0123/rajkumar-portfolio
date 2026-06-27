// src/components/Contact.jsx
import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  const triggerPipeline = async (e) => {
    e.preventDefault();
    
    // 1. JavaScript Trim Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatusMsg("Please fill in all fields correctly.");
      return;
    }

    // ✅ 2. STRICT ONLY @GMAIL.COM Validation
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailRegex.test(formData.email.trim().toLowerCase())) {
      setStatusMsg("Please enter a valid Gmail address (e.g., name@gmail.com).");
      return;
    }

    setIsSubmitting(true);
    setStatusMsg('');

    try {
      // 3. Data submission
      const response = await fetch("https://formsubmit.co/ajax/rak44614@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: formData.name.trim(),
          Email: formData.email.trim(),
          Message: formData.message.trim(),
          _subject: `Portfolio Inquiry from ${formData.name.trim()}`
        })
      });

      if (response.ok) {
        setStatusMsg("Message sent successfully! 👍");
        setFormData({ name: '', email: '', message: '' }); // Form clear
      } else {
        setStatusMsg("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatusMsg("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-panel">
      <div className="section-title-wrapper">
        <h2 className="gradient-text">Contact</h2>
        <div className="horizontal-line"></div>
      </div>

      <div className="contact-split-box">
        <div className="contact-panel-left">
          <h3>Let's build something epic</h3>
          <p>Feel free to reach out to me for full-time Data Analyst roles, analytics pipelines, or data-driven insights.</p>
          <div className="contact-direct-rows">
            <div className="c-row"><FaEnvelope className="c-ico" /> <span>rak44614@gmail.com</span></div>
            <div className="c-row"><FaMapMarkerAlt className="c-ico" /> <span>India</span></div>
          </div>
        </div>

        <form className="contact-panel-form glass-card" onSubmit={triggerPipeline}>
          <div className="field-group">
            <label>Name</label>
            <input 
              type="text" 
              placeholder="Your Name" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="field-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="name@gmail.com" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="field-group">
            <label>Message</label>
            <textarea 
              rows="4" 
              placeholder="Let's talk about the project parameters..." 
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>
          
          <button type="submit" className="btn-main font-fix" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {/* Status message */}
          {statusMsg && <p className="form-status-alert">{statusMsg}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;