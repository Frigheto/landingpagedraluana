import { BarChart3, Shield, TrendingUp, CheckCircle } from "lucide-react";

const logicalData = [
  { 
    value: "70%", 
    label: "dos contratos têm juros ACIMA do permitido",
    icon: BarChart3,
    color: "destructive"
  },
  { 
    value: "R$ 12 mil", 
    label: "é a média de dinheiro recuperado por cliente",
    icon: TrendingUp,
    color: "accent"
  },
  { 
    value: "98%", 
    label: "de taxa de sucesso nos processos",
    icon: CheckCircle,
    color: "success"
  }
];

const proofs = [
  "✓ Banco Central estabelece taxas máximas de juros",
  "✓ STJ garante direito à revisão de contratos abusivos",
  "✓ CDC protege consumidores de cláusulas abusivas",
  "✓ Resolução 4549/17 do Bacen regula tarifas bancárias"
];

export function CredibilitySection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" id="logico">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="glow-orb absolute top-1/2 left-1/4 w-96 h-96 bg-accent/10" style={{ animationDelay: '1s' }} />
      
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header - SEÇÃO LÓGICA */}
          <div className="text-center mb-16 scroll-reveal">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/20 border border-accent/50 text-sm mb-6">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-accent font-bold">DADOS E FATOS COMPROVADOS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
              Os Números
              <br />
              <span className="text-gradient-accent">Não Mentem</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Milhares de brasileiros já recuperaram seu dinheiro.
              <br />
              <span className="text-foreground font-bold">A lei está do seu lado.</span>
            </p>
          </div>

          {/* Estatísticas principais */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {logicalData.map((data, index) => {
              const Icon = data.icon;
              return (
                <div 
                  key={index}
                  className="scroll-reveal"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="glass-card neon-border rounded-3xl p-8 text-center hover:scale-105 transition-all">
                    <div className={`w-20 h-20 rounded-2xl accent-gradient flex items-center justify-center mx-auto mb-6`}>
                      <Icon className="w-10 h-10 text-accent-foreground" />
                    </div>
                    <p className="font-display text-5xl lg:text-6xl font-bold text-gradient-accent mb-4">
                      {data.value}
                    </p>
                    <p className="text-lg text-muted-foreground font-medium leading-tight">
                      {data.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Provas Sociais e Legais */}
          <div className="grid md:grid-cols-2 gap-8 scroll-reveal">
            {/* Respaldo Legal */}
            <div className="glass-card border-2 border-accent/30 rounded-3xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl accent-gradient flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-2">Respaldo Legal</h3>
                  <p className="text-muted-foreground">Legislação clara e jurisprudência consolidada</p>
                </div>
              </div>
              <div className="space-y-3">
                {proofs.map((proof, index) => (
                  <p key={index} className="text-foreground font-medium">
                    {proof}
                  </p>
                ))}
              </div>
            </div>

            {/* Caso Real */}
            <div className="glass-card border-2 border-accent/30 rounded-3xl p-8 bg-gradient-to-br from-accent/5 to-transparent">
              <h3 className="font-display font-bold text-2xl text-foreground mb-6">Caso Real de Sucesso</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 rounded-xl bg-destructive/10">
                  <span className="text-muted-foreground">Valor pago:</span>
                  <span className="font-display font-bold text-xl text-destructive">R$ 48.000</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-primary/10">
                  <span className="text-muted-foreground">Valor correto:</span>
                  <span className="font-display font-bold text-xl text-foreground">R$ 36.000</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-accent/20 border-2 border-accent/50">
                  <span className="text-accent font-bold">Recuperado:</span>
                  <span className="font-display font-bold text-2xl text-accent">R$ 12.000</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 italic">
                Cliente da região Sul, processo judicial de 8 meses, sentença favorável em 1ª instância.
              </p>
            </div>
          </div>

          {/* CTA Lógico */}
          <div className="mt-16 scroll-reveal text-center">
            <div className="glass-card neon-border rounded-3xl p-10 max-w-3xl mx-auto">
              <p className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Os dados provam: <span className="text-accent">você tem direito</span>
              </p>
              <p className="text-lg text-muted-foreground">
                Mais de 500 clientes já recuperaram seu dinheiro com nossa assessoria jurídica especializada
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
