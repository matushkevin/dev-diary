import { ArrowUp } from 'lucide-react';
import './Footer.css';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>&copy; {new Date().getFullYear()} Kevin M. Khisa. All rights reserved.</p>
        <p className="footer-built">Built with React & Node.js</p>
        
        <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}

export default Footer;