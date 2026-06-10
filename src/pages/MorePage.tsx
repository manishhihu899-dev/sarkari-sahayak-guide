import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/hooks/use-language";
import {
  Grid3X3, Globe, Gift, HelpCircle, Info, Briefcase, Calculator,
  ClipboardList, Bookmark, FileText, Shield, ChevronRight, Bell, Mail, MessageCircle, Lock,
  Share2, Star, Smartphone, PlayCircle, Crown, Download
} from "lucide-react";
import { toast } from "sonner";
import appLogo from "@/assets/app-logo.png";

const APP_VERSION = "1.1.3";
const APP_URL = "https://sarkarisahayak.lovable.app";

const MorePage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleShare = async () => {
    const shareData = {
      title: "Sarkari Sahayak",
      text: t(
        "सरकारी सेवाओं की आसान गाइड — Sarkari Sahayak app try karein!",
        "Easy guide for govt services — try Sarkari Sahayak!"
      ),
      url: APP_URL,
    };
    try {
      if (navigator.share) await navigator.share(shareData);
      else {
        await navigator.clipboard.writeText(`${shareData.text} ${APP_URL}`);
        toast.success(t("लिंक कॉपी हो गया", "Link copied"));
      }
    } catch {/* cancelled */}
  };

  const handleRate = () => {
    navigate("/feedback");
    toast(t("अपनी राय दें ⭐", "Share your rating ⭐"), {
      description: t("Aapka feedback hamare liye important hai", "Your feedback matters"),
    });
  };

  const sections = [
    {
      title: t("प्रीमियम और रिसोर्सेज़", "Premium & Resources"),
      items: [
        { icon: Crown, label: t("प्रीमियम मेम्बरशिप", "Premium Membership"), desc: t("Exclusive guides व priority support", "Exclusive guides & priority support"), path: "/premium", color: "bg-amber-500" },
        { icon: Download, label: t("रिसोर्सेज़ (PDF)", "Resources (PDF)"), desc: t("Guides, notes, resume templates", "Guides, notes, resume templates"), path: "/resources", color: "bg-violet-500" },
      ],
    },
    {
      title: t("सेवाएं और गाइड", "Services & Guides"),
      items: [
        { icon: Grid3X3, label: t("सभी सेवाएं", "All Services"), desc: t("40+ सरकारी सेवाओं की गाइड", "40+ government service guides"), path: "/categories", color: "bg-blue-500" },
        { icon: Gift, label: t("सरकारी योजनाएं", "Govt Schemes"), desc: t("70+ केंद्र और राज्य योजनाएं", "70+ central & state schemes"), path: "/schemes", color: "bg-purple-500" },
        { icon: Globe, label: t("सरकारी डायरेक्टरी", "Govt Directory"), desc: t("100+ सरकारी पोर्टल लिंक", "100+ govt portal links"), path: "/govt-directory", color: "bg-teal-500" },
        { icon: Briefcase, label: t("सरकारी नौकरी", "Government Jobs"), desc: t("नौकरी, रिजल्ट, एडमिट कार्ड", "Jobs, results, admit cards"), path: "/jobs", color: "bg-indigo-500" },
      ],
    },
    {
      title: t("टूल्स", "Tools"),
      items: [
        { icon: Calculator, label: t("पात्रता जांचें", "Eligibility Checker"), desc: t("योजना पात्रता जांचें", "Check scheme eligibility"), path: "/eligibility-checker", color: "bg-emerald-500" },
        { icon: ClipboardList, label: t("आवेदन ट्रैकर", "Application Tracker"), desc: t("अपने आवेदन ट्रैक करें", "Track your applications"), path: "/application-tracker", color: "bg-amber-500" },
        { icon: Bookmark, label: t("सेव की गई गाइड", "Saved Guides"), desc: t("बुकमार्क की गई सेवाएं", "Bookmarked services"), path: "/saved", color: "bg-rose-500" },
      ],
    },
    {
      title: t("सहायता और जानकारी", "Help & Info"),
      items: [
        { icon: PlayCircle, label: t("इंट्रो दोबारा देखें", "Replay Intro"), desc: t("ऐप का इंट्रो वीडियो फिर से देखें", "Watch the app intro again"), action: "replay-intro", color: "bg-orange-500" },
        { icon: Bell, label: t("अपडेट्स", "Updates"), desc: t("नई योजनाएं और नौकरियां", "Latest news & alerts"), path: "/updates", color: "bg-blue-500" },
        { icon: HelpCircle, label: t("सहायता केंद्र", "Help Center"), desc: t("FAQ, हेल्पलाइन नंबर", "FAQ, helpline numbers"), path: "/help", color: "bg-cyan-500" },
        { icon: Info, label: t("हमारे बारे में", "About"), desc: t("ऐप जानकारी", "App info"), path: "/about", color: "bg-gray-500" },
      ],
    },
    {
      title: t("कानूनी और संपर्क", "Legal & Contact"),
      items: [
        { icon: Lock, label: t("गोपनीयता नीति", "Privacy Policy"), desc: t("Data kaise handle hota hai", "How we handle data"), path: "/privacy", color: "bg-slate-500" },
        { icon: FileText, label: t("नियम व शर्तें", "Terms & Conditions"), desc: t("App use karne ke niyam", "App usage terms"), path: "/terms", color: "bg-slate-600" },
        { icon: Mail, label: t("संपर्क करें", "Contact Us"), desc: t("Email aur support", "Email & support"), path: "/contact", color: "bg-emerald-600" },
        { icon: MessageCircle, label: t("फीडबैक", "Feedback / Report"), desc: t("Suggestion ya bug report", "Send suggestion or bug"), path: "/feedback", color: "bg-pink-500" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title={t("और अधिक", "More")} showBack />
      <div className="px-4 py-4 space-y-6">
        {/* App identity card */}
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-4 text-primary-foreground shadow-elevated flex items-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-md">
            <img src={appLogo} alt="App logo" className="w-10 h-10 object-contain" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-base font-bold leading-tight">Sarkari Sahayak</h2>
            <p className="text-[11px] text-white/80 truncate">{t("सरकारी सेवाओं की गाइड", "Government Services Guide")}</p>
            <p className="text-[10px] text-white/60 mt-0.5">v{APP_VERSION} · {t("निःशुल्क", "Free")}</p>
          </div>
        </div>

        {/* Quick actions: Share + Rate */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleShare}
            className="flex flex-col items-center justify-center gap-1.5 bg-card border border-border rounded-xl py-4 hover:bg-muted/50 active:scale-95 transition-all shadow-card"
          >
            <div className="w-10 h-10 rounded-full bg-success/15 flex items-center justify-center">
              <Share2 className="w-5 h-5 text-success" />
            </div>
            <span className="text-xs font-semibold text-foreground">{t("ऐप शेयर करें", "Share App")}</span>
          </button>
          <button
            onClick={handleRate}
            className="flex flex-col items-center justify-center gap-1.5 bg-card border border-border rounded-xl py-4 hover:bg-muted/50 active:scale-95 transition-all shadow-card"
          >
            <div className="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center">
              <Star className="w-5 h-5 text-warning fill-warning" />
            </div>
            <span className="text-xs font-semibold text-foreground">{t("रेट करें", "Rate Us")}</span>
          </button>
        </div>

        {sections.map((section, si) => (
          <div key={si} className="space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground px-1 uppercase tracking-wide">
              {section.title}
            </h3>
            <div className="bg-card border border-border rounded-xl overflow-hidden divide-y divide-border">
              {section.items.map((item: any, ii) => (
                <button
                  key={ii}
                  onClick={() => {
                    if (item.action === "replay-intro") {
                      localStorage.removeItem("intro_done_v2");
                      window.dispatchEvent(new Event("replay-intro"));
                      toast.success(t("इंट्रो शुरू हो रहा है...", "Starting intro..."));
                    } else if (item.path) {
                      navigate(item.path);
                    }
                  }}
                  className="w-full flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors active:scale-[0.99]"
                >
                  <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <p className="text-sm font-semibold text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground line-clamp-1">{item.desc}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Disclaimer footer */}
        <div className="flex items-start gap-2 bg-warning/10 border border-warning/20 rounded-xl p-3 mt-4">
          <Shield className="w-4 h-4 text-warning shrink-0 mt-0.5" />
          <p className="text-[11px] text-muted-foreground leading-relaxed">
            {t(
              "यह ऐप किसी भी सरकारी संगठन से संबद्ध नहीं है। यह केवल सार्वजनिक रूप से उपलब्ध स्रोतों से जानकारी प्रदान करता है।",
              "This app is not affiliated with any government organization. It only provides information from publicly available sources."
            )}
          </p>
        </div>

        {/* App version footer */}
        <div className="flex items-center justify-center gap-1.5 text-muted-foreground pt-2">
          <Smartphone className="w-3 h-3" />
          <p className="text-[10px] font-medium">Sarkari Sahayak · v{APP_VERSION} · Made in 🇮🇳</p>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default MorePage;
