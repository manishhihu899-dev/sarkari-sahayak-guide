import { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";

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
  return (
    <button
      onClick={onClick}
      className="w-full bg-card rounded-lg p-4 shadow-card hover:shadow-elevated transition-all duration-300 flex items-center gap-4 text-left group animate-fade-up touch-action-manipulation active:scale-[0.98]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground text-lg leading-tight">
          {titleHi}
        </h3>
        <p className="text-sm text-muted-foreground mt-0.5 truncate">
          {description}
        </p>
      </div>
      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
    </button>
  );
};
