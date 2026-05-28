import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Target, TrendingUp, TrendingDown, Clock, Bell, User, Flame, Check, X, Shield, Cpu, BookOpen, Calendar, DollarSign, Settings, LogOut, ChevronRight, Download, Activity, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const data = [
  { name: 'Mon', pips: 40 },
  { name: 'Tue', pips: 120 },
  { name: 'Wed', pips: 85 },
  { name: 'Thu', pips: 210 },
  { name: 'Fri', pips: 340 },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Overview');

  const activeSignals = [
    { pair: "XAUUSD", type: "BUY", entry: "2401.50", sl: "2395.00", tp: "2415.00", status: "Active", time: "10 mins ago", profit: "+25 pips" },
    { pair: "GBPUSD", type: "SELL", entry: "1.2650", sl: "1.2680", tp: "1.2580", status: "Active", time: "2 hours ago", profit: "-5 pips" },
    { pair: "Boom 1000", type: "BUY", entry: "12500.5", sl: "12450.0", tp: "12600.0", status: "Won", time: "5 hours ago", profit: "+100 pips" }
  ];

  const sidebarLinks = [
    { name: 'Overview', icon: Activity },
    { name: 'VIP Signals', icon: Target },
    { name: 'Bot Marketplace', icon: Cpu },
    { name: 'Education', icon: BookOpen },
    { name: 'Calendar', icon: Calendar },
    { name: 'Affiliate', icon: DollarSign },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#0A0D14] flex flex-col md:flex-row pt-20 font-sans text-white">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#111621] border-r border-white/5 flex flex-col fixed md:relative z-20 h-auto md:h-[calc(100vh-80px)] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-gold to-yellow-500 flex items-center justify-center font-bold text-black border border-brand-gold">
              PH
            </div>
            <div>
               <h3 className="font-bold text-sm">Pip Hunter</h3>
               <span className="text-[10px] uppercase font-bold text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded-full border border-brand-gold/20">VIP Member</span>
            </div>
          </div>
          
          <nav className="space-y-2 flex-grow">
            {sidebarLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => setActiveTab(link.name)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-semibold text-sm ${
                  activeTab === link.name 
                    ? 'bg-brand-gold/10 text-brand-gold border border-brand-gold/20' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <link.icon className="w-5 h-5" /> {link.name}
              </button>
            ))}
          </nav>
        </div>
        <div className="p-6 mt-auto border-t border-white/5">
          <button className="flex items-center gap-3 text-sm text-gray-400 hover:text-red-400 transition-colors font-semibold w-full px-4 py-2">
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto h-[calc(100vh-80px)] p-6 lg:p-8 bg-gradient-to-br from-[#0A0D14] to-[#111621]">
        
        {/* OVERVIEW TAB */}
        {activeTab === 'Overview' && (
          <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl font-heading font-black">Client Dashboard</h1>
                <p className="text-gray-400 text-sm mt-1">Welcome back. Your trading systems are fully operational.</p>
              </div>
              <div className="flex gap-3">
                <button className="bg-[#00FF41]/10 text-[#00FF41] border border-[#00FF41]/20 px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-[#00FF41]/20 transition-all">
                  <Activity className="w-4 h-4" /> System Live
                </button>
                <a href="https://t.me/thepiphunter_zw" target="_blank" rel="noopener noreferrer" className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-blue-500/20 transition-all">
                  <Shield className="w-4 h-4" /> Telegram Signals
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { title: "Weekly Profit", value: "+340 Pips", sub: "+12% from last week", icon: Target, color: "text-[#00FF41]" },
                { title: "Win Rate", value: "84.5%", sub: "Based on 22 signals", icon: Flame, color: "text-orange-500" },
                { title: "Active Licenses", value: "2 Bots", sub: "Hunter Pro, Gold AI", icon: Cpu, color: "text-brand-gold" },
                { title: "Membership", value: "VIP Trial", sub: "14 days remaining", icon: User, color: "text-blue-400" },
              ].map((stat, i) => (
                <div key={i} className="bg-[#111621] p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors shadow-lg">
                  <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                    <stat.icon className={`w-4 h-4 ${stat.color}`}/> {stat.title}
                  </div>
                  <div className="text-2xl font-black text-white mb-1 font-mono">{stat.value}</div>
                  <div className={`text-xs ${i === 0 ? 'text-[#00FF41]' : 'text-gray-500'}`}>{stat.sub}</div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-[#111621] rounded-2xl border border-white/5 p-6 shadow-lg">
                <h3 className="font-bold text-lg mb-6 flex justify-between items-center text-white">
                  Growth Trajectory (Pips)
                  <select className="bg-black/50 border border-white/10 text-xs rounded-md px-2 py-1 text-gray-300 focus:outline-none font-bold">
                    <option>This Week</option>
                  </select>
                </h3>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorPips" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                      <XAxis dataKey="name" stroke="#ffffff30" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#ffffff30" fontSize={12} tickLine={false} axisLine={false} />
                      <Tooltip contentStyle={{ backgroundColor: '#0A0D14', borderColor: '#ffffff10', borderRadius: '8px' }} itemStyle={{ color: '#D4AF37', fontWeight: 'bold' }} />
                      <Area type="monotone" dataKey="pips" stroke="#D4AF37" strokeWidth={3} fillOpacity={1} fill="url(#colorPips)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-[#111621] rounded-2xl border border-white/5 p-6 shadow-lg flex flex-col">
                <h3 className="font-bold text-lg mb-6 text-white flex justify-between items-center">
                  Live Signals
                  <span className="text-[#00FF41] bg-[#00FF41]/10 px-2 py-0.5 rounded text-xs">Live</span>
                </h3>
                <div className="flex flex-col gap-3 flex-grow overflow-y-auto">
                  {activeSignals.map((sig, i) => (
                    <div key={i} className="bg-black/40 rounded-xl p-4 border border-white/5">
                      <div className="flex justify-between items-center mb-2">
                         <div className="flex items-center gap-2">
                           <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider ${sig.type === 'BUY' ? 'bg-[#00FF41]/20 text-[#00FF41]' : 'bg-red-500/20 text-red-500'}`}>
                             {sig.type}
                           </span>
                           <span className="font-bold text-sm text-white">{sig.pair}</span>
                         </div>
                         <span className="text-[10px] text-gray-500">{sig.time}</span>
                      </div>
                      <div className="flex justify-between items-end mt-2">
                         <div>
                           <div className="text-[10px] text-gray-500 mb-0.5">Entry Point</div>
                           <div className="font-mono text-gray-300 text-xs">{sig.entry}</div>
                         </div>
                         <div className="text-right">
                           <div className="text-[10px] text-gray-500 mb-0.5">Status</div>
                           <div className={`text-xs font-bold ${sig.status === 'Won' ? 'text-[#00FF41]' : 'text-brand-gold'}`}>{sig.status}</div>
                         </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button onClick={() => setActiveTab('VIP Signals')} className="mt-4 w-full bg-white/5 border border-white/10 text-white text-xs font-bold py-2 rounded-lg hover:bg-white/10 transition-colors">
                  View All Signals
                </button>
              </div>
            </div>
          </div>
        )}

        {/* VIP SIGNALS TAB */}
        {activeTab === 'VIP Signals' && (
          <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-300">
             <div className="flex justify-between items-center bg-[#111621] p-6 rounded-2xl border border-brand-gold/30 shadow-lg">
                <div>
                   <h2 className="text-2xl font-black text-white flex items-center gap-2">
                     <Target className="text-brand-gold" /> VIP Signal Feed
                   </h2>
                   <p className="text-gray-400 mt-1">Real-time market execution setups from our analysts.</p>
                </div>
                <a href="https://t.me/thepiphunter_zw" target="_blank" rel="noopener noreferrer" className="bg-brand-gold text-black font-black px-6 py-2 rounded-xl text-sm shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:bg-yellow-500 transition-colors flex items-center gap-2">
                  <PlayCircle className="w-4 h-4"/> Connect Telegram
                </a>
             </div>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...activeSignals, { pair: "EURUSD", type: "SELL", entry: "1.0850", sl: "1.0880", tp: "1.0750", status: "Closed", time: "1 day ago", profit: "+45 pips" }].map((sig, i) => (
                  <div key={i} className="bg-[#111621] border border-white/5 rounded-2xl p-5 shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                       <div className="flex items-center gap-3">
                         <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${sig.type === 'BUY' ? 'bg-[#00FF41]/10 text-[#00FF41] border border-[#00FF41]/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
                           {sig.type}
                         </div>
                         <div>
                           <div className="font-bold text-white text-lg">{sig.pair}</div>
                           <div className="text-xs text-gray-500 flex items-center gap-1"><Clock className="w-3 h-3"/> {sig.time}</div>
                         </div>
                       </div>
                       <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${sig.status === 'Active' ? 'bg-brand-gold/20 text-brand-gold' : sig.status === 'Won' ? 'bg-[#00FF41]/20 text-[#00FF41]' : 'bg-white/10 text-gray-400'}`}>
                         {sig.status}
                       </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 p-3 bg-black/30 rounded-xl border border-white/5 mb-4 text-center">
                       <div>
                         <div className="text-[10px] text-gray-500 uppercase font-semibold">Entry</div>
                         <div className="font-mono text-sm text-white">{sig.entry}</div>
                       </div>
                       <div>
                         <div className="text-[10px] text-red-400/80 uppercase font-semibold">Stop Loss</div>
                         <div className="font-mono text-sm text-red-400">{sig.sl}</div>
                       </div>
                       <div>
                         <div className="text-[10px] text-[#00FF41]/80 uppercase font-semibold">Take Profit</div>
                         <div className="font-mono text-sm text-[#00FF41]">{sig.tp}</div>
                       </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">Risk: 1%</span>
                      <span className={`font-bold ${sig.profit.startsWith('+') ? 'text-[#00FF41]' : 'text-gray-500'}`}>{sig.profit} Result</span>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        )}

        {/* BOT MARKETPLACE TAB */}
        {activeTab === 'Bot Marketplace' && (
          <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-300">
             <div className="flex justify-between items-center bg-gradient-to-r from-[#111621] to-[#0A0D14] p-8 rounded-2xl border border-[#00FF41]/30 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FF41]/10 blur-[80px] pointer-events-none" />
                <div className="relative z-10">
                   <h2 className="text-2xl font-black text-white flex items-center gap-2 mb-2">
                     <Cpu className="text-[#00FF41]" /> MT5 Expert Advisors
                   </h2>
                   <p className="text-gray-400 text-sm">Download your active licenses or purchase new trading systems.</p>
                </div>
                <Link to="/marketplace" className="bg-[#00FF41]/10 border border-[#00FF41]/30 text-[#00FF41] font-bold px-6 py-2 rounded-xl hover:bg-[#00FF41]/20 transition-colors z-10 hidden sm:block">
                  Browse Marketplace
                </Link>
             </div>

             <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#111621] border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                   <div className="absolute top-0 right-0 px-3 py-1 bg-[#00FF41]/20 text-[#00FF41] text-[10px] font-bold rounded-bl-xl uppercase">Active License</div>
                   <div className="flex items-center gap-4 mb-6">
                     <div className="w-16 h-16 bg-black rounded-2xl border border-white/5 flex items-center justify-center">
                       <Target className="w-8 h-8 text-brand-gold" />
                     </div>
                     <div>
                       <h3 className="text-xl font-bold text-white">HUNTER PRO MT5</h3>
                       <p className="text-xs text-brand-gold font-mono mb-1">SN: 8492-XAQ2-9901</p>
                       <p className="text-xs text-gray-500">Lifetime Access</p>
                     </div>
                   </div>
                   <div className="flex gap-3">
                     <button className="flex-1 bg-white/10 hover:bg-white/20 text-white text-sm font-bold py-2 rounded-xl flex justify-center items-center gap-2 transition-colors">
                       <Download className="w-4 h-4"/> Download EA
                     </button>
                     <button className="flex-1 bg-brand-gold/10 hover:bg-brand-gold/20 text-brand-gold border border-brand-gold/30 text-sm font-bold py-2 rounded-xl flex justify-center items-center gap-2 transition-colors">
                       <Download className="w-4 h-4"/> Get Presets
                     </button>
                   </div>
                </div>

                <div className="bg-[#0A0D14] border border-white/5 border-dashed rounded-2xl p-6 flex flex-col justify-center items-center text-center opacity-70 hover:opacity-100 transition-opacity">
                   <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3">
                     <DollarSign className="text-gray-400 w-6 h-6"/>
                   </div>
                   <h3 className="text-white font-bold mb-1">Upgrade Your Arsenal</h3>
                   <p className="text-sm text-gray-500 mb-4 px-4">Get the GOLD RUSHER AI or SYNTHETIC SNIPER to diversify your trading.</p>
                   <Link to="/marketplace" className="text-brand-gold text-sm font-bold hover:underline">View Store</Link>
                </div>
             </div>
          </div>
        )}

        {/* EDUCATION & CALENDAR & AFFILIATE PLACEHOLDERS */}
        {['Education', 'Calendar', 'Affiliate', 'Settings'].includes(activeTab) && (
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center py-20 animate-in fade-in">
             <div className="w-20 h-20 bg-brand-gold/10 rounded-3xl flex items-center justify-center border border-brand-gold/20 mb-6 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
               {activeTab === 'Education' && <BookOpen className="w-10 h-10 text-brand-gold"/>}
               {activeTab === 'Calendar' && <Calendar className="w-10 h-10 text-brand-gold"/>}
               {activeTab === 'Affiliate' && <DollarSign className="w-10 h-10 text-brand-gold"/>}
               {activeTab === 'Settings' && <Settings className="w-10 h-10 text-brand-gold"/>}
             </div>
             <h2 className="text-2xl font-black text-white mb-2">{activeTab} Panel</h2>
             <p className="text-gray-400 mb-8 max-w-sm text-center text-sm">
               {activeTab === 'Settings' ? 'Manage your account preferences, profile security, and billing details.' : `Access your full ${activeTab.toLowerCase()} experience here.`}
             </p>
             {activeTab !== 'Settings' ? (
                <Link to={`/${activeTab === 'Education' ? 'academy' : activeTab.toLowerCase()}`} className="bg-brand-gold text-black font-black px-8 py-3 rounded-xl hover:bg-yellow-500 transition-all shadow-lg">
                  Open {activeTab} 
                </Link>
             ) : (
                <button className="bg-white/10 text-white font-bold px-8 py-3 rounded-xl hover:bg-white/20 transition-all border border-white/5">
                  Update Profile
                </button>
             )}
          </div>
        )}

      </main>
    </div>
  );
}
