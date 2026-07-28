import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { US_COMPANIES_DATA, COMPANY_TYPES, COMPANY_INDUSTRIES } from '../data/companiesData';
import CompanyCard from '../components/companies/CompanyCard';
import { Building2, Search, Filter, Sparkles, Building, MapPin } from 'lucide-react';
import CustomSelect from '../components/common/CustomSelect';
import Pagination from '../components/common/Pagination';

export default function CompaniesPage({ onViewJobsForCompany }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All Company Types');
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');

  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6; // Perfect for a 3-column responsive grid (exactly 2 rows)

  // Reset page to 1 whenever search query or filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedType, selectedIndustry]);

  const filteredCompanies = useMemo(() => {
    return US_COMPANIES_DATA.filter((comp) => {
      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = comp.name.toLowerCase().includes(q);
        const matchesIndustry = comp.industry.toLowerCase().includes(q);
        const matchesHq = comp.headquarters.toLowerCase().includes(q);
        if (!matchesName && !matchesIndustry && !matchesHq) return false;
      }

      // Type Filter
      if (selectedType !== 'All Company Types' && comp.companyType !== selectedType) {
        return false;
      }

      // Industry Filter
      if (selectedIndustry !== 'All Industries' && comp.industry !== selectedIndustry) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedType, selectedIndustry]);

  const totalPages = Math.ceil(filteredCompanies.length / ITEMS_PER_PAGE);

  const paginatedCompanies = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCompanies.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredCompanies, currentPage]);

  return (
    <main className="min-h-screen bg-[#EFECEC] text-[#182956] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Banner */}
        <div className="bg-[#182956] text-white p-8 sm:p-12 rounded-3xl shadow-xl border border-[#223872] relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">

            <h1 className="font-space text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Discover Top Hiring Companies in the USA
            </h1>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Explore culture ratings, tech stacks, employee benefits, and open engineering positions at premier American tech & enterprise organizations.
            </p>

            {/* Search Input */}
            <div className="bg-white p-2 rounded-2xl flex items-center gap-2 text-[#182956] max-w-xl">
              <Search className="w-5 h-5 text-gray-400 ml-2 shrink-0" />
              <input
                type="text"
                placeholder="Search company name, tech stack, or HQ location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm font-medium p-2 focus:outline-none placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Type Dropdown */}
            <div className="w-56">
              <CustomSelect
                value={selectedType}
                onChange={setSelectedType}
                options={COMPANY_TYPES}
                icon={<Building className="w-4 h-4 text-[#F66E3B] shrink-0" />}
                className="py-2 px-3 bg-gray-50/50 hover:bg-gray-100/50 text-xs font-semibold rounded-xl"
              />
            </div>

            {/* Industry Dropdown */}
            <div className="w-56">
              <CustomSelect
                value={selectedIndustry}
                onChange={setSelectedIndustry}
                options={COMPANY_INDUSTRIES}
                icon={<Building2 className="w-4 h-4 text-[#182956] shrink-0" />}
                className="py-2 px-3 bg-gray-50/50 hover:bg-gray-100/50 text-xs font-semibold rounded-xl"
              />
            </div>
          </div>

          <span className="text-xs font-bold text-gray-500 shrink-0">
            Showing <strong className="text-[#182956]">{filteredCompanies.length}</strong> US Companies
          </span>
        </div>

        {/* Companies Grid */}
        {paginatedCompanies.length === 0 ? (
          <div className="bg-white p-12 rounded-3xl border border-gray-200 text-center space-y-4">
            <Building className="w-12 h-12 text-[#F66E3B] mx-auto opacity-80" />
            <h3 className="font-space font-bold text-xl text-[#182956]">
              No Matching Companies Found
            </h3>
            <p className="text-xs text-gray-500 max-w-sm mx-auto">
              Try adjusting your filters or typing a different keyword.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedCompanies.map((company) => (
                <CompanyCard
                  key={company.id}
                  company={company}
                  onSelectCompany={(c) => navigate(`/company/${c.id}`)}
                  onViewJobsForCompany={onViewJobsForCompany}
                />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => {
                setCurrentPage(page);
                const lenis = window.lenis;
                if (lenis) {
                  lenis.scrollTo(0, { immediate: false });
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="pt-6"
            />
          </div>
        )}

      </div>
    </main>
  );
}
