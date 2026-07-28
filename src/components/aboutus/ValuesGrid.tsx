import React from 'react';
import { ABOUT_DATA } from '../../data/aboutData';
import { BadgeDollarSign, ShieldCheck, Lock, Users } from 'lucide-react';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  BadgeDollarSign,
  ShieldCheck,
  Lock,
  Users,
};

export default function ValuesGrid() {
  return (
    <section className="py-16 bg-[#EFECEC] text-[#182956]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F66E3B] bg-[#F66E3B]/10 px-3 py-1 rounded-full">
            Our Core Commitments
          </div>
          <h2 className="font-space text-3xl font-bold tracking-tight text-[#182956]">
            Built on Principles of Pay Transparency & Data Security
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_DATA.coreValues.map((val) => {
            const Icon = ICON_MAP[val.icon] || ShieldCheck;

            return (
              <div
                key={val.title}
                className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-sm space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-[#182956] text-[#FCB2B1] flex items-center justify-center shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-space font-bold text-lg text-[#182956]">
                  {val.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
