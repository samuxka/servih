import { Product, Page } from "../types";

export function ProductCard({ product, setPage }: { product: Product; setPage: (p: Page) => void }) {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[11px] px-3 py-1 rounded-full font-semibold tracking-wide">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-5">
        <span className="text-[11px] uppercase tracking-[0.15em] text-primary/70 font-semibold">
          {product.category}
        </span>
        <h3 className="font-heading text-lg font-bold text-foreground mt-1 mb-1">
          {product.name}
        </h3>
        <p className="text-xs text-foreground/50 leading-relaxed mb-4">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-foreground font-heading">
            R$ {product.price}
          </span>
          <button
            onClick={() => setPage("construction")}
            className="text-xs px-4 py-2 rounded-full font-semibold transition-all duration-200 bg-primary text-primary-foreground hover:bg-accent"
          >
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  );
}
