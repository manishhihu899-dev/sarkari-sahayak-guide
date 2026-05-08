import { ArrowLeft, Moon, Sun, Bookmark, Bell, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/hooks/use-theme";
import { useLanguage } from "@/hooks/use-language";
import { useBookmarks } from "@/hooks/use-bookmarks";
import { usePwaInstall } from "@/hooks/use-pwa-install";
import appLogo from "@/assets/app-logo.png";

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
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-card">
      {/* Indian Tricolor Strip */}
      <div className="flex h-1 w-full">
        <div className="flex-1" style={{ background: "#FF9933" }} />
        <div className="flex-1 bg-white relative flex items-center justify-center">
          <div className="w-2 h-2 rounded-full border border-[#000080]" />
        </div>
        <div className="flex-1" style={{ background: "#138808" }} />
      </div>
      <div className="px-4 py-3">
        <div className="flex items-center gap-3">
          {showBack && (
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors active:scale-95 touch-action-manipulation"
              aria-label="Back"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}

          <div className="flex-1 min-w-0">
            {title ? (
              <h1 className="text-base font-semibold line-clamp-1 tracking-tight">{title}</h1>
            ) : (
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <img src={appLogo} alt="Logo" className="w-7 h-7 object-contain" />
                </div>
                <div className="min-w-0">
                  <h1 className="text-base font-bold tracking-tight leading-tight truncate">
                    {t("सरकारी सहायक", "Sarkari Sahayak")}
                  </h1>
                  <p className="text-[10px] text-white/75 font-medium truncate">
                    {t("सरकारी सेवाओं की गाइड", "Government Services Guide")}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-1">
            {canInstall && (
              <button
                onClick={installApp}
                className="hidden sm:flex h-9 px-2.5 rounded-full bg-white/15 items-center gap-1 hover:bg-white/25 transition-colors active:scale-95"
                aria-label={t("Install app", "Install app")}
              >
                <Download className="w-3.5 h-3.5" />
                <span className="text-[11px] font-semibold">Install</span>
              </button>
            )}
            <button
              onClick={() => navigate("/updates")}
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors active:scale-95"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate("/saved")}
              className="relative w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors active:scale-95"
              aria-label="Saved"
            >
              <Bookmark className="w-4 h-4" />
              {bookmarks.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-0.5 text-[9px] font-bold bg-warning text-warning-foreground rounded-full flex items-center justify-center border border-primary">
                  {bookmarks.length > 9 ? "9+" : bookmarks.length}
                </span>
              )}
            </button>
            <button
              onClick={toggleLanguage}
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors active:scale-95"
              aria-label="Toggle language"
            >
              <span className="text-[10px] font-bold">{language === "hi" ? "EN" : "हि"}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors active:scale-95"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
