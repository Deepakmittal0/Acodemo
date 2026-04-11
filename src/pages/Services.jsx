import "./Services.css";
import { motion } from "framer-motion";
import { BedDouble, ShieldCheck, MapPin, Star, X } from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Verified Student Housing",
    desc: "Explore 100% verified accommodations with safety, comfort, and modern amenities.",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    icon: <ShieldCheck size={18} />,
    details: "All properties are verified with proper documentation, safety checks, and trusted landlords."
  },
  {
    title: "Affordable Living Options",
    desc: "Find budget-friendly student rooms, shared flats, and private apartments worldwide.",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    icon: <BedDouble size={18} />,
    details: "Choose from a wide range of affordable options including shared and private accommodations."
  },
  {
    title: "Prime Location Stays",
    desc: "Stay close to campuses, city centers, and transport hubs for convenience.",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    icon: <MapPin size={18} />,
    details: "All properties are located near top campuses and key transport areas."
  },
  {
    title: "Luxury Student Apartments",
    desc: "Experience premium housing with high-end facilities and comfortable living spaces.",
    img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    icon: <Star size={18} />,
    details: "Premium apartments with modern amenities, gyms, study rooms, and more."
  },
  {
    title: "Flexible Booking",
    desc: "Easy and flexible booking options tailored to your academic schedule.",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    icon: <BedDouble size={18} />,
    details: "Book easily with flexible contracts and secure payment options."
  },
  {
    title: "24/7 Support",
    desc: "Our team is available round the clock to assist you with your accommodation needs.",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    icon: <ShieldCheck size={18} />,
    details: "Our support team is always available to help you anytime."
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="services-page">

      {/* HERO */}
      <div className="services-hero">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <h1>Premium Student Accommodation Services</h1>
          <p>Find your perfect home with trusted, flexible & affordable housing solutions.</p>
        </motion.div>
      </div>

      {/* SERVICES GRID */}
      <div className="container services-container">
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              transition={{ delay: index * 0.1 }}
            >
              <div className="service-img">
                <img src={service.img} alt={service.title} />
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>

                <div className="service-meta">
                  <span>{service.icon} Accommodation</span>
                </div>

                {/* 🔥 BUTTON FIX */}
                <button
                  className="service-btn"
                  onClick={() => setSelectedService(service)}
                >
                  Explore
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔥 POPUP MODAL */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>

            <button className="close-btn" onClick={() => setSelectedService(null)}>
              <X size={20} />
            </button>

            <img src={selectedService.img} className="modal-img" />

            <h2>{selectedService.title}</h2>
            <p>{selectedService.details}</p>

          </div>
        </div>
      )}

    </section>
  );
};

export default Services;