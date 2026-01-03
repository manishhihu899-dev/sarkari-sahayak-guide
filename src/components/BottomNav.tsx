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
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-2 pb-safe z-50">
      <div className="flex items-center justify-around py-2">
        {navItems.map(({ icon: Icon, label, path, badge }) => {
          const isActive = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`relative flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all touch-action-manipulation ${
                isActive 
                  ? "text-accent bg-accent/10" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? "scale-110" : ""} transition-transform`} />
                {badge !== undefined && (
                  <span className="absolute -top-1.5 -right-1.5 min-w-[16px] h-4 px-1 text-[10px] font-bold bg-accent text-accent-foreground rounded-full flex items-center justify-center">
                    {badge > 9 ? "9+" : badge}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-medium">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
