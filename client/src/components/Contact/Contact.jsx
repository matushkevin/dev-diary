import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Code, Link, MapPin, CheckCircle2 } from 'lucide-react';
import './Contact.css';

function Contact() {
  // 1. State for the form fields
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  // 2. State for the submit button status
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success'

  // Handle typing in the inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    
    // Simulate an API call with setTimeout
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Clear form
      
      // Reset back to idle after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? My inbox is always open!
          </p>
        </motion.div>

        <div className="contact-grid">
          
          {/* LEFT SIDE: Info & Links */}
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="info-card">
              <Mail className="info-icon" size={24} />
              <div>
                <h4>Email</h4>
                <a href="mailto:matushkevin@gmail.com">matushkevin@gmail.com</a>
              </div>
            </div>

            <div className="info-card">
              <MapPin className="info-icon" size={24} />
              <div>
                <h4>Location</h4>
                <p>Nairobi, Kenya</p>
              </div>
            </div>

            <div className="social-links">
              <a href="#" aria-label="GitHub" className="social-btn">
                <Code size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="social-btn">
                <Link size={20} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: The Form */}
          <motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Hello Kevin, I'd like to talk about..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary submit-btn ${status === 'success' ? 'success' : ''}`}
                disabled={status === 'sending' || status === 'success'}
              >
                {status === 'idle' && <><Send size={18} /> Send Message</>}
                {status === 'sending' && 'Sending...'}
                {status === 'success' && <><CheckCircle2 size={18} /> Message Sent!</>}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;