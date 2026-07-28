import React from 'react';
import { POPULAR_CATEGORIES, JobCategory } from '../../data/homeData';
import { 
  Code, 
  Brain, 
  Kanban, 
  ShieldCheck, 
  Palette, 
  Cloud, 
  Activity, 
  TrendingUp, 
  Cpu,
  ArrowUpRight 
} from 'lucide-react';

interface CategoryGridProps {
  onSelectCategory: (categoryName: string) => void;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Brain,
  Kanban,
  ShieldCheck,
  Palette,
  Cloud,
  Activity,
  TrendingUp,
  Cpu,
};

export default function CategoryGrid({ onSelectCategory }: CategoryGridProps) {
  return (
    <section className="py-16 bg-[#EFECEC] text-[#182956]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F66E3B] bg-[#F66E3B]/10 px-3 py-1 rounded-full mb-2">
              Explore High-Demand Fields
            </div>
            <h2 className="font-space text-3xl sm:text-4xl font-bold tracking-tight text-[#182956]">
              Popular Job Categories Across the US
            </h2>
          </div>
          <p className="text-sm text-gray-600 max-w-md">
            Click any field to explore active roles with verified salary insights and direct employer contacts.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POPULAR_CATEGORIES.map((cat: JobCategory) => {
            const IconComponent = ICON_MAP[cat.iconName] || Code;

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.name)}
                className="group bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Role Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#182956] text-white flex items-center justify-center group-hover:bg-[#F66E3B] transition-colors shadow-md">
                      <IconComponent className="w-6 h-6 text-[#FCB2B1] group-hover:text-white" />
                    </div>
                    <span className="text-xs font-bold text-[#F66E3B] bg-[#F66E3B]/10 px-2.5 py-1 rounded-full">
                      {cat.rolesCount}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-space font-bold text-lg text-[#182956] group-hover:text-[#F66E3B] transition-colors mb-2 flex items-center justify-between">
                    <span>{cat.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#F66E3B]" />
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-2">
                    {cat.description}
                  </p>
                </div>

                {/* Footer Info */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-gray-500">Avg. Salary:</span>
                  <span className="font-bold text-[#182956]">{cat.avgSalary}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
