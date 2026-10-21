import React, { useState, useEffect, useRef } from 'react';
import { Camera, RefreshCw, Upload, CheckCircle2 } from 'lucide-react';

interface SantinoPortraitProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export const SantinoPortrait: React.FC<SantinoPortraitProps> = ({
  className = '',
  size = 'hero',
}) => {
  const [portraitUrl, setPortraitUrl] = useState<string | null>(null);
  const [showUploader, setShowUploader] = useState(false);
  const [copiedNotification, setCopiedNotification] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('santino_bertino_portrait_custom');
      if (saved) {
        setPortraitUrl(saved);
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setPortraitUrl(result);
        try {
          localStorage.setItem('santino_bertino_portrait_custom', result);
        } catch {
          // If storage full, keep in state
        }
        setShowUploader(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetToDefault = () => {
    setPortraitUrl(null);
    try {
      localStorage.removeItem('santino_bertino_portrait_custom');
    } catch {
      // Ignore
    }
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Outer Executive Frame */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#0B2345] to-[#07172F] p-1.5 shadow-2xl border border-[#C69A3A]/30">
        <div className="relative rounded-xl overflow-hidden bg-[#0A1C38] aspect-[4/5] flex items-center justify-center">
          {portraitUrl ? (
            <img
              src={portraitUrl}
              alt="Santino Bertino – Accounting and Financial Services Professional"
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          ) : (
            /* High-Fidelity Domain-Crafted Portrait of Santino Bertino */
            <div className="relative w-full h-full flex flex-col items-center justify-end overflow-hidden bg-gradient-to-b from-[#15396B] via-[#0E274D] to-[#07172F]">
              {/* Subtle Architectural Background Texture */}
              <div className="absolute inset-0 opacity-15 bg-ledger-grid" />
              
              {/* SVG Artistic Render of Santino Bertino matching uploaded photograph */}
              <svg
                viewBox="0 0 400 500"
                className="w-full h-full object-cover"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Sky blue tunic gradient matching Santino's bespoke attire */}
                  <linearGradient id="tunic-sky" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C4DCF2" />
                    <stop offset="40%" stopColor="#A8CEEB" />
                    <stop offset="100%" stopColor="#8AB8DE" />
                  </linearGradient>
                  {/* Skin tone gradient */}
                  <linearGradient id="skin-tone" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#6E4327" />
                    <stop offset="50%" stopColor="#59341B" />
                    <stop offset="100%" stopColor="#432410" />
                  </linearGradient>
                  {/* Gold accent glow */}
                  <linearGradient id="gold-hairline" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#C69A3A" />
                    <stop offset="100%" stopColor="#E4BC5E" />
                  </linearGradient>
                </defs>

                {/* Soft backdrop lighting */}
                <circle cx="200" cy="180" r="140" fill="#1A4072" opacity="0.4" />

                {/* Body / Sky-Blue Tailored Tunic with Asymmetric Detail */}
                <path
                  d="M 100 500 L 100 340 C 100 300 135 270 170 260 L 200 280 L 230 260 C 265 270 300 300 300 340 L 300 500 Z"
                  fill="url(#tunic-sky)"
                />
                
                {/* Tunic Collar slit detail */}
                <path d="M 200 270 L 200 315" stroke="#7A9FB8" strokeWidth="3" strokeLinecap="round" />
                <circle cx="200" cy="275" r="3.5" fill="#C69A3A" />

                {/* Eyelet grommets at tunic hem/side matching the photo */}
                <circle cx="160" cy="460" r="4.5" fill="#8AB8DE" stroke="#5E8CAE" strokeWidth="2" />
                <circle cx="160" cy="475" r="4.5" fill="#8AB8DE" stroke="#5E8CAE" strokeWidth="2" />
                <circle cx="175" cy="465" r="4.5" fill="#8AB8DE" stroke="#5E8CAE" strokeWidth="2" />

                {/* Neck */}
                <rect x="180" y="220" width="40" height="55" rx="10" fill="url(#skin-tone)" />

                {/* Head / Jaw & Face with warm smile */}
                <ellipse cx="200" cy="175" rx="48" ry="60" fill="url(#skin-tone)" />
                
                {/* Short Hair & Crisp Fade */}
                <path
                  d="M 152 165 C 152 110 248 110 248 165 C 248 145 240 120 200 120 C 160 120 152 145 152 165 Z"
                  fill="#1B120C"
                />

                {/* Ears */}
                <ellipse cx="150" cy="175" rx="7" ry="12" fill="#59341B" />
                <ellipse cx="250" cy="175" rx="7" ry="12" fill="#59341B" />

                {/* Eyes & Eyebrows */}
                <path d="M 172 160 Q 182 155 192 160" stroke="#1B120C" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M 208 160 Q 218 155 228 160" stroke="#1B120C" strokeWidth="3.5" strokeLinecap="round" />
                <ellipse cx="182" cy="168" rx="4" ry="3" fill="#1B120C" />
                <ellipse cx="218" cy="168" rx="4" ry="3" fill="#1B120C" />

                {/* Nose */}
                <path d="M 197 170 Q 200 185 204 185 Q 208 185 203 170" fill="#4A2914" />

                {/* Neat Beard / Goatee */}
                <path
                  d="M 180 195 Q 200 230 220 195 Q 212 215 200 215 Q 188 215 180 195 Z"
                  fill="#1E140C"
                />

                {/* Genuine Warm Smile */}
                <path
                  d="M 182 195 Q 200 215 218 195"
                  stroke="#FFFFFF"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Left hand watch band glimpse */}
                <rect x="270" y="440" width="16" height="30" rx="3" fill="#1E1B18" stroke="#C69A3A" strokeWidth="1" />
              </svg>

              {/* Portrait Overlaid Bio Plaque */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#07172F] via-[#07172F]/90 to-transparent p-5 pt-10 text-center">
                <span className="font-brand text-lg font-bold text-white tracking-wide block">
                  Santino Bertino
                </span>
                <span className="text-xs text-[#E4BC5E] font-medium tracking-wider uppercase block mt-0.5">
                  M.Sc. & B.Sc. in Accounting
                </span>
                <span className="text-[11px] text-slate-300 mt-1 block">
                  Accounting · Financial Advisory · Cross-Sector Experience
                </span>
              </div>
            </div>
          )}

          {/* Quick Photo Replacement Button (for instant custom user photo loading) */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-2.5 py-1.5 rounded-lg bg-[#0B2345]/90 hover:bg-[#0B2345] text-white text-xs font-medium border border-[#C69A3A]/40 flex items-center gap-1.5 backdrop-blur-md shadow-md cursor-pointer transition-all"
              title="Replace with high-res portrait"
            >
              <Upload className="w-3.5 h-3.5 text-[#E4BC5E]" />
              <span>{portraitUrl ? 'Change Photo' : 'Upload Photo'}</span>
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept="image/*"
              className="hidden"
            />
          </div>

          {portraitUrl && (
            <button
              onClick={handleResetToDefault}
              className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg bg-black/60 hover:bg-black/80 text-white text-xs border border-white/20 backdrop-blur-md cursor-pointer"
              title="Reset to default portrait"
            >
              <RefreshCw className="w-3 h-3 text-slate-300" />
            </button>
          )}
        </div>

        {/* Gold Corner Accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#C69A3A] pointer-events-none rounded-tl-sm" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#C69A3A] pointer-events-none rounded-tr-sm" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#C69A3A] pointer-events-none rounded-bl-sm" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#C69A3A] pointer-events-none rounded-br-sm" />
      </div>

      {/* Global Availability Badge below portrait */}
      <div className="mt-3 text-center">
        <span className="text-[11.5px] text-[#0B2345] font-medium inline-flex items-center justify-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-[#087A5B]" />
          Available for Global Remote Engagements & On-Site Missions
        </span>
      </div>
    </div>
  );
};
