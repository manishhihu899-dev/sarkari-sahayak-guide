import { useState, useRef, useCallback, useEffect } from "react";
import { useLanguage } from "@/hooks/use-language";
import appLogo from "@/assets/app-logo.png";
import {
  Shield, FileText, Briefcase, Gift, Globe, ChevronRight,
  ChevronLeft, Smartphone, Lock, RefreshCw, Star, CheckCircle2
} from "lucide-react";

interface OnboardingSlidesProps {
  onComplete: () => void;
}

export const OnboardingSlides = ({ onComplete }: OnboardingSlidesProps) => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slides = [
    {
      icon: <img src={appLogo} alt="Logo" className="w-20 h-20 object-contain" />,
      title: t("सरकारी सहायक में आपका स्वागत है!", "Welcome to Sarkari Sahayak!"),
      subtitle: t(
        "भारत का #1 सरकारी सेवा गाइड ऐप",
        "India's #1 Government Service Guide App"
      ),
      points: [
        { icon: <Briefcase className="w-4 h-4" />, text: t("40+ सरकारी सेवाओं की स्टेप-बाय-स्टेप गाइड", "40+ step-by-step govt service guides") },
        { icon: <Gift className="w-4 h-4" />, text: t("70+ सरकारी योजनाओं की जानकारी", "70+ government schemes info") },
        { icon: <Globe className="w-4 h-4" />, text: t("100+ सरकारी पोर्टल लिंक", "100+ govt portal links") },
      ],
      gradient: "from-primary via-primary/90 to-accent/70",
    },
    {
      icon: <Smartphone className="w-16 h-16 text-white" />,
      title: t("ऐप की मुख्य सुविधाएं", "App Key Features"),
      subtitle: t("सब कुछ एक ही ऐप में", "Everything in one app"),
      points: [
        { icon: <Briefcase className="w-4 h-4" />, text: t("नवीनतम सरकारी नौकरियां, रिजल्ट और एडमिट कार्ड", "Latest govt jobs, results & admit cards") },
        { icon: <Star className="w-4 h-4" />, text: t("बुकमार्क करें और बाद में पढ़ें", "Bookmark & read later") },
        { icon: <Globe className="w-4 h-4" />, text: t("हिंदी और अंग्रेजी दोनों में उपलब्ध", "Available in Hindi & English") },
        { icon: <RefreshCw className="w-4 h-4" />, text: t("ऑटो अपडेट - हमेशा नई जानकारी", "Auto update - always latest info") },
      ],
      gradient: "from-blue-600 via-blue-500 to-cyan-500",
    },
    {
      icon: <Lock className="w-16 h-16 text-white" />,
      title: t("आपकी गोपनीयता सुरक्षित", "Your Privacy is Safe"),
      subtitle: t("हम कोई डेटा नहीं लेते", "We don't collect any data"),
      points: [
        { icon: <Shield className="w-4 h-4" />, text: t("कोई व्यक्तिगत जानकारी नहीं ली जाती", "No personal info collected") },
        { icon: <Lock className="w-4 h-4" />, text: t("सब कुछ आपके फोन में ही रहता है", "Everything stays on your phone") },
        { icon: <CheckCircle2 className="w-4 h-4" />, text: t("कोई विज्ञापन ट्रैकिंग नहीं", "No ad tracking") },
      ],
      gradient: "from-green-600 via-emerald-500 to-teal-500",
    },
    {
      icon: <FileText className="w-16 h-16 text-white" />,
      title: t("गोपनीयता नीति और अस्वीकरण", "Privacy Policy & Disclaimer"),
      subtitle: "",
      points: [
        { icon: <Shield className="w-4 h-4" />, text: t("यह ऐप किसी सरकारी संगठन से संबद्ध नहीं है", "Not affiliated with any govt organization") },
        { icon: <FileText className="w-4 h-4" />, text: t("केवल सार्वजनिक स्रोतों से जानकारी", "Info from public sources only") },
        { icon: <Lock className="w-4 h-4" />, text: t("कोई डेटा एकत्र/संग्रहीत/साझा नहीं किया जाता", "No data collected/stored/shared") },
        { icon: <RefreshCw className="w-4 h-4" />, text: t("नियमित अपडेट के साथ सटीक जानकारी", "Accurate info with regular updates") },
      ],
      gradient: "from-amber-600 via-orange-500 to-red-500",
    },
  ];

  const goNext = useCallback(() => {
    if (current === slides.length - 1) {
      localStorage.setItem("onboarding_done", "1");
      onComplete();
    } else {
      setCurrent((p) => p + 1);
    }
  }, [current, slides.length, onComplete]);

  const goPrev = useCallback(() => {
    if (current > 0) setCurrent((p) => p - 1);
  }, [current]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goNext() : goPrev();
    }
  };

  const slide = slides[current];

  return (
    <div
      className="fixed inset-0 z-[99] flex flex-col bg-background"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Tricolor strip */}
      <div className="h-1 flex shrink-0">
        <div className="flex-1 bg-orange-500" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-green-600" />
      </div>

      {/* Skip */}
      <div className="flex justify-end px-4 pt-3 shrink-0">
        <button
          onClick={() => { localStorage.setItem("onboarding_done", "1"); onComplete(); }}
          className="text-xs font-medium text-muted-foreground px-3 py-1.5 rounded-full bg-muted/50 active:scale-95 transition-transform"
        >
          {t("छोड़ें", "Skip")}
        </button>
      </div>

      {/* Slide content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 overflow-y-auto">
        {/* Icon area */}
        <div className={`w-28 h-28 rounded-3xl bg-gradient-to-br ${slide.gradient} flex items-center justify-center mb-6 shadow-xl`}>
          {slide.icon}
        </div>

        <h2 className="text-xl font-bold text-foreground text-center mb-2 leading-tight">
          {slide.title}
        </h2>
        {slide.subtitle && (
          <p className="text-sm text-muted-foreground text-center mb-6">
            {slide.subtitle}
          </p>
        )}

        {/* Points */}
        <div className="w-full max-w-sm space-y-3">
          {slide.points.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-card border border-border rounded-xl p-3.5 shadow-sm"
            >
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${slide.gradient} flex items-center justify-center shrink-0 text-white`}>
                {point.icon}
              </div>
              <p className="text-sm text-foreground leading-relaxed pt-1">{point.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom controls */}
      <div className="px-6 pb-8 pt-4 shrink-0">
        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mb-5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-2.5 bg-primary"
                  : "w-2.5 h-2.5 bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        {/* Nav buttons */}
        <div className="flex items-center gap-3">
          {current > 0 && (
            <button
              onClick={goPrev}
              className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center active:scale-95 transition-transform"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
          )}
          <button
            onClick={goNext}
            className={`flex-1 h-12 rounded-xl bg-gradient-to-r ${slide.gradient} text-white font-semibold text-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-transform shadow-lg`}
          >
            {current === slides.length - 1
              ? t("शुरू करें 🚀", "Get Started 🚀")
              : t("आगे बढ़ें", "Next")}
            {current < slides.length - 1 && <ChevronRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};
