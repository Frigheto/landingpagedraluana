import { useState, forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator as CalcIcon, Lock, Loader2 } from "lucide-react";
import { CalculatorResult } from "./CalculatorResult";

interface FormData {
  tipoOperacao: string;
  valorFinanciado: string;
  valorParcela: string;
  quantidadeParcelas: string;
  dataContratacao: string;
}

interface FormErrors {
  tipoOperacao?: string;
  valorFinanciado?: string;
  valorParcela?: string;
  quantidadeParcelas?: string;
  dataContratacao?: string;
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

// Taxa máxima permitida pelo BC por tipo de operação (mensal)
const TAXAS_BC: Record<string, number> = {
  "financiamento-veiculo": 1.89,
  "emprestimo-pessoal": 5.2,
  "financiamento-imobiliario": 0.95,
  "capital-giro": 3.5
};

export const CalculatorSection = forwardRef<HTMLElement>((_, ref) => {
  const [formData, setFormData] = useState<FormData>({
    tipoOperacao: "",
    valorFinanciado: "",
    valorParcela: "",
    quantidadeParcelas: "",
    dataContratacao: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const formatCurrency = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    const amount = parseInt(numbers) / 100;
    if (isNaN(amount)) return "";
    return amount.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const parseCurrency = (value: string): number => {
    const numbers = value.replace(/\D/g, "");
    return parseInt(numbers) / 100 || 0;
  };

  const handleCurrencyChange = (field: "valorFinanciado" | "valorParcela") => (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCurrency(e.target.value);
    setFormData(prev => ({ ...prev, [field]: formatted }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, tipoOperacao: value }));
    if (errors.tipoOperacao) {
      setErrors(prev => ({ ...prev, tipoOperacao: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.tipoOperacao) {
      newErrors.tipoOperacao = "Selecione o tipo de operação";
    }

    const valorFinanciado = parseCurrency(formData.valorFinanciado);
    if (!formData.valorFinanciado || valorFinanciado < 5000) {
      newErrors.valorFinanciado = "Valor mínimo: R$ 5.000,00";
    }

    const valorParcela = parseCurrency(formData.valorParcela);
    if (!formData.valorParcela || valorParcela <= 0) {
      newErrors.valorParcela = "Informe o valor da parcela";
    }

    const parcelas = parseInt(formData.quantidadeParcelas);
    if (!formData.quantidadeParcelas || parcelas < 6 || parcelas > 96) {
      newErrors.quantidadeParcelas = "Entre 6 e 96 parcelas";
    }

    if (!formData.dataContratacao) {
      newErrors.dataContratacao = "Informe a data de contratação";
    } else {
      const data = new Date(formData.dataContratacao);
      if (data > new Date()) {
        newErrors.dataContratacao = "Data não pode ser futura";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calcularTaxaEfetiva = (valorFinanciado: number, valorParcela: number, numParcelas: number): number => {
    // Cálculo simplificado da taxa de juros mensal usando fórmula de PMT
    // PMT = PV * [i(1+i)^n] / [(1+i)^n - 1]
    // Resolvendo iterativamente para i
    
    let taxaMin = 0;
    let taxaMax = 0.2; // 20% ao mês como máximo
    let taxa = 0.02; // Chute inicial de 2%
    
    for (let iter = 0; iter < 100; iter++) {
      taxa = (taxaMin + taxaMax) / 2;
      const fator = Math.pow(1 + taxa, numParcelas);
      const pmtCalculado = valorFinanciado * (taxa * fator) / (fator - 1);
      
      if (Math.abs(pmtCalculado - valorParcela) < 0.01) {
        break;
      }
      
      if (pmtCalculado > valorParcela) {
        taxaMax = taxa;
      } else {
        taxaMin = taxa;
      }
    }
    
    return taxa * 100; // Retorna em percentual
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsLoading(true);

    // Simula processamento
    await new Promise(resolve => setTimeout(resolve, 2000));

    const valorFinanciado = parseCurrency(formData.valorFinanciado);
    const valorParcela = parseCurrency(formData.valorParcela);
    const numParcelas = parseInt(formData.quantidadeParcelas);

    const taxaPraticada = calcularTaxaEfetiva(valorFinanciado, valorParcela, numParcelas);
    const taxaPermitida = TAXAS_BC[formData.tipoOperacao] || 1.89;
    const diferenca = ((taxaPraticada - taxaPermitida) / taxaPermitida) * 100;
    const isAbusive = taxaPraticada > taxaPermitida; // Acima da taxa BC = caso judicial

    // Calcula economia se abusivo
    let economiaParcela = 0;
    let economiaTotal = 0;

    if (isAbusive) {
      const fatorJusto = Math.pow(1 + taxaPermitida / 100, numParcelas);
      const parcelaJusta = valorFinanciado * ((taxaPermitida / 100) * fatorJusto) / (fatorJusto - 1);
      economiaParcela = valorParcela - parcelaJusta;
      economiaTotal = economiaParcela * numParcelas;
    }

    setResult({
      isAbusive,
      taxaPraticada,
      taxaPermitida,
      diferenca,
      economiaParcela,
      economiaTotal,
      formData
    });

    setIsLoading(false);
  };

  const handleReset = () => {
    setResult(null);
    setFormData({
      tipoOperacao: "",
      valorFinanciado: "",
      valorParcela: "",
      quantidadeParcelas: "",
      dataContratacao: ""
    });
  };

  if (result) {
    return (
      <section ref={ref} id="calculadora" className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="container relative z-10">
          <CalculatorResult result={result} onReset={handleReset} />
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} id="calculadora" className="py-20 lg:py-28 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <CalcIcon className="w-4 h-4" />
              Elemento Principal
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Calculadora de Juros Abusivos
            </h2>
            <p className="text-muted-foreground">
              Preencha os dados do seu contrato e descubra se você tem direito à revisão
            </p>
          </div>

          {/* Calculator form */}
          <form onSubmit={handleSubmit} className="p-8 rounded-3xl card-gradient border border-border card-shadow">
            <div className="space-y-6">
              {/* Tipo de operação */}
              <div className="space-y-2">
                <Label htmlFor="tipoOperacao" className="text-foreground font-medium">
                  Tipo de Operação
                </Label>
                <Select value={formData.tipoOperacao} onValueChange={handleSelectChange}>
                  <SelectTrigger className={errors.tipoOperacao ? "border-destructive" : ""}>
                    <SelectValue placeholder="Selecione o tipo de operação" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="financiamento-veiculo">Financiamento de Veículo</SelectItem>
                    <SelectItem value="emprestimo-pessoal">Empréstimo Pessoal</SelectItem>
                    <SelectItem value="financiamento-imobiliario">Financiamento Imobiliário</SelectItem>
                    <SelectItem value="capital-giro">Capital de Giro</SelectItem>
                  </SelectContent>
                </Select>
                {errors.tipoOperacao && (
                  <p className="text-sm text-destructive">{errors.tipoOperacao}</p>
                )}
              </div>

              {/* Valor financiado */}
              <div className="space-y-2">
                <Label htmlFor="valorFinanciado" className="text-foreground font-medium">
                  Valor Financiado
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">R$</span>
                  <Input
                    id="valorFinanciado"
                    value={formData.valorFinanciado}
                    onChange={handleCurrencyChange("valorFinanciado")}
                    placeholder="0,00"
                    className={`pl-10 ${errors.valorFinanciado ? "border-destructive" : ""}`}
                  />
                </div>
                {errors.valorFinanciado && (
                  <p className="text-sm text-destructive">{errors.valorFinanciado}</p>
                )}
              </div>

              {/* Valor da parcela */}
              <div className="space-y-2">
                <Label htmlFor="valorParcela" className="text-foreground font-medium">
                  Valor da Parcela
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">R$</span>
                  <Input
                    id="valorParcela"
                    value={formData.valorParcela}
                    onChange={handleCurrencyChange("valorParcela")}
                    placeholder="0,00"
                    className={`pl-10 ${errors.valorParcela ? "border-destructive" : ""}`}
                  />
                </div>
                {errors.valorParcela && (
                  <p className="text-sm text-destructive">{errors.valorParcela}</p>
                )}
              </div>

              {/* Quantidade de parcelas */}
              <div className="space-y-2">
                <Label htmlFor="quantidadeParcelas" className="text-foreground font-medium">
                  Quantidade de Parcelas
                </Label>
                <Input
                  id="quantidadeParcelas"
                  type="number"
                  min="6"
                  max="96"
                  value={formData.quantidadeParcelas}
                  onChange={handleChange("quantidadeParcelas")}
                  placeholder="Ex: 48"
                  className={errors.quantidadeParcelas ? "border-destructive" : ""}
                />
                {errors.quantidadeParcelas && (
                  <p className="text-sm text-destructive">{errors.quantidadeParcelas}</p>
                )}
              </div>

              {/* Data de contratação */}
              <div className="space-y-2">
                <Label htmlFor="dataContratacao" className="text-foreground font-medium">
                  Data da Contratação
                </Label>
                <Input
                  id="dataContratacao"
                  type="date"
                  value={formData.dataContratacao}
                  onChange={handleChange("dataContratacao")}
                  max={new Date().toISOString().split("T")[0]}
                  className={errors.dataContratacao ? "border-destructive" : ""}
                />
                {errors.dataContratacao && (
                  <p className="text-sm text-destructive">{errors.dataContratacao}</p>
                )}
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Analisando seu contrato...
                  </>
                ) : (
                  <>
                    <CalcIcon className="w-5 h-5" />
                    Analisar Meu Contrato
                  </>
                )}
              </Button>

              {/* Security badge */}
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Lock className="w-4 h-4" />
                <span>Seus dados estão seguros e não serão compartilhados</span>
              </div>
            </div>

            {/* Loading overlay */}
            {isLoading && (
              <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/30">
                <div className="flex items-center justify-center gap-3">
                  <Loader2 className="w-5 h-5 animate-spin text-primary" />
                  <span className="text-foreground font-medium">Comparando com taxas do Banco Central...</span>
                </div>
                <div className="mt-3 h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full animate-[shimmer_2s_infinite]" style={{ width: '80%' }} />
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
});

CalculatorSection.displayName = "CalculatorSection";
