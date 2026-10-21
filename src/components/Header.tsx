import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenContactModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContactModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Experience', href: '#experience' },
    { label: 'Case Studies', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Insights', href: '#insights' },
    { label: 'Contact', href: '#contact' },
  ];



  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#0B2345]/10 py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark & Official Monogram */}
          <a
            href="#"
            className="flex items-center gap-2 text-decoration-none group shrink-0 focus-visible:outline-2 focus-visible:outline-[#0B2345]"
            aria-label="Santino Bertino Accounting and Financial Services Home"
          >
            <Logo variant="compact" showTagline={false} />
          </a>

          {/* Zone 2: 4–5 Clean Single-Line Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#283342]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#0B2345] transition-colors py-1 relative group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C69A3A] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              onClick={onOpenContactModal}
              className="inline-flex items-center gap-1.5 px-4.5 py-2.5 text-xs font-semibold text-white bg-[#0B2345] hover:bg-[#15396B] rounded-lg shadow-sm transition-all duration-150 whitespace-nowrap shrink-0 border border-[#C69A3A]/30 focus-visible:outline-2 focus-visible:outline-[#0B2345]"
            >
              <span>Let's Discuss Your Needs</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#E4BC5E]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0B2345] hover:bg-slate-100 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[#0B2345]"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#0B2345]/10 shadow-xl px-4 pt-3 pb-6">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-sm font-medium text-[#283342] hover:bg-slate-50 hover:text-[#0B2345] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100">
              <a
                href="#contact"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContactModal?.();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 text-xs font-semibold text-white bg-[#0B2345] rounded-lg shadow-sm"
              >
                <span>Let's Discuss Your Needs</span>
                <ArrowUpRight className="w-4 h-4 text-[#E4BC5E]" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
