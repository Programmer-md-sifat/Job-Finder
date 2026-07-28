import React, { useState } from 'react';
import { Bell, CheckCircle2, Mail, ArrowRight, ShieldCheck, Zap, Inbox } from 'lucide-react';

export default function EmailSubscribe() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-[#EFECEC]" id="email-subscribe-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#182956] to-[#0d1733] p-8 sm:p-14 rounded-3xl border border-[#223872] shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Background subtle glowing circles for professional depth */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/[0.02] pointer-events-none" />
          <div className="absolute -bottom-36 -left-36 w-96 h-96 rounded-full bg-[#F66E3B]/[0.03] pointer-events-none" />

          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F66E3B] text-white text-xs font-bold uppercase tracking-wider">
              <Bell className="w-3.5 h-3.5 animate-pulse" />
              Instant US Job Alerts
            </div>

            <h2 className="font-space text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Get the latest USA tech jobs sent directly to your inbox
            </h2>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl">
              Never miss a high-paying role. Tell us your career interests, and we will send you curated US job openings with 100% verified salary ranges, direct company contacts, and application guides.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-xl pt-2">
              <div className="relative flex-grow">
                <Mail className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
                <input
                  type="email"
                  required
                  placeholder="Enter your professional email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white text-[#182956] text-sm font-medium pl-12 pr-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F66E3B] placeholder:text-gray-400 transition-all shadow-inner"
                />
              </div>

              <button
                type="submit"
                className="px-7 py-3.5 rounded-xl bg-[#F66E3B] hover:bg-[#e05927] text-white font-bold text-sm transition-all shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-2 shrink-0 group"
              >
                <span>Subscribe Free</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>

            {subscribed && (
              <div className="p-4 bg-emerald-950/60 border border-emerald-500/30 text-emerald-200 text-sm font-medium rounded-xl flex items-center gap-2.5 max-w-xl transition-all animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Excellent! You've joined the list. Check your email for validation and custom alert settings.</span>
              </div>
            )}

            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-[#FCB2B1]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#F66E3B]" /> No spam guarantee
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#F66E3B]" /> Matches sent daily
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F66E3B]" /> 1-click unsubscribe anytime
              </span>
            </div>
          </div>

          {/* Right Visual Column - Custom Illustration replacing the QR Code */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative z-10">
            <div className="bg-[#1e3061]/80 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl max-w-sm w-full relative overflow-hidden">
              {/* Absract decorative geometric shape */}
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-[#F66E3B]/10 blur-xl pointer-events-none" />
              
              <div className="flex flex-col items-center text-center space-y-5">
                <div className="w-16 h-16 rounded-2xl bg-[#F66E3B]/15 text-[#F66E3B] flex items-center justify-center border border-[#F66E3B]/25">
                  <Inbox className="w-8 h-8" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-space font-bold text-white text-xl">The Chakri Digest</h3>
                  <p className="text-sm text-[#FCB2B1]">
                    Join over 45,000+ tech professionals getting early-access USA job matches.
                  </p>
                </div>

                {/* Simulated newsletter benefits list */}
                <div className="w-full space-y-3 text-left pt-2 border-t border-white/10">
                  <div className="flex items-start gap-2.5 text-xs text-white/90">
                    <span className="w-5 h-5 rounded-full bg-[#F66E3B]/20 text-[#F66E3B] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
                    <span>Exclusive listings not posted on traditional boards.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-white/90">
                    <span className="w-5 h-5 rounded-full bg-[#F66E3B]/20 text-[#F66E3B] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
                    <span>Accurate salary bands and transparency stats.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-white/90">
                    <span className="w-5 h-5 rounded-full bg-[#F66E3B]/20 text-[#F66E3B] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
                    <span>Direct recruiter contacts and warm introductions.</span>
                  </div>
                </div>

                <div className="text-[11px] text-white/50 pt-1">
                  Trusted by applicants at Google, Stripe, Netflix & more.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
