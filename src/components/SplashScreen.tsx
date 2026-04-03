import { useEffect, useState } from "react";
import appLogo from "@/assets/app-logo.png";

export const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 1800);
    const timer2 = setTimeout(onComplete, 2300);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-accent/70 transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
      {/* Tricolor top */}
      <div className="absolute top-0 left-0 right-0 h-1.5 flex">
        <div className="flex-1 bg-orange-500" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-green-600" />
      </div>

      {/* Logo */}
      <div className="w-24 h-24 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm shadow-2xl mb-6 animate-scale-in">
        <img src={appLogo} alt="Sarkari Sahayak" className="w-full h-full object-contain p-2" />
      </div>

      <h1 className="text-2xl font-bold text-white mb-2 animate-fade-in" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
        Sarkari Sahayak
      </h1>
      <p className="text-sm text-white/70 animate-fade-in" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
        सरकारी सहायक - Your Govt Service Guide
      </p>

      {/* Loading dots */}
      <div className="flex gap-2 mt-8">
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className="w-2.5 h-2.5 rounded-full bg-white/60 animate-bounce"
            style={{ animationDelay: `${i * 200}ms` }}
          />
        ))}
      </div>

      <p className="absolute bottom-8 text-[10px] text-white/40">
        Not affiliated with any government organization
      </p>
    </div>
  );
};
