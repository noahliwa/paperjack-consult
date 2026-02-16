
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-azure text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="text-white mb-6">
            <Logo className="invert brightness-0" />
          </div>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            PaperJack Inc. represents the heritage of quality and versatility in business strategy. 
            We empower tech-focused businesses with authoritative insights and decisive power.
          </p>
        </div>
        
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gold">Services</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/strategy" className="hover:text-white transition-colors">Strategic Planning</Link></li>
            <li><Link to="/partnerships" className="hover:text-white transition-colors">Partnership Growth</Link></li>
            <li><Link to="/collaborations" className="hover:text-white transition-colors">Brand Collaboration</Link></li>
            <li><Link to="/partners" className="hover:text-white transition-colors">Network Access</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gold">Corporate</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="https://calendly.com/paperjack-inc/30min" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Request a Briefing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Brand Guidelines</a></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Insight Blog</Link></li>
            <li><a href="mailto:paperjack.inc@gmail.com" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-xs text-gray-500">© 2025 PaperJack Inc. All rights reserved.</p>
          <div className="flex space-x-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>

        {/* Contact & Social Media Icons */}
        <div className="flex items-center space-x-6">
          <a 
            href="https://www.linkedin.com/company/paperjack-inc/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gold transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a 
            href="https://x.com/PaperJackInc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gold transition-colors"
            aria-label="Twitter / X"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a 
            href="mailto:paperjack.inc@gmail.com"
            className="text-gray-400 hover:text-gold transition-colors"
            aria-label="Email"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
