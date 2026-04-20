import { FileSearch, Users, Scale, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    number: "1",
    title: "Análise Detalhada",
    description: "Você me envia o contrato completo. Analiso com ferramentas especializadas para identificar todas as irregularidades."
  },
  {
    icon: Users,
    number: "2",
    title: "Reunião de Alinhamento",
    description: "Explico os valores encontrados e mostro quanto você pode economizar. Tudo sem compromisso."
  },
  {
    icon: Scale,
    number: "3",
    title: "Ação Judicial",
    description: "Entramos com pedido de revisão contratual. Acompanhamento completo até a conclusão do processo."
  },
  {
    icon: PartyPopper,
    number: "4",
    title: "Resultado",
    description: "Redução das parcelas futuras e/ou devolução dos valores pagos a mais durante o contrato."
  }
];

export function ProcessSection() {
  return (
    <section id="como-funciona" className="py-20 lg:py-28 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/50" />
      
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Transparência total
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Como Funciona a Revisão?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um processo simples, 100% online, com acompanhamento em cada etapa
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              
              <div className="relative p-6 rounded-2xl bg-card border border-border card-shadow hover:border-primary/30 transition-colors h-full">
                {/* Number badge */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full accent-gradient flex items-center justify-center font-display font-bold text-accent-foreground text-sm">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
