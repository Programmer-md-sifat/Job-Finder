import React from 'react';
import { Job } from '../data/jobsData';
import CompanyLogo from '../components/common/CompanyLogo';
import { 
  ArrowLeft,
  MapPin, 
  DollarSign, 
  Briefcase, 
  Building2, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Bookmark,
  ArrowRight,
  Award,
  Clock,
  Sparkles
} from 'lucide-react';

interface JobDetailPageProps {
  job: Job | null;
  onBack: () => void;
  isSaved: boolean;
  onToggleSave: (jobId: string) => void;
  onApply: (job: Job) => void;
}

export default function JobDetailPage({
  job,
  onBack,
  isSaved,
  onToggleSave,
  onApply,
}: JobDetailPageProps) {
  if (!job) {
    return (
      <div className="min-h-screen bg-[#EFECEC] py-16 flex flex-col items-center justify-center text-center px-4">
        <Briefcase className="w-16 h-16 text-[#F66E3B] mb-4 opacity-75 animate-bounce" />
        <h2 className="font-space font-bold text-2xl text-[#182956]">Job Not Found</h2>
        <p className="text-gray-500 text-sm mt-1 max-w-xs">The job listing you are looking for might have expired or been removed.</p>
        <button
          onClick={onBack}
          className="mt-6 px-6 py-2.5 bg-[#182956] hover:bg-[#223872] text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Jobs List</span>
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#EFECEC] text-[#182956] py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Navigation Breadcrumb / Back Button */}
        <div>
          <button
            onClick={onBack}
            className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#182956] hover:text-[#F66E3B] font-bold text-xs shadow-sm border border-gray-200/60 hover:border-gray-300 transition-all duration-200 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Open Positions</span>
          </button>
        </div>

        {/* Hero Section Banner */}
        <div className="bg-[#182956] text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden border border-[#223872] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-5">
            {/* High-res Company Logo */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white flex items-center justify-center shadow-lg p-2 shrink-0 border border-white/10">
              <CompanyLogo companyName={job.company} className="w-full h-full" />
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#FCB2B1]">
                <span>{job.company}</span>
                <span className="text-white/30">•</span>
                <span>{job.department} Department</span>
                {job.isUrgent && (
                  <span className="px-2 py-0.5 rounded-full bg-[#F66E3B]/20 text-[#FCB2B1] text-[10px] uppercase font-bold tracking-wider border border-[#F66E3B]/40">
                    Hiring Fast
                  </span>
                )}
              </div>
              <h1 className="font-space text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                {job.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-xs text-white/80">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#F66E3B]" /> {job.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-white/55" /> Posted {job.postedDate}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Job Details */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Overview / Key Highlights */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/90 shadow-sm space-y-6">
              
              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-gray-100">
                <div className="space-y-0.5">
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block">Annual Salary</span>
                  <span className="font-bold text-base sm:text-lg text-[#F66E3B]">
                    ${(job.salaryMin / 1000).toFixed(0)}k - ${(job.salaryMax / 1000).toFixed(0)}k
                  </span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block">Work Mode</span>
                  <span className="font-bold text-base sm:text-lg text-[#182956]">{job.workMode}</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block">Experience</span>
                  <span className="font-bold text-base sm:text-lg text-[#182956]">{job.experienceLevel}</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block">Job Type</span>
                  <span className="font-bold text-base sm:text-lg text-[#182956]">{job.jobType}</span>
                </div>
              </div>

              {/* Role Overview Paragraph */}
              <div className="space-y-3">
                <h3 className="font-space font-bold text-lg text-[#182956] flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#F66E3B]" />
                  <span>Role Overview</span>
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {job.description}
                </p>
              </div>

              {/* Core Responsibilities */}
              <div className="space-y-3 pt-4">
                <h3 className="font-space font-bold text-lg text-[#182956]">
                  Core Responsibilities
                </h3>
                <ul className="space-y-3">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#F66E3B] mt-1 shrink-0" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements & Experience */}
              <div className="space-y-3 pt-4">
                <h3 className="font-space font-bold text-lg text-[#182956]">
                  What We Are Looking For
                </h3>
                <ul className="space-y-3">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#F66E3B] mt-1 shrink-0" />
                      <span className="leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-4 pt-4">
                <div className="flex items-center gap-2 font-space font-bold text-emerald-900 text-sm sm:text-base">
                  <Award className="w-5 h-5 text-emerald-700" />
                  <span>US Employee Benefits & Perk Package</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-emerald-800">
                  {job.benefits.map((ben, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></span>
                      <span>{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          {/* Right Column: CTA & Action card */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Action Widget */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200/90 shadow-sm space-y-6 sticky top-6">
              
              <div className="space-y-2 text-center pb-4 border-b border-gray-100">
                <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">Interested in this role?</div>
                <div className="font-space font-bold text-xl text-[#182956]">Apply Securely Online</div>
                <p className="text-xs text-gray-500">Takes less than 2 minutes with our verified 1-click application system.</p>
              </div>

              <div className="space-y-3">
                {/* Apply CTA Button */}
                <button
                  onClick={() => onApply(job)}
                  className="w-full py-3 px-4 rounded-xl bg-[#F66E3B] hover:bg-[#e05927] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all duration-200"
                >
                  <span>Apply to Position</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Bookmark Button */}
                <button
                  onClick={() => onToggleSave(job.id)}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs transition-all duration-200 flex items-center justify-center gap-2 border cursor-pointer ${
                    isSaved
                      ? 'bg-amber-500 hover:bg-amber-600 text-white border-amber-500 shadow-sm'
                      : 'bg-white text-[#182956] border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                  <span>{isSaved ? 'Remove Bookmark' : 'Bookmark this Job'}</span>
                </button>
              </div>

              {/* Safety Badges */}
              <div className="space-y-3 pt-4 border-t border-gray-100 text-[11px] text-gray-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>SOC2 Certified Secure Portal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#182956] shrink-0" />
                  <span>Direct Hiring Manager Review</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
