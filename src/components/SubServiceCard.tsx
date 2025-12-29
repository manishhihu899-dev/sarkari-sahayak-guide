import { ChevronRight } from "lucide-react";

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
  return (
    <button
      onClick={onClick}
      className="w-full bg-card rounded-lg p-4 shadow-card hover:shadow-elevated transition-all duration-300 flex items-center gap-3 text-left group animate-fade-up touch-action-manipulation active:scale-[0.98]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-2 h-12 rounded-full bg-accent shrink-0" />
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground text-base leading-tight">
          {titleHi}
        </h3>
        <p className="text-sm text-muted-foreground mt-0.5 line-clamp-2">
          {description}
        </p>
      </div>
      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
    </button>
  );
};
