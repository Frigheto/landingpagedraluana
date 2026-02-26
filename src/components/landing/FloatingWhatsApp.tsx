import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/5545999504244?text=Olá! Gostaria de saber mais sobre a revisão de contratos bancários.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Falar no WhatsApp"
    >
      {/* Button */}
      <div className="relative flex items-center gap-3 px-6 py-4 rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_50px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300">
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
        
        {/* Icon */}
        <MessageCircle className="w-6 h-6 relative z-10" />
        
        {/* Text (hidden on mobile, shown on hover on desktop) */}
        <span className="hidden md:group-hover:inline-block relative z-10 font-bold whitespace-nowrap">
          Fale Conosco
        </span>
      </div>
      
      {/* Tooltip for mobile */}
      <div className="md:hidden absolute bottom-full right-0 mb-3 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Fale pelo WhatsApp
        <div className="absolute top-full right-4 -mt-1 w-3 h-3 bg-gray-900 transform rotate-45"></div>
      </div>
    </a>
  );
}
