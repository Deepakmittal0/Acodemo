import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Wifi, ParkingSquare, Utensils, Flame } from 'lucide-react';
import './sections.css';

const properties = [
  {
    id: 1,
    name: 'The Hive - London',
    location: 'Bethnal Green, London',
    price: '£350/wk',
    type: 'Private Studio',
    badge: 'Most Popular',
    badgeClass: 'badge-gold',
    urgency: 'Only 3 rooms left!',
    amenities: [<Wifi size={14} key="w" />, <Utensils size={14} key="u" />, <ParkingSquare size={14} key="p" />],
    img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    name: "Scholar's Quarter - Manchester",
    location: 'Fallowfield, Manchester',
    price: '£210/wk',
    type: 'Shared En-suite',
    badge: 'Best Value',
    badgeClass: 'badge-navy',
    urgency: 'Booked 5 times today',
    amenities: [<Wifi size={14} key="w" />, <Flame size={14} key="f" />, <Utensils size={14} key="u" />],
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    name: 'Edinburgh View Studios',
    location: 'Old Town, Edinburgh',
    price: '£295/wk',
    type: 'Superior Studio',
    badge: 'New Listing',
    badgeClass: 'badge-green',
    urgency: 'Limited rooms available',
    amenities: [<Wifi size={14} key="w" />, <ParkingSquare size={14} key="p" />, <Utensils size={14} key="u" />],
    img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80',
  },
];

const FeaturedProperties = () => {
  return (
    <section className="section-padding featured-props-section">
      <div className="container">
        <motion.div
          className="section-header text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-badge">Top Picks</span>
          <h2 className="mt-2">Featured Student Properties</h2>
          <p className="text-muted mt-2">Handpicked premium stays near top universities.</p>
        </motion.div>

        <div className="grid grid-3">
          {properties.map((prop, i) => (
            <motion.article
              key={prop.id}
              className="glass-card fp-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true }}
              aria-label={`Property: ${prop.name}`}
            >
              <div
                className="fp-img"
                style={{ backgroundImage: `url(${prop.img})` }}
                role="img"
                aria-label={prop.name}
              >
                <span className={`fp-badge ${prop.badgeClass}`}>{prop.badge}</span>
                <span className="fp-urgency">🔥 {prop.urgency}</span>
              </div>

              <div className="fp-body">
                <div className="fp-amenities mb-2">
                  {prop.amenities.map((icon, idx) => (
                    <span key={idx} className="fp-amenity-tag">{icon}</span>
                  ))}
                  <span className="fp-type-tag">{prop.type}</span>
                </div>

                <h3 className="fp-title">{prop.name}</h3>
                <p className="text-muted fp-location mb-2">
                  <MapPin size={14} /> {prop.location}
                </p>

                <div className="fp-footer">
                  <span className="fp-price text-accent">{prop.price}</span>
                  <Link
                    to={`/property/${prop.id}`}
                    className="btn btn-primary fp-cta"
                    aria-label={`View details for ${prop.name}`}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-4">
          <Link to="/accommodations" className="btn btn-outline">
            Explore All Properties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
