import { useEffect, useState, useCallback, useRef } from "react";
import { useLanguage } from "@/hooks/use-language";
import appLogo from "@/assets/app-logo.png";
import {
  Briefcase, Gift, Globe, Shield, Sparkles, CheckCircle2,
  Search, Calculator, Bell, Lock, Rocket, X, Volume2, VolumeX,
  Bookmark, FileText, Building2, WifiOff, Languages, ClipboardList
} from "lucide-react";

interface IntroVideoProps {
  onComplete: () => void;
  isReplay?: boolean;
}

const STORAGE_KEY = "sarkarisahayakguide-intro_seen";

type AnalyticsEvent = {
  event: "viewed" | "skipped" | "completed" | "scene_view" | "replayed" | "music_on" | "music_off";
  scene?: number;
  timestamp: number;
  isReplay?: boolean;
};

const trackEvent = (event: AnalyticsEvent["event"], scene?: number, isReplay?: boolean) => {
  try {
    const existing: AnalyticsEvent[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    existing.push({ event, scene, timestamp: Date.now(), isReplay });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.slice(-100)));
  } catch { /* ignore */ }
};

const SCENE_DURATION = 3200;
const TOTAL_SCENES = 8;

// Patriotic uplifting melody (notes in Hz) - inspired Indian tune feel
const MELODY: Array<{ f: number; d: number }> = [
  { f: 523.25, d: 0.4 }, // C5
  { f: 587.33, d: 0.4 }, // D5
  { f: 659.25, d: 0.4 }, // E5
  { f: 783.99, d: 0.6 }, // G5
  { f: 659.25, d: 0.4 }, // E5
  { f: 587.33, d: 0.4 }, // D5
  { f: 523.25, d: 0.6 }, // C5
  { f: 440.00, d: 0.4 }, // A4
  { f: 523.25, d: 0.4 }, // C5
  { f: 659.25, d: 0.4 }, // E5
  { f: 783.99, d: 0.8 }, // G5
  { f: 880.00, d: 0.8 }, // A5
];
const BASS: Array<{ f: number; d: number }> = [
  { f: 130.81, d: 1.6 }, // C3
  { f: 146.83, d: 1.6 }, // D3
  { f: 174.61, d: 1.6 }, // F3
  { f: 196.00, d: 1.6 }, // G3
];

function playTone(ctx: AudioContext, dest: AudioNode, freq: number, start: number, duration: number, type: OscillatorType, gain: number) {
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  g.gain.setValueAtTime(0, ctx.currentTime + start);
  g.gain.linearRampToValueAtTime(gain, ctx.currentTime + start + 0.02);
  g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + duration);
  osc.connect(g);
  g.connect(dest);
  osc.start(ctx.currentTime + start);
  osc.stop(ctx.currentTime + start + duration + 0.05);
}

export const IntroVideo = ({ onComplete, isReplay = false }: IntroVideoProps) => {
  const { t } = useLanguage();
  const [scene, setScene] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [musicOn, setMusicOn] = useState(true);
  const completedRef = useRef(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const loopTimerRef = useRef<number | null>(null);

  const scheduleLoop = useCallback(() => {
    const ctx = audioCtxRef.current;
    const master = masterGainRef.current;
    if (!ctx || !master) return;
    let t = 0;
    MELODY.forEach((n) => {
      playTone(ctx, master, n.f, t, n.d * 0.95, "triangle", 0.18);
      playTone(ctx, master, n.f * 2, t, n.d * 0.6, "sine", 0.05);
      t += n.d;
    });
    let bt = 0;
    BASS.forEach((n) => {
      playTone(ctx, master, n.f, bt, n.d * 0.9, "sine", 0.12);
      bt += n.d;
    });
    // hi-hat shimmer
    for (let i = 0; i < 16; i++) {
      playTone(ctx, master, 6000 + (i % 2) * 1500, i * 0.4, 0.06, "square", 0.008);
    }
    loopTimerRef.current = window.setTimeout(scheduleLoop, t * 1000);
  }, []);

  const startMusic = useCallback(() => {
    try {
      if (!audioCtxRef.current) {
        const Ctx = (window.AudioContext || (window as any).webkitAudioContext);
        if (!Ctx) return;
        const ctx = new Ctx();
        const master = ctx.createGain();
        master.gain.value = 0.45;
        master.connect(ctx.destination);
        audioCtxRef.current = ctx;
        masterGainRef.current = master;
      }
      audioCtxRef.current.resume();
      scheduleLoop();
    } catch { /* ignore */ }
  }, [scheduleLoop]);

  const stopMusic = useCallback(() => {
    if (loopTimerRef.current) {
      clearTimeout(loopTimerRef.current);
      loopTimerRef.current = null;
    }
    if (masterGainRef.current && audioCtxRef.current) {
      try {
        masterGainRef.current.gain.exponentialRampToValueAtTime(0.001, audioCtxRef.current.currentTime + 0.3);
      } catch { /* ignore */ }
    }
    setTimeout(() => {
      try { audioCtxRef.current?.close(); } catch { /* ignore */ }
      audioCtxRef.current = null;
      masterGainRef.current = null;
    }, 400);
  }, []);

  useEffect(() => {
    trackEvent(isReplay ? "replayed" : "viewed", 0, isReplay);
    startMusic();
    return () => stopMusic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    trackEvent("scene_view", scene, isReplay);
  }, [scene, isReplay]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (scene < TOTAL_SCENES - 1) {
        setScene((s) => s + 1);
      } else if (!completedRef.current) {
        completedRef.current = true;
        trackEvent("completed", scene, isReplay);
        setFadeOut(true);
        stopMusic();
        setTimeout(() => {
          localStorage.setItem("intro_done_v2", "1");
          onComplete();
        }, 500);
      }
    }, SCENE_DURATION);
    return () => clearTimeout(timer);
  }, [scene, onComplete, isReplay, stopMusic]);

  const handleSkip = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    trackEvent("skipped", scene, isReplay);
    setFadeOut(true);
    stopMusic();
    setTimeout(() => {
      localStorage.setItem("intro_done_v2", "1");
      onComplete();
    }, 300);
  }, [scene, onComplete, isReplay, stopMusic]);

  const toggleMusic = useCallback(() => {
    setMusicOn((on) => {
      const next = !on;
      if (next) startMusic(); else stopMusic();
      trackEvent(next ? "music_on" : "music_off", scene, isReplay);
      return next;
    });
  }, [scene, isReplay, startMusic, stopMusic]);

  return (
    <div
      className={`fixed inset-0 z-[101] overflow-hidden bg-[#0a1535] transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        key={`bg-${scene}`}
        className="absolute inset-0 opacity-90"
        style={{
          background:
            scene === 0 ? "radial-gradient(circle at 50% 50%, #FF9933 0%, #0a1535 70%)" :
            scene === 1 ? "radial-gradient(circle at 30% 30%, #1e40af 0%, #0a1535 70%)" :
            scene === 2 ? "radial-gradient(circle at 70% 30%, #7c3aed 0%, #0a1535 70%)" :
            scene === 3 ? "radial-gradient(circle at 50% 70%, #0d9488 0%, #0a1535 70%)" :
            scene === 4 ? "radial-gradient(circle at 30% 70%, #16a34a 0%, #0a1535 70%)" :
            scene === 5 ? "radial-gradient(circle at 70% 50%, #d97706 0%, #0a1535 70%)" :
            scene === 6 ? "radial-gradient(circle at 40% 40%, #0891b2 0%, #0a1535 70%)" :
            "radial-gradient(circle at 50% 50%, #FF9933 0%, #138808 70%, #0a1535 100%)",
          transition: "background 1.2s ease-in-out",
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 32 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-white/30 animate-pulse"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animationDelay: `${i * 0.15}s`,
              animationDuration: `${2 + (i % 3)}s`,
            }}
          />
        ))}
        {/* Music wave bars when playing */}
        {musicOn && (
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-end gap-1 h-8 opacity-50">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className="w-1 bg-white rounded-full animate-pulse"
                style={{
                  height: `${30 + (i % 3) * 25}%`,
                  animationDelay: `${i * 0.12}s`,
                  animationDuration: "0.8s",
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="absolute top-0 left-0 right-0 z-20 p-4 pt-safe">
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: TOTAL_SCENES }).map((_, i) => (
            <div key={i} className="flex-1 h-1 rounded-full bg-white/20 overflow-hidden">
              <div
                className="h-full bg-white rounded-full"
                style={{
                  width: i < scene ? "100%" : i === scene ? "100%" : "0%",
                  transition: i === scene ? `width ${SCENE_DURATION}ms linear` : "width 0.2s",
                }}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={toggleMusic}
            aria-label={musicOn ? "Mute music" : "Play music"}
            className="flex items-center gap-1 text-xs font-semibold text-white/90 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full active:scale-95 transition-transform border border-white/20"
          >
            {musicOn ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            {t("संगीत", "Music")}
          </button>
          <button
            onClick={handleSkip}
            className="flex items-center gap-1 text-xs font-semibold text-white/90 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full active:scale-95 transition-transform border border-white/20"
          >
            <X className="w-3.5 h-3.5" />
            {t("छोड़ें", "Skip")}
          </button>
        </div>
      </div>

      <div className="relative z-10 h-full flex items-center justify-center px-6">
        {scene === 0 && (
          <div key="s0" className="text-center">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 rounded-full bg-white/30 blur-3xl scale-150 animate-pulse" />
              <div className="relative w-36 h-36 rounded-3xl bg-white shadow-2xl flex items-center justify-center animate-scale-in ring-4 ring-white/40">
                <img src={appLogo} alt="Logo" className="w-24 h-24 object-contain" />
              </div>
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-300 animate-pulse" />
              <Sparkles className="absolute -bottom-2 -left-2 w-5 h-5 text-yellow-300 animate-pulse" style={{ animationDelay: "300ms" }} />
            </div>
            <h1 className="text-4xl font-extrabold text-white mb-3 animate-fade-up tracking-tight" style={{ textShadow: "0 4px 24px rgba(0,0,0,0.4)" }}>
              Sarkari Sahayak
            </h1>
            <p className="text-base text-white/90 font-semibold animate-fade-up" style={{ animationDelay: "200ms", animationFillMode: "both" }}>
              {t("सरकारी सेवाओं की आसान गाइड", "Your Government Services Guide")}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 animate-fade-up" style={{ animationDelay: "400ms", animationFillMode: "both" }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold text-white">{t("भारत का #1 गाइड ऐप", "India's #1 Guide App")}</span>
            </div>
          </div>
        )}

        {scene === 1 && (
          <SceneFeature
            icon={<Briefcase className="w-16 h-16 text-white" />}
            title={t("40+ सरकारी सेवाएं", "40+ Govt Services")}
            subtitle={t("स्टेप-बाय-स्टेप गाइड", "Step-by-step guidance")}
            items={[
              t("आधार, पैन, पासपोर्ट", "Aadhaar, PAN, Passport"),
              t("ड्राइविंग लाइसेंस, RTO", "Driving License, RTO"),
              t("राशन कार्ड, वोटर ID", "Ration Card, Voter ID"),
            ]}
            color="from-blue-500 to-indigo-600"
          />
        )}

        {scene === 2 && (
          <SceneFeature
            icon={<Gift className="w-16 h-16 text-white" />}
            title={t("70+ सरकारी योजनाएं", "70+ Govt Schemes")}
            subtitle={t("केंद्र और राज्य की योजनाएं", "Central & State schemes")}
            items={[
              t("PM किसान, आयुष्मान भारत", "PM Kisan, Ayushman Bharat"),
              t("उज्ज्वला, आवास योजना", "Ujjwala, Awas Yojana"),
              t("छात्रवृत्ति, पेंशन", "Scholarships, Pensions"),
            ]}
            color="from-purple-500 to-pink-600"
          />
        )}

        {scene === 3 && (
          <SceneFeature
            icon={<Briefcase className="w-16 h-16 text-white" />}
            title={t("सरकारी नौकरियां", "Government Jobs")}
            subtitle={t("नई vacancies, results, admit cards", "Latest vacancies, results & cards")}
            items={[
              t("SSC, UPSC, Railway, Banking", "SSC, UPSC, Railway, Banking"),
              t("नोटिफिकेशन और लास्ट डेट", "Notifications & last dates"),
              t("Save & track जॉब्स", "Save & track jobs"),
            ]}
            color="from-teal-500 to-emerald-600"
          />
        )}

        {scene === 4 && (
          <div key="s4" className="text-center max-w-sm">
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { icon: Search, label: t("स्मार्ट सर्च", "Smart Search"), color: "bg-blue-500" },
                { icon: Calculator, label: t("पात्रता जांच", "Eligibility"), color: "bg-emerald-500" },
                { icon: Bell, label: t("लाइव अपडेट", "Live Updates"), color: "bg-amber-500" },
                { icon: Globe, label: t("हिंदी/English", "Hindi/English"), color: "bg-purple-500" },
              ].map((f, i) => (
                <div
                  key={i}
                  className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-4 flex flex-col items-center gap-2 animate-scale-in shadow-xl"
                  style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
                >
                  <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center shadow-lg`}>
                    <f.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-bold text-white text-center">{f.label}</span>
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-bold text-white mb-2 animate-fade-up">
              {t("शक्तिशाली टूल्स", "Powerful Tools")}
            </h2>
            <p className="text-sm text-white/85 animate-fade-up" style={{ animationDelay: "150ms", animationFillMode: "both" }}>
              {t("एक ही ऐप में सब कुछ", "Everything in one app")}
            </p>
          </div>
        )}

        {scene === 5 && (
          <SceneFeature
            icon={<ClipboardList className="w-16 h-16 text-white" />}
            title={t("एप्लिकेशन ट्रैकर", "Application Tracker")}
            subtitle={t("अपनी एप्लिकेशन को मैनेज करें", "Manage your applications")}
            items={[
              t("स्टेटस ट्रैक करें", "Track application status"),
              t("Bookmark & Saved Items", "Bookmark & saved items"),
              t("रिमाइंडर और नोट्स", "Reminders & notes"),
            ]}
            color="from-amber-500 to-orange-600"
          />
        )}

        {scene === 6 && (
          <div key="s6" className="text-center max-w-sm">
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { icon: Building2, label: t("सरकारी डायरेक्टरी", "Govt Directory"), color: "bg-cyan-500" },
                { icon: Bookmark, label: t("सेव सेवाएं", "Saved Items"), color: "bg-rose-500" },
                { icon: WifiOff, label: t("ऑफलाइन काम", "Works Offline"), color: "bg-slate-500" },
                { icon: FileText, label: t("स्टेप-बाय-स्टेप", "Step-by-Step"), color: "bg-indigo-500" },
              ].map((f, i) => (
                <div
                  key={i}
                  className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-4 flex flex-col items-center gap-2 animate-scale-in shadow-xl"
                  style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
                >
                  <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center shadow-lg`}>
                    <f.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-bold text-white text-center">{f.label}</span>
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-bold text-white mb-2 animate-fade-up">
              {t("और भी बहुत कुछ", "And Much More")}
            </h2>
            <p className="text-sm text-white/85 animate-fade-up" style={{ animationDelay: "150ms", animationFillMode: "both" }}>
              {t("हर ज़रूरत का जवाब", "Answers to every need")}
            </p>
          </div>
        )}

        {scene === 7 && (
          <div key="s7" className="text-center max-w-sm">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 rounded-full bg-green-400/40 blur-3xl scale-150 animate-pulse" />
              <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-2xl animate-scale-in">
                <Rocket className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-2 animate-fade-up tracking-tight">
              {t("तैयार हैं?", "Ready to Start?")}
            </h2>
            <p className="text-sm text-white/90 mb-5 animate-fade-up" style={{ animationDelay: "150ms", animationFillMode: "both" }}>
              {t("100% मुफ्त · कोई लॉगिन नहीं · प्राइवेसी सुरक्षित", "100% Free · No Login · Privacy Safe")}
            </p>
            <div className="space-y-2 mb-6">
              {[
                { icon: Lock, text: t("कोई डेटा नहीं लिया जाता", "No data collected") },
                { icon: Shield, text: t("सब कुछ आपके फोन में", "Everything on your phone") },
                { icon: CheckCircle2, text: t("नियमित अपडेट", "Regular updates") },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/25 rounded-xl px-4 py-2.5 animate-fade-up"
                  style={{ animationDelay: `${200 + i * 100}ms`, animationFillMode: "both" }}
                >
                  <item.icon className="w-4 h-4 text-green-300 shrink-0" />
                  <span className="text-xs font-semibold text-white text-left">{item.text}</span>
                </div>
              ))}
            </div>
            <button
              onClick={handleSkip}
              className="w-full h-12 rounded-xl bg-white text-[#0a1535] font-bold text-sm shadow-2xl active:scale-95 transition-transform animate-fade-up flex items-center justify-center gap-2"
              style={{ animationDelay: "500ms", animationFillMode: "both" }}
            >
              {t("शुरू करें", "Get Started")} 🚀
            </button>
          </div>
        )}
      </div>

      <div className="absolute bottom-4 left-0 right-0 z-10 text-center px-6">
        <p className="text-[10px] text-white/60 font-medium">
          {t("Ye sirf guidance ke liye hai · सरकारी ऐप नहीं", "For guidance only · Not a government app")}
        </p>
      </div>
    </div>
  );
};

const SceneFeature = ({
  icon, title, subtitle, items, color,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  items: string[];
  color: string;
}) => (
  <div className="text-center max-w-sm">
    <div className={`w-28 h-28 mx-auto rounded-3xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-2xl animate-scale-in ring-4 ring-white/20`}>
      {icon}
    </div>
    <h2 className="text-2xl font-extrabold text-white mb-1 animate-fade-up tracking-tight" style={{ textShadow: "0 4px 16px rgba(0,0,0,0.3)" }}>
      {title}
    </h2>
    <p className="text-sm text-white/85 mb-5 animate-fade-up" style={{ animationDelay: "100ms", animationFillMode: "both" }}>
      {subtitle}
    </p>
    <div className="space-y-2">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/25 rounded-xl px-4 py-2.5 animate-fade-up shadow-lg"
          style={{ animationDelay: `${200 + i * 120}ms`, animationFillMode: "both" }}
        >
          <CheckCircle2 className="w-4 h-4 text-green-300 shrink-0" />
          <span className="text-sm font-semibold text-white text-left">{item}</span>
        </div>
      ))}
    </div>
  </div>
);
