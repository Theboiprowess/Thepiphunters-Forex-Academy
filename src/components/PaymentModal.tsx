import { X, Copy, CheckCircle2, UploadCloud, Loader2, Download } from 'lucide-react';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  price: string;
}

export default function PaymentModal({ isOpen, onClose, productName, price }: PaymentModalProps) {
  const [copiedText, setCopiedText] = useState('');
  const [hasPaid, setHasPaid] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(''), 2000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setHasPaid(true);
      setIsVerifying(true);
      // Removed the simulate automated verification timeout - it stays pending
    }
  };

  const isVipSignal = productName.toLowerCase().includes('vip') || productName.toLowerCase().includes('signal');

  const resetAndClose = () => {
    setTimeout(() => {
      setHasPaid(false);
      setIsVerifying(false);
      setIsVerified(false);
    }, 500);
    onClose();
  };

  const paymentMethods = [
    { name: "PayPal", details: "chiromboprowess9@gmail.com" },
    { name: "Binance ID (Crypto)", details: "1169583167" },
    { name: "EcoCash (Zimbabwe)", details: "0786544933" }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={resetAndClose}
        ></motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-brand-navy border border-brand-gold/30 rounded-3xl p-8 shadow-2xl z-10"
        >
          <button 
            onClick={resetAndClose}
            className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors bg-white/5 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>

          {!hasPaid && !isVerified && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold font-heading text-white mb-2">Complete Payment</h2>
                <p className="text-gray-400 text-sm">
                  You are purchasing <strong className="text-brand-gold">{productName}</strong> for <strong className="text-white">{price}</strong>
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">Payment Methods</p>
                {paymentMethods.map((method, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-brand-gold mb-1">{method.name}</div>
                      <div className="font-bold text-white tracking-wide">{method.details}</div>
                    </div>
                    <button 
                      onClick={() => handleCopy(method.details)}
                      className="p-2 bg-white/10 hover:bg-brand-gold hover:text-black transition-colors rounded-xl text-gray-300 flex items-center gap-2"
                    >
                      {copiedText === method.details ? <CheckCircle2 className="w-4 h-4 text-brand-neon" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                ))}
              </div>

              <div className="bg-brand-gold/5 border border-brand-gold/20 rounded-2xl p-6 text-center">
                <p className="text-sm text-gray-300 mb-4">
                  Once you've completed the transfer, upload the receipt/screenshot here for automated verification.
                </p>
                <input 
                  type="file" 
                  accept="image/*,.pdf" 
                  className="hidden" 
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                />
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-brand-gold text-black font-bold py-3 px-8 rounded-2xl hover:bg-brand-gold-muted transition-colors flex items-center gap-2 mx-auto"
                >
                  <UploadCloud className="w-5 h-5" /> Upload Proof of Payment
                </button>
              </div>
            </motion.div>
          )}

          {isVerifying && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
               <Loader2 className="w-16 h-16 text-brand-gold animate-spin mx-auto mb-6" />
               <h3 className="text-2xl font-bold text-white mb-4">Payment Under Review</h3>
               <p className="text-gray-400 mb-6 px-4">
                 Thank you! Your proof of payment has been submitted. Our admin team will verify it shortly. You can check the status in your dashboard.
               </p>
               {isVipSignal ? (
                 <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-xl p-4 max-w-sm mx-auto mb-6">
                   <p className="text-brand-gold text-sm font-bold mb-3">VIP Signals Access Process:</p>
                   <p className="text-gray-300 text-xs mb-4">Once your transaction is approved, you will be granted access to the VIP Telegram channel.</p>
                   <a 
                     href="https://t.me/thepiphunter_zw" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="bg-brand-gold hover:bg-yellow-500 text-black font-bold py-2.5 px-6 rounded-lg transition-colors flex justify-center items-center gap-2"
                   >
                     Message Admin on Telegram
                   </a>
                 </div>
               ) : (
                 <button onClick={resetAndClose} className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-xl transition-colors">
                   Return to Dashboard
                 </button>
               )}
            </motion.div>
          )}

          {isVerified && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8">
               <div className="w-20 h-20 bg-brand-neon/10 rounded-full border-2 border-brand-neon flex items-center justify-center mx-auto mb-6">
                 <CheckCircle2 className="w-10 h-10 text-brand-neon" />
               </div>
               <h3 className="text-3xl font-bold font-heading text-white mb-2">Payment Verified!</h3>
               <p className="text-gray-400 mb-8 px-4">
                 Thank you for your purchase of {productName}. Your files and access details are ready.
               </p>
               <div className="flex flex-col gap-3 max-w-xs mx-auto">
                 <button className="bg-brand-gold text-black font-bold py-3 px-6 rounded-2xl hover:bg-brand-gold-muted transition-colors flex items-center justify-center gap-2">
                   <Download className="w-5 h-5" /> Download Product
                 </button>
                 <a 
                   href="https://t.me/thepiphunter_zw" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="bg-white/10 text-white font-bold py-3 px-6 rounded-2xl hover:bg-white/20 transition-colors"
                 >
                   Join Final Check on Telegram
                 </a>
               </div>
            </motion.div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
