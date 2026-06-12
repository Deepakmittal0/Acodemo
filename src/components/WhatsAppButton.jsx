import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <>
      <style>
        {`
          /* 🔥 Pulse Animation (soft + premium) */
          @keyframes waPulse {
            0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6); }
            70% { box-shadow: 0 0 0 18px rgba(37, 211, 102, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
          }

          /* 🔥 Entry animation */
          @keyframes waSlideUp {
            from {
              opacity: 0;
              transform: translateY(60px) scale(0.9);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .wa-btn-container {
            animation: waSlideUp 0.6s ease-out forwards;
            opacity: 0;
          }

          .wa-btn {
            animation: waPulse 2.5s infinite;
            position: relative;
          }

          /* 🔥 Glass Tooltip */
          .wa-tooltip {
            opacity: 0;
            visibility: hidden;
            transform: translateX(15px);
            transition: all 0.3s ease;
            backdrop-filter: blur(8px);
          }

          .wa-btn-container:hover .wa-tooltip {
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
          }

          /* 🔥 Button hover glow */
          .wa-btn:hover {
            box-shadow: 0 10px 30px rgba(37, 211, 102, 0.5);
            transform: scale(1.12);
          }

          /* 🔥 Mobile optimization */
          @media (max-width: 480px) {
            .wa-btn {
              width: 55px !important;
              height: 55px !important;
            }
          }
        `}
      </style>

      <div className="fixed bottom-6 right-6 z-[9999] flex items-center wa-btn-container">

        {/* Tooltip */}
        <div className="wa-tooltip mr-3 bg-white/90 text-gray-800 text-sm font-medium py-2 px-4 rounded-xl shadow-lg border border-gray-100 whitespace-nowrap">
          💬 Chat with us
        </div>

        {/* Button */}
        <a
          href="https://wa.me/91"
          target="_blank"
          rel="noopener noreferrer"
          className="wa-btn flex items-center justify-center w-[60px] h-[60px] bg-gradient-to-br from-[#25D366] to-[#1ebe5d] text-white rounded-full shadow-xl transition-all duration-300"
          aria-label="Chat with us on WhatsApp"
        >
          <FaWhatsapp size={32} />
        </a>

      </div>
    </>
  );
};

export default WhatsAppButton;