import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, GraduationCap, Briefcase, Award, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG, QUALIFICATIONS, CROSS_SECTOR_EXPERIENCE } from '../config/siteData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl border border-[#0B2345]/20 max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95">
        
        {/* Modal Top Control Bar */}
        <div className="bg-[#0B2345] px-6 py-4 flex items-center justify-between text-white shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-brand text-lg font-bold text-white tracking-wide">
              Curriculum Vitae
            </span>
            <span className="text-xs text-[#E4BC5E] bg-white/10 px-2.5 py-0.5 rounded">
              Verified Profile
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors cursor-pointer"
              title="Print Curriculum Vitae"
            >
              <Printer className="w-3.5 h-3.5 text-[#E4BC5E]" />
              <span>Print / Save PDF</span>
            </button>
            
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body Container */}
        <div className="p-6 sm:p-10 overflow-y-auto text-[#283342] space-y-8 print:p-0 print:space-y-6">
          
          {/* Header Block */}
          <div className="border-b-2 border-[#0B2345] pb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="font-brand text-3xl font-extrabold text-[#0B2345] tracking-tight">
                  Santino Bertino
                </h1>
                <p className="text-sm font-bold uppercase tracking-wider text-[#087A5B] mt-1">
                  Accounting & Financial Services Professional
                </p>
              </div>

              <div className="text-xs text-slate-600 sm:text-right space-y-1">
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#0B2345]" />
                  <a href={`mailto:${SITE_CONFIG.email}`} className="hover:underline">{SITE_CONFIG.email}</a>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#087A5B]" />
                  <span>{SITE_CONFIG.internationalPhone}</span>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5 text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-[#C69A3A]" />
                  <span>Cameroon · Available Worldwide & On-Site</span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-700 leading-relaxed max-w-3xl">
              {SITE_CONFIG.positioningStatement}
            </p>
          </div>

          {/* Academic Background Section */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-[#0B2345]">
              <GraduationCap className="w-5 h-5 text-[#C69A3A]" />
              <h2 className="text-base font-bold uppercase tracking-wider">
                Academic Qualifications
              </h2>
            </div>

            <div className="space-y-4">
              <div className="bg-[#F5F7FA] p-4 rounded-xl border border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h3 className="text-sm font-bold text-[#0B2345]">
                    Master of Science (M.Sc.) in Accounting
                  </h3>
                  <span className="text-xs font-semibold text-[#087A5B]">University of Bamenda</span>
                </div>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Postgraduate degree covering corporate financial reporting, managerial cost accounting, forensic auditing methodologies, and empirical research in accounting information systems.
                </p>
              </div>

              <div className="bg-[#F5F7FA] p-4 rounded-xl border border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h3 className="text-sm font-bold text-[#0B2345]">
                    Bachelor of Science (B.Sc.) in Accounting
                  </h3>
                  <span className="text-xs font-semibold text-[#087A5B]">Catholic University of Cameroon (CATUC), Bamenda</span>
                </div>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Undergraduate program providing deep grounding in double-entry bookkeeping, auditing principles, cost accounting, commercial law, and taxation standards.
                </p>
              </div>
            </div>
          </div>

          {/* Professional Credentials Section */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-[#0B2345]">
              <Award className="w-5 h-5 text-[#087A5B]" />
              <h2 className="text-base font-bold uppercase tracking-wider">
                Professional Syllabus & Credentials
              </h2>
            </div>

            <div className="bg-[#F5F7FA] p-4 rounded-xl border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <h3 className="text-sm font-bold text-[#0B2345]">
                  ACCA-Related Qualification & Certification
                </h3>
                <span className="text-xs font-semibold text-slate-600">Association of Chartered Certified Accountants</span>
              </div>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Professional curriculum covering International Financial Reporting Standards (IFRS), corporate governance, financial management, performance management, and audit integrity.
              </p>
            </div>
          </div>

          {/* Cross-Sector Experience Section */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-[#0B2345]">
              <Briefcase className="w-5 h-5 text-[#0B2345]" />
              <h2 className="text-base font-bold uppercase tracking-wider">
                Cross-Sector Experience & Key Exposures
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CROSS_SECTOR_EXPERIENCE.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B2345]">
                    {exp.sectorName}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="space-y-1 text-xs text-slate-600 pt-1">
                    {exp.responsibilities.slice(0, 2).map((r, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#087A5B] shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Core Areas of Competency */}
          <div>
            <h2 className="text-base font-bold uppercase tracking-wider text-[#0B2345] mb-3">
              Core Technical Competencies
            </h2>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                'Financial Accounting & Bookkeeping',
                'Multi-Currency Bank Reconciliations',
                'Management Accounts & Variance Analysis',
                'Rolling Cash Flow Forecasting',
                'NGO Grant Budgeting & Donor Reporting',
                'Internal Controls & Segregation of Duties',
                'OHADA & IFRS Accounting Frameworks',
                'QuickBooks, Xero, Sage & Advanced Excel',
              ].map((skill, idx) => (
                <span key={idx} className="bg-[#F5F7FA] px-3 py-1.5 rounded-lg border border-slate-200 text-[#0B2345] font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Declaration of Integrity */}
          <div className="pt-4 border-t border-slate-200 text-[11px] text-slate-500 text-center italic">
            This document represents verified academic degrees and authenticated professional exposures of Santino Bertino.
          </div>

        </div>

      </div>
    </div>
  );
};
