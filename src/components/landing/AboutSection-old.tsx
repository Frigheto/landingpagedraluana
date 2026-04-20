import { Award, Scale, CheckCircle, TrendingUp } from "lucide-react";

const achievements = [
  {
    title: "Ação contra Banco Santander",
    value: "R$ 45.000",
    description: "Juros abusivos reduzidos em 40%, cliente recuperou valor pago a mais"
  },
  {
    title: "Revisional Banco do Brasil",
    value: "R$ 32.000",
    description: "Tarifas indevidas e IOF irregular, devolução em dobro"
  },
  {
    title: "Caso Itaú Financiamentos",
    value: "R$ 28.000",
    description: "Taxa de juros acima do permitido pelo BACEN, redução de 35%"
  }
];

export function AboutSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" id="sobre">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="glow-orb absolute top-1/2 right-1/4 w-96 h-96 bg-accent/10" style={{ animationDelay: '1.5s' }} />
      
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 scroll-reveal">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-sm mb-6">
              <Scale className="w-4 h-4 text-accent" />
              <span className="text-accent font-bold">ESPECIALISTA EM DIREITO BANCÁRIO</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
              Conheça a
              <br />
              <span className="text-gradient-accent">Dra. Luana Fernandes</span>
            </h2>
          </div>

          {/* Conteúdo principal - Foto e Apresentação */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 scroll-reveal">
            
            {/* Foto da Dra. Luana */}
            <div className="relative">
              <div className="glass-card neon-border rounded-3xl p-4 relative overflow-hidden">
                {/* Placeholder para foto - Substituir por imagem real */}
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 rounded-2xl flex items-center justify-center relative">
                  <div className="absolute inset-0 decorative-dots opacity-20" />
                  <div className="text-center space-y-4 relative z-10">
                    <div className="w-32 h-32 rounded-full bg-accent/30 flex items-center justify-center mx-auto">
                      <Scale className="w-16 h-16 text-accent" />
                    </div>
                    <p className="font-display font-bold text-2xl text-foreground">Dra. Luana Fernandes</p>
                    <p className="text-muted-foreground">Foto Profissional</p>
                    <p className="text-sm text-accent">(Substituir por foto real)</p>
                  </div>
                </div>
              </div>

              {/* Badge de destaque */}
              <div className="absolute -bottom-6 -right-6 glass-card neon-border rounded-2xl p-6 bg-background">
                <p className="font-display text-3xl font-bold text-accent">+500</p>
                <p className="text-sm text-muted-foreground">Casos Vencidos</p>
              </div>
            </div>

            {/* Apresentação */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-display text-3xl font-bold text-foreground">
                  Advogada Especialista em Defender Seus Direitos
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Com mais de <span className="text-foreground font-bold">10 anos de experiência</span> em Direito Bancário e do Consumidor, 
                  a Dra. Luana Fernandes dedica sua carreira a combater abusos das instituições financeiras.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Formada pela <span className="text-foreground font-bold">Universidade Federal do Rio Grande do Sul</span>, 
                  com especialização em Direito Bancário e pós-graduação em Direito do Consumidor, 
                  já recuperou <span className="text-accent font-bold">mais de R$ 2 milhões</span> para seus clientes.
                </p>
              </div>

              {/* Credenciais */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card rounded-xl p-4 border border-accent/30">
                  <Award className="w-8 h-8 text-accent mb-2" />
                  <p className="font-bold text-foreground">OAB/RS Ativa</p>
                  <p className="text-sm text-muted-foreground">Registro profissional</p>
                </div>
                <div className="glass-card rounded-xl p-4 border border-accent/30">
                  <CheckCircle className="w-8 h-8 text-accent mb-2" />
                  <p className="font-bold text-foreground">98% Sucesso</p>
                  <p className="text-sm text-muted-foreground">Taxa de vitórias</p>
                </div>
              </div>
            </div>
          </div>

          {/* Casos de Sucesso */}
          <div className="scroll-reveal">
            <div className="text-center mb-10">
              <h3 className="font-display text-3xl font-bold text-foreground mb-4">
                Alguns Processos Vencidos
              </h3>
              <p className="text-muted-foreground">
                Casos reais que recuperaram milhares de reais para nossos clientes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="glass-card border-2 border-accent/30 rounded-2xl p-6 hover:scale-105 transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-lg text-foreground leading-tight">
                        {achievement.title}
                      </h4>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="font-display text-3xl font-bold text-accent">
                      {achievement.value}
                    </p>
                    <p className="text-sm text-muted-foreground">recuperados</p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
