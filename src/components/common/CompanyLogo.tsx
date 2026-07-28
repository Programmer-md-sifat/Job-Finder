import React from 'react';

interface CompanyLogoProps {
  companyName: string;
  className?: string;
}

export default function CompanyLogo({ companyName, className = 'w-12 h-12' }: CompanyLogoProps) {
  const normalized = companyName.toLowerCase().trim();

  // 1. CloudScale Systems USA Logo (Isometric Blue Cloud Blocks)
  if (normalized.includes('cloudscale')) {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} shrink-0`}
        id="logo-cloudscale"
      >
        <defs>
          <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>
        </defs>
        {/* Modern 3D overlapping cloud segments */}
        <rect x="25" y="45" width="30" height="30" rx="8" fill="url(#cloudGrad)" transform="rotate(-15 25 45)" />
        <rect x="45" y="30" width="35" height="35" rx="10" fill="url(#cloudGrad)" fillOpacity="0.85" transform="rotate(15 45 30)" />
        <circle cx="40" cy="55" r="18" fill="url(#cloudGrad)" fillOpacity="0.9" />
        <circle cx="65" cy="50" r="15" fill="url(#cloudGrad)" />
        {/* High-tech node connections */}
        <line x1="35" y1="55" x2="65" y2="50" stroke="white" strokeWidth="2.5" strokeDasharray="3 3" />
        <circle cx="35" cy="55" r="4" fill="white" />
        <circle cx="65" cy="50" r="4" fill="white" />
      </svg>
    );
  }

  // 2. Apex Intelligence Labs Logo (Glowing Orange Coral Neural/Hex Spark)
  if (normalized.includes('apex') || normalized.includes('intelligence')) {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} shrink-0`}
        id="logo-apex"
      >
        <defs>
          <linearGradient id="apexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F66E3B" />
            <stop offset="100%" stopColor="#FA8B89" />
          </linearGradient>
        </defs>
        {/* Outer Tech Hexagon */}
        <polygon
          points="50,15 82,33 82,67 50,85 18,67 18,33"
          stroke="url(#apexGrad)"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        {/* Inner neural connections / spark */}
        <circle cx="50" cy="50" r="14" fill="url(#apexGrad)" />
        <line x1="50" y1="50" x2="50" y2="23" stroke="url(#apexGrad)" strokeWidth="3" />
        <line x1="50" y1="50" x2="74" y2="61" stroke="url(#apexGrad)" strokeWidth="3" />
        <line x1="50" y1="50" x2="26" y2="61" stroke="url(#apexGrad)" strokeWidth="3" />
        <circle cx="50" cy="23" r="5" fill="white" stroke="#F66E3B" strokeWidth="2" />
        <circle cx="74" cy="61" r="5" fill="white" stroke="#F66E3B" strokeWidth="2" />
        <circle cx="26" cy="61" r="5" fill="white" stroke="#F66E3B" strokeWidth="2" />
      </svg>
    );
  }

  // 3. Vanguard FinTech Group Logo (Gold/Teal Interlaced Rings & Chevron)
  if (normalized.includes('vanguard')) {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} shrink-0`}
        id="logo-vanguard"
      >
        <defs>
          <linearGradient id="vanGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#182956" />
            <stop offset="100%" stopColor="#223872" />
          </linearGradient>
          <linearGradient id="vanGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
        {/* Double interlaced circular arches representing security and wealth transfer */}
        <path
          d="M 25 50 A 25 25 0 1 1 75 50"
          stroke="url(#vanGrad1)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M 75 50 A 25 25 0 1 1 25 50"
          stroke="url(#vanGrad2)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* Central forward-looking chevron */}
        <path
          d="M 40 38 L 58 50 L 40 62"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // 4. CyberShield America Logo (Royal Blue & Silver Defense Shield)
  if (normalized.includes('cybershield')) {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} shrink-0`}
        id="logo-cybershield"
      >
        <defs>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        {/* High-fidelity Security Shield */}
        <path
          d="M 50 18 C 65 18 80 24 80 24 V 52 C 80 70 50 85 50 85 C 50 85 20 70 20 52 V 24 C 20 24 35 18 50 18 Z"
          fill="url(#shieldGrad)"
          stroke="white"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Inner lock icon and grid lines */}
        <path
          d="M 38 48 H 62 V 64 C 62 68 50 72 50 72 C 50 72 38 68 38 64 Z"
          fill="white"
          fillOpacity="0.25"
        />
        {/* Padlock loop */}
        <path
          d="M 44 48 V 42 C 44 38.5 46.5 36 50 36 C 53.5 36 56 38.5 56 42 V 48"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Glowing checkmark of protection */}
        <path
          d="M 43 55 L 48 60 L 58 50"
          stroke="#10B981"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // 5. NextGen Mobility Solutions Logo (Sustainable Electric Mobility Leaf & Lightning)
  if (normalized.includes('nextgen') || normalized.includes('mobility')) {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} shrink-0`}
        id="logo-nextgen"
      >
        <defs>
          <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#065F46" />
          </linearGradient>
          <linearGradient id="boltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>
        {/* Dynamic Leaf Curve representing eco-friendliness */}
        <path
          d="M 22 78 C 22 78 18 35 50 22 C 82 35 78 78 78 78 C 78 78 50 82 22 78 Z"
          fill="url(#leafGrad)"
        />
        {/* Stylized electric charging lightning bolt down the middle */}
        <path
          d="M 54 32 L 38 54 H 52 L 46 72 L 64 48 H 48 Z"
          fill="url(#boltGrad)"
        />
      </svg>
    );
  }

  // 6. BioHealth America Logo (DNA Helix & Coral Ribbon Cross)
  if (normalized.includes('biohealth') || normalized.includes('health')) {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} shrink-0`}
        id="logo-biohealth"
      >
        <defs>
          <linearGradient id="healthGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#F87171" />
          </linearGradient>
          <linearGradient id="healthGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCB2B1" />
            <stop offset="100%" stopColor="#FA8B89" />
          </linearGradient>
        </defs>
        {/* Abstract organic cross-helix symbol */}
        <rect x="42" y="15" width="16" height="70" rx="8" fill="url(#healthGrad1)" transform="rotate(-45 50 50)" />
        <rect x="42" y="15" width="16" height="70" rx="8" fill="url(#healthGrad2)" fillOpacity="0.85" transform="rotate(45 50 50)" />
        {/* Dynamic biological health nodes */}
        <circle cx="50" cy="50" r="10" fill="white" />
        <circle cx="50" cy="50" r="6" fill="#EF4444" />
        <circle cx="25" cy="25" r="4.5" fill="white" />
        <circle cx="75" cy="25" r="4.5" fill="white" />
        <circle cx="25" cy="75" r="4.5" fill="white" />
        <circle cx="75" cy="75" r="4.5" fill="white" />
      </svg>
    );
  }

  // 7. Quantum Logic US Logo (Deep Purple/Indigo Computing Grid Orbit)
  if (normalized.includes('quantum') || normalized.includes('logic')) {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} shrink-0`}
        id="logo-quantum"
      >
        <defs>
          <linearGradient id="quantGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#4F46E5" />
          </linearGradient>
        </defs>
        {/* Infinite orbital tracks representing quantum spin */}
        <circle cx="50" cy="50" r="32" stroke="url(#quantGrad)" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="20" stroke="url(#quantGrad)" strokeWidth="1.5" strokeDasharray="4 2" />
        {/* Core processor particle */}
        <circle cx="50" cy="50" r="10" fill="url(#quantGrad)" />
        {/* Quantum superpositions around the ring */}
        <circle cx="50" cy="18" r="5" fill="#EF4444" />
        <circle cx="82" cy="50" r="5" fill="#10B981" />
        <circle cx="18" cy="50" r="5" fill="#3B82F6" />
        <circle cx="50" cy="82" r="5" fill="#F59E0B" />
        {/* Connection rays */}
        <line x1="50" y1="23" x2="50" y2="40" stroke="url(#quantGrad)" strokeWidth="1.5" />
        <line x1="50" y1="60" x2="50" y2="77" stroke="url(#quantGrad)" strokeWidth="1.5" />
        <line x1="23" y1="50" x2="40" y2="50" stroke="url(#quantGrad)" strokeWidth="1.5" />
        <line x1="60" y1="50" x2="77" y2="50" stroke="url(#quantGrad)" strokeWidth="1.5" />
      </svg>
    );
  }

  // 8. OmniRetail US Logo (Vibrant Orange Shopping Infinite Loop)
  if (normalized.includes('omniretail') || normalized.includes('retail')) {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} shrink-0`}
        id="logo-omniretail"
      >
        <defs>
          <linearGradient id="retailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>
        </defs>
        {/* Infinite Mobius strip representing seamless omnichannel trade */}
        <path
          d="M 30 50 C 30 62 42 70 50 70 C 58 70 70 62 70 50 C 70 38 58 30 50 30 C 42 30 30 38 30 50 Z"
          stroke="url(#retailGrad)"
          strokeWidth="7"
          strokeLinecap="round"
        />
        {/* Dynamic checkout arrow integration */}
        <path
          d="M 68 50 C 68 38 58 32 50 32"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M 45 26 L 52 32 L 45 38"
          stroke="url(#retailGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Shopping bag handle arc in the background */}
        <path
          d="M 38 40 V 32 C 38 25 43 20 50 20 C 57 20 62 25 62 32 V 40"
          stroke="url(#retailGrad)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // DEFAULT / FALLBACK: Corporate Building Architectural Icon
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} shrink-0`}
      id="logo-fallback"
    >
      <defs>
        <linearGradient id="defaultGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#182956" />
          <stop offset="100%" stopColor="#F66E3B" />
        </linearGradient>
      </defs>
      <rect x="20" y="20" width="60" height="60" rx="12" fill="url(#defaultGrad)" />
      {/* High-fidelity architectural skyline vectors */}
      <rect x="32" y="38" width="10" height="30" rx="1" fill="white" fillOpacity="0.8" />
      <rect x="47" y="32" width="10" height="36" rx="1" fill="white" />
      <rect x="62" y="44" width="10" height="24" rx="1" fill="white" fillOpacity="0.8" />
      <circle cx="52" cy="40" r="1.5" fill="#F66E3B" />
      <circle cx="37" cy="46" r="1.5" fill="#F66E3B" />
      <circle cx="67" cy="52" r="1.5" fill="#F66E3B" />
    </svg>
  );
}
