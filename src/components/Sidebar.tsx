import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { X, LayoutDashboard, User, CreditCard, ArrowDownToLine, ArrowUpFromLine, Users, ShieldCheck, Star, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const { logout } = useAuth();
  
  const menuItems = [
    { icon: <LayoutDashboard className="w-5 h-5"/>, label: "Overview", path: "/dashboard" },
    { icon: <User className="w-5 h-5"/>, label: "My Profile", path: "#" },
    { icon: <ArrowDownToLine className="w-5 h-5"/>, label: "Deposit", path: "#" },
    { icon: <ArrowUpFromLine className="w-5 h-5"/>, label: "Withdraw", path: "#" },
    { icon: <CreditCard className="w-5 h-5"/>, label: "Transactions", path: "#" },
    { icon: <Users className="w-5 h-5"/>, label: "Referrals", path: "#" },
    { icon: <ShieldCheck className="w-5 h-5"/>, label: "KYC Verification", path: "/kyc" },
    { icon: <Star className="w-5 h-5"/>, label: "Write a Review", path: "#" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div 
            initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 bottom-0 w-72 bg-[#050810] border-r border-white/10 z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b border-white/10">
              <span className="font-heading font-bold text-lg text-brand-gold tracking-widest uppercase">Portal</span>
              <button onClick={onClose} className="text-gray-400 hover:text-white p-2">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
              {menuItems.map((item, i) => (
                <Link 
                  key={i} 
                  to={item.path}
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-brand-gold rounded-xl transition-colors font-medium"
                >
                  {item.icon} {item.label}
                </Link>
              ))}
            </div>

            <div className="p-6 border-t border-white/10">
              <button 
                onClick={() => { logout(); onClose(); }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-red-400 hover:bg-red-400/10 rounded-xl transition-colors font-bold"
              >
                <LogOut className="w-5 h-5" /> Sign Out
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
