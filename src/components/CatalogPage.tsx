import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  Search,
  ShoppingCart,
  User,
  Globe,
  Plus,
  Check,
  SlidersHorizontal,
  Layers,
} from 'lucide-react';
import {
  CATEGORIES,
  Language,
  PRODUCTS,
  ProductItem,
} from '../data/siteData';
import { ScrollBlurReveal } from './ScrollBlurReveal';
import { CtaFooterSection } from './CtaFooterSection';

interface CatalogPageProps {
  lang: Language;
  setLang: (l: Language) => void;
  initialCategory: string | null;
  cartCount: number;
  onBackHome: () => void;
  onOpenCart: () => void;
  onOpenStory: () => void;
  onOpenContact: () => void;
  onAddToCart: (product: ProductItem) => void;
  onSelectProduct: (product: ProductItem) => void;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({
  lang,
  setLang,
  initialCategory,
  cartCount,
  onBackHome,
  onOpenCart,
  onOpenStory,
  onOpenContact,
  onAddToCart,
  onSelectProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    initialCategory || 'ALL'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<
    'featured' | 'price-asc' | 'price-desc' | 'name'
  >('featured');
  const [addedId, setAddedId] = useState<number | null>(null);
  const [cardColorPreview, setCardColorPreview] = useState<
    Record<number, string>
  >({ 1: 'rose', 2: 'bege', 3: 'preto' });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const parsePrice = (p: ProductItem) => {
    const raw = lang === 'pt' ? p.pricePt : p.priceEn;
    const num = parseFloat(raw.replace(/[^\d.,]/g, '').replace(',', '.'));
    return isNaN(num) ? 0 : num;
  };

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === 'ALL' ||
      product.categoryPt.toLowerCase() === selectedCategory.toLowerCase() ||
      product.categoryEn.toLowerCase() === selectedCategory.toLowerCase();

    const name = lang === 'pt' ? product.namePt : product.nameEn;
    const desc = lang === 'pt' ? product.descPt : product.descEn;
    const matchesSearch =
      !searchQuery.trim() ||
      name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      desc.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return parsePrice(a) - parsePrice(b);
    if (sortBy === 'price-desc') return parsePrice(b) - parsePrice(a);
    if (sortBy === 'name') {
      const nameA = lang === 'pt' ? a.namePt : a.nameEn;
      const nameB = lang === 'pt' ? b.namePt : b.nameEn;
      return nameA.localeCompare(nameB);
    }
    return a.id - b.id;
  });

  const handleQuickAdd = (e: React.MouseEvent, product: ProductItem) => {
    e.stopPropagation();
    if (product.badge === 'SOLD_OUT') return;
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#2d2613]">
      {/* Sticky Top Navbar with Logo Centered Relative to Page */}
      <header className="sticky top-0 z-40 bg-[#fdfbf7]/90 backdrop-blur-md border-b border-[#daab21]/25 px-6 sm:px-10 lg:px-16 h-20 flex items-center justify-between">
        {/* Left: Back to Home Button */}
        <button
          onClick={onBackHome}
          className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2d2613] hover:text-[#b58912] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>{lang === 'pt' ? 'Voltar ao Início' : 'Back to Home'}</span>
        </button>

        {/* Center: Official SERVIH Logo — Mathematically Centered Relative to Page */}
        <button
          onClick={onBackHome}
          className="absolute left-1/2 -translate-x-1/2 group flex items-center gap-2.5 focus:outline-none cursor-pointer"
        >
          <img
            src="/logo/symbol-yellow.png"
            alt="Servih Bee Symbol"
            className="h-8 sm:h-9 w-auto object-contain group-hover:scale-105 transition-transform"
          />
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#2d2613] group-hover:text-[#b58912] transition-colors">
            Servih
          </span>
        </button>

        {/* Right: Language, Cart, User */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider bg-[#f9f5e8] hover:bg-[#daab21] text-[#2d2613] px-3 py-1.5 rounded-full border border-[#daab21]/30 transition-colors cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-[#b58912]" />
            <span>{lang === 'pt' ? 'PT' : 'EN'}</span>
          </button>

          <button
            onClick={onOpenCart}
            aria-label="Carrinho"
            className="relative p-2 rounded-full bg-[#f9f5e8] hover:bg-[#daab21]/25 text-[#2d2613] transition-colors cursor-pointer"
          >
            <ShoppingCart className="w-[18px] h-[18px]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#daab21] text-[#2d2613] text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenStory}
            aria-label="Nossa História"
            className="hidden sm:flex p-2 rounded-full bg-[#f9f5e8] hover:bg-[#daab21]/25 text-[#2d2613] transition-colors cursor-pointer"
          >
            <User className="w-[18px] h-[18px]" />
          </button>
        </div>
      </header>

      {/* Catalog Hero Banner */}
      <section className="pt-10 pb-8 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto">
        <ScrollBlurReveal>
          <div className="relative rounded-2xl overflow-hidden bg-[#1d180c] p-8 sm:p-12 lg:p-16 text-white shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=2000&q=80"
              alt="Catálogo Servih"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#161209]/95 via-[#161209]/75 to-transparent" />

            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#daab21]/25 border border-[#facc15]/40 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#facc15]" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#fef08a] font-semibold">
                  {lang === 'pt' ? 'CATÁLOGO COMPLETO' : 'FULL CATALOG'}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-medium tracking-tight leading-tight mb-4">
                {lang === 'pt'
                  ? 'Coleção Servih Para o Seu Lar'
                  : 'Complete Servih Home Collection'}
              </h1>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                {lang === 'pt'
                  ? 'Explore nosso Conjunto de Panelas Dubai (nas cores Rosé 13 Peças e Preto 8 Peças), utensílios de cozinha, cerâmicas e a linha BeeConfort.'
                  : 'Explore our Dubai Cookware Set (in 13-Piece Rose and 8-Piece Matte Black), kitchen tools, ceramics, and BeeConfort line.'}
              </p>
            </div>
          </div>
        </ScrollBlurReveal>
      </section>

      {/* Filters, Search & Sort Controls */}
      <section className="py-4 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-8 border-b border-[#daab21]/25">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <button
              onClick={() => setSelectedCategory('ALL')}
              className={`px-4 py-2 rounded-full text-xs sm:text-[13px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'ALL'
                  ? 'bg-[#daab21] text-[#2d2613] shadow-xs'
                  : 'bg-[#f9f5e8] text-[#786b4c] hover:text-[#2d2613] border border-[#daab21]/20'
              }`}
            >
              {lang === 'pt' ? 'Todos os Produtos' : 'All Products'} (
              {PRODUCTS.length})
            </button>

            {CATEGORIES.map((cat) => {
              const catLabel = lang === 'pt' ? cat.namePt : cat.nameEn;
              const isSelected =
                selectedCategory.toLowerCase() === cat.namePt.toLowerCase() ||
                selectedCategory.toLowerCase() === cat.nameEn.toLowerCase();

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(catLabel)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-[13px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#daab21] text-[#2d2613] shadow-xs'
                      : 'bg-[#f9f5e8] text-[#786b4c] hover:text-[#2d2613] border border-[#daab21]/20'
                  }`}
                >
                  {catLabel}
                </button>
              );
            })}
          </div>

          {/* Search Input + Sort Selector */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-[#786b4c] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  lang === 'pt' ? 'Buscar produto...' : 'Search products...'
                }
                className="w-full bg-[#f9f5e8] border border-[#daab21]/25 rounded-full pl-10 pr-4 py-2 text-xs sm:text-sm text-[#2d2613] placeholder:text-[#786b4c] focus:outline-none focus:border-[#daab21]"
              />
            </div>

            <div className="flex items-center gap-2 bg-[#f9f5e8] border border-[#daab21]/25 rounded-full px-3.5 py-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#b58912]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-xs sm:text-[13px] font-medium text-[#2d2613] focus:outline-none cursor-pointer"
              >
                <option value="featured">
                  {lang === 'pt' ? 'Ordenar: Destaques' : 'Sort: Featured'}
                </option>
                <option value="price-asc">
                  {lang === 'pt' ? 'Menor Preço' : 'Price: Low to High'}
                </option>
                <option value="price-desc">
                  {lang === 'pt' ? 'Maior Preço' : 'Price: High to Low'}
                </option>
                <option value="name">
                  {lang === 'pt' ? 'Nome (A–Z)' : 'Name (A–Z)'}
                </option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Full Products Grid */}
      <section className="py-8 pb-20 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-[#f9f5e8]/60 rounded-2xl border border-[#daab21]/20">
            <p className="text-base text-[#786b4c] mb-4">
              {lang === 'pt'
                ? 'Nenhum produto encontrado para esse filtro.'
                : 'No products found matching your filter.'}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('ALL');
                setSearchQuery('');
              }}
              className="bg-[#daab21] text-[#2d2613] text-xs font-semibold px-5 py-2.5 rounded-full cursor-pointer"
            >
              {lang === 'pt' ? 'Limpar Filtros' : 'Reset Filters'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {filteredProducts.map((product, idx) => {
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
                <ScrollBlurReveal key={product.id} delayMs={(idx % 4) * 60}>
                  <div
                    onClick={() => onSelectProduct(product)}
                    className="group cursor-pointer flex flex-col h-full"
                  >
                    {/* Warm Cream Product Tile */}
                    <div className="relative aspect-square w-full rounded-xl bg-[#f9f5e8] border border-[#daab21]/15 overflow-hidden flex items-center justify-center p-7 transition-all duration-300 group-hover:border-[#daab21]/50 group-hover:shadow-md">
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
                              title={
                                lang === 'pt' ? variant.namePt : variant.nameEn
                              }
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

                      <img
                        src={displayImage}
                        alt={lang === 'pt' ? product.namePt : product.nameEn}
                        className={`w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500 ${
                          displayImage.startsWith('/napolitano')
                            ? 'drop-shadow-md'
                            : 'mix-blend-multiply'
                        }`}
                      />

                      {/* Bottom-Left Pill for Set Pieces ("Clique para ver as peças") */}
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
                              <span>
                                {lang === 'pt' ? 'Adicionado' : 'Added'}
                              </span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              <span>
                                {lang === 'pt' ? 'Adicionar' : 'Add'}
                              </span>
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="mt-3.5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <span className="text-[10.5px] uppercase tracking-wider text-[#b58912] font-semibold">
                            {lang === 'pt'
                              ? product.categoryPt
                              : product.categoryEn}
                          </span>
                          {activeVariant && (
                            <span className="text-[11px] font-semibold text-[#2d2613] bg-[#f9f5e8] px-2 py-0.5 rounded border border-[#daab21]/25">
                              {lang === 'pt'
                                ? activeVariant.namePt
                                : activeVariant.nameEn}
                            </span>
                          )}
                        </div>
                        <h3 className="text-[14.5px] font-medium text-[#2d2613] group-hover:text-[#b58912] transition-colors mb-1">
                          {lang === 'pt' ? product.namePt : product.nameEn}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 text-[15px] mt-1">
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
                </ScrollBlurReveal>
              );
            })}
          </div>
        )}
      </section>

      {/* Footer */}
      <CtaFooterSection
        lang={lang}
        onOpenStory={onOpenStory}
        onOpenContact={onOpenContact}
      />
    </div>
  );
};
