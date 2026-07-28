import React, { useState } from 'react';
import { X, User, Lock, Mail, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [tab, setTab] = useState<'signin' | 'register'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white text-[#182956] w-full max-w-md rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
        
        {/* Top Header */}
        <div className="p-6 bg-[#182956] text-white flex items-center justify-between border-b border-[#223872]">
          <div>
            <span className="text-xs text-[#FCB2B1] font-bold uppercase tracking-wider block">
              Chakri USA Portal
            </span>
            <h2 className="font-space text-lg font-bold text-white">
              {tab === 'signin' ? 'Sign In to Your Account' : 'Create Free Candidate Profile'}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-gray-200 bg-gray-50 text-xs font-bold">
          <button
            onClick={() => { setTab('signin'); setSubmitted(false); }}
            className={`flex-1 py-3 text-center transition-colors ${
              tab === 'signin' ? 'bg-white text-[#F66E3B] border-b-2 border-[#F66E3B]' : 'text-gray-500 hover:text-[#182956]'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => { setTab('register'); setSubmitted(false); }}
            className={`flex-1 py-3 text-center transition-colors ${
              tab === 'register' ? 'bg-white text-[#F66E3B] border-b-2 border-[#F66E3B]' : 'text-gray-500 hover:text-[#182956]'
            }`}
          >
            New Candidate Account
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="font-space font-bold text-xl text-[#182956]">
                {tab === 'signin' ? 'Welcome Back!' : 'Account Created Successfully!'}
              </h3>
              <p className="text-xs text-gray-600">
                You are logged into the Chakri USA candidate network.
              </p>
              <button
                onClick={onClose}
                className="w-full py-2.5 bg-[#182956] text-white font-bold text-xs rounded-xl"
              >
                Continue Browsing
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              {tab === 'register' && (
                <div className="space-y-1">
                  <label className="font-bold text-[#182956] block">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jordan Lee"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#F66E3B]"
                  />
                </div>
              )}

              <div className="space-y-1">
                <label className="font-bold text-[#182956] block">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="jordan@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#F66E3B]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-[#182956] block">Password *</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#F66E3B]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#F66E3B] hover:bg-[#e05927] text-white font-bold text-sm rounded-xl shadow-md transition-all"
              >
                {tab === 'signin' ? 'Sign In to Account' : 'Create Free Candidate Profile'}
              </button>

              <div className="flex items-center gap-1.5 text-[11px] text-gray-500 justify-center pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Protected by SOC2 Encryption. 100% Free for US Job Seekers.</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
