import "./Contact.css";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Contact = () => {
  return (
    <section className="contact-page">
      <div className="contact-container">

        {/* 🔥 HEADER */}
        <motion.div 
          className="contact-header"
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <span className="badge">24/7 Student Support</span>
          <h1>Contact <span>Acadomo</span></h1>
          <p>From Search to Stay — We’ve got you covered.</p>
        </motion.div>

        {/* 🔥 WHY SECTION (TOP) */}
        <motion.div 
          className="contact-card why-card"
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
        >
          <h3>Why Choose Acadomo?</h3>
          <ul>
            <li><CheckCircle size={16}/> 24x7 Expert Support</li>
            <li><CheckCircle size={16}/> Verified Properties</li>
            <li><CheckCircle size={16}/> Best Price Guarantee</li>
            <li><CheckCircle size={16}/> Free Housing Advice</li>
          </ul>
        </motion.div>

        {/* 🔥 FORM */}
        <motion.div 
          className="contact-card"
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
        >
          <h3>Get Expert Guidance</h3>

          <div className="form-row">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Phone Number" />
          </div>

          <input type="email" placeholder="Email Address" />

          <select>
            <option>Student Accommodation</option>
            <option>Private Apartment</option>
          </select>

          <textarea rows="4" placeholder="Your Message"></textarea>

          <button className="primary-btn">
            Get Free Consultation
          </button>

          {/* ACTION BUTTONS */}
          <div className="contact-actions mt-3">
            <a href="tel:+919654598308" className="call-btn">
              <Phone size={18}/> Call Now
            </a>
            <a href="https://wa.me/919654598308" className="whatsapp-btn">
              <MessageCircle size={18}/> WhatsApp
            </a>
          </div>
        </motion.div>

        {/* 🔥 MAP */}
        <motion.div 
          className="contact-card"
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
        >
          <h4><MapPin size={16}/> Visit Our Office</h4>
          <iframe
            src="https://maps.google.com/maps?q=Noida&t=&z=13&ie=UTF8&iwloc=&output=embed"
            title="map"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;