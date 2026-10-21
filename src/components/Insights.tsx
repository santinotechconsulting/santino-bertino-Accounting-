import React, { useState } from 'react';
import { Search, ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { ARTICLES } from '../config/siteData';
import { ArticleItem } from '../types';
import { ArticleModal } from './ArticleModal';

export const Insights: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);

  const categories = ['All', 'SME Accounting', 'Startups', 'NGO Accountability', 'Internal Controls', 'Financial Literacy'];

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesQuery =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="insights" className="py-20 lg:py-28 bg-white border-b border-[#0B2345]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#087A5B] block mb-2">
            Thought Leadership & Articles
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2345] tracking-tight leading-tight">
            Financial Insights & Advisory Perspectives
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Practical knowledge designed to help business founders, executive directors, and finance officers make disciplined, informed decisions.
          </p>
          <div className="h-1 w-20 bg-[#C69A3A] mt-4" />
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Functional Button Segmented Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F5F7FA] rounded-xl border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#0B2345] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0B2345] hover:bg-slate-200/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search financial topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 bg-[#F5F7FA] focus:bg-white focus:outline-none focus:border-[#0B2345]"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setActiveArticle(article)}
                className="bg-[#F5F7FA] rounded-2xl p-6 border border-[#0B2345]/10 shadow-xs hover:border-[#C69A3A]/50 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  {/* Clean unboxed metadata with typographic separators (anti-pill rule) */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-medium">
                    <span className="text-[#087A5B] font-bold">{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B2345] tracking-tight group-hover:text-[#087A5B] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-[#0B2345] group-hover:text-[#087A5B]">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 text-[#C69A3A] transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-slate-500 text-sm">
              No articles found matching "{searchQuery}". Try selecting another category.
            </div>
          )}
        </div>

      </div>

      {/* Full Article Reader Modal */}
      <ArticleModal article={activeArticle} onClose={() => setActiveArticle(null)} />
    </section>
  );
};
