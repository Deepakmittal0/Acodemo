import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './sections.css';

const cities = [
  {
    name: 'London',
    country: 'United Kingdom',
    properties: '2,400+ listings',
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Manchester',
    country: 'United Kingdom',
    properties: '1,100+ listings',
    img: 'https://images.unsplash.com/photo-1570939274717-7eda259b50ed?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Edinburgh',
    country: 'Scotland',
    properties: '870+ listings',
    img: 'https://images.unsplash.com/photo-1506377711776-dbdc2f3a20cb?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Birmingham',
    country: 'United Kingdom',
    properties: '750+ listings',
    img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Leeds',
    country: 'United Kingdom',
    properties: '620+ listings',
    img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Bristol',
    country: 'United Kingdom',
    properties: '540+ listings',
    img: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=600&q=80',
  },
];

const PopularCities = () => {
  return (
    <section className="section-padding cities-section bg-surface">
      <div className="container">
        <motion.div
          className="section-header text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-badge">Explore Cities</span>
          <h2 className="mt-2">Popular Student Cities</h2>
          <p className="text-muted mt-2">
            Find verified accommodations in the UK's top university cities.
          </p>
        </motion.div>

        <div className="cities-grid">
          {cities.map((city, i) => (
            <motion.div
              key={i}
              className="city-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <div
                className="city-img"
                style={{ backgroundImage: `url(${city.img})` }}
                role="img"
                aria-label={`${city.name} cityscape`}
              >
                <div className="city-overlay">
                  <div className="city-info">
                    <h3 className="city-name">{city.name}</h3>
                    <p className="city-country">{city.country}</p>
                    <span className="city-count">{city.properties}</span>
                  </div>
                  <Link
                    to="/accommodations"
                    className="btn btn-accent city-btn"
                    aria-label={`Explore accommodations in ${city.name}`}
                  >
                    Explore <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCities;
