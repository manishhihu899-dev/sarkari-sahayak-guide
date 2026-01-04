import { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

interface ServiceCardProps {
  title: string;
  titleHi: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
  delay?: number;
}

export const ServiceCard = ({ 
  title, 
  titleHi, 
  description, 
  icon: Icon, 
  onClick,
  delay = 0 
}: ServiceCardProps) => {
  const { language } = useLanguage();
  
  return (
    <button
      onClick={onClick}
      className="w-full bg-card rounded-2xl p-5 shadow-card hover:shadow-elevated border border-border/50 transition-all duration-300 flex items-center gap-4 text-left group animate-fade-up touch-action-manipulation active:scale-[0.98]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/12 transition-colors duration-300">
        <Icon className="w-6 h-6 text-primary" strokeWidth={1.75} />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground text-lg leading-snug tracking-tight">
          {language === "hi" ? titleHi : title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 truncate font-medium">
          {description}
        </p>
      </div>
      <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
    </button>
  );
};
