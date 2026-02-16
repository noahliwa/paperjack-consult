
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import ScrollReveal from '../components/ScrollReveal';

const Partnerships: React.FC = () => {
  return (
    <PageWrapper>
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-6xl font-serif text-azure mb-6">Strategic Partnerships</h1>
              <p className="text-xl text-azure/70 max-w-2xl mx-auto font-light">
                We link visionary companies together to create synergies that redefine markets.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Tech Synergy', desc: 'Connecting core software infrastructure with emerging platform leaders.' },
              { title: 'Media Outreach', desc: 'Partnering brands with top-tier publishing houses for ultimate authority.' },
              { title: 'Supply Chain', desc: 'Optimising logistics through strategic tier-1 vendor partnerships.' },
              { title: 'Capital Flow', desc: 'Connecting high-growth ventures with institutional capital partners.' },
              { title: 'Talent Network', desc: 'Exclusive access to our curated list of C-suite specialists.' },
              { title: 'Market Entry', desc: 'Joint ventures designed for seamless entry into emerging global markets.' },
            ].map((item, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
                <div className="p-10 border border-gray-100 hover:border-gold transition-all bg-white shadow-sm hover:shadow-md h-full">
                  <div className="w-12 h-1 bg-gold mb-6"></div>
                  <h3 className="text-2xl font-serif mb-4 text-azure">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={0.4}>
            <div className="mt-24 bg-azure p-12 md:p-20 text-center text-white relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl font-serif mb-6">Ready to expand your reach?</h2>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
                  Join our ecosystem of elite partners and start leveraging the PaperJack network.
                </p>
                <a 
                  href="https://calendly.com/paperjack-inc/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gold text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-sm inline-block hover:bg-white hover:text-gold transition-colors"
                >
                  Enquire for Partnership
                </a>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Partnerships;
