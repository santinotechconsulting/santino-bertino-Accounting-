import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Globe2, 
  Lock,
  ArrowRight,
  Copy
} from 'lucide-react';
import { SITE_CONFIG, CORE_SERVICES } from '../config/siteData';
import { ContactSubmission, OrganizationType } from '../types';

interface ContactProps {
  initialService?: string;
  initialMessage?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService = '', initialMessage = '' }) => {
  const [formData, setFormData] = useState<ContactSubmission>({
    fullName: '',
    email: '',
    telephone: '',
    organizationName: '',
    organizationType: 'SME',
    serviceRequired: initialService || CORE_SERVICES[0].title,
    engagementMode: 'Remote (Worldwide)',
    message: initialMessage,
    consent: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceRequired: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialMessage) {
      setFormData((prev) => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief description of your needs.';
    }
    if (!formData.consent) {
      errs.consent = 'You must acknowledge the confidentiality policy to proceed.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Save inquiry to localStorage for persistence
    try {
      const existing = JSON.parse(localStorage.getItem('santino_inquiries') || '[]');
      existing.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('santino_inquiries', JSON.stringify(existing));
    } catch {
      // Ignore
    }

    // Simulate network processing and provide direct mailto action
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#087A5B] block mb-2">
            Initiate Conversation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2345] tracking-tight leading-tight">
            Let's Build Stronger Financial Foundations for Your Organization
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you are launching a startup, managing an established SME, or overseeing the finances of a not-for-profit organization, let's discuss how structured accounting and effective financial management can support your objectives.
          </p>
          <div className="h-1 w-20 bg-[#C69A3A] mt-4" />
        </div>

        {/* 2-Column Contact Container */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Verified Contact Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Details Card */}
            <div className="p-7 rounded-2xl bg-white border border-[#0B2345]/10 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-[#0B2345]">
                Direct Contact Information
              </h3>
              
              <div className="space-y-4 text-sm">
                
                {/* Email Address */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#F5F7FA] border border-slate-200">
                  <div className="p-2.5 rounded-lg bg-[#0B2345] text-white shrink-0">
                    <Mail className="w-4 h-4 text-[#E4BC5E]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs text-slate-500 font-medium block">Professional Email</span>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-xs sm:text-sm font-bold text-[#0B2345] hover:text-[#087A5B] transition-colors truncate block"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 cursor-pointer"
                    title="Copy email address"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#F5F7FA] border border-slate-200">
                  <div className="p-2.5 rounded-lg bg-[#087A5B] text-white shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-slate-500 font-medium block">Direct Telephone</span>
                    <a
                      href={`tel:+237${SITE_CONFIG.rawPhone}`}
                      className="text-xs sm:text-sm font-bold text-[#0B2345] hover:text-[#087A5B] transition-colors"
                    >
                      {SITE_CONFIG.internationalPhone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#087A5B]/10 border border-[#087A5B]/20">
                  <div className="p-2.5 rounded-lg bg-[#087A5B] text-white shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-[#087A5B] font-bold block">WhatsApp Consultation</span>
                    <a
                      href={SITE_CONFIG.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-bold text-[#0B2345] hover:underline flex items-center gap-1 mt-0.5"
                    >
                      <span>Chat directly on WhatsApp</span>
                      <ArrowRight className="w-3 h-3 text-[#087A5B]" />
                    </a>
                  </div>
                </div>

              </div>

              {copiedEmail && (
                <div className="text-xs text-[#087A5B] font-semibold text-center">
                  Email copied to clipboard!
                </div>
              )}
            </div>

            {/* Global Reach Guarantee Card */}
            <div className="p-6 rounded-2xl bg-[#0B2345] text-white border border-[#C69A3A]/30 space-y-3">
              <div className="flex items-center gap-2 text-[#E4BC5E]">
                <Globe2 className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Location Independence
                </span>
              </div>
              <h4 className="text-base font-bold text-white">
                Available for Engagements in Any Location
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Whether you are based locally in Cameroon, across the African continent, or internationally in North America or Europe, we facilitate digital document exchange, encrypted accounting reviews, and video conferences with zero geographical limitations.
              </p>
            </div>

            {/* Confidentiality Notice */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 flex items-center gap-2.5">
              <Lock className="w-4 h-4 text-[#C69A3A] shrink-0" />
              <span>
                <strong>Confidentiality Pledge:</strong> All operational details, financial statements, and enquiry contents are treated under strict professional non-disclosure.
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Request Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-9 rounded-2xl border border-[#0B2345]/10 shadow-sm">
            {isSubmitted ? (
              <div className="py-10 text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 bg-[#087A5B]/15 text-[#087A5B] rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B2345]">
                  Enquiry Successfully Sent
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Santino Bertino has received your consultation request for <strong>{formData.serviceRequired}</strong>. You will receive a direct reply within 24 to 48 hours.
                </p>

                <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(
                      `Consultation: ${formData.serviceRequired} - ${formData.fullName}`
                    )}&body=${encodeURIComponent(
                      `Hello Santino,\n\nI submitted the following inquiry:\n\nName: ${formData.fullName}\nOrganization: ${formData.organizationName} (${formData.organizationType})\nService: ${formData.serviceRequired}\nLocation Mode: ${formData.engagementMode}\n\nDetails:\n${formData.message}\n\nBest regards,\n${formData.fullName}`
                    )}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#0B2345] text-white text-xs font-semibold hover:bg-[#15396B]"
                  >
                    <Mail className="w-4 h-4 text-[#E4BC5E]" />
                    <span>Open Email Draft Copy</span>
                  </a>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        telephone: '',
                        organizationName: '',
                        organizationType: 'SME',
                        serviceRequired: CORE_SERVICES[0].title,
                        engagementMode: 'Remote (Worldwide)',
                        message: '',
                        consent: true,
                      });
                    }}
                    className="px-4 py-2.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-[#0B2345] mb-2">
                  Request an Accounting Consultation
                </h3>

                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0B2345] mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marie Claire / John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-[#F5F7FA] focus:bg-white focus:outline-none transition-colors ${
                        errors.fullName ? 'border-red-500' : 'border-slate-300 focus:border-[#0B2345]'
                      }`}
                    />
                    {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0B2345] mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. client@organization.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-[#F5F7FA] focus:bg-white focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500' : 'border-slate-300 focus:border-[#0B2345]'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Telephone & Organization Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0B2345] mb-1.5">
                      Telephone / WhatsApp Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +237 6XX XX XX XX"
                      value={formData.telephone}
                      onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 bg-[#F5F7FA] focus:bg-white focus:outline-none focus:border-[#0B2345]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0B2345] mb-1.5">
                      Organization / Business Name (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Green Horizons NGO / Tech Ltd"
                      value={formData.organizationName}
                      onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 bg-[#F5F7FA] focus:bg-white focus:outline-none focus:border-[#0B2345]"
                    />
                  </div>
                </div>

                {/* Organization Type & Service Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0B2345] mb-1.5">
                      Organization Structure
                    </label>
                    <select
                      value={formData.organizationType}
                      onChange={(e) => setFormData({ ...formData, organizationType: e.target.value as OrganizationType })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 bg-[#F5F7FA] focus:bg-white focus:outline-none focus:border-[#0B2345]"
                    >
                      <option value="SME">Small & Medium Enterprise (SME)</option>
                      <option value="Startup">Early-Stage Venture / Startup</option>
                      <option value="NGO">NGO / Not-for-Profit Organization</option>
                      <option value="Other">Public Institution / Individual</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0B2345] mb-1.5">
                      Service of Primary Interest
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 bg-[#F5F7FA] focus:bg-white focus:outline-none focus:border-[#0B2345]"
                    >
                      {CORE_SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="General Financial Advisory">General Financial Advisory / Custom Scope</option>
                    </select>
                  </div>
                </div>

                {/* Location / Engagement Mode */}
                <div>
                  <label className="block text-xs font-semibold text-[#0B2345] mb-1.5">
                    Preferred Engagement Mode
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'Remote (Worldwide)', label: 'Remote Worldwide (Cloud)' },
                      { id: 'On-Site', label: 'On-Site Mission' },
                      { id: 'Hybrid', label: 'Hybrid Remote/Visit' },
                    ].map((modeOption) => (
                      <button
                        key={modeOption.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, engagementMode: modeOption.id as any })}
                        className={`py-2 px-2 text-[11px] font-semibold rounded-lg border transition-all cursor-pointer text-center ${
                          formData.engagementMode === modeOption.id
                            ? 'bg-[#0B2345] text-white border-[#0B2345]'
                            : 'bg-[#F5F7FA] text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {modeOption.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message Body */}
                <div>
                  <label className="block text-xs font-semibold text-[#0B2345] mb-1.5">
                    Brief Description of Your Needs <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your current accounting bottlenecks, backlog, reporting deadlines, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-[#F5F7FA] focus:bg-white focus:outline-none transition-colors ${
                      errors.message ? 'border-red-500' : 'border-slate-300 focus:border-[#0B2345]'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 rounded text-[#0B2345] focus:ring-[#0B2345]"
                  />
                  <label htmlFor="consent" className="text-xs text-slate-600 leading-normal">
                    I acknowledge that the information provided will be treated confidentially and used solely to prepare a response to this professional enquiry.
                  </label>
                </div>
                {errors.consent && <p className="text-[11px] text-red-500">{errors.consent}</p>}

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg text-xs sm:text-sm font-bold text-white bg-[#0B2345] hover:bg-[#15396B] transition-all shadow-md cursor-pointer border border-[#C69A3A]/30 uppercase tracking-wider disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Processing Enquiry...</span>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <Send className="w-4 h-4 text-[#E4BC5E]" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
