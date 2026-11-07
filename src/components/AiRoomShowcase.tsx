import React, { useState } from 'react';
import { Sparkles, Plus } from 'lucide-react';
import { HOTSPOTS, Language, PRODUCTS, ProductItem } from '../data/siteData';
import { ScrollBlurReveal } from './ScrollBlurReveal';

interface AiRoomShowcaseProps {
  lang: Language;
  onAddToCart: (product: ProductItem) => void;
  onSelectProduct: (product: ProductItem) => void;
}

export const AiRoomShowcase: React.FC<AiRoomShowcaseProps> = ({
  lang,
  onAddToCart,
  onSelectProduct,
}) => {
  // Default active hotspot to #1 so the user immediately sees the interactive popover, and can hover/click any hotspot just like 00:18-00:21 in the video
  const [activeHotspotId, setActiveHotspotId] = useState<number | null>(1);
  const [aiTourActive, setAiTourActive] = useState(false);

  const handleCycleAi = () => {
    setAiTourActive(true);
    const currentIndex = HOTSPOTS.findIndex((h) => h.id === activeHotspotId);
    const nextIndex = (currentIndex + 1) % HOTSPOTS.length;
    setActiveHotspotId(HOTSPOTS[nextIndex].id);
  };

  return (
    <section className="py-10 sm:py-16 px-4 sm:px-8 lg:px-14 max-w-[1440px] mx-auto">
      <ScrollBlurReveal>
        <div
          onClick={() => setActiveHotspotId(null)}
          className="relative w-full h-[500px] sm:h-[620px] lg:h-[700px] rounded-2xl overflow-hidden shadow-xl bg-[#f5efe0]"
        >
          {/* Warm Sunlit Kitchen / Home Interior Scene (matching 00:17 - 00:21 in video) */}
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=2000&q=85"
            alt="Servih Interactive Kitchen Scene"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2d2613]/30 via-transparent to-[#2d2613]/15" />

          {/* Top-Left Floating "Servih AI ✦" Pill Button (00:17 in video) */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute top-6 left-6 sm:top-8 sm:left-8 z-30 flex items-center gap-3"
          >
            <button
              onClick={handleCycleAi}
              className="group inline-flex items-center gap-2 bg-[#fdfbf7]/95 hover:bg-white text-[#2d2613] text-xs sm:text-[13.5px] font-semibold px-4 py-2.5 rounded-lg shadow-lg border border-[#daab21]/40 transition-all duration-200 hover:scale-105 cursor-pointer"
            >
              <span>Servih AI</span>
              <Sparkles className="w-4 h-4 text-[#daab21] group-hover:rotate-12 transition-transform" />
            </button>

            {aiTourActive && (
              <span className="hidden sm:inline-flex items-center gap-1.5 bg-[#2d2613]/85 text-[#fef08a] text-xs px-3.5 py-2 rounded-lg backdrop-blur-md animate-text-blur-in">
                {lang === 'pt'
                  ? 'Clique nos pontos da cena para explorar as peças Servih'
                  : 'Click or hover the scene hotspots to inspect Servih pieces'}
              </span>
            )}
          </div>

          {/* Interactive Hotspots on Kitchen Items (00:18 - 00:21 in video) */}
          {HOTSPOTS.map((spot) => {
            const product =
              PRODUCTS.find((p) => p.id === spot.productId) || PRODUCTS[0];
            const isOpen = activeHotspotId === spot.id;

            return (
              <div
                key={spot.id}
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveHotspotId(isOpen ? null : spot.id);
                }}
                onMouseEnter={() => setActiveHotspotId(spot.id)}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
              >
                {/* Floating Product Popover Card Above Hotspot (00:19 & 00:21 in video) */}
                {isOpen && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProduct(product);
                    }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[210px] sm:w-[235px] bg-[#fdfbf7] rounded-xl p-3 shadow-2xl border border-[#daab21]/35 animate-text-blur-in cursor-pointer z-30"
                  >
                    <div className="relative h-32 w-full rounded-lg bg-[#f9f5e8] flex items-center justify-center p-3 mb-2.5 overflow-hidden">
                      {product.badge === 'SALE' && (
                        <span className="absolute top-2 left-2 bg-[#c2410c] text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded">
                          {lang === 'pt' ? 'OFERTA' : 'ON SALE'}
                        </span>
                      )}
                      <img
                        src={product.image}
                        alt={lang === 'pt' ? product.namePt : product.nameEn}
                        className="w-full h-full object-contain mix-blend-multiply"
                      />
                    </div>

                    <div className="flex items-end justify-between gap-2">
                      <div className="min-w-0">
                        <h4 className="text-[11.5px] text-[#786b4c] truncate">
                          {lang === 'pt' ? product.namePt : product.nameEn}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="text-xs sm:text-[13px] font-bold text-[#2d2613]">
                            {lang === 'pt' ? product.pricePt : product.priceEn}
                          </span>
                          {(lang === 'pt'
                            ? product.oldPricePt
                            : product.oldPriceEn) && (
                            <span className="text-[10px] text-[#786b4c]/70 line-through">
                              {lang === 'pt'
                                ? product.oldPricePt
                                : product.oldPriceEn}
                            </span>
                          )}
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart(product);
                        }}
                        title={
                          lang === 'pt'
                            ? 'Adicionar ao carrinho'
                            : 'Add to cart'
                        }
                        className="w-7 h-7 rounded-full bg-[#daab21] hover:bg-[#facc15] text-[#2d2613] flex items-center justify-center shrink-0 shadow-xs transition-colors cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Pulsing Hotspot Dot */}
                <button
                  aria-label={lang === 'pt' ? spot.labelPt : spot.labelEn}
                  className={`relative w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full transition-transform duration-300 cursor-pointer hotspot-pulse ${
                    isOpen
                      ? 'bg-[#daab21] scale-125 ring-4 ring-white'
                      : 'bg-white hover:scale-125 ring-2 ring-[#daab21]/60'
                  } shadow-lg`}
                />
              </div>
            );
          })}
        </div>
      </ScrollBlurReveal>
    </section>
  );
};

