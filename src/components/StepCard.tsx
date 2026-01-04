import { Check } from "lucide-react";

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  isCompleted?: boolean;
  onToggle?: () => void;
  delay?: number;
}

export const StepCard = ({ 
  step, 
  title, 
  description, 
  isCompleted = false,
  onToggle,
  delay = 0 
}: StepCardProps) => {
  return (
    <div 
      className={`relative pl-12 pb-6 animate-fade-up ${
        isCompleted ? "opacity-60" : ""
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Vertical line */}
      <div className="absolute left-[13px] top-10 bottom-0 w-0.5 bg-border rounded-full" />
      
      {/* Step number circle */}
      <button
        onClick={onToggle}
        className={`absolute left-0 top-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-200 touch-action-manipulation shadow-sm ${
          isCompleted 
            ? "bg-success text-success-foreground" 
            : "bg-primary text-primary-foreground"
        }`}
      >
        {isCompleted ? <Check className="w-4 h-4" strokeWidth={2.5} /> : step}
      </button>
      
      {/* Content */}
      <div className="bg-card rounded-xl p-4 shadow-card border border-border/50 ml-1">
        <h4 className={`font-semibold text-base tracking-tight ${isCompleted ? "line-through text-muted-foreground" : "text-foreground"}`}>
          {title}
        </h4>
        <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </div>
  );
};
