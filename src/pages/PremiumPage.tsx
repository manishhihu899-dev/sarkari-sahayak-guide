import { useEffect } from "react";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { AppFooter } from "@/components/AppFooter";
import { useLanguage } from "@/hooks/use-language";
import { membershipPlans, premiumBenefits, trackOutboundClick } from "@/data/monetization";
import { Crown, Check, Lock, Sparkles } from "lucide-react";

const PremiumPage = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = t(
      "प्रीमियम मेम्बरशिप | Sarkari Sahayak",
      "Premium Membership | Sarkari Sahayak"
    );
  }, [t]);

  const handleSubscribe = (link: string, plan: string) => {
    trackOutboundClick(link, `premium-${plan}`);
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title={t("प्रीमियम", "Premium")} showBack />

      <main className="px-4 py-5 space-y-6">
        {/* Hero */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 p-5 text-white shadow-elevated">
          <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-white/15 blur-2xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur px-2.5 py-1 rounded-full text-[10px] font-semibold mb-2">
              <Crown className="w-3 h-3" /> {t("प्रीमियम मेम्बरशिप", "PREMIUM MEMBERSHIP")}
            </div>
            <h1 className="text-xl font-bold leading-tight">
              {t("और तेज़, और बेहतर सरकारी गाइड", "Faster, deeper govt guidance")}
            </h1>
            <p className="text-xs text-white/90 mt-2 leading-relaxed">
              {t(
                "Exclusive content, priority support और advance updates पाएं।",
                "Unlock exclusive content, priority support and early updates."
              )}
            </p>
          </div>
        </div>

        {/* Benefits */}
        <section>
          <h2 className="text-sm font-bold text-foreground mb-3 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-accent" />
            {t("क्या मिलेगा", "What you get")}
          </h2>
          <ul className="space-y-2">
            {premiumBenefits.map((b, i) => (
              <li key={i} className="flex items-start gap-2.5 bg-card border border-border rounded-xl p-3">
                <div className="w-5 h-5 rounded-full bg-success/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-success" strokeWidth={3} />
                </div>
                <p className="text-xs text-foreground leading-snug">
                  {language === "hi" ? b.hi : b.en}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Plans */}
        <section className="space-y-3">
          <h2 className="text-sm font-bold text-foreground">
            {t("प्लान चुनें", "Choose your plan")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {membershipPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl border-2 p-4 bg-card ${
                  plan.highlight ? "border-primary shadow-elevated" : "border-border shadow-card"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-2.5 right-3 bg-accent text-accent-foreground text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    {plan.badge}
                  </span>
                )}
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  {language === "hi" ? plan.nameHi : plan.name}
                </p>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-xs text-muted-foreground">
                    {language === "hi" ? plan.periodHi : plan.period}
                  </span>
                </div>
                <button
                  onClick={() => handleSubscribe(plan.link, plan.id)}
                  className={`mt-4 w-full h-11 rounded-lg text-sm font-semibold active:scale-95 transition-transform ${
                    plan.highlight
                      ? "bg-primary text-primary-foreground"
                      : "bg-foreground text-background"
                  }`}
                >
                  {t("अभी सब्सक्राइब करें", "Subscribe Now")}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Locked preview */}
        <section>
          <h2 className="text-sm font-bold text-foreground mb-2">
            {t("एक्सक्लूसिव कंटेंट प्रीव्यू", "Exclusive Content Preview")}
          </h2>
          <div className="relative rounded-2xl border border-border bg-card overflow-hidden">
            <div className="p-4 space-y-2 blur-sm select-none pointer-events-none">
              <p className="text-sm font-semibold">📘 PM Vishwakarma Yojana — Advanced Tips</p>
              <p className="text-xs text-muted-foreground">Eligibility hack, document shortcuts...</p>
              <p className="text-sm font-semibold">🎯 SSC CGL 2026 Strategy</p>
              <p className="text-xs text-muted-foreground">Section-wise time management plan...</p>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/60 backdrop-blur-[2px]">
              <Lock className="w-6 h-6 text-primary mb-1.5" />
              <p className="text-xs font-semibold text-foreground">
                {t("प्रीमियम मेम्बर्स के लिए", "Unlocks for Premium members")}
              </p>
            </div>
          </div>
        </section>

        <p className="text-[10px] text-muted-foreground text-center">
          {t(
            "कभी भी cancel करें। Ye sirf guidance ke liye hai, official authority claim nahi.",
            "Cancel anytime. For guidance only — not an official authority."
          )}
        </p>
      </main>

      <AppFooter />
      <BottomNav />
    </div>
  );
};

export default PremiumPage;
