import { useNavigate } from "react-router-dom";
import { HelpCircle } from "lucide-react";

export const FloatingHelp = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/help")}
      aria-label="Help"
      className="fixed right-4 bottom-24 z-40 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-elevated flex items-center justify-center active:scale-95 hover:scale-105 transition-transform"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <HelpCircle className="w-6 h-6" />
    </button>
  );
};
