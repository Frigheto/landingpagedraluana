import { useRef, useEffect } from "react";
import HeroSection from "@/components/landing/HeroSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { CredibilitySection } from "@/components/landing/CredibilitySection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { CalculatorSection } from "@/components/landing/Calculator";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { UrgencySection } from "@/components/landing/UrgencySection";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";

const Index = () => {
  const calculatorRef = useRef<HTMLElement>(null);

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* 1. FRIGHETO: INÍCIO - Alerta + Headline + Subheadline + VÍDEO */}
      <HeroSection />
      
      {/* 2. APRESENTAÇÃO DA DRA. LUANA - Foto, história e casos vencidos */}
      <AboutSection />
      
      {/* 3. FRIGHETO: SEÇÃO EMOCIONAL - Despertar dor e urgência */}
      <ProblemSection />
      
      {/* 4. FRIGHETO: SEÇÃO LÓGICA - Dados, provas e estatísticas */}
      <CredibilitySection />
      
      {/* 5. FRIGHETO: SEÇÃO RACIONAL - Como funciona, processo lógico */}
      <ProcessSection />
      <CalculatorSection ref={calculatorRef} />
      
      {/* 6. FRIGHETO: FAQ E REAFIRMAÇÃO - Objeções e última chamada */}
      <FAQSection />
      <UrgencySection />
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
