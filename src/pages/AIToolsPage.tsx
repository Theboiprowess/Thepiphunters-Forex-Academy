import { motion } from 'motion/react';
import { Cpu, Calculator, Activity, BookOpen, LineChart, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIToolsPage() {
  const tools = [
    {
      icon: <Activity className="w-8 h-8 text-brand-neon" />,
      name: "AI Trade Analyzer",
      desc: "Upload your trading history (HTML/CSV) and let our ML model identify psychological leaks and poor entry patterns.",
      status: "Premium"
    },
    {
      icon: <Cpu className="w-8 h-8 text-brand-gold" />,
      name: "Order Block Scanner",
      desc: "Real-time institutional volume scanner. Detects hidden liquidity pools and true supply/demand zones before they form.",
      status: "VIP Only"
    },
    {
      icon: <Calculator className="w-8 h-8 text-blue-400" />,
      name: "Smart Risk Calculator",
      desc: "Instantly calculate exact lot sizes based on account balance, cross-pair volatility, and exact stop-loss level in micro-pips.",
      status: "Free Tool"
    },
    {
      icon: <LineChart className="w-8 h-8 text-purple-400" />,
      name: "Prop Firm Challenge Tracker",
      desc: "Connect your specific challenge rules (e.g., max daily drawdown 5%) and get real-time visual safety warnings.",
      status: "Premium"
    }
  ];

  return (
    <div className="w-full pt-12 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 mb-6 w-fit">
            <Cpu className="text-brand-gold w-4 h-4" />
            <span className="text-xs font-semibold tracking-wider text-brand-gold uppercase">Powered by Gemini AI</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-black mb-6">Trading <span className="text-gradient">Intelligence</span> Tools</h1>
          <p className="text-gray-400 text-lg">
            Leverage institutional-grade risk management and machine learning predictive models to trade like a hedge fund.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="bg-brand-navy p-8 rounded-3xl border border-white/5 hover:bg-white-[0.03] transition-colors relative"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center">
                  {tool.icon}
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                  tool.status === 'Free Tool' ? 'border-brand-neon/50 text-brand-neon bg-brand-neon/10' :
                  tool.status === 'Premium' ? 'border-white/20 text-white bg-white/10' :
                  'border-brand-gold/50 text-brand-gold bg-brand-gold/10'
                }`}>
                  {tool.status}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">{tool.name}</h3>
              <p className="text-gray-400 leading-relaxed mb-8">{tool.desc}</p>
              
              <div className="flex items-center justify-between mt-auto">
                {tool.status === 'Free Tool' ? (
                  <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-6 rounded-lg transition-colors text-sm">
                    Open Tool
                  </button>
                ) : (
                  <Link to="/pricing" className="bg-brand-gold/10 hover:bg-brand-gold/20 text-brand-gold border border-brand-gold/30 font-bold py-2 px-6 rounded-lg transition-colors text-sm flex items-center gap-2">
                    <Lock className="w-4 h-4" /> Unlock Access
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
