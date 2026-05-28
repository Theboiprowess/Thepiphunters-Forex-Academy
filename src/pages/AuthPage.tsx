import { Link, useNavigate } from 'react-router-dom';
import { Activity, Mail, Lock, User } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function AuthPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const { login } = useAuth();
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLogin) {
      setIsLogin(true);
      setSignupSuccess(true);
      // Clear success message after a while
      setTimeout(() => setSignupSuccess(false), 8000);
    } else {
      login();
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6 py-20">
      <div className="w-full max-w-md">
        
        {signupSuccess && (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-2xl text-green-400 text-sm text-center font-medium">
            Account created successfully! Please check your email to verify your account before logging in.
          </div>
        )}

        <div className="glass border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[80px] pointer-events-none -z-10" />
          
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 flex justify-center">
               <img src="/logo.png" alt="THEPIPHUNTERS FOREX ACADEMY Logo" className="h-16 w-auto object-contain" />
            </div>
            <h1 className="text-2xl font-heading font-bold text-white">
              {isLogin ? 'Welcome Back' : 'Create an Account'}
            </h1>
            <p className="text-gray-400 text-sm mt-2">
              {isLogin ? 'Log in to access your VIP dashboard.' : 'Sign up for free to join THEPIPHUNTERS FOREX ACADEMY.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {!isLogin && (
              <div>
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-brand-gold text-white transition-colors"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input 
                  type="email" 
                  placeholder="trader@example.com" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-brand-gold text-white transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-brand-gold text-white transition-colors"
                  required
                />
              </div>
            </div>

            {isLogin && (
              <div className="flex justify-between items-center mt-2 mb-4">
                <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
                  <input type="checkbox" className="rounded border-white/10 bg-black/50 text-brand-gold focus:ring-brand-gold focus:ring-offset-0" />
                  Remember me
                </label>
                <a href="#" className="text-sm font-medium text-brand-gold hover:text-brand-gold-muted transition-colors">Forgot password?</a>
              </div>
            )}

            <button type="submit" className={`w-full bg-brand-gold hover:bg-brand-gold-muted text-brand-black font-bold py-3.5 rounded-2xl transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)] ${!isLogin ? 'mt-4' : ''}`}>
              {isLogin ? 'Sign In to Dashboard' : 'Create Free Account'}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
