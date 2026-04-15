import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import './sections.css';

const reviews = [
  {
    name: 'Priya Sharma',
    university: 'University of Manchester',
    avatar: 'PS',
    rating: 5,
    text: 'Acadomo made my move to the UK so much easier. I found a verified studio within 2 days and the booking was super smooth. Highly recommend to every international student!',
  },
  {
    name: 'James O\'Brien',
    university: 'University of Edinburgh',
    avatar: 'JO',
    rating: 5,
    text: 'The support team was incredibly helpful. They answered all my queries at midnight! Found me a great room near campus within my budget. 5 stars without question.',
  },
  {
    name: 'Fatima Al-Rashid',
    university: 'King\'s College London',
    avatar: 'FA',
    rating: 5,
    text: 'I was nervous about finding accommodation in London. Acadomo simplified everything — I could compare rooms, read real reviews, and book securely. Perfect experience.',
  },
  {
    name: 'Arjun Patel',
    university: 'University of Birmingham',
    avatar: 'AP',
    rating: 5,
    text: 'No hidden charges, exactly as advertised. The property was verified and I moved in without a single issue. I\'ve already recommended Acadomo to 6 friends.',
  },
];

const renderStars = (count) =>
  Array.from({ length: count }).map((_, i) => (
    <Star key={i} size={14} fill="#D4AF37" color="#D4AF37" />
  ));

const Testimonials = () => {
  return (
    <section className="section-padding testimonials-section">
      <div className="container">
        <motion.div
          className="section-header text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-badge">Student Stories</span>
          <h2 className="mt-2">What Our Students Say</h2>
          <p className="text-muted mt-2">
            Real experiences from students across the globe.
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              className="testimonial-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              aria-label={`Review by ${r.name}`}
            >
              <div className="testimonial-quote-icon">
                <Quote size={22} />
              </div>
              <p className="testimonial-text">"{r.text}"</p>
              <div className="testimonial-footer">
                <div className="testimonial-avatar" aria-hidden="true">
                  {r.avatar}
                </div>
                <div>
                  <div className="testimonial-name">{r.name}</div>
                  <div className="testimonial-uni text-muted">{r.university}</div>
                  <div className="testimonial-stars" aria-label={`${r.rating} out of 5 stars`}>
                    {renderStars(r.rating)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
