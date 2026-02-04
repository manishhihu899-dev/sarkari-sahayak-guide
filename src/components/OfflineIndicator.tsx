import { useState, useEffect } from "react";
import { WifiOff, Wifi } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export const OfflineIndicator = () => {
  const { t } = useLanguage();
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showReconnected, setShowReconnected] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowReconnected(true);
      // Hide the reconnected message after 3 seconds
      setTimeout(() => setShowReconnected(false), 3000);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowReconnected(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Show nothing if online and not showing reconnected message
  if (isOnline && !showReconnected) return null;

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[100] px-4 py-2 text-center text-sm font-medium transition-all duration-300 ${
        isOnline
          ? "bg-success text-success-foreground"
          : "bg-destructive text-destructive-foreground"
      }`}
    >
      <div className="flex items-center justify-center gap-2">
        {isOnline ? (
          <>
            <Wifi className="w-4 h-4" />
            <span>{t("इंटरनेट वापस आ गया!", "Back online!")}</span>
          </>
        ) : (
          <>
            <WifiOff className="w-4 h-4" />
            <span>{t("आप ऑफ़लाइन हैं। कुछ फीचर्स काम नहीं करेंगे।", "You're offline. Some features may not work.")}</span>
          </>
        )}
      </div>
    </div>
  );
};
