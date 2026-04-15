import { motion } from 'framer-motion';
import { GraduationCap, Home as HomeIcon, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './sections.css';

const steps = [
  {
    icon: <GraduationCap size={28} />,
    title: 'Built for Students',
    desc: 'Acadomo is designed exclusively for university students searching for accommodation near their campus — locally and internationally.',
  },
  {
    icon: <HomeIcon size={28} />,
    title: 'Verified Homes, Zero Stress',
    desc: 'Every property is manually inspected. No scams, no surprises. Just safe, comfortable, and affordable places to live.',
  },
  {
    icon: <Globe size={28} />,
    title: 'Global Reach, Local Feel',
    desc: 'From London to Edinburgh, we cover 50+ cities across the UK — and growing. Find your city, find your home.',
  },
];

const PlatformIntro = () => {
  return (
    <section className="section-padding platform-intro-section" aria-labelledby="platform-intro-heading">
      <div className="container">
        <div className="platform-intro-inner">
          {/* Left: Text */}
          <motion.div
            className="platform-intro-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">How Acadomo Works</span>
            <h2 id="platform-intro-heading" className="mt-2 mb-3">
              The Smartest Way for <br />
              <span className="text-accent">Students to Find a Home</span>
            </h2>
            <p className="text-muted platform-intro-desc">
              Acadomo is a student accommodation platform that connects university students
              with verified, affordable housing near their campus. Whether you are
              relocating to a new city or looking for a better place to stay, we make
              the process simple, safe, and fast.
            </p>
            <Link
              to="/accommodations"
              className="btn btn-primary mt-3"
              id="platform-intro-cta"
            >
              Start Your Search <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Right: Feature cards */}
          <motion.div
            className="platform-intro-right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="platform-step glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                viewport={{ once: true }}
              >
                <div className="platform-step-icon">{step.icon}</div>
                <div>
                  <h4 className="platform-step-title">{step.title}</h4>
                  <p className="text-muted platform-step-desc">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlatformIntro;
