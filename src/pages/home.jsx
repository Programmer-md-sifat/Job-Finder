import React from 'react';
import HeroSection from '../components/home/HeroSection';
import CategoryGrid from '../components/home/CategoryGrid';
import FeaturedCompaniesSection from '../components/home/FeaturedCompaniesSection';
import SalaryInsightsSection from '../components/home/SalaryInsightsSection';
import FAQSection from '../components/home/faqSection';
import EmailSubscribe from '../components/home/EmailSubscribe';

export default function HomePage({
  onSearchJobs,
  onSelectCategory,
  onSelectCompany,
  onViewAllCompanies,
}) {
  return (
    <main className="min-h-screen bg-[#EFECEC]">
      <HeroSection 
        onSearch={onSearchJobs}
        onSelectCategory={onSelectCategory}
      />

      <CategoryGrid 
        onSelectCategory={onSelectCategory}
      />

      <FeaturedCompaniesSection 
        onSelectCompany={onSelectCompany}
        onViewAllCompanies={onViewAllCompanies}
      />

      <SalaryInsightsSection />

      <FAQSection />

      <EmailSubscribe />
    </main>
  );
}
