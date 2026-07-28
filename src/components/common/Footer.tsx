import React from 'react';
import { 
  Briefcase, 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Lock, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  setActivePage: (page: 'home' | 'jobs' | 'companies' | 'aboutus') => void;
  onSelectCityFilter?: (city: string) => void;
}

export default function Footer({ setActivePage, onSelectCityFilter }: FooterProps) {
  const usCities = [
    'San Francisco, CA',
    'New York, NY',
    'Austin, TX',
    'Seattle, WA',
    'Chicago, IL',
    'Remote - USA'
  ];

  const popularCategories = [
    'Software Engineering',
    'AI & Data Science',
    'Product Management',
    'Cybersecurity',
    'Healthcare IT',
    'FinTech Solutions'
  ];

  return (
    <footer className="bg-[#182956] text-white pt-16 pb-8 border-t border-[#223872]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#223872]">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" layout="horizontal" />

            <p className="text-white/80 text-sm leading-relaxed max-w-sm">
              America’s dedicated tech and enterprise career hub. We connect verified US talent with leading employers across all 50 states with 100% salary transparency.
            </p>

            <div className="flex items-center gap-4 text-xs text-[#FCB2B1] pt-2">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#F66E3B]" /> Verified US Listings
              </span>
              <span className="flex items-center gap-1">
                <Lock className="w-4 h-4 text-[#FCB2B1]" /> SOC2 Encrypted
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h3 className="font-space font-bold text-base text-white tracking-wide uppercase text-xs text-[#FCB2B1]">
              Explore Chakri
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <button 
                  onClick={() => { setActivePage('home'); window.scrollTo({top: 0, behavior: 'smooth'}); }}
                  className="hover:text-[#F66E3B] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#F66E3B]" /> Home Page
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('jobs'); window.scrollTo({top: 0, behavior: 'smooth'}); }}
                  className="hover:text-[#F66E3B] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#F66E3B]" /> Browse US Jobs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('companies'); window.scrollTo({top: 0, behavior: 'smooth'}); }}
                  className="hover:text-[#F66E3B] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#F66E3B]" /> Top US Employers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('aboutus'); window.scrollTo({top: 0, behavior: 'smooth'}); }}
                  className="hover:text-[#F66E3B] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#F66E3B]" /> About Chakri USA
                </button>
              </li>
            </ul>
          </div>

          {/* Top USA Locations */}
          <div className="space-y-3">
            <h3 className="font-space font-bold text-base text-white tracking-wide uppercase text-xs text-[#FCB2B1]">
              Jobs by US City
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              {usCities.map((city) => (
                <li key={city}>
                  <button
                    onClick={() => {
                      setActivePage('jobs');
                      onSelectCityFilter?.(city);
                      window.scrollTo({top: 0, behavior: 'smooth'});
                    }}
                    className="hover:text-[#F66E3B] transition-colors flex items-center gap-1.5 text-left"
                  >
                    <MapPin className="w-3 h-3 text-[#FCB2B1]" /> {city}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Categories */}
          <div className="space-y-3">
            <h3 className="font-space font-bold text-base text-white tracking-wide uppercase text-xs text-[#FCB2B1]">
              Popular Fields
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              {popularCategories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      setActivePage('jobs');
                      window.scrollTo({top: 0, behavior: 'smooth'});
                    }}
                    className="hover:text-[#F66E3B] transition-colors flex items-center gap-1.5 text-left"
                  >
                    <Briefcase className="w-3 h-3 text-[#FCB2B1]" /> {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <p>© {new Date().getFullYear()} Chakri Inc. All rights reserved. Registered in Delaware, USA.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Equal Opportunity Employer Policy</span>
            <span className="hover:text-white cursor-pointer">US State Pay Transparency Guidelines</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
