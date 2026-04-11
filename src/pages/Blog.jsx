import "./Blog.css";
import { motion } from "framer-motion";
import { MapPin, BedDouble, Star, X } from "lucide-react";
import { useState } from "react";

const blogs = [
  {
    title: "Best Student Housing in London (2026 Guide)",
    desc: "Explore top-rated student accommodations in London.",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    location: "London",
    details: "London offers a wide range of student accommodations from shared apartments to luxury studios. Most properties are located near top campuses and transport hubs. Students can choose housing based on budget, lifestyle, and proximity to campus. Facilities often include WiFi, study areas, gyms, and security. Booking early helps secure better options. Areas like Zone 1 and Zone 2 are most preferred."
  },
  {
    title: "Affordable Student Living in Manchester",
    desc: "Find budget-friendly student rooms.",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    location: "Manchester",
    details: "Manchester is known for affordable student living compared to London. Students can find shared flats, private rooms, and studios at reasonable prices. Most accommodations are near campuses and city centers. Transport is easily accessible and cost-effective. Many properties include utilities in rent. It’s a perfect city for students looking for quality living on a budget."
  },
  {
    title: "Luxury Student Apartments in New York",
    desc: "Discover premium housing in NYC.",
    img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    location: "New York",
    details: "New York offers premium student housing with high-end amenities. Luxury apartments include rooftop lounges, gyms, co-working spaces, and 24/7 security. Locations are close to major campuses and business hubs. Though pricing is higher, the comfort and lifestyle are unmatched. Ideal for students seeking premium living experience."
  },
  {
    title: "Top Student Cities in Australia",
    desc: "Best cities for accommodation.",
    img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
    location: "Australia",
    details: "Australia has top student cities like Sydney, Melbourne, and Brisbane. These cities offer modern accommodations with excellent facilities. Students can choose shared or private options. Safety, quality of life, and infrastructure make Australia a top choice. Rental options vary depending on location and lifestyle."
  },
  {
    title: "How to Choose Student Accommodation",
    desc: "Complete housing guide.",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    location: "Guide",
    details: "Choosing the right accommodation depends on budget, location, and personal preference. Students should consider distance from campus, safety, and facilities. Compare different options before booking. Always check reviews and property details. Flexible booking options are recommended for better planning."
  },
  {
    title: "Shared vs Private Student Rooms",
    desc: "Compare room types.",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    location: "Tips",
    details: "Shared rooms are more affordable and help build social connections. Private rooms offer privacy and independence. Students should choose based on budget and comfort. Both options come with essential facilities. Shared living is ideal for new students, while private rooms suit focused lifestyles."
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <section className="blog-page">

      {/* HERO */}
      <div className="blog-hero">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <h1>Student Accommodation Blog</h1>
          <p>Explore guides, tips & city insights for student living worldwide.</p>
        </motion.div>
      </div>

      {/* GRID */}
      <div className="container blog-container">
        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              className="blog-card"
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              transition={{ delay: index * 0.1 }}
            >
              <div className="blog-img">
                <img src={blog.img} alt={blog.title} />
              </div>

              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p>{blog.desc}</p>

                <div className="blog-meta">
                  <span><MapPin size={14}/> {blog.location}</span>
                  <span><BedDouble size={14}/> Housing</span>
                  <span><Star size={14}/> Featured</span>
                </div>

                {/* 🔥 BUTTON */}
                <button
                  className="read-btn"
                  onClick={() => setSelectedBlog(blog)}
                >
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔥 POPUP */}
      {selectedBlog && (
        <div className="modal-overlay" onClick={() => setSelectedBlog(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>

            <button className="close-btn" onClick={() => setSelectedBlog(null)}>
              <X size={20} />
            </button>

            <img src={selectedBlog.img} className="modal-img" />

            <h2>{selectedBlog.title}</h2>
            <p>{selectedBlog.details}</p>

          </div>
        </div>
      )}

    </section>
  );
};

export default Blog;