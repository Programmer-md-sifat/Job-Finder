import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[] | SelectOption[];
  placeholder?: string;
  className?: string; // Classes for the trigger button
  dropdownClassName?: string; // Classes for the dropdown panel
  icon?: React.ReactNode; // Optional prefix icon (e.g., MapPin, Briefcase)
  variant?: 'light' | 'dark';
}

export default function CustomSelect({
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  className = '',
  dropdownClassName = '',
  icon,
  variant = 'light',
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Normalize options to a standard { value, label } format
  const normalizedOptions = options.map((opt) => {
    if (typeof opt === 'string') {
      return { value: opt, label: opt };
    }
    return opt;
  });

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  // Close the dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const isLight = variant === 'light';

  return (
    <div className="relative inline-block w-full text-left" ref={containerRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={toggleDropdown}
        className={`w-full flex items-center justify-between py-3 px-4 rounded-xl border transition-all duration-200 cursor-pointer text-sm font-medium focus:outline-none focus:ring-2 ${
          isLight
            ? 'bg-white text-[#182956] border-gray-200 hover:border-gray-300 focus:border-[#F66E3B] focus:ring-[#F66E3B]/10 active:bg-gray-50'
            : 'bg-[#223872] text-white border-white/20 hover:border-white/40 focus:border-[#F66E3B] focus:ring-[#F66E3B]/30 active:bg-[#1c2e5f]'
        } ${className}`}
      >
        <div className="flex items-center gap-2.5 truncate">
          {icon && <span className="flex-shrink-0">{icon}</span>}
          <span className="truncate">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>
        <ChevronDown
          className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
            isLight ? 'text-gray-400' : 'text-white/60'
          } ${isOpen ? 'rotate-180 text-[#F66E3B]' : ''}`}
        />
      </button>

      {/* Options Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={`absolute z-50 mt-2 w-full rounded-2xl border max-h-64 overflow-y-auto ${
              isLight
                ? 'bg-white border-gray-100 shadow-xl'
                : 'bg-[#223872] border-white/10 shadow-2xl'
            } ${dropdownClassName}`}
            style={{ scrollbarWidth: 'thin' }}
          >
            <div className="p-1.5 space-y-0.5">
              {normalizedOptions.map((opt) => {
                const isSelected = opt.value === value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleSelect(opt.value)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                      isSelected
                        ? isLight
                          ? 'bg-[#182956] text-white'
                          : 'bg-[#F66E3B] text-white'
                        : isLight
                        ? 'text-gray-700 hover:bg-[#F66E3B]/5 hover:text-[#182956]'
                        : 'text-white/90 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
