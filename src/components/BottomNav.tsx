import { useState } from "react";
import { Home, Search, Gift, LayoutGrid, HelpCircle } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/hooks/use-language";
import { SearchModal } from "@/components/SearchModal";

export const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  
  const navItems = [
    { icon: Home, label: t("Home", "Home"), path: "/", action: "navigate" },
    { icon: Search, label: t("Search", "Search"), path: "/search", action: "modal" },
    { icon: Gift, label: t("Yojana", "Schemes"), path: "/schemes", action: "navigate" },
    { icon: LayoutGrid, label: t("Categories", "Categories"), path: "/categories", action: "navigate" },
    { icon: HelpCircle, label: t("Help", "Help"), path: "/help", action: "navigate" },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.action === "modal") {
      setSearchModalOpen(true);
    } else {
      navigate(item.path);
    }
  };

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 bg-card/90 backdrop-blur-2xl border-t border-border/50 px-2 pb-safe z-50">
        <div className="flex items-center justify-around py-1.5 max-w-lg mx-auto">
          {navItems.map(({ icon: Icon, label, path, action }) => {
            const isActive = action === "navigate" ? location.pathname === path : false;
            return (
              <button
                key={path}
                onClick={() => handleNavClick({ icon: Icon, label, path, action })}
                className={`flex flex-col items-center gap-0.5 py-1.5 px-3 rounded-xl transition-all touch-action-manipulation ${
                  isActive 
                    ? "text-primary" 
                    : "text-muted-foreground/60 hover:text-foreground"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "stroke-[2.5px]" : "stroke-[1.8px]"} transition-all`} />
                <span className={`text-[10px] ${isActive ? "font-bold" : "font-medium"}`}>{label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <SearchModal open={searchModalOpen} onOpenChange={setSearchModalOpen} />
    </>
  );
};
