import React, { useState } from 'react';
import { ABOUT_DATA } from '../../data/aboutData';
import { Mail, Phone, MapPin, Send, CheckCircle2, Building2 } from 'lucide-react';
import CustomSelect from '../common/CustomSelect';

export default function ContactFormSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Candidate Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
    }, 1000);
  };

  return (
    <section className="py-16 bg-white text-[#182956]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto">
          
          {/* Right Form */}
          <div className="bg-[#182956] text-white p-8 rounded-3xl shadow-xl space-y-6">
            <div>
              <h3 className="font-space font-bold text-2xl text-white">
                Send Us a Message
              </h3>
              <p className="text-xs text-[#FCB2B1] mt-1">
                Our team responds to candidate and employer inquiries within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="bg-[#223872] p-8 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#F66E3B] mx-auto" />
                <h4 className="font-space font-bold text-xl text-white">Message Transmitted</h4>
                <p className="text-xs text-white/80">
                  Thank you for reaching out. A Chakri US specialist will follow up with you at <strong className="text-[#FCB2B1]">{email || 'your email'}</strong> shorty.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-[#F66E3B] text-white font-bold text-xs rounded-xl"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-semibold text-white block">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3 rounded-xl bg-[#223872] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#F66E3B]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-white block">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 rounded-xl bg-[#223872] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#F66E3B]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-white block">Inquiry Type</label>
                  <CustomSelect
                    value={subject}
                    onChange={setSubject}
                    options={[
                      { value: 'Candidate Inquiry', label: 'Job Seeker / Candidate Inquiry' },
                      { value: 'Employer Partnership', label: 'Employer Partnership / Posting Jobs' },
                      { value: 'Pay Transparency Guidelines', label: 'Pay Transparency Guidelines Question' },
                      { value: 'Press / Media', label: 'Press / Media Inquiry' },
                    ]}
                    variant="dark"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-white block">Your Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we assist your US career journey or hiring needs?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#223872] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#F66E3B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#F66E3B] hover:bg-[#e05927] text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Chakri USA</span>
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
