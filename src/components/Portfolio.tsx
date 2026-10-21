import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ShieldAlert, Sparkles, X } from 'lucide-react';
import { CASE_STUDIES } from '../config/siteData';
import { CaseStudy } from '../types';

export const Portfolio: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#087A5B] block mb-2">
            Practical Demonstrations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2345] tracking-tight leading-tight">
            Case Studies & Implementation Frameworks
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Concrete project architectures solving real financial bottlenecks, from backlogged bank reconciliations to strict donor grant audits.
          </p>
          <div className="h-1 w-20 bg-[#C69A3A] mt-4" />
        </div>

        {/* Confidentiality Notice */}
        <div className="mt-6 p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 inline-flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#C69A3A]" />
          <span>
            <strong>Client Confidentiality & Integrity Notice:</strong> Case studies reflect practical engagements presented with anonymized client identifiers and illustrative structures to protect non-disclosure agreements.
          </span>
        </div>

        {/* Case Studies Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#0B2345]/10 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
            >
              {/* Image & Header */}
              <div>
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2345]/90 via-[#0B2345]/30 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs font-medium bg-black/40 backdrop-blur-md px-3 py-1 rounded-md border border-white/20">
                      {item.sector}
                    </span>
                    <span className="text-[11px] text-[#E4BC5E] font-semibold uppercase tracking-wider">
                      Illustrative Case Model
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#087A5B] block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#0B2345] tracking-tight group-hover:text-[#087A5B] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <div className="mt-4 p-3.5 rounded-xl bg-[#F5F7FA] border border-slate-200/80">
                    <span className="text-xs font-bold text-[#0B2345] block mb-1">
                      The Operational Challenge:
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.challenge}
                    </p>
                  </div>

                  <div className="mt-4">
                    <span className="text-xs font-bold text-[#0B2345] block mb-2">
                      Key Interventions:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {item.workDone.slice(0, 2).map((w, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#087A5B] shrink-0 mt-0.5" />
                          <span>{w}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Outcome Strip & Modal Trigger */}
              <div className="p-6 sm:p-7 pt-0">
                <div className="p-3.5 rounded-xl bg-[#087A5B]/10 border border-[#087A5B]/20 text-xs text-[#087A5B] mb-4">
                  <strong>Outcome:</strong> {item.outcome}
                </div>

                <button
                  onClick={() => setSelectedCase(item)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-bold text-[#0B2345] bg-[#F5F7FA] hover:bg-[#0B2345] hover:text-white transition-all border border-[#0B2345]/15 cursor-pointer"
                >
                  <span>Review Complete Methodology</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C69A3A]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Detailed Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#0B2345]/20 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#087A5B]">
                  {selectedCase.sector} · {selectedCase.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B2345] mt-1 leading-snug">
                  {selectedCase.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCase(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 space-y-6 text-sm text-slate-700 leading-relaxed">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B2345] mb-1.5">
                  1. Organizational Context & Challenge
                </h4>
                <p className="bg-[#F5F7FA] p-3.5 rounded-xl border border-slate-200 text-xs text-slate-600">
                  {selectedCase.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B2345] mb-1.5">
                  2. Strategic Accounting Approach
                </h4>
                <p className="text-xs text-slate-700">
                  {selectedCase.approach}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B2345] mb-2">
                  3. Concrete Work Completed
                </h4>
                <div className="space-y-2">
                  {selectedCase.workDone.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#087A5B] shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B2345] mb-1.5">
                  4. Measurable Outcomes & Value Delivered
                </h4>
                <div className="p-4 rounded-xl bg-[#087A5B]/10 border border-[#087A5B]/20 text-xs text-[#087A5B]">
                  <strong>Results:</strong> {selectedCase.outcome}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-[11px] text-slate-500">
                Available for remote consultation or on-site deployment.
              </span>
              <a
                href="#contact"
                onClick={() => setSelectedCase(null)}
                className="px-4 py-2 text-xs font-bold text-white bg-[#0B2345] rounded-lg hover:bg-[#15396B]"
              >
                Discuss Similar Project
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
