import { Clock, AlertTriangle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UrgencySectionProps {
  onScrollToCalculator: () => void;
}

export function UrgencySection({ onScrollToCalculator }: UrgencySectionProps) {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background with urgency feel */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-destructive/10 to-accent/10" />
      
      {/* Animated border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 text-destructive text-sm font-medium mb-6 animate-pulse">
            <Clock className="w-4 h-4" />
            Prazo Prescricional
          </div>

          {/* Main content */}
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Você tem até <span className="text-accent">10 ANOS</span> após a quitação para pedir revisão
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contratos antigos podem <strong className="text-destructive">PERDER o direito</strong> à revisão. Cada mês que passa é dinheiro que você deixa na mesa.
          </p>

          {/* Warning boxes */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-card border border-border flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground text-left">
                Contratos de <strong className="text-foreground">2014 ou antes</strong> podem já estar prescrevendo
              </p>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border flex items-start gap-3">
              <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground text-left">
                Não deixe seu dinheiro com o banco - <strong className="text-foreground">verifique agora</strong>
              </p>
            </div>
          </div>

          {/* CTA */}
          <Button 
            variant="hero" 
            size="xl" 
            onClick={onScrollToCalculator}
            className="animate-pulse-slow"
          >
            Verificar Meu Contrato Agora
          </Button>
        </div>
      </div>
    </section>
  );
}
