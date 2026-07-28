import React from 'react';
import { Job } from '../../data/jobsData';
import CompanyLogo from '../common/CompanyLogo';
import { 
  MapPin, 
  DollarSign, 
  Bookmark, 
  Clock, 
  Briefcase, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface JobListCardProps {
  job: Job;
  isSaved: boolean;
  onToggleSave: (jobId: string) => void;
  onSelectJob: (job: Job) => void;
  onQuickApply: (job: Job) => void;
}

export default function JobListCard({
  job,
  isSaved,
  onToggleSave,
  onSelectJob,
  onQuickApply,
}: JobListCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 flex flex-col justify-between group">
      
      <div>
        {/* Top Badges & Bookmark */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            {/* Logo Avatar */}
            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shadow-sm shrink-0 border border-gray-100 p-1.5">
              <CompanyLogo companyName={job.company} className="w-full h-full" />
            </div>
            <div>
              <h4 className="font-space font-bold text-sm text-[#182956]">
                {job.company}
              </h4>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#F66E3B]" /> {job.location}
                </span>
                <span>•</span>
                <span className="font-medium text-[#182956]">{job.workMode}</span>
              </div>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(job.id);
            }}
            className={`p-2 rounded-xl transition-colors ${
              isSaved
                ? 'bg-[#F66E3B] text-white'
                : 'bg-gray-100 text-gray-400 hover:text-[#182956] hover:bg-gray-200'
            }`}
            title={isSaved ? 'Remove from saved' : 'Save job'}
          >
            <Bookmark className="w-4 h-4 fill-current" />
          </button>
        </div>

        {/* Job Title */}
        <h3
          onClick={() => onSelectJob(job)}
          className="font-space font-bold text-lg text-[#182956] group-hover:text-[#F66E3B] transition-colors cursor-pointer mb-2 leading-snug"
        >
          {job.title}
        </h3>

        {/* Salary & Experience Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 font-bold text-xs border border-emerald-200 flex items-center gap-1">
            <DollarSign className="w-3.5 h-3.5" />
            ${(job.salaryMin / 1000).toFixed(0)}k - ${(job.salaryMax / 1000).toFixed(0)}k / yr
          </span>

          <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-[#182956] font-medium text-xs">
            {job.experienceLevel}
          </span>

          <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-gray-700 font-medium text-xs">
            {job.jobType}
          </span>

          {job.isUrgent && (
            <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider">
              Actively Hiring
            </span>
          )}
        </div>

        {/* Description Snippet */}
        <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-2">
          {job.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {job.tags.map((tag) => (
            <span key={tag} className="text-[11px] font-medium text-[#182956] bg-slate-100 px-2.5 py-0.5 rounded-md">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3 text-xs">
        <span className="text-gray-400 flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" /> Posted {job.postedDate}
        </span>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onSelectJob(job)}
            className="px-3 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#182956] font-semibold transition-colors"
          >
            Details
          </button>

          <button
            onClick={() => onQuickApply(job)}
            className="px-4 py-2 rounded-xl bg-[#F66E3B] hover:bg-[#e05927] text-white font-bold transition-all shadow-sm flex items-center gap-1"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
}
