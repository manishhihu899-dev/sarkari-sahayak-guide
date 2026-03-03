import { useState } from "react";
import { Home, Gift, Grid3X3, Globe, HelpCircle } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/hooks/use-language";

export const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const navItems = [
    { icon: Home, label: t("Home", "Home"), path: "/" },
    { icon: Globe, label: t("Directory", "Directory"), path: "/govt-directory" },
    { icon: Gift, label: t("Yojana", "Schemes"), path: "/schemes" },
    { icon: Grid3X3, label: t("Categories", "Categories"), path: "/categories" },
    { icon: HelpCircle, label: t("Help", "Help"), path: "/help" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-2 pb-safe z-50">
      <div className="flex items-center justify-around py-2">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`flex flex-col items-center gap-1 py-2 px-4 rounded-xl transition-all touch-action-manipulation ${
                isActive 
                  ? "text-accent bg-accent/10" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? "scale-110" : ""} transition-transform`} />
              <span className="text-xs font-medium">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
