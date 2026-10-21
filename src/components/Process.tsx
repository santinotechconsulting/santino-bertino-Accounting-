import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ENGAGEMENT_STEPS } from '../config/siteData';

export const Process: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F5F7FA] border-b border-[#0B2345]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#087A5B] block mb-2">
            Structured Collaboration
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2345] tracking-tight leading-tight">
            How We Work Together: A 4-Step Client Journey
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A transparent, disciplined path from initial discovery to lasting financial clarity, whether working remotely or on-site.
          </p>
          <div className="h-1 w-20 bg-[#C69A3A] mt-4" />
        </div>

        {/* 4-Step Process Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {ENGAGEMENT_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl p-7 border border-[#0B2345]/10 shadow-sm flex flex-col justify-between hover:border-[#C69A3A]/50 transition-all relative group"
            >
              <div>
                {/* Step Pill & Step Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-brand text-2xl font-black text-[#0B2345] group-hover:text-[#C69A3A] transition-colors">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-full">
                    {step.duration}
                  </span>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-[#087A5B] block mb-1">
                  {step.subtitle}
                </span>

                <h3 className="text-lg font-bold text-[#0B2345] tracking-tight">
                  {step.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Tangible Deliverable Box */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B2345] block mb-1">
                  Deliverable:
                </span>
                <p className="text-xs text-slate-600 leading-snug">
                  {step.deliverable}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-xs font-bold text-white bg-[#0B2345] hover:bg-[#15396B] transition-all shadow-sm uppercase tracking-wider"
          >
            <span>Begin Step 1: Schedule Your Initial Consultation</span>
            <ArrowRight className="w-4 h-4 text-[#E4BC5E]" />
          </a>
        </div>

      </div>
    </section>
  );
};
