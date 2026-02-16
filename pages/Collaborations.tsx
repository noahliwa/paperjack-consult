
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import ScrollReveal from '../components/ScrollReveal';

const Collaborations: React.FC = () => {
  return (
    <PageWrapper>
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="right">
              <div>
                <h1 className="text-5xl md:text-7xl font-serif text-azure mb-10 leading-tight">Collaborative <br/><span className="italic text-gold">Innovation</span></h1>
                <div className="space-y-6 text-lg text-gray-600 font-light">
                  <p>
                    Innovation is never a solo pursuit. At PaperJack Inc., we facilitate deep-tier collaborations between established industry giants and agile tech startups.
                  </p>
                  <p>
                    Our role is that of a "Strategic Connector"—bridging the gap between legacy authority and disruptive potential.
                  </p>
                  <div className="pt-8">
                    <ScrollReveal direction="up" delay={0.2}>
                      <div className="flex items-start gap-4 mb-8">
                          <div className="bg-gold/10 p-4 rounded-full text-gold">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                          </div>
                          <div>
                            <h4 className="font-bold text-azure text-xl mb-1">Accelerated R&D</h4>
                            <p className="text-sm font-light">Merging traditional expertise with modern rapid-prototyping cultures.</p>
                          </div>
                      </div>
                    </ScrollReveal>
                    <ScrollReveal direction="up" delay={0.3}>
                      <div className="flex items-start gap-4">
                          <div className="bg-gold/10 p-4 rounded-full text-gold">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                          </div>
                          <div>
                            <h4 className="font-bold text-azure text-xl mb-1">Cross-Sector Growth</h4>
                            <p className="text-sm font-light">Applying proven strategies from one industry to revitalise another.</p>
                          </div>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={0.4}>
              <div className="relative">
                <div className="absolute inset-0 bg-gold translate-x-4 translate-y-4"></div>
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Collaboration" className="relative z-10 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Collaborations;
