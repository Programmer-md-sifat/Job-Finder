import React, { useState, useMemo } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'seekers' | 'employers' | 'salary';
}

const FAQ_DATA: FAQItem[] = [
  {
    category: 'general',
    question: 'What is Chakri and how does it differ from other job boards?',
    answer: 'Chakri is a premium, high-fidelity USA career portal designed specifically to match top-tier professional talent with leading tech companies and enterprises. Unlike general job boards, we enforce 100% salary transparency, verify employer credentials, and offer direct communication channels to eliminate the typical "job application black hole."',
  },
  {
    category: 'salary',
    question: 'How do you guarantee 100% salary transparency?',
    answer: 'Every job listing published on Chakri must contain a clearly defined, verifiable base salary range or hourly compensation rate. We verify these ranges against local US state labor compliance requirements and industry salary benchmarks to ensure honesty and fairness before any listing goes live.',
  },
  {
    category: 'seekers',
    question: 'Is using Chakri completely free for job seekers?',
    answer: 'Yes! All core services for job seekers are 100% free. You can search for openings, apply to unlimited job listings, set up automated instant search alerts, and view company profile insights without any premium subscription fees or hidden paywalls.',
  },
  {
    category: 'seekers',
    question: 'Does Chakri support remote jobs and international visa sponsorship?',
    answer: 'Yes. Chakri contains a robust filter for "Remote - USA" positions and fully remote global setups. Additionally, each job listing displays a distinct tag indicating whether the employer offers visa sponsorship (such as H-1B transfer, cap-exempt filing, or OPT/CPT assistance).',
  },
  {
    category: 'employers',
    question: 'How can employers post job opportunities and verify their profiles?',
    answer: 'Employers can easily list jobs by clicking the "Post a Job" button in the navbar. To get a "Verified Employer" blue badge, our corporate compliance team reviews your business registration, official tax identifier, and domain validation. Verified listings receive up to 3x more views and higher response rates.',
  },
  {
    category: 'salary',
    question: 'How often is the US job database updated?',
    answer: 'Our job feeds and custom-vetted openings are updated in real-time. Outdated listings are automatically archived after 30 days of inactivity, ensuring that you only apply to active roles where recruiters are actively hiring.',
  },
  {
    category: 'general',
    question: 'What is the best way to stand out to verified recruiters on Chakri?',
    answer: 'We recommend completing your professional profile in full, uploading a modern PDF resume, and subscribing to specific email alert interests. Highlighting your key certifications and matching salary expectations enables our matching algorithms to showcase your profile to top recruiters.',
  },
];

export default function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General Info' },
    { id: 'seekers', label: 'For Candidates' },
    { id: 'employers', label: 'For Employers' },
    { id: 'salary', label: 'Salary & Trust' },
  ];

  const filteredFAQs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      return matchesCategory;
    });
  }, [selectedCategory]);

  return (
    <section className="py-20 bg-[#EFECEC] text-[#182956]" id="faq-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F66E3B] bg-[#F66E3B]/10 px-3.5 py-1.5 rounded-full mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#182956] leading-tight">
            Got Questions? We Have <span className="text-[#F66E3B]">Answers</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600">
            Learn more about how Chakri works, how we verify salary information, and how we help you fast-track your tech career in the United States.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="max-w-4xl mx-auto mb-10">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setOpenIndex(0); // Reset accordion to first item in new category
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#182956] text-white shadow-md scale-[1.02]'
                    : 'bg-white text-[#182956]/80 hover:bg-white/90 border border-gray-200/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl border transition-all duration-300 ${
                    isOpen 
                      ? 'border-[#F66E3B]/30 shadow-md ring-1 ring-[#F66E3B]/10' 
                      : 'border-gray-200/80 shadow-sm hover:border-gray-300'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 group cursor-pointer focus:outline-none"
                  >
                    <span className="font-space font-bold text-sm sm:text-base text-[#182956] group-hover:text-[#F66E3B] transition-colors leading-snug">
                      {item.question}
                    </span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen ? 'bg-[#F66E3B]/10 text-[#F66E3B]' : 'bg-gray-100 text-[#182956]/70'
                    }`}>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {/* Accordion Panel Content with transition classes */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}>
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-50">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300 max-w-xl mx-auto">
              <Sparkles className="w-8 h-8 text-gray-400 mx-auto mb-3" />
              <p className="text-sm font-medium text-gray-500">No questions found in this category.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                }}
                className="mt-3 text-xs font-bold text-[#F66E3B] hover:underline"
              >
                Reset Category
              </button>
            </div>
          )}
        </div>

        {/* Call to Action Support Card */}
        <div className="max-w-4xl mx-auto mt-14 bg-gradient-to-r from-[#182956] to-[#223872] text-white p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/5">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-white/10 text-[#F66E3B] flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-space font-bold text-base sm:text-lg">Still have questions?</h4>
              <p className="text-xs sm:text-sm text-white/80">Our support team is available 24/7 to help you resolve any issues.</p>
            </div>
          </div>
          <a
            href="mailto:support@chakri.com"
            onClick={(e) => e.preventDefault()}
            className="px-5 py-3 rounded-xl bg-[#F66E3B] hover:bg-[#e05927] text-white font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95 flex items-center gap-2 group whitespace-nowrap"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
}

