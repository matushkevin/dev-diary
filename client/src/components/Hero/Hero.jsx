import { motion } from 'framer-motion';
import { ArrowRight, Mail, ChevronDown } from 'lucide-react';
import './Hero.css';

function Hero() {
  // Framer Motion Variants: This lets us set up animations cleanly
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // This makes each child animate one after another
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="home" className="hero">
      {/* Animated background glow */}
      <div className="hero-glow"></div>

      <div className="hero-container">
        {/* LEFT SIDE: Text and Buttons */}
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="hero-eyebrow">
            <span className="eyebrow-dot"></span>
            Available for work
          </motion.p>

          <motion.h1 variants={itemVariants} className="hero-title">
            Hi, I'm <span className="gradient-text">Kevin M. Khisa</span>.
            <br />
            I build things for the web.
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-subtitle">
            I'm a passionate <strong>Full Stack Developer</strong> focused on building 
            exceptional digital experiences. Currently, I'm focused on mastering 
            React and Node.js to create scalable, modern applications.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me <Mail size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE: The Code Editor Visual */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        >
          <div className="visual-card">
            <div className="visual-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="visual-code">
              <p><span className="code-purple">const</span> developer = {'{'}</p>
              <p>&nbsp;&nbsp;name: <span className="code-green">'Kevin'</span>,</p>
              <p>&nbsp;&nbsp;role: <span className="code-green">'Full Stack'</span>,</p>
              <p>&nbsp;&nbsp;stack: [<span className="code-green">'React'</span>, <span className="code-green">'Node'</span>],</p>
              <p>&nbsp;&nbsp;passion: <span className="code-green">'Building'</span></p>
              <p>{'}'};</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator at the bottom */}
      <motion.a
        href="#about"
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <ChevronDown size={24} />
      </motion.a>
    </section>
  );
}

export default Hero;