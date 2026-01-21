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
    <header className="sticky top-0 z-50 bg-gradient-hero px-4 py-4 shadow-elevated relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-white/5" />
        <div className="absolute -left-4 bottom-0 w-16 h-16 rounded-full bg-accent/10" />
      </div>
      
      <div className="flex items-center gap-3 relative z-10">
        {showBack && (
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-200 touch-action-manipulation active:scale-95 border border-white/10"
          >
            <ArrowLeft className="w-5 h-5 text-primary-foreground" />
          </button>
        )}
        <div className="flex-1">
          {title ? (
            <h1 className="text-lg font-bold text-primary-foreground line-clamp-1 tracking-tight">
              {title}
            </h1>
          ) : (
            <div>
              <h1 className="text-xl font-bold text-primary-foreground tracking-tight">
                {t("सरकारी सहायक", "Sarkaari Sahayak")}
              </h1>
              <p className="text-xs text-primary-foreground/80 mt-0.5 font-medium">
                {t("Ek hi app mein sabhi sarkari kaam ka guide", "All govt services guide in one app")}
              </p>
            </div>
          )}
        </div>
        <div className="flex items-center gap-1.5">
          <button 
            onClick={() => navigate("/saved")}
            className="relative w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-200 touch-action-manipulation active:scale-95 border border-white/10"
            aria-label={t("Saved services", "सेव की गई सेवाएं")}
          >
            <Bookmark className="w-5 h-5 text-primary-foreground" />
            {bookmarks.length > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[20px] h-[20px] px-1 text-[10px] font-bold bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-lg border-2 border-primary">
                {bookmarks.length > 9 ? "9+" : bookmarks.length}
              </span>
            )}
          </button>
          <button 
            onClick={toggleLanguage}
            className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-200 touch-action-manipulation active:scale-95 border border-white/10"
            aria-label={t("English mein dekhein", "हिंदी में देखें")}
          >
            <span className="text-xs font-bold text-primary-foreground">
              {language === "hi" ? "EN" : "हि"}
            </span>
          </button>
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-200 touch-action-manipulation active:scale-95 border border-white/10"
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
