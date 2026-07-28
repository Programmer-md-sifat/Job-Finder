import React from 'react';
import { Filter, RotateCcw, MapPin, Briefcase, DollarSign, Building, Clock } from 'lucide-react';
import { JOB_LOCATIONS_USA, JOB_DEPARTMENTS } from '../../data/jobsData';
import CustomSelect from '../common/CustomSelect';

interface JobFilters {
  location: string;
  department: string;
  workMode: string;
  experienceLevel: string;
  minSalary: number;
  jobType: string;
}

interface JobFiltersSidebarProps {
  filters: JobFilters;
  setFilters: React.Dispatch<React.SetStateAction<JobFilters>>;
  onReset: () => void;
  resultsCount: number;
}

export default function JobFiltersSidebar({
  filters,
  setFilters,
  onReset,
  resultsCount,
}: JobFiltersSidebarProps) {
  const workModes = ['All Modes', 'Remote', 'Hybrid', 'On-site'];
  const experienceLevels = ['All Levels', 'Entry Level', 'Mid Level', 'Senior', 'Lead', 'Executive'];
  const jobTypes = ['All Types', 'Full-time', 'Contract', 'Part-time'];

  return (
    <aside className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6 text-[#182956]">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100">
        <div className="flex items-center gap-2 font-space font-bold text-lg text-[#182956]">
          <Filter className="w-5 h-5 text-[#F66E3B]" />
          <span>Filter US Jobs</span>
        </div>
        <button
          onClick={onReset}
          className="text-xs font-semibold text-gray-500 hover:text-[#F66E3B] transition-colors flex items-center gap-1"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      <div className="text-xs font-semibold text-[#182956] bg-slate-100 p-2.5 rounded-xl text-center">
        Showing <span className="text-[#F66E3B] font-bold">{resultsCount}</span> active US openings
      </div>

      {/* Filter 1: US Location */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-[#182956] uppercase tracking-wider flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-[#F66E3B]" /> US Location
        </label>
        <CustomSelect
          value={filters.location}
          onChange={(val) => setFilters({ ...filters, location: val })}
          options={JOB_LOCATIONS_USA}
        />
      </div>

      {/* Filter 2: Department */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-[#182956] uppercase tracking-wider flex items-center gap-1.5">
          <Briefcase className="w-3.5 h-3.5 text-[#182956]" /> Department
        </label>
        <CustomSelect
          value={filters.department}
          onChange={(val) => setFilters({ ...filters, department: val })}
          options={JOB_DEPARTMENTS}
        />
      </div>

      {/* Filter 3: Work Mode */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-[#182956] uppercase tracking-wider block">
          Work Environment
        </label>
        <div className="grid grid-cols-2 gap-2">
          {workModes.map((mode) => (
            <button
              key={mode}
              onClick={() => setFilters({ ...filters, workMode: mode })}
              className={`p-2 rounded-xl text-xs font-semibold transition-all border ${
                filters.workMode === mode
                  ? 'bg-[#182956] text-white border-[#182956]'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Filter 4: Salary Range Slider */}
      <div className="space-y-2 pt-2 border-t border-gray-100">
        <div className="flex justify-between items-center text-xs">
          <label className="font-bold text-[#182956] uppercase tracking-wider flex items-center gap-1">
            <DollarSign className="w-3.5 h-3.5 text-[#F66E3B]" /> Min Annual USD Salary
          </label>
          <span className="font-bold text-[#F66E3B]">
            ${(filters.minSalary / 1000).toFixed(0)}k+
          </span>
        </div>
        <input
          type="range"
          min={80000}
          max={200000}
          step={10000}
          value={filters.minSalary}
          onChange={(e) => setFilters({ ...filters, minSalary: Number(e.target.value) })}
          className="custom-slider"
          style={{
            background: `linear-gradient(to right, #F66E3B 0%, #F66E3B ${((filters.minSalary - 80000) / 120000) * 100}%, #CBD5E1 ${((filters.minSalary - 80000) / 120000) * 100}%, #CBD5E1 100%)`
          }}
        />
        <div className="flex justify-between text-[11px] text-gray-400">
          <span>$80k</span>
          <span>$140k</span>
          <span>$200k+</span>
        </div>
      </div>

      {/* Filter 5: Experience Level */}
      <div className="space-y-2 pt-2 border-t border-gray-100">
        <label className="text-xs font-bold text-[#182956] uppercase tracking-wider block">
          Experience Level
        </label>
        <div className="space-y-1">
          {experienceLevels.map((lvl) => (
            <label key={lvl} className="flex items-center gap-2 text-xs font-medium text-gray-700 cursor-pointer p-1.5 hover:bg-gray-50 rounded-lg">
              <input
                type="radio"
                name="experienceLevel"
                checked={filters.experienceLevel === lvl}
                onChange={() => setFilters({ ...filters, experienceLevel: lvl })}
                className="accent-[#F66E3B]"
              />
              <span>{lvl}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Filter 6: Job Type */}
      <div className="space-y-2 pt-2 border-t border-gray-100">
        <label className="text-xs font-bold text-[#182956] uppercase tracking-wider block">
          Job Type
        </label>
        <div className="grid grid-cols-2 gap-2">
          {jobTypes.map((type) => (
            <button
              key={type}
              onClick={() => setFilters({ ...filters, jobType: type })}
              className={`p-2 rounded-xl text-xs font-semibold transition-all border ${
                filters.jobType === type
                  ? 'bg-[#F66E3B] text-white border-[#F66E3B]'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

    </aside>
  );
}
