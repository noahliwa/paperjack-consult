
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import ScrollReveal from '../components/ScrollReveal';

const Partners: React.FC = () => {
  return (
    <PageWrapper>
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-20">
              <h1 className="text-5xl font-serif text-azure mb-4">Our Ecosystem</h1>
              <p className="text-xl text-azure/60 max-w-2xl mx-auto font-light">
                Trusted by C-suite professionals and tech pioneers across the globe.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.05}>
                <div className="bg-white p-12 flex items-center justify-center border border-gray-100 hover:shadow-lg transition-all group">
                  <div className="text-azure/20 font-serif text-3xl italic font-bold group-hover:text-gold transition-colors">PARTNER {i}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="bg-white p-12 md:p-20 shadow-xl border border-gray-100 relative">
              <div className="absolute top-0 left-0 w-20 h-1 bg-gold"></div>
              <h2 className="text-3xl font-serif mb-12 text-center text-azure">Testimonials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <ScrollReveal direction="right" delay={0.4}>
                  <div className="border-l-4 border-gold pl-8">
                    <p className="text-xl italic text-azure/80 mb-6 leading-relaxed font-light">
                      "PaperJack Inc. provided the decisive power we needed during our Series C expansion. Their versatile strategy is unlike anything we've encountered in traditional consulting."
                    </p>
                    <div className="font-bold text-azure">Marcus Thorne</div>
                    <div className="text-sm text-gold">CEO, Thorne Dynamics</div>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="left" delay={0.5}>
                  <div className="border-l-4 border-gold pl-8">
                    <p className="text-xl italic text-azure/80 mb-6 leading-relaxed font-light">
                      "The 'Paper' heritage gives them an authoritative voice in media that proved invaluable for our market repositioning. They don't just advise; they lead."
                    </p>
                    <div className="font-bold text-azure">Elena Rodriguez</div>
                    <div className="text-sm text-gold">CMO, NexaMedia Global</div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Partners;
