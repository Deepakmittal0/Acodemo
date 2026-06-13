import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Search } from 'lucide-react';
import './sections.css';




const CTABanner = () => {
  return (
    <section className="cta-banner-section section-padding">
      <div className="container">
        <motion.div
          className="cta-banner-inner"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <div className="cta-banner-bg" aria-hidden="true" />

          <div className="cta-banner-content">
            <motion.div
              className="cta-banner-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="cta-banner-eyebrow">🎓 Limited Spots Available</span>
              <h2 className="cta-banner-headline">
                Secure Your Student Home<br />
                <span className="text-accent">Before the Rush.</span>
              </h2>
              <p className="cta-banner-sub">
                Hundreds of students are searching right now. Don't miss out on the best rooms
                near your university.
              </p>
            </motion.div>
<motion.div
  className="cta-banner-actions"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.35 }}
  viewport={{ once: true }}
>

  {/* ✅ BOOK NOW → POPUP OPEN */}
  <Link
  to="/contact"
  className="btn btn-accent cta-btn-main"
  id="cta-book-now"
>
  <Search size={17} /> Book Now
</Link>


  {/* ✅ CALL NOW */}
  <a
    href="tel:+918796449760"
    className="btn cta-btn-ghost"
    id="cta-free-consultation"
  >
    <Phone size={17} /> Get Free Consultation
  </a>


  {/* ✅ WHATSAPP COMMUNITY */}
  <a
    href="https://chat.whatsapp.com/YOUR_COMMUNITY_LINK"
    target="_blank"
    rel="noopener noreferrer"
    className="btn cta-btn-whatsapp"
    id="cta-whatsapp"
  >
    <MessageCircle size={17} /> Join WhatsApp Community
  </a>

</motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
