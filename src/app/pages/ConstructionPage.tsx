import { HardHat, ArrowLeft } from "lucide-react";
import { Page } from "../types";

export function ConstructionPage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <main className="min-h-screen pt-28 pb-24 flex items-center justify-center">
      <div className="max-w-md mx-auto px-6 text-center">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <HardHat size={32} className="text-primary" />
        </div>
        <h1 className="font-heading text-4xl font-bold text-foreground mb-4">
          Página em Construção
        </h1>
        <p className="text-foreground/60 text-lg leading-relaxed mb-8">
          Nossa loja está quase pronta! Estamos trabalhando duro para trazer a você a melhor experiência em compras de utensílios para o seu lar. Volte em breve.
        </p>
        <button
          onClick={() => setPage("home")}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent transition-colors duration-200"
        >
          <ArrowLeft size={16} />
          Voltar para o Início
        </button>
      </div>
    </main>
  );
}
