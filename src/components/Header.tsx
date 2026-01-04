import { ArrowLeft, Share2, Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/hooks/use-theme";
import { useLanguage } from "@/hooks/use-language";

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  showShare?: boolean;
  onShare?: () => void;
}

export const Header = ({ title, showBack = false, showShare = false, onShare }: HeaderProps) => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title || "Sarkaari Sahayak",
          text: t("Ye dekho - sarkari kaam ka easy guide", "Check this - easy guide for government services"),
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      onShare?.();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-primary px-5 py-4 shadow-elevated">
      <div className="flex items-center gap-4">
        {showBack && (
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/15 transition-all duration-200 touch-action-manipulation active:scale-95"
          >
            <ArrowLeft className="w-5 h-5 text-primary-foreground" />
          </button>
        )}
        <div className="flex-1 min-w-0">
          {title ? (
            <h1 className="text-lg font-semibold text-primary-foreground truncate">
              {title}
            </h1>
          ) : (
            <div className="space-y-0.5">
              <h1 className="text-xl font-bold text-primary-foreground tracking-tight">
                {t("सरकारी सहायक", "Sarkaari Sahayak")}
              </h1>
              <p className="text-xs text-primary-foreground/75 font-medium">
                {t("आपका विश्वसनीय सरकारी गाइड", "Your trusted govt services guide")}
              </p>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={toggleLanguage}
            className="h-9 px-3 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/15 transition-all duration-200 touch-action-manipulation active:scale-95"
            aria-label={t("English mein dekhein", "हिंदी में देखें")}
          >
            <span className="text-xs font-bold text-primary-foreground">
              {language === "hi" ? "EN" : "हि"}
            </span>
          </button>
          <button 
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/15 transition-all duration-200 touch-action-manipulation active:scale-95"
            aria-label={theme === "light" ? "Dark mode on karein" : "Light mode on karein"}
          >
            {theme === "light" ? (
              <Moon className="w-4.5 h-4.5 text-primary-foreground" />
            ) : (
              <Sun className="w-4.5 h-4.5 text-primary-foreground" />
            )}
          </button>
          {showShare && (
            <button 
              onClick={handleShare}
              className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/15 transition-all duration-200 touch-action-manipulation active:scale-95"
            >
              <Share2 className="w-4.5 h-4.5 text-primary-foreground" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
