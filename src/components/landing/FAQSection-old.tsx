import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Quanto custa a análise?",
    answer: "A verificação inicial na calculadora é totalmente gratuita. Os honorários advocatícios são discutidos apenas após confirmarmos que você tem direito à revisão, de forma transparente e justa."
  },
  {
    question: "Quanto tempo demora o processo?",
    answer: "A análise inicial do contrato leva de 1 a 2 dias úteis. O processo judicial completo varia de 6 a 12 meses, dependendo do caso e do tribunal. Acompanhamos você em cada etapa."
  },
  {
    question: "E se eu ainda estiver pagando o financiamento?",
    answer: "Sem problema! Podemos revisar tanto contratos que ainda estão ativos quanto aqueles já quitados. Na verdade, contratos em andamento permitem economia imediata nas parcelas futuras."
  },
  {
    question: "Preciso ir ao escritório pessoalmente?",
    answer: "Não! Todo o processo é 100% online. Desde a análise inicial até a conclusão do processo, você não precisa sair de casa. Atendemos clientes de todo o Brasil."
  },
  {
    question: "Posso perder o carro durante o processo?",
    answer: "NÃO! A revisão contratual não afeta a posse do seu veículo. O processo visa apenas ajustar os valores cobrados indevidamente, não há risco de perder seu bem."
  },
  {
    question: "O que acontece se o banco não aceitar revisar?",
    answer: "Se houver resistência do banco, seguimos com a ação judicial. A lei e a jurisprudência estão do seu lado quando há comprovação de juros abusivos."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 lg:py-28 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4" />
              Tire suas dúvidas
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Perguntas Frequentes
            </h2>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl bg-card border border-border overflow-hidden card-shadow"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-secondary/50 transition-colors text-left">
                  <span className="font-display font-semibold text-foreground">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
