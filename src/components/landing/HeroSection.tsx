import { AlertTriangle, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image com parallax */}
      <div className="hero-background absolute inset-0" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop)',
      }} />

      {/* Overlay escuro */}
      <div className="hero-overlay" />

      {/* Glow orbs sutis */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="glow-orb absolute top-20 -left-20 w-96 h-96 bg-red-600" style={{ animationDelay: '0s' }} />
        <div className="glow-orb absolute bottom-10 -right-20 w-80 h-80 bg-red-500" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          {/* Alerta */}
          <div className="scroll-reveal inline-flex items-center gap-3 px-6 py-3 rounded-full bg-red-600/20 border border-red-500/40 text-red-500 backdrop-blur-sm animate-fade-up">
            <AlertTriangle className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-wider">
              Atenção: Você pode estar perdendo dinheiro
            </span>
          </div>

          {/* Headline */}
          <h1 className="scroll-reveal text-5xl sm:text-6xl lg:text-8xl font-extrabold leading-[1.1] tracking-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-white drop-shadow-2xl">
              Recupere até
            </span>{" "}
            <span className="block mt-2 text-red-600 drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]">
              R$45 mil
            </span>
            <span className="block mt-2 text-white/90 drop-shadow-2xl">
              em tarifas bancárias indevidas
            </span>
          </h1>

          {/* Subheadline */}
          <p className="scroll-reveal text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Descubra como milhares de clientes estão recuperando valores cobrados ilegalmente
            pelos bancos através de uma análise gratuita e sem compromisso
          </p>

          {/* Video Section */}
          <div className="scroll-reveal max-w-5xl mx-auto mt-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group border-4 border-red-600/30">
              <iframe
                src="https://drive.google.com/file/d/1J9KE3bos0BbckYXoT93EOw2TVLNa1kx8/preview"
                className="absolute inset-0 w-full h-full"
                allow="autoplay"
                allowFullScreen
              ></iframe>

              {/* Border glow */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none ring-1 ring-white/10 group-hover:ring-red-500/50 transition-all duration-500"></div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="scroll-reveal flex flex-col sm:flex-row gap-5 justify-center items-center mt-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a href="#calculadora">
              <Button
                size="lg"
                className="px-10 py-7 text-lg font-bold rounded-full bg-red-600 hover:bg-red-700 text-white shadow-[0_10px_40px_rgba(220,38,38,0.4)] hover:shadow-[0_15px_50px_rgba(220,38,38,0.6)] hover:scale-105 transition-all duration-300 group border-0"
              >
                <span>Verificar Meus Direitos Gratuitamente</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </a>

            <a href="#calculadora">
              <Button
                size="lg"
                variant="outline"
                className="px-10 py-7 text-lg font-bold rounded-full bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
              >
                Calcular Meu Valor
              </Button>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="scroll-reveal flex flex-wrap justify-center gap-12 mt-20 pt-20 border-t border-white/10 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="text-center">
              <p className="text-4xl font-black text-red-500 drop-shadow-lg">+10 mil</p>
              <p className="text-sm text-gray-300 mt-1 font-medium">Clientes Atendidos</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-red-500 drop-shadow-lg">R$120M+</p>
              <p className="text-sm text-gray-300 mt-1 font-medium">Recuperados</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-red-500 drop-shadow-lg">98%</p>
              <p className="text-sm text-gray-300 mt-1 font-medium">Taxa de Sucesso</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient fade para próxima seção */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
    </section>
  );
}
