import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck, X } from 'lucide-react';
import { Logo } from './Logo';
import { SITE_CONFIG, CORE_SERVICES } from '../config/siteData';

export const Footer: React.FC = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <footer className="bg-[#07172F] text-slate-300 border-t border-[#C69A3A]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="footer" showTagline={true} />
            <p className="text-xs text-slate-400 leading-relaxed pt-2">
              {SITE_CONFIG.positioningStatement}
            </p>
            <div className="pt-2 text-xs text-[#E4BC5E] flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#0FA57D]" />
              <span>Available for Remote Engagements Worldwide & On-Site Projects</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E4BC5E] block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Santino</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-white transition-colors">Sectors Served</a>
              </li>
              <li>
                <a href="#qualifications" className="hover:text-white transition-colors">Qualifications</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#insights" className="hover:text-white transition-colors">Financial Insights</a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>

            </ul>
          </div>

          {/* Column 3: Professional Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E4BC5E] block">
              Core Practices
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              {CORE_SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Inquiries (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E4BC5E] block">
              Direct Contact
            </span>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#E4BC5E] shrink-0 mt-0.5" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-slate-300 hover:text-white transition-colors break-all">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#0FA57D] shrink-0 mt-0.5" />
                <a href={`tel:+237${SITE_CONFIG.rawPhone}`} className="text-slate-300 hover:text-white transition-colors">
                  {SITE_CONFIG.internationalPhone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E4BC5E] shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  Bamenda, Cameroon · Serving Local & Global Clients
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#087A5B] hover:bg-[#065B43] text-white text-xs font-semibold transition-colors"
              >
                <span>WhatsApp Direct</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Privacy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 <strong>Santino Bertino</strong>. All rights reserved. Professional Accounting, Financial Services & Advisory.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <span>Accurate Credentials Verified</span>
          </div>
        </div>

      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-slate-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#0B2345]/20 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <h3 className="text-lg font-bold text-[#0B2345] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#087A5B]" />
                <span>Privacy & Client Confidentiality Notice</span>
              </h3>
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-3 text-xs leading-relaxed text-slate-600">
              <p>
                <strong>1. Data Collection:</strong> Information submitted via the consultation forms on this website (such as name, email, phone number, and organizational context) is used exclusively for professional communication and scope preparation.
              </p>
              <p>
                <strong>2. Non-Disclosure & Integrity:</strong> All business financial records, balance sheets, donor grant files, and discussions are treated with the highest degree of professional confidentiality standard in the accounting profession.
              </p>
              <p>
                <strong>3. No Third-Party Sales:</strong> Your contact information is never sold, rented, or distributed to advertising brokers.
              </p>
              <p>
                <strong>4. Security:</strong> Technical safeguards are maintained to protect enquiry records from unauthorized access.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-right">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="px-4 py-2 text-xs font-bold text-white bg-[#0B2345] rounded-lg hover:bg-[#15396B] cursor-pointer"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
