
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import PageWrapper from '../../components/PageWrapper';
import ScrollReveal from '../../components/ScrollReveal';
import { BLOG_POSTS } from './BlogIndex';

const BlogPost: React.FC = () => {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <PageWrapper>
      <article className="overflow-hidden">
        {/* Post Hero */}
        <section className="relative h-[60vh] flex items-end pb-20 bg-azure text-white">
          <div className="absolute inset-0">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover opacity-30 grayscale" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-azure to-transparent"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
            <ScrollReveal direction="up">
              <div className="inline-block bg-gold text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 mb-6">
                {post.category}
              </div>
              <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-400 font-light tracking-wide">
                <span>By PaperJack Editorial</span>
                <span className="w-1 h-1 bg-gold rounded-full"></span>
                <span>{post.date}</span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Post Content */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up" delay={0.2}>
              <div className="prose prose-xl font-light text-azure/80 leading-relaxed space-y-8">
                <p className="text-2xl font-serif text-azure leading-relaxed italic border-l-4 border-gold pl-8 py-2">
                  "The modern marketplace does not reward the specialist; it rewards the connector who can harmonise disparate disciplines into a singular force."
                </p>
                <p>
                  At PaperJack Inc., we have long observed that the most resilient business models are those built on multidisciplinary foundations. The "Jack" in our name is a tribute to the "Jack of all trades"—a figure often misunderstood but fundamentally essential in times of volatility.
                </p>
                <h2 className="text-3xl font-serif text-azure pt-8">The Vulnerability of Specialisation</h2>
                <p>
                  When a tech firm focuses solely on code, they lose the narrative power required to influence the market. Conversely, when a media company neglects the technological infrastructure of the future, they lose their relevance. Our strategy is to ensure neither happens to our partners.
                </p>
                <p>
                  Optimising your business for tomorrow requires a horizontal view of the competitive landscape. It requires the ability to link supply chain efficiencies with authoritative brand positioning, all whilst maintaining the agility of a startup.
                </p>
                <h2 className="text-3xl font-serif text-azure pt-8">Decisive Market Power</h2>
                <p>
                  The talons of the PaperJack eagle are always ready to grasp opportunities that others miss because they are too focused on their singular niche. We encourage our clients to expand their vision, to embrace the "small" risk of thinking big, and to trust in the heritage of versatility.
                </p>
              </div>

              <div className="mt-20 pt-10 border-t border-gray-100 flex items-center justify-between">
                <Link to="/blog" className="flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-sm hover:text-azure transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  Back to Insights
                </Link>
                <div className="flex gap-4">
                  <span className="text-xs text-gray-400 uppercase tracking-widest self-center">Share:</span>
                  <button className="text-azure hover:text-gold transition-colors">LinkedIn</button>
                  <button className="text-azure hover:text-gold transition-colors">Twitter</button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Newsletter / Call to Action */}
        <section className="py-20 bg-gray-50 border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal direction="up">
              <h3 className="text-3xl font-serif text-azure mb-4">Stay Informed</h3>
              <p className="text-gray-500 font-light mb-10">Receive our monthly briefing on market versatility and strategic growth directly to your inbox.</p>
              <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Corporate Email" 
                  className="flex-grow border-b-2 border-gray-200 bg-transparent py-3 px-1 outline-none focus:border-gold transition-colors"
                />
                <button className="bg-azure text-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-gold transition-colors">
                  Subscribe
                </button>
              </form>
            </ScrollReveal>
          </div>
        </section>
      </article>
    </PageWrapper>
  );
};

export default BlogPost;
