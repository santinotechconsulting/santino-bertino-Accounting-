import React, { useState, useEffect } from 'react';

interface LogoProps {
  variant?: 'full' | 'compact' | 'monogram' | 'footer' | 'white';
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  className = '',
  showTagline = true,
}) => {
  const [customLogoUrl, setCustomLogoUrl] = useState<string | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('santino_custom_logo');
      if (stored) setCustomLogoUrl(stored);
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  if (customLogoUrl) {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        <img
          src={customLogoUrl}
          alt="Santino Bertino Accounting & Financial Services"
          className={
            variant === 'monogram'
              ? 'h-10 w-auto object-contain'
              : variant === 'compact'
              ? 'h-10 w-auto object-contain'
              : variant === 'footer'
              ? 'h-14 w-auto object-contain brightness-105'
              : 'h-12 w-auto object-contain'
          }
        />
      </div>
    );
  }

  // Pure Vector SVG implementation matching the official Santino Bertino brand logo
  const isDark = variant === 'footer' || variant === 'white';
  const navyColor = isDark ? '#FFFFFF' : '#0B2345';
  const goldColor = '#C69A3A';
  const goldLight = '#E4BC5E';
  const emeraldColor = '#087A5B';
  const emeraldLight = '#10A37F';
  const mutedTextColor = isDark ? '#E2E8F0' : '#0B2345';

  if (variant === 'monogram') {
    return (
      <svg
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`h-9 w-auto ${className}`}
        aria-label="Santino Bertino SB Monogram"
      >
        <defs>
          <linearGradient id="sb-gold-grad-m" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A67C26" />
            <stop offset="40%" stopColor={goldColor} />
            <stop offset="70%" stopColor={goldLight} />
            <stop offset="100%" stopColor="#C69A3A" />
          </linearGradient>
          <linearGradient id="sb-green-grad-m" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#055A42" />
            <stop offset="100%" stopColor={emeraldLight} />
          </linearGradient>
        </defs>

        {/* Monogram S */}
        <text
          x="12"
          y="72"
          fontFamily="'Cinzel', 'Times New Roman', serif"
          fontSize="68"
          fontWeight="700"
          fill={navyColor}
          letterSpacing="-2"
        >
          S
        </text>

        {/* Monogram B */}
        <text
          x="50"
          y="72"
          fontFamily="'Cinzel', 'Times New Roman', serif"
          fontSize="68"
          fontWeight="700"
          fill={navyColor}
          letterSpacing="-2"
        >
          B
        </text>

        {/* Emerald Growth Bar Charts */}
        <rect x="58" y="56" width="5" height="16" rx="1.5" fill="url(#sb-green-grad-m)" />
        <rect x="65" y="48" width="5" height="24" rx="1.5" fill="url(#sb-green-grad-m)" />
        <rect x="72" y="40" width="5" height="32" rx="1.5" fill="url(#sb-green-grad-m)" />

        {/* Gold Coin Stack */}
        <ellipse cx="36" cy="62" rx="11" ry="4" fill="url(#sb-gold-grad-m)" />
        <ellipse cx="36" cy="57" rx="11" ry="4" fill="url(#sb-gold-grad-m)" />
        <ellipse cx="36" cy="52" rx="11" ry="4" fill="url(#sb-gold-grad-m)" />

        {/* Upward Gold Dynamic Arrow */}
        <path
          d="M 38 64 C 52 48 68 36 100 16"
          stroke="url(#sb-gold-grad-m)"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <polygon points="96,10 114,14 105,28" fill="url(#sb-gold-grad-m)" />
      </svg>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-3 select-none ${className}`}>
        {/* Monogram Icon */}
        <svg
          viewBox="0 0 120 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-auto shrink-0"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="sb-gold-grad-c" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A67C26" />
              <stop offset="50%" stopColor={goldColor} />
              <stop offset="100%" stopColor={goldLight} />
            </linearGradient>
            <linearGradient id="sb-green-grad-c" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#055A42" />
              <stop offset="100%" stopColor={emeraldColor} />
            </linearGradient>
          </defs>
          <text
            x="12"
            y="72"
            fontFamily="'Cinzel', 'Times New Roman', serif"
            fontSize="64"
            fontWeight="700"
            fill={navyColor}
          >
            S
          </text>
          <text
            x="50"
            y="72"
            fontFamily="'Cinzel', 'Times New Roman', serif"
            fontSize="64"
            fontWeight="700"
            fill={navyColor}
          >
            B
          </text>
          <rect x="58" y="55" width="5" height="17" rx="1" fill="url(#sb-green-grad-c)" />
          <rect x="65" y="47" width="5" height="25" rx="1" fill="url(#sb-green-grad-c)" />
          <rect x="72" y="39" width="5" height="33" rx="1" fill="url(#sb-green-grad-c)" />
          <ellipse cx="36" cy="62" rx="10" ry="3.5" fill="url(#sb-gold-grad-c)" />
          <ellipse cx="36" cy="57" rx="10" ry="3.5" fill="url(#sb-gold-grad-c)" />
          <ellipse cx="36" cy="52" rx="10" ry="3.5" fill="url(#sb-gold-grad-c)" />
          <path
            d="M 38 64 C 52 48 68 36 100 16"
            stroke="url(#sb-gold-grad-c)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <polygon points="96,10 114,14 105,28" fill="url(#sb-gold-grad-c)" />
        </svg>

        {/* Compact Typography */}
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5 font-brand text-base md:text-lg font-bold tracking-tight">
            <span style={{ color: navyColor }}>SANTINO</span>
            <span style={{ color: goldColor }}>BERTINO</span>
          </div>
          <span
            className="text-[9.5px] uppercase tracking-[0.18em] font-medium"
            style={{ color: isDark ? '#94A3B8' : '#0B2345' }}
          >
            Accounting & Financial Services
          </span>
        </div>
      </div>
    );
  }

  // Full High-Fidelity Official Logo with Monogram, Calculator, Gold Coins, Emerald Bars, & Tagline
  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <div className="flex items-center gap-3.5">
        {/* Visual Monogram Embellishment */}
        <svg
          viewBox="0 0 130 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={variant === 'footer' ? 'h-14 w-auto' : 'h-12 w-auto'}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="sb-gold-grad-f" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#966F1F" />
              <stop offset="45%" stopColor={goldColor} />
              <stop offset="85%" stopColor={goldLight} />
              <stop offset="100%" stopColor="#EED28A" />
            </linearGradient>
            <linearGradient id="sb-green-grad-f" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#044D38" />
              <stop offset="60%" stopColor={emeraldColor} />
              <stop offset="100%" stopColor={emeraldLight} />
            </linearGradient>
            <filter id="gold-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#C69A3A" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* S & B Monogram */}
          <text
            x="14"
            y="74"
            fontFamily="'Cinzel', 'Times New Roman', serif"
            fontSize="68"
            fontWeight="700"
            fill={navyColor}
            letterSpacing="-2"
          >
            S
          </text>
          <text
            x="54"
            y="74"
            fontFamily="'Cinzel', 'Times New Roman', serif"
            fontSize="68"
            fontWeight="700"
            fill={navyColor}
            letterSpacing="-2"
          >
            B
          </text>

          {/* Calculator silhouette in front of S */}
          <rect
            x="8"
            y="48"
            width="18"
            height="24"
            rx="3"
            fill={isDark ? '#1E293B' : '#0B2345'}
            stroke={goldColor}
            strokeWidth="0.8"
          />
          <rect x="11" y="52" width="12" height="4" rx="1" fill="#FFFFFF" opacity="0.85" />
          <circle cx="12.5" cy="60" r="1.2" fill="#FFFFFF" opacity="0.8" />
          <circle cx="17" cy="60" r="1.2" fill="#FFFFFF" opacity="0.8" />
          <circle cx="21.5" cy="60" r="1.2" fill="#FFFFFF" opacity="0.8" />
          <circle cx="12.5" cy="65" r="1.2" fill="#FFFFFF" opacity="0.8" />
          <circle cx="17" cy="65" r="1.2" fill="#FFFFFF" opacity="0.8" />
          <circle cx="21.5" cy="65" r="1.2" fill="#FFFFFF" opacity="0.8" />

          {/* Emerald Growth Bar Charts */}
          <rect x="62" y="56" width="5.5" height="18" rx="1.5" fill="url(#sb-green-grad-f)" />
          <rect x="70" y="46" width="5.5" height="28" rx="1.5" fill="url(#sb-green-grad-f)" />
          <rect x="78" y="36" width="5.5" height="38" rx="1.5" fill="url(#sb-green-grad-f)" />
          <rect x="86" y="26" width="5.5" height="48" rx="1.5" fill="url(#sb-green-grad-f)" />

          {/* Golden Coin Stack */}
          <g filter="url(#gold-glow)">
            <ellipse cx="40" cy="68" rx="13" ry="4" fill="url(#sb-gold-grad-f)" />
            <ellipse cx="40" cy="63" rx="13" ry="4" fill="url(#sb-gold-grad-f)" />
            <ellipse cx="40" cy="58" rx="13" ry="4" fill="url(#sb-gold-grad-f)" />
            <ellipse cx="40" cy="53" rx="13" ry="4" fill="url(#sb-gold-grad-f)" />
          </g>

          {/* Dynamic Ascending Golden Swoosh Arrow */}
          <path
            d="M 38 66 C 54 48 74 34 110 14"
            stroke="url(#sb-gold-grad-f)"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <polygon points="106,8 126,12 115,28" fill="url(#sb-gold-grad-f)" filter="url(#gold-glow)" />
        </svg>

        {/* Wordmark Hierarchy */}
        <div className="flex flex-col text-left">
          <div className="font-brand text-lg md:text-xl font-bold tracking-tight leading-none flex items-center gap-1.5">
            <span style={{ color: navyColor }}>SANTINO</span>
            <span style={{ color: goldColor }}>BERTINO</span>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <div className="h-[1px] w-4" style={{ backgroundColor: goldColor }} />
            <span
              className="text-[9.5px] md:text-[10px] uppercase font-semibold tracking-[0.2em]"
              style={{ color: isDark ? '#CBD5E1' : '#0B2345' }}
            >
              Accounting & Financial Services
            </span>
            <div className="h-[1px] w-4" style={{ backgroundColor: goldColor }} />
          </div>
        </div>
      </div>

      {/* Brand Slogan */}
      {showTagline && (
        <div className="mt-1 flex items-center gap-2 text-center">
          <span
            className="text-[10px] md:text-[11px] italic font-serif tracking-wide"
            style={{ color: isDark ? '#E2E8F0' : '#0B2345' }}
          >
            Clarity in Your Numbers. Confidence in Your Financial Future.
          </span>
        </div>
      )}
    </div>
  );
};
