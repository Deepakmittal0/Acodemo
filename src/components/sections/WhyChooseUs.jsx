import { motion } from 'framer-motion';
import { Ban, HeadphonesIcon, ShieldCheck, BadgePoundSterling } from 'lucide-react';
import './sections.css';

const benefits = [
  {
    icon: <Ban size={32} />,
    title: 'No Hidden Charges',
    desc: 'What you see is what you pay. Fully transparent pricing with zero surprise fees.',
    color: '#e11d48',
  },
  {
    icon: <HeadphonesIcon size={32} />,
    title: '24/7 Student Support',
    desc: 'Our housing experts are available around the clock to help you every step of the way.',
    color: '#D4AF37',
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Verified Listings Only',
    desc: 'Every property is inspected and verified by our team before it appears on Acadomo.',
    color: '#0ea5e9',
  },
  {
    icon: <BadgePoundSterling size={32} />,
    title: 'Best Price Guarantee',
    desc: 'Found a lower price elsewhere? We\'ll match it — no questions asked.',
    color: '#22c55e',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding why-section">
      <div className="container">
        <div className="why-inner">
          <motion.div
            className="why-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">Our Promise</span>
            <h2 className="mt-2 mb-3">
              Why Thousands of <br />
              <span className="text-accent">Students Choose Us</span>
            </h2>
            <p className="text-muted">
              We built Acadomo around one simple goal: help every student find a safe, comfortable,
              and affordable home — without the stress.
            </p>
            <div className="why-stats mt-4">
              <div className="why-stat-item">
                <span className="why-stat-num">500+</span>
                <span className="why-stat-label">Happy Students</span>
              </div>
              <div className="why-stat-item">
                <span className="why-stat-num">⭐ 4.9</span>
                <span className="why-stat-label">Average Rating</span>
              </div>
              <div className="why-stat-item">
                <span className="why-stat-num">50+</span>
                <span className="why-stat-label">Cities Covered</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="why-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                className="why-benefit-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="why-benefit-icon" style={{ color: b.color }}>
                  {b.icon}
                </div>
                <div>
                  <h4 className="why-benefit-title">{b.title}</h4>
                  <p className="text-muted why-benefit-desc">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
