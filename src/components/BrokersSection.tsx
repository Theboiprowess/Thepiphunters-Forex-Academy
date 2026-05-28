import { motion } from 'motion/react';
import { Landmark, ArrowUpRight, CopyCheck } from 'lucide-react';
import { useState } from 'react';

const BrokerIcon = ({ url, text, name }: { url?: string, text: string, name: string }) => {
  const [error, setError] = useState(false);
  
  return (
    <div className="w-14 h-14 bg-white/5 flex items-center justify-center rounded-2xl text-brand-gold border border-white/10 overflow-hidden relative">
      {!error && url ? (
        <img 
          src={url} 
          alt={name} 
          className="w-full h-full object-contain bg-white p-1"
          onError={() => setError(true)}
        />
      ) : (
        <span className="font-black text-xl">{text}</span>
      )}
    </div>
  );
};

export default function BrokersSection() {
  const brokers = [
    {
      name: "Exness",
      logo: "EX",
      logoUrl: "https://logo.clearbit.com/exness.com",
      spreads: "from 0.0 pips",
      leverage: "1:Unlimited",
      minDepo: "$10",
      desc: "Instant withdrawals and excellent conditions for Gold & Currency majors. Our #1 recommended broker.",
      link: "https://one.exnessonelink.com/a/3g652afl39"
    },
    {
      name: "Deriv",
      logo: "DV",
      logoUrl: "https://logo.clearbit.com/deriv.com",
      spreads: "Fixed",
      leverage: "1:1000",
      minDepo: "$5",
      desc: "The only home for 24/7 Synthetic Indices trading (Boom, Crash, Volatility). Perfect for our custom bots.",
      link: "https://track.deriv.com/_HrUVFsPoP9EKqFKZ7JdnQ2Nd7ZgqdRLk/1/"
    },
    {
      name: "Weltrade",
      logo: "WT",
      logoUrl: "https://logo.clearbit.com/weltrade.com",
      spreads: "from 0.5 pips",
      leverage: "1:10000",
      minDepo: "$1",
      desc: "Excellent bonus offerings, fast withdrawals, and great conditions for both beginners and professionals.",
      link: "https://track.gowt.me/visit/?bta=54292&brand=weltrade"
    },
    {
      name: "Headway",
      logo: "HW",
      logoUrl: "https://logo.clearbit.com/hw.site",
      spreads: "from 0.3 pips",
      leverage: "1:Unlimited",
      minDepo: "$1",
      desc: "Trade with minimum balance and unlimited leverage. Excellent choice for scalping.",
      link: "https://headway.partners/user/signup?hwp=689c69"
    },
    {
      name: "XM Global",
      logo: "XM",
      logoUrl: "https://logo.clearbit.com/xm.com",
      spreads: "from 0.6 pips",
      leverage: "1:1000",
      minDepo: "$5",
      desc: "Great bonus offerings and zero fees on deposits. Good platform stability.",
      link: "#"
    },
    {
      name: "IC Markets",
      logo: "IC",
      logoUrl: "https://logo.clearbit.com/icmarkets.com",
      spreads: "from 0.0 pips",
      leverage: "1:500",
      minDepo: "$200",
      desc: "True ECN broker with deep liquidity. Best for institutional size trading.",
      link: "#"
    },
    {
      name: "HFM",
      logo: "HF",
      logoUrl: "https://logo.clearbit.com/hfm.com",
      spreads: "from 1.0 pips",
      leverage: "1:1000",
      minDepo: "$5",
      desc: "Multiple account types to suit trading styles with competitive spreads.",
      link: "#"
    },
    {
      name: "FBS",
      logo: "FB",
      logoUrl: "https://logo.clearbit.com/fbs.com",
      spreads: "from 0.5 pips",
      leverage: "1:3000",
      minDepo: "$1",
      desc: "High leverage broker with regular trading contests and promotions.",
      link: "#"
    },
    {
      name: "OctaFX",
      logo: "OF",
      logoUrl: "https://logo.clearbit.com/octafx.com",
      spreads: "from 0.6 pips",
      leverage: "1:500",
      minDepo: "$25",
      desc: "Low spreads, no hidden fees, and an easy-to-use copy trading platform.",
      link: "#"
    }
  ];

  return (
    <section className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
            <Landmark className="w-4 h-4 text-brand-gold" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-300">Supported Brokers</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">Trade with the <span className="text-gradient">Best Conditions</span></h2>
          <p className="text-gray-400">Maximize your profit margins by using the same liquidity providers and brokers our bots and strategies are optimized for.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {brokers.map((broker, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i}
              className="bg-brand-navy border border-white/10 rounded-3xl p-8 hover:border-brand-gold/30 transition-colors flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <BrokerIcon url={broker.logoUrl} text={broker.logo} name={broker.name} />
                <div>
                  <h3 className="text-xl font-bold">{broker.name}</h3>
                  <div className="text-xs text-[#00FF41] flex items-center gap-1 font-semibold"><CopyCheck className="w-3 h-3"/> AI Verified</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-black/30 rounded-xl p-3">
                  <div className="text-xs text-gray-500 mb-1">Spreads</div>
                  <div className="font-bold text-sm">{broker.spreads}</div>
                </div>
                <div className="bg-black/30 rounded-xl p-3">
                  <div className="text-xs text-gray-500 mb-1">Leverage</div>
                  <div className="font-bold text-sm">{broker.leverage}</div>
                </div>
                <div className="bg-black/30 rounded-xl p-3 col-span-2 flex justify-between items-center">
                  <div className="text-xs text-gray-500">Min Deposit</div>
                  <div className="font-bold text-sm text-brand-gold">{broker.minDepo}</div>
                </div>
              </div>

              <p className="text-sm text-gray-400 mb-8 flex-grow">{broker.desc}</p>
              
              <a href={broker.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-brand-gold hover:text-black font-bold py-3 rounded-2xl transition-colors mt-auto group">
                Open Account <ArrowUpRight className="w-4 h-4 text-brand-gold group-hover:text-black" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
