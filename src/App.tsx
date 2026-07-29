import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Routes, Route, useParams } from 'react-router-dom';
import SmoothScroll from './components/common/SmoothScroll';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import PostJobModal from './components/common/PostJobModal';
import AuthModal from './components/common/AuthModal';
import PageTransition from './components/common/PageTransition';

import HomePage from './pages/home';
import JobPage from './pages/job';
import CompaniesPage from './pages/companies';
import CompanyDetailPage from './pages/CompanyDetailPage';
import AboutUsPage from './pages/aboutus';
import JobDetailPage from './pages/JobDetailPage';
import ApplyJobPage from './pages/ApplyJobPage';
import { Job, US_JOBS_DATA } from './data/jobsData';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [savedJobIds, setSavedJobIds] = useState<string[]>(['job-1', 'job-2']);
  
  // Search parameters passed to Jobs page
  const [searchParams, setSearchParams] = useState({
    query: '',
    location: 'All US Locations',
    department: 'All Departments',
  });

  const [showOnlySaved, setShowOnlySaved] = useState(false);

  // Modals state
  const [postJobOpen, setPostJobOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  // Scroll is managed gracefully inside PageTransition to prevent layout jumping during exit animations
  useEffect(() => {
    // Soft fallback if needed, but PageTransition handles the core scroll reset elegantly
  }, [location.pathname]);

  const handleToggleSaveJob = (jobId: string) => {
    setSavedJobIds((prev) =>
      prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]
    );
  };

  const handleSearchJobsFromHome = (keywords: string, locationVal: string, departmentVal: string) => {
    setSearchParams({ query: keywords, location: locationVal, department: departmentVal });
    setShowOnlySaved(false);
    navigate('/jobs');
  };

  const handleSelectCategoryFromHome = (categoryName: string) => {
    setSearchParams({ query: categoryName, location: 'All US Locations', department: 'All Departments' });
    setShowOnlySaved(false);
    navigate('/jobs');
  };

  const handleViewJobsForCompany = (companyName: string) => {
    setSearchParams({ query: companyName, location: 'All US Locations', department: 'All Departments' });
    setShowOnlySaved(false);
    navigate('/jobs');
  };

  const handleOpenSavedJobs = () => {
    setShowOnlySaved(true);
    navigate('/jobs');
  };

  // Determine activePage key for Navbar active states
  let activePage: 'home' | 'jobs' | 'companies' | 'aboutus' = 'home';
  if (location.pathname === '/' || location.pathname === '') {
    activePage = 'home';
  } else if (location.pathname.startsWith('/jobs')) {
    activePage = 'jobs';
  } else if (location.pathname.startsWith('/companies') || location.pathname.startsWith('/company/')) {
    activePage = 'companies';
  } else if (location.pathname.startsWith('/aboutus')) {
    activePage = 'aboutus';
  } else if (location.pathname.startsWith('/job/')) {
    activePage = 'jobs'; // job detail page highlights the "Jobs" tab in Navbar
  } else if (location.pathname.startsWith('/apply/')) {
    activePage = 'jobs'; // apply page highlights the "Jobs" tab in Navbar
  }

  const handleSetActivePage = (page: 'home' | 'jobs' | 'companies' | 'aboutus') => {
    if (page !== 'jobs') {
      setShowOnlySaved(false);
    }
    
    if (page === 'home') navigate('/');
    else if (page === 'jobs') navigate('/jobs');
    else if (page === 'companies') navigate('/companies');
    else if (page === 'aboutus') navigate('/aboutus');
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col bg-[#EFECEC] text-[#182956] font-sans antialiased selection:bg-[#F66E3B] selection:text-white">
        
        {/* Persistent Top Header */}
        <Navbar
          activePage={activePage}
          setActivePage={handleSetActivePage}
          savedJobsCount={savedJobIds.length}
          onOpenSavedJobs={handleOpenSavedJobs}
          onOpenPostJobModal={() => setPostJobOpen(true)}
          onOpenAuthModal={() => setAuthOpen(true)}
        />

        {/* Dynamic Main Page Content with React Router Routes */}
        <div className="flex-grow overflow-hidden">
          <Routes>
            <Route
              path="/"
              element={
                <PageTransition>
                  <HomePage
                    onSearchJobs={handleSearchJobsFromHome}
                    onSelectCategory={handleSelectCategoryFromHome}
                    onSelectCompany={(comp) => navigate(`/company/${comp.id}`)}
                    onViewAllCompanies={() => navigate('/companies')}
                  />
                </PageTransition>
              }
            />

            <Route
              path="/jobs"
              element={
                <PageTransition>
                  <JobPage
                    initialSearchQuery={searchParams.query}
                    initialLocation={searchParams.location}
                    initialDepartment={searchParams.department}
                    savedJobIds={savedJobIds}
                    onToggleSaveJob={handleToggleSaveJob}
                    showOnlySavedJobs={showOnlySaved}
                    onSelectJob={(job: Job) => {
                      setSelectedJob(job);
                      navigate(`/job/${job.id}`);
                    }}
                    onQuickApply={(job: Job) => {
                      setSelectedJob(job);
                      navigate(`/apply/${job.id}`);
                    }}
                  />
                </PageTransition>
              }
            />

            <Route
              path="/companies"
              element={
                <PageTransition>
                  <CompaniesPage
                    onViewJobsForCompany={handleViewJobsForCompany}
                  />
                </PageTransition>
              }
            />

            <Route
              path="/company/:companyId"
              element={
                <PageTransition>
                  <CompanyDetailPage
                    onViewJobsForCompany={handleViewJobsForCompany}
                  />
                </PageTransition>
              }
            />

            <Route
              path="/aboutus"
              element={
                <PageTransition>
                  <AboutUsPage />
                </PageTransition>
              }
            />

            <Route
              path="/job/:jobId"
              element={
                <PageTransition>
                  <JobDetailRouteWrapper
                    savedJobIds={savedJobIds}
                    onToggleSaveJob={handleToggleSaveJob}
                    setSelectedJob={setSelectedJob}
                    navigate={navigate}
                  />
                </PageTransition>
              }
            />

            <Route
              path="/apply/:jobId"
              element={
                <PageTransition>
                  <ApplyJobRouteWrapper
                    setSelectedJob={setSelectedJob}
                    navigate={navigate}
                  />
                </PageTransition>
              }
            />
          </Routes>
        </div>

        {/* Persistent Footer */}
        <Footer
          setActivePage={handleSetActivePage}
          onSelectCityFilter={(city) => {
            setSearchParams({ query: '', location: city, department: 'All Departments' });
            setShowOnlySaved(false);
            navigate('/jobs');
          }}
        />

        {/* Global Modals */}
        <PostJobModal
          isOpen={postJobOpen}
          onClose={() => setPostJobOpen(false)}
        />

        <AuthModal
          isOpen={authOpen}
          onClose={() => setAuthOpen(false)}
        />

      </div>
    </SmoothScroll>
  );
}

// Route wrappers to load job dynamically from US_JOBS_DATA based on URL parameters
function JobDetailRouteWrapper({
  savedJobIds,
  onToggleSaveJob,
  setSelectedJob,
  navigate,
}: {
  savedJobIds: string[];
  onToggleSaveJob: (id: string) => void;
  setSelectedJob: (job: Job | null) => void;
  navigate: any;
}) {
  const { jobId } = useParams<{ jobId: string }>();
  const job = US_JOBS_DATA.find((j) => j.id === jobId) || null;

  useEffect(() => {
    if (job) {
      setSelectedJob(job);
    }
  }, [job, setSelectedJob]);

  return (
    <JobDetailPage
      job={job}
      onBack={() => {
        navigate('/jobs');
      }}
      isSaved={job ? savedJobIds.includes(job.id) : false}
      onToggleSave={onToggleSaveJob}
      onApply={(appliedJob) => {
        setSelectedJob(appliedJob);
        navigate(`/apply/${appliedJob.id}`);
      }}
    />
  );
}

function ApplyJobRouteWrapper({
  setSelectedJob,
  navigate,
}: {
  setSelectedJob: (job: Job | null) => void;
  navigate: any;
}) {
  const { jobId } = useParams<{ jobId: string }>();
  const job = US_JOBS_DATA.find((j) => j.id === jobId) || null;

  useEffect(() => {
    if (job) {
      setSelectedJob(job);
    }
  }, [job, setSelectedJob]);

  return (
    <ApplyJobPage
      job={job}
      onBack={() => {
        if (job) navigate(`/job/${job.id}`);
        else navigate('/jobs');
      }}
    />
  );
}
