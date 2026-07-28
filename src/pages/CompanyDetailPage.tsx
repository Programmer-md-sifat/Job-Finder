import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { US_COMPANIES_DATA, Company } from '../data/companiesData';
import CompanyLogo from '../components/common/CompanyLogo';
import { 
  ArrowLeft, 
  MapPin, 
  Users, 
  Globe, 
  Building2, 
  Star, 
  CheckCircle2, 
  Briefcase, 
  ArrowRight,
  Award,
  Calendar,
  Building
} from 'lucide-react';

interface CompanyDetailPageProps {
  onViewJobsForCompany: (companyName: string) => void;
}

export default function CompanyDetailPage({ onViewJobsForCompany }: CompanyDetailPageProps) {
  const { companyId } = useParams<{ companyId: string }>();
  const navigate = useNavigate();

  const company = US_COMPANIES_DATA.find((c) => c.id === companyId);

  if (!company) {
    return (
      <main className="min-h-screen bg-[#EFECEC] text-[#182956] py-16 flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-3xl shadow-xl text-center max-w-md border border-gray-200">
          <Building2 className="w-16 h-16 text-[#F66E3B] mx-auto mb-4" />
          <h2 className="font-space text-2xl font-bold mb-2">Company Not Found</h2>
          <p className="text-gray-600 text-sm mb-6">
            We couldn't find the company you were looking for. It might have been removed or the URL is incorrect.
          </p>
          <button
            onClick={() => navigate('/companies')}
            className="px-6 py-3 bg-[#182956] hover:bg-[#F66E3B] text-white text-sm font-bold rounded-2xl transition-all duration-300 shadow-md inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Companies</span>
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#EFECEC] text-[#182956] py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Actions */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/companies')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#182956] hover:text-[#F66E3B] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Companies</span>
          </button>

          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#182956] hover:text-[#F66E3B] transition-colors bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm"
          >
            <Globe className="w-4 h-4" />
            <span>Visit Website</span>
          </a>
        </div>

        {/* Header Banner */}
        <div className="bg-[#182956] text-white p-8 sm:p-12 rounded-3xl shadow-xl border border-[#223872] relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(246,110,59,0.08)_0%,transparent_50%,rgba(252,178,177,0.05)_100%)] pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-lg p-2 shrink-0 border border-white/20">
                <CompanyLogo companyName={company.name} className="w-full h-full" />
              </div>
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-[#FCB2B1] bg-[#223872] px-3 py-1 rounded-full border border-[#FCB2B1]/10">
                    {company.companyType}
                  </span>
                  <span className="text-xs text-white/60 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    Est. {company.foundedYear}
                  </span>
                </div>
                <h1 className="font-space text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                  {company.name}
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-[#FCB2B1] tracking-wide">
                  {company.industry}
                </p>
              </div>
            </div>

            <button
              onClick={() => onViewJobsForCompany(company.name)}
              className="px-6 py-3.5 rounded-2xl bg-[#F66E3B] hover:bg-[#e05927] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all shrink-0 hover:scale-[1.02]"
            >
              <span>See {company.openRolesCount} Open Roles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">Headquarters</span>
            <span className="font-bold text-[#182956] text-sm truncate flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#F66E3B] shrink-0" />
              {company.headquarters}
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">Company Size</span>
            <span className="font-bold text-[#182956] text-sm flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#182956] shrink-0" />
              {company.employeeCount}
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">Glassdoor Rating</span>
            <span className="font-bold text-amber-700 text-sm flex items-center gap-1">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500 shrink-0" />
              {company.rating} / 5.0
              <span className="text-gray-400 text-[10px] font-medium ml-1">({company.reviewsCount} reviews)</span>
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">Active Hirings</span>
            <span className="font-bold text-[#F66E3B] text-sm flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-[#F66E3B] shrink-0" />
              {company.openRolesCount} Open Positions
            </span>
          </div>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Main Body Column (Overview, Culture) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm space-y-4">
              <h3 className="font-space font-bold text-lg text-[#182956] flex items-center gap-2">
                <Building className="w-5 h-5 text-[#F66E3B]" />
                Company Overview & Mission
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {company.overview}
              </p>
              <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                <span>Founded {company.foundedYear}</span>
                <span>Category: {company.industry}</span>
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm space-y-4">
              <h3 className="font-space font-bold text-lg text-[#182956] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Core Cultural Pillars
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {company.cultureValues.map((val, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 bg-slate-50 rounded-xl border border-gray-200/80 flex items-start gap-3 text-xs sm:text-sm font-semibold text-[#182956]"
                  >
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#F66E3B] shrink-0 mt-0.5" />
                    <span>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Column (Tech Stack, Benefits, Offices) */}
          <div className="space-y-8">
            
            {/* Tech Stack */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-4">
              <h4 className="font-space font-bold text-sm text-[#182956] uppercase tracking-wider border-b border-gray-100 pb-2">
                Engineering Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {company.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1.5 rounded-xl bg-[#182956] text-white text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Employee Benefits */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-4">
              <h4 className="font-space font-bold text-sm text-[#182956] uppercase tracking-wider border-b border-gray-100 pb-2">
                Employee Perks & Benefits
              </h4>
              <ul className="space-y-3">
                {company.benefits.map((ben, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                    <Award className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office Locations */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-4">
              <h4 className="font-space font-bold text-sm text-[#182956] uppercase tracking-wider border-b border-gray-100 pb-2">
                US Office Hubs
              </h4>
              <div className="flex flex-col gap-2">
                {company.officeLocations.map((loc) => (
                  <div 
                    key={loc} 
                    className="p-2.5 rounded-xl bg-slate-50 text-[#182956] text-xs font-semibold border border-gray-200 flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4 text-[#F66E3B]" /> 
                    <span>{loc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Footer Action Card */}
        <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm text-center space-y-5">
          <h3 className="font-space font-bold text-xl text-[#182956]">
            Interested in working with {company.name}?
          </h3>
          <p className="text-gray-600 text-sm max-w-xl mx-auto">
            Review live opportunities, salary details, visa sponsoring options, and submit your application directly today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onViewJobsForCompany(company.name)}
              className="px-8 py-3 bg-[#182956] hover:bg-[#F66E3B] text-white text-sm font-bold rounded-2xl transition-all duration-300 shadow-md flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <span>See Open Positions</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-slate-100 hover:bg-slate-200 text-[#182956] text-sm font-bold rounded-2xl transition-all duration-300 border border-gray-300 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Globe className="w-4 h-4 text-[#F66E3B]" />
              <span>Official Website</span>
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
