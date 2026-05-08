import { useEffect, useState } from "react";
import { WifiOff, Wifi } from "lucide-react";

export const NetworkStatus = () => {
  const [online, setOnline] = useState(typeof navigator !== "undefined" ? navigator.onLine : true);
  const [showBack, setShowBack] = useState(false);

  useEffect(() => {
    const goOnline = () => {
      setOnline(true);
      setShowBack(true);
      setTimeout(() => setShowBack(false), 2500);
    };
    const goOffline = () => setOnline(false);
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);
    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  if (online && !showBack) return null;

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[60] py-1.5 px-4 text-center text-[11px] font-semibold text-white shadow-md animate-fade-up ${
        online ? "bg-success" : "bg-destructive"
      }`}
      role="status"
    >
      <span className="inline-flex items-center gap-1.5">
        {online ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
        {online ? "Back online" : "No internet · Offline mode"}
      </span>
    </div>
  );
};
