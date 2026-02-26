import { MapPin, Phone, Mail, Instagram, Scale, Car } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 lg:py-16 bg-card border-t border-border">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full accent-gradient flex items-center justify-center">
                <Car className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="font-display font-bold text-lg text-foreground">
                Revisional Veicular
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-sm">
              Especialistas em revisão de contratos de financiamento. Defendemos seus direitos contra juros abusivos.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Scale className="w-4 h-4" />
              <span>Atuação ética em conformidade com o Código de Ética da OAB</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+5551999999999" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (51) 99999-9999
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contato@draluanaadvogada.com.br" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contato@draluanaadvogada.com.br
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/draluanaadvogada" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  @draluanaadvogada
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Escritório</h3>
            <div className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
              <p>
                Dra. Luana Fernandes de Almeida<br />
                OAB/RS 00.000<br />
                Porto Alegre, RS
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Dra. Luana Fernandes de Almeida. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
