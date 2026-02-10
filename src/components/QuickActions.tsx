import { useState } from "react";
import { 
  Plus, 
  Calculator, 
  FileText, 
  Bookmark, 
  ClipboardList, 
  HelpCircle,
  X
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/hooks/use-language";
import { useSoundEffects } from "@/hooks/use-sound-effects";

const quickActions = [
  { id: "eligibility", icon: Calculator, labelHi: "पात्रता जांचें", labelEn: "Eligibility", path: "/eligibility-checker", color: "bg-success" },
  { id: "saved", icon: Bookmark, labelHi: "सेव किया गया", labelEn: "Saved", path: "/saved", color: "bg-accent" },
  { id: "tracker", icon: ClipboardList, labelHi: "आवेदन ट्रैक", labelEn: "Track", path: "/application-tracker", color: "bg-primary" },
  { id: "schemes", icon: FileText, labelHi: "योजनाएं", labelEn: "Schemes", path: "/schemes", color: "bg-primary" },
  { id: "help", icon: HelpCircle, labelHi: "सहायता", labelEn: "Help", path: "/help", color: "bg-destructive" },
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
    <div className="fixed bottom-20 right-4 z-40">
      {/* Action buttons */}
      <div 
        className={`absolute bottom-14 right-0 flex flex-col gap-2 items-end transition-all duration-200 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {quickActions.map((action, index) => (
          <button
            key={action.id}
            onClick={() => handleAction(action.path)}
            className={`flex items-center gap-2 h-10 px-3 rounded-lg ${action.color} text-white shadow-card hover:shadow-elevated transition-all text-xs font-medium`}
            style={{ 
              transitionDelay: isOpen ? `${index * 40}ms` : '0ms',
              transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.95)',
              opacity: isOpen ? 1 : 0
            }}
          >
            <action.icon className="w-4 h-4" />
            <span>{t(action.labelHi, action.labelEn)}</span>
          </button>
        ))}
      </div>

      {/* FAB */}
      <button
        onClick={handleToggle}
        className={`w-12 h-12 rounded-full shadow-elevated flex items-center justify-center transition-all duration-200 active:scale-95 ${
          isOpen 
            ? "bg-secondary text-foreground rotate-45" 
            : "bg-primary text-primary-foreground rotate-0"
        }`}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
      </button>
    </div>
  );
};
