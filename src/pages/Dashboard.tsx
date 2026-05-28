import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Target, TrendingUp, TrendingDown, Clock, Bell, User, Flame, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AnimatedCandlestickBg from '../components/AnimatedCandlestickBg';

const data = [
  { name: 'Mon', pips: 40 },
  { name: 'Tue', pips: 120 },
  { name: 'Wed', pips: 85 },
  { name: 'Thu', pips: 210 },
  { name: 'Fri', pips: 340 },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [transactions, setTransactions] = useState([
    { id: 'TRX-9842', user: 'johndoe@email.com', product: 'VIP Signals (Monthly)', amount: '$50.00', method: 'Binance Pay', status: 'Pending', date: 'Just now' },
    { id: 'TRX-9841', user: 'sarah.m@email.com', product: 'Hunter Pro MT5', amount: '$100.00', method: 'PayPal', status: 'Approved', date: '2 hours ago' },
    { id: 'TRX-9840', user: 'miket@email.com', product: 'Gold Rusher AI', amount: '$100.00', method: 'EcoCash', status: 'Pending', date: '5 hours ago' },
  ]);

  const handleApprove = (id: string) => {
    setTransactions(transactions.map(t => t.id === id ? { ...t, status: 'Approved' } : t));
  };

  const handleReject = (id: string) => {
    setTransactions(transactions.map(t => t.id === id ? { ...t, status: 'Rejected' } : t));
  };

  const activeSignals = [
    { pair: "XAUUSD", type: "BUY", entry: "2401.50", sl: "2395.00", tp: "2415.00", status: "Active", time: "10 mins ago", profit: "+25 pips" },
    { pair: "GBPUSD", type: "SELL", entry: "1.2650", sl: "1.2680", tp: "1.2580", status: "Active", time: "2 hours ago", profit: "-5 pips" },
    { pair: "Boom 1000", type: "BUY", entry: "12500.5", sl: "12450.0", tp: "12600.0", status: "Won", time: "5 hours ago", profit: "+100 pips" }
  ];

  return (
    <div className="relative w-full min-h-[90vh] pb-32">
      <AnimatedCandlestickBg />
      {/* Dashboard Top Navbar */}
      <div className="relative z-10 border-b border-white/5 bg-brand-black/90 backdrop-blur sticky top-[88px] hidden md:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex justify-between items-center text-sm">
           <div className="flex gap-6 font-medium">
             <button onClick={() => setActiveTab('Overview')} className={`${activeTab === 'Overview' ? 'text-brand-gold border-b-2 border-brand-gold pb-3 -mb-3' : 'text-gray-400 hover:text-white transition-colors'}`}>Overview</button>
             <button onClick={() => setActiveTab('Admin Transactions')} className={`${activeTab === 'Admin Transactions' ? 'text-brand-gold border-b-2 border-brand-gold pb-3 -mb-3' : 'text-gray-400 hover:text-white transition-colors'}`}>Admin Transactions <span className="ml-1 bg-brand-gold text-black text-[10px] px-1.5 py-0.5 rounded-full font-bold">2</span></button>
             <button className="text-gray-400 hover:text-white transition-colors">Downloads</button>
           </div>
           <div className="flex items-center gap-4 text-xs">
             <div className="flex items-center gap-1 text-gray-400"><span className="w-2 h-2 rounded-full bg-brand-neon"></span> System Operational</div>
             <div className="h-4 w-px bg-white/10"></div>
             <div className="text-gray-400">Subscription active until Dec 2026</div>
           </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-8">
        
        {activeTab === 'Overview' ? (
          <>
            {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold font-heading">Welcome back, Pip Hunter 👋</h1>
            <p className="text-gray-400 text-sm">Here is your VIP signal overview for this week.</p>
          </div>
          <button className="bg-brand-gold/10 text-brand-gold border border-brand-gold/20 hover:bg-brand-gold/20 px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 transition-colors">
            <Bell className="w-4 h-4" /> Enable Telegram Alert Bot
          </button>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="glass p-5 rounded-3xl border border-white/5">
            <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-2"><Target className="w-4 h-4 text-brand-neon"/> Weekly Profit</div>
            <div className="text-3xl font-bold text-white mb-1">+340 Pips</div>
            <div className="text-xs text-brand-neon">+12% from last week</div>
          </div>
          <div className="glass p-5 rounded-3xl border border-white/5">
            <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-2"><Flame className="w-4 h-4 text-orange-500"/> Win Rate</div>
            <div className="text-3xl font-bold text-white mb-1">84.5%</div>
            <div className="text-xs text-gray-500">Based on 22 signals</div>
          </div>
          <div className="glass p-5 rounded-3xl border-t-4 border-t-brand-gold">
            <div className="text-brand-gold text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-2"><User className="w-4 h-4"/> Subscription</div>
            <div className="text-xl font-bold text-white mb-1">VIP Monthly</div>
            <div className="text-xs text-gray-400">Renews in 14 days</div>
          </div>
          <div className="glass p-5 rounded-3xl border border-white/5 flex flex-col justify-center items-center text-center">
             <div className="w-10 h-10 rounded-full bg-brand-neon/10 flex items-center justify-center mb-2">
                <Target className="w-5 h-5 text-brand-neon" />
             </div>
             <div className="text-sm font-bold">New XAUUSD Setup</div>
             <div className="text-xs text-gray-500">Checking parameters...</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Chart Section */}
          <div className="md:col-span-2 glass rounded-3xl border border-white/5 p-6">
            <h3 className="font-bold text-lg mb-6 flex justify-between items-center">
              Profit Over Time
              <select className="bg-black/50 border border-white/10 text-xs rounded-md px-2 py-1 text-gray-300 focus:outline-none">
                <option>This Week</option>
                <option>Last Month</option>
              </select>
            </h3>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorPips" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                  <XAxis dataKey="name" stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111827', borderColor: '#ffffff20', borderRadius: '8px' }}
                    itemStyle={{ color: '#00FF41' }}
                  />
                  <Area type="monotone" dataKey="pips" stroke="#D4AF37" strokeWidth={3} fillOpacity={1} fill="url(#colorPips)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Active Signals */}
          <div className="glass rounded-3xl border border-white/5 p-6 flex flex-col">
            <h3 className="font-bold text-lg mb-6 flex justify-between items-center">
              Recent Signals
              <span className="bg-brand-neon/20 text-brand-neon text-xs px-2 py-1 rounded font-bold">3 Active</span>
            </h3>
            
            <div className="flex flex-col gap-4 flex-grow overflow-y-auto pr-2">
              {activeSignals.map((sig, i) => (
                <div key={i} className="bg-black/40 rounded-2xl p-4 border border-white/5">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-black px-2 py-0.5 rounded ${sig.type === 'BUY' ? 'bg-brand-neon/20 text-brand-neon' : 'bg-red-500/20 text-red-500'}`}>
                        {sig.type}
                      </span>
                      <span className="font-bold text-white">{sig.pair}</span>
                    </div>
                    <span className="text-xs text-gray-500 flex items-center gap-1"><Clock className="w-3 h-3"/> {sig.time}</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-3">
                    <div>
                      <div className="text-gray-500 mb-0.5">Entry</div>
                      <div className="font-mono text-gray-300">{sig.entry}</div>
                    </div>
                    <div>
                      <div className="text-red-400 mb-0.5">SL</div>
                      <div className="font-mono text-gray-300">{sig.sl}</div>
                    </div>
                    <div>
                      <div className="text-brand-neon mb-0.5">TP 1</div>
                      <div className="font-mono text-gray-300">{sig.tp}</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t border-white/5">
                    <span className={`text-xs px-2 py-1 rounded ${sig.status === 'Won' ? 'bg-brand-neon/10 text-brand-neon' : 'bg-white/5 text-gray-400'}`}>
                      {sig.status}
                    </span>
                    <span className={`text-sm font-bold ${
                      sig.profit.startsWith('+') ? 'text-brand-neon' : 'text-red-400'
                    }`}>
                      {sig.profit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
        </>
        ) : (
          <div className="glass rounded-3xl border border-white/5 p-8 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold font-heading text-white mb-2">Transactions Panel (Admin)</h2>
            <p className="text-gray-400 text-sm mb-8">Review and verify user payments submitted across the platform.</p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead>
                  <tr className="border-b border-white/10 text-gray-500 uppercase tracking-wider text-xs font-bold">
                    <th className="px-6 py-4">Transaction ID</th>
                    <th className="px-6 py-4">User</th>
                    <th className="px-6 py-4">Product</th>
                    <th className="px-6 py-4">Amount</th>
                    <th className="px-6 py-4">Method</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4 text-center">Status / Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {transactions.map(trx => (
                    <tr key={trx.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-mono text-gray-300">{trx.id}</td>
                      <td className="px-6 py-4 font-medium text-white">{trx.user}</td>
                      <td className="px-6 py-4 text-brand-gold font-semibold">{trx.product}</td>
                      <td className="px-6 py-4 text-gray-300">{trx.amount}</td>
                      <td className="px-6 py-4 text-gray-400">{trx.method}</td>
                      <td className="px-6 py-4 text-gray-400">{trx.date}</td>
                      <td className="px-6 py-4">
                        {trx.status === 'Pending' ? (
                          <div className="flex items-center justify-center gap-2">
                            <span className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs font-bold mr-2">Pending</span>
                            <button onClick={() => handleApprove(trx.id)} className="p-1.5 bg-green-500/10 hover:bg-green-500/20 text-green-400 rounded-lg transition-colors" title="Approve">
                              <Check className="w-4 h-4" />
                            </button>
                            <button onClick={() => handleReject(trx.id)} className="p-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors" title="Reject">
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${trx.status === 'Approved' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                              {trx.status}
                            </span>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
