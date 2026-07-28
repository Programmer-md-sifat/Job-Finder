import React from 'react';
import { Company } from '../../data/companiesData';
import CompanyLogo from '../common/CompanyLogo';
import { Building2, MapPin, Users, Star, ArrowRight, Globe, CheckCircle2 } from 'lucide-react';

interface CompanyCardProps {
  company: Company;
  onSelectCompany: (company: Company) => void;
  onViewJobsForCompany?: (companyName: string) => void;
}

export default function CompanyCard({
  company,
  onSelectCompany,
  onViewJobsForCompany,
}: CompanyCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 flex flex-col justify-between group">
      
      <div>
        {/* Top Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center shadow-md shrink-0 border border-gray-100 p-1.5">
              <CompanyLogo companyName={company.name} className="w-full h-full" />
            </div>
            <div>
              <h3 
                onClick={() => onSelectCompany(company)}
                className="font-space font-bold text-lg text-[#182956] group-hover:text-[#F66E3B] transition-colors cursor-pointer leading-tight"
              >
                {company.name}
              </h3>
              <p className="text-xs font-semibold text-[#F66E3B] mt-0.5">
                {company.industry}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              {company.rating}
            </span>
            <span className="text-[10px] text-gray-400">
              ({company.reviewsCount} reviews)
            </span>
          </div>
        </div>

        {/* Company Overview Snippet */}
        <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-2">
          {company.overview}
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-4 bg-slate-50 p-3 rounded-xl border border-gray-100">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#F66E3B] shrink-0" />
            <span className="truncate">{company.headquarters}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-[#182956] shrink-0" />
            <span className="truncate">{company.employeeCount}</span>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1.5">
            Tech Stack:
          </span>
          <div className="flex flex-wrap gap-1">
            {company.techStack.slice(0, 5).map((tech) => (
              <span key={tech} className="text-[11px] font-medium text-[#182956] bg-gray-100 px-2.5 py-0.5 rounded-md">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
        <button
          onClick={() => onSelectCompany(company)}
          className="text-xs font-bold text-[#182956] hover:text-[#F66E3B] transition-colors"
        >
          Company Overview
        </button>

        <button
          onClick={() => onViewJobsForCompany?.(company.name)}
          className="px-4 py-2 rounded-xl bg-[#182956] hover:bg-[#F66E3B] text-white font-bold text-xs transition-colors shadow-sm flex items-center gap-1"
        >
          <span>{company.openRolesCount} Open Jobs</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
}
