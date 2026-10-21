import React from 'react';
import { 
  FileSpreadsheet, 
  Database, 
  Cpu, 
  ShieldCheck, 
  Globe2, 
  Laptop, 
  CheckCircle2, 
  Layers,
  Sparkles
} from 'lucide-react';

export const Capabilities: React.FC = () => {
  const toolSuites = [
    {
      category: 'Accounting Software & Cloud Platforms',
      description: 'Standardized and scalable platforms configured for secure multi-user collaboration.',
      tools: ['QuickBooks Online / Desktop', 'Xero Accounting', 'Sage 50 / Sage Cloud', 'Wave / Zoho Books'],
    },
    {
      category: 'Financial Modeling & Business Intelligence',
      description: 'Advanced financial data transformation, automated ledgers, and executive dashboarding.',
      tools: ['Microsoft Excel (Advanced / VBA)', 'Google Sheets Financial Models', 'Power BI Dashboards', 'Financial Statement Automations'],
    },
    {
      category: 'Accounting & Reporting Standards',
      description: 'Rigorous compliance with statutory and international accounting frameworks.',
      tools: ['OHADA Uniform Act on Accounting (SYSCOHADA)', 'International Financial Reporting Standards (IFRS)', 'International Public Sector Accounting Standards (IPSAS)', 'Tax & Statutory Documentation Compliance'],
    },
    {
      category: 'Global Remote Engagement Infrastructure',
      description: 'Delivering end-to-end accounting services for clients anywhere in the world.',
      tools: ['Encrypted Cloud Document Transfer', 'Virtual Boardroom Meetings (Zoom / Teams / Meet)', 'Automated Bank Statement OCR Ingestion', 'Multi-Timezone Asynchronous Reporting'],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#0B2345]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#087A5B] block mb-2">
            Technical Proficiency & Toolsets
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2345] tracking-tight leading-tight">
            Financial Systems, Software & Global Standards
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Combining rigorous theoretical accounting principles with contemporary digital tools to ensure accuracy, speed, and location-agnostic execution.
          </p>
          <div className="h-1 w-20 bg-[#C69A3A] mt-4" />
        </div>

        {/* 4 Tool Suites Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {toolSuites.map((suite, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#F5F7FA] border border-[#0B2345]/10 shadow-xs hover:border-[#C69A3A]/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-lg bg-[#0B2345] text-white">
                  {idx === 0 && <Database className="w-5 h-5 text-[#E4BC5E]" />}
                  {idx === 1 && <FileSpreadsheet className="w-5 h-5 text-[#0FA57D]" />}
                  {idx === 2 && <ShieldCheck className="w-5 h-5 text-[#E4BC5E]" />}
                  {idx === 3 && <Globe2 className="w-5 h-5 text-[#0FA57D]" />}
                </div>
                <h3 className="text-lg font-bold text-[#0B2345]">
                  {suite.category}
                </h3>
              </div>

              <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                {suite.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {suite.tools.map((tool, tIdx) => (
                  <div
                    key={tIdx}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-[#0B2345]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#087A5B] shrink-0" />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Global Location Statement Highlight */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[#0B2345] via-[#0E274D] to-[#07172F] text-white shadow-xl border border-[#C69A3A]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-[#E4BC5E] text-xs font-semibold uppercase tracking-wider mb-3">
                <Globe2 className="w-4 h-4" />
                <span>Services Without Geographic Boundaries</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Headquartered in Cameroon. Operating Across the Globe.
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Modern accounting does not require physical proximity to deliver outstanding value. Through cloud accounting integrations, automated bank feeds, and weekly video consultations, Santino Bertino provides the exact same high-touch, meticulous advisory whether your headquarters are in Douala, Yaoundé, Bamenda, London, Paris, New York, or anywhere in between.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs text-[#E4BC5E] font-bold block uppercase tracking-wider">
                  Remote Accounting
                </span>
                <span className="text-xs text-slate-300 mt-1 block">
                  Cloud ledger access, continuous reconciliations & weekly virtual check-ins.
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs text-[#E4BC5E] font-bold block uppercase tracking-wider">
                  On-Site Missions
                </span>
                <span className="text-xs text-slate-300 mt-1 block">
                  Available for in-person audits, internal control setups, and training workshops.
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
