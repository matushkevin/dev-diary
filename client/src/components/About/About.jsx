import { motion } from 'framer-motion';
import { Download, Code2, Rocket, Gamepad2, PenTool } from 'lucide-react';
// Import your photo here!
import profilePic from '../../assets/kevin-profile.jpg'; 
import './About.css';

function About() {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="about-grid">
          
          {/* LEFT SIDE: Your Photo */}
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-image-glow"></div>
            
            {/* Replaced the placeholder with your real image */}
            <img 
              src={profilePic} 
              alt="Kevin M. Khisa" 
              className="about-image" 
            />
            
          </motion.div>

          {/* RIGHT SIDE: Bio & Details */}
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="about-subtitle">A passionate developer based in Kenya.</h3>
            
            <p className="about-text">
              Hello! I'm Kevin, a Full Stack Developer who enjoys building things that live on the internet. 
              My interest in tech goes beyond just writing code — I love figuring out how things work, 
              which led me to full stack development and a hobby in reverse engineering broken machines.
            </p>
            <p className="about-text">
              When I'm not coding, you can usually find me gaming, skating, driving, or writing poetry. 
              I believe that creativity and technical problem-solving go hand-in-hand, and I bring 
              that unique perspective to every digital experience I build.
            </p>

            {/* Updated Quick Facts */}
            <div className="about-facts">
              <div className="fact-item">
                <Rocket className="fact-icon" size={20} />
                <span>Currently building my portfolio</span>
              </div>
              <div className="fact-item">
                <Code2 className="fact-icon" size={20} />
                <span>Mastering React & Node.js</span>
              </div>
              <div className="fact-item">
                <Gamepad2 className="fact-icon" size={20} />
                <span>Gamer, Skater, & Driver</span>
              </div>
              <div className="fact-item">
                <PenTool className="fact-icon" size={20} />
                <span>Poet & Reverse Engineer</span>
              </div>
            </div>

            {/* Resume Button */}
            <a href="#" className="btn btn-primary resume-btn">
              Download Resume <Download size={18} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;