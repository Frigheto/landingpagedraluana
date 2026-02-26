import { Shield, TrendingUp, Award, CheckCircle2, FileText, Landmark } from "lucide-react";

export function CredibilitySection() {
  const stats = [
    { value: "70%", label: "Taxa de Sucesso em Ações", icon: TrendingUp },
    { value: "R$ 12 mil", label: "Valor Médio Recuperado", icon: Award },
    { value: "98%", label: "Clientes Satisfeitos", icon: Shield }
  ];

  const legalProofs = [
    {
      title: "Resolução 3.518 do BACEN",
      description: "Proíbe cobranças indevidas de seguros",
      icon: FileText
    },
    {
      title: "Súmula 381 do STJ",
      description: "Garante devolução em dobro de valores indevidos",
      icon: Landmark
    },
    {
      title: "CDC Art. 42",
      description: "Protege consumidor contra cobranças abusivas",
      icon: Shield
    }
  ];

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(0deg, rgba(220,38,38,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20 scroll-reveal space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-500/30 text-red-500 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wide">Comprovação Científica</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Os Números<br />
              <span className="text-red-600">Não Mentem</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Dados reais, comprovados juridicamente, que garantem seus direitos.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="scroll-reveal relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-red-900/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative h-full p-10 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 hover:border-red-500/30 transition-all duration-500 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-600/10 mb-6 ring-1 ring-red-500/20">
                    <stat.icon className="w-8 h-8 text-red-500" />
                  </div>
                  
                  <p className="text-5xl font-black text-white mb-3 drop-shadow-lg">
                    {stat.value}
                  </p>
                  <p className="text-gray-400 font-medium leading-tight">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Legal Backing */}
          <div className="scroll-reveal mb-20">
            <h3 className="text-3xl font-black text-white text-center mb-12">
              Respaldo <span className="text-red-600">Legal Garantido</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {legalProofs.map((proof, index) => (
                <div 
                  key={index}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-white/5 hover:border-red-500/30 transition-all duration-500 hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/20 transition-colors duration-300">
                      <proof.icon className="w-6 h-6 text-red-500" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="font-bold text-white leading-tight">
                        {proof.title}
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {proof.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real Case Example */}
          <div className="scroll-reveal">
            <div className="relative overflow-hidden rounded-3xl">
              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-red-500/10 to-transparent"></div>
              
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 p-12">
                <div className="max-w-4xl mx-auto">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600/10 border border-green-500/30 text-green-500 mb-8">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-sm font-bold uppercase tracking-wide">Caso Real Recente</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Antes/Depois */}
                    <div className="space-y-8">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-2 h-2 rounded-full bg-red-500"></div>
                          <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Antes</h4>
                        </div>
                        <p className="text-3xl font-black text-white">
                          Pagava <span className="text-red-600">R$ 12.000</span>
                        </p>
                        <p className="text-gray-400 mt-2">em juros abusivos sobre financiamento</p>
                      </div>

                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Depois</h4>
                        </div>
                        <p className="text-3xl font-black text-white">
                          Recuperou <span className="text-green-500">R$ 12.000</span>
                        </p>
                        <p className="text-gray-400 mt-2">+ redução de 40% nas parcelas futuras</p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-6">
                      <p className="text-lg text-gray-300 leading-relaxed">
                        <span className="font-bold text-white">Carlos Silva</span>, empresário de 45 anos, 
                        conseguiu recuperar todo o valor pago indevidamente em apenas 
                        <span className="text-red-500 font-bold"> 6 meses de processo</span>.
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-gray-400">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>Processo 100% online</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>Sem custos iniciais</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>Acompanhamento em tempo real</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 scroll-reveal">
            <p className="text-xl text-gray-300 mb-8">
              <span className="text-white font-bold">Você também pode ter esse resultado.</span> Comece agora sua análise gratuita.
            </p>
            
            <a 
              href="#calculadora"
              className="inline-flex items-center gap-3 px-10 py-5 bg-red-600 hover:bg-red-700 text-white text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-[0_10px_40px_rgba(220,38,38,0.4)] hover:shadow-[0_15px_50px_rgba(220,38,38,0.6)]"
            >
              <span>Verificar Meus Direitos Gratuitamente</span>
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
