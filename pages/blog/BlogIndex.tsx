
import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../../components/PageWrapper';
import ScrollReveal from '../../components/ScrollReveal';

export const BLOG_POSTS = [
  {
    id: 'versatility-in-chaos',
    title: 'Versatility in Chaos: The "Jack" Advantage',
    excerpt: 'Why specialising in a singular trade is the greatest vulnerability in a tech-driven economy.',
    date: '12 March 2025',
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e78b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'the-new-editorial-standard',
    title: 'The New Editorial Standard for C-Suite Influence',
    excerpt: 'Mastering the art of authoritative communication to secure high-value partnerships.',
    date: '08 March 2025',
    category: 'Media',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'synergy-beyond-software',
    title: 'Synergy Beyond Software: Linking Tech and Heritage',
    excerpt: 'How traditional business values can scale disruptive technologies through strategic alignment.',
    date: '01 March 2025',
    category: 'Partnerships',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800'
  }
];

const BlogIndex: React.FC = () => {
  return (
    <PageWrapper>
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-20">
              <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Executive Insights</span>
              <h1 className="text-5xl md:text-7xl font-serif text-azure mb-8">Authoritative Thoughts</h1>
              <p className="text-xl text-azure/70 max-w-2xl mx-auto font-light leading-relaxed">
                Strategic analysis for the modern executive. We explore the intersection of media, tech and decisive business power.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {BLOG_POSTS.map((post, idx) => (
              <ScrollReveal key={post.id} direction="up" delay={idx * 0.1}>
                <Link to={`/blog/${post.id}`} className="group block h-full">
                  <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-azure">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-80 group-hover:opacity-100" 
                    />
                    <div className="absolute top-4 left-4 bg-gold text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                      {post.category}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs text-gold font-bold uppercase tracking-tighter">{post.date}</p>
                    <h3 className="text-2xl font-serif text-azure group-hover:text-gold transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 font-light leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="pt-4 flex items-center gap-2 text-azure font-bold text-sm uppercase tracking-widest">
                      Read Insight 
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default BlogIndex;
