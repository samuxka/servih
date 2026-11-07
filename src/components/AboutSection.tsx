import React from 'react';
import { Language, STATS } from '../data/siteData';
import {
  ScrollBlurReveal,
  ScrollWordReveal,
  AnimatedCounter,
} from './ScrollBlurReveal';

interface AboutSectionProps {
  lang: Language;
  onOpenStory: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  lang,
  onOpenStory,
}) => {
  const statementText =
    lang === 'pt'
      ? 'Nossa coleção equilibra função, aconchego e beleza nos detalhes. Cada item essencial para o lar é cuidadosamente escolhido para facilitar o dia a dia, trazendo elegância atemporal e propósito verdadeiro para a sua casa.'
      : 'Our collection balances function, warmth, and material beauty. Each kitchen essential is carefully chosen to make daily cooking easier while bringing timeless Mediterranean character into your home.';

  return (
    <section
      id="about"
      className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto"
    >
      <ScrollBlurReveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Label */}
          <div className="lg:col-span-4 pt-2">
            <div className="inline-flex items-center gap-2.5 text-xs sm:text-[13px] font-semibold tracking-[0.16em] uppercase text-[#2d2613]">
              <span className="w-2 h-2 rounded-full bg-[#daab21]" />
              <span>{lang === 'pt' ? 'SOBRE NÓS' : 'ABOUT US'}</span>
            </div>
          </div>

          {/* Right Editorial Statement + Counters + CTA */}
          <div className="lg:col-span-8">
            <ScrollWordReveal
              text={statementText}
              className="text-2xl sm:text-3xl lg:text-[34px] leading-[1.35] font-normal tracking-tight"
            />

            {/* 4 Animated Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 mt-10 border-t border-[#daab21]/25">
              {STATS.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="text-3xl sm:text-4xl font-semibold text-[#2d2613] tracking-tight mb-2">
                    <AnimatedCounter
                      target={stat.target}
                      suffix={stat.suffix}
                      durationMs={1400 + idx * 200}
                    />
                  </div>
                  <p className="text-xs sm:text-[13px] text-[#786b4c] leading-snug">
                    {lang === 'pt' ? stat.labelPt : stat.labelEn}
                  </p>
                </div>
              ))}
            </div>

            {/* Discover Our Story Button */}
            <div className="mt-10">
              <button
                onClick={onOpenStory}
                className="inline-flex items-center gap-2 bg-[#daab21] hover:bg-[#c59815] text-[#2d2613] text-xs sm:text-[13.5px] font-semibold px-6 py-3.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                {lang === 'pt'
                  ? 'Conheça Nossa História'
                  : 'Discover Our Story'}
              </button>
            </div>
          </div>
        </div>
      </ScrollBlurReveal>
    </section>
  );
};

