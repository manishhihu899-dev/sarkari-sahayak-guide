import { MessageCircle, HelpCircle, Sparkles } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { helpServices, buildWhatsAppUrl, trackOutboundClick } from "@/data/monetization";
import { useNavigate } from "react-router-dom";

interface ServiceModuleProps {
  /** Optional context label shown in WhatsApp message (e.g. service title) */
  context?: string;
  /** Show only a compact 2-up version */
  compact?: boolean;
}

export const ServiceModule = ({ context, compact }: ServiceModuleProps) => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const items = compact ? helpServices.slice(0, 2) : helpServices;

  const handleWhatsapp = (msg: string) => {
    const fullMsg = context ? `${msg} (${context})` : msg;
    const url = buildWhatsAppUrl(fullMsg);
    trackOutboundClick(url, "service-whatsapp");
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="mt-6 rounded-2xl border border-border bg-card p-4 shadow-card">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <HelpCircle className="w-4 h-4 text-primary" />
        </div>
        <div>
          <h3 className="text-base font-bold text-foreground flex items-center gap-1.5">
            {t("मदद चाहिए?", "Need Help?")}
            <Sparkles className="w-3.5 h-3.5 text-accent" />
          </h3>
          <p className="text-[11px] text-muted-foreground">
            {t("व्यक्तिगत सहायता उपलब्ध है", "Personal assistance available")}
          </p>
        </div>
      </div>

      <div className={`grid ${compact ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2"} gap-2.5 mt-3`}>
        {items.map((s) => (
          <div
            key={s.title}
            className="rounded-xl border border-border/60 bg-background/60 p-3 hover:border-primary/40 transition-colors"
          >
            <p className="text-sm font-semibold text-foreground leading-tight">
              {language === "hi" ? s.titleHi : s.title}
            </p>
            <p className="text-[11px] text-muted-foreground mt-1 leading-snug">
              {language === "hi" ? s.descHi : s.desc}
            </p>
            <button
              onClick={() => handleWhatsapp(s.whatsappMsg)}
              className="mt-2.5 w-full inline-flex items-center justify-center gap-1.5 h-9 rounded-lg bg-success text-success-foreground text-xs font-semibold active:scale-95 transition-transform"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              {t("WhatsApp पर मदद लें", "Get Help on WhatsApp")}
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/contact")}
        className="mt-3 w-full inline-flex items-center justify-center gap-1.5 h-10 rounded-lg border-2 border-primary text-primary text-sm font-semibold active:scale-95 transition-transform"
      >
        {t("सहायता का अनुरोध करें", "Request Assistance")}
      </button>

      <p className="mt-2.5 text-[10px] text-muted-foreground text-center">
        {t(
          "ये एक paid assistance सेवा है। Ye sirf guidance ke liye hai.",
          "This is a paid assistance service. For guidance only."
        )}
      </p>
    </section>
  );
};
