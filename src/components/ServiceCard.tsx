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
  
  const iconBgStyle = themeColor 
    ? { backgroundColor: `hsl(${themeColor} / 0.15)` }
    : undefined;
  
  const iconColorStyle = themeColor
    ? { color: `hsl(${themeColor})` }
    : undefined;

  return (
    <button
      onClick={onClick}
      className="w-full bg-card rounded-lg p-4 shadow-card hover:shadow-elevated transition-all duration-300 flex items-center gap-4 text-left group animate-fade-up touch-action-manipulation active:scale-[0.98]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div 
        className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors ${!themeColor ? 'bg-primary/10 group-hover:bg-primary/20' : ''}`}
        style={iconBgStyle}
      >
        <Icon 
          className={`w-7 h-7 ${!themeColor ? 'text-primary' : ''}`}
          style={iconColorStyle}
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground text-lg leading-tight">
          {language === "hi" ? titleHi : title}
        </h3>
        <p className="text-sm text-muted-foreground mt-0.5 truncate">
          {description}
        </p>
      </div>
      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
    </button>
  );
};
