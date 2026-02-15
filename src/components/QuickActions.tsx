import { useState } from "react";
import { 
  Sparkles, 
  Calculator, 
  FileText, 
  Bookmark, 
  ClipboardList, 
  HelpCircle,
  X,
  ChevronUp
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/hooks/use-language";
import { useSoundEffects } from "@/hooks/use-sound-effects";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const quickActions = [
  {
    id: "eligibility",
    icon: Calculator,
    labelHi: "पात्रता जांचें",
    labelEn: "Check Eligibility",
    path: "/eligibility-checker",
    color: "bg-emerald-500",
  },
  {
    id: "saved",
    icon: Bookmark,
    labelHi: "सेव किया गया",
    labelEn: "Saved Items",
    path: "/saved",
    color: "bg-amber-500",
  },
  {
    id: "tracker",
    icon: ClipboardList,
    labelHi: "आवेदन ट्रैक",
    labelEn: "Track Application",
    path: "/application-tracker",
    color: "bg-blue-500",
  },
  {
    id: "schemes",
    icon: FileText,
    labelHi: "योजनाएं देखें",
    labelEn: "View Schemes",
    path: "/schemes",
    color: "bg-purple-500",
  },
  {
    id: "help",
    icon: HelpCircle,
    labelHi: "सहायता",
    labelEn: "Get Help",
    path: "/help",
    color: "bg-rose-500",
  },
];

export const QuickActions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { playSound, vibrate } = useSoundEffects();

  const handleToggle = () => {
    playSound(isOpen ? "swoosh" : "pop");
    vibrate(15);
    setIsOpen(!isOpen);
  };

  const handleAction = (path: string) => {
    playSound("success");
    vibrate([10, 50, 10]);
    setIsOpen(false);
    navigate(path);
  };

  return (
    <TooltipProvider delayDuration={0}>
      <div className="fixed bottom-20 right-4 z-40">
        {/* Action buttons */}
        <div 
          className={`absolute bottom-16 right-0 flex flex-col gap-3 items-end transition-all duration-300 ${
            isOpen 
              ? "opacity-100 translate-y-0 pointer-events-auto" 
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          {quickActions.map((action, index) => (
            <div
              key={action.id}
              className="transition-all duration-200"
              style={{ 
                transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
                opacity: isOpen ? 1 : 0
              }}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => handleAction(action.path)}
                    className={`w-12 h-12 rounded-full ${action.color} text-white shadow-lg hover:scale-110 transition-transform flex items-center justify-center`}
                  >
                    <action.icon className="w-5 h-5" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="left" className="font-medium">
                  {t(action.labelHi, action.labelEn)}
                </TooltipContent>
              </Tooltip>
            </div>
          ))}
        </div>

        {/* Main FAB Button */}
        <button
          onClick={handleToggle}
          className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 active:scale-95 ${
            isOpen 
              ? "bg-muted text-foreground rotate-180" 
              : "bg-gradient-to-br from-primary to-accent text-white rotate-0"
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="relative">
              <Sparkles className="w-6 h-6" />
              <ChevronUp className="w-3 h-3 absolute -top-1 -right-1 animate-bounce" />
            </div>
          )}
        </button>
      </div>
    </TooltipProvider>
  );
};
