import React from 'react';
import { Company } from '../../data/companiesData';
import CompanyLogo from '../common/CompanyLogo';
import { 
  X, 
  MapPin, 
  Users, 
  Globe, 
  Building2, 
  Star, 
  CheckCircle2, 
  ShieldCheck, 
  Briefcase, 
  ArrowRight,
  Award
} from 'lucide-react';

interface CompanyDetailModalProps {
  company: Company | null;
  onClose: () => void;
  onViewJobsForCompany: (companyName: string) => void;
}

export default function CompanyDetailModal({
  company,
  onClose,
  onViewJobsForCompany,
}: CompanyDetailModalProps) {
  if (!company) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white text-[#182956] w-full max-w-3xl max-h-[90vh] rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col">
        
        {/* Header Banner */}
        <div className="p-6 bg-[#182956] text-white flex items-center justify-between border-b border-[#223872]">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg p-1.5 shrink-0 border border-white/20">
              <CompanyLogo companyName={company.name} className="w-full h-full" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-[#FCB2B1] bg-[#223872] px-2.5 py-0.5 rounded-full">
                  {company.companyType}
                </span>
                <span className="text-xs text-white/60">Est. {company.foundedYear}</span>
              </div>
              <h2 className="font-space text-2xl font-bold text-white">
                {company.name}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scroll Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          
          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-gray-200">
              <span className="text-gray-400 block font-medium">Headquarters</span>
              <span className="font-bold text-[#182956] truncate block">{company.headquarters}</span>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-gray-200">
              <span className="text-gray-400 block font-medium">Company Size</span>
              <span className="font-bold text-[#182956]">{company.employeeCount}</span>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-gray-200">
              <span className="text-gray-400 block font-medium">Glassdoor Rating</span>
              <span className="font-bold text-amber-700 flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                {company.rating} / 5.0
              </span>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-gray-200">
              <span className="text-gray-400 block font-medium">Open Positions</span>
              <span className="font-bold text-[#F66E3B]">{company.openRolesCount} Active Roles</span>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h3 className="font-space font-bold text-base text-[#182956] uppercase tracking-wider text-xs">
              Company Overview & Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {company.overview}
            </p>
          </div>

          {/* Culture Values */}
          <div className="space-y-2">
            <h3 className="font-space font-bold text-base text-[#182956] uppercase tracking-wider text-xs">
              Core Cultural Pillars
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {company.cultureValues.map((val, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-gray-200 flex items-center gap-2 text-xs font-semibold text-[#182956]">
                  <CheckCircle2 className="w-4 h-4 text-[#F66E3B] shrink-0" />
                  <span>{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Employee Perks */}
          <div className="space-y-2">
            <h3 className="font-space font-bold text-base text-[#182956] uppercase tracking-wider text-xs">
              Employee Benefits & Perks
            </h3>
            <ul className="space-y-2 text-xs text-gray-700">
              {company.benefits.map((ben, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{ben}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h3 className="font-space font-bold text-base text-[#182956] uppercase tracking-wider text-xs">
              Engineering Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {company.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-lg bg-[#182956] text-white text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Office Locations */}
          <div className="space-y-2">
            <h3 className="font-space font-bold text-base text-[#182956] uppercase tracking-wider text-xs">
              US Office Hubs
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {company.officeLocations.map((loc) => (
                <span key={loc} className="px-3 py-1.5 rounded-xl bg-slate-100 text-[#182956] font-semibold border border-gray-200 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#F66E3B]" /> {loc}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between gap-4">
          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#182956] hover:text-[#F66E3B] flex items-center gap-1"
          >
            <Globe className="w-4 h-4" /> Visit Official Website
          </a>

          <button
            onClick={() => {
              onClose();
              onViewJobsForCompany(company.name);
            }}
            className="px-6 py-2.5 rounded-xl bg-[#F66E3B] hover:bg-[#e05927] text-white font-bold text-sm shadow-md flex items-center gap-2"
          >
            <span>See {company.openRolesCount} Open Roles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
