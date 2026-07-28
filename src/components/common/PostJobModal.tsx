import React, { useState } from 'react';
import { X, PlusCircle, Building2, DollarSign, MapPin, CheckCircle2 } from 'lucide-react';
import { JOB_LOCATIONS_USA, JOB_DEPARTMENTS } from '../../data/jobsData';
import CustomSelect from './CustomSelect';

interface PostJobModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PostJobModal({ isOpen, onClose }: PostJobModalProps) {
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [department, setDepartment] = useState('Engineering');
  const [location, setLocation] = useState('San Francisco, CA');
  const [workMode, setWorkMode] = useState('Hybrid');
  const [minSalary, setMinSalary] = useState('140000');
  const [maxSalary, setMaxSalary] = useState('180000');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white text-[#182956] w-full max-w-lg rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
        
        {/* Header */}
        <div className="p-6 bg-[#182956] text-white flex items-center justify-between border-b border-[#223872]">
          <div>
            <span className="text-xs text-[#FCB2B1] font-bold uppercase tracking-wider block">
              Employer Portal
            </span>
            <h2 className="font-space text-lg font-bold text-white">
              Post a US Job Listing
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-space font-bold text-2xl text-[#182956]">
                Job Posting Submitted!
              </h3>
              <p className="text-sm text-gray-600 max-w-sm mx-auto">
                Your listing for <strong className="text-[#182956]">{jobTitle}</strong> at <strong className="text-[#182956]">{companyName}</strong> is under review by our US verification team and will go live within 2 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-3 bg-[#182956] hover:bg-[#223872] text-white font-bold text-sm rounded-xl"
              >
                Return to Portal
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              
              <div className="space-y-1">
                <label className="font-bold text-[#182956] block">Company Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. CloudScale Systems"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#F66E3B]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-[#182956] block">Position Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Senior Frontend Engineer (React)"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#F66E3B]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-[#182956] block">Department *</label>
                  <CustomSelect
                    value={department}
                    onChange={setDepartment}
                    options={JOB_DEPARTMENTS.filter(d => d !== 'All Departments')}
                    className="border-gray-300"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#182956] block">Location *</label>
                  <CustomSelect
                    value={location}
                    onChange={setLocation}
                    options={JOB_LOCATIONS_USA.filter(l => l !== 'All US Locations')}
                    className="border-gray-300"
                  />
                </div>
              </div>

              {/* Salary Range USD */}
              <div className="space-y-1 p-3 bg-slate-50 rounded-xl border border-gray-200">
                <label className="font-bold text-[#182956] block text-xs">
                  US Pay Transparency Band (Annual USD) *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    required
                    placeholder="Min $140,000"
                    value={minSalary}
                    onChange={(e) => setMinSalary(e.target.value)}
                    className="p-2 rounded-lg border border-gray-300 bg-white"
                  />
                  <input
                    type="number"
                    required
                    placeholder="Max $180,000"
                    value={maxSalary}
                    onChange={(e) => setMaxSalary(e.target.value)}
                    className="p-2 rounded-lg border border-gray-300 bg-white"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-[#182956] block">Job Overview & Requirements *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe key responsibilities and required candidate qualifications..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#F66E3B]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#F66E3B] hover:bg-[#e05927] text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Submit Employer Job Listing</span>
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
