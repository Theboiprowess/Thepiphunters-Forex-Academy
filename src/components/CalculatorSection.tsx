import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator } from 'lucide-react';

export default function CalculatorSection() {
  const [deposit, setDeposit] = useState(500);
  const [winRate, setWinRate] = useState(80);
  const [risk, setRisk] = useState(2);

  const profitPerTrade = (deposit * (risk / 100)) * 2; // Assuming 1:2 RR
  const lossPerTrade = deposit * (risk / 100);
  const totalTrades = 20; // per month
  const winningTrades = Math.floor(totalTrades * (winRate / 100));
  const losingTrades = totalTrades - winningTrades;
  
  const estimatedProfit = (winningTrades * profitPerTrade) - (losingTrades * lossPerTrade);
  const roi = ((estimatedProfit / deposit) * 100).toFixed(1);

  return (
    <section className="py-24 relative overflow-hidden bg-white/[0.02]">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#00FF41]/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <Calculator className="w-4 h-4 text-[#00FF41]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-300">Earnings Calculator</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-6">
              Project Your <span className="text-gradient">Potential Earnings</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              See what’s possible when you combine our high-accuracy VIP signals with strict institutional risk management. Stop gambling and start compounding.
            </p>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-bold">Initial Deposit</label>
                  <span className="text-brand-gold font-bold">${deposit}</span>
                </div>
                <input 
                  type="range" 
                  min="100" max="10000" step="100"
                  value={deposit}
                  onChange={(e) => setDeposit(Number(e.target.value))}
                  className="w-full accent-brand-gold"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-bold">VIP Signal Win Rate</label>
                  <span className="text-[#00FF41] font-bold">{winRate}%</span>
                </div>
                <input 
                  type="range" 
                  min="50" max="95" step="1"
                  value={winRate}
                  onChange={(e) => setWinRate(Number(e.target.value))}
                  className="w-full accent-[#00FF41]"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-bold">Risk Per Trade</label>
                  <span className="text-white font-bold">{risk}%</span>
                </div>
                <input 
                  type="range" 
                  min="0.5" max="5" step="0.5"
                  value={risk}
                  onChange={(e) => setRisk(Number(e.target.value))}
                  className="w-full accent-white"
                />
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#050810] border border-white/10 rounded-3xl p-8 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 blur-[50px] pointer-events-none"></div>
            <h3 className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-8">Estimated Monthly Projection</h3>
            
            <div className="mb-6">
              <div className="text-5xl font-black text-[#00FF41] mb-2">+${Math.max(0, estimatedProfit).toFixed(2)}</div>
              <div className="text-gray-400 text-sm">Estimated Net Profit (20 Trades / 1:2 RR)</div>
            </div>

            <div className="flex items-center gap-6 border-b border-white/10 pb-6 mb-6">
              <div>
                <div className="text-2xl font-bold text-white mb-1">+{Math.max(0, Number(roi))}%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Account ROI</div>
              </div>
              <div className="h-10 w-px bg-white/10"></div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">${(deposit + Math.max(0, estimatedProfit)).toFixed(2)}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">New Balance</div>
              </div>
            </div>

            <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-2xl p-4 flex gap-3 text-sm text-brand-gold/80">
              <span className="text-xl">⚠️</span>
              <p>Trading is risky. This is a mathematical simulation using standard 1:2 Risk/Reward and does not guarantee future results.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
