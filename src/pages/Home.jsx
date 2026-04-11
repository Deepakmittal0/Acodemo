import { motion } from 'framer-motion';
import { Search, MapPin, Building, ShieldCheck, Star } from 'lucide-react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1>Premium Student Living,<br/>Global Accommodations.</h1>
            <p className="text-muted mt-2 mb-4">
              Discover unparalleled student accommodations and exceptional housing assistance in top cities worldwide.
            </p>
            
            <div className="search-bar glass">
              <div className="search-input">
                <MapPin className="text-accent" size={20} />
                <input type="text" placeholder="Search by city, area or property..." />
              </div>
              <button className="btn btn-primary">
                <Search size={18} /> Search
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="section-padding trust-section bg-surface">
        <div className="container">
          <motion.div 
            className="grid grid-4 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { icon: <Building size={32} />, stat: '10K+', label: 'Premium Listings' },
              { icon: <MapPin size={32} />, stat: '50+', label: 'Global Cities' },
              { icon: <ShieldCheck size={32} />, stat: '100%', label: 'Verified Properties' },
              { icon: <Star size={32} />, stat: '4.9/5', label: 'Student Ratings' },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp} className="trust-card">
                <div className="trust-icon">{item.icon}</div>
                <h2 className="trust-stat">{item.stat}</h2>
                <p className="text-muted">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Accommodations */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center mb-4">
            <h2>Featured Accommodations</h2>
            <p className="text-muted">Handpicked luxury living spaces for students.</p>
          </div>
          
          <div className="grid grid-3">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item} 
                className="glass-card property-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="property-img">
                  <div className="property-tag">Featured</div>
                </div>
                <div className="property-info">
                  <h3>The Hive - London</h3>
                  <p className="text-muted mb-2"><MapPin size={14}/> Bethnal Green, London</p>
                  <div className="property-details">
                    <span>Private Studio</span>
                    <span className="price text-accent">£350/wk</span>
                  </div>
                  <Link to={`/property/${item}`} className="btn btn-outline w-100 mt-3" style={{width: '100%'}}>
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <Link to="/accommodations" className="btn btn-primary">View All Properties</Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section section-padding">
        <div className="container text-center">
          <motion.div 
            className="cta-content glass"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to start your journey?</h2>
            <p className="mb-3">Get expert housing consultation and priority accommodation access.</p>
            <Link to="/contact" className="btn btn-accent">Speak to a Housing Expert</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
