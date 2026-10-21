import React, { useState } from 'react';
import { Landmark, Shield, Building2, Landmark as GovIcon, CheckCircle2, ChevronRight } from 'lucide-react';
import { CROSS_SECTOR_EXPERIENCE } from '../config/siteData';

export const Experience: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<string>(CROSS_SECTOR_EXPERIENCE[0].id);

  const getSectorIcon = (id: string) => {
    switch (id) {
      case 'banking':
        return <Landmark className="w-5 h-5 text-[#0B2345]" />;
      case 'ngo':
        return <Shield className="w-5 h-5 text-[#087A5B]" />;
      case 'private':
        return <Building2 className="w-5 h-5 text-[#C69A3A]" />;
      case 'public':
        return <GovIcon className="w-5 h-5 text-[#0B2345]" />;
      default:
        return <Landmark className="w-5 h-5 text-[#0B2345]" />;
    }
  };

  const activeExp = CROSS_SECTOR_EXPERIENCE.find((e) => e.id === selectedSector) || CROSS_SECTOR_EXPERIENCE[0];

  return (
    <section id="experience" className="py-20 lg:py-28 bg-white border-b border-[#0B2345]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#087A5B] block mb-2">
            Cross-Sector Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2345] tracking-tight leading-tight">
            Diverse Operational Environments & Accountability Standards
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Hands-on exposure across commercial banking, international civil society, corporate enterprise, and public sector administration.
          </p>
          <div className="h-1 w-20 bg-[#C69A3A] mt-4" />
        </div>

        {/* 2-Column Experience Explorer */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sector Category Navigation (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            {CROSS_SECTOR_EXPERIENCE.map((sector) => {
              const isSelected = sector.id === selectedSector;
              return (
                <button
                  key={sector.id}
                  onClick={() => setSelectedSector(sector.id)}
                  className={`w-full text-left p-4.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#0B2345] text-white border-[#0B2345] shadow-md'
                      : 'bg-[#F5F7FA] text-[#0B2345] border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`p-2 rounded-lg ${
                        isSelected ? 'bg-white/10 text-[#E4BC5E]' : 'bg-white text-[#0B2345] shadow-xs'
                      }`}
                    >
                      {getSectorIcon(sector.id)}
                    </div>
                    <div>
                      <span className={`text-sm font-bold block ${isSelected ? 'text-white' : 'text-[#0B2345]'}`}>
                        {sector.sectorName}
                      </span>
                      <span className={`text-xs block ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                        {sector.headline.split(',')[0]}
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-[#E4BC5E] translate-x-1' : 'text-slate-400 group-hover:translate-x-0.5'
                    }`}
                  />
                </button>
              );
            })}

            {/* Quick Sector Summary Pill */}
            <div className="p-4 rounded-xl bg-[#087A5B]/10 border border-[#087A5B]/20 text-xs text-[#087A5B]">
              <strong>Multi-Sector Perspective:</strong> Each environment sharpens a different dimension—from banking accuracy to NGO grant compliance and commercial profitability.
            </div>
          </div>

          {/* Right Column: Detailed Sector Deep Dive (8 cols) */}
          <div className="lg:col-span-8 bg-[#F5F7FA] rounded-2xl p-7 sm:p-9 border border-[#0B2345]/10 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#087A5B]">
                  Domain Exposure Details
                </span>
                <h3 className="text-2xl font-extrabold text-[#0B2345] mt-1">
                  {activeExp.sectorName}
                </h3>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-white rounded-md border border-slate-200 text-xs text-slate-600">
                <span>Verified Experience</span>
              </div>
            </div>

            <p className="mt-5 text-sm sm:text-base text-slate-700 leading-relaxed">
              {activeExp.description}
            </p>

            {/* Key Accounting Responsibilities */}
            <div className="mt-6 pt-5 border-t border-slate-200/80">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B2345] block mb-3">
                Core Accounting & Administrative Responsibilities:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                {activeExp.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-2.5 bg-white p-3 rounded-lg border border-slate-200/60">
                    <CheckCircle2 className="w-4 h-4 text-[#087A5B] shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Competencies & Strategic Impact */}
            <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-slate-500 block mb-1.5">
                  Core Practical Capabilities Acquired:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeExp.keyExposure.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium bg-white px-2.5 py-1 rounded-md border border-slate-200 text-[#0B2345]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Impact Statement Box */}
            <div className="mt-6 p-4 rounded-xl bg-white border-l-4 border-[#C69A3A] text-xs text-slate-700 shadow-xs">
              <strong>Professional takeaway:</strong> {activeExp.impactStatement}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
