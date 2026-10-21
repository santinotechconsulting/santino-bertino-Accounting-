import React, { useState } from 'react';
import { Building2, Rocket, HeartHandshake, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

interface IndustriesProps {
  onSelectIndustry?: (type: string) => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onSelectIndustry }) => {
  const [activeTab, setActiveTab] = useState<'sme' | 'startup' | 'ngo' | 'cross-sector'>('sme');

  const clients = [
    {
      id: 'sme',
      title: 'Small & Medium Enterprises (SMEs)',
      badge: 'Commercial Operations',
      icon: <Building2 className="w-6 h-6 text-[#0B2345]" />,
      summary:
        'Helping established and growing enterprises transform messy receipts and lagging ledgers into disciplined management accounts and cash flow clarity.',
      focusAreas: [
        'Organized daily bookkeeping & vendor invoice reconciliation',
        'Working capital optimization & cash flow forecasting',
        'Cost-volume-profit analysis & margin improvement',
        'Timely monthly management accounts for executive steering',
        'Audit-ready year-end financial summaries',
      ],
      quote: 'Reliable accounting turns commercial uncertainty into actionable strategic confidence.',
    },
    {
      id: 'startup',
      title: 'Startups & Emerging Businesses',
      badge: 'Venture & High Growth',
      icon: <Rocket className="w-6 h-6 text-[#087A5B]" />,
      summary:
        'Building scalable accounting infrastructure from day one so founders can track burn rates, preserve cash runway, and present investor-ready financials.',
      focusAreas: [
        'Foundational chart of accounts setup suited for rapid scaling',
        'Burn rate, unit economics & monthly runway modeling',
        'Expense approval controls for distributed teams',
        'Cloud accounting software implementation (QuickBooks, Xero, etc.)',
        'Preparation of clean data rooms for equity & debt capital rounds',
      ],
      quote: 'Financial discipline early on protects your runway and maximizes your valuation.',
    },
    {
      id: 'ngo',
      title: 'NGOs & Not-for-Profit Organizations',
      badge: 'Mission-Driven & Donors',
      icon: <HeartHandshake className="w-6 h-6 text-[#C69A3A]" />,
      summary:
        'Providing mission-driven organizations with watertight grant tracking, donor-compliant reporting, and field-level voucher auditing.',
      focusAreas: [
        'Restricted grant tracking aligned with approved donor budgets',
        'Multi-currency expenditure reporting for international partners',
        'Field voucher verification & procurement three-way matching',
        'Institutional statutory and project audit preparation',
        'Internal financial policies & segregation of duties manuals',
      ],
      quote: 'Flawless financial stewardship ensures donor trust and secures repeat funding.',
    },
    {
      id: 'cross-sector',
      title: 'Cross-Sector Organizational Exposure',
      badge: 'Public, Private & Banking',
      icon: <Layers className="w-6 h-6 text-[#0B2345]" />,
      summary:
        'Leveraging practical exposure across banking, government frameworks, private enterprise, and international civil society to solve multifaceted administrative challenges.',
      focusAreas: [
        'Understanding strict banking reconciliation and liquidity standards',
        'Navigating formal public sector procedural and compliance hierarchies',
        'Balancing commercial profit imperatives with regulatory rules',
        'Adapting reporting to diverse stakeholders from boardrooms to field officers',
      ],
      quote: 'Exposure to diverse institutions provides the wisdom to adapt to any organizational context.',
    },
  ];

  const currentClient = clients.find((c) => c.id === activeTab) || clients[0];

  return (
    <section id="expertise" className="py-20 lg:py-28 bg-white border-b border-[#0B2345]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#087A5B] block mb-2">
            Target Client Domains
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2345] tracking-tight leading-tight">
            Specialized Financial Expertise Across Diverse Sectors
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Different organizational structures demand different financial mindsets. Discover how our accounting capabilities are customized for your specific operational reality.
          </p>
          <div className="h-1 w-20 bg-[#C69A3A] mt-4" />
        </div>

        {/* Interactive Segmented Selector Tabs */}
        <div className="mt-10 flex flex-wrap gap-2 p-1.5 bg-[#F5F7FA] rounded-xl border border-slate-200/80 max-w-3xl">
          {clients.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id as any)}
              className={`px-4 py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-2 ${
                activeTab === c.id
                  ? 'bg-[#0B2345] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#0B2345] hover:bg-slate-200/60'
              }`}
            >
              <span>{c.title.split('(')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Selected Sector Focus Spotlight */}
        <div className="mt-8 bg-[#F5F7FA] rounded-2xl p-8 sm:p-10 border border-[#0B2345]/10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 cols: Deliverables & Details */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0B2345]/5 text-[#0B2345] text-xs font-semibold uppercase tracking-wider mb-4">
                <span>{currentClient.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2345] tracking-tight">
                {currentClient.title}
              </h3>

              <p className="mt-4 text-base text-slate-700 leading-relaxed">
                {currentClient.summary}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-200/80">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B2345] block mb-3">
                  Tailored Focus Areas & Outcomes:
                </span>
                <div className="space-y-3">
                  {currentClient.focusAreas.map((area, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#087A5B] shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-bold text-white bg-[#0B2345] hover:bg-[#15396B] transition-all shadow-sm"
                >
                  <span>Discuss Your Organization's Requirements</span>
                  <ArrowRight className="w-4 h-4 text-[#E4BC5E]" />
                </a>
              </div>
            </div>

            {/* Right 5 cols: Sector Quote & Location Agnostic Note */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm relative">
                <div className="h-1 w-12 bg-[#C69A3A] mb-4" />
                <p className="text-sm font-medium italic text-slate-800 leading-relaxed">
                  "{currentClient.quote}"
                </p>
                <span className="text-xs font-bold text-[#0B2345] block mt-4 uppercase tracking-wider">
                  — Santino Bertino Advisory Approach
                </span>
              </div>

              <div className="p-6 rounded-xl bg-[#0B2345] text-white border border-[#C69A3A]/30">
                <span className="text-xs uppercase font-bold tracking-widest text-[#E4BC5E] block mb-2">
                  Location Independence
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We deploy cloud accounting platforms (QuickBooks, Xero, Sage) and encrypted portals, enabling seamless collaboration for clients operating anywhere across Cameroon, Africa, or internationally.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
