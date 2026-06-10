import { useEffect } from "react";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { AppFooter } from "@/components/AppFooter";
import { useLanguage } from "@/hooks/use-language";
import { digitalProducts, trackOutboundClick } from "@/data/monetization";
import { Download, ShieldCheck, Sparkles } from "lucide-react";

const ResourcesPage = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = t(
      "रिसोर्सेज़ - PDF गाइड्स व टेम्पलेट्स | Sarkari Sahayak",
      "Resources - PDF Guides & Templates | Sarkari Sahayak"
    );
  }, [t]);

  const handleBuy = (link: string, title: string) => {
    trackOutboundClick(link, `product-${title}`);
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title={t("रिसोर्सेज़", "Resources")} showBack />

      <main className="px-4 py-5 space-y-5">
        {/* Hero */}
        <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-5 text-primary-foreground shadow-elevated">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5" />
            <h1 className="text-lg font-bold">
              {t("तैयार रिसोर्सेज़", "Ready-Made Resources")}
            </h1>
          </div>
          <p className="text-xs text-white/90 leading-relaxed">
            {t(
              "PDF गाइड्स, एग्जाम नोट्स और रिज्यूम टेम्पलेट्स — एक जगह।",
              "PDF guides, exam notes and resume templates — all in one place."
            )}
          </p>
          <div className="flex items-center gap-1.5 mt-3 text-[11px] text-white/80">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t("Secure payment · Instant download", "Secure payment · Instant download")}</span>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {digitalProducts.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-border bg-card p-4 shadow-card flex flex-col"
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl shrink-0">
                  {p.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-sm font-bold text-foreground leading-tight">
                    {language === "hi" ? p.titleHi : p.title}
                  </h2>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-snug">
                    {language === "hi" ? p.descHi : p.desc}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/60">
                <span className={`text-base font-bold ${p.price === "Free" ? "text-success" : "text-primary"}`}>
                  {p.price}
                </span>
                <button
                  onClick={() => handleBuy(p.link, p.title)}
                  className="inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-primary text-primary-foreground text-xs font-semibold active:scale-95 transition-transform"
                >
                  <Download className="w-3.5 h-3.5" />
                  {p.price === "Free" ? t("डाउनलोड", "Download") : t("खरीदें", "Buy Now")}
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className="text-[10px] text-muted-foreground text-center mt-2">
          {t(
            "सभी payments Gumroad / Payhip / Razorpay के through securely process होते हैं।",
            "All payments are processed securely via Gumroad / Payhip / Razorpay."
          )}
        </p>
      </main>

      <AppFooter />
      <BottomNav />
    </div>
  );
};

export default ResourcesPage;
