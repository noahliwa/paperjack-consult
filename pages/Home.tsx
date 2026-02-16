
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import Logo from '../components/Logo';
import ScrollReveal from '../components/ScrollReveal';

const Home: React.FC = () => {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none overflow-hidden select-none">
          <div className="grid grid-cols-4 gap-8 rotate-12 -translate-y-20 scale-150">
             {Array.from({ length: 16 }).map((_, i) => (
               <Logo key={i} variant="logomark" />
             ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="text-6xl md:text-8xl font-serif text-azure leading-tight mb-8">
                Your Biggest Risk Is Still Thinking <span className="bg-gold px-4 text-white inline-block">Small</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.4}>
              <p className="text-xl md:text-2xl text-azure/70 mb-0 max-w-2xl font-light leading-relaxed">
                Mastery of one trade is a vulnerability. We bring the versatility to link media, tech and strategy into one system.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-azure text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-gold uppercase tracking-widest font-bold text-sm mb-4 block text-left">The PaperJack Edge</span>
                <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                  Authority Through Versatility.
                </h2>
                <div className="space-y-6 text-gray-300 text-lg font-light">
                  <p>
                    At PaperJack Inc., we believe that strategic brilliance isn't found in a singular focus, but in the intersection of diverse domains. 
                  </p>
                  <p>
                    "Paper" represents our heritage in high-value media and authoritative publishing. "Jack" embodies our multidisciplinary ethos — the commitment to being the "jack of all trades" who always outperforms the specialist.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '01', title: 'Editorial Precision', desc: 'Communicating authority with the sophistication of a premiere publishing house.' },
                { num: '02', title: 'Dynamic Strategy', desc: 'The Paper in Motion Flag: adaptive nature of strategy, never static, always moving.', mt: true },
                { num: '03', title: 'Decisive Power', desc: 'Leveraging the Eagle\'s Talons to grasp opportunity and secure success.' },
                { num: '04', title: 'Global Network', desc: 'Resonating across diverse markets and C-suite levels worldwide.', mt: true }
              ].map((item, idx) => (
                <ScrollReveal key={idx} direction="up" delay={0.1 * idx} className={item.mt ? "mt-8" : ""}>
                  <div className="bg-white/5 p-8 border border-white/10 h-full">
                    <div className="text-gold text-4xl font-serif mb-4">{item.num}</div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400 font-light">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Simple Stats or Social Proof */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap justify-around gap-12">
            {[
              { val: '120+', label: 'Global Partnerships' },
              { val: '12Bn+', label: 'Market Influence' },
              { val: '24/7', label: 'Strategic Agility' },
              { val: 'Top 1%', label: 'Network Access' }
            ].map((stat, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
                <div>
                  <div className="text-5xl font-serif text-azure mb-2">{stat.val}</div>
                  <div className="text-gold font-bold uppercase tracking-tighter text-xs">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;
