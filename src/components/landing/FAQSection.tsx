import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Plus } from "lucide-react";

const faqs = [
  {
    question: "Quanto custa a análise inicial?",
    answer: "A análise inicial é 100% GRATUITA. Não cobramos nada para verificar se você tem direito à recuperação. Honorários só são discutidos após confirmarmos valores a recuperar."
  },
  {
    question: "Quanto tempo demora o processo?",
    answer: "A análise inicial do contrato leva 24-48h. O processo judicial completo varia de 6 a 12 meses, dependendo do caso. Você acompanha tudo em tempo real através do nosso portal."
  },
  {
    question: "E se eu ainda estiver pagando o financiamento?",
    answer: "Perfeito! Contratos ativos são ideais porque além de recuperar o que já pagou a mais, você também economiza nas parcelas futuras com a redução dos juros."
  },
  {
    question: "Preciso ir ao escritório pessoalmente?",
    answer: "NÃO! Todo o processo é 100% online. Desde a análise até a conclusão, você não precisa sair de casa. Atendemos clientes de todo o Brasil virtualmente."
  },
  {
    question: "Posso perder o carro ou bem financiado?",
    answer: "JAMAIS! A revisão contratual não afeta a posse do seu bem. O processo visa apenas ajustar valores cobrados indevidamente. Seu patrimônio está 100% protegido."
  },
  {
    question: "O banco pode me colocar na lista negativa?",
    answer: "NÃO! Você tem direito legal à revisão contratual. O banco não pode prejudicar seu nome por exercer seus direitos como consumidor. Isso é garantido por lei."
  },
  {
    question: "E se o banco não aceitar revisar?",
    answer: "Seguimos com ação judicial. Com comprovação técnica de juros abusivos, a lei e a jurisprudência estão do seu lado. Nossa taxa de sucesso é de 98%."
  },
  {
    question: "Quanto posso recuperar?",
    answer: "Em média, nossos clientes recuperam entre R$ 8 mil e R$ 45 mil. O valor exato depende do tipo de contrato, taxa de juros aplicada e tempo de pagamento."
  }
];

export function FAQSection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(45deg, rgba(220,38,38,0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(220,38,38,0.1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(220,38,38,0.1) 75%), linear-gradient(-45deg, transparent 75%, rgba(220,38,38,0.1) 75%)',
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 scroll-reveal space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-500/30 text-red-500 mb-4">
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wide">Dúvidas Frequentes</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Perguntas<br />
              <span className="text-red-600">Frequentes</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Tudo o que você precisa saber sobre o processo de recuperação
            </p>
          </div>

          {/* Accordion */}
          <div className="scroll-reveal space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-none"
                >
                  <div className="rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-white/5 hover:border-red-500/30 transition-all duration-300 overflow-hidden">
                    <AccordionTrigger className="px-8 py-6 hover:no-underline text-left group [&[data-state=open]]:bg-red-600/5">
                      <div className="flex items-start gap-4 w-full pr-4">
                        <div className="w-10 h-10 rounded-xl bg-red-600/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/20 transition-colors">
                          <Plus className="w-5 h-5 text-red-500 group-data-[state=open]:rotate-45 transition-transform duration-300" />
                        </div>
                        <span className="font-bold text-white text-lg leading-tight group-hover:text-red-500 transition-colors flex-1">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-6">
                      <div className="pl-14">
                        <p className="text-gray-300 leading-relaxed text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 scroll-reveal">
            <div className="p-10 rounded-3xl bg-gradient-to-br from-red-600/10 to-red-900/10 border border-red-500/30 backdrop-blur-sm">
              <p className="text-2xl font-bold text-white mb-4">
                Ainda tem dúvidas?
              </p>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Nossa equipe está pronta para esclarecer todas as suas questões e ajudá-lo a recuperar seu dinheiro
              </p>
              <a 
                href="#calculadora"
                className="inline-flex items-center gap-3 px-10 py-5 bg-red-600 hover:bg-red-700 text-white text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-[0_10px_40px_rgba(220,38,38,0.4)] hover:shadow-[0_15px_50px_rgba(220,38,38,0.6)]"
              >
                <span>Falar com Especialista</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
