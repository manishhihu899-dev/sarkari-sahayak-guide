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
      className="w-full rounded-2xl p-4 shadow-card hover:shadow-elevated transition-all duration-300 flex items-center gap-4 text-left group opacity-0 animate-fade-up touch-action-manipulation active:scale-[0.98] relative overflow-hidden border border-border/50 bg-card hover:-translate-y-1"
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 opacity-[0.06] transition-opacity duration-500 group-hover:opacity-[0.12]"
        style={{ 
          background: `linear-gradient(135deg, hsl(${themeColor}) 0%, hsl(${themeColor} / 0.5) 50%, transparent 80%)`
        }}
      />
      
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
      </div>
      
      {/* Decorative accent line with gradient */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl transition-all duration-300 group-hover:w-2"
        style={{ 
          background: `linear-gradient(180deg, hsl(${themeColor}) 0%, hsl(${themeColor} / 0.6) 100%)`
        }}
      />
      
      {/* Icon Container with gradient and glow */}
      <div 
        className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 relative overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, hsl(${themeColor}) 0%, hsl(${themeColor} / 0.8) 100%)`,
          boxShadow: `0 4px 14px -4px hsl(${themeColor} / 0.5)`
        }}
      >
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
        {/* Pulse ring on hover */}
        <div 
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ 
            boxShadow: `0 0 0 2px hsl(${themeColor} / 0.3), 0 0 20px hsl(${themeColor} / 0.2)`
          }}
        />
        <Icon className="w-7 h-7 text-white relative z-10 group-hover:animate-pulse-soft" />
      </div>
      
      <div className="flex-1 min-w-0 pl-1">
        <h3 className="font-bold text-foreground text-base leading-tight tracking-tight group-hover:text-primary transition-colors">
          {language === "hi" ? titleHi : title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
          {description}
        </p>
        {benefit && (
          <div 
            className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-300 group-hover:scale-105"
            style={{ 
              backgroundColor: `hsl(${themeColor} / 0.12)`,
              color: `hsl(${themeColor})`
            }}
          >
            <span className="animate-pulse-soft">💰</span>
            <span>{benefit}</span>
          </div>
        )}
      </div>
      
      <div 
        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110"
        style={{ 
          backgroundColor: `hsl(${themeColor} / 0.1)`,
          boxShadow: `0 0 0 0 hsl(${themeColor} / 0)`
        }}
      >
        <ChevronRight 
          className="w-5 h-5 transition-all group-hover:scale-110"
          style={{ color: `hsl(${themeColor})` }}
        />
      </div>
    </button>
  );
};
