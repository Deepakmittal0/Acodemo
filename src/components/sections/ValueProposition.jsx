import { motion } from 'framer-motion';
import { ShieldCheck, BadgePoundSterling, CalendarCheck, HeadphonesIcon } from 'lucide-react';
import './sections.css';

const features = [
  {
    icon: <ShieldCheck size={36} />,
    title: 'Verified Properties',
    desc: 'Every listing is manually verified by our team for safety, accuracy, and quality standards.',
  },
  {
    icon: <BadgePoundSterling size={36} />,
    title: 'Affordable Pricing',
    desc: 'No hidden charges. Transparent pricing with best-rate guarantee on all properties.',
  },
  {
    icon: <CalendarCheck size={36} />,
    title: 'Easy Booking',
    desc: 'Book your room in minutes. Secure payments and instant confirmation, no paperwork hassle.',
  },
  {
    icon: <HeadphonesIcon size={36} />,
    title: '24/7 Student Support',
    desc: 'Round-the-clock assistance from our dedicated housing experts — always here for you.',
  },
];

const ValueProposition = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  };

  return (
    <section className="section-padding value-section">
      <div className="container">
        <motion.div
          className="section-header text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-badge">Why Acadomo?</span>
          <h2 className="mt-2">Everything a Student Needs, <br />Under One Roof.</h2>
          <p className="text-muted mt-2">
            We make finding student accommodation simple, safe, and stress-free.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-4 value-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {features.map((f, i) => (
            <motion.div key={i} className="value-card glass-card" variants={cardVariants}>
              <div className="value-icon">{f.icon}</div>
              <h3 className="value-title">{f.title}</h3>
              <p className="text-muted value-desc">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
