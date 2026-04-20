import { Heart, XCircle, DollarSign, AlertCircle } from "lucide-react";

const emotionalPoints = [
  {
    icon: Heart,
    title: "Seu Sonho Está Custando Caro Demais",
    description: "Você trabalhou tanto para conquistar seu carro... mas está pagando MUITO mais do que deveria."
  },
  {
    icon: XCircle,
    title: "Cada Mês, Mais Dinheiro Perdido",
    description: "Enquanto você lê isso, centenas de reais estão saindo da sua conta para o bolso do banco."
  },
  {
    icon: DollarSign,
    title: "E Se Fosse Com Você?",
    description: "Imagina descobrir que você poderia ter economizado R$ 15.000... mas já pagou tudo?"
  }
];

export function ProblemSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" id="emocional">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-destructive/5 to-background" />
      <div className="glow-orb absolute top-1/3 right-1/4 w-80 h-80 bg-destructive/10" style={{ animationDelay: '2s' }} />
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-16 scroll-reveal">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-destructive/20 border border-destructive/50 text-sm mb-6">
              <AlertCircle className="w-4 h-4 text-destructive" />
              <span className="text-destructive font-bold">ISSO PODE ESTAR ACONTECENDO COM VOCÊ</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
              A Verdade Que Ninguém
              <br />
              <span className="text-destructive">Te Contou</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Você confia no banco. Assinou o contrato. Paga todo mês em dia...
              <br />
              <span className="text-foreground font-bold">Mas você realmente sabe o que está pagando?</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {emotionalPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div 
                  key={index}
                  className="scroll-reveal"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="glass-card border-2 border-destructive/30 rounded-3xl p-8 text-center h-full hover:scale-105 transition-all hover:border-destructive/60">
                    <div className="w-20 h-20 rounded-2xl bg-destructive/20 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-10 h-10 text-destructive" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-foreground mb-4 leading-tight">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="scroll-reveal">
            <div className="glass-card border-2 border-destructive/50 rounded-3xl p-10 lg:p-12">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-destructive/20 flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-destructive" />
                </div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                  "Eu achava que era normal pagar caro..."
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Maria comprou seu carro em 2022. Pagou <span className="text-foreground font-bold">R$ 1.350 por mês</span> durante 3 anos.
                  <br />
                  Quando descobriu os juros abusivos, já tinha pago <span className="text-destructive font-bold">R$ 18.600 A MAIS</span>.
                  <br />
                  <span className="text-accent font-bold">Não deixe isso acontecer com você.</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
