import { Home, Grid3X3, Bell, Bookmark, Menu } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/hooks/use-language";

export const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const navItems = [
    { icon: Home, label: t("होम", "Home"), path: "/" },
    { icon: Grid3X3, label: t("सेवाएं", "Services"), path: "/categories" },
    { icon: Bell, label: t("अपडेट", "Updates"), path: "/updates" },
    { icon: Bookmark, label: t("सेव", "Saved"), path: "/saved" },
    { icon: Menu, label: t("मेनू", "Menu"), path: "/more" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md border-t border-border z-50" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <div className="flex items-center justify-around px-1 py-1.5">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`flex flex-col items-center gap-0.5 py-1.5 px-3 rounded-xl transition-all touch-action-manipulation active:scale-95 ${
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label={label}
            >
              <div className={`p-1 rounded-lg transition-colors ${isActive ? "bg-primary/10" : ""}`}>
                <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={`text-[10px] ${isActive ? "font-semibold" : "font-medium"}`}>{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
