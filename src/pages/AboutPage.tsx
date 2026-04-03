import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { useLanguage } from "@/hooks/use-language";
import { Shield, Info, FileText, Mail, Globe } from "lucide-react";
import appLogo from "@/assets/app-logo.png";

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title={t("हमारे बारे में", "About")} showBack />
      <div className="px-4 py-6 space-y-6">
        {/* App Info */}
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-2xl overflow-hidden bg-primary/10 mb-4">
            <img src={appLogo} alt="Sarkari Sahayak" className="w-full h-full object-contain p-2" />
          </div>
          <h2 className="text-xl font-bold text-foreground">Sarkari Sahayak</h2>
          <p className="text-sm text-muted-foreground mt-1">Version 2.0.0</p>
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-sm text-foreground mb-1">
                {t("अस्वीकरण", "Disclaimer")}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t(
                  "यह ऐप किसी भी सरकारी संगठन से संबद्ध नहीं है। यह केवल सार्वजनिक रूप से उपलब्ध स्रोतों से जानकारी प्रदान करता है।",
                  "This app is not affiliated with any government organization. It only provides information from publicly available sources."
                )}
              </p>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="bg-card border border-border rounded-xl p-4 space-y-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-sm text-foreground mb-1">
                {t("ऐप के बारे में", "About This App")}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t(
                  "सरकारी सहायक आपको सरकारी सेवाओं, योजनाओं, नौकरियों, परिणामों और एडमिट कार्ड की जानकारी एक ही जगह पर प्रदान करता है। यह ऐप पूरी तरह से मुफ्त है।",
                  "Sarkari Sahayak provides information about government services, schemes, jobs, results and admit cards in one place. This app is completely free."
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-card border border-border rounded-xl p-4">
          <h3 className="font-semibold text-sm text-foreground mb-3">
            {t("मुख्य विशेषताएं", "Key Features")}
          </h3>
          <div className="space-y-3">
            {[
              { icon: "📋", text: t("40+ सरकारी सेवाओं की गाइड", "40+ Government service guides") },
              { icon: "💼", text: t("नवीनतम सरकारी नौकरियां", "Latest government jobs") },
              { icon: "📊", text: t("परिणाम और एडमिट कार्ड", "Results & admit cards") },
              { icon: "🏛️", text: t("70+ सरकारी योजनाएं", "70+ Government schemes") },
              { icon: "🔖", text: t("बुकमार्क और सेव सुविधा", "Bookmark & save feature") },
              { icon: "🌐", text: t("हिंदी और अंग्रेजी", "Hindi & English support") },
              { icon: "🌙", text: t("डार्क मोड सपोर्ट", "Dark mode support") },
              { icon: "📱", text: t("ऑफलाइन काम करता है", "Works offline") },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{f.icon}</span>
                <span>{f.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Policy */}
        <div className="bg-card border border-border rounded-xl p-4">
          <div className="flex items-start gap-3">
            <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-sm text-foreground mb-2">
                {t("गोपनीयता नीति", "Privacy Policy")}
              </h3>
              <div className="text-xs text-muted-foreground leading-relaxed space-y-2">
                <p>
                  {t(
                    "हम आपकी गोपनीयता का सम्मान करते हैं। यह ऐप कोई व्यक्तिगत डेटा एकत्र, संग्रहीत या साझा नहीं करता है।",
                    "We respect your privacy. This app does not collect, store, or share any personal data."
                  )}
                </p>
                <p>
                  {t(
                    "• कोई व्यक्तिगत जानकारी एकत्र नहीं की जाती\n• सभी बुकमार्क और सेटिंग्स आपके डिवाइस पर स्थानीय रूप से संग्रहीत होती हैं\n• कोई तृतीय-पक्ष ट्रैकिंग नहीं\n• कोई विज्ञापन SDK नहीं\n• ऐप इंटरनेट का उपयोग केवल सरकारी वेबसाइट लिंक खोलने के लिए करता है",
                    "• No personal information is collected\n• All bookmarks and settings are stored locally on your device\n• No third-party tracking\n• No ad SDKs\n• The app uses internet only to open government website links"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-card border border-border rounded-xl p-4">
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-sm text-foreground mb-1">
                {t("संपर्क करें", "Contact Us")}
              </h3>
              <p className="text-xs text-muted-foreground">
                {t("सुझाव या प्रतिक्रिया के लिए:", "For suggestions or feedback:")}
              </p>
              <p className="text-xs text-primary mt-1">sarkarisahayak@gmail.com</p>
            </div>
          </div>
        </div>

        <p className="text-center text-[10px] text-muted-foreground/50 pb-4">
          © 2026 Sarkari Sahayak. All rights reserved.
        </p>
      </div>
      <BottomNav />
    </div>
  );
};

export default AboutPage;
