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
import { motion, AnimatePresence } from "framer-motion";
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
    path: "/eligibility",
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
    path: "/tracker",
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

  const handleAction = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <TooltipProvider delayDuration={0}>
      <div className="fixed bottom-20 right-4 z-40">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-16 right-0 flex flex-col gap-3 items-end"
            >
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => handleAction(action.path)}
                        className={`w-12 h-12 rounded-full ${action.color} text-white shadow-lg hover:scale-110 transition-all flex items-center justify-center`}
                      >
                        <action.icon className="w-5 h-5" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="left" className="font-medium">
                      {t(action.labelHi, action.labelEn)}
                    </TooltipContent>
                  </Tooltip>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main FAB Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all ${
            isOpen 
              ? "bg-muted text-foreground" 
              : "bg-gradient-to-br from-primary to-accent text-white"
          }`}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="relative">
              <Sparkles className="w-6 h-6" />
              <ChevronUp className="w-3 h-3 absolute -top-1 -right-1 animate-bounce" />
            </div>
          )}
        </motion.button>
      </div>
    </TooltipProvider>
  );
};
