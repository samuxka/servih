import React, { useEffect, useState } from 'react';
import {
  X,
  ShoppingBag,
  Trash2,
  Heart,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Layers,
} from 'lucide-react';
import { Language, ProductItem } from '../data/siteData';

export interface CartEntry {
  product: ProductItem;
  qty: number;
}

interface InteractiveDrawersProps {
  lang: Language;
  isCartOpen: boolean;
  onCloseCart: () => void;
  cart: CartEntry[];
  onUpdateQty: (productId: number, delta: number) => void;
  onRemoveItem: (productId: number) => void;
  selectedProduct: ProductItem | null;
  onCloseProduct: () => void;
  onAddToCart: (product: ProductItem) => void;
  isStoryOpen: boolean;
  onCloseStory: () => void;
  isContactOpen: boolean;
  onCloseContact: () => void;
}

export const InteractiveDrawers: React.FC<InteractiveDrawersProps> = ({
  lang,
  isCartOpen,
  onCloseCart,
  cart,
  onUpdateQty,
  onRemoveItem,
  selectedProduct,
  onCloseProduct,
  onAddToCart,
  isStoryOpen,
  onCloseStory,
  isContactOpen,
  onCloseContact,
}) => {
  const [selectedColor, setSelectedColor] = useState<string>('rose');
  const [activePieceIdx, setActivePieceIdx] = useState(0);

  useEffect(() => {
    const firstColor = selectedProduct?.colorVariants?.[0]?.id || 'rose';
    setSelectedColor(firstColor);
    setActivePieceIdx(0);
  }, [selectedProduct]);

  const currentColorPieces =
    selectedProduct?.pieces?.filter((p) => p.color === selectedColor) || [];
  const activePiece = currentColorPieces[activePieceIdx] || currentColorPieces[0];
  const activeVariant = selectedProduct?.colorVariants?.find(
    (v) => v.id === selectedColor
  );

  const handlePrevPiece = () => {
    if (currentColorPieces.length === 0) return;
    setActivePieceIdx(
      (prev) => (prev - 1 + currentColorPieces.length) % currentColorPieces.length
    );
  };

  const handleNextPiece = () => {
    if (currentColorPieces.length === 0) return;
    setActivePieceIdx((prev) => (prev + 1) % currentColorPieces.length);
  };

  return (
    <>
      {/* 1. Shopping Cart Drawer */}
      {isCartOpen && (
        <div
          onClick={onCloseCart}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-end"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-[#fdfbf7] h-full shadow-2xl p-6 flex flex-col justify-between border-l border-[#daab21]/30 animate-text-blur-in"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#daab21]/25">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="w-5 h-5 text-[#daab21]" />
                  <h3 className="text-lg font-semibold text-[#2d2613]">
                    {lang === 'pt' ? 'Sua Sacola Servih' : 'Your Servih Bag'}
                  </h3>
                </div>
                <button
                  onClick={onCloseCart}
                  className="p-1.5 rounded-full hover:bg-[#f9f5e8] text-[#2d2613] cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="py-20 text-center">
                  <img
                    src="/logo/symbol-yellow.png"
                    alt="Servih"
                    className="w-12 h-12 mx-auto mb-4 opacity-50"
                  />
                  <p className="text-sm text-[#786b4c]">
                    {lang === 'pt'
                      ? 'Sua sacola está vazia. Explore nossa coleção!'
                      : 'Your shopping bag is currently empty.'}
                  </p>
                </div>
              ) : (
                <div className="mt-4 space-y-4 max-h-[65vh] overflow-y-auto pr-1">
                  {cart.map(({ product, qty }) => (
                    <div
                      key={product.id}
                      className="flex items-center gap-3.5 bg-[#f9f5e8] p-3 rounded-xl border border-[#daab21]/20"
                    >
                      <img
                        src={product.image}
                        alt={lang === 'pt' ? product.namePt : product.nameEn}
                        className="w-16 h-16 object-contain rounded-lg bg-white p-1"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs sm:text-sm font-medium text-[#2d2613] truncate">
                          {lang === 'pt' ? product.namePt : product.nameEn}
                        </h4>
                        <p className="text-xs font-bold text-[#b58912] mt-0.5">
                          {lang === 'pt' ? product.pricePt : product.priceEn}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => onUpdateQty(product.id, -1)}
                            className="w-6 h-6 rounded bg-white border border-[#daab21]/30 text-xs font-bold cursor-pointer"
                          >
                            -
                          </button>
                          <span className="text-xs font-semibold">{qty}</span>
                          <button
                            onClick={() => onUpdateQty(product.id, 1)}
                            className="w-6 h-6 rounded bg-white border border-[#daab21]/30 text-xs font-bold cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => onRemoveItem(product.id)}
                        className="p-1.5 text-[#786b4c] hover:text-red-600 cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="pt-4 border-t border-[#daab21]/25">
                <a
                  href={`https://wa.me/5575988162781?text=${encodeURIComponent(
                    `Olá! Gostaria de finalizar meu pedido na SERVIH:\n` +
                      cart
                        .map(
                          (c) =>
                            `- ${c.qty}x ${c.product.namePt} (${c.product.pricePt})`
                        )
                        .join('\n')
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 rounded-xl bg-[#daab21] hover:bg-[#c59815] text-[#2d2613] font-semibold text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <span>
                    {lang === 'pt'
                      ? 'Finalizar Pedido pelo WhatsApp'
                      : 'Complete Order via WhatsApp'}
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. Product Quick-View & Set Pieces Gallery Modal */}
      {selectedProduct && (
        <div
          onClick={onCloseProduct}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`bg-[#fdfbf7] rounded-2xl w-full p-5 sm:p-8 shadow-2xl border border-[#daab21]/30 relative my-auto max-h-[92vh] overflow-y-auto animate-text-blur-in ${
              selectedProduct.isSet ? 'max-w-5xl' : 'max-w-2xl'
            }`}
          >
            <button
              onClick={onCloseProduct}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#f9f5e8] hover:bg-[#daab21]/25 text-[#2d2613] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {selectedProduct.isSet && selectedProduct.pieces ? (
              /* ── GALERIA COMPLETA DE PEÇAS DO CONJUNTO DUBAI ── */
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left: Main Piece Stage with Prev/Next Arrows */}
                  <div className="lg:col-span-6">
                    <div className="relative aspect-square rounded-2xl bg-[#f9f5e8] border border-[#daab21]/25 flex flex-col items-center justify-center p-8 overflow-hidden">
                      {/* Piece Counter Pill */}
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-[#2d2613] text-[#fef08a] text-[11px] font-semibold px-3 py-1 rounded-full">
                        <Layers className="w-3.5 h-3.5 text-[#facc15]" />
                        <span>
                          {lang === 'pt'
                            ? `Peça ${activePieceIdx + 1} de ${currentColorPieces.length}`
                            : `Piece ${activePieceIdx + 1} of ${currentColorPieces.length}`}
                        </span>
                      </div>

                      {/* Prev / Next Piece Controls */}
                      <button
                        onClick={handlePrevPiece}
                        aria-label="Peça anterior"
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-[#daab21] text-[#2d2613] shadow-md flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      {activePiece && (
                        <img
                          key={activePiece.id}
                          src={activePiece.image}
                          alt={
                            lang === 'pt'
                              ? activePiece.namePt
                              : activePiece.nameEn
                          }
                          className={`w-full h-full object-contain animate-text-blur-in ${
                            activePiece.image.startsWith('/napolitano') ||
                            activePiece.image.startsWith('/doblo')
                              ? 'drop-shadow-lg'
                              : 'mix-blend-multiply'
                          }`}
                        />
                      )}

                      <button
                        onClick={handleNextPiece}
                        aria-label="Próxima peça"
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-[#daab21] text-[#2d2613] shadow-md flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      {/* Active Piece Name Caption Inside Stage */}
                      {activePiece && (
                        <div className="absolute bottom-4 inset-x-4 text-center">
                          <span className="inline-block bg-white/95 backdrop-blur-xs text-[#2d2613] text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full border border-[#daab21]/30 shadow-xs">
                            {lang === 'pt'
                              ? activePiece.namePt
                              : activePiece.nameEn}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right: Set Info, Color Selector & Add to Cart */}
                  <div className="lg:col-span-6 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-[#b58912] font-semibold block mb-1.5">
                        {lang === 'pt'
                          ? selectedProduct.categoryPt
                          : selectedProduct.categoryEn}
                      </span>

                      <h3 className="text-2xl sm:text-3xl font-semibold text-[#2d2613] mb-2">
                        {lang === 'pt'
                          ? selectedProduct.namePt
                          : selectedProduct.nameEn}
                      </h3>

                      {/* Price for Selected Color Set */}
                      <div className="flex items-center gap-3 mb-5">
                        <span className="text-2xl font-bold text-[#2d2613]">
                          {activeVariant
                            ? lang === 'pt'
                              ? activeVariant.pricePt
                              : activeVariant.priceEn
                            : lang === 'pt'
                            ? selectedProduct.pricePt
                            : selectedProduct.priceEn}
                        </span>
                        {activeVariant?.oldPricePt && (
                          <span className="text-sm text-[#786b4c] line-through">
                            {lang === 'pt'
                              ? activeVariant.oldPricePt
                              : activeVariant.oldPriceEn}
                          </span>
                        )}
                      </div>

                      {/* Color Variant Selector (Rosé 13 Peças vs Preto 8 Peças) */}
                      {selectedProduct.colorVariants && (
                        <div className="mb-5">
                          <label className="text-xs font-semibold uppercase tracking-wider text-[#786b4c] block mb-2.5">
                            {lang === 'pt'
                              ? 'Escolha a Cor do Conjunto:'
                              : 'Select Set Color:'}
                          </label>
                          <div
                            className={`grid gap-3 ${
                              selectedProduct.colorVariants.length >= 3
                                ? 'grid-cols-1 sm:grid-cols-3'
                                : selectedProduct.colorVariants.length === 2
                                ? 'grid-cols-2'
                                : 'grid-cols-1'
                            }`}
                          >
                            {selectedProduct.colorVariants.map((variant) => {
                              const isSelected = selectedColor === variant.id;
                              return (
                                <button
                                  key={variant.id}
                                  onClick={() => {
                                    setSelectedColor(variant.id);
                                    setActivePieceIdx(0);
                                  }}
                                  className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                                    isSelected
                                      ? 'bg-[#f9f5e8] border-[#daab21] ring-2 ring-[#daab21]/40 shadow-xs'
                                      : 'bg-white/70 border-[#daab21]/20 hover:bg-[#f9f5e8]/60'
                                  }`}
                                >
                                  <span
                                    className="w-6 h-6 rounded-full shrink-0 border border-black/15 shadow-inner"
                                    style={{ backgroundColor: variant.hex }}
                                  />
                                  <div className="min-w-0">
                                    <span className="text-xs sm:text-sm font-semibold text-[#2d2613] block truncate">
                                      {lang === 'pt'
                                        ? variant.namePt
                                        : variant.nameEn}
                                    </span>
                                    <span className="text-[11px] text-[#786b4c] block">
                                      {lang === 'pt'
                                        ? variant.pricePt
                                        : variant.priceEn}
                                    </span>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      <p className="text-xs sm:text-sm text-[#786b4c] leading-relaxed mb-6">
                        {lang === 'pt'
                          ? selectedProduct.descPt
                          : selectedProduct.descEn}
                      </p>

                      <button
                        onClick={() => {
                          const variantToAdd: ProductItem = activeVariant
                            ? {
                                ...selectedProduct,
                                namePt: `${selectedProduct.namePt} — ${activeVariant.namePt}`,
                                nameEn: `${selectedProduct.nameEn} — ${activeVariant.nameEn}`,
                                pricePt: activeVariant.pricePt,
                                priceEn: activeVariant.priceEn,
                                image: activeVariant.coverImage,
                              }
                            : selectedProduct;
                          onAddToCart(variantToAdd);
                          onCloseProduct();
                          onCloseStory();
                        }}
                        className="w-full py-3.5 rounded-xl bg-[#daab21] hover:bg-[#c59815] text-[#2d2613] font-semibold text-sm shadow-md transition-colors cursor-pointer"
                      >
                        {lang === 'pt'
                          ? `Adicionar Conjunto (${
                              activeVariant?.namePt || ''
                            }) à Sacola`
                          : `Add Set (${
                              activeVariant?.nameEn || ''
                            }) to Bag`}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom Grid: All Pieces That Compose This Set */}
                <div className="mt-8 pt-6 border-t border-[#daab21]/25">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#2d2613]">
                      {lang === 'pt'
                        ? `Peças que compõem o Conjunto (${
                            activeVariant?.namePt || ''
                          }):`
                        : `Pieces included in this Set (${
                            activeVariant?.nameEn || ''
                          }):`}
                    </h4>
                    <span className="text-xs text-[#786b4c]">
                      {lang === 'pt'
                        ? 'Clique em qualquer peça para ampliar'
                        : 'Click any piece to zoom'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3">
                    {currentColorPieces.map((piece, idx) => {
                      const isCurrent = idx === activePieceIdx;
                      return (
                        <button
                          key={piece.id}
                          onClick={() => setActivePieceIdx(idx)}
                          className={`group flex flex-col items-center p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                            isCurrent
                              ? 'bg-[#f9f5e8] border-[#daab21] ring-2 ring-[#daab21]/40 shadow-xs'
                              : 'bg-[#f9f5e8]/50 border-[#daab21]/15 hover:bg-[#f9f5e8] hover:border-[#daab21]/40'
                          }`}
                        >
                          <div className="w-full aspect-square flex items-center justify-center p-1 mb-1.5">
                            <img
                              src={piece.image}
                              alt={
                                lang === 'pt' ? piece.namePt : piece.nameEn
                              }
                              className={`w-full h-full object-contain group-hover:scale-105 transition-transform ${
                                piece.image.startsWith('/napolitano')
                                  ? 'drop-shadow-xs'
                                  : 'mix-blend-multiply'
                              }`}
                            />
                          </div>
                          <span className="text-[10.5px] font-medium text-[#2d2613] leading-tight line-clamp-2">
                            {lang === 'pt' ? piece.namePt : piece.nameEn}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              /* ── MODAL PADRÃO PARA PRODUTOS INDIVIDUAIS ── */
              <div className="grid sm:grid-cols-2 gap-6 items-center">
                <div className="aspect-square rounded-xl bg-[#f9f5e8] flex items-center justify-center p-6 border border-[#daab21]/15">
                  <img
                    src={selectedProduct.image}
                    alt={
                      lang === 'pt'
                        ? selectedProduct.namePt
                        : selectedProduct.nameEn
                    }
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#b58912] font-semibold block mb-1.5">
                    {lang === 'pt'
                      ? selectedProduct.categoryPt
                      : selectedProduct.categoryEn}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#2d2613] mb-2">
                    {lang === 'pt'
                      ? selectedProduct.namePt
                      : selectedProduct.nameEn}
                  </h3>
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="text-lg font-bold text-[#2d2613]">
                      {lang === 'pt'
                        ? selectedProduct.pricePt
                        : selectedProduct.priceEn}
                    </span>
                    {(lang === 'pt'
                      ? selectedProduct.oldPricePt
                      : selectedProduct.oldPriceEn) && (
                      <span className="text-sm text-[#786b4c] line-through">
                        {lang === 'pt'
                          ? selectedProduct.oldPricePt
                          : selectedProduct.oldPriceEn}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-[#786b4c] leading-relaxed mb-6">
                    {lang === 'pt'
                      ? selectedProduct.descPt
                      : selectedProduct.descEn}
                  </p>

                  {selectedProduct.badge === 'SOLD_OUT' ? (
                    <div className="w-full py-3 rounded-xl bg-[#2d2613]/15 text-[#2d2613] text-center text-xs font-bold uppercase tracking-wider">
                      {lang === 'pt' ? 'Produto Esgotado' : 'Currently Sold Out'}
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        onAddToCart(selectedProduct);
                        onCloseProduct();
                        onCloseStory();
                      }}
                      className="w-full py-3.5 rounded-xl bg-[#daab21] hover:bg-[#c59815] text-[#2d2613] font-semibold text-sm shadow-sm transition-colors cursor-pointer"
                    >
                      {lang === 'pt' ? 'Adicionar à Sacola' : 'Add to Bag'}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3. SERVIH Brand Story Modal ("Nossa História") */}
      {isStoryOpen && (
        <div
          onClick={onCloseStory}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#fdfbf7] rounded-2xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl border border-[#daab21]/35 relative my-8 animate-text-blur-in max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onCloseStory}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#f9f5e8] hover:bg-[#daab21]/25 text-[#2d2613] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center mb-6">
              <img
                src="/logo/logo-original.png"
                alt="SERVIH Logo Oficial"
                className="h-24 sm:h-28 mx-auto object-contain mb-2"
              />
              <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-[#b58912] font-semibold">
                <Heart className="w-3.5 h-3.5" />
                {lang === 'pt'
                  ? 'Nossa História • Desde 2006'
                  : 'Our Story • Since 2006'}
              </span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#2d2613]/85 leading-relaxed">
              <p>
                {lang === 'pt' ? (
                  <>
                    A <strong>SERVIH</strong> nasceu de um propósito claro: uma
                    empresa não precisa escolher entre crescer e fazer o bem —
                    ela pode crescer justamente para servir mais. Nossa jornada
                    começou em <strong>17 de fevereiro de 2006</strong>,
                    levando capacitação e oportunidades acessíveis a centenas de
                    famílias.
                  </>
                ) : (
                  <>
                    <strong>SERVIH</strong> was born from a clear purpose: a
                    company does not have to choose between growing and doing
                    good — it can grow precisely to serve more. Our journey
                    began on <strong>February 17, 2006</strong>.
                  </>
                )}
              </p>
              <p>
                {lang === 'pt' ? (
                  <>
                    Inspirados pelo símbolo da <strong>abelha</strong> — que
                    trabalha em equipe, constrói com excelência e poliniza vida
                    por onde passa —, selecionamos produtos que trazem{' '}
                    <strong>elegância e conforto para o seu lar</strong>,
                    enquanto parte dos recursos apoia projetos sociais e
                    iniciativas no Brasil, em Portugal e em Moçambique.
                  </>
                ) : (
                  <>
                    Inspired by the <strong>honeybee</strong> — a symbol of
                    craft, diligence, and life-giving purpose — every piece we
                    curate brings warmth and elegance into your home while
                    supporting community initiatives in Brazil, Portugal, and
                    Mozambique.
                  </>
                )}
              </p>
            </div>

            <div className="mt-7 pt-5 border-t border-[#daab21]/25 flex justify-end">
              <button
                onClick={onCloseStory}
                className="bg-[#daab21] hover:bg-[#c59815] text-[#2d2613] text-xs font-semibold px-6 py-2.5 rounded-lg cursor-pointer"
              >
                {lang === 'pt' ? 'Fechar' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Contact Modal */}
      {isContactOpen && (
        <div
          onClick={onCloseContact}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#fdfbf7] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#daab21]/35 relative animate-text-blur-in"
          >
            <button
              onClick={onCloseContact}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#f9f5e8] hover:bg-[#daab21]/25 text-[#2d2613] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/logo/symbol-yellow.png"
                alt="Servih"
                className="h-8 w-auto"
              />
              <h3 className="text-xl font-semibold text-[#2d2613]">
                {lang === 'pt' ? 'Fale com a Equipe Servih' : 'Contact Servih'}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#786b4c] mb-6 leading-relaxed">
              {lang === 'pt'
                ? 'Atendimento rápido e humanizado no Brasil e em Portugal para tirar suas dúvidas ou acompanhar seu pedido.'
                : 'Direct support in Brazil and Portugal to help you choose the right essentials for your home.'}
            </p>

            <div className="space-y-3.5 text-sm">
              <a
                href="https://wa.me/5575988162781"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#f9f5e8] hover:bg-[#daab21]/25 border border-[#daab21]/25 transition-colors"
              >
                <span className="flex items-center gap-2.5 font-medium text-[#2d2613]">
                  <Phone className="w-4 h-4 text-[#b58912]" />
                  🇧🇷 WhatsApp Brasil: +55 (75) 98816-2781
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#b58912]" />
              </a>

              <a
                href="https://wa.me/351917558100"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#f9f5e8] hover:bg-[#daab21]/25 border border-[#daab21]/25 transition-colors"
              >
                <span className="flex items-center gap-2.5 font-medium text-[#2d2613]">
                  <Phone className="w-4 h-4 text-[#b58912]" />
                  🇵🇹 WhatsApp Portugal: +351 917 558 100
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#b58912]" />
              </a>

              <a
                href="mailto:servih.r@gmail.com"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#f9f5e8] hover:bg-[#daab21]/25 border border-[#daab21]/25 transition-colors"
              >
                <span className="flex items-center gap-2.5 font-medium text-[#2d2613]">
                  <Mail className="w-4 h-4 text-[#b58912]" />
                  servih.r@gmail.com
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#b58912]" />
              </a>

              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#f9f5e8]/60 text-xs text-[#786b4c]">
                <MapPin className="w-4 h-4 text-[#b58912] shrink-0 mt-0.5" />
                <span>
                  Comunidade Riacho da Lama, 9978 — Bairro Marculina, Laje -
                  Bahia, CEP 45490-000
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
