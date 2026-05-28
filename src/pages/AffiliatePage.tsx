import { motion } from 'motion/react';
import { 
  DollarSign, Rocket, Users, TrendingUp, Award, BarChart3, ChevronRight, 
  Target, Globe, CheckCircle2, Copy, Wallet, ArrowRight, Star,
  Activity, Cpu, ShieldCheck, CreditCard, ChevronDown, Monitor
} from 'lucide-react';
import { useState } from 'react';

export default function AffiliatePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (i: number) => {
    if (activeFaq === i) {
      setActiveFaq(null);
    } else {
      setActiveFaq(i);
    }
  };

  const faqs = [
    { question: "How do commissions work?", answer: "You earn a commission for every sale made through your unique referral link. Commissions are tracked automatically in real-time." },
    { question: "What payment methods do you support?", answer: "We support payouts globally via PayPal, Bank Wire, Crypto (USDT, BTC, ETH), and Mobile payments based on your region." },
    { question: "What is the withdrawal process?", answer: "You can request a withdrawal once your balance hits the $50 minimum threshold. Payouts are processed within 24-48 hours via your selected method." },
    { question: "What are the affiliate requirements?", answer: "Our program is open to traders, influencers, bloggers, and anyone with a relevant audience. There are no strict entry requirements to sign up." },
    { question: "What are the commission percentages?", answer: "Commissions range from 20% to 40% depending on the product sold, with recurring monthly commissions available for our VIP membership subscriptions." }
  ];

  const leaderboard = [
    { rank: 1, name: "CryptoWhale", earnings: "$45,230", badge: "Diamond", increase: "+12%" },
    { rank: 2, name: "ForexMaster", earnings: "$38,400", badge: "Gold", increase: "+8%" },
    { rank: 3, name: "TradeSniper", earnings: "$25,100", badge: "Silver", increase: "+15%" },
    { rank: 4, name: "PipHunter007", earnings: "$18,950", badge: "Bronze", increase: "+5%" },
  ];

  return (
    <div className="w-full pt-28 pb-32 min-h-screen bg-[#0A0D14] overflow-hidden font-sans relative">
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-[#00FF41]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[800px] h-[800px] bg-brand-gold/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* HERO SECTION */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00FF41]/10 text-[#00FF41] text-sm font-bold border border-[#00FF41]/20 mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,65,0.1)]">
            <DollarSign className="w-4 h-4" /> HIGH-CONVERTING PARTNER NETWORK
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 text-white tracking-tight leading-tight">
            THEPIPHUNTERS FOREX ACADEMY <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-200 to-brand-gold">Affiliate Program</span>
          </h1>
          <p className="text-xl md:text-2xl text-white font-bold mb-4">Become A Partner & Earn Commissions</p>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10 leading-relaxed">
            Promote THEPIPHUNTERS FOREX ACADEMY and earn commissions for every successful referral. Market high-end AI trading systems and VIP memberships.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-brand-gold text-black px-10 py-5 rounded-2xl font-black text-lg hover:bg-yellow-500 transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(212,175,55,0.3)] w-full sm:w-auto">
              Become An Affiliate <ChevronRight className="w-5 h-5" />
            </button>
            <button className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3 backdrop-blur-md w-full sm:w-auto">
              Start Earning Today <TrendingUp className="w-5 h-5 text-[#00FF41]"/>
            </button>
          </div>
        </motion.div>

        {/* DASHBOARD PREVIEW & ANALYTICS VISUAL */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-32 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#00FF41]/10 to-brand-gold/10 rounded-[2.5rem] blur-xl opacity-50 transition-opacity duration-700" />
          <div className="bg-[#111621] border border-white/10 rounded-[2.5rem] p-2 relative overflow-hidden backdrop-blur-xl shadow-2xl">
            <div className="bg-[#0A0D14] border border-white/5 rounded-[2rem] p-6 lg:p-10 relative overflow-hidden">
               <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
               
               {/* Dashboard Header */}
               <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-8 border-b border-white/5 relative z-10">
                 <div className="flex items-center gap-4 mb-4 md:mb-0">
                   <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center border border-brand-gold/30">
                     <Monitor className="w-6 h-6 text-brand-gold" />
                   </div>
                   <div>
                     <h3 className="text-white font-bold text-lg">Partner Dashboard Preview</h3>
                     <p className="text-gray-400 text-sm">Real-time affiliate tracking</p>
                   </div>
                 </div>
                 <div className="flex gap-4 w-full md:w-auto">
                   <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm text-white hover:bg-white/10 transition-colors">
                     <Copy className="w-4 h-4 text-brand-gold" /> Copy Link
                   </button>
                   <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#00FF41]/10 border border-[#00FF41]/20 px-4 py-2 rounded-lg text-sm text-[#00FF41] hover:bg-[#00FF41]/20 transition-colors font-bold">
                     <Wallet className="w-4 h-4" /> Withdraw
                   </button>
                 </div>
               </div>
               
               {/* Dashboard Stats Grid */}
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 relative z-10">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors cursor-default">
                    <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">Total Earnings</div>
                    <div className="text-3xl font-black text-white font-mono">$12,450.00</div>
                    <div className="mt-2 text-[#00FF41] text-xs font-bold flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> +24% this month
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors cursor-default">
                    <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">Referral Clicks</div>
                    <div className="text-3xl font-black text-white font-mono">14,204</div>
                    <div className="mt-2 text-brand-gold text-xs font-bold flex items-center gap-1">Traffic Analytics</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors cursor-default">
                    <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">Conversions</div>
                    <div className="text-3xl font-black text-white font-mono">342</div>
                    <div className="mt-2 text-gray-400 text-xs font-bold flex items-center gap-1">Conversion stats</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors cursor-default">
                    <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">Active Referrals</div>
                    <div className="text-3xl font-black text-brand-gold font-mono">128</div>
                    <div className="mt-2 text-[#00FF41] text-xs font-bold flex items-center gap-1">
                      <Activity className="w-3 h-3" /> Live Updates
                    </div>
                  </div>
               </div>

               {/* Dashboard Features List */}
               <div className="grid grid-cols-2 md:grid-cols-5 gap-3 relative z-10">
                  {["Referral tracking", "Earnings analytics", "Withdrawal system", "History & Logs", "Monthly charts"].map((feat, i) => (
                    <div key={i} className="flex justify-center items-center bg-black/40 border border-white/5 py-2 px-3 rounded-lg text-xs text-gray-300 font-medium whitespace-nowrap">
                      {feat}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </motion.div>

        {/* HOW IT WORKS */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-4">How It <span className="text-gradient">Works</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Start earning passive income in four simple steps.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Sign up as an affiliate partner", icon: Users },
              { step: "02", title: "Receive your custom referral link", icon: Copy },
              { step: "03", title: "Promote THEPIPHUNTERS products", icon: Globe },
              { step: "04", title: "Earn commissions from successful referrals", icon: DollarSign },
            ].map((s, i) => (
              <div key={i} className="bg-[#111621] border border-white/5 hover:border-brand-gold/30 rounded-3xl p-8 relative overflow-hidden group transition-all">
                <div className="absolute top-0 right-0 p-6 text-6xl font-black text-white/5 mix-blend-overlay group-hover:text-brand-gold/10 transition-colors">{s.step}</div>
                <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6 border border-brand-gold/20">
                  <s.icon className="w-7 h-7 text-brand-gold" />
                </div>
                <h3 className="text-lg font-bold text-white relative z-10">{s.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* COMMISSION SYSTEM & BENEFITS (Split Layout) */}
        <div className="grid lg:grid-cols-2 gap-12 mb-32">
          
          {/* Commission System */}
          <div className="bg-gradient-to-br from-[#111621] to-[#0A0D14] rounded-[2rem] p-8 md:p-12 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FF41]/5 rounded-bl-full pointer-events-none" />
            <h2 className="text-3xl font-heading font-black text-white mb-8 border-b border-white/10 pb-6 flex items-center gap-3">
               <DollarSign className="w-8 h-8 text-[#00FF41]" /> Commission System
            </h2>
            <div className="space-y-4 relative z-10">
              {[
                { label: "Recurring monthly commissions", highlight: true },
                { label: "Percentage-based earnings", highlight: false },
                { label: "VIP membership commissions", highlight: false },
                { label: "Trading bot commissions", highlight: false },
                { label: "Mentorship referral commissions", highlight: false },
                { label: "High-ticket sales payouts", highlight: true },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-4 p-4 rounded-xl border ${item.highlight ? 'bg-[#00FF41]/10 border-[#00FF41]/30 text-white' : 'bg-white/5 border-white/5 text-gray-300'}`}>
                   <CheckCircle2 className={`w-5 h-5 ${item.highlight ? 'text-[#00FF41]' : 'text-brand-gold'}`} />
                   <span className="font-bold">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-br from-[#111621] to-[#0A0D14] rounded-[2rem] p-8 md:p-12 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-bl-full pointer-events-none" />
            <h2 className="text-3xl font-heading font-black text-white mb-8 border-b border-white/10 pb-6 flex items-center gap-3">
               <ShieldCheck className="w-8 h-8 text-brand-gold" /> Why Join Us?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              {[
                "High commission rates", "Instant tracking dashboard", 
                "Passive income opportunities", "Custom affiliate links",
                "High-converting products", "Premium support",
                "Trusted fintech brand", "Global audience potential"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-brand-gold/30 transition-colors">
                  <Cpu className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TOP AFFILIATES LEADERBOARD */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-4">Top Affiliates <span className="text-gradient">Leaderboard</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Monthly top performers dominating the fintech space.</p>
          </div>
          <div className="bg-[#111621] border border-white/10 rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-left whitespace-nowrap">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 text-gray-400 uppercase tracking-wider text-xs font-bold">
                    <th className="px-8 py-5">Rank</th>
                    <th className="px-8 py-5">Partner Name</th>
                    <th className="px-8 py-5">Status Badge</th>
                    <th className="px-8 py-5 text-right">30D Earnings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {leaderboard.map((user, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors group">
                      <td className="px-8 py-5">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold font-mono text-sm ${
                          i === 0 ? 'bg-brand-gold text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]' : 
                          i === 1 ? 'bg-gray-300 text-black' : 
                          i === 2 ? 'bg-orange-400 text-black' : 'bg-white/10 text-white'
                        }`}>
                          {user.rank}
                        </div>
                      </td>
                      <td className="px-8 py-5 font-bold text-white text-lg flex items-center gap-2">
                        {user.name} {i === 0 && <Award className="w-5 h-5 text-brand-gold" />}
                      </td>
                      <td className="px-8 py-5">
                        <span className="bg-brand-navy border border-brand-gold/30 text-brand-gold px-3 py-1 text-xs font-bold rounded-full uppercase tracking-widest">
                          {user.badge}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <div className="font-mono font-black text-xl text-white">{user.earnings}</div>
                        <div className="text-xs text-[#00FF41] font-bold mt-1 flex justify-end items-center gap-1">
                          <TrendingUp className="w-3 h-3" /> {user.increase}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-4">Partner <span className="text-gradient">Success</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Hear from affiliates who scaled their passive income with us.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "David M.", earnings: "$12,400 Total", text: "Promoting the Hunter Pro MT5 bot changed the game for me. High-converting checkout and instant dashboard tracking." },
              { name: "Sarah L.", earnings: "$8,200/mo Passive", text: "The recurring commissions from the VIP academy memberships mean I have a stable monthly income just from my Telegram signals group." },
              { name: "Marcus T.", earnings: "$22,500 Total", text: "Fintech SaaS aesthetics naturally build trust. My audience buys immediately because the product presentation is flawless." },
            ].map((test, i) => (
              <div key={i} className="bg-[#111621] border border-white/10 rounded-[2rem] p-8 text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-bl-full pointer-events-none group-hover:bg-brand-gold/10 transition-colors" />
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-brand-gold text-brand-gold" />)}
                </div>
                <p className="text-gray-300 italic mb-8 relative z-10">"{test.text}"</p>
                <div className="pt-6 border-t border-white/5 relative z-10 font-bold">
                  <div className="text-white text-lg">{test.name}</div>
                  <div className="text-[#00FF41] font-mono text-sm mt-1 flex items-center justify-center gap-1">
                    <TrendingUp className="w-4 h-4"/> {test.earnings}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ & PAYMENT METHODS */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-heading font-black text-white mb-8 border-b border-white/10 pb-4">Affiliate FAQ</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-[#111621] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors">
                  <button 
                    onClick={() => toggleFaq(i)}
                    className="w-full text-left p-6 font-bold text-white flex justify-between items-center"
                  >
                    {faq.question}
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${activeFaq === i ? 'rotate-180 text-brand-gold' : ''}`} />
                  </button>
                  {activeFaq === i && (
                    <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-heading font-black text-white mb-8 border-b border-white/10 pb-4">Payout Methods</h2>
            <div className="bg-[#111621] border border-white/10 rounded-[2rem] p-8">
              <p className="text-gray-400 text-sm mb-6">We issue high-ticket payouts reliably and securely through multiple global channels.</p>
              <div className="space-y-4">
                {[
                  { name: "Crypto (USDT/BTC)", icon: Rocket },
                  { name: "PayPal", icon: Globe },
                  { name: "Bank Transfer", icon: Target },
                  { name: "Mobile Payments", icon: CreditCard },
                ].map((method, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5">
                    <method.icon className="w-6 h-6 text-brand-gold" />
                    <span className="font-bold text-white">{method.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA FOOTER */}
        <div className="text-center py-20 bg-gradient-to-br from-brand-gold/10 to-[#0A0D14] border border-brand-gold/20 rounded-[2.5rem] relative overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.1)]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 tracking-tight">
              Turn Your Audience Into <span className="text-gradient italic">Income</span>
            </h2>
            <p className="text-gray-400 mb-10 text-lg max-w-xl mx-auto">Join the THEPIPHUNTERS FOREX ACADEMY affiliate network and build a powerful passive income stream.</p>
            <button className="bg-brand-gold text-black px-10 py-5 rounded-2xl font-black text-lg hover:bg-yellow-500 transition-all inline-flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
              Start Earning Today <ArrowRight className="w-5 h-5"/>
            </button>
          </div>
        </div>

        {/* Branding Footer Section inside page */}
        <div className="text-center py-20 border-t border-white/10 mt-20">
           <h2 className="text-2xl font-heading font-black text-white tracking-widest uppercase mb-4">THEPIPHUNTERS FOREX ACADEMY</h2>
           <p className="text-brand-gold font-bold italic tracking-wide">"Hunt Pips. Build Wealth. Master The Markets."</p>
        </div>

      </div>
    </div>
  );
}

