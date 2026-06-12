import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Building, Navigation, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from "../assets/logo1.jpeg"
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Globe size={20} /> },
    { name: 'Accommodations', path: '/accommodations', icon: <Building size={20} /> },
    { name: 'Services', path: '/services', icon: <Navigation size={20} /> },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact', icon: <Phone size={20} /> },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container flex items-center justify-between">

        <Link to="/" className="nav-logo flex items-center">
          <img 
            src={logo} 
            alt="Acadomo Logo" 
            className="h-12 md:h-12 lg:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>

        <div className="nav-links">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary ml-2">Find Housing</Link>
        </div>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu glass">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.icon && <span className="mobile-icon">{link.icon}</span>}
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="btn btn-primary w-100 mt-2" 
            onClick={() => setIsOpen(false)}
          >
            Find Housing
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;