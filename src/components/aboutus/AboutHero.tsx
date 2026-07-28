import React from 'react';
import { ABOUT_DATA } from '../../data/aboutData';
import { ShieldCheck, Target, Eye, Sparkles, MapPin } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="py-16 bg-[#182956] text-white border-b border-[#223872]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          
          <h1 className="font-space text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Connecting High-Caliber US Talent with America’s Greatest Employers
          </h1>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed">
            {ABOUT_DATA.tagline}
          </p>
        </div>

        {/* Mission & Vision Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#223872]/60 p-8 rounded-3xl border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F66E3B] text-white flex items-center justify-center font-bold shadow-md">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="font-space font-bold text-2xl text-white">Our Mission</h2>
            <p className="text-white/80 text-sm leading-relaxed">
              {ABOUT_DATA.mission}
            </p>
          </div>

          <div className="bg-[#223872]/60 p-8 rounded-3xl border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FCB2B1] text-[#182956] flex items-center justify-center font-bold shadow-md">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="font-space font-bold text-2xl text-white">Our Vision</h2>
            <p className="text-white/80 text-sm leading-relaxed">
              {ABOUT_DATA.vision}
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="bg-[#0f1a38] p-8 sm:p-10 rounded-3xl border border-[#223872] space-y-4">
          <h2 className="font-space font-bold text-2xl text-white">
            The Chakri Story
          </h2>
          <div className="space-y-3 text-sm text-white/80 leading-relaxed">
            {ABOUT_DATA.story.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
