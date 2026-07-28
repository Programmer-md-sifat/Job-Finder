import React from 'react';
import { US_COMPANIES_DATA, Company } from '../../data/companiesData';
import CompanyLogo from '../common/CompanyLogo';
import { Building2, MapPin, Star, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

interface FeaturedCompaniesSectionProps {
  onSelectCompany: (company: Company) => void;
  onViewAllCompanies: () => void;
}

export default function FeaturedCompaniesSection({
  onSelectCompany,
  onViewAllCompanies
}: FeaturedCompaniesSectionProps) {
  const featured = US_COMPANIES_DATA.filter((c) => c.isFeatured).slice(0, 4);

  return (
    <section className="py-16 bg-white text-[#182956]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#182956] bg-[#182956]/10 px-3 py-1 rounded-full mb-2">
              Verified Hiring Partners
            </div>
            <h2 className="font-space text-3xl sm:text-4xl font-bold tracking-tight text-[#182956]">
              Top US Companies Actively Hiring
            </h2>
          </div>
          <button
            onClick={onViewAllCompanies}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#182956] hover:bg-[#223872] text-white font-medium text-sm transition-all shadow-sm self-start md:self-auto"
          >
            <span>View All Companies</span>
            <ArrowRight className="w-4 h-4 text-[#FCB2B1]" />
          </button>
        </div>

        {/* Company Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((comp) => (
            <div
              key={comp.id}
              onClick={() => onSelectCompany(comp)}
              className="bg-[#EFECEC]/60 p-6 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Header with Logo Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md p-1.5 shrink-0 border border-gray-100">
                    <CompanyLogo companyName={comp.name} className="w-full h-full" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    {comp.rating}
                  </span>
                </div>

                {/* Company Name & Industry */}
                <h3 className="font-space font-bold text-lg text-[#182956] hover:text-[#F66E3B] transition-colors mb-1 line-clamp-1">
                  {comp.name}
                </h3>
                <p className="text-xs font-medium text-[#F66E3B] mb-3">
                  {comp.industry}
                </p>

                {/* Info List */}
                <div className="space-y-2 text-xs text-gray-600 mb-4">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span className="truncate">{comp.headquarters}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span className="truncate">{comp.employeeCount}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#182956] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Verified US Employer</span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
                <span className="text-xs font-bold text-[#182956] bg-white px-3 py-1 rounded-lg border border-gray-200">
                  {comp.openRolesCount} Open Roles
                </span>
                <span className="text-xs font-semibold text-[#F66E3B] flex items-center gap-1">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
