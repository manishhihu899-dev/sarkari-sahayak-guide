import { ArrowLeft, Moon, Sun, Bookmark, Landmark, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/hooks/use-theme";
import { useLanguage } from "@/hooks/use-language";
import { useBookmarks } from "@/hooks/use-bookmarks";
import { usePwaInstall } from "@/hooks/use-pwa-install";
import govtEmblem from "@/assets/govt-emblem.png";

interface HeaderProps {
  title?: string;
  showBack?: boolean;
}

export const Header = ({ title, showBack = false }: HeaderProps) => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const { bookmarks } = useBookmarks();
  const { canInstall, installApp } = usePwaInstall();

  return (
    <header className="sticky top-0 z-50 relative overflow-hidden shadow-elevated">
      {/* Tricolor Top Strip */}
      <div className="h-1 flex">
        <div className="flex-1 bg-[hsl(28_90%_55%)]" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-[hsl(142_70%_38%)]" />
      </div>

      {/* Main Header Background */}
      <div className="bg-gradient-hero relative">
        {/* Animated decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-white/5 animate-float-slow" />
          <div className="absolute -left-4 bottom-0 w-20 h-20 rounded-full bg-accent/8 animate-float-slow" style={{ animationDelay: '3s' }} />
          <div className="absolute right-1/3 top-1/2 w-12 h-12 rounded-full bg-white/[0.03] animate-pulse-soft" />
          {/* Subtle Ashoka Chakra inspired pattern */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-white/[0.06] opacity-40" />
          <div className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/[0.04] opacity-30 animate-[spin_30s_linear_infinite]" />
        </div>

        {/* Shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent animate-shimmer pointer-events-none" />

        <div className="px-4 py-3.5">
          <div className="flex items-center gap-3 relative z-10">
            {showBack &&
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-200 touch-action-manipulation active:scale-95 border border-white/10">

                <ArrowLeft className="w-5 h-5 text-primary-foreground" />
              </button>
            }
            <div className="flex-1">
              {title ?
              <h1 className="text-lg font-bold text-primary-foreground line-clamp-1 tracking-tight">
                  {title}
                </h1> :

              <div className="flex items-center gap-2.5">
                  {/* Government Emblem */}
                  <div className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10 shrink-0">
                    <img src={govtEmblem} alt="Emblem" className="w-6 h-6 object-contain opacity-90 drop-shadow-sm" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h1 className="text-lg font-bold text-primary-foreground tracking-tight leading-tight">
                        {t("सरकारी सहायक", "Sarkaari Sahayak")}
                      </h1>
                      
                    </div>
                    <p className="text-[10px] text-primary-foreground/70 mt-0 font-medium flex items-center gap-1">
                      <Landmark className="w-2.5 h-2.5" />
                      {t("Ek hi app mein sabhi sarkari kaam ka guide", "All govt services guide in one app")}
                    </p>
                  </div>
                </div>
              }
            </div>
            <div className="flex items-center gap-1.5">
              {canInstall && (
                <button
                  onClick={installApp}
                  className="h-9 px-2.5 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center gap-1 hover:bg-white/20 transition-all duration-200 touch-action-manipulation active:scale-95 border border-white/10"
                  aria-label={t("App install karein", "Install app")}
                >
                  <Download className="w-3.5 h-3.5 text-primary-foreground" />
                  <span className="text-[11px] font-semibold text-primary-foreground">{t("Install", "Install")}</span>
                </button>
              )}
              <button
                onClick={() => navigate("/saved")}
                className="relative w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-200 touch-action-manipulation active:scale-95 border border-white/10"
                aria-label={t("Saved services", "सेव की गई सेवाएं")}>

                <Bookmark className="w-4 h-4 text-primary-foreground" />
                {bookmarks.length > 0 &&
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-0.5 text-[9px] font-bold bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-lg border-2 border-primary">
                    {bookmarks.length > 9 ? "9+" : bookmarks.length}
                  </span>
                }
              </button>
              <button
                onClick={toggleLanguage}
                className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-200 touch-action-manipulation active:scale-95 border border-white/10"
                aria-label={t("English mein dekhein", "हिंदी में देखें")}
              >
                <span className="text-[10px] font-bold text-primary-foreground">
                  {language === "hi" ? "EN" : "हि"}
                </span>
              </button>
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-200 touch-action-manipulation active:scale-95 border border-white/10"
                aria-label={theme === "light" ? "Dark mode on karein" : "Light mode on karein"}>

                {theme === "light" ?
                <Moon className="w-4 h-4 text-primary-foreground" /> :

                <Sun className="w-4 h-4 text-primary-foreground" />
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>);

};