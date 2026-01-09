import { ChevronRight, LucideIcon } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

interface SubServiceCardProps {
  title: string;
  titleHi: string;
  description: string;
  onClick: () => void;
  delay?: number;
  icon?: LucideIcon;
  themeColor?: string;
}

export const SubServiceCard = ({ 
  title, 
  titleHi, 
  description, 
  onClick,
  delay = 0,
  icon: Icon,
  themeColor
}: SubServiceCardProps) => {
  const { language } = useLanguage();
  
  return (
    <button
      onClick={onClick}
      className="w-full bg-card rounded-xl p-4 shadow-card hover:shadow-elevated transition-all duration-300 flex items-center gap-3 text-left group opacity-0 animate-fade-up touch-action-manipulation active:scale-[0.98] border border-border/50"
      style={{ animationDelay: `${delay}ms` }}
    >
      {Icon ? (
        <div 
          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
          style={{ 
            background: themeColor 
              ? `linear-gradient(135deg, hsl(${themeColor}) 0%, hsl(${themeColor} / 0.8) 100%)` 
              : `linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--accent) / 0.8) 100%)`
          }}
        >
          <Icon className="w-5 h-5 text-white" />
        </div>
      ) : (
        <div className="w-1.5 h-12 rounded-full bg-gradient-to-b from-accent to-accent/60 shrink-0" />
      )}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground text-base leading-tight">
          {language === "hi" ? titleHi : title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          {description}
        </p>
      </div>
      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
        <ChevronRight className="w-4 h-4 text-accent group-hover:translate-x-0.5 transition-transform" />
      </div>
    </button>
  );
};
