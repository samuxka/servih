import { Mail, Phone, MapPin } from "lucide-react";

export function ContactPage() {

  return (
    <main className="pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div>
          <span className="text-[11px] tracking-[0.3em] uppercase text-primary/60 font-semibold block mb-4">
            Fale Conosco
          </span>
          <h1 className="font-heading text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Estamos aqui para ajudar
          </h1>
          <p className="text-foreground/60 text-lg leading-relaxed mb-12">
            Tem alguma dúvida sobre nossos produtos, precisa de ajuda com um pedido ou quer apenas compartilhar sugestões? Nossa equipe está pronta para atendê-lo.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold mb-1">E-mail</h3>
                <p className="text-foreground/60 mb-1">Para dúvidas gerais e suporte.</p>
                <a href="mailto:servih.r@gmail.com" className="text-primary font-semibold hover:underline">servih.r@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold mb-1">Telefone / WhatsApp</h3>
                <div className="flex flex-col gap-1">
                  <a href="https://wa.me/5575988162781" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">+55 (75) 98816-2781</a>
                  <a href="https://wa.me/5575999671273" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">+55 (75) 99967-1273</a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold mb-1">Localização</h3>
                <p className="text-foreground/60 leading-relaxed text-sm">
                  Comunidade Riacho da Lama, 9978<br />
                  Bairro: Marculina<br />
                  Laje - Bahia<br />
                  CEP: 45490-000
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
