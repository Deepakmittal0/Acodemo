import { motion } from 'framer-motion';
import { GraduationCap, Home as HomeIcon, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef, useState } from "react";
import './sections.css';


const countries = [
  { name: "United States", img: "https://flagcdn.com/w320/us.png" },
  { name: "Canada", img: "https://flagcdn.com/w320/ca.png" },
  { name: "United Kingdom", img: "https://flagcdn.com/w320/gb.png" },
  { name: "Ireland", img: "https://flagcdn.com/w320/ie.png" },
  { name: "Germany", img: "https://flagcdn.com/w320/de.png" },
  { name: "France", img: "https://flagcdn.com/w320/fr.png" },

  { name: "Netherlands", img: "https://flagcdn.com/w320/nl.png" },
  { name: "Spain", img: "https://flagcdn.com/w320/es.png" },
  { name: "Italy", img: "https://flagcdn.com/w320/it.png" },
  { name: "China", img: "https://flagcdn.com/w320/cn.png" },
  { name: "Hong Kong", img: "https://flagcdn.com/w320/hk.png" },
  { name: "Singapore", img: "https://flagcdn.com/w320/sg.png" },
  { name: "Malaysia", img: "https://flagcdn.com/w320/my.png" },
  { name: "Japan", img: "https://flagcdn.com/w320/jp.png" },
  { name: "South Korea", img: "https://flagcdn.com/w320/kr.png" },
  { name: "Vietnam", img: "https://flagcdn.com/w320/vn.png" },
  { name: "Australia", img: "https://flagcdn.com/w320/au.png" },
  { name: "New Zealand", img: "https://flagcdn.com/w320/nz.png" },
  { name: "Austria", img: "https://flagcdn.com/w320/at.png" },
  { name: "Belgium", img: "https://flagcdn.com/w320/be.png" },
  { name: "Denmark", img: "https://flagcdn.com/w320/dk.png" },
  { name: "Finland", img: "https://flagcdn.com/w320/fi.png" },
  { name: "Sweden", img: "https://flagcdn.com/w320/se.png" },
  { name: "Switzerland", img: "https://flagcdn.com/w320/ch.png" },
  { name: "Portugal", img: "https://flagcdn.com/w320/pt.png" },
  { name: "Poland", img: "https://flagcdn.com/w320/pl.png" },
  { name: "Thailand", img: "https://flagcdn.com/w320/th.png" },
  { name: "United Arab Emirates", img: "https://flagcdn.com/w320/ae.png" },
  { name: "Malta", img: "https://flagcdn.com/w320/mt.png" },
];

export default function CountrySlider() {
  const scrollRef = useRef();
  const [active, setActive] = useState(0);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  return (
    <section className="cs-section">
      <div className="container">

        {/* HEADER */}
        <div className="cs-header">
          <h3>Explore Countries</h3>
          <button className="cs-view-btn">View All →</button>
        </div>

        <div className="cs-wrapper">

          <button className="cs-nav left" onClick={() => scroll("left")}>‹</button>

          <div className="cs-slider" ref={scrollRef}>
            {countries.map((c, i) => (
              <div
                key={i}
                className={`cs-card 
                  ${active === i ? "active" : ""} 
                  ${i < 6 ? "top" : ""}`}
                onClick={() => setActive(i)}
              >
                <img src={c.img} alt={c.name} />
                <span>{c.name}</span>
              </div>
            ))}
          </div>

          <button className="cs-nav right" onClick={() => scroll("right")}>›</button>

        </div>

      </div>
    </section>
  );
}
// export default CountrySlider;