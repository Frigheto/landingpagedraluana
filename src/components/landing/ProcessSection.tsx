import { FileSearch, MessageCircle, Scale, Trophy, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    number: "01",
    title: "Análise Gratuita",
    description: "Envie seus dados através do formulário. Nossa equipe analisa seu contrato em até 24h e identifica todas as cobranças indevidas.",
    color: "from-red-600 to-red-700"
  },
  {
    icon: MessageCircle,
    number: "02",
    title: "Reunião de Alinhamento",
    description: "Apresentamos o relatório completo com os valores encontrados. Você decide se quer prosseguir, sem compromisso.",
    color: "from-red-700 to-red-800"
  },
  {
    icon: Scale,
    number: "03",
    title: "Ação Judicial",
    description: "Entramos com a ação de revisão contratual. Você acompanha todo o processo através do nosso portal exclusivo.",
    color: "from-red-800 to-red-900"
  },
  {
    icon: Trophy,
    number: "04",
    title: "Resultado Garantido",
    description: "Recuperação dos valores pagos indevidamente + redução das parcelas futuras. Seu dinheiro de volta na conta.",
    color: "from-red-900 to-red-950"
  }
];

export function ProcessSection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-900/10 rounded-full blur-[150px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20 scroll-reveal space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-500/30 text-red-500 mb-4">
              <Scale className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wide">Processo Simples</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Como Funciona a<br />
              <span className="text-red-600">Recuperação</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              4 passos simples para você ter seu dinheiro de volta
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative group">
                  {/* Connector line (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute left-[4.5rem] top-32 w-0.5 h-20 bg-gradient-to-b from-red-600/50 to-transparent"></div>
                  )}

                  <div className="relative flex flex-col lg:flex-row gap-8 p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-white/5 hover:border-red-500/30 transition-all duration-500 hover:scale-[1.02] group overflow-hidden">
                    {/* Decorative gradient */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-600/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Icon & Number */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-[0_10px_40px_rgba(220,38,38,0.3)] group-hover:shadow-[0_15px_50px_rgba(220,38,38,0.5)] transition-shadow duration-500 ring-1 ring-red-500/20`}>
                        <step.icon className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-lg">
                        <span className="text-lg font-black text-gray-900">{step.number}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4 relative z-10">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-3xl font-black text-white mb-2 group-hover:text-red-500 transition-colors duration-300">
                            {step.title}
                          </h3>
                          <p className="text-lg text-gray-300 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                        <ArrowRight className="w-6 h-6 text-red-500 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300 flex-shrink-0 mt-2" />
                      </div>

                      {/* Progress indicator */}
                      <div className="pt-4">
                        <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${step.color} transition-all duration-1000`}
                            style={{ width: `${((index + 1) / steps.length) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-20 scroll-reveal">
            <div className="inline-flex flex-col items-center gap-6 p-10 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-red-500/30 max-w-3xl mx-auto">
              <div>
                <p className="text-2xl font-bold text-white mb-2">
                  Pronto para recuperar seu dinheiro?
                </p>
                <p className="text-gray-400">
                  Comece agora sua análise gratuita e sem compromisso
                </p>
              </div>
              
              <a 
                href="#calculadora"
                className="inline-flex items-center gap-3 px-10 py-5 bg-red-600 hover:bg-red-700 text-white text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-[0_10px_40px_rgba(220,38,38,0.4)] hover:shadow-[0_15px_50px_rgba(220,38,38,0.6)]"
              >
                <span>Iniciar Análise Gratuita</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              <div className="flex items-center gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>100% Online</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Sem Custo Inicial</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Resposta em 24h</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
