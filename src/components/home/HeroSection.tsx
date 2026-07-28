import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Sparkles, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';
import { JOB_LOCATIONS_USA, JOB_DEPARTMENTS } from '../../data/jobsData';
import CustomSelect from '../common/CustomSelect';

interface HeroSectionProps {
  onSearch: (keywords: string, location: string, department: string) => void;
  onSelectCategory: (category: string) => void;
}

export default function HeroSection({ onSearch, onSelectCategory }: HeroSectionProps) {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('All US Locations');
  const [department, setDepartment] = useState('All Departments');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(keyword, location, department);
  };

  const trendingTags = [
    { label: 'Remote Software Engineer', query: 'Software Engineer' },
    { label: 'AI & LLM Specialist', query: 'AI' },
    { label: 'San Francisco CA', city: 'San Francisco, CA' },
    { label: 'Product Manager NYC', query: 'Product Manager' },
    { label: 'Austin FinTech', query: 'FinTech' },
  ];

  return (
    <section 
      className="relative text-white overflow-hidden pt-12 pb-20 md:py-24 border-b border-[#223872] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')` }}
    >
      {/* Deep premium dark blue/navy gradient overlay to make text pop while keeping the background image beautifully visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111f48]/92 via-[#182956]/88 to-[#0f1a38]/95 pointer-events-none"></div>

      {/* Premium subtle linear gradient overlays that give depth without being overpowering */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(246,110,59,0.06)_0%,transparent_50%,rgba(252,178,177,0.04)_100%)] pointer-events-none"></div>
      
      {/* Soft top-to-bottom shading for a balanced experience */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/5 pointer-events-none"></div>

      {/* Extremely faint horizontal accent lines representing a clean corporate grid */}
      <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          

          {/* Heading in Lexend */}
          <h1 className="font-space text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Find Your Dream Job Across the <span className="text-[#F66E3B]">United States</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-normal leading-relaxed">
            Search over <strong className="text-white font-semibold">150,000+ verified US jobs</strong> from Fortune 500 enterprises, AI unicorns, and top high-growth tech hubs.
          </p>

          {/* Search Box Form */}
          <form 
            onSubmit={handleSubmit}
            className="bg-[#EFECEC] p-3 rounded-2xl shadow-2xl border-4 border-white/10 text-[#182956] grid grid-cols-1 md:grid-cols-12 gap-2 text-left"
          >
            {/* Keyword Input */}
            <div className="md:col-span-5 relative flex items-center bg-white rounded-xl px-4 py-3 border border-gray-200 focus-within:border-[#F66E3B] focus-within:ring-2 focus-within:ring-[#F66E3B]/10 transition-all duration-200">
              <Search className="w-5 h-5 text-[#182956]/60 mr-2.5 shrink-0" />
              <input
                type="text"
                placeholder="Job title, skill (e.g. React, AI, Product Manager)..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full bg-transparent text-sm font-medium focus:outline-none placeholder:text-gray-400 text-[#182956]"
              />
            </div>

            {/* Location Select */}
            <div className="md:col-span-3">
              <CustomSelect
                value={location}
                onChange={setLocation}
                options={JOB_LOCATIONS_USA}
                icon={<MapPin className="w-5 h-5 text-[#F66E3B] shrink-0" />}
              />
            </div>

            {/* Department Select */}
            <div className="md:col-span-2">
              <CustomSelect
                value={department}
                onChange={setDepartment}
                options={JOB_DEPARTMENTS}
                icon={<Briefcase className="w-5 h-5 text-[#182956]/60 shrink-0" />}
              />
            </div>

            {/* Search Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                id="btn-hero-search-submit"
                className="w-full h-full min-h-[46px] bg-gradient-to-r from-[#F66E3B] to-[#e05927] hover:opacity-95 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
              >
                <span>Search Jobs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Trending Searches */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-[#FCB2B1] font-semibold flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5 text-[#F66E3B]" /> Trending US Searches:
            </span>
            {trendingTags.map((tag) => (
              <button
                key={tag.label}
                onClick={() => {
                  if (tag.query) setKeyword(tag.query);
                  if (tag.city) setLocation(tag.city);
                  onSearch(tag.query || '', tag.city || 'All US Locations', 'All Departments');
                }}
                className="px-3 py-1 rounded-full bg-[#223872] hover:bg-[#F66E3B] text-white/90 hover:text-white transition-colors border border-white/10"
              >
                {tag.label}
              </button>
            ))}
          </div>

          {/* Key Metrics Counter Strip */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-[#223872]">
            <div className="p-4 rounded-xl bg-[#223872]/50 border border-white/5 text-center">
              <span className="font-space font-bold text-2xl sm:text-3xl text-white block">
                150,000+
              </span>
              <span className="text-xs text-[#FCB2B1] font-medium uppercase tracking-wider block mt-0.5">
                Active US Openings
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#223872]/50 border border-white/5 text-center">
              <span className="font-space font-bold text-2xl sm:text-3xl text-[#F66E3B] block">
                12,500+
              </span>
              <span className="text-xs text-[#FCB2B1] font-medium uppercase tracking-wider block mt-0.5">
                Verified US Employers
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#223872]/50 border border-white/5 text-center">
              <span className="font-space font-bold text-2xl sm:text-3xl text-white block">
                $142,000
              </span>
              <span className="text-xs text-[#FCB2B1] font-medium uppercase tracking-wider block mt-0.5">
                Avg Placed USD Salary
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#223872]/50 border border-white/5 text-center">
              <span className="font-space font-bold text-2xl sm:text-3xl text-[#FCB2B1] block">
                50 States
              </span>
              <span className="text-xs text-white/80 font-medium uppercase tracking-wider block mt-0.5">
                Full US Coverage
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
