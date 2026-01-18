import { Check, Lightbulb, ArrowRight } from "lucide-react";

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  isCompleted?: boolean;
  onToggle?: () => void;
  delay?: number;
  totalSteps?: number;
}

export const StepCard = ({ 
  step, 
  title, 
  description, 
  isCompleted = false,
  onToggle,
  delay = 0,
  totalSteps = 5
}: StepCardProps) => {
  const isLastStep = step === totalSteps;
  
  return (
    <div 
      className={`relative pl-12 pb-8 animate-fade-up ${
        isCompleted ? "opacity-70" : ""
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Vertical line - dashed for visual friendliness */}
      {!isLastStep && (
        <div className="absolute left-4 top-10 bottom-0 w-0.5 bg-gradient-to-b from-accent/60 to-border border-l-2 border-dashed border-accent/30" />
      )}
      
      {/* Step number circle with glow effect */}
      <button
        onClick={onToggle}
        className={`absolute left-0 top-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all touch-action-manipulation shadow-lg ${
          isCompleted 
            ? "bg-success text-success-foreground ring-4 ring-success/20" 
            : "bg-gradient-to-br from-accent to-accent/80 text-accent-foreground ring-4 ring-accent/20 hover:scale-110"
        }`}
      >
        {isCompleted ? <Check className="w-5 h-5" /> : step}
      </button>
      
      {/* Content Card - Enhanced */}
      <div className={`bg-card rounded-xl p-4 shadow-card ml-2 border-l-4 transition-all ${
        isCompleted 
          ? "border-l-success bg-success/5" 
          : "border-l-accent hover:shadow-lg hover:-translate-y-0.5"
      }`}>
        {/* Step indicator badge */}
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
            isCompleted 
              ? "bg-success/10 text-success" 
              : "bg-accent/10 text-accent"
          }`}>
            Step {step} of {totalSteps}
          </span>
          {isCompleted && (
            <span className="text-xs text-success flex items-center gap-1">
              <Check className="w-3 h-3" /> Done!
            </span>
          )}
        </div>
        
        <h4 className={`font-bold text-base mb-2 flex items-center gap-2 ${
          isCompleted ? "line-through text-muted-foreground" : "text-foreground"
        }`}>
          {!isCompleted && <ArrowRight className="w-4 h-4 text-accent shrink-0" />}
          {title}
        </h4>
        
        <p className={`text-sm leading-relaxed ${
          isCompleted ? "text-muted-foreground" : "text-foreground/80"
        }`}>
          {description}
        </p>
        
        {/* Helpful tip indicator */}
        {!isCompleted && (
          <div className="mt-3 pt-3 border-t border-border/50">
            <div className="flex items-start gap-2 text-xs text-muted-foreground">
              <Lightbulb className="w-4 h-4 text-warning shrink-0 mt-0.5" />
              <span>Tap the number to mark as done ✓</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
