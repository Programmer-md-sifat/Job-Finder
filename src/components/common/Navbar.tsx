import React, { useState } from 'react';
import { 
  Briefcase, 
  Building2, 
  Home as HomeIcon, 
  Info, 
  Menu, 
  X, 
  Bookmark, 
  PlusCircle, 
  User, 
  Sparkles,
  Search
} from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  activePage: 'home' | 'jobs' | 'companies' | 'aboutus';
  setActivePage: (page: 'home' | 'jobs' | 'companies' | 'aboutus') => void;
  savedJobsCount: number;
  onOpenSavedJobs?: () => void;
  onOpenPostJobModal?: () => void;
  onOpenAuthModal?: () => void;
}

export default function Navbar({
  activePage,
  setActivePage,
  savedJobsCount,
  onOpenSavedJobs,
  onOpenPostJobModal,
  onOpenAuthModal,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'jobs', label: 'Jobs', icon: Briefcase },
    { id: 'companies', label: 'Companies', icon: Building2 },
    { id: 'aboutus', label: 'About Us', icon: Info },
  ] as const;

  const handleNavClick = (pageId: 'home' | 'jobs' | 'companies' | 'aboutus') => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#182956] text-white border-b border-[#182956]/40 shadow-lg backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="focus:outline-none focus:ring-2 focus:ring-[#F66E3B] rounded-lg p-1 text-left"
            id="navbar-logo-btn"
          >
            <Logo size="md" layout="horizontal" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#223872]/60 p-1.5 rounded-xl border border-[#223872]">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#F66E3B] text-white shadow-md font-semibold'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#FCB2B1]'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Saved Jobs Button */}
            <button
              id="btn-saved-jobs"
              onClick={onOpenSavedJobs}
              className="relative p-2.5 rounded-xl bg-[#223872] hover:bg-[#2c478a] text-white transition-colors border border-white/10"
              title="Saved Jobs"
            >
              <Bookmark className="w-5 h-5 text-[#FCB2B1]" />
              {savedJobsCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#F66E3B] text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-[#182956]">
                  {savedJobsCount}
                </span>
              )}
            </button>

            {/* Post Job Button */}
            <button
              id="btn-post-job"
              onClick={onOpenPostJobModal}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#F66E3B] to-[#e05927] hover:opacity-95 text-white font-medium text-sm shadow-md transition-all active:scale-95"
            >
              <PlusCircle className="w-4 h-4" />
              <span>For Employers</span>
            </button>

            {/* Sign In Button */}
            <button
              id="btn-sign-in"
              onClick={onOpenAuthModal}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/20 transition-all"
            >
              <User className="w-4 h-4 text-[#FCB2B1]" />
              <span>Sign In</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenSavedJobs}
              className="relative p-2 rounded-lg bg-[#223872] text-white"
            >
              <Bookmark className="w-5 h-5 text-[#FCB2B1]" />
              {savedJobsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#F66E3B] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {savedJobsCount}
                </span>
              )}
            </button>

            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#223872] text-white hover:bg-[#2c478a] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0f1a38] border-b border-[#223872] px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2.5 p-3 rounded-xl text-sm font-medium w-full text-left transition-colors ${
                    isActive
                      ? 'bg-[#F66E3B] text-white font-semibold'
                      : 'bg-[#182956] text-white/90 hover:bg-[#223872]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#FCB2B1]'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[#223872] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPostJobModal?.();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#F66E3B] text-white font-medium text-sm shadow-sm"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Post a Job (Employers)</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuthModal?.();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#223872] text-white font-medium text-sm border border-white/10"
            >
              <User className="w-4 h-4 text-[#FCB2B1]" />
              <span>Candidate Sign In / Register</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
