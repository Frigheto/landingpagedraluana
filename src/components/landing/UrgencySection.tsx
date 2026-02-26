import { Clock, AlertTriangle, TrendingDown, Zap } from "lucide-react";

export function UrgencySection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-black to-gray-950 overflow-hidden">
      {/* Animated danger glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/20 rounded-full blur-[150px] animate-pulse"></div>
      </div>

      {/* Animated border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Alert Badge */}
          <div className="flex justify-center mb-12 scroll-reveal">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-red-600/20 border-2 border-red-500/50 text-red-500 animate-pulse">
              <Clock className="w-6 h-6" />
              <span className="text-base font-black uppercase tracking-wider">
                ⚠️ PRAZO PRESCRICIONAL ATIVO
              </span>
            </div>
          </div>

          {/* Main heading */}
          <div className="text-center mb-16 scroll-reveal space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1]">
              <span className="block text-gray-400 text-2xl sm:text-3xl mb-4">Você tem até</span>
              <span className="block text-red-600 drop-shadow-[0_0_40px_rgba(220,38,38,0.6)]">
                10 ANOS
              </span>
              <span className="block mt-4 text-3xl sm:text-4xl lg:text-5xl">
                para recuperar seu dinheiro
              </span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Depois disso, você <span className="text-red-500 font-black">PERDE O DIREITO</span> de reaver 
              os valores pagos indevidamente. Não deixe isso acontecer.
            </p>
          </div>

          {/* Warning Grid */}
          <div className="grid sm:grid-cols-3 gap-6 mb-16 scroll-reveal">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-red-500/30 hover:border-red-500/60 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-colors">
                <Clock className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-black text-white mb-3">
                Tempo Correndo
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Contratos de <span className="text-white font-bold">2014 ou antes</span> podem já estar prescrevendo
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-red-500/30 hover:border-red-500/60 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-colors">
                <TrendingDown className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-black text-white mb-3">
                Dinheiro Perdido
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Cada mês que passa é <span className="text-white font-bold">dinheiro deixado na mesa</span> dos bancos
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-red-500/30 hover:border-red-500/60 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-colors">
                <AlertTriangle className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-black text-white mb-3">
                Direito Expira
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Uma vez prescrito, você <span className="text-white font-bold">perde permanentemente</span> o direito
              </p>
            </div>
          </div>

          {/* Main CTA Box */}
          <div className="scroll-reveal">
            <div className="relative overflow-hidden rounded-3xl">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-900"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

              <div className="relative p-12 lg:p-16 text-center">
                <Zap className="w-16 h-16 text-white mx-auto mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]" />
                
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                  NÃO PERCA MAIS TEMPO!
                </h3>
                
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Faça sua análise gratuita agora e descubra quanto você pode recuperar 
                  antes que seja tarde demais
                </p>

                <a 
                  href="#calculadora"
                  className="inline-flex items-center gap-3 px-12 py-6 bg-white hover:bg-gray-100 text-red-600 text-xl font-black rounded-full transition-all duration-300 hover:scale-105 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                >
                  <span>VERIFICAR AGORA - É GRÁTIS</span>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>

                <p className="text-white/80 text-sm mt-6 flex items-center justify-center gap-6 flex-wrap">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Resposta em 24h
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    100% Online
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Sem Custo Inicial
                  </span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
