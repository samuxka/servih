import { ArrowRight, ChevronRight } from "lucide-react";
import { Page } from "../types";
import { PRODUCTS, FEATURES } from "../data";
import { ProductCard } from "../components/ProductCard";
import logo from "../../imports/logo.png";

export function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="min-h-screen pt-20 flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20">
          {/* Left */}
          <div>
            <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-primary/60 font-semibold mb-7">
              SERVIH - 2026
            </span>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-[3.6rem] font-bold text-foreground leading-[1.05] mb-7">
              Elegância para o lar,
            </h1>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-[3.6rem] font-bold text-foreground leading-[1.05] mb-7">
              Proposito para vida
            </h1>
            <p className="text-foreground/55 text-lg leading-relaxed max-w-md mb-10 font-sans">
             Sua casa merece utensílios de qualidade, feitos com cuidado e atenção aos detalhes. Descubra a coleção Servih e transforme sua casa em um espaço de inspiração e criatividade.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setPage("construction")}
                className="flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full text-sm font-semibold hover:bg-accent transition-all duration-200 group"
              >
                Ver produtos
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button 
                onClick={() => setPage("construction")}
                className="flex items-center gap-2 border border-border text-foreground/70 px-7 py-4 rounded-full text-sm font-medium hover:border-primary/30 hover:text-foreground transition-colors duration-200"
              >
                Nossa loja
              </button>
            </div>

            {/* Stats row */}
            <div className="mt-14 pt-10 border-t border-border flex gap-10">
              {[
                ["12k+", "Clientes felizes"],
                ["95%", "Satisfação"],
                ["4.9★", "Avaliação Média"],
              ].map(([val, label]) => (
                <div key={label}>
                  <div className="font-heading text-2xl font-bold text-foreground">
                    {val}
                  </div>
                  <div className="text-[11px] text-foreground/45 mt-1 font-sans">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — editorial photo */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 bg-primary/5 rounded-[2.5rem] scale-105" />
            <div className="relative w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Interior de uma casa moderna"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Features strip ── */}
      <section className="border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid sm:grid-cols-3 gap-8 sm:divide-x divide-border">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex items-start gap-4 sm:px-8 first:pl-0 last:pr-0"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon size={17} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {title}
                </h3>
                <p className="text-xs text-foreground/50 leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-[11px] tracking-[0.25em] uppercase text-primary/60 font-semibold block mb-3">
                Cuidadosamente selecionados
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
                Mais vendidos 
              </h2>
            </div>
            <button
              onClick={() => setPage("construction")}
              className="hidden sm:flex items-center gap-1 text-sm text-primary font-semibold hover:gap-2 transition-all duration-200"
            >
              Ver todos <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} setPage={setPage} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <button
              onClick={() => setPage("construction")}
              className="text-sm text-primary font-semibold"
            >
              Ver todos →
            </button>
          </div>
        </div>
      </section>

      {/* ── About / Story ── */}
      <section className="bg-primary py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Coleção de utensílios de casa Servih dispostos no ambiente"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-primary-foreground">
            <span className="text-[11px] tracking-[0.3em] uppercase text-primary-foreground/50 font-semibold block mb-5">
              Sobre a Servih
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Criado para o<br />conforto do seu lar
            </h2>
            <p className="text-primary-foreground/65 leading-relaxed mb-5">
              A Servih nasceu de uma crença simples: os utensílios que compõem o seu lar
              importam. Cada peça da nossa coleção é desenhada com cuidado,
              testada em lares reais e construída para se tornar parte duradoura
              da sua rotina.
            </p>
            <p className="text-primary-foreground/65 leading-relaxed mb-8">
              Temos parcerias com artesãos e fornecedores responsáveis para trazer a você
              uma qualidade que se sente em cada uso, todos os dias.
            </p>
            <button onClick={() => setPage("about")} className="flex items-center gap-2 border border-primary-foreground/25 text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-primary-foreground/10 transition-colors duration-200">
              Conheça nossa história <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-5">
          <img src={logo} alt="Servih" className="h-8 object-contain" />
          <p className="text-xs text-foreground/35 text-center">
            © 2024 Servih. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
