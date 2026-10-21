import React from 'react';
import { ArrowRight, Globe, Shield, Award, Landmark, BookOpenCheck } from 'lucide-react';
import { SantinoPortrait } from './SantinoPortrait';

interface HeroProps {
  onSelectService?: (serviceId: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-white via-[#F5F7FA] to-[#EDF2F7] overflow-hidden">
      {/* Subtle Accounting Ledger Grid Background */}
      <div className="absolute inset-0 bg-ledger-grid opacity-60 pointer-events-none" />

      {/* Decorative Gold & Navy Ambient Light Spheres */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#C69A3A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#0B2345]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Positioning & Call to Action (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0B2345]/5 border border-[#0B2345]/10 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#087A5B]" />
              <span className="text-[11.5px] uppercase font-semibold tracking-wider text-[#0B2345]">
                Accounting · Financial Management · Business Advisory
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[48px] font-extrabold text-[#0B2345] tracking-tight leading-[1.15] text-balance">
              Turning Financial Complexity into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2345] via-[#087A5B] to-[#C69A3A]">
                Clarity, Control
              </span>{' '}
              and Growth.
            </h1>

            {/* Supporting Paragraph */}
            <p className="mt-5 text-base sm:text-lg text-[#283342]/90 leading-relaxed max-w-2xl">
              I’m <strong className="text-[#0B2345] font-semibold">Santino Bertino</strong>, an accounting and financial services professional with experience across the public sector, private sector, banking, and NGOs. I help SMEs, startups, and not-for-profit organizations strengthen their financial processes, improve accountability, and make informed decisions with confidence.
            </p>

            {/* Global Reach Highlight */}
            <div className="mt-4 flex items-center gap-2 text-xs sm:text-sm text-[#087A5B] font-medium bg-[#087A5B]/8 px-3.5 py-2 rounded-lg border border-[#087A5B]/20">
              <Globe className="w-4 h-4 shrink-0 text-[#087A5B]" />
              <span>
                <strong>Worldwide Service Delivery:</strong> Providing structured cloud accounting for international clients & on-site missions across all locations.
              </span>
            </div>

            {/* Action CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#0B2345] hover:bg-[#15396B] shadow-md hover:shadow-lg transition-all duration-150 border border-[#C69A3A]/40 group"
              >
                <span>Explore My Services</span>
                <ArrowRight className="w-4 h-4 text-[#E4BC5E] transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-[#0B2345] bg-white hover:bg-slate-50 border border-[#0B2345]/20 shadow-sm transition-all duration-150"
              >
                <span>Contact Santino</span>
              </a>
            </div>

            {/* Subtle Trust Statement */}
            <div className="mt-8 pt-6 border-t border-[#0B2345]/10 w-full">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#0B2345]/70">
                Core Principles: Accuracy · Accountability · Insight · Sustainable Growth
              </p>
            </div>
          </div>

          {/* Right Column: Professional Portrait & Credentials Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
            <div className="w-full max-w-md">
              <SantinoPortrait size="hero" />
            </div>
          </div>

        </div>

        {/* 4-Pillar Cross-Sector Foundation Strip */}
        <div className="mt-14 pt-8 border-t border-[#0B2345]/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-4 rounded-xl bg-white border border-[#0B2345]/10 shadow-sm flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-[#0B2345]/5 text-[#0B2345] shrink-0">
                <Award className="w-5 h-5 text-[#C69A3A]" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B2345] block">
                  Academic Foundation
                </span>
                <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                  M.Sc. in Accounting (UBa) & B.Sc. in Accounting (CATUC Bamenda)
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#0B2345]/10 shadow-sm flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-[#087A5B]/10 text-[#087A5B] shrink-0">
                <Landmark className="w-5 h-5 text-[#087A5B]" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B2345] block">
                  Banking Exposure
                </span>
                <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                  Treasury operations, strict reconciliation rigor, and financial discipline
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#0B2345]/10 shadow-sm flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-[#0B2345]/5 text-[#0B2345] shrink-0">
                <Shield className="w-5 h-5 text-[#087A5B]" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B2345] block">
                  NGO & Donor Controls
                </span>
                <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                  Grant budgeting, voucher auditing, and institutional reporting compliance
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#0B2345]/10 shadow-sm flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-[#C69A3A]/10 text-[#C69A3A] shrink-0">
                <BookOpenCheck className="w-5 h-5 text-[#C69A3A]" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B2345] block">
                  SME & Startup Growth
                </span>
                <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                  Cash flow management, clean general ledgers, and reliable management accounts
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
