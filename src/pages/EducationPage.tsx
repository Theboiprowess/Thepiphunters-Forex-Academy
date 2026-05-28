import { motion } from 'motion/react';
import { BookOpen, Shield, TrendingUp, Brain, Cpu, Crosshair } from 'lucide-react';

export default function EducationPage() {
  const levels = [
    {
      title: "Beginner Level",
      subtitle: "Forex Basics",
      topics: ["What is Forex?", "Currency pairs explained", "Pips and lot sizes", "Candlestick patterns", "Market sessions", "Leverage & margin"],
      icon: BookOpen
    },
    {
      title: "Intermediate Level",
      subtitle: "Technical Analysis",
      topics: ["Support & resistance", "Trendlines", "Market structure", "Supply & demand", "Breakouts", "Liquidity concepts"],
      icon: TrendingUp
    },
    {
      title: "Advanced Level",
      subtitle: "Smart Money Concepts (SMC)",
      topics: ["Order blocks", "Fair value gaps", "Liquidity sweeps", "BOS & CHOCH", "Institutional trading concepts"],
      icon: Shield
    }
  ];

  const specializations = [
    {
      title: "Boom & Crash Masterclass",
      topics: ["Spike trading", "Trend continuation", "Volatility timing", "Entry confirmations"],
      icon: Crosshair
    },
    {
      title: "Trading Psychology",
      topics: ["Emotional discipline", "Patience", "Trading mindset", "Consistency habits"],
      icon: Brain
    },
    {
      title: "Risk Management",
      topics: ["Position sizing", "Stop loss placement", "Risk-to-reward ratio", "Capital protection"],
      icon: Shield
    }
  ];

  return (
    <div className="w-full pt-32 pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-black mb-6">
            Forex <span className="text-gradient">Academy</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Master the markets with our comprehensive trading education platform. From the basics to advanced institutional concepts.
          </p>
        </motion.div>

        {/* Academy Levels */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {levels.map((level, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-navy border border-white/10 rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-6">
                <level.icon className="text-brand-gold w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{level.title}</h3>
              <h4 className="text-brand-gold font-semibold mb-6">{level.subtitle}</h4>
              
              <ul className="space-y-3">
                {level.topics.map((topic, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                    {topic}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Specializations */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white sm:text-center mb-12">Specialized Masterclasses</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {specializations.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#1A1E29] border border-white/5 rounded-2xl p-6"
              >
                <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                  <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center">
                    <spec.icon className="text-brand-gold w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{spec.title}</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  {spec.topics.map((topic, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-400">
                      <div className="w-4 h-4 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold text-[10px]">✓</div>
                      {topic}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 bg-brand-gold/10 border border-brand-gold/20 rounded-3xl p-12">
           <h3 className="text-2xl font-bold text-white mb-4">Ready to start your trading journey?</h3>
           <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Join VIP to unlock all educational content, mentorship, and daily market analysis.</p>
           <button className="btn-primary">Unlock Academy Access</button>
        </div>

      </div>
    </div>
  );
}
