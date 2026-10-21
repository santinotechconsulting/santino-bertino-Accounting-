import React from 'react';
import { X, Calendar, Clock, BookOpen, CheckCircle2 } from 'lucide-react';
import { ArticleItem } from '../types';

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl border border-[#0B2345]/20 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95">
        
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
              <span className="font-bold text-[#087A5B] uppercase tracking-wider">
                {article.category}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{article.date}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{article.readTime}</span>
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2345] tracking-tight leading-snug">
              {article.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 cursor-pointer shrink-0"
            aria-label="Close article"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Article Summary Box */}
        <div className="mt-6 p-4 rounded-xl bg-[#F5F7FA] border border-slate-200 text-sm font-medium text-slate-700 italic leading-relaxed">
          "{article.summary}"
        </div>

        {/* Full Article Body */}
        <div className="mt-8 space-y-5 text-base text-slate-700 leading-relaxed">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Key Takeaways Box */}
        <div className="mt-10 p-6 rounded-2xl bg-[#0B2345] text-white border border-[#C69A3A]/30">
          <div className="flex items-center gap-2 mb-3 text-[#E4BC5E]">
            <BookOpen className="w-5 h-5" />
            <h3 className="text-sm font-bold uppercase tracking-wider">
              Strategic Key Takeaways
            </h3>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
            {article.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0FA57D] shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Author Byline */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs text-slate-600">
            <span>Written by <strong>Santino Bertino</strong> (M.Sc. & B.Sc. Accounting)</span>
            <span className="block text-slate-400 mt-0.5">Accounting & Financial Services Professional</span>
          </div>

          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white bg-[#0B2345] rounded-lg hover:bg-[#15396B] transition-colors"
          >
            Discuss Implementation for Your Team
          </a>
        </div>

      </div>
    </div>
  );
};
