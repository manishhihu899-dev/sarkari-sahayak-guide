import { LucideIcon, ChevronRight, ExternalLink } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

interface SchemeCardProps {
  title: string;
  titleHi: string;
  description: string;
  icon: LucideIcon;
  themeColor?: string;
  onClick: () => void;
  delay?: number;
  benefit?: string;
}

export const SchemeCard = ({ 
  title, 
  titleHi, 
  description, 
  icon: Icon,
  themeColor = "142 60% 40%",
  onClick,
  delay = 0,
  benefit
}: SchemeCardProps) => {
  const { language } = useLanguage();

  return (
    <button
      onClick={onClick}
      className="w-full rounded-2xl p-4 shadow-card hover:shadow-elevated transition-all duration-300 flex items-center gap-4 text-left group opacity-0 animate-fade-up touch-action-manipulation active:scale-[0.98] relative overflow-hidden border border-border/50 bg-card"
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {/* Decorative gradient background */}
      <div 
        className="absolute inset-0 opacity-[0.04] transition-opacity duration-300 group-hover:opacity-[0.08]"
        style={{ 
          background: `linear-gradient(135deg, hsl(${themeColor}) 0%, transparent 60%)`
        }}
      />
      
      {/* Decorative accent line */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl"
        style={{ 
          background: `linear-gradient(180deg, hsl(${themeColor}) 0%, hsl(${themeColor} / 0.6) 100%)`
        }}
      />
      
      {/* Icon Container with gradient */}
      <div 
        className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105 relative overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, hsl(${themeColor}) 0%, hsl(${themeColor} / 0.8) 100%)`,
          boxShadow: `0 4px 14px -4px hsl(${themeColor} / 0.4)`
        }}
      >
        {/* Subtle shine effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent" />
        <Icon className="w-7 h-7 text-white relative z-10" />
      </div>
      
      <div className="flex-1 min-w-0 pl-1">
        <h3 className="font-bold text-foreground text-base leading-tight tracking-tight">
          {language === "hi" ? titleHi : title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
          {description}
        </p>
        {benefit && (
          <div 
            className="inline-flex items-center gap-1 mt-2 px-2 py-0.5 rounded-full text-xs font-medium"
            style={{ 
              backgroundColor: `hsl(${themeColor} / 0.1)`,
              color: `hsl(${themeColor})`
            }}
          >
            <span>💰</span>
            <span>{benefit}</span>
          </div>
        )}
      </div>
      
      <div 
        className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:translate-x-1"
        style={{ 
          backgroundColor: `hsl(${themeColor} / 0.1)`
        }}
      >
        <ChevronRight 
          className="w-5 h-5 transition-colors"
          style={{ color: `hsl(${themeColor})` }}
        />
      </div>
    </button>
  );
};
