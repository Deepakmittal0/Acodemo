import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-padding">
      <div className="container grid grid-4 footer-grid">
        <div className="footer-col brand-col">
          <Link to="/" className="nav-logo footer-logo mb-2" style={{ display: 'block' }}>
            <span className="text-surface">Acad</span><span className="text-accent">omo</span>
          </Link>
          <p className="text-muted mb-3">
            Your global gateway to premium student accommodations. Experience luxury, trust, and comfortable living.
          </p>
          <div className="social-links">
            <a href="#"><FaFacebookF size={20} /></a>
            <a href="#"><FaTwitter size={20} /></a>
            <a href="#"><FaInstagram size={20} /></a>
            <a href="#"><FaLinkedinIn size={20} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading mb-2">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/accommodations">Accommodations</Link></li>
            <li><Link to="/services">Accommodation Services</Link></li>
            <li><Link to="/blog">Blog & News</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading mb-2">Support</h4>
          <ul className="footer-links">
            <li><Link to="/">FAQ</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/">Privacy Policy</Link></li>
            <li><Link to="/">Terms of Service</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading mb-2">Contact Info</h4>
          <ul className="footer-contact">
            <li><MapPin size={18} className="text-accent" /> 123 Global Campus Way, London, UK</li>
            <li><Phone size={18} className="text-accent" /> +44 20 7946 0958</li>
            <li><Mail size={18} className="text-accent" /> hello@acadomo.example.com</li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Acadomo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;