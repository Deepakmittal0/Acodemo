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
    category: 'Renting Tips',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'Best Student Areas to Live in London in 2025',
    excerpt:
      'We ranked London\'s most affordable and well-connected neighbourhoods for students based on transport, nightlife, and proximity to university.',
    category: 'City Guides',
    readTime: '7 min read',
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'How to Budget for Student Living: A Complete 2025 Guide',
    excerpt:
      'Rent, groceries, transport, socialising — we break down average monthly costs for students in UK cities so you can plan smarter.',
    category: 'Finance',
    readTime: '6 min read',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
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
