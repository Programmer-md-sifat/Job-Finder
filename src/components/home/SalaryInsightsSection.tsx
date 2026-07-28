import React, { useState } from 'react';
import { SALARY_BENCHMARKS } from '../../data/homeData';
import { BadgeDollarSign, Calculator, ShieldCheck, CheckCircle, TrendingUp } from 'lucide-react';

export default function SalaryInsightsSection() {
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(0);
  const activeRole = SALARY_BENCHMARKS[selectedRoleIndex];

  return (
    <section className="py-16 bg-[#182956] text-white border-y border-[#223872]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#223872] text-[#FCB2B1] text-xs font-semibold uppercase tracking-wider">
            <BadgeDollarSign className="w-4 h-4 text-[#F66E3B]" />
            US Pay Transparency Guarantee
          </div>
          <h2 className="font-space text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Real USD Salary Insights & Market Benchmarks
          </h2>
          <p className="text-white/80 text-sm sm:text-base">
            Know your market worth before your first interview. All jobs listed on Chakri include verified base salaries, 401(k) matching tiers, and equity details.
          </p>
        </div>

        {/* Salary Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Role Picker List */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="font-space font-bold text-sm text-[#FCB2B1] uppercase tracking-wider mb-2">
              Select US Tech Position
            </h3>
            {SALARY_BENCHMARKS.map((item, idx) => (
              <button
                key={item.role}
                onClick={() => setSelectedRoleIndex(idx)}
                className={`w-full p-4 rounded-xl text-left font-medium text-sm transition-all flex items-center justify-between border ${
                  selectedRoleIndex === idx
                    ? 'bg-[#F66E3B] text-white border-[#F66E3B] shadow-lg font-semibold'
                    : 'bg-[#223872]/60 hover:bg-[#223872] text-white/90 border-white/10'
                }`}
              >
                <span>{item.role}</span>
                <span className="text-xs bg-black/20 px-2 py-0.5 rounded font-mono">
                  {item.mid}
                </span>
              </button>
            ))}
          </div>

          {/* Benchmark Display Card */}
          <div className="lg:col-span-7 bg-[#0f1a38] p-6 sm:p-8 rounded-3xl border border-[#223872] shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-[#223872] pb-4">
              <div>
                <span className="text-xs text-[#FCB2B1] font-semibold uppercase tracking-wider block">
                  Benchmark Analysis
                </span>
                <h3 className="font-space text-2xl font-bold text-white">
                  {activeRole.role}
                </h3>
              </div>
              <div className="p-3 bg-[#F66E3B]/10 rounded-2xl border border-[#F66E3B]/20">
                <Calculator className="w-6 h-6 text-[#F66E3B]" />
              </div>
            </div>

            {/* Salary Tier Cards */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-4 rounded-2xl bg-[#182956] border border-white/10">
                <span className="text-xs text-gray-400 block mb-1">Entry Level</span>
                <span className="font-space font-bold text-lg sm:text-xl text-white block">
                  {activeRole.entry}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F66E3B] text-white shadow-md">
                <span className="text-xs text-white/80 block mb-1 font-semibold">Mid Level (Avg)</span>
                <span className="font-space font-bold text-xl sm:text-2xl block">
                  {activeRole.mid}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#182956] border border-white/10">
                <span className="text-xs text-gray-400 block mb-1">Senior / Lead</span>
                <span className="font-space font-bold text-lg sm:text-xl text-[#FCB2B1] block">
                  {activeRole.senior}
                </span>
              </div>
            </div>

            {/* Extra Benefits Breakdown */}
            <div className="pt-2 text-xs space-y-2 text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FCB2B1]" />
                <span>Includes US 401(k) Employer Match (4% - 6% average)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FCB2B1]" />
                <span>Adjusted for US Metropolitan Living Costs (SF, NYC, Austin, Seattle)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FCB2B1]" />
                <span>100% verified against real W-2 & 1099 offer letters</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
