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
      className="w-full rounded-xl p-3.5 bg-card border border-border/60 hover:border-border hover:shadow-elevated transition-all duration-200 flex items-center gap-3.5 text-left group opacity-0 animate-fade-up touch-action-manipulation active:scale-[0.99]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div 
        className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105"
        style={{ 
          background: themeColor 
            ? `hsl(${themeColor} / 0.12)`
            : 'hsl(var(--secondary))',
        }}
      >
        <Icon 
          className="w-5 h-5" 
          style={{ color: themeColor ? `hsl(${themeColor})` : 'hsl(var(--primary))' }}
        />
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground text-[15px] leading-tight">
          {language === "hi" ? titleHi : title}
        </h3>
        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
          {description}
        </p>
      </div>
      
      <ChevronRight className="w-4 h-4 text-muted-foreground/50 shrink-0 group-hover:text-muted-foreground group-hover:translate-x-0.5 transition-all" />
    </button>
  );
};
