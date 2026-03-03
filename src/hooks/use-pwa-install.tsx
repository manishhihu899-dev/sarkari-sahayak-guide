import { useCallback, useEffect, useState } from "react";

type InstallOutcome = "accepted" | "dismissed";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: InstallOutcome;
    platform: string;
  }>;
}

type StandaloneNavigator = Navigator & {
  standalone?: boolean;
};

const getIsInstalled = () => {
  const inStandaloneMode = window.matchMedia("(display-mode: standalone)").matches;
  const iosStandalone = (window.navigator as StandaloneNavigator).standalone === true;
  return inStandaloneMode || iosStandalone;
};

export const usePwaInstall = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIos, setIsIos] = useState(false);

  useEffect(() => {
    setIsInstalled(getIsInstalled());
    setIsIos(/iphone|ipad|ipod/i.test(window.navigator.userAgent));

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const canInstall = !isInstalled && (Boolean(deferredPrompt) || isIos);

  const installApp = useCallback(async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      setDeferredPrompt(null);
      return;
    }

    if (isIos) {
      window.alert("Install ke liye Safari me Share -> Add to Home Screen use karein.");
    }
  }, [deferredPrompt, isIos]);

  return {
    canInstall,
    installApp,
    isInstalled,
  };
};
