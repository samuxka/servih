import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Language } from '../data/siteData';
import { ScrollBlurReveal } from './ScrollBlurReveal';

interface CtaFooterSectionProps {
  lang: Language;
  onOpenStory: () => void;
  onOpenContact: () => void;
}

export const CtaFooterSection: React.FC<CtaFooterSectionProps> = ({
  lang,
  onOpenStory,
  onOpenContact,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3500);
  };

  return (
    <>
      {/* Pre-Footer CTA Section (00:26 - 00:28 in video) */}
      <section
        id="contact"
        className="py-16 sm:py-24 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto"
      >
        <ScrollBlurReveal>
          {/* Top Heading Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-6">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#2d2613] leading-[1.15] tracking-tight">
                {lang === 'pt' ? (
                  <>
                    Ainda tem dúvidas
                    <br />
                    antes de escolher a Servih?
                  </>
                ) : (
                  <>
                    Still have questions
                    <br />
                    before choosing Servih?
                  </>
                )}
              </h2>
            </div>

            <div className="lg:col-span-6 lg:text-right">
              <p className="text-sm sm:text-[15px] text-[#786b4c] max-w-md lg:ml-auto leading-relaxed">
                {lang === 'pt'
                  ? 'Nossa equipe está aqui para ajudar você a encontrar os itens ideais para a sua casa, de panelas e louças até conforto e orientações de cuidado.'
                  : 'Our team is here to help you find the right kitchen essentials for your home, from cookware to tableware and care guidance.'}
              </p>
            </div>
          </div>

          {/* Large Architectural Kitchen Banner + Floating Right Card (00:27 - 00:28 in video) */}
          <div className="relative rounded-2xl overflow-hidden min-h-[480px] sm:min-h-[540px] flex items-end p-6 sm:p-10 lg:p-12 shadow-xl bg-[#1c160b]">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
              alt="Bring Warmth Into Every Corner"
              className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.72]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141007]/85 via-[#141007]/25 to-transparent" />

            <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              {/* Bottom-Left White Headline */}
              <div className="max-w-lg">
                <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-white tracking-tight leading-snug">
                  {lang === 'pt'
                    ? 'Traga Aconchego e Elegância Para Cada Canto'
                    : 'Bring Warmth Into Every Corner'}
                </h3>
              </div>

              {/* Right Floating White Card ("Begin Your Kitchen Ritual") */}
              <div className="w-full sm:w-[360px] lg:w-[390px] bg-[#fdfbf7] rounded-2xl p-5 sm:p-6 shadow-2xl border border-[#daab21]/30">
                <h4 className="text-sm sm:text-[15px] font-semibold text-[#2d2613] mb-3">
                  {lang === 'pt'
                    ? 'Comece Seu Ritual no Lar'
                    : 'Begin Your Kitchen Ritual'}
                </h4>

                <div className="rounded-xl overflow-hidden h-40 sm:h-44 w-full mb-4 bg-[#f9f5e8]">
                  <img
                    src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
                    alt="Servih Kitchen Ritual"
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-xs sm:text-[13px] text-[#786b4c] leading-relaxed mb-4">
                  {lang === 'pt'
                    ? 'Vamos criar um lar mais acolhedor com essenciais atemporais feitos para cozinhar, servir e viver com propósito.'
                    : "Let's create a warmer kitchen with timeless essentials made for everyday cooking, serving, and slow living."}
                </p>

                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-2 bg-[#daab21] hover:bg-[#c59815] text-[#2d2613] text-xs sm:text-[13px] font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 cursor-pointer"
                >
                  <span>{lang === 'pt' ? 'Fale Conosco' : 'Contact Us'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </ScrollBlurReveal>
      </section>

      {/* Dark Charcoal & Gold Footer (00:29 - 00:31 in video) */}
      <footer className="bg-[#120f08] text-white pt-16 sm:pt-20 pb-10 px-6 sm:px-10 lg:px-16 border-t border-[#daab21]/20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
            {/* Left Brand + Newsletter + Socials */}
            <div className="lg:col-span-5">
              <div
                onClick={onOpenStory}
                className="inline-flex items-center gap-3 mb-6 cursor-pointer group"
              >
                <img
                  src="/logo/symbol-yellow.png"
                  alt="Servih Symbol"
                  className="h-9 w-auto object-contain group-hover:scale-105 transition-transform"
                />
                <div>
                  <span className="text-2xl font-bold tracking-tight text-white block leading-none">
                    Servih
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#daab21] font-medium block mt-1">
                    {lang === 'pt'
                      ? 'Elegância para o lar, propósito para vida'
                      : 'Elegance for home, purpose for life'}
                  </span>
                </div>
              </div>

              <h4 className="text-sm sm:text-[15px] font-medium text-white/90 mb-3">
                {lang === 'pt'
                  ? 'Assine Nossa Newsletter'
                  : 'Subscribe to Newsletter'}
              </h4>

              <form
                onSubmit={handleSubscribe}
                className="flex items-center bg-white rounded-full p-1 pl-4 max-w-xs mb-6 shadow-inner"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={
                    lang === 'pt' ? 'seuemail@exemplo.com' : 'john@example.com'
                  }
                  className="w-full bg-transparent text-xs sm:text-sm text-[#2d2613] placeholder:text-[#786b4c]/70 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Inscrever"
                  className="w-8 h-8 rounded-full bg-[#daab21] hover:bg-[#facc15] text-[#2d2613] flex items-center justify-center shrink-0 transition-colors cursor-pointer"
                >
                  {subscribed ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </form>

              {subscribed && (
                <p className="text-xs text-[#facc15] mb-4">
                  {lang === 'pt'
                    ? 'Obrigado por se inscrever na Servih!'
                    : 'Thank you for subscribing to Servih!'}
                </p>
              )}

              {/* 4 Social Icon Boxes */}
              <div className="flex items-center gap-2.5">
                {[
                  { label: 'Instagram', href: '#contact', icon: 'IG' },
                  { label: 'WhatsApp BR', href: 'https://wa.me/5575988162781', icon: 'BR' },
                  { label: 'WhatsApp PT', href: 'https://wa.me/351917558100', icon: 'PT' },
                  { label: 'E-mail', href: 'mailto:servih.r@gmail.com', icon: '@' },
                ].map((soc) => (
                  <a
                    key={soc.label}
                    href={soc.href}
                    target={soc.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    title={soc.label}
                    className="w-8 h-8 rounded-md border border-white/20 hover:border-[#facc15] hover:text-[#facc15] text-white/80 text-[11px] font-semibold flex items-center justify-center transition-colors"
                  >
                    {soc.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right 3 Columns: MENU, CONTACT, LEGAL */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {/* MENU */}
              <div>
                <h5 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#facc15] mb-4">
                  MENU
                </h5>
                <ul className="space-y-2.5 text-xs sm:text-[13px] text-white/65">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      {lang === 'pt' ? 'Início' : 'Home'}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="hover:text-white transition-colors"
                    >
                      {lang === 'pt' ? 'Sobre Nós' : 'About Us'}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#products"
                      className="hover:text-white transition-colors"
                    >
                      {lang === 'pt' ? 'Produtos' : 'Product'}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#categories"
                      className="hover:text-white transition-colors"
                    >
                      {lang === 'pt' ? 'Categorias' : 'Categories'}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faq"
                      className="hover:text-white transition-colors"
                    >
                      {lang === 'pt' ? 'Perguntas Frequentes' : 'FAQ'}
                    </a>
                  </li>
                </ul>
              </div>

              {/* CONTACT */}
              <div>
                <h5 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#facc15] mb-4">
                  {lang === 'pt' ? 'CONTATO' : 'CONTACT'}
                </h5>
                <div className="space-y-2 text-xs sm:text-[13px] text-white/65 leading-relaxed">
                  <p className="text-white/90 font-medium">SERVIH Lar & Conforto</p>
                  <p>
                    Comunidade Riacho da Lama, 9978
                    <br />
                    Laje - Bahia, CEP 45490-000
                  </p>
                  <p className="pt-1">
                    <a
                      href="https://wa.me/5575988162781"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-[#facc15] transition-colors block"
                    >
                      🇧🇷 +55 (75) 98816-2781
                    </a>
                    <a
                      href="https://wa.me/351917558100"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-[#facc15] transition-colors block"
                    >
                      🇵🇹 +351 917 558 100
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:servih.r@gmail.com"
                      className="hover:text-[#facc15] transition-colors"
                    >
                      servih.r@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* LEGAL */}
              <div>
                <h5 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#facc15] mb-4">
                  LEGAL
                </h5>
                <ul className="space-y-2.5 text-xs sm:text-[13px] text-white/65">
                  <li>
                    <button
                      onClick={onOpenStory}
                      className="hover:text-white transition-colors text-left cursor-pointer"
                    >
                      {lang === 'pt'
                        ? 'Nossa História (Desde 2006)'
                        : 'Our Story (Since 2006)'}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={onOpenContact}
                      className="hover:text-white transition-colors text-left cursor-pointer"
                    >
                      {lang === 'pt'
                        ? 'Política de Privacidade'
                        : 'Privacy Policy'}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={onOpenContact}
                      className="hover:text-white transition-colors text-left cursor-pointer"
                    >
                      {lang === 'pt'
                        ? 'Política de Trocas e Devoluções'
                        : 'Return Policy'}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={onOpenStory}
                      className="hover:text-white transition-colors text-left cursor-pointer"
                    >
                      {lang === 'pt'
                        ? 'Propósito Social & Missões'
                        : 'Social Purpose'}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
            <p>
              © {new Date().getFullYear()} SERVIH — Elegância para o lar,
              propósito para a vida. Todos os direitos reservados.
            </p>
            <p className="text-[#daab21]/80">
              SERVIH • Brasil & Portugal
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

