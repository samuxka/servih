import React, { useRef, useState } from 'react';
import { MoveLeft, MoveRight, Plus, Check, ArrowUpRight, Layers } from 'lucide-react';
import { Language, PRODUCTS, ProductItem } from '../data/siteData';
import { ScrollBlurReveal } from './ScrollBlurReveal';

interface ProductsCarouselProps {
  lang: Language;
  activeCategoryFilter: string | null;
  onClearFilter: () => void;
  onAddToCart: (product: ProductItem) => void;
  onSelectProduct: (product: ProductItem) => void;
  onOpenCatalog: () => void;
}

export const ProductsCarousel: React.FC<ProductsCarouselProps> = ({
  lang,
  activeCategoryFilter,
  onClearFilter,
  onAddToCart,
  onSelectProduct,
  onOpenCatalog,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [addedId, setAddedId] = useState<number | null>(null);
  const [cardColorPreview, setCardColorPreview] = useState<
    Record<number, string>
  >({ 1: 'rose', 2: 'bege', 3: 'preto' });

  const filteredProducts = activeCategoryFilter
    ? PRODUCTS.filter(
        (p) =>
          p.categoryEn.toLowerCase() === activeCategoryFilter.toLowerCase() ||
          p.categoryPt.toLowerCase() === activeCategoryFilter.toLowerCase()
      )
    : PRODUCTS;

  const displayList =
    filteredProducts.length > 0 ? filteredProducts : PRODUCTS;

  const handleSlide = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const cardWidth = 360;
    container.scrollBy({
      left: direction === 'right' ? cardWidth : -cardWidth,
      behavior: 'smooth',
    });
  };

  const handleQuickAdd = (e: React.MouseEvent, product: ProductItem) => {
    e.stopPropagation();
    if (product.badge === 'SOLD_OUT') return;
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <section
      id="products"
      className="py-16 sm:py-24 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto overflow-hidden"
    >
      <ScrollBlurReveal>
        {/* Top Row: Label + "Ver tudo" Link + Long Arrow Controls */}
        <div className="flex items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="inline-flex items-center gap-2.5 text-xs sm:text-[13px] font-semibold tracking-[0.16em] uppercase text-[#2d2613]">
              <span className="w-2 h-2 rounded-full bg-[#daab21]" />
              <span>{lang === 'pt' ? 'PRODUTOS' : 'PRODUCT'}</span>
            </div>

            {activeCategoryFilter && (
              <button
                onClick={onClearFilter}
                className="text-xs bg-[#daab21]/20 text-[#2d2613] px-3 py-1 rounded-full font-medium hover:bg-[#daab21]/35 transition-colors cursor-pointer"
              >
                {activeCategoryFilter} ✕
              </button>
            )}
          </div>

          {/* Right Side: "Ver tudo" Catalog Link + Minimal Long Arrow Controls */}
          <div className="flex items-center gap-5 sm:gap-7">
            <button
              onClick={onOpenCatalog}
              className="group inline-flex items-center gap-1.5 text-xs sm:text-[13.5px] font-semibold text-[#2d2613] hover:text-[#b58912] border-b border-[#daab21] pb-0.5 transition-colors cursor-pointer"
            >
              <span>{lang === 'pt' ? 'Ver tudo' : 'View all'}</span>
              <ArrowUpRight className="w-4 h-4 text-[#b58912] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <div className="flex items-center gap-3 sm:gap-5 pl-2 border-l border-[#daab21]/25">
              <button
                onClick={() => handleSlide('left')}
                aria-label="Anterior"
                className="group p-2 text-[#786b4c] hover:text-[#2d2613] transition-colors cursor-pointer"
              >
                <MoveLeft className="w-6 h-6 stroke-[1.5] group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleSlide('right')}
                aria-label="Próximo"
                className="group p-2 text-[#2d2613] hover:text-[#b58912] transition-colors cursor-pointer"
              >
                <MoveRight className="w-6 h-6 stroke-[1.5] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Sliding Product Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 -mx-2 px-2"
        >
          {displayList.map((product) => {
            const isSoldOut = product.badge === 'SOLD_OUT';
            const isAdded = addedId === product.id;
            const defaultColor = product.colorVariants?.[0]?.id || 'rose';
            const activeColor = cardColorPreview[product.id] || defaultColor;
            const activeVariant = product.colorVariants?.find(
              (v) => v.id === activeColor
            );
            const displayImage = activeVariant
              ? activeVariant.coverImage
              : product.image;
            const displayPrice = activeVariant
              ? lang === 'pt'
                ? activeVariant.pricePt
                : activeVariant.priceEn
              : lang === 'pt'
              ? product.pricePt
              : product.priceEn;
            const displayOldPrice = activeVariant
              ? lang === 'pt'
                ? activeVariant.oldPricePt
                : activeVariant.oldPriceEn
              : lang === 'pt'
              ? product.oldPricePt
              : product.oldPriceEn;

            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="group w-[290px] sm:w-[330px] lg:w-[350px] shrink-0 cursor-pointer"
              >
                {/* Warm Cream Product Tile */}
                <div className="relative aspect-square w-full rounded-xl bg-[#f9f5e8] border border-[#daab21]/15 overflow-hidden flex items-center justify-center p-7 transition-all duration-300 group-hover:border-[#daab21]/45 group-hover:shadow-md">
                  {/* Top-Left Status Badge */}
                  {product.badge === 'SALE' && (
                    <span className="absolute top-4 left-4 z-10 bg-[#c2410c] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-md shadow-xs">
                      {lang === 'pt' ? 'OFERTA' : 'ON SALE'}
                    </span>
                  )}
                  {product.badge === 'SOLD_OUT' && (
                    <span className="absolute top-4 left-4 z-10 bg-[#2d2613] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-md shadow-xs">
                      {lang === 'pt' ? 'ESGOTADO' : 'SOLD OUT'}
                    </span>
                  )}
                  {product.badge === 'BESTSELLER' && (
                    <span className="absolute top-4 left-4 z-10 bg-[#daab21] text-[#2d2613] text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-md shadow-xs">
                      {lang === 'pt' ? 'MAIS VENDIDO' : 'BESTSELLER'}
                    </span>
                  )}

                  {/* Top-Right Color Swatches for Conjunto Dubai */}
                  {product.colorVariants && (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-white/90 backdrop-blur-xs px-2.5 py-1.5 rounded-full border border-[#daab21]/25 shadow-xs"
                    >
                      {product.colorVariants.map((variant) => (
                        <button
                          key={variant.id}
                          onClick={() =>
                            setCardColorPreview((prev) => ({
                              ...prev,
                              [product.id]: variant.id,
                            }))
                          }
                          title={lang === 'pt' ? variant.namePt : variant.nameEn}
                          className={`w-4 h-4 rounded-full transition-transform cursor-pointer ${
                            activeColor === variant.id
                              ? 'scale-125 ring-2 ring-[#daab21]'
                              : 'opacity-70 hover:opacity-100'
                          }`}
                          style={{ backgroundColor: variant.hex }}
                        />
                      ))}
                    </div>
                  )}

                  {/* Product Cutout / Studio Photo */}
                  <img
                    src={displayImage}
                    alt={lang === 'pt' ? product.namePt : product.nameEn}
                    className={`w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500 ${
                      displayImage.startsWith('/napolitano')
                        ? 'drop-shadow-md'
                        : 'mix-blend-multiply'
                    }`}
                  />

                  {/* Bottom-Left Pill for Set Pieces ("Ver todas as peças") */}
                  {product.isSet && (
                    <span className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-1.5 bg-[#2d2613]/90 text-[#fef08a] text-[10.5px] font-semibold px-3 py-1.5 rounded-full shadow-sm">
                      <Layers className="w-3.5 h-3.5 text-[#facc15]" />
                      <span>
                        {lang === 'pt'
                          ? 'Clique para ver as peças'
                          : 'Click to view pieces'}
                      </span>
                    </span>
                  )}

                  {/* Quick Add Floating Button on Hover */}
                  {!isSoldOut && (
                    <button
                      onClick={(e) => handleQuickAdd(e, product)}
                      className={`absolute bottom-4 right-4 z-10 flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold shadow-md transition-all duration-300 cursor-pointer ${
                        isAdded
                          ? 'bg-emerald-600 text-white opacity-100 scale-100'
                          : 'bg-[#daab21] text-[#2d2613] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-[#facc15]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>{lang === 'pt' ? 'Adicionado' : 'Added'}</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>{lang === 'pt' ? 'Adicionar' : 'Add'}</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

                {/* Product Meta Below Tile */}
                <div className="mt-3.5">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-[13.5px] text-[#786b4c] group-hover:text-[#2d2613] font-medium transition-colors truncate">
                      {lang === 'pt' ? product.namePt : product.nameEn}
                    </h3>
                    {activeVariant && (
                      <span className="text-[11px] font-semibold text-[#b58912] shrink-0">
                        {lang === 'pt'
                          ? activeVariant.namePt
                          : activeVariant.nameEn}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-[15px]">
                    <span className="font-semibold text-[#2d2613]">
                      {displayPrice}
                    </span>

                    {isSoldOut ? (
                      <span className="font-bold text-[#2d2613] uppercase text-xs tracking-wide">
                        {lang === 'pt' ? 'ESGOTADO' : 'SOLD OUT'}
                      </span>
                    ) : (
                      displayOldPrice && (
                        <span className="text-xs text-[#786b4c]/70 line-through">
                          {displayOldPrice}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollBlurReveal>
    </section>
  );
};
