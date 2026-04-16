import { motion } from 'framer-motion';
import { Search, GitCompareArrows, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './sections.css';

const steps = [
  {
    num: '01',
    icon: <Search size={36} />,
    title: 'Search',
    desc: 'Enter your city, university, or desired area. Filter by budget, room type, and amenities.',
  },
  {
    num: '02',
    icon: <GitCompareArrows size={36} />,
    title: 'Compare',
    desc: 'Review verified listings side by side. Check photos, virtual tours, floor plans, and reviews.',
  },
  {
    num: '03',
    icon: <CheckCircle size={36} />,
    title: 'Book',
    desc: 'Book securely online with instant confirmation. Our team handles the rest for you.',
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding how-section bg-surface">
      <div className="container">
        <motion.div
          className="section-header text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-badge">Simple Process</span>
          <h2 className="mt-2">How It Works</h2>
          <p className="text-muted mt-2">
            From search to move-in — we've made it as simple as 3 steps.
          </p>
        </motion.div>

        <div className="how-steps">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="how-step"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              {i < steps.length - 1 && <div className="how-connector" aria-hidden="true" />}

              <div className="how-step-icon-wrap">
                <div className="how-step-num">{step.num}</div>
                <div className="how-step-icon">{step.icon}</div>
              </div>
              <h3 className="how-step-title mt-3">{step.title}</h3>
              <p className="text-muted how-step-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link to="/accommodations" className="btn btn-primary" id="how-it-works-cta">
            Start Searching Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
