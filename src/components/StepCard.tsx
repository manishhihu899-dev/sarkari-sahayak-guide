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
      className={`relative pl-10 pb-6 animate-fade-up ${
        isCompleted ? "opacity-60" : ""
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Vertical line */}
      <div className="absolute left-3.5 top-8 bottom-0 w-0.5 bg-border" />
      
      {/* Step number circle */}
      <button
        onClick={onToggle}
        className={`absolute left-0 top-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-all touch-action-manipulation ${
          isCompleted 
            ? "bg-success text-success-foreground" 
            : "bg-accent text-accent-foreground"
        }`}
      >
        {isCompleted ? <Check className="w-4 h-4" /> : step}
      </button>
      
      {/* Content */}
      <div className="bg-card rounded-lg p-4 shadow-card ml-2">
        <h4 className={`font-semibold text-base ${isCompleted ? "line-through" : "text-foreground"}`}>
          {title}
        </h4>
        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
