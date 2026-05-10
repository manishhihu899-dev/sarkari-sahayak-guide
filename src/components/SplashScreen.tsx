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
      className={`fixed inset-0 z-[100] overflow-hidden bg-white transition-opacity duration-400 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Saffron top with waves */}
      <div className="absolute top-0 left-0 right-0 h-[38%]">
        <div className="absolute inset-0 bg-[#FF9933]" />
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 400 80" preserveAspectRatio="none" style={{ height: "60px" }}>
          <path d="M0,40 C100,80 200,0 400,50 L400,80 L0,80 Z" fill="#FFFFFF" fillOpacity="0.18" />
          <path d="M0,55 C120,90 250,20 400,60 L400,80 L0,80 Z" fill="#FFFFFF" fillOpacity="0.28" />
          <path d="M0,70 C140,95 260,45 400,75 L400,80 L0,80 Z" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Green bottom with waves */}
      <div className="absolute bottom-0 left-0 right-0 h-[38%]">
        <div className="absolute inset-0 bg-[#138808]" />
        <svg className="absolute top-0 left-0 w-full" viewBox="0 0 400 80" preserveAspectRatio="none" style={{ height: "60px" }}>
          <path d="M0,40 C100,0 200,80 400,30 L400,0 L0,0 Z" fill="#FFFFFF" fillOpacity="0.18" />
          <path d="M0,25 C120,-10 250,60 400,20 L400,0 L0,0 Z" fill="#FFFFFF" fillOpacity="0.28" />
          <path d="M0,10 C140,-15 260,35 400,5 L400,0 L0,0 Z" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Center content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <div className="w-28 h-28 rounded-3xl overflow-hidden bg-white shadow-2xl mb-6 animate-scale-in flex items-center justify-center ring-2 ring-[#000080]/15">
          <img src={appLogo} alt="Sarkari Sahayak" className="w-20 h-20 object-contain" />
        </div>

        <h1 className="text-3xl font-bold text-[#000080] mb-2 animate-fade-up">
          Sarkari Sahayak
        </h1>
        <p className="text-base text-[#000080]/85 font-semibold animate-fade-up" style={{ animationDelay: "150ms", animationFillMode: "both" }}>
          सरकारी सेवाओं की गाइड
        </p>

        <div className="flex gap-2 mt-8">
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className="w-2.5 h-2.5 rounded-full bg-[#000080]/70 animate-bounce"
              style={{ animationDelay: `${i * 150}ms` }}
            />
          ))}
        </div>
      </div>

      <p className="absolute bottom-5 left-0 right-0 z-10 text-xs text-white px-6 text-center font-medium">
        Not an official government app · Guidance only
      </p>
    </div>
  );
};
