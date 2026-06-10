import { ExternalLink, BookOpen } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { affiliateLinks, trackOutboundClick } from "@/data/monetization";

export const AffiliateFooter = () => {
  const { t, language } = useLanguage();

  const handleClick = (url: string, name: string) => {
    trackOutboundClick(url, `affiliate-${name}`);
  };

  return (
    <section className="mt-4 border-t border-border pt-4">
      <div className="flex items-center gap-1.5 mb-2 justify-center">
        <BookOpen className="w-3.5 h-3.5 text-muted-foreground" />
        <h4 className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">
          {t("अनुशंसित टूल्स", "Recommended Tools")}
        </h4>
      </div>
      <p className="text-[10px] text-muted-foreground text-center mb-3 max-w-xs mx-auto">
        {t(
          "छात्रों और नौकरी ढूंढने वालों के लिए उपयोगी संसाधन।",
          "Helpful resources for students and job seekers."
        )}
      </p>
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        {affiliateLinks.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="nofollow noopener noreferrer sponsored"
            onClick={() => handleClick(item.url, item.name)}
            className="flex items-start gap-2 p-2.5 rounded-lg border border-border/70 bg-background hover:border-primary/40 hover:bg-muted/40 transition-colors"
          >
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-foreground flex items-center gap-1">
                {item.name}
                <ExternalLink className="w-2.5 h-2.5 text-muted-foreground" />
              </p>
              <p className="text-[10px] text-muted-foreground line-clamp-2 leading-snug">
                {language === "hi" ? item.descHi : item.desc}
              </p>
            </div>
          </a>
        ))}
      </div>
      <p className="text-[9px] text-muted-foreground text-center mt-2 italic">
        {t(
          "इनमें से कुछ affiliate links हो सकती हैं। आपको कोई extra cost नहीं।",
          "Some links may be affiliate links. No extra cost to you."
        )}
      </p>
    </section>
  );
};
