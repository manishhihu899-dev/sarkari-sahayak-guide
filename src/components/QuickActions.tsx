import { useState } from "react";
import { 
  Zap, 
  CheckCircle2, 
  Bookmark, 
  ClipboardCheck, 
  FileStack,
  MessageCircleQuestion,
  X
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/hooks/use-language";
import { useSoundEffects } from "@/hooks/use-sound-effects";

const quickActions = [
  { id: "eligibility", icon: CheckCircle2, labelHi: "पात्रता जांचें", labelEn: "Eligibility", path: "/eligibility-checker", color: "bg-accent" },
  { id: "saved", icon: Bookmark, labelHi: "सेव किया गया", labelEn: "Saved", path: "/saved", color: "bg-warning" },
  { id: "tracker", icon: ClipboardCheck, labelHi: "आवेदन ट्रैक", labelEn: "Track", path: "/application-tracker", color: "bg-primary" },
  { id: "schemes", icon: FileStack, labelHi: "योजनाएं", labelEn: "Schemes", path: "/schemes", color: "bg-success" },
  { id: "help", icon: MessageCircleQuestion, labelHi: "सहायता", labelEn: "Help", path: "/help", color: "bg-destructive" },
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
        className={`absolute bottom-16 right-0 flex flex-col gap-2 items-end transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {quickActions.map((action, index) => (
          <button
            key={action.id}
            onClick={() => handleAction(action.path)}
            className={`flex items-center gap-2.5 h-10 px-4 rounded-xl ${action.color} text-white shadow-elevated transition-all text-xs font-semibold`}
            style={{ 
              transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
              transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.9)',
              opacity: isOpen ? 1 : 0
            }}
          >
            <action.icon className="w-4 h-4" strokeWidth={2} />
            <span>{t(action.labelHi, action.labelEn)}</span>
          </button>
        ))}
      </div>

      {/* FAB */}
      <button
        onClick={handleToggle}
        className={`w-13 h-13 rounded-2xl shadow-elevated flex items-center justify-center transition-all duration-300 active:scale-90 ${
          isOpen 
            ? "bg-secondary text-foreground rotate-90" 
            : "bg-primary text-primary-foreground rotate-0 hover:shadow-[0_8px_30px_-4px_hsl(var(--primary)/0.4)]"
        }`}
        style={{ width: 52, height: 52 }}
      >
        {isOpen ? <X className="w-5 h-5" strokeWidth={2.5} /> : <Zap className="w-5 h-5" strokeWidth={2} />}
      </button>
    </div>
  );
};
