import { useState } from "react";
import { Home, Search, Gift, Grid3X3, Globe } from "lucide-react";
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
    { icon: Globe, label: t("Directory", "Directory"), path: "/govt-directory", action: "navigate" },
    { icon: Gift, label: t("Yojana", "Schemes"), path: "/schemes", action: "navigate" },
    { icon: Grid3X3, label: t("Categories", "Categories"), path: "/categories", action: "navigate" },
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
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-2 pb-safe z-50">
        <div className="flex items-center justify-around py-2">
          {navItems.map(({ icon: Icon, label, path, action }) => {
            const isActive = action === "navigate" ? location.pathname === path : false;
            return (
              <button
                key={path}
                onClick={() => handleNavClick({ icon: Icon, label, path, action })}
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

      <SearchModal open={searchModalOpen} onOpenChange={setSearchModalOpen} />
    </>
  );
};
