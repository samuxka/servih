import { Heart, Users, Target, Activity, CheckCircle, Clock, Lightbulb, Shield } from "lucide-react";

export function AboutPage() {
  return (
    <main className="pt-28 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20 text-center">
        <span className="text-[11px] tracking-[0.3em] uppercase text-primary/60 font-semibold block mb-4">
          Nossa História
        </span>
        <h1 className="font-heading text-4xl lg:text-6xl font-bold text-foreground leading-tight max-w-5xl mx-auto mb-8">
          SERVIH — Uma empresa que nasceu para servir
        </h1>
        <p className="text-foreground/60 text-lg max-w-3xl mx-auto leading-relaxed">
          Toda grande história começa com um propósito. Acreditamos que uma empresa não precisa escolher entre crescer e fazer o bem. Ela pode crescer justamente para fazer mais.
        </p>
      </section>

      {/* The Beginning */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
              <Clock className="w-8 h-8" />
            </div>
            <h2 className="font-heading text-3xl font-bold mb-6">Como tudo começou</h2>
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
                A história da <strong>SERVIH</strong> começou muito antes de receber esse nome. Em 2006, nasceu de um sonho simples, mas profundamente significativo: <strong>possibilitar que pessoas de baixa renda tivessem acesso a um curso de informática</strong>, em uma época em que o acesso à tecnologia e à capacitação profissional ainda era muito mais difícil.
              </p>
              <p>
                Criamos parcelas extremamente acessíveis. O projeto cresceu, ganhou a confiança das pessoas e, em <strong>17 de fevereiro de 2006</strong>, formalizamos nossa empresa. Naquela época, a empresa se chamava <strong>R@HITec</strong>.
              </p>
              <p>
                Crescemos e chegamos a atuar em <strong>cinco cidades diferentes</strong>, alcançando a marca de <strong>260 alunos</strong> em menos de dois anos em uma única unidade.
              </p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden aspect-square bg-muted/30 p-8 flex items-center justify-center relative border border-border">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
             {/* Decorative element representing the start */}
            <div className="text-center z-10">
              <span className="text-8xl font-bold text-primary/20 block mb-4">2006</span>
              <p className="text-xl font-heading font-medium text-foreground">O ano em que o sonho tomou forma</p>
            </div>
          </div>
        </div>
      </section>

      {/* Difficulties & Persistence */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24 bg-muted/30 rounded-3xl p-10 lg:p-16 border border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">Quando uma porta se fecha, o propósito permanece</h2>
          <div className="space-y-4 text-foreground/70 leading-relaxed text-left md:text-center">
            <p>
              Mas nem toda história de crescimento acontece sem dificuldades. Por questões financeiras, fomos obrigados a encerrar as atividades da escola. Enfrentamos períodos extremamente difíceis, mas havia algo que nunca desapareceu: <strong>o desejo de um dia recuperar aquilo que havia sido construído</strong>.
            </p>
            <p>
              Trabalhamos em outras áreas, buscamos novos caminhos — do Paraná a Portugal — e sempre mantivemos a vontade de construir algo que ajudasse pessoas. Nunca enxergamos o comércio apenas como uma forma de ganhar dinheiro, mas como um instrumento para gerar oportunidades e transformar vidas.
            </p>
          </div>
        </div>
      </section>

      {/* Rebuilding */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="grid md:grid-cols-2 gap-16 items-center flex-row-reverse">
          <div className="order-2 md:order-1 rounded-3xl overflow-hidden aspect-square bg-primary text-primary-foreground p-10 flex flex-col justify-center">
             <Heart className="w-12 h-12 mb-8 opacity-80" />
             <h3 className="font-heading text-3xl font-bold mb-4">SERVIR.</h3>
             <ul className="space-y-4 text-primary-foreground/80">
               <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 shrink-0 mt-0.5" /> Servir nossos clientes com produtos de qualidade.</li>
               <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 shrink-0 mt-0.5" /> Servir nossos parceiros criando relacionamentos duradouros.</li>
               <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 shrink-0 mt-0.5" /> Servir nossos colaboradores oferecendo oportunidades.</li>
               <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 shrink-0 mt-0.5" /> Servir comunidades que precisam de esperança.</li>
             </ul>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-heading text-3xl font-bold mb-6">O dia em que decidimos voltar</h2>
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
                Em um momento de oração, lembramos daquele CNPJ que carregava nossa história. Apesar das dívidas e da orientação lógica de "dar por falida", decidimos não desistir. <strong>Acreditávamos que aquela empresa ainda tinha um propósito.</strong>
              </p>
              <p>
                Pagamos as dívidas. Assumimos novamente a responsabilidade. Não estávamos simplesmente reativando um CNPJ; <strong>estávamos resgatando uma história</strong>.
              </p>
              <p>
                Foi nesse processo de reconstrução que nasceu uma nova identidade: <strong>SERVIH</strong>. Mais do que um nome, representa aquilo que sempre esteve presente: <strong>SERVIR</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Bee - Values */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl font-bold mb-4">A abelha que representa nossa essência</h2>
          <p className="text-foreground/60 text-lg">
            Nosso símbolo é uma <strong>abelha</strong>. Ela representa muitas das características que identificam a SERVIH.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Trabalho",
              desc: "A abelha trabalha continuamente. Acreditamos que cada venda, cada cliente, e cada pessoa alcançada contribui para construir algo maior.",
              icon: Activity
            },
            {
              title: "Cooperação",
              desc: "A união de toda a colmeia produz resultados extraordinários. Crescemos juntos com clientes, fornecedores, colaboradores e parceiros.",
              icon: Users
            },
            {
              title: "Organização",
              desc: "Pessoas diferentes, com talentos diferentes, exercem papéis diferentes e, juntos, constroem algo extraordinário.",
              icon: Target
            },
            {
              title: "Perseverança",
              desc: "A abelha constrói dia após dia. Caímos, recomeçamos, aprendemos e continuamos trabalhando. A SERVIH é fruto da perseverança.",
              icon: Shield
            },
            {
              title: "Produção e Transformação",
              desc: "Transformamos o que recebemos em algo precioso. Transformar produtos em oportunidades, vendas em crescimento e crescimento em impacto.",
              icon: Lightbulb
            }
          ].map((item, index) => (
            <div key={index} className="bg-card border border-border p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3">{item.title}</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-primary/5 border border-primary/10 rounded-3xl p-10 lg:p-16 text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">Uma empresa que vende, mas não existe apenas para vender</h2>
          <p className="text-foreground/70 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Hoje, a SERVIH atua no varejo e atacado. Mas nossos produtos não são o ponto final; <strong>são o meio</strong>. Parte dos recursos gerados apoia projetos e pessoas, incluindo iniciativas missionárias no Brasil e em Moçambique.
          </p>
          <div className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg shadow-lg">
            SERVIH — Elegância para seu lar e propósito para a vida.
          </div>
        </div>
      </section>
    </main>
  );
}
