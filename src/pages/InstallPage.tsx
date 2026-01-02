import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { useLanguage } from "@/hooks/use-language";
import { Download, Smartphone, Share, Plus, MoreVertical, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const InstallPage = () => {
  const { t } = useLanguage();
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    // Check if iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(isIOSDevice);

    // Listen for install prompt
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setIsInstalled(true);
    }
    setDeferredPrompt(null);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title={t("App Install करें", "Install App")} showBack />

      <main className="px-4 py-6 space-y-6">
        {/* Hero */}
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
            <Smartphone className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">
            {t("सरकारी सहायक Install करें", "Install Sarkaari Sahayak")}
          </h1>
          <p className="text-muted-foreground">
            {t(
              "App install करें और बिना internet के भी सभी guides देखें",
              "Install the app and access all guides even without internet"
            )}
          </p>
        </div>

        {/* Already Installed */}
        {isInstalled && (
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
              <Check className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-green-700 dark:text-green-400">
                {t("App पहले से Install है!", "App Already Installed!")}
              </h3>
              <p className="text-sm text-green-600 dark:text-green-500">
                {t("आप offline भी use कर सकते हैं", "You can use it offline too")}
              </p>
            </div>
          </div>
        )}

        {/* Install Button for Android/Desktop */}
        {deferredPrompt && !isInstalled && (
          <Button
            onClick={handleInstall}
            className="w-full h-14 text-lg gap-3"
            size="lg"
          >
            <Download className="w-6 h-6" />
            {t("अभी Install करें", "Install Now")}
          </Button>
        )}

        {/* iOS Instructions */}
        {isIOS && !isInstalled && (
          <div className="bg-card rounded-xl p-5 shadow-card space-y-4">
            <h2 className="font-semibold text-lg text-foreground">
              {t("iPhone/iPad पर Install करें", "Install on iPhone/iPad")}
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Share className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">
                    {t("Step 1: Share बटन दबाएं", "Step 1: Tap Share button")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "Safari browser में नीचे Share icon (⬆️) पर tap करें",
                      "In Safari browser, tap the Share icon (⬆️) at the bottom"
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Plus className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">
                    {t("Step 2: Add to Home Screen", "Step 2: Add to Home Screen")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "Scroll करके 'Add to Home Screen' पर tap करें",
                      "Scroll and tap 'Add to Home Screen'"
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">
                    {t("Step 3: Add करें", "Step 3: Tap Add")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "ऊपर 'Add' बटन दबाएं - App home screen पर आ जाएगी",
                      "Tap 'Add' at the top - App will appear on home screen"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Android Instructions */}
        {!isIOS && !isInstalled && !deferredPrompt && (
          <div className="bg-card rounded-xl p-5 shadow-card space-y-4">
            <h2 className="font-semibold text-lg text-foreground">
              {t("Android पर Install करें", "Install on Android")}
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <MoreVertical className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">
                    {t("Step 1: Menu खोलें", "Step 1: Open Menu")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "Chrome browser में ऊपर ⋮ (3 dots) पर tap करें",
                      "In Chrome browser, tap ⋮ (3 dots) at the top"
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Download className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">
                    {t("Step 2: Install App", "Step 2: Install App")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "'Install app' या 'Add to Home screen' पर tap करें",
                      "Tap 'Install app' or 'Add to Home screen'"
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">
                    {t("Step 3: Confirm करें", "Step 3: Confirm")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "'Install' दबाएं - App home screen पर आ जाएगी",
                      "Tap 'Install' - App will appear on home screen"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Benefits */}
        <div className="space-y-3">
          <h2 className="font-semibold text-lg text-foreground px-1">
            {t("Install करने के फायदे", "Benefits of Installing")}
          </h2>
          <div className="grid gap-3">
            {[
              {
                hi: "📴 बिना Internet के भी चलेगी",
                en: "📴 Works without Internet",
              },
              {
                hi: "⚡ Fast loading - instant open",
                en: "⚡ Fast loading - instant open",
              },
              {
                hi: "🏠 Home screen से direct access",
                en: "🏠 Direct access from home screen",
              },
              {
                hi: "💾 कम data खर्च",
                en: "💾 Uses less data",
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-card rounded-lg p-4 shadow-card flex items-center gap-3"
              >
                <span className="text-lg">{t(benefit.hi, benefit.en)}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default InstallPage;
