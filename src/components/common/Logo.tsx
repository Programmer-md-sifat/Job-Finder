import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  layout?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({
  className = '',
  iconOnly = false,
  layout = 'horizontal',
  size = 'md',
}: LogoProps) {
  // Size-based dimensions for the SVG icon
  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
  };

  const taglineSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs',
  };

  // Beautiful high-fidelity SVG representation of the user's logo
  const LogoIcon = () => (
    <svg
      viewBox="0 0 100 100"
      className={`${iconDimensions[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="chakri-logo-svg"
    >
      {/* Light Coral/Pink Outer Arc at the top */}
      <path
        d="M 20 32 A 35 35 0 0 1 70 24"
        stroke="#FA8B89"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Magnifying Glass outer ring */}
      <path
        d="M 25 50 A 20 20 0 1 1 56 64"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Magnifying Glass handle */}
      <path
        d="M 54 59 L 76 81"
        stroke="white"
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* Inner briefcase */}
      {/* Handle */}
      <path
        d="M 40 43 V 39 C 40 37.5 41 36.5 42.5 36.5 H 47.5 C 49 36.5 50 37.5 50 39 V 43"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Briefcase Body */}
      <rect
        x="33"
        y="43"
        width="24"
        height="16"
        rx="3"
        fill="none"
        stroke="white"
        strokeWidth="2"
      />
      {/* Briefcase clasp */}
      <rect
        x="43"
        y="48"
        width="4"
        height="3"
        rx="0.5"
        fill="white"
      />

      {/* Star at the top right */}
      <path
        d="M 78 18 L 80.5 23 L 86 23.5 L 82 27 L 83 32.5 L 78 29.5 L 73 32.5 L 74 27 L 70 23.5 L 75.5 23 Z"
        fill="#F66E3B"
      />

      {/* Orange horizontal bars underneath the star */}
      <path
        d="M 70 39 H 88"
        stroke="#F66E3B"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M 70 45 H 84"
        stroke="#F66E3B"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M 70 51 H 80"
        stroke="#F66E3B"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );

  if (iconOnly) {
    return <LogoIcon />;
  }

  if (layout === 'vertical') {
    return (
      <div className={`flex flex-col items-center text-center group ${className}`} id="logo-vertical">
        <LogoIcon />
        <div className="mt-3">
          <h1 className={`${textSizes[size]} font-bold tracking-tight text-white font-space flex items-center justify-center`}>
            <span>Cha</span>
            <span className="text-[#F66E3B]">k</span>
            <span>ri</span>
          </h1>
          <div className="flex items-center justify-center gap-1.5 mt-1.5">
            <span className="w-6 h-[1px] bg-white/30"></span>
            <span className={`${taglineSizes[size]} tracking-[0.2em] text-[#FCB2B1] uppercase font-semibold whitespace-nowrap`}>
              USA Job Finder
            </span>
            <span className="w-6 h-[1px] bg-white/30"></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3.5 group ${className}`} id="logo-horizontal">
      <LogoIcon />
      <div className="text-left">
        <h1 className={`${textSizes[size]} font-bold tracking-tight text-white font-space leading-none flex items-center`}>
          <span>Cha</span>
          <span className="text-[#F66E3B]">k</span>
          <span>ri</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#F66E3B] ml-1 self-end mb-1"></span>
        </h1>
        <div className="flex items-center gap-1 mt-1">
          <span className={`${taglineSizes[size]} tracking-[0.15em] text-[#FCB2B1] uppercase font-semibold whitespace-nowrap block`}>
            USA Job Finder
          </span>
        </div>
      </div>
    </div>
  );
}
