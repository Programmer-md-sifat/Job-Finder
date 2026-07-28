import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
}: PaginationProps) {
  if (totalPages <= 1) return null;

  // Generate page numbers with ellipsis support
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      if (start > 2) {
        pages.push('...');
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages - 1) {
        pages.push('...');
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav
      id="pagination-navigation"
      aria-label="Pagination Navigation"
      className={`flex items-center justify-between border-t border-gray-200/60 pt-6 px-2 ${className}`}
    >
      {/* Previous Button */}
      <div className="flex-1 flex justify-start">
        <button
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-xs font-bold transition-all duration-200 shadow-sm
            ${
              currentPage === 1
                ? 'text-gray-300 bg-gray-50/50 cursor-not-allowed border-gray-100'
                : 'text-[#182956] hover:bg-[#182956] hover:text-white hover:border-[#182956] active:scale-95'
            }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Previous</span>
        </button>
      </div>

      {/* Page Numbers */}
      <div className="hidden md:flex items-center gap-1.5">
        {pageNumbers.map((page, idx) => {
          if (page === '...') {
            return (
              <span
                key={`ellipsis-${idx}`}
                className="w-10 h-10 flex items-center justify-center text-sm font-semibold text-gray-400"
              >
                ...
              </span>
            );
          }

          const isCurrent = page === currentPage;
          return (
            <button
              key={`page-${page}`}
              onClick={() => onPageChange(page as number)}
              aria-current={isCurrent ? 'page' : undefined}
              className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold transition-all duration-200 border
                ${
                  isCurrent
                    ? 'bg-[#F66E3B] text-white border-[#F66E3B] shadow-md shadow-[#F66E3B]/10'
                    : 'bg-white text-[#182956] border-gray-200 hover:bg-gray-50 active:scale-95'
                }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Compact Info for Mobile */}
      <div className="md:hidden text-xs font-bold text-gray-500">
        Page {currentPage} of {totalPages}
      </div>

      {/* Next Button */}
      <div className="flex-1 flex justify-end">
        <button
          onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-xs font-bold transition-all duration-200 shadow-sm
            ${
              currentPage === totalPages
                ? 'text-gray-300 bg-gray-50/50 cursor-not-allowed border-gray-100'
                : 'text-[#182956] hover:bg-[#182956] hover:text-white hover:border-[#182956] active:scale-95'
            }`}
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
}
