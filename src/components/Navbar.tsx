import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Activity, Menu, X, ChevronRight, User, AlignLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Sidebar from './Sidebar';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'VIP Membership', path: '/pricing' },
    { name: 'Bots & Tools', path: '/marketplace' },
    { name: 'Forex Academy', path: '/academy' },
    { name: 'Blog', path: '/blog' },
    { name: 'Calendar', path: '/calendar' },
    { name: 'Affiliate', path: '/affiliate' },
  ];

  return (
    <>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-brand-navy/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            {isAuthenticated && (
              <button 
                onClick={() => setSidebarOpen(true)}
                className="text-gray-300 hover:text-brand-gold transition-colors p-2 -ml-2"
              >
                <AlignLeft className="w-6 h-6" />
              </button>
            )}
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <img src="/logo.png" alt="THEPIPHUNTERS FOREX ACADEMY Logo" className="h-12 w-auto object-contain" />
              <span className="font-heading font-bold text-xl tracking-tight text-white uppercase ml-1">
                THEPIPHUNTERS FOREX ACADEMY
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-gold ${
                  location.pathname === link.path ? 'text-brand-gold' : 'text-white/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden xl:flex items-center gap-4">
            {!isAuthenticated ? (
              <Link 
                  to="/auth" 
                  className="bg-brand-gold hover:brightness-110 text-brand-black font-semibold text-sm px-5 py-2 rounded-full transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                >
                  Client Portal
              </Link>
            ) : (
              <Link 
                to="/dashboard" 
                className="bg-brand-gold/10 border border-brand-gold/30 hover:bg-brand-gold/20 text-brand-gold font-semibold text-sm px-5 py-2 rounded-full transition-all flex items-center gap-2"
              >
                <User className="w-4 h-4" /> Portal
              </Link>
            )}
          </div>

          {/* Mobile menu toggle */}
          <button 
            className="xl:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile Nav */}
        <motion.div 
          initial={false}
          animate={{ height: mobileMenuOpen ? 'auto' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
          className="xl:hidden overflow-hidden bg-brand-navy border-b border-white/5"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-base font-medium ${
                  location.pathname === link.path ? 'text-brand-gold' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-white/10 pt-4 mt-2 flex flex-col gap-4">
              {!isAuthenticated ? (
                <>
                  <Link 
                    to="/auth" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 text-gray-300 font-medium"
                  >
                    <User className="w-5 h-5" /> Account Login
                  </Link>
                  <Link 
                    to="/pricing"
                    onClick={() => setMobileMenuOpen(false)}
                    className="bg-brand-gold text-brand-black font-bold text-center py-3 rounded-2xl"
                  >
                    Upgrade to VIP
                  </Link>
                </>
              ) : (
                <Link 
                    to="/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className="bg-brand-gold/10 border border-brand-gold/30 text-brand-gold font-bold text-center py-3 rounded-2xl"
                  >
                    Go to Portal
                  </Link>
              )}
            </div>
          </div>
        </motion.div>
      </header>
    </>
  );
}
