import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Shield, Zap, Lock, BarChart3, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrokersSection from '../components/BrokersSection';
import CalculatorSection from '../components/CalculatorSection';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-neon/5 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit">
                <span className="w-2 h-2 rounded-full bg-brand-neon animate-pulse"></span>
                <span className="text-xs font-semibold tracking-wider text-gray-300 uppercase">Live: +450 Pips This Week</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-heading font-extrabold leading-tight">
                AI-Powered <br/>
                <span className="text-gradient">Forex Signals</span> & Automation
              </h1>
              
              <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                 Institutional-grade trading tools designed for retail traders. Scale your accounts with our VIP signals, MT5 bots, and AI analysis.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/pricing" className="bg-brand-gold text-brand-black hover:bg-brand-gold-muted px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                  Join VIP Today <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/marketplace" className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all">
                  Buy Trading Bots
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-black bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-400">
                      U{i}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex text-brand-gold text-sm">
                    ★★★★★
                  </div>
                  <span className="text-xs text-gray-400">Trusted by 5,000+ traders</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Visuals */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative relative h-[500px] w-full rounded-3xl bg-brand-navy border border-white/10 p-6 flex flex-col justify-end overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/80 to-transparent z-0"></div>
              
              {/* Dummy Live Chart Element */}
              <div className="absolute top-8 left-8 right-8 bottom-32 opacity-30 flex items-end gap-2 justify-between z-0">
                 {[...Array(20)].map((_, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: "10%" }}
                      animate={{ height: `${Math.random() * 80 + 20}%` }}
                      transition={{ repeat: Infinity, repeatType: "mirror", duration: 1 + Math.random() * 2 }}
                      className={`w-full max-w-[12px] rounded-t-sm ${Math.random() > 0.5 ? 'bg-brand-neon' : 'bg-red-500'}`}
                    />
                 ))}
              </div>

              <div className="relative z-10 glass-gold p-6 rounded-2xl w-full max-w-sm ml-auto animate-float shadow-2xl">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-bold text-gray-200">XAUUSD Analytics</span>
                  <span className="text-xs font-semibold text-brand-neon bg-brand-neon/10 px-2 py-1 rounded">Buy Signal</span>
                </div>
                <h3 className="text-3xl font-heading font-black text-white mb-2">2,415.80</h3>
                <p className="text-sm text-gray-400 flex items-center gap-2 mb-6">
                  <TrendingUp className="w-4 h-4 text-brand-neon" /> +145 Pips Profit
                </p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>Entry: 2401.30</span>
                  <span>SL: 2395.00</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
            {[
              { label: 'Total Pips (2024)', value: '18,500+' },
              { label: 'Signal Win Rate', value: '82.4%' },
              { label: 'Active Members', value: '5,000+' },
              { label: 'Bot Installs', value: '12K+' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center px-4">
                <span className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">{stat.value}</span>
                <span className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="py-24 relative overflow-hidden bg-brand-black">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/10 blur-[150px] rounded-full pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <h2 className="text-3xl md:text-5xl font-heading font-black mb-4">
                Welcome to <span className="text-gradient">The Pip Hunterz Academy</span>
              </h2>
              
              <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed">
                <p>
                   A modern trading and finance education platform built to empower the next generation of profitable traders through knowledge, discipline, strategy, and innovation.
                </p>
                <p>
                  Founded by <strong className="text-white">Prowess Chirombo</strong> in 2026, The Pip Hunterz Academy was created with one clear mission: To help ordinary people develop real trading skills, financial confidence, and multiple online income opportunities through Forex, Boom & Crash trading, and modern trading technology.
                </p>
                <p>
                  At The Pip Hunterz Academy, we believe trading is more than just charts and signals — it is a lifestyle built on consistency, patience, discipline, and smart decision-making. Our platform combines trading education, premium forex signals, market analysis, trading mentorship, and advanced MT5 trading tools to help traders grow in today’s fast-moving financial markets.
                </p>
              </div>

              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h4 className="text-brand-gold font-bold mb-2">Our Vision</h4>
                  <p className="text-xs text-gray-400">To become one of Africa’s leading trading and fintech education brands, empowering thousands of traders through innovation, education, and technology.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h4 className="text-brand-gold font-bold mb-2">Our Mission</h4>
                  <p className="text-xs text-gray-400">To simplify trading education and provide powerful tools, mentorship, and opportunities that help traders build profitable and sustainable financial futures.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-navy border border-white/10 rounded-3xl p-8 relative shadow-2xl"
            >
              <h3 className="text-xl font-bold text-white mb-6">Why Choose The Pip Hunterz Academy?</h3>
              <ul className="space-y-4">
                {[
                  "Modern trading education",
                  "Professional market analysis",
                  "Premium trading signals",
                  "AI & automation focused",
                  "Beginner-friendly learning",
                  "Strong trading community",
                  "Real-world trading strategies",
                  "Continuous growth and innovation"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                       <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                    </div>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="font-heading font-bold text-xl text-center italic text-white/90">
                  "Hunt Pips. Build Wealth. Master The Markets."
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <BrokersSection />
      
      <CalculatorSection />

      {/* FEATURES */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Built for <span className="text-gradient">Consistent</span> Growth</h2>
            <p className="text-gray-400 text-lg">Everything you need to automate your trading, pass prop firm challenges, and generate passive income.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-6 h-6 text-brand-gold" />,
                title: "Premium VIP Signals",
                desc: "Get 3-5 high-probability setups daily. Covers Major pairs, Gold, and Synthetic Indices (Volatility, Boom & Crash)."
              },
              {
                icon: <Shield className="w-6 h-6 text-brand-gold" />,
                title: "Prop Firm Passing Bots",
                desc: "Automated MT5 algorithms specifically coded to manage drawdown constraints and pass FTMO & MFFx challenges."
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-brand-gold" />,
                title: "AI Analysis Dashboard",
                desc: "Our machine learning models scan 28+ charts simultaneously to identify institutional order blocks and divergences."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-brand-navy p-8 rounded-3xl border border-white/10 hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOMEPAGE BLOG SECTION */}
      <section className="py-24 bg-brand-navy/30 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-6">
              Featured <span className="text-gradient">Market Insights</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl font-medium mb-10 leading-relaxed">
              "Professional Trading Education, AI Market Intelligence & Advanced Forex Strategies Designed For Serious Traders."
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link to="/blog" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center transition-all backdrop-blur-md">
                Explore Articles
              </Link>
              <Link to="/academy" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center transition-all backdrop-blur-md">
                Start Learning
              </Link>
              <Link to="/pricing" className="bg-brand-gold text-brand-black hover:bg-yellow-500 px-8 py-4 rounded-xl font-bold flex items-center justify-center transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                Join VIP Academy
              </Link>
            </div>
            
            <div className="pt-8 border-t border-white/10">
              <h3 className="text-xl font-heading font-black text-brand-gold tracking-widest uppercase mb-2">THEPIPHUNTERS FOREX ACADEMY</h3>
              <p className="text-gray-400 font-bold italic tracking-wide">"Hunt Pips. Build Wealth. Master The Markets."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden py-20 px-8 text-center border border-brand-gold/30">
            <div className="absolute inset-0 bg-brand-gold/5"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Ready to hunt those pips?</h2>
              <p className="text-gray-300 max-w-xl mx-auto mb-10 text-lg">
                Join our Telegram community, grab your trial signals, or upgrade immediately to VIP to unlock the full ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/pricing" className="bg-brand-gold text-brand-black hover:bg-brand-gold-muted px-8 py-4 rounded-full font-bold flex items-center justify-center transition-all text-lg shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                  Start VIP Subscription
                </Link>
                <a href="https://t.me/thepiphunter_zw" target="_blank" rel="noopener noreferrer" className="bg-brand-navy text-white hover:bg-white/10 border border-white/10 px-8 py-4 rounded-full font-bold flex items-center justify-center transition-all text-lg">
                  Join Free Telegram
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-6 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-neon" /> 7-Day Money Back Guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}