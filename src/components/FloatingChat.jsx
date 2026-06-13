import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaWhatsapp, FaTimes, FaHome, FaPhoneAlt, FaComments, FaUsers } from 'react-icons/fa';
import './FloatingChat.css';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // 🔒 sirf home page pe show
  if (location.pathname !== '/') {
    return null;
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // 🔥 YOUR NUMBER (yaha change karna)
  const phoneNumber = "918796449760";

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
      link: `https://wa.me/${phoneNumber}`,
      isExternal: true
    },
    {
      id: 4,
      title: "Call Us Now", // ✅ updated
      icon: <FaPhoneAlt />,
      link: `tel:+${phoneNumber}`, // ✅ dynamic number
      isExternal: true
    },
    {
      id: 5,
      title: "Join Free Student Community", // ✅ NEW
      icon: <FaUsers />,
      link: `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi, I want to join the student community")}`,
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
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="acadomo-floating-widget-link"
                >
                  <span className="acadomo-floating-widget-icon">{item.icon}</span>
                  <span className="acadomo-floating-widget-title">{item.title}</span>
                </a>
              ) : (
                <Link
                  to={item.link}
                  className="acadomo-floating-widget-link"
                >
                  <span className="acadomo-floating-widget-icon">{item.icon}</span>
                  <span className="acadomo-floating-widget-title">{item.title}</span>
                </Link>
              )}

            </li>
          ))}
        </ul>
      </div>

      {/* Floating Button */}
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