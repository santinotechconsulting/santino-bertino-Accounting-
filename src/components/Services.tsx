import React from 'react';
import { 
  BookOpenCheck, 
  BarChart3, 
  TrendingUp, 
  Rocket, 
  ShieldCheck, 
  LockKeyhole, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { CORE_SERVICES } from '../config/siteData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpenCheck':
        return <BookOpenCheck className="w-6 h-6 text-[#0B2345]" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-[#087A5B]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#C69A3A]" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-[#0B2345]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#087A5B]" />;
      case 'LockKeyhole':
        return <LockKeyhole className="w-6 h-6 text-[#C69A3A]" />;
      default:
        return <BookOpenCheck className="w-6 h-6 text-[#0B2345]" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#087A5B] block mb-2">
            Professional Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2345] tracking-tight leading-tight">
            Comprehensive Accounting & Financial Advisory Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Tailored financial solutions engineered for commercial businesses, emerging startups, and mission-driven not-for-profit organizations across all locations.
          </p>
          <div className="h-1 w-20 bg-[#C69A3A] mt-4" />
        </div>

        {/* 6 Core Service Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-7 border border-[#0B2345]/10 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group hover:border-[#C69A3A]/50 relative"
            >
              {/* Card Header with Editorial Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-[#F5F7FA] border border-slate-200/60 group-hover:bg-[#0B2345]/5 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="font-brand text-xl font-bold text-slate-300 group-hover:text-[#C69A3A] transition-colors">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0B2345] tracking-tight group-hover:text-[#087A5B] transition-colors">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {service.detailedDescription}
                </p>

                {/* Deliverables List */}
                <div className="mt-5 pt-5 border-t border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B2345] block mb-2.5">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#087A5B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Target Fit & CTA */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <span className="text-[11px] text-slate-500 block mb-3 italic">
                  <strong>Best For:</strong> {service.bestFor}
                </span>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-bold text-[#0B2345] bg-[#F5F7FA] hover:bg-[#0B2345] hover:text-white transition-all border border-[#0B2345]/15 group/btn cursor-pointer"
                >
                  <span>Discuss This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C69A3A] group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tailored Scope Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0B2345] to-[#15396B] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg border border-[#C69A3A]/30">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-wider text-[#E4BC5E] block mb-1">
              Need a Custom Engagement Scope?
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Looking for a tailored hybrid advisory or specialized clean-up project?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every organization has unique operational rhythms. We customize our financial services around your specific regulatory environment, reporting calendar, and software preferences.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold text-[#0B2345] bg-[#E4BC5E] hover:bg-white transition-all shadow-md shrink-0 uppercase tracking-wider"
          >
            <span>Request Tailored Proposal</span>
            <ArrowRight className="w-4 h-4 text-[#0B2345]" />
          </a>
        </div>

      </div>
    </section>
  );
};
