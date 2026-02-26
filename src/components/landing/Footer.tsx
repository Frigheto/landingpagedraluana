import { MapPin, Phone, Mail, Instagram, Scale, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-20 bg-black border-t border-white/10">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-black text-xl text-white">Dra. Luana Fernandes</h3>
                <p className="text-sm text-gray-400">Advocacia Especializada</p>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed max-w-md">
              Especialistas em Direito do Consumidor e Bancário. Atuamos na recuperação de valores cobrados indevidamente por instituições financeiras.
            </p>

            <div className="flex items-start gap-2 text-sm text-gray-500 p-4 rounded-xl bg-white/5 border border-white/10">
              <Scale className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-500" />
              <span>Atuação ética em conformidade com o Código de Ética da OAB</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://wa.me/5545999504244" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-red-600/10 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>(45) 99950-4244</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:luanafernandesa.adv@gmail.com" 
                  className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-red-600/10 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-sm">luanafernandesa.adv@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-sm">Rua Antonina, 1244<br />Centro - Cascavel, PR<br />Atendimento Online em Todo Brasil</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#calculadora" className="text-gray-400 hover:text-red-500 transition-colors">
                  Calcular Valor
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-gray-400 hover:text-red-500 transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-red-500 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com/advogadaluanafa?igshid=YmMyMTA2M2Y=" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://facebook.com/draluanaadvogada" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/draluanaadvogada" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Dra. Luana Fernandes Advocacia.
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Todos os direitos reservados. OAB/RS 00000
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10">
          <p className="text-xs text-gray-500 leading-relaxed text-center">
            <strong className="text-gray-400">Aviso Legal:</strong> Este site não oferece garantia de resultado. 
            Os valores mencionados são exemplos baseados em casos reais, mas cada situação é única e será analisada individualmente. 
            A contratação de serviços advocatícios é uma decisão pessoal e deve ser tomada após análise cuidadosa.
          </p>
        </div>
      </div>
    </footer>
  );
}
