import { motion } from 'motion/react';
import { Calendar, Globe2, Activity, Bell, Lock, AlertTriangle, TrendingUp, Clock, Target, BarChart2, Brain } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function CalendarPage() {
  const currencies = ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "NZD"];
  
  // Mock current time for Session Timers
  const [time, setTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('Today');
  
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const sessions = [
    { name: "London", status: "OPEN", timeRemaining: "03:24:11", color: "bg-green-500", pairs: "GBP, EUR, CHF" },
    { name: "New York", status: "Opens Soon", timeRemaining: "01:12:45", color: "bg-yellow-500", pairs: "USD, CAD, XAU" },
    { name: "Tokyo", status: "Closed", timeRemaining: "--:--:--", color: "bg-gray-600", pairs: "JPY, AUD, NZD" },
    { name: "Sydney", status: "Closed", timeRemaining: "--:--:--", color: "bg-gray-600", pairs: "AUD, NZD" }
  ];

  const highImpactNews = [
    { time: "14:30", cur: "USD", event: "Core CPI (MoM)", forecast: "0.3%", prev: "0.4%", countdown: "15 mins" },
    { time: "16:00", cur: "USD", event: "Fed Chair Powell Speaks", forecast: "-", prev: "-", countdown: "01:45:00" }
  ];

  const eventsData = {
    'Today': [
      { time: "08:00", cur: "GBP", event: "GDP (MoM)", impact: "Med", actual: "0.2%", forecast: "0.1%", prev: "-0.3%" },
      { time: "14:30", cur: "USD", event: "Core CPI (MoM)", impact: "High", actual: "-", forecast: "0.3%", prev: "0.4%" },
      { time: "14:30", cur: "USD", event: "Initial Jobless Claims", impact: "High", actual: "-", forecast: "215K", prev: "211K" },
      { time: "15:15", cur: "EUR", event: "ECB Interest Rate Decision", impact: "High", actual: "-", forecast: "4.50%", prev: "4.50%" },
      { time: "16:00", cur: "USD", event: "Fed Chair Powell Speaks", impact: "High", actual: "-", forecast: "-", prev: "-" },
      { time: "18:00", cur: "GBP", event: "BoE Gov Bailey Speaks", impact: "Low", actual: "-", forecast: "-", prev: "-" }
    ],
    'Tomorrow': [
      { time: "02:30", cur: "AUD", event: "RBA Meeting Minutes", impact: "High", actual: "-", forecast: "-", prev: "-" },
      { time: "07:00", cur: "GBP", event: "Retail Sales (MoM)", impact: "Med", actual: "-", forecast: "0.4%", prev: "0.0%" },
      { time: "12:30", cur: "CAD", event: "Employment Change", impact: "High", actual: "-", forecast: "25.0K", prev: "15.0K" },
      { time: "14:00", cur: "USD", event: "Michigan Consumer Sentiment", impact: "High", actual: "-", forecast: "77.5", prev: "76.9" }
    ],
    'This Week': [
      { time: "Tue", cur: "JPY", event: "BoJ Interest Rate Decision", impact: "High", actual: "0.10%", forecast: "0.10%", prev: "-0.10%" },
      { time: "Wed", cur: "NZD", event: "RBNZ Rate Statement", impact: "High", actual: "5.50%", forecast: "5.50%", prev: "5.50%" },
      { time: "Thu", cur: "CHF", event: "SNB Policy Rate", impact: "High", actual: "1.50%", forecast: "1.50%", prev: "1.75%" },
      { time: "Fri", cur: "USD", event: "Non-Farm Payrolls", impact: "High", actual: "-", forecast: "205K", prev: "275K" }
    ]
  };

  const getTabClass = (tabName: string) => 
    `px-4 py-2 font-bold text-sm rounded-lg transition-colors ${
      activeTab === tabName 
        ? "bg-brand-gold text-black" 
        : "bg-white/5 text-white font-medium hover:bg-white/10"
    }`;

  return (
    <div className="w-full pt-32 pb-32 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-sm font-bold mb-6 border border-red-500/20">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> LIVE MARKET INTELLIGENCE
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6">
            Real-Time <span className="text-gradient">Economic Calendar</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Stay Ahead Of Market Volatility With Real-Time Economic News & Trading Session Intelligence.
          </p>
        </motion.div>

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          
          {/* High Impact News Today Widget */}
          <div className="bg-brand-navy border border-red-500/30 rounded-3xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-[40px] pointer-events-none" />
            <h3 className="text-xl font-bold flex items-center gap-2 mb-6 text-white">
              <AlertTriangle className="text-red-500 w-5 h-5" /> High Impact News Today
            </h3>
            <div className="space-y-4">
              {highImpactNews.map((news, i) => (
                <div key={i} className="bg-[#1A1E29] p-4 rounded-xl border border-white/5 relative overflow-hidden">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white bg-white/10 px-2 py-0.5 rounded text-xs">{news.cur}</span>
                      <span className="text-sm font-semibold text-gray-200">{news.event}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-3 pt-3 border-t border-white/5">
                    <div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Releases In</div>
                      <div className="text-sm font-mono font-bold text-red-400">{news.countdown}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Forecast / Prev</div>
                      <div className="text-xs font-bold text-gray-300">{news.forecast} / {news.prev}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 flex items-center justify-center gap-2 text-sm font-bold text-white/70 hover:text-white transition-colors bg-white/5 py-2 rounded-lg">
              <Bell className="w-4 h-4" /> Get News Alerts
            </button>
          </div>

          {/* Trading Sessions */}
          <div className="lg:col-span-2 bg-brand-navy border border-white/10 rounded-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2 text-white">
                <Globe2 className="text-brand-gold w-5 h-5" /> Trading Session Timers
              </h3>
              <div className="text-sm font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-lg">
                <Clock className="w-4 h-4 inline mr-2 text-brand-gold" />
                {time.toLocaleTimeString()} UTC
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {sessions.map((session, i) => (
                <div key={i} className="bg-[#1A1E29] p-4 rounded-xl border border-white/5 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-white flex items-center gap-2 mb-1">
                      {session.name} <span className={`w-2 h-2 rounded-full ${session.color}`} />
                    </h4>
                    <p className="text-[10px] text-brand-gold font-semibold tracking-wider uppercase">Pairs: {session.pairs}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-gray-300">{session.status}</div>
                    {session.timeRemaining !== "--:--:--" && (
                      <div className="text-xs font-mono text-gray-500">{session.timeRemaining}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN LAYOUT: MIDDLE SECTION + SIDEBAR */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          
          {/* Middle Section: Full Calendar */}
          <div className="lg:col-span-3 bg-brand-navy border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <div className="border-b border-white/10 p-6 flex flex-wrap items-center justify-between gap-4 bg-[#1A1E29]">
              <div className="flex gap-2">
                <button onClick={() => setActiveTab('Today')} className={getTabClass('Today')}>Today</button>
                <button onClick={() => setActiveTab('Tomorrow')} className={getTabClass('Tomorrow')}>Tomorrow</button>
                <button onClick={() => setActiveTab('This Week')} className={getTabClass('This Week')}>This Week</button>
              </div>
              <div className="flex gap-2">
                {currencies.slice(0, 5).map((iso) => (
                  <span key={iso} className="px-2 py-1 text-xs font-bold bg-white/5 border border-white/10 rounded-md text-gray-400 hover:text-brand-gold cursor-pointer transition-colors">{iso}</span>
                ))}
                <span className="px-3 py-1 text-xs font-bold text-black bg-brand-gold rounded-md cursor-pointer">Filter</span>
              </div>
            </div>
            
            <div className="p-0">
              <div className="flex flex-col">
                {/* Headers */}
                <div className="grid grid-cols-12 gap-4 p-4 border-b border-white/10 bg-white/5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                   <div className="col-span-2">Time/Cur</div>
                   <div className="col-span-1 text-center">Imp</div>
                   <div className="col-span-5">Event</div>
                   <div className="col-span-4 grid grid-cols-3 text-right">
                     <span>Actual</span>
                     <span>Forecast</span>
                     <span>Prev</span>
                   </div>
                </div>
                {/* Events */}
                {eventsData[activeTab as keyof typeof eventsData].map((row, i) => (
                  <div key={i} className="grid grid-cols-12 gap-4 p-4 border-b border-white/5 hover:bg-white/5 transition-colors items-center group">
                    <div className="col-span-2 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                       <span className="text-gray-400 font-mono text-sm">{row.time}</span>
                       <span className="font-bold text-white text-sm bg-white/10 px-1.5 rounded">{row.cur}</span>
                    </div>
                    <div className="col-span-1 flex justify-center">
                      <div className="flex gap-0.5">
                         <span className={`w-1.5 h-4 rounded-sm ${row.impact === 'High' ? 'bg-red-500' : row.impact === 'Med' ? 'bg-yellow-500' : 'bg-green-500'}`} />
                         <span className={`w-1.5 h-4 rounded-sm ${row.impact === 'High' ? 'bg-red-500' : row.impact === 'Med' ? 'bg-yellow-500' : 'bg-[#1A1E29]'}`} />
                         <span className={`w-1.5 h-4 rounded-sm ${row.impact === 'High' ? 'bg-red-500' : 'bg-[#1A1E29]'}`} />
                      </div>
                    </div>
                    <div className="col-span-5 font-medium text-gray-200 group-hover:text-brand-gold transition-colors truncate">{row.event}</div>
                    <div className="col-span-4 grid grid-cols-3 text-sm text-right">
                      <span className="font-bold text-white">{row.actual}</span>
                      <span className="text-gray-500">{row.forecast}</span>
                      <span className="text-gray-500">{row.prev}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
             {/* Market Countdowns */}
             <div className="bg-[#1A1E29] border border-white/10 rounded-2xl p-5">
               <h4 className="text-white font-bold mb-4 flex items-center gap-2"><Clock className="w-4 h-4 text-brand-gold" /> Market Status</h4>
               <div className="space-y-3">
                 <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                   <div className="text-xs text-brand-gold font-bold mb-1">Forex Market Opens In:</div>
                   <div className="font-mono text-xl text-white font-black">Weekend Closed</div>
                 </div>
                 <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                   <div className="text-xs text-gray-400 font-bold mb-1">London Session Starts In:</div>
                   <div className="font-mono text-lg text-gray-200 font-black">04:45:18</div>
                 </div>
               </div>
             </div>

             {/* VIP Premium Features Sidebar */}
             <div className="bg-gradient-to-br from-brand-navy to-[#1A1E29] p-5 rounded-2xl border border-brand-gold/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/10 rounded-full blur-[30px] pointer-events-none" />
                <h3 className="text-lg font-bold flex items-center gap-2 mb-4 text-brand-gold border-b border-white/10 pb-3"><Lock className="w-4 h-4"/> VIP Analysis</h3>
                <ul className="space-y-3 mb-6 relative z-10">
                  <li className="flex flex-col gap-1">
                    <span className="text-white text-sm font-bold flex items-center gap-2"><BarChart2 className="w-3 h-3 text-brand-gold" /> Gold Volatility Index</span>
                    <span className="text-xs text-gray-400">High volatility expected at NY Open.</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-white text-sm font-bold flex items-center gap-2"><Brain className="w-3 h-3 text-brand-gold" /> AI Market Alerts</span>
                    <span className="text-xs text-gray-400">Smart sentiment tracking for EUR/USD.</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-white text-sm font-bold flex items-center gap-2"><Target className="w-3 h-3 text-brand-gold" /> Institutional Order Flow</span>
                    <span className="text-xs text-gray-400 text-brand-gold/70 italic">VIP Access Required</span>
                  </li>
                </ul>
                <button className="w-full bg-brand-gold text-black rounded-lg py-2.5 text-sm font-bold hover:bg-yellow-500 transition-colors">
                  Unlock VIP Tools
                </button>
             </div>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="text-center py-16 bg-gradient-to-br from-[#1A1E29] to-brand-navy border border-white/10 rounded-3xl max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
           <div className="absolute inset-0 bg-brand-gold/5 opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-gold/20 via-transparent to-transparent pointer-events-none" />
           <h2 className="text-3xl font-heading font-black text-white mb-4 italic relative z-10">
             "Trade Smarter With Real-Time Market Intelligence, Economic News & AI-Powered Alerts."
           </h2>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 relative z-10">
             <button className="btn-primary w-full sm:w-auto">Join VIP Alerts</button>
             <button className="px-6 py-3 rounded-xl font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
               Get Market Notifications <Bell className="w-4 h-4" />
             </button>
           </div>
        </div>

      </div>
    </div>
  );
}
