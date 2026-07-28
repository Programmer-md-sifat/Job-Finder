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
  // Generous height dimensions that scale, using w-auto to prevent squeezing/squishing.
  // This allows the full logo details to be beautifully visible and readable.
  const logoHeights = {
    sm: 'h-10 md:h-12',
    md: 'h-16 md:h-20',
    lg: 'h-24 md:h-28',
  };

  return (
    <div className={`flex items-center group ${className}`} id="logo-container">
      <img
        src="https://lh3.googleusercontent.com/d/1akcrqELf5_PACxQ4yvfPI47j6knAzelK"
        alt="Chakri Logo"
        className={`${logoHeights[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-102`}
        id="chakri-logo-img"
        referrerPolicy="no-referrer"
        onError={(e) => {
          // Fallback to secondary stream link if lh3 is slow or restricted
          const target = e.currentTarget;
          if (target.src !== 'https://docs.google.com/uc?export=view&id=1akcrqELf5_PACxQ4yvfPI47j6knAzelK') {
            target.src = 'https://docs.google.com/uc?export=view&id=1akcrqELf5_PACxQ4yvfPI47j6knAzelK';
          }
        }}
      />
    </div>
  );
}

