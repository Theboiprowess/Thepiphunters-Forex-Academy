import { Link } from 'react-router-dom';
import { Activity, Twitter, Instagram, Youtube, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050810] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="THEPIPHUNTERS FOREX ACADEMY Logo" className="h-10 w-auto object-contain" />
              <span className="font-heading font-bold text-lg text-white tracking-widest uppercase">
                THEPIPHUNTERS FOREX ACADEMY
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-medium">
              Hunt Pips. Build Wealth. Master The Markets.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold/20 hover:text-brand-gold transition-colors text-gray-400">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/theboi__zw" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold/20 hover:text-brand-gold transition-colors text-gray-400">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold/20 hover:text-brand-gold transition-colors text-gray-400">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://t.me/thepiphunter_zw" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold/20 hover:text-brand-gold transition-colors text-gray-400">
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Products</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><Link to="/pricing" className="hover:text-brand-gold transition-colors">VIP Signals</Link></li>
              <li><Link to="/marketplace" className="hover:text-brand-gold transition-colors">MT5 Trading Bots</Link></li>
              <li><Link to="/ai-tools" className="hover:text-brand-gold transition-colors">AI Prediction Tools</Link></li>
              <li><Link to="/calendar" className="hover:text-brand-gold transition-colors">Economic Calendar</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Resources</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><Link to="/auth" className="text-brand-gold hover:text-white transition-colors font-semibold">Create Account</Link></li>
              <li><Link to="/blog" className="hover:text-brand-gold transition-colors">Trading Blog</Link></li>
              <li><Link to="/academy" className="hover:text-brand-gold transition-colors">Forex Education</Link></li>
              <li><Link to="/affiliate" className="hover:text-brand-gold transition-colors">Affiliate Program</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Send className="w-4 h-4 text-brand-gold" />
                <a href="https://t.me/thepiphunter_zw" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  @thepiphunter_zw
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-brand-gold" />
                <a href="https://instagram.com/theboi__zw" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  @theboi__zw
                </a>
              </li>
              <li className="flex items-center gap-2">
                <img src="/logo.png" alt="THEPIPHUNTERS FOREX ACADEMY Logo" className="h-5 w-auto object-contain" />
                <a href="mailto:thepiphuntersforexacademy@gmail.com" className="hover:text-white transition-colors text-xs whitespace-nowrap">
                  thepiphuntersforexacademy@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} THEPIPHUNTERS FOREX ACADEMY. All rights reserved. 
            <br className="md:hidden"/> Trading foreign exchange carries a high level of risk.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link to="/risk-disclosure" className="hover:text-white transition-colors">Risk Disclosure</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
