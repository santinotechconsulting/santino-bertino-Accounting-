import React from 'react';
import { GraduationCap, Briefcase, FileText, CheckCircle2, Globe2, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteData';

interface AboutProps {
  onOpenCvModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenCvModal }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-[#0B2345]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#087A5B] mb-2">
            <span>Professional Profile & Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2345] tracking-tight leading-tight">
            A Strong Foundation in Accounting. A Broader Perspective on Finance.
          </h2>
          <div className="h-1 w-20 bg-[#C69A3A] mt-4" />
        </div>

        {/* 2-Column Content Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Biography Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed text-base sm:text-lg">
            <p>
              <strong className="text-[#0B2345] font-semibold">Santino Bertino</strong> is an accounting and financial services professional with rigorous academic training at the <strong className="text-[#0B2345] font-semibold">Catholic University of Cameroon (CATUC), Bamenda</strong>, where he obtained his B.Sc. in Accounting, and the <strong className="text-[#0B2345] font-semibold">University of Bamenda</strong>, where he earned his M.Sc. in Accounting.
            </p>

            <p>
              His professional exposure spans the <strong className="text-[#0B2345] font-semibold">public sector, private sector, banking industry, and non-governmental organizations (NGOs)</strong>. This cross-sector experience provides a broad perspective on financial administration, accounting processes, organizational accountability, and the importance of reliable financial information.
            </p>

            <p>
              Santino is committed to helping SMEs, startups, and not-for-profit organizations improve their financial management practices, strengthen internal processes, and make better-informed operational and strategic decisions.
            </p>

            <p>
              His approach combines deep accounting knowledge, analytical thinking, professional integrity, and a practical understanding of the real-world financial challenges organizations face every day.
            </p>

            {/* Core Values Callout */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B2345] block mb-3">
                Core Guiding Principles
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#087A5B] shrink-0 mt-0.5" />
                  <span><strong>Financial Accuracy:</strong> Zero-tolerance for unverified transactions.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#087A5B] shrink-0 mt-0.5" />
                  <span><strong>Total Accountability:</strong> Transparent records for donors & stakeholders.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#087A5B] shrink-0 mt-0.5" />
                  <span><strong>Practical Solutions:</strong> Real workflows over theoretical jargon.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#087A5B] shrink-0 mt-0.5" />
                  <span><strong>Sustainable Growth:</strong> Strong controls that scale as you grow.</span>
                </div>
              </div>
            </div>

            {/* Actions: View CV & Contact */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-[#0B2345] hover:bg-[#15396B] transition-all shadow-sm cursor-pointer border border-[#C69A3A]/30"
              >
                <FileText className="w-4 h-4 text-[#E4BC5E]" />
                <span>View & Download Curriculum Vitae</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-[#0B2345] bg-[#F5F7FA] hover:bg-slate-200 transition-all border border-slate-200"
              >
                <span>Request Consultation</span>
              </a>
            </div>
          </div>

          {/* Right Column: Academic & Sector Credentials Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Academic Credentials Box */}
            <div className="p-6 rounded-2xl bg-[#F5F7FA] border border-[#0B2345]/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-[#0B2345] text-white">
                  <GraduationCap className="w-5 h-5 text-[#E4BC5E]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#087A5B]">
                    Academic Credentials
                  </span>
                  <h3 className="text-base font-bold text-[#0B2345]">Verified University Degrees</h3>
                </div>
              </div>

              <div className="space-y-4 text-sm divide-y divide-slate-200/80">
                <div className="pt-2 first:pt-0">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-bold text-[#0B2345]">{SITE_CONFIG.academicFoundation.msc.degree}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium block mt-0.5">
                    {SITE_CONFIG.academicFoundation.msc.institution}
                  </span>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {SITE_CONFIG.academicFoundation.msc.focus}
                  </p>
                </div>

                <div className="pt-4">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-bold text-[#0B2345]">{SITE_CONFIG.academicFoundation.bsc.degree}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium block mt-0.5">
                    {SITE_CONFIG.academicFoundation.bsc.institution}
                  </span>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {SITE_CONFIG.academicFoundation.bsc.focus}
                  </p>
                </div>

                <div className="pt-4">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-bold text-[#0B2345]">{SITE_CONFIG.academicFoundation.acca.title}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium block mt-0.5">
                    {SITE_CONFIG.academicFoundation.acca.institution}
                  </span>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {SITE_CONFIG.academicFoundation.acca.note}
                  </p>
                </div>
              </div>
            </div>

            {/* Global Reach Assurance Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0B2345] to-[#07172F] text-white shadow-md border border-[#C69A3A]/20">
              <div className="flex items-center gap-2.5 text-[#E4BC5E] mb-2">
                <Globe2 className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Location Agnostic Advisory
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Serving Clients In Any Location
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Whether you operate an SME in Central/West Africa, an emerging startup with international founders, or an NGO with global donors, our digital accounting stack and secure remote review channels guarantee seamless financial visibility anywhere in the world.
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#E4BC5E]">
                <span>Cloud Accounting · Remote Access</span>
                <span>On-Site Missions Available</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
