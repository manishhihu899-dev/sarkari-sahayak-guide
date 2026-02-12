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
      className="w-full rounded-2xl p-4 bg-card border border-border/50 hover:border-primary/20 hover:shadow-elevated transition-all duration-300 flex items-center gap-4 text-left group opacity-0 animate-fade-up touch-action-manipulation active:scale-[0.98]"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div 
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
        style={{ 
          background: themeColor 
            ? `hsl(${themeColor} / 0.1)`
            : 'hsl(var(--secondary))',
        }}
      >
        <Icon 
          className="w-5.5 h-5.5" 
          style={{ color: themeColor ? `hsl(${themeColor})` : 'hsl(var(--primary))' }}
          strokeWidth={1.8}
        />
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-foreground text-[15px] leading-tight group-hover:text-primary transition-colors">
          {language === "hi" ? titleHi : title}
        </h3>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-1 font-medium">
          {description}
        </p>
      </div>
      
      <div className="w-8 h-8 rounded-lg bg-secondary/60 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-all">
        <ChevronRight className="w-4 h-4 text-muted-foreground/60 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
      </div>
    </button>
  );
};
