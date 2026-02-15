import { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

interface ServiceCardProps {
  title: string;
  titleHi: string;
  description: string;
  icon: LucideIcon;
  themeColor?: string;
  onClick: () => void;
  delay?: number;
}

export const ServiceCard = ({ 
  title, 
  titleHi, 
  description, 
  icon: Icon,
  themeColor,
  onClick,
  delay = 0 
}: ServiceCardProps) => {
  const { language } = useLanguage();

  return (
    <button
      onClick={onClick}
      className="w-full rounded-2xl p-4 shadow-card hover:shadow-elevated transition-all duration-300 flex items-center gap-4 text-left group opacity-0 animate-fade-up touch-action-manipulation active:scale-[0.98] relative overflow-hidden border border-border/50"
      style={{ 
        animationDelay: `${delay}ms`,
        background: themeColor 
          ? `linear-gradient(135deg, hsl(${themeColor} / 0.08) 0%, hsl(${themeColor} / 0.02) 100%)`
          : undefined
      }}
    >
      {/* Decorative accent line */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
        style={{ backgroundColor: themeColor ? `hsl(${themeColor})` : undefined }}
      />
      
      {/* Icon Container with gradient */}
      <div 
        className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105 relative overflow-hidden"
        style={{ 
          background: themeColor 
            ? `linear-gradient(135deg, hsl(${themeColor}) 0%, hsl(${themeColor} / 0.8) 100%)`
            : undefined,
          boxShadow: themeColor 
            ? `0 4px 14px -4px hsl(${themeColor} / 0.4)`
            : undefined
        }}
      >
        {/* Subtle shine effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent" />
        <Icon className="w-7 h-7 text-white relative z-10" />
      </div>
      
      <div className="flex-1 min-w-0 pl-2">
        <h3 className="font-bold text-foreground text-lg leading-tight tracking-tight">
          {language === "hi" ? titleHi : title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
          {description}
        </p>
      </div>
      
      <div 
        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:translate-x-1"
        style={{ 
          backgroundColor: themeColor ? `hsl(${themeColor} / 0.1)` : undefined 
        }}
      >
        <ChevronRight 
          className="w-5 h-5 transition-colors"
          style={{ color: themeColor ? `hsl(${themeColor})` : undefined }}
        />
      </div>
    </button>
  );
};