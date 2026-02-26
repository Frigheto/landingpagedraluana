import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle, MessageCircle, Share2, RotateCcw, Clock } from "lucide-react";

interface FormData {
  tipoOperacao: string;
  valorFinanciado: string;
  valorParcela: string;
  quantidadeParcelas: string;
  dataContratacao: string;
}

interface CalculationResult {
  isAbusive: boolean;
  taxaPraticada: number;
  taxaPermitida: number;
  diferenca: number;
  economiaParcela: number;
  economiaTotal: number;
  formData: FormData;
}

interface CalculatorResultProps {
  result: CalculationResult;
  onReset: () => void;
}

const TIPO_LABELS: Record<string, string> = {
  "financiamento-veiculo": "Financiamento de Veículo",
  "emprestimo-pessoal": "Empréstimo Pessoal",
  "financiamento-imobiliario": "Financiamento Imobiliário",
  "capital-giro": "Capital de Giro"
};

export function CalculatorResult({ result, onReset }: CalculatorResultProps) {
  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  const generateWhatsAppMessage = () => {
    const msg = encodeURIComponent(
      `Olá Dra. Luana!\n\n` +
      `Acabei de verificar meu contrato na calculadora e identificou juros abusivos.\n\n` +
      `Dados do meu contrato:\n` +
      `- Tipo: ${TIPO_LABELS[result.formData.tipoOperacao]}\n` +
      `- Valor financiado: R$ ${result.formData.valorFinanciado}\n` +
      `- Parcela: R$ ${result.formData.valorParcela}\n` +
      `- Quantidade: ${result.formData.quantidadeParcelas} parcelas\n` +
      `- Taxa: ${result.taxaPraticada.toFixed(2)}% ao mês\n\n` +
      `Gostaria de saber mais sobre a revisão!`
    );
    return `https://wa.me/5551999999999?text=${msg}`;
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Calculadora de Juros Abusivos",
          text: "Descubra se você está pagando juros abusivos no seu financiamento!",
          url: window.location.href
        });
      } catch (err) {
        console.log("Erro ao compartilhar:", err);
      }
    }
  };

  if (result.isAbusive) {
    return (
      <div className="max-w-2xl mx-auto animate-fade-up">
        {/* Abusive result card */}
        <div className="p-8 rounded-3xl bg-destructive/10 border-2 border-destructive/30 card-shadow">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-destructive/20">
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Juros Abusivos Identificados!
              </h3>
              <p className="text-muted-foreground">
                Seu contrato apresenta indícios de abusividade
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-card border border-border">
              <p className="text-sm text-muted-foreground mb-1">Taxa praticada</p>
              <p className="font-display text-2xl font-bold text-destructive">
                {result.taxaPraticada.toFixed(2)}%
              </p>
              <p className="text-xs text-muted-foreground">ao mês</p>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border">
              <p className="text-sm text-muted-foreground mb-1">Taxa permitida (BC)</p>
              <p className="font-display text-2xl font-bold text-success">
                {result.taxaPermitida.toFixed(2)}%
              </p>
              <p className="text-xs text-muted-foreground">ao mês</p>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border">
              <p className="text-sm text-muted-foreground mb-1">Diferença</p>
              <p className="font-display text-2xl font-bold text-accent">
                {result.diferenca.toFixed(0)}%
              </p>
              <p className="text-xs text-muted-foreground">acima do permitido</p>
            </div>
          </div>

          {/* Savings */}
          <div className="p-6 rounded-2xl bg-success/10 border border-success/30 mb-8">
            <p className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
              💰 Economia Estimada
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Por parcela</p>
                <p className="font-display text-3xl font-bold text-success">
                  {formatCurrency(result.economiaParcela)}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total do contrato</p>
                <p className="font-display text-3xl font-bold text-success">
                  {formatCurrency(result.economiaTotal)}
                </p>
              </div>
            </div>
          </div>

          {/* Legal right notice */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/30 mb-6">
            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
            <p className="text-foreground font-medium">
              Você TEM DIREITO a revisar este contrato judicialmente
            </p>
          </div>

          {/* WhatsApp CTA */}
          <Button
            variant="whatsapp"
            size="xl"
            className="w-full mb-4"
            asChild
          >
            <a href={generateWhatsAppMessage()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Falar com Advogada Agora
            </a>
          </Button>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Vagas limitadas para análise hoje</span>
          </div>

          {/* Reset button */}
          <button
            onClick={onReset}
            className="w-full mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Fazer nova análise
          </button>
        </div>
      </div>
    );
  }

  // Non-abusive result
  return (
    <div className="max-w-2xl mx-auto animate-fade-up">
      <div className="p-8 rounded-3xl bg-success/10 border-2 border-success/30 card-shadow">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 rounded-xl bg-success/20">
            <CheckCircle className="w-8 h-8 text-success" />
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground">
              Seu Contrato Está Dentro dos Padrões
            </h3>
            <p className="text-muted-foreground">
              Boa notícia! Não identificamos juros abusivos nesta análise inicial.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted-foreground mb-1">Taxa praticada</p>
            <p className="font-display text-2xl font-bold text-foreground">
              {result.taxaPraticada.toFixed(2)}%
            </p>
            <p className="text-xs text-muted-foreground">ao mês</p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted-foreground mb-1">Taxa permitida (BC)</p>
            <p className="font-display text-2xl font-bold text-success">
              {result.taxaPermitida.toFixed(2)}%
            </p>
            <p className="text-xs text-muted-foreground">ao mês</p>
          </div>
        </div>

        {/* Info */}
        <div className="p-4 rounded-xl bg-card border border-border mb-6">
          <p className="text-muted-foreground">
            Seu contrato está dentro dos limites estabelecidos pelo Banco Central para este tipo de operação.
          </p>
          <p className="text-foreground font-medium mt-2">
            💡 Dica: Guarde esta informação para futuras renegociações!
          </p>
        </div>

        {/* Share section */}
        <div className="border-t border-border pt-6">
          <p className="text-center text-muted-foreground mb-4">
            Conhece alguém que também financiou um veículo? Compartilhe esta ferramenta!
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" onClick={handleShare}>
              <Share2 className="w-4 h-4" />
              Compartilhar
            </Button>
          </div>
        </div>

        {/* Reset button */}
        <button
          onClick={onReset}
          className="w-full mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Fazer nova análise
        </button>
      </div>
    </div>
  );
}
