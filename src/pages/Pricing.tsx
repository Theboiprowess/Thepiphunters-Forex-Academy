import { Check, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import PaymentModal from '../components/PaymentModal';

export default function Pricing() {
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({ name: '', price: '' });

  const handlePurchase = (name: string, price: string) => {
    setSelectedProduct({ name, price });
    setPaymentModalOpen(true);
  };

  const plans = [
    {
      name: "Trading Strategy",
      price: "$50",
      period: " one-time",
      desc: "Our proven trading strategy rules and PDF guide.",
      features: [
        "Full Trading Strategy PDF",
        "Risk Management Guidelines",
        "Entry & Exit Rules",
        "Email Support"
      ],
      missing: [
        "Live Signals",
        "1-on-1 Mentorship",
        "VIP Telegram Chat"
      ],
      button: "Buy Strategy",
      featured: false
    },
    {
      name: "VIP Signals",
      price: "$100",
      period: " lifetime",
      desc: "Lifetime access to our premium VIP signals group.",
      features: [
        "Lifetime VIP Signals Access",
        "High Probability Setups",
        "Gold, Majors & Synthetics",
        "VIP Telegram Chat Access",
        "Daily Market Breakdowns",
        "Advanced Risk Management"
      ],
      missing: [
        "1-on-1 Mentorship"
      ],
      button: "Join VIP Lifetime",
      featured: true
    },
    {
      name: "1-on-1 Mentorship",
      price: "$300",
      period: " one-time",
      desc: "For those committed to trading mastery.",
      features: [
        "Lifetime VIP Signals Access",
        "Live Mentorship Sessions",
        "Full Educational Course Library",
        "Private Strategy Analysis",
        "Priority Support line",
        "Trading Psychology Coaching"
      ],
      missing: [],
      button: "Get Mentorship",
      featured: false
    }
  ];

  return (
    <div className="w-full pt-12 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-black mb-6">Join the <span className="text-gradient">VIP Inner Circle</span></h1>
          <p className="text-gray-400 text-lg">
            Stop guessing the markets. Get institutional-level trade setups directly to your phone. 
            Choose the plan that fits your trading goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className={`relative rounded-3xl p-8 ${
                plan.featured 
                  ? 'bg-brand-navy border-2 border-brand-gold transform md:-translate-y-4 shadow-[0_0_40px_rgba(212,175,55,0.15)]' 
                  : 'glass border-white/10'
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-brand-gold text-brand-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6 h-10">{plan.desc}</p>
              
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-heading font-bold text-white">{plan.price}</span>
                <span className="text-gray-500 text-sm font-medium">{plan.period}</span>
              </div>
              
              <button 
                onClick={() => handlePurchase(plan.name, plan.price)}
                className={`w-full py-4 rounded-2xl font-bold transition-all mb-8 cursor-pointer ${
                plan.featured 
                  ? 'bg-brand-gold text-brand-black hover:bg-brand-gold-muted shadow-[0_0_15px_rgba(212,175,55,0.3)]' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}>
                {plan.button}
              </button>

              <div className="flex flex-col gap-4">
                {plan.features.map((feat, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-neon shrink-0" />
                    <span className="text-sm text-gray-300">{feat}</span>
                  </div>
                ))}
                {plan.missing.map((feat, j) => (
                  <div key={j} className="flex items-start gap-3 opacity-50">
                    <X className="w-5 h-5 text-gray-500 shrink-0" />
                    <span className="text-sm text-gray-500 line-through">{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
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
