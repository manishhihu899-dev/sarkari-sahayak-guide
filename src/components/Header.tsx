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
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-accent/30 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }} />
      
      {/* Tricolor Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-600" />
      
      {/* Subtle decorative elements with animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-white/8 blur-xl animate-float-slow" />
        <div className="absolute -left-6 -bottom-6 w-20 h-20 rounded-full bg-accent/15 blur-lg animate-float-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute right-1/3 top-1/2 w-2 h-2 rounded-full bg-accent/40 animate-pulse-soft" />
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
      </div>
      
      <div className="flex items-center gap-3 relative z-10">
        {showBack && (
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-200 touch-action-manipulation active:scale-95 border border-white/10 hover:scale-105"
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
            <div className="animate-fade-in">
              <h1 className="text-xl font-bold text-primary-foreground tracking-tight flex items-center gap-2">
                {t("सरकारी सहायक", "Sarkaari Sahayak")}
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-soft" />
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
            className="relative w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-200 touch-action-manipulation active:scale-95 border border-white/10 hover:scale-105"
            aria-label={t("Saved services", "सेव की गई सेवाएं")}
          >
            <Bookmark className="w-5 h-5 text-primary-foreground" />
            {bookmarks.length > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[20px] h-[20px] px-1 text-[10px] font-bold bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-lg border-2 border-primary animate-scale-in">
                {bookmarks.length > 9 ? "9+" : bookmarks.length}
              </span>
            )}
          </button>
          <button 
            onClick={toggleLanguage}
            className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-200 touch-action-manipulation active:scale-95 border border-white/10 hover:scale-105"
            aria-label={t("English mein dekhein", "हिंदी में देखें")}
          >
            <span className="text-xs font-bold text-primary-foreground">
              {language === "hi" ? "EN" : "हि"}
            </span>
          </button>
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-200 touch-action-manipulation active:scale-95 border border-white/10 hover:scale-105"
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
