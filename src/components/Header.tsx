import { ArrowLeft, Moon, Sun, Bookmark, Globe } from "lucide-react";
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
    <header className="sticky top-0 z-50 bg-card/85 backdrop-blur-2xl border-b border-border/50 px-4 py-3">
      <div className="flex items-center gap-3 max-w-lg mx-auto">
        {showBack && (
          <button 
            onClick={() => navigate(-1)}
            className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-all touch-action-manipulation active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-foreground" />
          </button>
        )}
        <div className="flex-1">
          {title ? (
            <h1 className="text-base font-bold text-foreground line-clamp-1">
              {title}
            </h1>
          ) : (
            <div>
              <h1 className="text-lg font-extrabold text-foreground tracking-tight">
                {t("सरकारी सहायक", "Sarkaari Sahayak")}
              </h1>
              <p className="text-[11px] text-muted-foreground mt-0.5 font-medium">
                {t("Sabhi sarkari kaam ka guide", "Your govt services companion")}
              </p>
            </div>
          )}
        </div>
        <div className="flex items-center gap-0.5">
          <button 
            onClick={() => navigate("/saved")}
            className="relative w-9 h-9 rounded-xl flex items-center justify-center hover:bg-secondary transition-all touch-action-manipulation active:scale-95"
            aria-label={t("Saved services", "सेव की गई सेवाएं")}
          >
            <Bookmark className="w-[18px] h-[18px] text-muted-foreground" />
            {bookmarks.length > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-[16px] px-1 text-[9px] font-bold bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                {bookmarks.length > 9 ? "9+" : bookmarks.length}
              </span>
            )}
          </button>
          <button 
            onClick={toggleLanguage}
            className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-secondary transition-all touch-action-manipulation active:scale-95"
            aria-label={t("English mein dekhein", "हिंदी में देखें")}
          >
            <span className="text-[11px] font-bold text-muted-foreground">
              {language === "hi" ? "EN" : "हि"}
            </span>
          </button>
          <button 
            onClick={toggleTheme}
            className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-secondary transition-all touch-action-manipulation active:scale-95"
            aria-label={theme === "light" ? "Dark mode" : "Light mode"}
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
