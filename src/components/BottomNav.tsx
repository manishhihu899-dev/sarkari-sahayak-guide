import { Home, Search, Grid3X3, Bookmark, HelpCircle } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useBookmarks } from "@/hooks/use-bookmarks";

export const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookmarks } = useBookmarks();
  
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Search, label: "Search", path: "/search" },
    { icon: Grid3X3, label: "Categories", path: "/categories" },
    { icon: Bookmark, label: "Saved", path: "/saved", badge: bookmarks.length > 0 ? bookmarks.length : undefined },
    { icon: HelpCircle, label: "Help", path: "/help" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border/60 px-3 pb-safe z-50">
      <div className="flex items-center justify-around py-2">
        {navItems.map(({ icon: Icon, label, path, badge }) => {
          const isActive = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`relative flex flex-col items-center gap-1.5 py-2.5 px-4 rounded-xl transition-all duration-200 touch-action-manipulation ${
                isActive 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className="relative">
                <Icon 
                  className={`w-5 h-5 transition-all duration-200 ${isActive ? "scale-105" : ""}`} 
                  strokeWidth={isActive ? 2.25 : 1.75}
                />
                {badge !== undefined && (
                  <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 text-[10px] font-bold bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-sm">
                    {badge > 9 ? "9+" : badge}
                  </span>
                )}
              </div>
              <span className={`text-[10px] font-semibold transition-colors ${isActive ? "text-primary" : ""}`}>
                {label}
              </span>
              {isActive && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
