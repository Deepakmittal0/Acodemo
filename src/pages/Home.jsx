import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Building, ShieldCheck, Star } from "lucide-react";
import { Link } from "react-router-dom";
import "./Home.css";
import WhatsAppButton from "../components/WhatsAppButton";
import RequirementPopup from "./RequirementPopup";

/* ── Lazy-load all new sections for performance ── */
const PlatformIntro = lazy(
  () => import("../components/sections/PlatformIntro"),
);
const PopularCities = lazy(
  () => import("../components/sections/PopularCities"),
);
const FeaturedProperties = lazy(
  () => import("../components/sections/FeaturedProperties"),
);
const WhyChooseUs = lazy(() => import("../components/sections/WhyChooseUs"));
const HowItWorks = lazy(() => import("../components/sections/HowItWorks"));
const CTABanner = lazy(() => import("../components/sections/CTABanner"));
const Testimonials = lazy(() => import("../components/sections/Testimonials"));
const BlogPreview = lazy(() => import("../components/sections/BlogPreview"));

/* Reusable stat card to avoid inline repetition */
const StatCard = ({ icon, stat, label, variants }) => (
  <motion.div variants={variants} className="trust-card">
    <div className="trust-icon" aria-hidden="true">
      {icon}
    </div>
    <h2 className="trust-stat">{stat}</h2>
    <p className="text-muted">{label}</p>
  </motion.div>
);

const STATS = [
  { icon: <Building size={32} />, stat: "10K+", label: "Premium Listings" },
  { icon: <MapPin size={32} />, stat: "50+", label: "Global Cities" },
  {
    icon: <ShieldCheck size={32} />,
    stat: "100%",
    label: "Verified Properties",
  },
  { icon: <Star size={32} />, stat: "4.9/5", label: "Student Ratings" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ── Section loading fallback ── */
const SectionFallback = () => (
  <div
    style={{
      minHeight: "200px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <span className="text-muted" style={{ fontSize: "0.85rem" }}>
      Loading…
    </span>
  </div>
);

const Home = () => {
  return (
    <div className="home-page">
      {/* ── 1. HERO ─────────────────────────────────── */}
      <section className="hero" aria-label="Hero section">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1>
              Find Your Perfect Student Home <br />
              Across the Globe.
            </h1>

            <p className="text-muted mt-2 mb-4">
              Search, compare, and book verified student accommodations near top
              universities worldwide.
            </p>

            <div className="search-bar glass" role="search">
              <div className="search-input">
                <MapPin className="text-accent" size={20} aria-hidden="true" />
                <input
                  type="search"
                  placeholder="Search by city, university or property..."
                  aria-label="Search by city, university or property"
                />
              </div>
              <Link
                to="/accommodations"
                className="btn btn-primary"
                id="hero-find-accommodation"
              >
                <Search size={18} aria-hidden="true" /> Find Accommodation
              </Link>
            </div>

            {/* Hero sub-links */}
            <div className="hero-sublinks">
              <Link to="/accommodations" className="hero-sublink">
                London
              </Link>
              <Link to="/accommodations" className="hero-sublink">
                Manchester
              </Link>
              <Link to="/accommodations" className="hero-sublink">
                Edinburgh
              </Link>
              <Link to="/accommodations" className="hero-sublink">
                Birmingham
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. TRUST STATS ──────────────────────────── */}
      <section
        className="section-padding trust-section bg-surface"
        aria-label="Platform statistics"
      >
        <div className="container">
          <motion.div
            className="grid grid-4 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {STATS.map((item, index) => (
              <StatCard key={index} variants={fadeInUp} {...item} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. PLATFORM INTRO ───────────────────────── */}
      <Suspense fallback={<SectionFallback />}>
        <PlatformIntro />
      </Suspense>

      {/* ── 4. POPULAR CITIES ───────────────────────── */}
      <Suspense fallback={<SectionFallback />}>
        <PopularCities />
      </Suspense>

      {/* ── 5. FEATURED PROPERTIES ──────────────────── */}
      <Suspense fallback={<SectionFallback />}>
        <FeaturedProperties />
      </Suspense>

      {/* ── 6. WHY CHOOSE US ────────────────────────── */}
      <Suspense fallback={<SectionFallback />}>
        <WhyChooseUs />
      </Suspense>

      {/* ── 7. HOW IT WORKS ─────────────────────────── */}
      <Suspense fallback={<SectionFallback />}>
        <HowItWorks />
      </Suspense>

      {/* ── 8. MULTI-CTA BANNER ─────────────────────── */}
      <Suspense fallback={<SectionFallback />}>
        <CTABanner />
      </Suspense>

      {/* ── 9. TESTIMONIALS ─────────────────────────── */}
      <Suspense fallback={<SectionFallback />}>
        <Testimonials />
      </Suspense>

      {/* ── 10. BLOG PREVIEW ────────────────────────── */}
      <Suspense fallback={<SectionFallback />}>
        <BlogPreview />
      </Suspense>

      {/* ── 11. FINAL CTA ───────────────────────────── */}
      <section
        className="cta-section section-padding"
        aria-label="Final call to action"
      >
        <div className="container text-center">
          <motion.div
            className="cta-content glass"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Find Your Student Home?</h2>
            <p className="mb-3">
              Get expert housing consultation and priority accommodation access
              — completely free.
            </p>
            <div className="cta-final-actions">
              <Link
                to="/accommodations"
                className="btn btn-accent"
                id="final-cta-explore"
              >
                Explore Properties
              </Link>
              <Link
                to="/contact"
                className="btn cta-btn-ghost"
                id="final-cta-expert"
              >
                Speak to a Housing Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <WhatsAppButton />
      <RequirementPopup />
    </div>
  );
};

export default Home;
