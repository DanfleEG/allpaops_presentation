import React from 'react';
import { cn } from '@/src/lib/utils';

interface NavbarProps {
  activeSection: number;
  onNavigate: (index: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const sections = Array.from({ length: 11 });

  return (
    <nav id="mainNav" className="fixed top-0 left-0 right-0 z-[1000] px-12 py-5 flex items-center justify-between backdrop-blur-[20px] bg-[rgba(13,13,11,0.7)] border-b border-[rgba(200,129,58,0.1)] transition-all duration-300">
      <a href="#s1" className="flex items-center gap-3 no-underline" onClick={(e) => { e.preventDefault(); onNavigate(0); }}>
        <div className="w-9 h-9 relative">
          <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" rx="6" fill="rgba(74,124,89,0.15)"/>
            <path d="M6 26 L11 16 L16 21 L21 11 L26 18 L30 14" stroke="#6aaf78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="11" cy="16" r="2.5" fill="#c8813a"/>
            <circle cx="21" cy="11" r="2.5" fill="#c8813a"/>
            <path d="M6 30 Q18 28 30 30" stroke="rgba(74,124,89,0.4)" strokeWidth="1" fill="none"/>
          </svg>
        </div>
        <span className="font-display font-extrabold text-xl tracking-tight text-white">
          Allpa<span className="text-amber">Ops</span>
        </span>
      </a>
      
      <div className="hidden md:flex gap-1.5 items-center">
        {sections.map((_, i) => (
          <div
            key={i}
            className={cn(
              "nav-dot",
              activeSection === i && "active"
            )}
            onClick={() => onNavigate(i)}
          />
        ))}
      </div>

      <a href="#s11" className="nav-cta border border-[rgba(200,129,58,0.4)] px-5 py-2 rounded-sm text-amber font-display text-[0.8rem] font-semibold tracking-widest uppercase no-underline hover:bg-amber hover:text-ink transition-all duration-300" onClick={(e) => { e.preventDefault(); onNavigate(10); }}>
        Demo →
      </a>
    </nav>
  );
};
