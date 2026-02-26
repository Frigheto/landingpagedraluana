import { Award, Scale, Users } from "lucide-react";

export function AboutSection() {
  const achievements = [
    { bank: "Santander", value: "R$ 45.000", icon: Award },
    { bank: "Banco do Brasil", value: "R$ 32.000", icon: Scale },
    { bank: "Itaú", value: "R$ 28.000", icon: Users },
  ];

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Foto da Dra. Luana */}
            <div className="scroll-reveal order-2 lg:order-1">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-br from-red-600/20 to-red-900/20 rounded-3xl blur-2xl"></div>

                {/* Image container */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                  <img
                    src="/dra-luana.jpg"
                    alt="Dra. Luana Fernandes"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Overlay gradiente suave na base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Selo de experiência */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-600 rounded-full flex items-center justify-center shadow-2xl ring-4 ring-black">
                  <div className="text-center">
                    <p className="text-3xl font-black text-white">10+</p>
                    <p className="text-xs text-white/90 font-medium">Anos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="scroll-reveal space-y-8 order-1 lg:order-2">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-500/30 text-red-500">
                <Scale className="w-4 h-4" />
                <span className="text-sm font-bold uppercase tracking-wide">Especialista em Direito Bancário</span>
              </div>

              {/* Título */}
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                  Dra. Luana<br />
                  <span className="text-red-600">Fernandes</span>
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-red-900 rounded-full"></div>
              </div>

              {/* Descrição */}
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Advogada especializada em <span className="text-white font-semibold">Direito do Consumidor e Bancário</span>, com mais de uma década de experiência na recuperação de valores cobrados indevidamente por instituições financeiras.
                </p>
                <p>
                  Responsável por recuperar <span className="text-red-500 font-bold">mais de R$ 120 milhões</span> para seus clientes em todo o Brasil, garantindo justiça e dignidade financeira.
                </p>
              </div>

              {/* Achievements cards */}
              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-6 border border-white/5 hover:border-red-500/30 transition-all duration-500 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10 space-y-3">
                      <achievement.icon className="w-8 h-8 text-red-500" />
                      <div>
                        <p className="text-2xl font-black text-white">{achievement.value}</p>
                        <p className="text-sm text-gray-400 font-medium">{achievement.bank}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-6">
                <a
                  href="#calculadora"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-[0_10px_40px_rgba(220,38,38,0.3)] hover:shadow-[0_15px_50px_rgba(220,38,38,0.5)]"
                >
                  <span>Verificar Meus Direitos Agora</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
