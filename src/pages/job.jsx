import React, { useState, useMemo, useEffect } from 'react';
import { US_JOBS_DATA } from '../data/jobsData';
import JobFiltersSidebar from '../components/job/JobFiltersSidebar';
import JobListCard from '../components/job/JobListCard';
import Pagination from '../components/common/Pagination';
import { Search, Briefcase, MapPin, Sparkles, Filter, X } from 'lucide-react';

export default function JobPage({
  initialSearchQuery = '',
  initialLocation = 'All US Locations',
  initialDepartment = 'All Departments',
  savedJobIds = [],
  onToggleSaveJob,
  showOnlySavedJobs = false,
  onSelectJob,
  onQuickApply,
}) {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const [filters, setFilters] = useState({
    location: initialLocation,
    department: initialDepartment,
    workMode: 'All Modes',
    experienceLevel: 'All Levels',
    minSalary: 80000,
    jobType: 'All Types',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  // Reset page to 1 whenever search, filters, or saved toggle changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, filters, showOnlySavedJobs]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setFilters({
      location: 'All US Locations',
      department: 'All Departments',
      workMode: 'All Modes',
      experienceLevel: 'All Levels',
      minSalary: 80000,
      jobType: 'All Types',
    });
  };

  const filteredJobs = useMemo(() => {
    return US_JOBS_DATA.filter((job) => {
      // Saved filter
      if (showOnlySavedJobs && !savedJobIds.includes(job.id)) {
        return false;
      }

      // Keyword Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(q);
        const matchesCompany = job.company.toLowerCase().includes(q);
        const matchesDesc = job.description.toLowerCase().includes(q);
        const matchesTag = job.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesCompany && !matchesDesc && !matchesTag) {
          return false;
        }
      }

      // Location
      if (
        filters.location !== 'All US Locations' &&
        !job.location.toLowerCase().includes(filters.location.toLowerCase())
      ) {
        return false;
      }

      // Department
      if (
        filters.department !== 'All Departments' &&
        job.department.toLowerCase() !== filters.department.toLowerCase()
      ) {
        return false;
      }

      // Work Mode
      if (filters.workMode !== 'All Modes' && job.workMode !== filters.workMode) {
        return false;
      }

      // Experience Level
      if (
        filters.experienceLevel !== 'All Levels' &&
        job.experienceLevel !== filters.experienceLevel
      ) {
        return false;
      }

      // Salary
      if (job.salaryMax < filters.minSalary) {
        return false;
      }

      // Job Type
      if (filters.jobType !== 'All Types' && job.jobType !== filters.jobType) {
        return false;
      }

      return true;
    });
  }, [filters, searchQuery, showOnlySavedJobs, savedJobIds]);

  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);

  const paginatedJobs = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredJobs.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredJobs, currentPage]);

  return (
    <main className="min-h-screen bg-[#EFECEC] text-[#182956] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Banner */}
        <div className="bg-[#182956] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden border border-[#223872]">
          <div className="max-w-3xl space-y-4 relative z-10">

            <h1 className="font-space text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {showOnlySavedJobs ? 'Saved Jobs' : 'Explore Open Roles Across America'}
            </h1>

            {/* Quick Search Bar */}
            <div className="bg-white p-2 rounded-2xl flex items-center gap-2 text-[#182956]">
              <Search className="w-5 h-5 text-gray-400 ml-2 shrink-0" />
              <input
                type="text"
                placeholder="Search job title, skill, or US company name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm font-medium p-2 focus:outline-none placeholder:text-gray-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1 rounded-full hover:bg-gray-200 text-gray-500"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex items-center justify-between bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
          <span className="text-sm font-bold text-[#182956]">
            Found {filteredJobs.length} Jobs
          </span>
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#182956] text-white font-bold text-xs"
          >
            <Filter className="w-4 h-4 text-[#F66E3B]" />
            <span>{mobileFilterOpen ? 'Close Filters' : 'Filter Options'}</span>
          </button>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar Filters */}
          <div className={`lg:col-span-4 ${mobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <JobFiltersSidebar
              filters={filters}
              setFilters={setFilters}
              onReset={handleResetFilters}
              resultsCount={filteredJobs.length}
            />
          </div>

          {/* Job Cards List */}
          <div className="lg:col-span-8 space-y-6">
            {filteredJobs.length === 0 ? (
              <div className="bg-white p-12 rounded-3xl border border-gray-200 text-center space-y-4">
                <Briefcase className="w-12 h-12 text-[#F66E3B] mx-auto opacity-80" />
                <h3 className="font-space font-bold text-xl text-[#182956]">
                  No Matching US Jobs Found
                </h3>
                <p className="text-xs text-gray-500 max-w-sm mx-auto">
                  Try broadening your search query or resetting filters like salary range or location.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-2.5 rounded-xl bg-[#182956] text-white font-bold text-xs"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {paginatedJobs.map((job) => (
                  <JobListCard
                    key={job.id}
                    job={job}
                    isSaved={savedJobIds.includes(job.id)}
                    onToggleSave={onToggleSaveJob}
                    onSelectJob={onSelectJob}
                    onQuickApply={onQuickApply}
                  />
                ))}

                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={(page) => {
                    setCurrentPage(page);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="pt-6"
                />
              </div>
            )}
          </div>

        </div>

      </div>
    </main>
  );
}
