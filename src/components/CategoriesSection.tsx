import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES, CategoryItem, Language } from '../data/siteData';
import { ScrollBlurReveal } from './ScrollBlurReveal';

interface CategoriesSectionProps {
  lang: Language;
  onSelectCategory: (cat: CategoryItem) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  lang,
  onSelectCategory,
}) => {
  const renderCard = (cat: CategoryItem, colClass: string, delay: number) => (
    <ScrollBlurReveal
      key={cat.id}
      delayMs={delay}
      className={colClass}
    >
      <div
        onClick={() => onSelectCategory(cat)}
        className="group cursor-pointer"
      >
        <div className="relative h-[280px] sm:h-[340px] lg:h-[370px] w-full rounded-xl overflow-hidden bg-[#f9f5e8]">
          <img
            src={cat.image}
            alt={lang === 'pt' ? cat.namePt : cat.nameEn}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Dark Warm Hover Overlay + Centered "View More ↗" Pill (00:11 - 00:12 in video) */}
          <div className="absolute inset-0 bg-[#1f190b]/0 group-hover:bg-[#1f190b]/45 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 inline-flex items-center gap-1.5 bg-[#daab21]/90 text-[#2d2613] text-xs sm:text-[13px] font-semibold px-5 py-2.5 rounded-full shadow-lg backdrop-blur-md border border-[#fef08a]/50">
              <span>{lang === 'pt' ? 'Ver Mais' : 'View More'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <h3 className="text-sm sm:text-[15px] font-medium text-[#2d2613] group-hover:text-[#b58912] transition-colors">
            {lang === 'pt' ? cat.namePt : cat.nameEn}
          </h3>
          <span className="text-xs text-[#786b4c]">
            {lang === 'pt' ? cat.countPt : cat.countEn}
          </span>
        </div>
      </div>
    </ScrollBlurReveal>
  );

  return (
    <section
      id="categories"
      className="py-12 sm:py-16 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto"
    >
      <ScrollBlurReveal>
        <div className="inline-flex items-center gap-2.5 text-xs sm:text-[13px] font-semibold tracking-[0.16em] uppercase text-[#2d2613] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#daab21]" />
          <span>{lang === 'pt' ? 'CATEGORIAS' : 'CATEGORIES'}</span>
        </div>
      </ScrollBlurReveal>

      {/* Categories Grid (2 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {CATEGORIES.map((cat, idx) => renderCard(cat, 'w-full', idx * 100))}
      </div>
    </section>
  );
};

