import { Heart, XCircle, DollarSign, TrendingDown } from "lucide-react";

export function ProblemSection() {
  const emotionalPoints = [
    {
      icon: Heart,
      title: "Ansiedade e Estresse",
      description: "Noites sem dormir pensando nas dívidas que só aumentam, sem saber o que fazer"
    },
    {
      icon: XCircle,
      title: "Sensação de Impotência",
      description: "Ver seu dinheiro sendo drenado pelos bancos, sem conseguir reagir"
    },
    {
      icon: DollarSign,
      title: "Prejuízo Financeiro Real",
      description: "Milhares de reais perdidos que poderiam estar realizando seus sonhos"
    },
    {
      icon: TrendingDown,
      title: "Futuro Comprometido",
      description: "Planos adiados, família prejudicada, enquanto os bancos lucram cada vez mais"
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      {/* Dramatic background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20 scroll-reveal space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-500/30 text-red-500 mb-4">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wide">A Dor Real dos Brasileiros</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Você Não Está<br />
              <span className="text-red-600">Sozinho Nessa Luta</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Milhões de brasileiros sofrem diariamente com cobranças abusivas.
              A dor é real, mas a solução também é.
            </p>
          </div>

          {/* Emotional Pain Points Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {emotionalPoints.map((point, index) => (
              <div 
                key={index}
                className="scroll-reveal group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-white/5 backdrop-blur-sm hover:border-red-500/30 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(220,38,38,0.2)]">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-red-600/10 flex items-center justify-center group-hover:bg-red-600/20 transition-colors duration-300 ring-1 ring-red-500/20">
                      <point.icon className="w-7 h-7 text-red-500" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                    {point.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Story Case - Maria */}
          <div className="scroll-reveal max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 p-12 shadow-2xl">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-600/20 to-transparent rounded-bl-full blur-2xl"></div>
              
              <div className="relative z-10 space-y-8">
                {/* Quote mark */}
                <svg className="w-16 h-16 text-red-600/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>

                {/* Story */}
                <div className="space-y-4">
                  <p className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                    "Eu nem sabia que estava pagando <span className="text-red-500">R$ 18.600</span> a mais no meu financiamento..."
                  </p>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Maria, 42 anos, professora, descobriu através da análise gratuita que vinha pagando 
                    <span className="text-white font-semibold"> juros abusivos há 5 anos</span>. 
                    Hoje, ela já recuperou todo esse valor e conseguiu quitar sua dívida 
                    <span className="text-red-500 font-semibold"> 3 anos mais cedo</span>.
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600/30 to-red-900/30 flex items-center justify-center text-2xl font-bold text-white ring-2 ring-red-500/30">
                    M
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">Maria Silva</p>
                    <p className="text-sm text-gray-400">São Paulo, SP • Cliente desde 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-16 scroll-reveal">
            <p className="text-xl text-gray-300 mb-8">
              Não deixe isso acontecer com você. <span className="text-white font-bold">Descubra agora se você também está sendo prejudicado.</span>
            </p>
            
            <a 
              href="#calculadora"
              className="inline-flex items-center gap-3 px-10 py-5 bg-red-600 hover:bg-red-700 text-white text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-[0_10px_40px_rgba(220,38,38,0.4)] hover:shadow-[0_15px_50px_rgba(220,38,38,0.6)]"
            >
              <span>Fazer Análise Gratuita Agora</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
