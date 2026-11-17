import React, { useEffect, useState } from 'react';
import { ShoppingCart, Globe, ChevronDown, ArrowRight } from 'lucide-react';
import { CATEGORIES, CategoryItem, Language, ProductItem } from './data/siteData';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CategoriesSection } from './components/CategoriesSection';
import { ProductsCarousel } from './components/ProductsCarousel';
import { FaqSection } from './components/FaqSection';
import { CtaFooterSection } from './components/CtaFooterSection';
import { CatalogPage } from './components/CatalogPage';
import { CartEntry, InteractiveDrawers } from './components/InteractiveDrawers';

export function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [currentPage, setCurrentPage] = useState<'home' | 'catalog'>('home');
  const [cart, setCart] = useState<CartEntry[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(
    null
  );
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<
    string | null
  >(null);
  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowStickyNav(window.scrollY > 560);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleAddToCart = (product: ProductItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { product, qty: 1 }];
    });
  };

  const handleUpdateQty = (productId: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.product.id === productId
            ? { ...item, qty: item.qty + delta }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const handleRemoveItem = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleSelectCategory = (cat: CategoryItem) => {
    const label = lang === 'pt' ? cat.namePt : cat.nameEn;
    setActiveCategoryFilter(label);
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#2d2613] relative">
      {currentPage === 'catalog' ? (
        <CatalogPage
          lang={lang}
          setLang={setLang}
          initialCategory={activeCategoryFilter}
          cartCount={totalCartItems}
          onBackHome={() => setCurrentPage('home')}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenStory={() => setIsStoryOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
          onAddToCart={handleAddToCart}
          onSelectProduct={(p) => setSelectedProduct(p)}
        />
      ) : (
        <>
          {/* Floating Sticky Glass Header on Scroll — Logo centered relative to page */}
          <div
            className={`fixed top-3 inset-x-0 z-40 px-4 sm:px-8 pointer-events-none transition-all duration-500 ${
              showStickyNav
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-6'
            }`}
          >
            <div className="relative max-w-6xl mx-auto bg-[#fdfbf7]/92 backdrop-blur-md border border-[#daab21]/30 rounded-full px-6 py-3 shadow-lg flex items-center justify-between pointer-events-auto">
              {/* Left Navigation */}
              <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-[#2d2613]/85">
                <a
                  href="#about"
                  className="hover:text-[#b58912] transition-colors"
                >
                  {lang === 'pt' ? 'Sobre' : 'About'}
                </a>

                {/* Dropdown Categorias na Sticky Nav */}
                <div className="relative group py-1">
                  <a
                    href="#categories"
                    className="inline-flex items-center gap-1 hover:text-[#b58912] transition-colors cursor-pointer"
                  >
                    <span>{lang === 'pt' ? 'Categorias' : 'Categories'}</span>
                    <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180 text-[#2d2613]/60 group-hover:text-[#b58912]" />
                  </a>

                  {/* Dropdown Menu Container */}
                  <div className="absolute top-full left-0 pt-2 opacity-0 -translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50 min-w-[250px]">
                    <div className="bg-[#fdfbf7]/98 backdrop-blur-xl border border-[#daab21]/30 rounded-2xl p-2 shadow-2xl space-y-1">
                      {CATEGORIES.map((cat) => (
                        <a
                          key={cat.id}
                          href="#categories"
                          onClick={() => handleSelectCategory(cat)}
                          className="flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-[#daab21]/15 text-[#2d2613] hover:text-[#b58912] transition-colors group/item"
                        >
                          <div className="flex flex-col">
                            <span className="text-xs font-semibold">
                              {lang === 'pt' ? cat.namePt : cat.nameEn}
                            </span>
                            <span className="text-[10px] text-[#786b4c]">
                              {lang === 'pt' ? cat.countPt : cat.countEn}
                            </span>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#b58912]" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setCurrentPage('catalog')}
                  className="hover:text-[#b58912] transition-colors cursor-pointer"
                >
                  {lang === 'pt' ? 'Catálogo' : 'Catalog'}
                </button>
                <a
                  href="#contact"
                  className="hover:text-[#b58912] transition-colors"
                >
                  {lang === 'pt' ? 'Contato' : 'Contact'}
                </a>
              </nav>

              {/* Mobile Left Link */}
              <button
                onClick={() => setCurrentPage('catalog')}
                className="md:hidden text-xs font-semibold text-[#2d2613]"
              >
                {lang === 'pt' ? 'Catálogo' : 'Catalog'}
              </button>

              {/* Center Logo — Mathematically centered relative to the page */}
              <a
                href="#"
                className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2"
              >
                <img
                  src="/logo/symbol-yellow.png"
                  alt="Servih"
                  className="h-6 w-auto"
                />
                <span className="font-bold text-base tracking-tight text-[#2d2613]">
                  Servih
                </span>
              </a>

              {/* Right Utility Buttons */}
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
                  className="flex items-center gap-1 text-[11px] font-semibold uppercase bg-[#f9f5e8] hover:bg-[#daab21]/30 text-[#2d2613] px-2.5 py-1 rounded-full border border-[#daab21]/25 cursor-pointer"
                >
                  <Globe className="w-3 h-3 text-[#b58912]" />
                  {lang.toUpperCase()}
                </button>
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="relative p-1.5 rounded-full bg-[#daab21] text-[#2d2613] hover:bg-[#facc15] transition-colors cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4" />
                  {totalCartItems > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#2d2613] text-[#fef08a] text-[9px] font-bold flex items-center justify-center">
                      {totalCartItems}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* 1. Hero Section with Vertical Blind Transition & Preview Card */}
          <HeroSection
            lang={lang}
            setLang={setLang}
            cartCount={totalCartItems}
            onOpenCart={() => setIsCartOpen(true)}
            onOpenStory={() => setIsStoryOpen(true)}
            onSelectCategory={handleSelectCategory}
          />

          {/* 2. About Us Section with Word-by-Word Scroll Reveal & Animated Counters */}
          <AboutSection lang={lang} onOpenStory={() => setIsStoryOpen(true)} />

          {/* 3. Categories Asymmetric Bento Grid with "View More ↗" Hover Effect */}
          <CategoriesSection
            lang={lang}
            onSelectCategory={handleSelectCategory}
          />

          {/* 4. Horizontal Product Slider with "Ver tudo" Link & Long Arrow Controls */}
          <ProductsCarousel
            lang={lang}
            activeCategoryFilter={activeCategoryFilter}
            onClearFilter={() => setActiveCategoryFilter(null)}
            onAddToCart={handleAddToCart}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onOpenCatalog={() => setCurrentPage('catalog')}
          />

          {/* 5. FAQ Accordion Section with Blur-to-Clear Scroll Reveal */}
          <FaqSection lang={lang} />

          {/* 6. Pre-Footer CTA Banner & Dark Servih Footer */}
          <CtaFooterSection
            lang={lang}
            onOpenStory={() => setIsStoryOpen(true)}
            onOpenContact={() => setIsContactOpen(true)}
          />
        </>
      )}

      {/* Interactive Drawers & Modals (available on both Home and Catalog pages) */}
      <InteractiveDrawers
        lang={lang}
        isCartOpen={isCartOpen}
        onCloseCart={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        selectedProduct={selectedProduct}
        onCloseProduct={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        isStoryOpen={isStoryOpen}
        onCloseStory={() => setIsStoryOpen(false)}
        isContactOpen={isContactOpen}
        onCloseContact={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default App;
