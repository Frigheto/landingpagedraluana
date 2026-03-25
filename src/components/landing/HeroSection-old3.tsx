import { Button } from "@/components/ui/button";
import { AlertTriangle, ChevronDown, Scale } from "lucide-react";

interface HeroSectionProps {
  onScrollToCalculator: () => void;
}

export function HeroSection({ onScrollToCalculator }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden flex items-center">
      {/* Animated background orbs */}
      <div className="glow-orb absolute top-20 left-10 w-96 h-96 bg-accent/20" style={{ animationDelay: '0s' }} />
      <div className="glow-orb absolute bottom-20 right-10 w-80 h-80 bg-primary/20" style={{ animationDelay: '2s' }} />
      
      {/* Decorative grid */}
      <div className="absolute inset-0 decorative-dots opacity-20" />
      
      <div className="container relative z-10 py-20">
        {/* Header minimalista */}
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl neon-border accent-gradient flex items-center justify-center">
              <Scale className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <h2 className="font-display font-bold text-xl text-foreground">Luana Fernandes</h2>
              <p className="text-xs text-muted-foreground">Advocacia Jurídica</p>
            </div>
          </div>
        </header>

        {/* FRIGHETO: ALERTA + HEADLINE + SUBHEADLINE */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* 1. ALERTA INICIAL - Despertar atenção */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-destructive/20 border-2 border-destructive/50 animate-fade-up">
            <AlertTriangle className="w-5 h-5 text-destructive animate-pulse" />
            <span className="text-destructive font-bold text-base">ATENÇÃO: Você pode estar perdendo dinheiro agora mesmo!</span>
          </div>

          {/* 2. HEADLINE - Promessa clara e direta */}
          <div className="space-y-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight">
              <span className="text-foreground">Descubra se Você Está Pagando</span>
              <br />
              <span className="text-gradient-accent inline-block">ATÉ 60% A MAIS</span>
              <br />
              <span className="text-foreground">no Seu Financiamento</span>
            </h1>
            
            {/* 3. SUBHEADLINE - Explicação e benefício */}
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
              Milhares de brasileiros pagam <span className="text-foreground font-bold">juros abusivos</span> sem saber.
              <br />
              <span className="text-accent font-bold">Você pode recuperar esse dinheiro.</span>
            </p>
          </div>

          {/* CTA Principal */}
          <div className="animate-fade-up pt-4" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg"
              onClick={onScrollToCalculator}
              className="group neon-border accent-gradient text-xl px-10 py-7 h-auto font-bold hover:scale-105 transition-all shadow-2xl"
            >
              VERIFICAR MEU CONTRATO AGORA
              <ChevronDown className="w-6 h-6 ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">✓ Análise gratuita em 30 segundos • ✓ Sem compromisso</p>
          </div>

          {/* 4. IMAGEM/VÍDEO - Espaço para vídeo de apresentação */}
          <div className="mt-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="glass-card neon-border rounded-3xl p-4 max-w-4xl mx-auto">
              {/* Placeholder para VÍDEO - Substituir por iframe ou video tag */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 decorative-dots opacity-10" />
                <div className="text-center space-y-4 relative z-10">
                  <div className="w-20 h-20 rounded-full bg-accent/30 flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="font-display font-bold text-2xl text-foreground">Vídeo Explicativo</p>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Assista e entenda como você pode estar perdendo dinheiro no seu financiamento
                  </p>
                  <p className="text-sm text-accent font-medium">
                    ▶ Clique para assistir (substituir por vídeo real)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-accent/50" />
        </div>
      </div>
    </section>
  );
}
