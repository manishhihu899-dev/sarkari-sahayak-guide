import { ArrowLeft, Moon, Sun, Bookmark } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/hooks/use-theme";
import { useLanguage } from "@/hooks/use-language";
import { useBookmarks } from "@/hooks/use-bookmarks";

interface HeaderProps {
  title?: string;
  showBack?: boolean;
}

export const Header = ({ title, showBack = false }: HeaderProps) => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const { bookmarks } = useBookmarks();

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border px-4 py-3">
      <div className="flex items-center gap-3">
        {showBack && (
          <button 
            onClick={() => navigate(-1)}
            className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors touch-action-manipulation active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-foreground" />
          </button>
        )}
        <div className="flex-1">
          {title ? (
            <h1 className="text-base font-semibold text-foreground line-clamp-1">
              {title}
            </h1>
          ) : (
            <div>
              <h1 className="text-lg font-bold text-foreground tracking-tight">
                {t("सरकारी सहायक", "Sarkaari Sahayak")}
              </h1>
              <p className="text-xs text-muted-foreground mt-0.5">
                {t("Ek hi app mein sabhi sarkari kaam ka guide", "All govt services guide in one app")}
              </p>
            </div>
          )}
        </div>
        <div className="flex items-center gap-1">
          <button 
            onClick={() => navigate("/saved")}
            className="relative w-9 h-9 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors touch-action-manipulation active:scale-95"
            aria-label={t("Saved services", "सेव की गई सेवाएं")}
          >
            <Bookmark className="w-[18px] h-[18px] text-muted-foreground" />
            {bookmarks.length > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-[16px] px-1 text-[9px] font-bold bg-accent text-accent-foreground rounded-full flex items-center justify-center">
                {bookmarks.length > 9 ? "9+" : bookmarks.length}
              </span>
            )}
          </button>
          <button 
            onClick={toggleLanguage}
            className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors touch-action-manipulation active:scale-95"
            aria-label={t("English mein dekhein", "हिंदी में देखें")}
          >
            <span className="text-xs font-semibold text-muted-foreground">
              {language === "hi" ? "EN" : "हि"}
            </span>
          </button>
          <button 
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors touch-action-manipulation active:scale-95"
            aria-label={theme === "light" ? "Dark mode on karein" : "Light mode on karein"}
          >
            {theme === "light" ? (
              <Moon className="w-[18px] h-[18px] text-muted-foreground" />
            ) : (
              <Sun className="w-[18px] h-[18px] text-muted-foreground" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
