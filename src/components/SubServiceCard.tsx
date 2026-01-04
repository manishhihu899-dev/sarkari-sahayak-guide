import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

interface SubServiceCardProps {
  title: string;
  titleHi: string;
  description: string;
  onClick: () => void;
  delay?: number;
}

export const SubServiceCard = ({ 
  title, 
  titleHi, 
  description, 
  onClick,
  delay = 0 
}: SubServiceCardProps) => {
  const { language } = useLanguage();
  
  return (
    <button
      onClick={onClick}
      className="w-full bg-card rounded-xl p-4 shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300 flex items-center gap-4 text-left group animate-fade-up touch-action-manipulation active:scale-[0.98]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-1.5 h-12 rounded-full bg-primary/60 shrink-0" />
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground text-base leading-snug tracking-tight">
          {language === "hi" ? titleHi : title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2 font-medium">
          {description}
        </p>
      </div>
      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" strokeWidth={2} />
    </button>
  );
};
