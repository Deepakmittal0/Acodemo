import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <>
      <style>
        {`
          @keyframes waPulse {
            0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
            70% { box-shadow: 0 0 0 20px rgba(37, 211, 102, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
          }
          @keyframes waSlideUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .wa-btn-container {
            animation: waSlideUp 0.8s ease-out forwards;
            opacity: 0;
          }
          .wa-btn {
            animation: waPulse 2.5s infinite;
          }
          .wa-tooltip {
            opacity: 0;
            visibility: hidden;
            transform: translateX(10px);
            transition: all 0.3s ease-in-out;
          }
          .wa-btn-container:hover .wa-tooltip {
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
          }
        `}
      </style>
      <div className="fixed bottom-6 right-6 z-[9999] flex items-center wa-btn-container">
        {/* Tooltip */}
        <div className="wa-tooltip mr-3 bg-white text-gray-800 text-sm font-medium py-1.5 px-3 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-gray-100 whitespace-nowrap">
          Chat with us
        </div>
        
        {/* Button */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="wa-btn flex items-center justify-center w-[60px] h-[60px] bg-[#25D366] text-white rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:scale-110 hover:bg-[#20ba59] transition-all duration-300"
          aria-label="Chat with us on WhatsApp"
        >
          <FaWhatsapp size={35} />
        </a>
      </div>
    </>
  );
};

export default WhatsAppButton;
