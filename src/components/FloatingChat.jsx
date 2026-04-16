import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaWhatsapp, FaTimes, FaHome, FaPhoneAlt, FaComments, FaUserTie } from 'react-icons/fa';
import './FloatingChat.css';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  
  if (location.pathname !== '/') {
    return null;
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    {
      id: 1,
      title: "Find Student Accommodation",
      icon: <FaHome />,
      link: "/accommodations",
      isExternal: false
    },
    {
      id: 2,
      title: "Request a Callback",
      icon: <FaPhoneAlt />,
      link: "/contact",
      isExternal: false
    },
    {
      id: 3,
      title: "WhatsApp Chat",
      icon: <FaComments />,
      link: "https://wa.me/1234567890", 
      isExternal: true
    },
    {
      id: 4,
      title: "Talk to a Human",
      icon: <FaUserTie />,
      link: "tel:+1234567890", 
      isExternal: true
    }
  ];

  return (
    <div className="acadomo-floating-widget-wrapper">
      {/* Popup Menu */}
      <div className={`acadomo-floating-widget-menu ${isOpen ? 'active' : ''}`}>
        <div className="acadomo-floating-widget-header">
          <h4>How can we help?</h4>
          <p>We usually reply in a few minutes.</p>
        </div>
        <ul className="acadomo-floating-widget-list">
          {menuItems.map((item) => (
            <li key={item.id}>
              {item.isExternal ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="acadomo-floating-widget-link">
                  <span className="acadomo-floating-widget-icon">{item.icon}</span>
                  <span className="acadomo-floating-widget-title">{item.title}</span>
                </a>
              ) : (
                <a href={item.link} className="acadomo-floating-widget-link">
                  <span className="acadomo-floating-widget-icon">{item.icon}</span>
                  <span className="acadomo-floating-widget-title">{item.title}</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      
      <button 
        className={`acadomo-floating-widget-btn ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle Support Menu"
      >
        <span className="acadomo-floating-widget-btn-icon">
          {isOpen ? <FaTimes /> : <FaWhatsapp />}
        </span>
      </button>
    </div>
  );
};

export default FloatingChat;
