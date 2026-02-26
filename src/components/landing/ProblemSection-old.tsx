import { AlertCircle, TrendingUp, DollarSign, FileText } from "lucide-react";

const problems = [
  {
    icon: TrendingUp,
    title: "Juros Abusivos",
    description: "70% dos contratos têm taxas acima do permitido pelo Banco Central"
  },
  {
    icon: DollarSign,
    title: "Tarifas Indevidas",
    description: "Cobranças que não deveriam estar no seu contrato"
  },
  {
    icon: FileText,
    title: "Informações Ocultas",
    description: "Cláusulas que beneficiam apenas a instituição financeira"
  }
];

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden" id="servicos">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="glow-orb absolute top-1/3 right-1/4 w-80 h-80 bg-primary/10" style={{ animationDelay: '2s' }} />
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 scroll-reveal">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-sm mb-6">
              <AlertCircle className="w-4 h-4 text-accent" />
              <span className="text-foreground font-medium">Você Sabia?</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Muitos consumidores
              <br />
              <span className="text-gradient-accent">desconhecem o que compõe</span>
              <br />
              o valor pago mensalmente
            </h2>
          </div>

          {/* Problem cards grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div 
                  key={index}
                  className="scroll-reveal"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="glass-card neon-border rounded-3xl p-8 text-center h-full hover:scale-105 transition-all">
                    <div className="w-20 h-20 rounded-2xl accent-gradient flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-10 h-10 text-accent-foreground" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA box */}
          <div className="mt-16 scroll-reveal">
            <div className="glass-card neon-border rounded-3xl p-10 text-center">
              <p className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Informação jurídica faz diferença
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Entenda se seu contrato pode ser analisado e descubra se você está pagando valores indevidos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
                  Mas você TEM DIREITO de revisar seu contrato
                </p>
                <p className="text-lg text-muted-foreground">
                  A lei está do seu lado. Você pode exigir a redução das parcelas ou a devolução do que pagou a mais.
                </p>
              </div>
            </div>
          </div>

          {/* Storytelling example */}
          <div className="mt-12 p-8 rounded-2xl card-gradient border border-border">
            <p className="text-center text-muted-foreground mb-6">
              Exemplo real de abusividade:
            </p>
            <div className="grid sm:grid-cols-2 gap-8 items-center">
              <div className="text-center p-6 rounded-xl bg-destructive/10">
                <p className="text-sm text-muted-foreground mb-2">O que você pagaria</p>
                <p className="font-display text-4xl font-bold text-destructive">R$ 57.600</p>
                <p className="text-sm text-muted-foreground mt-2">48x de R$ 1.200</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-success/10">
                <p className="text-sm text-muted-foreground mb-2">O que deveria pagar</p>
                <p className="font-display text-4xl font-bold text-success">R$ 45.000</p>
                <p className="text-sm text-muted-foreground mt-2">Taxa justa do BC</p>
              </div>
            </div>
            <p className="text-center mt-6 font-display font-bold text-2xl text-accent">
              = R$ 12.600 pagos A MAIS ao banco
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
