import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Mail, MapPin, Phone, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import './Footer.css';

const faqs = [
  {
    q: 'Are all properties on Acadomo verified?',
    a: 'Yes — every listing is manually inspected and verified by our housing team before it goes live.',
  },
  {
    q: 'How long does the booking process take?',
    a: 'Most bookings are confirmed within 24 hours. Our team will guide you through every step.',
  },
  {
    q: 'Are there any hidden fees?',
    a: 'Never. We operate on a fully transparent pricing model — what you see is exactly what you pay.',
  },
  {
    q: 'Can I cancel my booking?',
    a: 'Cancellation terms vary by property. All policies are clearly listed before you confirm your booking.',
  },
];

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button
        className="faq-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <ChevronDown size={16} className="faq-chevron" />
      </button>
      {open && <p className="faq-answer">{a}</p>}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-main section-padding">
        <div className="container grid grid-4 footer-grid">
        
          <div className="footer-col brand-col">
            <Link to="/" className="nav-logo footer-logo mb-2" style={{ display: 'block' }}>
              <span className="text-surface">Aca</span><span className="text-accent">domo</span>
            </Link>
            <p className="text-muted mb-3">
              Your global gateway to premium student accommodations. Experience luxury, trust, and comfortable living.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF size={18} /></a>
              <a href="https://twitter.com"  target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter size={18} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn size={18} /></a>
              <a href="https://youtube.com"  target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube size={18} /></a>
            </div>
          
            <div className="footer-trust-badge mt-3">
              ⭐ 4.9/5 · Trusted by 500+ students
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading mb-2">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/accommodations">Accommodations</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/blog">Blog &amp; News</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading mb-2">Support</h4>
            <ul className="footer-links">
              <li><Link to="/contact">Talk to an Expert</Link></li>
              <li>
                <a href="https://wa.me/8796449760" target="_blank" rel="noopener noreferrer">
                  WhatsApp Chat
                </a>
              </li>
              <li><Link to="/">Privacy Policy</Link></li>
              <li><Link to="/">Terms of Service</Link></li>
              <li><Link to="/">Refund Policy</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading mb-2">Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <MapPin size={17} className="text-accent" />
                <span>Address-92/12 Sector A1-4, Narela, Delhi India</span>
              </li>
              <li>
                <Phone size={17} className="text-accent" />
                <a href="tel:+442079460958">+918796449760</a>
              </li>
              <li>
                <Mail size={17} className="text-accent" />
                <a href="mailto:info@acadomo.com">info@acadomo.com</a>
              </li>
            </ul>
            <Link to="/contact" className="btn btn-accent footer-cta-btn mt-3">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-faq-strip">
        <div className="container">
          <h4 className="footer-faq-title">Frequently Asked Questions</h4>
          <div className="footer-faq-grid">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Acadomo. All rights reserved. Built with ❤️ for students worldwide.</p>
          <div className="footer-bottom-links">
            <Link to="/">Privacy</Link>
            <Link to="/">Terms</Link>
            <Link to="/">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;