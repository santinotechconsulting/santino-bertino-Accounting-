import React, { useState, useMemo } from 'react';
import { 
  ChevronDown, 
  Search, 
  X, 
  MessageSquare, 
  ArrowRight, 
  HelpCircle,
  Sparkles,
  Filter
} from 'lucide-react';
import { FAQS, SITE_CONFIG } from '../config/siteData';
import { FaqItem } from '../types';

export const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openFaqIds, setOpenFaqIds] = useState<string[]>([FAQS[0].id, FAQS[3].id]);
  const [closedSearchIds, setClosedSearchIds] = useState<string[]>([]);

  const categories = [
    'All',
    'Services & Scope',
    'Billing & Pricing',
    'Consultations & Location',
    'Data Security & Software',
  ];

  const suggestedKeywords = [
    'NGO Grants',
    'Backlog Clean-up',
    'Retainers & Fees',
    'Remote Worldwide',
    'QuickBooks & Software',
    'Donor Audit',
  ];

  // Real-time filtering matching question, answer, and category
  const filteredFaqs = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return FAQS.filter((faq) => {
      const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q) ||
        faq.category.toLowerCase().includes(q)
      );
    });
  }, [searchQuery, selectedCategory]);

  const isSearchActive = searchQuery.trim().length > 0;

  const isFaqOpen = (id: string) => {
    if (isSearchActive) {
      // Auto-expand results during search unless user specifically collapsed it
      return !closedSearchIds.includes(id);
    }
    return openFaqIds.includes(id);
  };

  const toggleFaq = (id: string) => {
    if (isSearchActive) {
      setClosedSearchIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenFaqIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setClosedSearchIds([]);
  };

  // Helper to highlight matching text in questions and answers
  const highlightMatch = (text: string, query: string) => {
    const trimmed = query.trim();
    if (!trimmed) return text;
    try {
      const escaped = trimmed.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${escaped})`, 'gi');
      const parts = text.split(regex);
      return (
        <>
          {parts.map((part, i) =>
            regex.test(part) ? (
              <mark
                key={i}
                className="bg-[#E4BC5E]/40 text-[#0B2345] px-1 py-0.5 rounded font-semibold transition-colors"
              >
                {part}
              </mark>
            ) : (
              part
            )
          )}
        </>
      );
    } catch {
      return text;
    }
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F5F7FA] border-b border-[#0B2345]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#087A5B] block mb-2">
            Clear Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2345] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Essential information regarding our accounting and financial services scope, billing structures, remote and on-site consultations, and data confidentiality.
          </p>
          <div className="h-1 w-20 bg-[#C69A3A] mt-4" />
        </div>

        {/* PROMINENT REAL-TIME SEARCH BAR AT THE TOP */}
        <div className="mt-10 max-w-4xl">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4.5 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-[#C69A3A] transition-colors group-focus-within:text-[#0B2345]" />
            </div>

            <input
              type="text"
              role="searchbox"
              aria-label="Search frequently asked questions and answers"
              placeholder="Search questions or keywords in real-time (e.g. grants, fees, retainers, software, audit, remote)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setClosedSearchIds([]);
              }}
              className="w-full pl-12 pr-28 py-4 text-sm sm:text-base rounded-2xl border-2 border-slate-200/90 bg-white text-[#0B2345] placeholder-slate-400 shadow-sm focus:outline-none focus:border-[#0B2345] focus:ring-4 focus:ring-[#0B2345]/5 transition-all"
            />

            {/* Right side controls: Clear button and Result Counter */}
            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center gap-2">
              {searchQuery && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  title="Clear search"
                  aria-label="Clear search query"
                >
                  <X className="w-4 h-4" />
                </button>
              )}

              <span className="hidden sm:inline-flex text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                {filteredFaqs.length} {filteredFaqs.length === 1 ? 'result' : 'results'}
              </span>
            </div>
          </div>

          {/* Quick Search Suggestions */}
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-600">
            <span className="font-semibold text-slate-500 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#C69A3A]" />
              <span>Popular searches:</span>
            </span>
            {suggestedKeywords.map((kw) => (
              <button
                key={kw}
                type="button"
                onClick={() => {
                  setSearchQuery(kw);
                  setClosedSearchIds([]);
                }}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                  searchQuery.toLowerCase() === kw.toLowerCase()
                    ? 'bg-[#0B2345] text-white shadow-xs'
                    : 'bg-white hover:bg-slate-100 text-[#0B2345] border border-slate-200/80'
                }`}
              >
                {kw}
              </button>
            ))}
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-6 flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="px-2 py-1 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
              <Filter className="w-3.5 h-3.5 text-[#087A5B]" />
              <span className="hidden sm:inline">Category:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#0B2345] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0B2345] hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Real-time search status indicator if query is entered */}
        {isSearchActive && (
          <div className="mt-5 max-w-4xl flex items-center justify-between text-xs text-slate-600 bg-white/70 px-4 py-2 rounded-lg border border-slate-200">
            <span>
              Filtering questions matching <strong className="text-[#0B2345]">"{searchQuery}"</strong>
              {selectedCategory !== 'All' && ` in ${selectedCategory}`} —{' '}
              <span className="text-[#087A5B] font-semibold">{filteredFaqs.length} found</span>
            </span>
            <button
              onClick={handleClearSearch}
              className="text-[#0B2345] hover:underline font-semibold cursor-pointer"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* FAQ Accordion List */}
        <div className="mt-8 space-y-3.5 max-w-4xl">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = isFaqOpen(faq.id);
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#0B2345]/10 shadow-2xs overflow-hidden transition-all duration-200 hover:border-[#C69A3A]/40"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0B2345]"
                  >
                    <div className="space-y-1">
                      {/* Clean unboxed category tag with subtle typography */}
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#087A5B] block">
                        {faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-[#0B2345] tracking-tight leading-snug">
                        {highlightMatch(faq.question, searchQuery)}
                      </h3>
                    </div>

                    <div
                      className={`p-1.5 rounded-lg bg-[#F5F7FA] text-[#0B2345] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#0B2345] text-white' : 'text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                      <p>{highlightMatch(faq.answer, searchQuery)}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="bg-white p-10 rounded-2xl border border-slate-200 text-center space-y-3 max-w-4xl">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
                <Search className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[#0B2345]">No questions found</h4>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                No questions or answers matched "{searchQuery}"
                {selectedCategory !== 'All' ? ` in category "${selectedCategory}"` : ''}.
              </p>
              <div className="pt-2 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="px-4 py-2 text-xs font-semibold text-[#0B2345] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  Clear Search Filter
                </button>
                <a
                  href="#contact"
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#0B2345] hover:bg-[#15396B] rounded-lg transition-colors"
                >
                  Ask Santino Directly
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Need More Information Banner */}
        <div className="mt-12 max-w-4xl p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0B2345] to-[#15396B] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md border border-[#C69A3A]/30">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E4BC5E]">
              Have a Specific Requirement?
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Need clarification on custom advisory scopes or multi-currency billing?
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Santino Bertino is available for personalized discovery consultations to address your specific operational framework.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-[#0B2345] bg-[#E4BC5E] hover:bg-white transition-all shadow-sm uppercase tracking-wider"
            >
              <span>Contact Santino</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0B2345]" />
            </a>
            
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-white/10 hover:bg-white/20 transition-all border border-white/20"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#0FA57D]" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

        {/* FAQ Section Footer Link */}
        <div className="mt-8 text-center">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const contactElem = document.getElementById('contact');
              contactElem?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#0B2345] hover:text-[#087A5B] transition-colors py-2 px-4 rounded-xl hover:bg-slate-200/50 group cursor-pointer"
          >
            <span>Still have questions? Contact us</span>
            <ArrowRight className="w-4 h-4 text-[#C69A3A] transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
};

