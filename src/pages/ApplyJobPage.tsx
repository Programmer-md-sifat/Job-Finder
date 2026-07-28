import React, { useState } from 'react';
import { Job } from '../data/jobsData';
import CompanyLogo from '../components/common/CompanyLogo';
import CustomSelect from '../components/common/CustomSelect';
import { 
  ArrowLeft, 
  Upload, 
  CheckCircle2, 
  ShieldCheck, 
  Send, 
  FileText,
  Clock,
  MapPin,
  Lock
} from 'lucide-react';

const workStatusOptions = [
  { value: 'US Citizen / Green Card Holder', label: 'US Citizen / Permanent Resident (Green Card)' },
  { value: 'H1-B Visa Holder', label: 'H1-B Visa Transfer Needed' },
  { value: 'OPT / STEM OPT', label: 'OPT / STEM OPT' },
  { value: 'TN Visa / E-3 / O-1', label: 'TN Visa / E-3 / O-1' },
  { value: 'Requires US Sponsorship', label: 'Requires US Visa Sponsorship' },
];

interface ApplyJobPageProps {
  job: Job | null;
  onBack: () => void;
}

export default function ApplyJobPage({ job, onBack }: ApplyJobPageProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [workStatus, setWorkStatus] = useState('US Citizen / Green Card Holder');
  const [resumeFileName, setResumeFileName] = useState('');
  const [coverNote, setCoverNote] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [confirmationId, setConfirmationId] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  if (!job) {
    return (
      <div className="min-h-screen bg-[#EFECEC] py-16 flex flex-col items-center justify-center text-center px-4">
        <CheckCircle2 className="w-16 h-16 text-[#F66E3B] mb-4 opacity-75 animate-bounce" />
        <h2 className="font-space font-bold text-2xl text-[#182956]">No Job Selected</h2>
        <p className="text-gray-500 text-sm mt-1 max-w-xs">Please select a job position to submit an application.</p>
        <button
          onClick={onBack}
          className="mt-6 px-6 py-2.5 bg-[#182956] hover:bg-[#223872] text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Jobs</span>
        </button>
      </div>
    );
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFileName(e.target.files[0].name);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.name.endsWith('.pdf') || file.name.endsWith('.doc') || file.name.endsWith('.docx')) {
        setResumeFileName(file.name);
      } else {
        alert('Please upload only PDF or Word documents.');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate a random confirmation ID
    const randomId = 'CHK-US-' + Math.floor(Math.random() * 899999 + 100000);
    setConfirmationId(randomId);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[#EFECEC] text-[#182956] py-8 sm:py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#182956] hover:text-[#F66E3B] font-bold text-xs shadow-sm border border-gray-200/60 hover:border-gray-300 transition-all duration-200 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Cancel and Go Back</span>
          </button>
        </div>

        {/* Form or Confirmation Container */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
          
          {/* Header */}
          <div className="p-6 sm:p-8 bg-[#182956] text-white border-b border-[#223872] flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs text-[#FCB2B1] uppercase tracking-wider font-extrabold block">
                Official Job Application Form
              </span>
              <h1 className="font-space text-xl sm:text-2xl font-bold text-white">
                Apply to {job.company}
              </h1>
              <div className="flex items-center gap-2.5 text-xs text-white/80">
                <span className="font-semibold text-white">{job.title}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#F66E3B]" /> {job.location}
                </span>
              </div>
            </div>

            {/* Logo */}
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-1.5 shrink-0 shadow border border-white/10 hidden sm:flex">
              <CompanyLogo companyName={job.company} className="w-full h-full" />
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-10 space-y-6">
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center animate-pulse">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                
                <div className="space-y-2">
                  <h2 className="font-space font-bold text-2xl sm:text-3xl text-[#182956]">
                    Application Successfully Transmitted!
                  </h2>
                  <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#182956]">{fullName}</strong>! Your application profile and resume have been dispatched directly to the HR recruitment pipeline at <strong className="text-[#182956]">{job.company}</strong>.
                  </p>
                </div>

                <div className="max-w-sm mx-auto p-4 bg-slate-50 rounded-2xl border border-gray-100 space-y-1">
                  <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider block">Receipt ID & Verification</span>
                  <span className="font-mono font-bold text-[#F66E3B] text-base">{confirmationId}</span>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={onBack}
                    className="px-6 py-3 bg-[#182956] hover:bg-[#223872] text-white font-bold text-sm rounded-xl transition-all shadow-md w-full sm:w-auto"
                  >
                    Return to Roles
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-xs sm:text-sm">
                
                <div className="bg-slate-50/50 p-4 rounded-2xl border border-gray-100 flex items-start gap-3">
                  <Lock className="w-5 h-5 text-[#182956] mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                    <span className="font-bold text-xs text-[#182956] block">SOC2 Secure Candidate Data Portal</span>
                    <p className="text-[11px] text-gray-500 leading-relaxed">
                      All your data is protected and encrypted. We will share your resume and profile only with the official recruitment team at {job.company}.
                    </p>
                  </div>
                </div>

                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="font-bold text-[#182956] block">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full py-3 px-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F66E3B] focus:ring-2 focus:ring-[#F66E3B]/10 bg-white font-medium text-sm transition-all duration-200"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-bold text-[#182956] block">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex.morgan@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full py-3 px-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F66E3B] focus:ring-2 focus:ring-[#F66E3B]/10 bg-white font-medium text-sm transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-[#182956] block">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full py-3 px-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F66E3B] focus:ring-2 focus:ring-[#F66E3B]/10 bg-white font-medium text-sm transition-all duration-200"
                    />
                  </div>
                </div>

                {/* US Work Authorization */}
                <div className="space-y-1.5">
                  <label className="font-bold text-[#182956] block">US Work Authorization Status *</label>
                  <CustomSelect
                    value={workStatus}
                    onChange={setWorkStatus}
                    options={workStatusOptions}
                    className="border-gray-200"
                  />
                </div>

                {/* Resume File Upload Box */}
                <div className="space-y-1.5">
                  <label className="font-bold text-[#182956] block">Attach Resume (PDF, DOCX) *</label>
                  <div 
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed p-6 rounded-2xl text-center cursor-pointer transition-all relative ${
                      isDragging 
                        ? 'border-[#F66E3B] bg-[#F66E3B]/5' 
                        : 'border-gray-200 hover:border-slate-300 bg-slate-50/50'
                    }`}
                  >
                    <input
                      type="file"
                      required={!resumeFileName}
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <Upload className="w-8 h-8 text-[#F66E3B] mx-auto mb-2" />
                    {resumeFileName ? (
                      <span className="font-bold text-[#182956] text-sm flex items-center justify-center gap-2">
                        <FileText className="w-5 h-5 text-emerald-600" /> {resumeFileName}
                      </span>
                    ) : (
                      <div className="space-y-1">
                        <span className="text-[#182956] font-bold text-xs block">
                          Drag & drop or browse from folder
                        </span>
                        <span className="text-gray-400 text-[11px] block">
                          Supported file types: PDF, DOC, DOCX up to 10MB
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Cover Note */}
                <div className="space-y-1.5">
                  <label className="font-bold text-[#182956] block">Brief Cover Note (Optional)</label>
                  <textarea
                    rows={4}
                    placeholder="Provide a short statement explaining why you'd excel in this position..."
                    value={coverNote}
                    onChange={(e) => setCoverNote(e.target.value)}
                    className="w-full py-3 px-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F66E3B] focus:ring-2 focus:ring-[#F66E3B]/10 bg-white font-medium text-sm transition-all duration-200"
                  />
                </div>

                {/* Security footer */}
                <div className="flex items-center gap-2 text-xs text-gray-500 pt-2 border-t border-gray-100">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Your submission is SOC2 compliant. Chakri never shares candidate credentials with third parties.</span>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#F66E3B] hover:bg-[#e05927] text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application to {job.company}</span>
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </main>
  );
}
