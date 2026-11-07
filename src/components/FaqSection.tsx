import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS, Language } from '../data/siteData';
import { ScrollBlurReveal } from './ScrollBlurReveal';

interface FaqSectionProps {
  lang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  // First item open or toggleable just like 00:24 -> 00:25 in video
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto"
    >
      <ScrollBlurReveal>
        {/* Top Row: Left Large Title + Right Intro Copy (00:22 - 00:23 in video) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-14">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#2d2613] leading-[1.15] tracking-tight">
              {lang === 'pt' ? (
                <>
                  Tudo o Que Você
                  <br />
                  Precisa Saber
                </>
              ) : (
                <>
                  Everything You Need
                  <br />
                  to Know
                </>
              )}
            </h2>
          </div>

          <div className="lg:col-span-7 lg:text-right">
            <p className="text-sm sm:text-[15px] text-[#786b4c] max-w-lg lg:ml-auto leading-relaxed">
              {lang === 'pt'
                ? 'Dos detalhes dos produtos até a entrega e cuidados diários, reunimos as respostas para tornar sua experiência com a Servih ainda mais tranquila.'
                : "From product details to delivery and care, we've gathered the answers to help you enjoy a smoother Servih experience."}
            </p>
          </div>
        </div>

        {/* Main Content Grid: Left Image & Caption + Right Accordion List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Kitchen Photo + Caption */}
          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden h-[260px] sm:h-[310px] w-full bg-[#f9f5e8] mb-5 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1000&q=85"
                alt="Servih Kitchen Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm sm:text-[15px] text-[#786b4c] leading-relaxed">
              {lang === 'pt'
                ? 'Tudo o que você precisa saber sobre nossos produtos para o lar, da qualidade e cuidado até a entrega e suporte dedicado.'
                : 'Everything you need to know about our kitchen products, from quality and care to delivery and support.'}
            </p>
          </div>

          {/* Right Column: 5 Accordion Cards (00:24 - 00:25 in video) */}
          <div className="lg:col-span-7 space-y-3.5">
            {FAQS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-xl border transition-all duration-300 ${
                    isOpen
                      ? 'bg-[#f9f5e8] border-[#daab21]/45 shadow-xs'
                      : 'bg-[#f9f5e8]/80 hover:bg-[#f9f5e8] border-[#daab21]/15'
                  }`}
                >
                  <button
                    onClick={() => toggle(item.id)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                  >
                    <span className="text-sm sm:text-[15.5px] font-medium text-[#2d2613]">
                      {lang === 'pt' ? item.qPt : item.qEn}
                    </span>
                    <span className="text-[#2d2613] shrink-0 transition-transform duration-300">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[#b58912]" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100 pb-5 px-6'
                        : 'grid-rows-[0fr] opacity-0 pb-0 px-6'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-xs sm:text-sm text-[#786b4c] leading-relaxed pt-1 border-t border-[#daab21]/15">
                        {lang === 'pt' ? item.aPt : item.aEn}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollBlurReveal>
    </section>
  );
};

