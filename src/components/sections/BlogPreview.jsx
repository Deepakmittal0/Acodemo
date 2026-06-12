import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import './sections.css';

const posts = [
  {
    id: 1,
    title: '10 Things to Know Before Renting Student Accommodation in the UK',
    excerpt:
      'From tenancy agreements to utility bills — here\'s everything first-time renters in the UK need to know before signing a contract.',
    category: 'UK Guide',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'Best Student Cities in the USA for Affordable Living',
    excerpt:
      'Explore top US cities offering budget-friendly rent, strong universities, and vibrant student communities.',
    category: 'USA Guide',
    readTime: '6 min read',
    img: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'Living in Canada as a Student: Cost & Accommodation Guide',
    excerpt:
      'From Toronto to Vancouver, here’s what students need to know about rent, transport, and student housing in Canada.',
    category: 'Canada Guide',
    readTime: '7 min read',
    img: 'https://images.unsplash.com/photo-1505764706515-aa95265c5abc?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    title: 'Top Student Areas in Sydney & Melbourne (Australia)',
    excerpt:
      'Find the best neighborhoods in Australia for students based on affordability, connectivity, and lifestyle.',
    category: 'Australia',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    title: 'Student Housing in Germany: Everything You Need to Know',
    excerpt:
      'Germany offers affordable education — but what about housing? Here’s a complete guide for international students.',
    category: 'Europe',
    readTime: '6 min read',
    img: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    title: 'Singapore vs Malaysia: Where Should Students Live?',
    excerpt:
      'Compare cost of living, accommodation, and student lifestyle in two of Asia’s top education hubs.',
    category: 'Asia',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&q=80',
  },
];
const BlogPreview = () => {
  return (
    <section className="section-padding blog-section bg-surface">
      <div className="container">
        <motion.div
          className="section-header text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-badge">Student Resources</span>
          <h2 className="mt-2">Latest from Our Blog</h2>
          <p className="text-muted mt-2">
            Tips, guides, and local insights to help you settle in with confidence.
          </p>
        </motion.div>

        <div className="blog-grid">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              className="blog-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true }}
              aria-label={`Blog post: ${post.title}`}
            >
              <div
                className="blog-img"
                style={{ backgroundImage: `url(${post.img})` }}
                role="img"
                aria-label={post.title}
              >
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-body">
                <div className="blog-meta text-muted mb-2">
                  <span><BookOpen size={13} /> {post.readTime}</span>
                  <span><Clock size={13} /> April 2025</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="text-muted blog-excerpt">{post.excerpt}</p>
                <Link
                  to="/blog"
                  className="blog-read-more"
                  aria-label={`Read more about: ${post.title}`}
                >
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-4">
          <Link to="/blog" className="btn btn-outline">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
