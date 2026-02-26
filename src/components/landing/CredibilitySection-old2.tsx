import { Award, Scale, Users, TrendingUp } from "lucide-react";

const stats = [
  { value: "+500", label: "Casos de Sucesso", icon: Users },
  { value: "R$ 2M+", label: "Recuperados", icon: TrendingUp },
  { value: "98%", label: "Taxa de Aprovação", icon: Award }
];

export function CredibilitySection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="glow-orb absolute top-1/2 left-1/4 w-96 h-96 bg-accent/10" style={{ animationDelay: '1s' }} />
      
      <div className="container relative z-10">
        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="scroll-reveal group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass-card neon-border rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl accent-gradient flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <p className="font-display text-5xl font-bold text-gradient-accent mb-3">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 scroll-reveal">
            <div className="glass-card rounded-2xl p-8 flex items-center gap-6 hover:scale-105 transition-all">
              <div className="w-16 h-16 rounded-xl accent-gradient flex items-center justify-center flex-shrink-0">
                <Award className="w-8 h-8 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground mb-1">OAB/RS Ativo</h3>
                <p className="text-sm text-muted-foreground">Registro profissional regularizado</p>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8 flex items-center gap-6 hover:scale-105 transition-all">
              <div className="w-16 h-16 rounded-xl accent-gradient flex items-center justify-center flex-shrink-0">
                <Scale className="w-8 h-8 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground mb-1">Especialização</h3>
                <p className="text-sm text-muted-foreground">Direito Bancário e do Consumidor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
