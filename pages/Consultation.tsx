
import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import ScrollReveal from '../components/ScrollReveal';

const Consultation: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <PageWrapper>
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
          <ScrollReveal direction="up">
            <div className="w-20 h-20 bg-gold text-white rounded-full flex items-center justify-center mb-8 mx-auto">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h1 className="text-4xl font-serif text-azure mb-4">Briefing Requested</h1>
            <p className="text-xl text-gray-600 max-w-lg mx-auto font-light">
              Our strategic team is reviewing your profile. A consultant will reach out within 24 hours to schedule your session.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-10 text-gold font-bold underline underline-offset-4"
            >
              Submit another request
            </button>
          </ScrollReveal>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <ScrollReveal direction="right">
              <div>
                <h1 className="text-5xl md:text-6xl font-serif text-azure mb-8">Schedule a Briefing</h1>
                <p className="text-xl text-azure/70 mb-10 leading-relaxed font-light">
                  Take the first step towards decisive market authority. Our initial consultation is a deep dive into your current strategic vulnerabilities and untapped potentials.
                </p>
                
                <div className="space-y-8">
                  {[
                    { n: 1, t: 'Audit', d: 'Comprehensive review of your current business strategy and positioning.' },
                    { n: 2, t: 'Analysis', d: 'Deep-dive into market data and competitive cultural trends.' },
                    { n: 3, t: 'Action', d: 'A clear, versatile roadmap for multidisciplinary growth.' }
                  ].map((step, idx) => (
                    <ScrollReveal key={idx} direction="up" delay={0.2 + (idx * 0.1)}>
                      <div className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-azure text-white flex items-center justify-center text-xl font-serif">{step.n}</div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">{step.t}</h3>
                          <p className="text-gray-500 font-light">{step.d}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.3}>
              <div className="bg-white p-8 md:p-12 border border-gray-100 shadow-2xl relative">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gold/10"></div>
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-azure mb-2">First Name</label>
                      <input required type="text" className="w-full border-b-2 border-gray-100 py-3 px-1 focus:border-gold outline-none transition-colors bg-transparent" placeholder="e.g. James" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-azure mb-2">Last Name</label>
                      <input required type="text" className="w-full border-b-2 border-gray-100 py-3 px-1 focus:border-gold outline-none transition-colors bg-transparent" placeholder="e.g. Smith" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-azure mb-2">Corporate Email</label>
                    <input required type="email" className="w-full border-b-2 border-gray-100 py-3 px-1 focus:border-gold outline-none transition-colors bg-transparent" placeholder="james@company.co.uk" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-azure mb-2">Company Name</label>
                    <input required type="text" className="w-full border-b-2 border-gray-100 py-3 px-1 focus:border-gold outline-none transition-colors bg-transparent" placeholder="Acme Tech Ltd" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-azure mb-2">Consultation Interest</label>
                    <select className="w-full border-b-2 border-gray-100 py-3 px-1 focus:border-gold outline-none transition-colors bg-transparent">
                      <option>Strategic Planning</option>
                      <option>Partnership Growth</option>
                      <option>Brand Collaboration</option>
                      <option>Full Agency Briefing</option>
                    </select>
                  </div>
                  <div className="pt-6">
                    <button type="submit" className="w-full bg-azure text-white py-5 font-bold uppercase tracking-widest text-sm hover:bg-gold transition-colors shadow-lg">
                      Request Exclusive Briefing
                    </button>
                  </div>
                  <p className="text-[10px] text-gray-400 text-center uppercase tracking-tighter">
                    Confidentiality guaranteed. PaperJack Inc. values your privacy.
                  </p>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Consultation;
