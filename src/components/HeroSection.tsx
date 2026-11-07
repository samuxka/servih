import React, { useEffect, useState } from 'react';
import { ArrowRight, ShoppingCart, User, Globe } from 'lucide-react';
import { HERO_SLIDES, Language } from '../data/siteData';

interface HeroSectionProps {
  lang: Language;
  setLang: (l: Language) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenStory: () => void;
}

const SLICE_COUNT = 8;
const SLIDE_DURATION_MS = 5500;

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  setLang,
  cartCount,
  onOpenCart,
  onOpenStory,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const [initialBoot, setInitialBoot] = useState(true);
  const [progress, setProgress] = useState(0);

  // Initial page load blur-to-clear effect (00:00 -> 00:02 in video)
  useEffect(() => {
    const timer = setTimeout(() => setInitialBoot(false), 120);
    return () => clearTimeout(timer);
  }, []);

  const triggerSlideChange = (nextIdx: number) => {
    if (isTransitioning || nextIdx === activeIndex) return;
    setPrevIndex(activeIndex);
    setActiveIndex(nextIdx);
    setIsTransitioning(true);
    setAnimKey((k) => k + 1);
    setProgress(0);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 950);
  };

  // Auto-advance progress bar
  useEffect(() => {
    const interval = 50;
    const step = (interval / SLIDE_DURATION_MS) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + step >= 100) {
          const next = (activeIndex + 1) % HERO_SLIDES.length;
          triggerSlideChange(next);
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [activeIndex, isTransitioning]);

  const currentSlide = HERO_SLIDES[activeIndex];
  const previousSlide = HERO_SLIDES[prevIndex];
  const nextSlideIndex = (activeIndex + 1) % HERO_SLIDES.length;

  return (
    <section className="relative w-full p-2.5 sm:p-4 md:p-5 bg-[#fdfbf7]">
      <div
        style={{
          transition:
            'filter 1100ms cubic-bezier(0.22, 1, 0.36, 1), transform 1100ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}
        className={`relative w-full h-[86vh] min-h-[580px] max-h-[860px] rounded-[20px] sm:rounded-[26px] overflow-hidden shadow-2xl bg-[#1d180c] ${
          initialBoot ? 'blur-[14px] scale-[0.985]' : 'blur-0 scale-100'
        }`}
      >
        {/* Base Layer: Previous Slide (stays underneath during vertical slice transition) */}
        <div className="absolute inset-0 z-0">
          <img
            src={previousSlide.image}
            alt=""
            className="w-full h-full object-cover object-center brightness-[0.82]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161209]/85 via-[#161209]/25 to-[#161209]/45" />
        </div>

        {/* Active Layer: 8 Vertical Venetian Blind / Column Slices (00:04 effect in video) */}
        <div
          key={animKey}
          className="absolute inset-0 z-10 flex w-full h-full pointer-events-none"
        >
          {Array.from({ length: SLICE_COUNT }).map((_, sliceIdx) => (
            <div
              key={sliceIdx}
              style={{
                width: `${100 / SLICE_COUNT}%`,
                animationDelay: `${sliceIdx * 45}ms`,
              }}
              className={`relative h-full overflow-hidden ${
                animKey > 0 ? 'animate-slice-reveal' : ''
              } ${
                isTransitioning
                  ? 'border-r border-[#facc15]/20'
                  : 'border-r border-transparent'
              } transition-colors duration-500`}
            >
              <div
                style={{
                  width: `${SLICE_COUNT * 100}%`,
                  left: `-${sliceIdx * 100}%`,
                }}
                className="absolute top-0 h-full"
              >
                <img
                  src={currentSlide.image}
                  alt={lang === 'pt' ? currentSlide.titlePt : currentSlide.titleEn}
                  className="w-full h-full object-cover object-center brightness-[0.82]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161209]/85 via-[#161209]/25 to-[#161209]/45" />
              </div>
            </div>
          ))}
        </div>

        {/* Top Floating Navbar */}
        <header className="relative z-30 flex items-center justify-between px-6 sm:px-10 lg:px-14 pt-6 sm:pt-8">
          {/* Left Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-[13.5px] font-medium text-white/90">
            <a
              href="#about"
              className="hover:text-[#facc15] transition-colors duration-200"
            >
              {lang === 'pt' ? 'Sobre' : 'About'}
            </a>
            <a
              href="#products"
              className="hover:text-[#facc15] transition-colors duration-200"
            >
              {lang === 'pt' ? 'Produtos' : 'Product'}
            </a>
            <a
              href="#categories"
              className="hover:text-[#facc15] transition-colors duration-200"
            >
              {lang === 'pt' ? 'Categorias' : 'Categories'}
            </a>
            <a
              href="#faq"
              className="hover:text-[#facc15] transition-colors duration-200"
            >
              {lang === 'pt' ? 'Dúvidas' : 'Blog'}
            </a>
            <a
              href="#contact"
              className="hover:text-[#facc15] transition-colors duration-200"
            >
              {lang === 'pt' ? 'Contato' : 'Contact'}
            </a>
          </nav>

          {/* Mobile Left Menu Pill */}
          <a
            href="#products"
            className="md:hidden text-xs font-medium text-white/90 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/15"
          >
            {lang === 'pt' ? 'Explorar' : 'Explore'}
          </a>

          {/* Center Brand Logo — Mathematically centered relative to the page */}
          <button
            onClick={onOpenStory}
            title={
              lang === 'pt'
                ? 'SERVIH — Elegância para o lar, propósito para a vida'
                : 'SERVIH — Elegance for home, purpose for life'
            }
            className="absolute left-1/2 -translate-x-1/2 group flex items-center gap-2.5 focus:outline-none cursor-pointer"
          >
            <img
              src="/logo/symbol-yellow.png"
              alt="Servih Bee Symbol"
              className="h-8 sm:h-9 w-auto object-contain drop-shadow-[0_2px_10px_rgba(250,204,21,0.45)] group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#facc15] transition-colors">
              Servih
            </span>
          </button>

          {/* Right Utility Icons (Language Toggle, Cart, User) */}
          <div className="flex items-center gap-3 sm:gap-4 text-white">
            <button
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider bg-white/12 hover:bg-[#daab21] hover:text-[#2d2613] backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 transition-all duration-200 cursor-pointer"
              title="Alternar idioma / Switch language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'pt' ? 'PT' : 'EN'}</span>
            </button>

            <button
              onClick={onOpenCart}
              aria-label="Carrinho"
              className="relative p-2 rounded-full hover:bg-white/15 transition-colors cursor-pointer"
            >
              <ShoppingCart className="w-[19px] h-[19px]" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#facc15] text-[#2d2613] text-[10px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenStory}
              aria-label="Perfil / Nossa História"
              className="p-2 rounded-full hover:bg-white/15 transition-colors cursor-pointer"
            >
              <User className="w-[19px] h-[19px]" />
            </button>
          </div>
        </header>

        {/* Bottom Content Row: Left Headline & Subtitle + Right Floating Next-Slide Card */}
        <div className="absolute inset-x-0 bottom-0 z-30 px-6 sm:px-10 lg:px-14 pb-8 sm:pb-11 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          {/* Bottom-Left Animated Text Block */}
          <div key={`text-${animKey}`} className="max-w-2xl animate-text-blur-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#daab21]/25 border border-[#facc15]/40 backdrop-blur-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#facc15]" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#fef08a] font-semibold">
                {lang === 'pt'
                  ? 'Elegância para o lar • Propósito para a vida'
                  : 'Elegance for Home • Purpose for Life'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-medium text-white leading-[1.12] tracking-tight mb-4">
              <span className="block">
                {lang === 'pt' ? currentSlide.titlePt : currentSlide.titleEn}
              </span>
              <span className="block text-[#fef08a]/95">
                {lang === 'pt'
                  ? currentSlide.subtitlePt
                  : currentSlide.subtitleEn}
              </span>
            </h1>

            <p className="text-sm sm:text-[15px] text-white/80 leading-relaxed max-w-xl font-normal">
              {lang === 'pt' ? currentSlide.descPt : currentSlide.descEn}
            </p>
          </div>

          {/* Bottom-Right Floating Next Slide Preview Card + 4 Progress Indicators */}
          <div className="w-full sm:w-[270px] lg:w-[285px] shrink-0 self-end">
            <button
              onClick={() => triggerSlideChange(nextSlideIndex)}
              className="group w-full text-left bg-[#fdfbf7]/95 hover:bg-white backdrop-blur-md rounded-2xl p-2.5 shadow-2xl border border-[#daab21]/30 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <div className="relative h-28 sm:h-32 w-full rounded-xl overflow-hidden mb-2.5 bg-[#f9f5e8] flex items-center justify-center p-3 border border-[#daab21]/15">
                <img
                  src={currentSlide.thumb}
                  alt={
                    lang === 'pt'
                      ? currentSlide.nextTitlePt
                      : currentSlide.nextTitleEn
                  }
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 text-[10px] font-semibold uppercase tracking-wider bg-[#2d2613]/85 text-[#fef08a] px-2 py-0.5 rounded-full backdrop-blur-xs">
                  {lang === 'pt' ? 'Próximo' : 'Next'}
                </span>
              </div>

              <div className="flex items-center justify-between px-1.5 py-0.5">
                <span className="text-[13.5px] font-semibold text-[#2d2613] truncate pr-2">
                  {lang === 'pt'
                    ? currentSlide.nextTitlePt
                    : currentSlide.nextTitleEn}
                </span>
                <ArrowRight className="w-4 h-4 text-[#b58912] group-hover:translate-x-1 transition-transform shrink-0" />
              </div>
            </button>

            {/* 4 Slide Progress Bars Underneath Card */}
            <div className="grid grid-cols-4 gap-2 mt-3 px-1">
              {HERO_SLIDES.map((s, idx) => {
                const isCurrent = idx === activeIndex;
                const isPast = idx < activeIndex;
                return (
                  <button
                    key={s.id}
                    onClick={() => triggerSlideChange(idx)}
                    aria-label={`Slide ${idx + 1}`}
                    className="h-1 rounded-full bg-white/25 overflow-hidden cursor-pointer"
                  >
                    <div
                      style={{
                        width: isCurrent
                          ? `${progress}%`
                          : isPast
                          ? '100%'
                          : '0%',
                      }}
                      className="h-full bg-[#facc15] transition-all duration-75 rounded-full"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

