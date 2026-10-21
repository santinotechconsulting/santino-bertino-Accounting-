import React, { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight, Sparkles, Globe } from 'lucide-react';

interface ServiceEstimatorProps {
  onApplyScopeToContact: (scopeSummary: string) => void;
}

export const ServiceEstimator: React.FC<ServiceEstimatorProps> = ({ onApplyScopeToContact }) => {
  const [orgType, setOrgType] = useState<'sme' | 'startup' | 'ngo'>('sme');
  const [needType, setNeedType] = useState<'cleanup' | 'monthly' | 'audit_prep' | 'cfo'>('monthly');
  const [mode, setMode] = useState<'remote' | 'onsite' | 'hybrid'>('remote');
  const [volume, setVolume] = useState<'low' | 'medium' | 'high'>('medium');

  const getScopeRecommendation = () => {
    let title = '';
    let description = '';
    let deliverables: string[] = [];

    if (orgType === 'ngo') {
      if (needType === 'audit_prep') {
        title = 'NGO Donor Audit Preparation & Voucher Pre-Review';
        description = 'Comprehensive reconciliation of project bank accounts, validation of procurement documentation, and alignment of expenses to approved grant contract budget lines.';
        deliverables = ['Airtight donor audit binder compilation', '3-way procurement quotation review', 'Disallowable cost mitigation screening', 'Quarterly donor financial report certification'];
      } else {
        title = 'Retainer NGO Grant Accounting & Financial Oversight';
        description = 'Continuous monitoring of restricted donor grant funds, monthly variance reporting against project milestones, and field voucher auditing.';
        deliverables = ['Grant sub-ledger administration', 'Monthly budget vs actual variance notes', 'Field cash & travel advance retirements', 'Statutory compliance verification'];
      }
    } else if (orgType === 'startup') {
      if (needType === 'cleanup') {
        title = 'Startup Financial Architecture & Historical Cleanup';
        description = 'Setting up a scalable cloud chart of accounts (QuickBooks/Xero), untangling co-mingled founder expenses, and establishing a clean opening balance sheet.';
        deliverables = ['Cloud accounting deployment', 'Reconciliation of historical bank & card transactions', 'Chart of accounts customization', 'Expense reimbursement protocol'];
      } else {
        title = 'Startup Runway Management & Strategic Advisory';
        description = 'Monthly financial statement preparation paired with 12-month rolling cash runway modeling and investor-ready reporting.';
        deliverables = ['Monthly Income Statement & Cash Flow Statement', 'Burn rate and cash runway tracking in months', 'Unit economics & gross margin breakdown', 'Executive financial dashboard'];
      }
    } else {
      // SME
      if (needType === 'cleanup') {
        title = 'SME Ledger Reconstruction & Multi-Account Reconciliation';
        description = 'Forensic reconciliation of unreconciled historical bank, cash, and mobile-money accounts to bring ledgers current.';
        deliverables = ['Full reconciliation of backlogged bank statements', 'Supplier and customer ledger reconciliation', 'Identification of discrepancies & leaks', 'Standardized month-end closing protocol'];
      } else {
        title = 'Full-Cycle SME Monthly Accounting & Management Accounts';
        description = 'Disciplined weekly bookkeeping, supplier invoice management, bank reconciliations, and timely monthly management accounts for executive steering.';
        deliverables = ['Weekly transaction ledger entries', 'Accounts payable & receivable oversight', 'Monthly P&L, Balance Sheet & Cash Flow', 'Working capital & cost-reduction advice'];
      }
    }

    return { title, description, deliverables };
  };

  const rec = getScopeRecommendation();

  const handleApply = () => {
    const summaryText = `[Service Scoping Request]
Organization Type: ${orgType.toUpperCase()}
Primary Need: ${needType.toUpperCase()}
Location Preference: ${mode === 'remote' ? 'Remote Worldwide' : mode === 'onsite' ? 'On-Site Mission' : 'Hybrid'}
Volume Scale: ${volume.toUpperCase()}
Recommended Package: ${rec.title}`;

    onApplyScopeToContact(summaryText);
    const contactElem = document.getElementById('contact');
    contactElem?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-[#F5F7FA] to-white border-b border-[#0B2345]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#087A5B] block mb-2">
            Interactive Diagnostic
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2345] tracking-tight leading-tight">
            Scope Your Financial Requirements
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Use this interactive scoping tool to clarify your organizational needs, explore suitable engagement deliverables, and receive a tailored consultation roadmap.
          </p>
          <div className="h-1 w-20 bg-[#C69A3A] mt-4" />
        </div>

        {/* 2-Column Grid: Configurator on Left, Generated Proposal on Right */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Parameters (6 cols) */}
          <div className="lg:col-span-6 bg-white p-7 rounded-2xl border border-[#0B2345]/10 shadow-sm space-y-6">
            
            {/* Step 1: Organization Type */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#0B2345] block mb-2.5">
                1. What is your organization type?
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'sme', label: 'Commercial SME' },
                  { id: 'startup', label: 'Tech / Startup' },
                  { id: 'ngo', label: 'NGO / Non-Profit' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setOrgType(item.id as any)}
                    className={`py-2.5 px-3 text-xs font-semibold rounded-lg border transition-all cursor-pointer text-center ${
                      orgType === item.id
                        ? 'bg-[#0B2345] text-white border-[#0B2345] shadow-xs'
                        : 'bg-[#F5F7FA] text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Primary Challenge */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#0B2345] block mb-2.5">
                2. What is your immediate priority?
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'monthly', label: 'Ongoing Monthly Accounting' },
                  { id: 'cleanup', label: 'Historical Cleanup & Backlog' },
                  { id: 'audit_prep', label: 'Audit / Donor Compliance' },
                  { id: 'cfo', label: 'Cash Flow & Runway Advisory' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setNeedType(item.id as any)}
                    className={`py-2.5 px-3 text-xs font-semibold rounded-lg border transition-all cursor-pointer text-center ${
                      needType === item.id
                        ? 'bg-[#0B2345] text-white border-[#0B2345] shadow-xs'
                        : 'bg-[#F5F7FA] text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Location / Delivery Mode */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#0B2345] block mb-2.5">
                3. Delivery Preference (Any Location Supported)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'remote', label: '100% Remote (Global)' },
                  { id: 'hybrid', label: 'Hybrid Remote/Visit' },
                  { id: 'onsite', label: 'On-Site Mission' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setMode(item.id as any)}
                    className={`py-2.5 px-3 text-xs font-semibold rounded-lg border transition-all cursor-pointer text-center ${
                      mode === item.id
                        ? 'bg-[#0B2345] text-white border-[#0B2345] shadow-xs'
                        : 'bg-[#F5F7FA] text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Transaction Volume */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#0B2345] block mb-2.5">
                4. Approximate Monthly Activity Scale
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'low', label: 'Light (< 50 ops)' },
                  { id: 'medium', label: 'Moderate (50-250 ops)' },
                  { id: 'high', label: 'Extensive (250+ ops)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setVolume(item.id as any)}
                    className={`py-2.5 px-3 text-xs font-semibold rounded-lg border transition-all cursor-pointer text-center ${
                      volume === item.id
                        ? 'bg-[#0B2345] text-white border-[#0B2345] shadow-xs'
                        : 'bg-[#F5F7FA] text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Tailored Scope Blueprint (6 cols) */}
          <div className="lg:col-span-6 bg-[#0B2345] text-white p-7 sm:p-8 rounded-2xl shadow-xl border border-[#C69A3A]/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E4BC5E] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Tailored Scope Blueprint</span>
                </span>
                <span className="text-[11px] text-slate-300 bg-white/10 px-2.5 py-0.5 rounded-md font-medium">
                  {mode === 'remote' ? 'Worldwide Remote Delivery' : 'On-Site / Hybrid'}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                {rec.title}
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {rec.description}
              </p>

              {/* Recommended Scope Deliverables */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E4BC5E] block mb-3">
                  Included Focus & Deliverables:
                </span>
                <div className="space-y-2.5">
                  {rec.deliverables.map((d, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#0FA57D] shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Apply Scope to Contact Form */}
            <div className="mt-8 pt-5 border-t border-white/10">
              <button
                onClick={handleApply}
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-[#0B2345] bg-[#E4BC5E] hover:bg-white transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <span>Apply This Scope & Contact Santino</span>
                <ArrowRight className="w-4 h-4 text-[#0B2345]" />
              </button>
              <span className="text-[10.5px] text-slate-400 block text-center mt-2.5">
                Transfers this configuration directly to the enquiry form below.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
