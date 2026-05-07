import { useEffect, useState } from "react";
import appLogo from "@/assets/app-logo.png";

export const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFadeOut(true), 1700);
    const t2 = setTimeout(onComplete, 2100);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-400 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ background: "linear-gradient(160deg, #1E293B 0%, #1E40AF 60%, #2563EB 100%)" }}
    >
      <div className="w-24 h-24 rounded-3xl overflow-hidden bg-white shadow-2xl mb-6 animate-scale-in flex items-center justify-center">
        <img src={appLogo} alt="Sarkari Sahayak" className="w-16 h-16 object-contain" />
      </div>

      <h1 className="text-2xl font-bold text-white mb-1.5 animate-fade-up" style={{ fontFamily: "'Poppins', sans-serif" }}>
        Sarkari Sahayak
      </h1>
      <p className="text-xs text-white/70 animate-fade-up" style={{ animationDelay: "150ms", animationFillMode: "both" }}>
        सरकारी सेवाओं की गाइड
      </p>

      <div className="flex gap-1.5 mt-10">
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-white/70 animate-bounce"
            style={{ animationDelay: `${i * 150}ms` }}
          />
        ))}
      </div>

      <p className="absolute bottom-6 text-[10px] text-white/45 px-6 text-center">
        Not an official government app · Guidance only
      </p>
    </div>
  );
};
