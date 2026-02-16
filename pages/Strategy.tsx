
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import ScrollReveal from '../components/ScrollReveal';

const Strategy: React.FC = () => {
  return (
    <PageWrapper>
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mb-16">
              <h1 className="text-5xl md:text-7xl font-serif text-azure mb-8">The PaperJack Method</h1>
              <p className="text-xl text-azure/70 leading-relaxed font-light">
                We don't believe in static plans. In the modern tech-focused economy, 
                strategy is a living, breathing entity that must adapt in real-time.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-32">
            {/* Phase 01 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="right">
                <div className="aspect-square bg-azure relative overflow-hidden group">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Strategy" className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 border-[20px] border-white/10 m-8"></div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="left" delay={0.2}>
                <div>
                  <h2 className="text-3xl font-serif mb-6 text-gold">01. Identification</h2>
                  <p className="text-gray-600 mb-6 text-lg font-light">
                    Using high-level data analytics and deep industry insights, we identify the specific 'talons' your business needs to grasp its unique market opportunities.
                  </p>
                  <ul className="space-y-3 text-azure font-medium">
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-gold"></span> Market Gap Analysis</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-gold"></span> Competitive Intelligence</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-gold"></span> Cultural Trend Forecasting</li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Phase 02 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="right" delay={0.2} className="order-2 md:order-1">
                <div>
                  <h2 className="text-3xl font-serif mb-6 text-gold">02. Positioning</h2>
                  <p className="text-gray-600 mb-6 text-lg font-light">
                    Leveraging our heritage in media, we position your brand as an authoritative voice. We ensure your value proposition resonates at the C-suite level.
                  </p>
                  <ul className="space-y-3 text-azure font-medium">
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-gold"></span> Executive Brand Authority</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-gold"></span> Strategic Narrative Building</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-gold"></span> Stakeholder Alignment</li>
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="left" className="order-1 md:order-2">
                <div className="aspect-square bg-gold relative overflow-hidden group">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Positioning" className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 border-[20px] border-white/10 m-8"></div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Strategy;
