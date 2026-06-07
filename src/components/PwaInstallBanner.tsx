import { useState, useEffect } from "react";
import { Download, X, Smartphone } from "lucide-react";
import { usePwaInstall } from "@/hooks/use-pwa-install";
import { useLanguage } from "@/hooks/use-language";
import appLogo from "@/assets/app-logo.png";

export const PwaInstallBanner = () => {
  const { canInstall, installApp } = usePwaInstall();
  const { t } = useLanguage();
  const [dismissed, setDismissed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alreadyDismissed = localStorage.getItem("pwa_banner_dismissed");
    if (!alreadyDismissed && canInstall) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [canInstall]);

  const handleDismiss = () => {
    setDismissed(true);
    setVisible(false);
    localStorage.setItem("pwa_banner_dismissed", "true");
  };

  const handleInstall = async () => {
    await installApp();
    setDismissed(true);
    setVisible(false);
  };

  if (dismissed || !visible) return null;

  return (
    <div className="fixed bottom-16 left-3 right-3 z-[55] animate-fade-up">
      <div className="bg-gradient-to-r from-primary via-primary to-accent rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
        {/* Top tricolor accent */}
        <div className="flex h-1 w-full">
          <div className="flex-1" style={{ background: "#FF9933" }} />
          <div className="flex-1 bg-white" />
          <div className="flex-1" style={{ background: "#138808" }} />
        </div>

        <div className="p-4 flex items-center gap-3">
          {/* App Icon */}
          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-md">
            <img src={appLogo} alt="Sarkari Sahayak" className="w-9 h-9 object-contain" />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-bold text-white leading-tight">
              {t("Sarkari Sahayak Guide Install Karein", "Install Sarkari Sahayak Guide")}
            </h3>
            <p className="text-[11px] text-white/80 mt-0.5 leading-snug">
              {t(
                "Phone me add karein - Aadhaar, PAN, Passport guide offline bhi kaam karega!",
                "Add to your phone - Access Aadhaar, PAN, Passport guides even offline!"
              )}
            </p>
            <div className="flex items-center gap-1 mt-1">
              <Smartphone className="w-3 h-3 text-white/70" />
              <span className="text-[10px] text-white/70 font-medium">
                {t("Free · Fast · No Ads", "Free · Fast · No Ads")}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2 shrink-0">
            <button
              onClick={handleDismiss}
              className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors self-end"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={handleInstall}
              className="flex items-center gap-1.5 bg-white text-primary px-4 py-2 rounded-xl text-xs font-bold shadow-lg hover:bg-white/90 active:scale-95 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              {t("Install", "Install")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
