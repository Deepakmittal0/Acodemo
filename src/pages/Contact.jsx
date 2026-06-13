import "./Contact.css";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, CheckCircle } from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    type: "Student Accommodation",
    message: ""
  });

  const [error, setError] = useState("");

  // input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // submit
  const handleSubmit = () => {

    // ✅ validation
    if (!form.name || !form.phone || !form.email) {
      setError("Please fill all required fields");
      return;
    }

    if (!/^[0-9]{10}$/.test(form.phone)) {
      setError("Enter valid 10 digit phone number");
      return;
    }

    setError("");

    // ✅ WhatsApp message (tumhare number pe aayega)
    const msg = `Hello Acadomo, I need consultation:

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Requirement: ${form.type}
Message: ${form.message}`;

    const url = `https://wa.me/918796449760?text=${encodeURIComponent(msg)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="contact-page">
      <div className="contact-container">

        <motion.div className="contact-header" initial="hidden" animate="show" variants={fadeUp}>
          <span className="badge">24/7 Student Support</span>
          <h1>Contact <span>Acadomo</span></h1>
          <p>From Search to Stay — We’ve got you covered.</p>
        </motion.div>

        <motion.div className="contact-card why-card" initial="hidden" whileInView="show" variants={fadeUp}>
          <h3>Why Choose Acadomo?</h3>
          <ul>
            <li><CheckCircle size={16}/> 24x7 Expert Support</li>
            <li><CheckCircle size={16}/> Verified Properties</li>
            <li><CheckCircle size={16}/> Best Price Guarantee</li>
            <li><CheckCircle size={16}/> Free Housing Advice</li>
          </ul>
        </motion.div>

        <motion.div className="contact-card" initial="hidden" whileInView="show" variants={fadeUp}>
          <h3>Get Expert Guidance</h3>

          {/* ❗ error message */}
          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
          >
            <option>Student Accommodation</option>
            <option>Private Apartment</option>
          </select>

          <textarea
            rows="4"
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button className="primary-btn" onClick={handleSubmit}>
            Get Free Consultation
          </button>

          <div className="contact-actions mt-3">
            <a href="tel:+918796449760" className="call-btn">
              <Phone size={18}/> Call Now
            </a>
            <a href="https://wa.me/8796449760" className="whatsapp-btn">
              <MessageCircle size={18}/> WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div className="contact-card" initial="hidden" whileInView="show" variants={fadeUp}>
          <h4><MapPin size={16}/> Visit Our Office</h4>
          <iframe
            src="https://maps.google.com/maps?q= 92/12 Sector A1-4, Narela, Delhi India&t=&z=13&ie=UTF8&iwloc=&output=embed"
            title="map"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;