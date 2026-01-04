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
    <header className="sticky top-0 z-50 bg-gradient-hero px-4 py-4 shadow-elevated">
      <div className="flex items-center gap-3">
        {showBack && (
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors touch-action-manipulation active:scale-95"
          >
            <ArrowLeft className="w-5 h-5 text-primary-foreground" />
          </button>
        )}
        <div className="flex-1">
          {title ? (
            <h1 className="text-lg font-semibold text-primary-foreground line-clamp-1">
              {title}
            </h1>
          ) : (
            <div>
              <h1 className="text-xl font-bold text-primary-foreground">
                {t("सरकारी सहायक", "Sarkaari Sahayak")}
              </h1>
              <p className="text-xs text-primary-foreground/80 mt-0.5">
                {t("Ek hi app mein sabhi sarkari kaam ka guide", "All govt services guide in one app")}
              </p>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => navigate("/saved")}
            className="relative w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors touch-action-manipulation active:scale-95"
            aria-label={t("Saved services", "सेव की गई सेवाएं")}
          >
            <Bookmark className="w-5 h-5 text-primary-foreground" />
            {bookmarks.length > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 text-[10px] font-bold bg-accent text-accent-foreground rounded-full flex items-center justify-center">
                {bookmarks.length > 9 ? "9+" : bookmarks.length}
              </span>
            )}
          </button>
          <button 
            onClick={toggleLanguage}
            className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors touch-action-manipulation active:scale-95"
            aria-label={t("English mein dekhein", "हिंदी में देखें")}
          >
            <span className="text-xs font-bold text-primary-foreground">
              {language === "hi" ? "EN" : "हि"}
            </span>
          </button>
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors touch-action-manipulation active:scale-95"
            aria-label={theme === "light" ? "Dark mode on karein" : "Light mode on karein"}
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-primary-foreground" />
            ) : (
              <Sun className="w-5 h-5 text-primary-foreground" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
