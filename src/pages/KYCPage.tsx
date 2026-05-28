import { motion } from 'motion/react';
import { UploadCloud, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function KYCPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="w-full pt-12 pb-32 min-h-[90vh]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-black mb-4">Identity <span className="text-gradient">Verification</span></h1>
          <p className="text-gray-400">Please complete KYC to unlock full access to deposits, withdrawals, and VIP signals.</p>
        </div>

        <div className="glass p-8 rounded-3xl border border-white/10">
          
          <div className="flex items-center justify-between mb-8 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -z-10 -translate-y-1/2"></div>
            {[1, 2, 3].map((num) => (
              <div key={num} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                step >= num ? 'bg-brand-gold text-black' : 'bg-[#050810] border border-white/20 text-gray-500'
              }`}>
                {step > num ? <CheckCircle2 className="w-5 h-5" /> : num}
              </div>
            ))}
          </div>

          {step === 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h3 className="text-xl font-bold mb-6">Personal Details</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div>
                  <label className="text-xs text-gray-400 uppercase font-semibold mb-2 block">First Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold text-white" />
                </div>
                <div>
                  <label className="text-xs text-gray-400 uppercase font-semibold mb-2 block">Last Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold text-white" />
                </div>
                <div>
                  <label className="text-xs text-gray-400 uppercase font-semibold mb-2 block">Date of Birth</label>
                  <input type="date" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold text-white" />
                </div>
                <div>
                  <label className="text-xs text-gray-400 uppercase font-semibold mb-2 block">Country</label>
                  <select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold text-white">
                    <option>Select Country</option>
                    <option>Zimbabwe</option>
                    <option>South Africa</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                  </select>
                </div>
              </div>
              <button 
                onClick={() => setStep(2)}
                className="w-full bg-brand-gold text-black font-bold py-3.5 rounded-2xl hover:bg-brand-gold-muted transition-colors"
              >
                Next Step
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h3 className="text-xl font-bold mb-6">Identity Document</h3>
              <p className="text-sm text-gray-400 mb-6">Upload a clear photo of your Passport, National ID, or Driver's License.</p>
              
              <div className="border-2 border-dashed border-white/20 rounded-2xl p-10 text-center hover:border-brand-gold/50 transition-colors mb-8 cursor-pointer bg-white/5">
                <UploadCloud className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                <p className="font-semibold text-white mb-1">Click to upload document</p>
                <p className="text-xs text-gray-500">JPG, PNG, PDF up to 5MB</p>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => setStep(1)}
                  className="flex-1 bg-white/5 text-white font-bold py-3.5 rounded-2xl hover:bg-white/10 transition-colors border border-white/10"
                >
                  Back
                </button>
                <button 
                  onClick={() => setStep(3)}
                  className="flex-[2] bg-brand-gold text-black font-bold py-3.5 rounded-2xl hover:bg-brand-gold-muted transition-colors"
                >
                  Verify Document
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8">
              <div className="w-20 h-20 bg-brand-neon/10 rounded-full flex items-center justify-center border-2 border-brand-neon mx-auto mb-6">
                <ShieldCheck className="w-10 h-10 text-brand-neon" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Automated Verification</h3>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                Our AI system is checking your documents. This usually takes less than 5 minutes. You will receive an email once approved.
              </p>
              <button 
                onClick={() => setStep(1)}
                className="bg-white/10 text-white font-bold py-3.5 px-8 rounded-2xl hover:bg-white/20 transition-colors"
              >
                Return to Dashboard
              </button>
            </motion.div>
          )}

        </div>
      </div>
    </div>
  );
}
