import { ReactNode } from "react";
import { useSoundEffects } from "@/hooks/use-sound-effects";

interface InteractiveCardProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  soundEnabled?: boolean;
}

export const InteractiveCard = ({ 
  children, 
  onClick, 
  className = "",
  soundEnabled = true 
}: InteractiveCardProps) => {
  const { playSound, vibrate } = useSoundEffects();

  const handleClick = () => {
    if (soundEnabled) {
      playSound("tap");
      vibrate(10);
    }
    onClick?.();
  };

  const handleMouseEnter = () => {
    if (soundEnabled) {
      playSound("swoosh");
    }
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      className={`
        relative overflow-hidden cursor-pointer
        transition-all duration-300 ease-out
        hover:scale-[1.02] hover:-translate-y-1
        active:scale-[0.98]
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
        before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700
        ${className}
      `}
    >
      {children}
    </div>
  );
};
