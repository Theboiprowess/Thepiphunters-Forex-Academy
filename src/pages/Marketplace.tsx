import { Search, Download, Star, TrendingUp, ShieldCheck, Cpu, Zap, Target, Lock, ChevronRight, Activity, CheckCircle2, PlayCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import PaymentModal from '../components/PaymentModal';

export default function Marketplace() {
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({ name: '', price: '' });
  const [activeTab, setActiveTab] = useState('All Bots');

  const handlePurchase = (name: string, price: string) => {
    setSelectedProduct({ name, price });
    setPaymentModalOpen(true);
  };

  const bots = [
    {
      name: "HUNTER PRO MT5",
      type: "Precision Engine",
      tagline: "Precision Trading. Consistent Results.",
      desc: "An advanced all-in-one MT5 Expert Advisor designed for precision forex trading, scalping, trend analysis, and smart risk management. Built for traders seeking consistent long-term profitability.",
      price: "$100",
      rating: 4.9,
      reviews: 342,
      winRate: "78%",
      monthlyReturn: "15-25%",
      icon: Target,
      color: "from-brand-gold/20 to-transparent",
      borderColor: "border-brand-gold/50",
      glow: "shadow-[0_0_30px_rgba(212,175,55,0.15)]",
      badge: "MOST POPULAR",
      features: ["Smart entry algorithms", "Scalping mode", "Trend detection", "Automatic SL & TP", "Risk management system", "AI-enhanced filtering"],
      bestFor: "Forex traders seeking consistency and automation."
    },
    {
      name: "GOLD RUSHER AI",
      type: "XAUUSD AI",
      tagline: "Master The Gold Market With AI Precision.",
      desc: "A powerful AI-driven XAUUSD (Gold) trading bot optimized for volatility, momentum, and institutional market movements. Designed to capture aggressive Gold market opportunities.",
      price: "$100",
      rating: 5.0,
      reviews: 184,
      winRate: "82%",
      monthlyReturn: "20-30%",
      icon: Cpu,
      color: "from-[#00FF41]/20 to-transparent",
      borderColor: "border-[#00FF41]/40",
      glow: "shadow-[0_0_30px_rgba(0,255,65,0.15)]",
      badge: "AI POWERED",
      features: ["AI-powered Gold analysis", "Session-based trading", "Momentum detection", "Volatility scanner", "Smart trailing stop", "Institutional logic"],
      bestFor: "Gold traders & scalpers looking for aggressive profit."
    },
    {
      name: "SYNTHETIC SNIPER",
      type: "Boom & Crash",
      tagline: "Dominate Boom & Crash With Precision.",
      desc: "A premium synthetic indices trading bot designed specifically for Boom & Crash markets. Built to identify high-probability spike entries and trend continuation opportunities.",
      price: "$100",
      rating: 4.8,
      reviews: 215,
      winRate: "88%",
      monthlyReturn: "30-50%",
      icon: Zap,
      color: "from-purple-500/20 to-transparent",
      borderColor: "border-purple-500/40",
      glow: "shadow-[0_0_30px_rgba(168,85,247,0.15)]",
      badge: "HIGH VOLATILITY",
      features: ["Boom & Crash optimized", "Spike detection system", "Trend continuation rules", "Smart volatility analysis", "Fast execution engine"],
      bestFor: "Synthetic indices traders seeking precision spike entries."
    },
    {
      name: "PROP FIRM PASS",
      type: "Drawdown Manager",
      tagline: "Built For Funded Trader Success.",
      desc: "A professional prop firm challenge trading bot designed to help traders maintain consistency, control drawdown, and pass funded account evaluations safely and efficiently.",
      price: "$100",
      rating: 4.9,
      reviews: 89,
      winRate: "70%",
      monthlyReturn: "Target 8%",
      icon: ShieldCheck,
      color: "from-blue-500/20 to-transparent",
      borderColor: "border-blue-500/40",
      glow: "shadow-[0_0_30px_rgba(59,130,246,0.15)]",
      badge: "COMPLIANT",
      features: ["Drawdown protection", "Consistency-focused execution", "Low-risk strategy", "Prop firm compliance logic", "Smart lot sizing", "Account protection"],
      bestFor: "Traders attempting FTMO and prop firm challenges."
    }
  ];

  return (
    <div className="w-full pt-20 pb-32 min-h-screen bg-[#0A0D14] relative overflow-hidden font-sans">
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[400px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[500px] bg-[#00FF41]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Elite Hero Section */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-24 mt-12">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold text-sm font-bold mb-6 border border-brand-gold/20 backdrop-blur-md">
             <Cpu className="w-4 h-4" /> AI-POWERED TRADING SYSTEMS
           </div>
           <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 text-white tracking-tight leading-tight">
             Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-200 to-brand-gold">Automation</span> Engine
           </h1>
           <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl font-medium mb-10 leading-relaxed">
             Deploy multi-million-dollar fintech logic. Our advanced MT5 Expert Advisors execute precision trades, manage institutional risk, and dominate the markets unconditionally.
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <button className="bg-brand-gold text-black px-8 py-4 rounded-xl font-black text-lg hover:bg-yellow-500 transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(212,175,55,0.3)] w-full sm:w-auto">
               View Systems <ChevronRight className="w-5 h-5" />
             </button>
             <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-3 backdrop-blur-md w-full sm:w-auto">
               <PlayCircle className="w-5 h-5 text-brand-gold"/> Watch Demo
             </button>
           </div>
        </motion.div>

        {/* Live Performance Dashboard Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-32 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/10 to-transparent rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="bg-[#111621] border border-white/10 rounded-[2.5rem] p-2 relative overflow-hidden backdrop-blur-xl">
             <div className="border border-white/5 rounded-[2rem] bg-[#0A0D14] p-6 md:p-10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                  <div>
                    <h3 className="text-gray-400 font-bold mb-2 uppercase tracking-widest text-sm">Live System Performance</h3>
                    <div className="flex items-baseline gap-4">
                      <span className="text-5xl font-black text-white font-mono">$1,452,890.<span className="text-2xl text-gray-500">45</span></span>
                      <span className="text-[#00FF41] font-bold text-lg bg-[#00FF41]/10 px-2 py-1 rounded-md flex items-center gap-1">
                        <TrendingUp className="w-4 h-4"/> +14.2%
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 min-w-[140px]">
                      <div className="text-gray-500 text-xs font-bold mb-1 uppercase">Win Rate (30D)</div>
                      <div className="text-2xl font-bold text-brand-gold">82.4%</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 min-w-[140px]">
                      <div className="text-gray-500 text-xs font-bold mb-1 uppercase">Active Bots</div>
                      <div className="text-2xl font-bold text-white flex items-center gap-2">
                        4 <span className="w-2 h-2 rounded-full bg-[#00FF41] animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </motion.div>

        {/* Premium Grid */}
        <div className="mb-8">
           <h2 className="text-3xl font-heading font-black text-white mb-2">Professional Trading Bots</h2>
           <p className="text-gray-400 mb-8">Select a system tailored to your exact market strategy.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-32">
          {bots.map((bot, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className={`bg-[#111621] rounded-[2rem] overflow-hidden border ${bot.borderColor} ${bot.glow} transition-all relative group`}
            >
              <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl ${bot.color} opacity-40 group-hover:opacity-60 transition-opacity rounded-bl-full pointer-events-none`} />
              
              <div className="p-8 md:p-10 relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-black/40 border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                      <bot.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-brand-gold font-bold text-xs uppercase tracking-widest mb-1">{bot.type}</div>
                      <h3 className="text-2xl md:text-3xl font-black text-white">{bot.name}</h3>
                    </div>
                  </div>
                  <div className="bg-white/10 border border-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md whitespace-nowrap">
                    {bot.badge}
                  </div>
                </div>

                <p className="text-lg text-white font-medium italic mb-4">"{bot.tagline}"</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">{bot.desc}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-black/30 border border-white/5 rounded-2xl p-4 backdrop-blur-md">
                    <div className="text-gray-500 text-xs font-bold mb-1 flex items-center gap-1 uppercase"><Activity className="w-3 h-3 text-[#00FF41]"/> Target Win Rate</div>
                    <div className="font-mono text-2xl font-bold text-white">{bot.winRate}</div>
                  </div>
                  <div className="bg-black/30 border border-white/5 rounded-2xl p-4 backdrop-blur-md">
                    <div className="text-gray-500 text-xs font-bold mb-1 flex items-center gap-1 uppercase"><TrendingUp className="w-3 h-3 text-brand-gold"/> Expected ROI</div>
                    <div className="font-mono text-xl font-bold text-brand-gold mt-1">{bot.monthlyReturn}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-10 flex-grow">
                  <h4 className="text-gray-300 font-bold mb-4 uppercase text-sm tracking-widest">Key AI Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                     {bot.features.map((feat, j) => (
                       <li key={j} className="flex items-center gap-2 text-gray-400">
                         <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" />
                         {feat}
                       </li>
                     ))}
                  </ul>
                </div>

                {/* Footer / Buy */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10 mt-auto">
                   <div>
                     <div className="text-gray-500 text-xs font-bold uppercase mb-1">Lifetime License</div>
                     <div className="text-3xl font-black text-white">{bot.price}</div>
                   </div>
                   <button 
                     onClick={() => handlePurchase(bot.name, bot.price)}
                     className="bg-brand-gold hover:bg-yellow-500 text-brand-black w-full sm:w-auto px-8 py-4 rounded-xl font-black transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                   >
                     Purchase License <Lock className="w-4 h-4"/>
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Branding Footer Section inside page */}
        <div className="text-center py-20 border-t border-white/10">
           <h2 className="text-2xl font-heading font-black text-white tracking-widest uppercase mb-4">THEPIPHUNTERS FOREX ACADEMY</h2>
           <p className="text-brand-gold font-bold italic tracking-wide">"Hunt Pips. Build Wealth. Master The Markets."</p>
        </div>

      </div>

      <PaymentModal 
        isOpen={paymentModalOpen} 
        onClose={() => setPaymentModalOpen(false)} 
        productName={selectedProduct.name}
        price={selectedProduct.price}
      />
    </div>
  );
}
