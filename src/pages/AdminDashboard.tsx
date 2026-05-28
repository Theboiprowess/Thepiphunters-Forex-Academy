import { useState } from 'react';
import { 
  Users, Target, Cpu, LayoutTemplate, CreditCard, Network, Calendar, Bell, 
  ShieldAlert, BrainCircuit, Settings, LogOut, TrendingUp, Activity, 
  ChevronRight, ArrowUpRight, Search, Check, X, Edit, Trash2, Download
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const revenueData = [
  { name: 'Mon', revenue: 4200 },
  { name: 'Tue', revenue: 5800 },
  { name: 'Wed', revenue: 5100 },
  { name: 'Thu', revenue: 8400 },
  { name: 'Fri', revenue: 10200 },
  { name: 'Sat', revenue: 6400 },
  { name: 'Sun', revenue: 9100 },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('Overview');

  const sidebarLinks = [
    { name: 'Overview', icon: Activity },
    { name: 'User Management', icon: Users },
    { name: 'Signal Control', icon: Target },
    { name: 'Bot Marketplace', icon: Cpu },
    { name: 'Content CMS', icon: LayoutTemplate },
    { name: 'Payments & Revenue', icon: CreditCard },
    { name: 'Affiliates', icon: Network },
    { name: 'Economic Calendar', icon: Calendar },
    { name: 'Alerts & Push', icon: Bell },
    { name: 'Security Center', icon: ShieldAlert },
    { name: 'AI Analytics', icon: BrainCircuit },
    { name: 'Platform Settings', icon: Settings },
  ];

  const recentUsers = [
    { id: 'USR-291', name: 'John Doe', email: 'john@example.com', plan: 'VIP Monthly', status: 'Active' },
    { id: 'USR-292', name: 'Sarah M.', email: 'sarah@trading.co', plan: 'Free', status: 'Pending KYC' },
    { id: 'USR-293', name: 'Mike T.', email: 'mike@finance.com', plan: 'Hunter Pro', status: 'Active' },
  ];

  const pendingPayments = [
    { id: 'TRX-9842', user: 'jack@email.com', product: 'VIP Signals', amount: '$50.00', method: 'Binance Pay', date: 'Just now' },
    { id: 'TRX-9840', user: 'miket@email.com', product: 'Gold Rusher AI', amount: '$100.00', method: 'EcoCash', date: '5 hours ago' },
  ];

  return (
    <div className="min-h-screen bg-[#05070A] flex flex-col md:flex-row pt-20 font-sans text-white">
      {/* Admin Sidebar */}
      <aside className="w-full md:w-72 bg-[#0A0D14] border-r border-white/5 flex flex-col fixed md:relative z-20 h-auto md:h-[calc(100vh-80px)] overflow-y-auto hide-scrollbar">
        <div className="p-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00FF41] to-green-500 flex items-center justify-center font-bold text-black border border-[#00FF41]">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
               <h3 className="font-bold text-sm tracking-widest text-[#00FF41] uppercase">Super Admin</h3>
               <span className="text-[10px] text-gray-500 uppercase tracking-widest">Command Center</span>
            </div>
          </div>
        </div>
        
        <div className="p-4 flex-grow">
          <div className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-3 px-3">System Controls</div>
          <nav className="space-y-1">
            {sidebarLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => setActiveTab(link.name)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all font-semibold text-sm ${
                  activeTab === link.name 
                    ? 'bg-[#00FF41]/10 text-[#00FF41] border border-[#00FF41]/20 shadow-[0_0_15px_rgba(0,255,65,0.05)]' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-white border border-transparent'
                }`}
              >
                <link.icon className="w-4 h-4" /> {link.name}
              </button>
            ))}
          </nav>
        </div>
        <div className="p-6 mt-auto border-t border-white/5">
          <button className="flex items-center gap-3 text-sm text-red-500 hover:text-red-400 hover:bg-red-500/10 transition-colors font-bold w-full px-4 py-3 rounded-lg">
            <LogOut className="w-5 h-5" /> Terminate Session
          </button>
        </div>
      </aside>

      {/* Main Admin Content */}
      <main className="flex-1 overflow-y-auto h-[calc(100vh-80px)] p-6 lg:p-8 bg-[#05070A] relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00FF41]/5 blur-[200px] pointer-events-none rounded-full" />
        
        {/* OVERVIEW TAB */}
        {activeTab === 'Overview' && (
          <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl font-heading font-black text-white">System Overview</h1>
                <p className="text-gray-400 text-sm mt-1">Real-time platform analytics and administration.</p>
              </div>
              <div className="flex gap-3">
                <button className="bg-brand-gold/10 text-brand-gold border border-brand-gold/20 px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-2 hover:bg-brand-gold/20 transition-all uppercase tracking-wider">
                  <Download className="w-4 h-4" /> Generate Report
                </button>
              </div>
            </div>

            {/* KPI Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Total Revenue (30D)", value: "$124,500", increase: "+18.2%", icon: TrendingUp, color: "text-[#00FF41]" },
                { title: "Active VIP Members", value: "2,451", increase: "+5.4%", icon: Users, color: "text-brand-gold" },
                { title: "Bot Sales (MT5)", value: "342", increase: "+12.1%", icon: Cpu, color: "text-blue-400" },
                { title: "System Status", value: "OPTIMAL", increase: "99.9% Uptime", icon: ServerIcon, color: "text-[#00FF41]" },
              ].map((stat, i) => (
                <div key={i} className="bg-[#0A0D14] p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                  <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-3 flex items-center justify-between">
                    {stat.title} <stat.icon className={`w-4 h-4 ${stat.color}`}/>
                  </div>
                  <div className="text-2xl font-black text-white mb-2 font-mono">{stat.value}</div>
                  <div className={`text-xs font-bold ${stat.color}`}>{stat.increase}</div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Revenue Chart */}
              <div className="lg:col-span-2 bg-[#0A0D14] rounded-2xl border border-white/5 p-6">
                <h3 className="font-bold text-sm text-white mb-6 flex justify-between items-center uppercase tracking-widest text-gray-400">
                  Revenue Analytics
                </h3>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#00FF41" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#00FF41" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                      <XAxis dataKey="name" stroke="#ffffff30" fontSize={10} tickLine={false} axisLine={false} />
                      <YAxis stroke="#ffffff30" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(val) => `$${val}`} />
                      <Tooltip contentStyle={{ backgroundColor: '#05070A', borderColor: '#ffffff10', borderRadius: '8px' }} itemStyle={{ color: '#00FF41', fontWeight: 'bold', fontFamily: 'monospace' }} />
                      <Area type="monotone" dataKey="revenue" stroke="#00FF41" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Action Center */}
              <div className="bg-[#0A0D14] rounded-2xl border border-white/5 p-6 flex flex-col">
                <h3 className="font-bold text-sm mb-6 text-gray-400 uppercase tracking-widest">
                  Action Center
                </h3>
                
                <div className="flex-grow space-y-4">
                   <div className="border border-brand-gold/30 bg-brand-gold/5 rounded-xl p-4">
                      <div className="flex justify-between items-start mb-2">
                         <span className="text-brand-gold text-xs font-bold uppercase tracking-wider">Pending Approvals</span>
                         <span className="bg-brand-gold text-black font-black text-[10px] px-2 py-0.5 rounded-full">{pendingPayments.length}</span>
                      </div>
                      <p className="text-gray-300 text-xs mb-3">Review manual payments (EcoCash, Crypto) recently uploaded.</p>
                      <button onClick={() => setActiveTab('Payments & Revenue')} className="text-xs bg-brand-gold hover:bg-yellow-500 text-black font-bold uppercase tracking-wider px-4 py-2 rounded-lg w-full transition-colors">
                        Review Payments
                      </button>
                   </div>
                   
                   <div className="border border-white/5 bg-white/5 rounded-xl p-4">
                      <div className="flex justify-between items-start mb-2">
                         <span className="text-white text-xs font-bold uppercase tracking-wider">Send VIP Signal</span>
                         <Target className="w-4 h-4 text-[#00FF41]" />
                      </div>
                      <p className="text-gray-400 text-xs mb-3">Broadcast a new setup to all VIP members & Telegram.</p>
                      <button onClick={() => setActiveTab('Signal Control')} className="text-xs bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-wider px-4 py-2 rounded-lg w-full transition-colors">
                        Create Signal
                      </button>
                   </div>
                </div>
              </div>
            </div>

            {/* Quick User Management preview */}
            <div className="bg-[#0A0D14] rounded-2xl border border-white/5 overflow-hidden">
               <div className="p-5 border-b border-white/5 flex justify-between items-center bg-black/20">
                  <h3 className="font-bold text-sm text-gray-400 uppercase tracking-widest">Recent Registrations</h3>
                  <button onClick={() => setActiveTab('User Management')} className="text-[#00FF41] text-xs font-bold uppercase tracking-wider hover:underline flex items-center gap-1">
                    View All <ArrowUpRight className="w-3 h-3" />
                  </button>
               </div>
               <div className="overflow-x-auto">
                 <table className="w-full text-left text-sm whitespace-nowrap">
                   <thead>
                     <tr className="border-b border-white/5 text-gray-500 uppercase tracking-wider text-[10px] font-bold">
                       <th className="px-6 py-4">User ID</th>
                       <th className="px-6 py-4">Name</th>
                       <th className="px-6 py-4">Email</th>
                       <th className="px-6 py-4">Plan / Access</th>
                       <th className="px-6 py-4">Status</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-white/5">
                     {recentUsers.map((user) => (
                       <tr key={user.id} className="hover:bg-white/5 transition-colors group cursor-pointer" onClick={() => setActiveTab('User Management')}>
                         <td className="px-6 py-4 font-mono text-gray-500 text-xs">{user.id}</td>
                         <td className="px-6 py-4 font-bold text-white">{user.name}</td>
                         <td className="px-6 py-4 text-gray-400 text-xs">{user.email}</td>
                         <td className="px-6 py-4">
                           <span className="text-brand-gold text-xs font-bold bg-brand-gold/10 px-2 py-1 rounded">{user.plan}</span>
                         </td>
                         <td className="px-6 py-4">
                           <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded ${user.status === 'Active' ? 'text-[#00FF41] bg-[#00FF41]/10' : 'text-orange-400 bg-orange-400/10'}`}>{user.status}</span>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </div>
          </div>
        )}

        {/* PAYMENTS & REVENUE TAB */}
        {activeTab === 'Payments & Revenue' && (
          <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in duration-300 relative z-10">
             <div className="flex justify-between items-center bg-[#0A0D14] p-6 rounded-2xl border border-brand-gold/30 shadow-lg">
                <div>
                   <h2 className="text-2xl font-black text-white flex items-center gap-2">
                     <CreditCard className="text-brand-gold" /> Payment Verification Hub
                   </h2>
                   <p className="text-gray-400 mt-1 text-sm">Approve or reject manual payments and proofs of payment.</p>
                </div>
             </div>
             
             <div className="bg-[#0A0D14] rounded-2xl border border-white/5 p-8 max-w-5xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-sm text-gray-400 uppercase tracking-widest">Pending Manual Transactions</h3>
                  <div className="relative">
                    <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input type="text" placeholder="Search ID or Email..." className="bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white focus:border-brand-gold focus:outline-none transition-colors" />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead>
                      <tr className="border-b border-white/10 text-gray-500 uppercase tracking-wider text-xs font-bold">
                        <th className="px-6 py-4">Transaction ID</th>
                        <th className="px-6 py-4">User</th>
                        <th className="px-6 py-4">Product</th>
                        <th className="px-6 py-4">Amount</th>
                        <th className="px-6 py-4">Method / Proof</th>
                        <th className="px-6 py-4">Date</th>
                        <th className="px-6 py-4 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {pendingPayments.map(trx => (
                        <tr key={trx.id} className="hover:bg-white/5 transition-colors">
                          <td className="px-6 py-4 font-mono text-gray-300 text-xs">{trx.id}</td>
                          <td className="px-6 py-4 font-medium text-white">{trx.user}</td>
                          <td className="px-6 py-4 text-brand-gold font-semibold text-xs">{trx.product}</td>
                          <td className="px-6 py-4 font-mono font-bold text-white">{trx.amount}</td>
                          <td className="px-6 py-4">
                            <div className="text-xs text-gray-400 mb-1">{trx.method}</div>
                            <button className="text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider hover:bg-blue-500/20 transition-colors">View Proof</button>
                          </td>
                          <td className="px-6 py-4 text-gray-400 text-xs">{trx.date}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-center gap-2">
                                <button className="p-2 bg-[#00FF41]/10 hover:bg-[#00FF41]/20 text-[#00FF41] rounded-lg transition-colors border border-[#00FF41]/20" title="Approve Payment">
                                  <Check className="w-4 h-4" />
                                </button>
                                <button className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-lg transition-colors border border-red-500/20" title="Reject">
                                  <X className="w-4 h-4" />
                                </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
             </div>
          </div>
        )}

        {/* OTHER ADMIN TABS */}
        {sidebarLinks.map(link => link.name).filter(n => !['Overview', 'Payments & Revenue'].includes(n)).includes(activeTab) && (
          <div className="max-w-5xl mx-auto flex flex-col items-center justify-center py-32 animate-in fade-in relative z-10 text-center">
             <div className="w-24 h-24 bg-white/5 rounded-3xl flex items-center justify-center border border-white/10 mb-8 shadow-2xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-[#00FF41]/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"/>
               <Settings className="w-10 h-10 text-gray-500" />
             </div>
             <h2 className="text-3xl font-heading font-black text-white mb-3 uppercase tracking-widest">{activeTab}</h2>
             <p className="text-gray-400 mb-10 max-w-md text-sm leading-relaxed">
               This administration module is loaded securely. Full management capabilities for {activeTab.toLowerCase()} will be displayed here.
             </p>
             <button onClick={() => setActiveTab('Overview')} className="bg-[#00FF41]/10 border border-[#00FF41]/20 text-[#00FF41] font-bold px-8 py-3 rounded-lg hover:bg-[#00FF41]/20 transition-all uppercase tracking-wider text-xs">
               Return to Overview
             </button>
          </div>
        )}

      </main>
    </div>
  );
}

function ServerIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
      <line x1="6" y1="6" x2="6.01" y2="6"/>
      <line x1="6" y1="18" x2="6.01" y2="18"/>
    </svg>
  );
}
