import React, { useState, useEffect } from 'react';
import { Quote, CheckCircle, Plus, X, Building2, ShieldCheck, MapPin, Sparkles, Send } from 'lucide-react';
import { TESTIMONIALS } from '../config/siteData';
import { TestimonialItem } from '../types';

export const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(TESTIMONIALS);
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // New feedback form state
  const [newFeedback, setNewFeedback] = useState({
    author: '',
    role: '',
    organization: '',
    sector: 'SME' as TestimonialItem['sector'],
    engagementType: '',
    location: '',
    quote: '',
    permissionToPublish: true,
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem('santino_custom_testimonials');
      if (stored) {
        const parsed: TestimonialItem[] = JSON.parse(stored);
        setTestimonials([...TESTIMONIALS, ...parsed]);
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const sectors = ['All', 'NGO', 'SME', 'Startup', 'Banking & Corporate'];

  const filtered = testimonials.filter((item) => {
    if (selectedSector === 'All') return true;
    return item.sector === selectedSector;
  });

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFeedback.author || !newFeedback.quote || !newFeedback.organization) return;

    const newEntry: TestimonialItem = {
      id: `test-custom-${Date.now()}`,
      author: newFeedback.author.trim(),
      role: newFeedback.role.trim() || 'Professional Collaborator',
      organization: newFeedback.organization.trim(),
      sector: newFeedback.sector,
      engagementType: newFeedback.engagementType.trim() || 'Financial Advisory',
      location: newFeedback.location.trim() || 'Worldwide / Remote',
      quote: newFeedback.quote.trim(),
      verified: true,
      permissionToPublish: newFeedback.permissionToPublish,
    };

    const updatedCustom = [newEntry];
    try {
      const existingRaw = localStorage.getItem('santino_custom_testimonials');
      const existing = existingRaw ? JSON.parse(existingRaw) : [];
      const combined = [...existing, newEntry];
      localStorage.setItem('santino_custom_testimonials', JSON.stringify(combined));
    } catch {
      // Ignore
    }

    setTestimonials((prev) => [...prev, newEntry]);
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setIsModalOpen(false);
      setNewFeedback({
        author: '',
        role: '',
        organization: '',
        sector: 'SME',
        engagementType: '',
        location: '',
        quote: '',
        permissionToPublish: true,
      });
    }, 1500);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white border-b border-[#0B2345]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#087A5B] block mb-2">
              Client Feedback & Social Proof
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2345] tracking-tight leading-tight">
              Professional Endorsements & Client References
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              Authentic feedback from organizational leaders, grant directors, and founders who have experienced Santino Bertino’s financial rigor firsthand.
            </p>
            <div className="h-1 w-20 bg-[#C69A3A] mt-4" />
          </div>

          {/* Action to submit reference / feedback */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-[#0B2345] bg-[#F5F7FA] hover:bg-slate-200 border border-[#0B2345]/20 shadow-xs transition-all cursor-pointer shrink-0 self-start md:self-auto"
          >
            <Plus className="w-4 h-4 text-[#C69A3A]" />
            <span>Submit Client Feedback</span>
          </button>
        </div>

        {/* Sector Filter Bar */}
        <div className="mt-10 flex flex-wrap items-center gap-1.5 p-1 bg-[#F5F7FA] rounded-xl border border-slate-200 max-w-2xl">
          {sectors.map((sec) => (
            <button
              key={sec}
              onClick={() => setSelectedSector(sec)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                selectedSector === sec
                  ? 'bg-[#0B2345] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0B2345] hover:bg-slate-200/60'
              }`}
            >
              {sec === 'All' ? 'All References' : sec}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-[#F5F7FA] rounded-2xl p-7 sm:p-8 border border-[#0B2345]/10 shadow-xs hover:border-[#C69A3A]/50 hover:shadow-md transition-all flex flex-col justify-between relative group"
            >
              <div>
                {/* Quotation icon and engagement header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <Quote className="w-5 h-5 text-[#C69A3A]" />
                  </div>

                  {/* Clean unboxed metadata separator */}
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                    <span className="text-[#087A5B] font-bold">{item.sector}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 text-[#087A5B]">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Verified Client</span>
                    </span>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed font-normal">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Attribution Block */}
              <div className="mt-6 pt-5 border-t border-slate-200/80">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-bold text-[#0B2345]">
                      {item.author}
                    </h4>
                    <p className="text-xs text-slate-600 font-medium">
                      {item.role} · <strong className="text-slate-700">{item.organization}</strong>
                    </p>
                  </div>

                  <div className="text-[11px] text-slate-500 sm:text-right">
                    <span className="block font-medium text-[#0B2345]">
                      {item.engagementType}
                    </span>
                    <span className="flex items-center sm:justify-end gap-1 text-slate-400 mt-0.5">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust & Transparency Footnote */}
        <div className="mt-10 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#087A5B] shrink-0" />
            <span>
              <strong>Authenticity & Professional Discretion:</strong> All testimonials reflect verified engagements and are published with explicit stakeholder consent.
            </span>
          </div>
          <span className="text-[11px] text-slate-400">
            Permission to publish confirmed.
          </span>
        </div>

      </div>

      {/* Submit Feedback Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#0B2345]/20 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#087A5B]">
                  Client & Partner Reference
                </span>
                <h3 className="text-xl font-bold text-[#0B2345] mt-0.5">
                  Submit Feedback for Santino Bertino
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitSuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 bg-[#087A5B]/15 text-[#087A5B] rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-[#0B2345]">Thank You!</h4>
                <p className="text-xs text-slate-600">
                  Your reference has been successfully saved to the client feedback register.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitFeedback} className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0B2345] mb-1">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Johnathan Miller"
                    value={newFeedback.author}
                    onChange={(e) => setNewFeedback({ ...newFeedback, author: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#0B2345]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#0B2345] mb-1">
                      Professional Role / Title
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Finance Director / Founder"
                      value={newFeedback.role}
                      onChange={(e) => setNewFeedback({ ...newFeedback, role: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#0B2345]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0B2345] mb-1">
                      Organization Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sahel Innovation Hub"
                      value={newFeedback.organization}
                      onChange={(e) => setNewFeedback({ ...newFeedback, organization: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#0B2345]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#0B2345] mb-1">
                      Sector Category
                    </label>
                    <select
                      value={newFeedback.sector}
                      onChange={(e) => setNewFeedback({ ...newFeedback, sector: e.target.value as any })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#0B2345]"
                    >
                      <option value="SME">Commercial SME</option>
                      <option value="Startup">Startup / Venture</option>
                      <option value="NGO">NGO / Non-Profit</option>
                      <option value="Banking & Corporate">Banking & Corporate</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0B2345] mb-1">
                      City / Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Yaoundé, Cameroon / Remote"
                      value={newFeedback.location}
                      onChange={(e) => setNewFeedback({ ...newFeedback, location: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#0B2345]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B2345] mb-1">
                    Engagement Nature / Project Focus
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Annual Audit Preparation & Account Reconciliation"
                    value={newFeedback.engagementType}
                    onChange={(e) => setNewFeedback({ ...newFeedback, engagementType: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#0B2345]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B2345] mb-1">
                    Feedback / Endorsement Quote <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe Santino’s impact on your financial reporting, accuracy, reconciliation, or compliance..."
                    value={newFeedback.quote}
                    onChange={(e) => setNewFeedback({ ...newFeedback, quote: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#0B2345]"
                  />
                </div>

                {/* Permission to publish checkbox */}
                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="perm"
                    checked={newFeedback.permissionToPublish}
                    onChange={(e) => setNewFeedback({ ...newFeedback, permissionToPublish: e.target.checked })}
                    className="mt-0.5 rounded text-[#0B2345]"
                  />
                  <label htmlFor="perm" className="text-xs text-slate-600 leading-tight">
                    I grant permission for this professional feedback to be displayed on Santino Bertino’s public portfolio website.
                  </label>
                </div>

                <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-xs text-slate-600 hover:text-slate-900 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#0B2345] rounded-lg hover:bg-[#15396B] cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-[#E4BC5E]" />
                    <span>Submit Endorsement</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
