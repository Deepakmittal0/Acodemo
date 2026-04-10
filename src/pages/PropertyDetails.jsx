import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Wifi, CheckCircle, ChevronLeft } from 'lucide-react';
import './PropertyDetails.css';

const PropertyDetails = () => {
  const { id } = useParams();
  
  // Dummy data
  const property = {
    id,
    name: 'The Hive - London',
    location: 'Bethnal Green, London',
    price: '£350',
    type: 'Private Studio',
    beds: 1,
    baths: 1,
    images: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1de2d96674?auto=format&fit=crop&q=80'
    ],
    description: 'Experience luxury student living at The Hive, located in the vibrant heart of Bethnal Green. Our premium studios feature modern design, high-end appliances, and panoramic city views. Enjoy exclusive access to state-of-the-art amenities including a 24/7 fitness center, rooftop terrace, and soundproof study pods.',
    amenities: ['High-speed Wi-Fi', '24/7 Security', 'Gym Access', 'Study Rooms', 'Cinema Room', 'Laundry Facilities', 'All Bills Included']
  };

  return (
    <div className="property-details-page pt-nav">
      {/* Back Link */}
      <div className="container pt-3">
        <Link to="/accommodations" className="text-muted flex mb-4" style={{ alignItems: 'center' }}>
          <ChevronLeft size={18} /> Back to Accommodations
        </Link>
      </div>

      {/* Image Gallery */}
      <section className="container mb-4">
        <div className="gallery-grid">
          <motion.div 
            className="main-img"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ backgroundImage: `url(${property.images[0]})` }}
          ></motion.div>
          <div className="sub-images">
            <motion.div 
              className="sub-img"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ backgroundImage: `url(${property.images[1]})` }}
            ></motion.div>
            <motion.div 
              className="sub-img"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ backgroundImage: `url(${property.images[2]})` }}
            >
              <div className="more-images overlay flex-center">
                <span>View all photos</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Property Information */}
      <section className="container section-padding pb-4">
        <div className="grid details-grid">
          <div className="main-info">
            <div className="mb-4">
              <span className="property-tag mb-2" style={{ display: 'inline-block' }}>{property.type}</span>
              <h1 className="mb-2">{property.name}</h1>
              <p className="text-muted flex" style={{ alignItems: 'center' }}>
                <MapPin size={18} className="mr-1 text-accent"/> {property.location}
              </p>
            </div>

            <div className="amenities-overview flex mb-4 pb-4 border-bottom">
              <div className="amenity-badge"><Bed size={20}/> {property.beds} Bedroom</div>
              <div className="amenity-badge"><Bath size={20}/> {property.baths} Bathroom</div>
              <div className="amenity-badge"><Wifi size={20}/> Free Wi-Fi</div>
            </div>

            <div className="mb-4 pb-4 border-bottom">
              <h3 className="mb-3">About this property</h3>
              <p className="text-muted" style={{ lineHeight: '1.8' }}>{property.description}</p>
            </div>

            <div>
              <h3 className="mb-3">Premium Amenities</h3>
              <ul className="amenities-list grid grid-2">
                {property.amenities.map((item, index) => (
                  <li key={index} className="flex" style={{ alignItems: 'center' }}>
                    <CheckCircle size={18} className="text-accent mr-1"/> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="sidebar">
            <div className="glass-card booking-card">
              <div className="price-header border-bottom mb-4 pb-3">
                <span className="text-muted">Starting from</span>
                <h2>{property.price}<span className="text-muted" style={{ fontSize: '1rem', fontWeight: 'normal' }}> / week</span></h2>
              </div>
              <button className="btn btn-primary w-100 mb-3" style={{ width: '100%' }}>Book Now</button>
              <button className="btn btn-outline w-100" style={{ width: '100%' }}>Schedule Viewing</button>
              <p className="text-center text-muted mt-3" style={{ fontSize: '0.875rem' }}>No hidden fees. Free cancellation options available.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetails;
