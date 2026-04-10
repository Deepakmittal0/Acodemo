import { motion } from 'framer-motion';
import { Search, Filter, MapPin, Bed, Bath, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Accommodations.css';

const Accommodations = () => {
  const properties = [
    { id: 1, name: 'The Hive - London', location: 'Bethnal Green, London', price: '£350', type: 'Private Studio', beds: 1, baths: 1, image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80' },
    { id: 2, name: 'Chapter Spitalfields', location: 'Spitalfields, London', price: '£420', type: 'En-suite Shared', beds: 4, baths: 4, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80' },
    { id: 3, name: 'Scape Shoreditch', location: 'Shoreditch, London', price: '£380', type: 'Private Studio', beds: 1, baths: 1, image: 'https://images.unsplash.com/photo-1502672260266-1c1de2d96674?auto=format&fit=crop&q=80' },
    { id: 4, name: 'Vita Student', location: 'Circle Square, Manchester', price: '£280', type: 'Premium Studio', beds: 1, baths: 1, image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80' },
    { id: 5, name: 'Student Castle', location: 'Cambridge City Centre', price: '£310', type: 'En-suite', beds: 6, baths: 6, image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80' },
    { id: 6, name: 'Nido West Hampstead', location: 'West Hampstead, London', price: '£395', type: 'Private Studio', beds: 1, baths: 1, image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80' },
  ];

  return (
    <div className="accommodations-page pt-nav">
      {/* Header Section */}
      <section className="bg-surface section-padding border-bottom">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-2">Premium Student Accommodations</h1>
            <p className="text-muted mb-4">Find your perfect luxury student living experience across global top tier cities.</p>
            
            {/* Filter Bar */}
            <div className="filter-bar glass">
              <div className="filter-group">
                <Search size={18} className="text-muted" />
                <input type="text" placeholder="Search city or university" />
              </div>
              <div className="filter-group hide-mobile">
                <select>
                  <option>Property Type</option>
                  <option>Studio</option>
                  <option>En-suite</option>
                  <option>Shared Apartment</option>
                </select>
              </div>
              <div className="filter-group hide-mobile">
                <select>
                  <option>Price Range</option>
                  <option>Under £200/wk</option>
                  <option>£200 - £350/wk</option>
                  <option>Above £350/wk</option>
                </select>
              </div>
              <button className="btn btn-primary"><Filter size={18}/> Filters</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Property Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-3">
            {properties.map((prop, index) => (
              <motion.div 
                key={prop.id}
                className="glass-card property-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="property-img" style={{ backgroundImage: `url(${prop.image})` }}>
                  <div className="property-tag">{prop.type}</div>
                </div>
                <div className="property-info">
                  <h3>{prop.name}</h3>
                  <p className="text-muted mb-3"><MapPin size={14} className="mr-1"/> {prop.location}</p>
                  
                  <div className="amenities flex mb-3">
                    <span className="amenity"><Bed size={16}/> {prop.beds}</span>
                    <span className="amenity"><Bath size={16}/> {prop.baths}</span>
                    <span className="amenity"><Wifi size={16}/> Free Wifi</span>
                  </div>

                  <div className="property-details">
                    <span className="text-muted">From</span>
                    <span className="price text-accent">{prop.price}<span className="text-muted" style={{fontSize: '0.875rem', fontWeight: 'normal'}}>/wk</span></span>
                  </div>
                  <Link to={`/property/${prop.id}`} className="btn btn-outline w-100 mt-3" style={{width: '100%'}}>
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <button className="btn btn-outline">Load More Properties</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accommodations;
