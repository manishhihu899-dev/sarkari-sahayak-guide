import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { useLanguage } from "@/hooks/use-language";
import { 
  Phone, 
  Globe, 
  Shield, 
  HelpCircle,
  ChevronRight,
  AlertTriangle,
  Sparkles,
  Heart,
  BookOpen,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import appLogo from "@/assets/app-logo.png";

const helplines = [
  {
    name: "Aadhaar Helpline",
    nameHi: "आधार हेल्पलाइन",
    number: "1947",
    description: "UIDAI Support",
    descriptionHi: "UIDAI सहायता",
    icon: Shield,
    color: "24 95% 50%"
  },
  {
    name: "Income Tax Helpline",
    nameHi: "इनकम टैक्स हेल्पलाइन",
    number: "1800-103-4455",
    description: "PAN & Tax queries",
    descriptionHi: "पैन और टैक्स प्रश्न",
    icon: Phone,
    color: "210 80% 45%"
  },
  {
    name: "Passport Seva",
    nameHi: "पासपोर्ट सेवा",
    number: "1800-258-1800",
    description: "Passport queries",
    descriptionHi: "पासपोर्ट संबंधी प्रश्न",
    icon: Globe,
    color: "0 70% 50%"
  },
  {
    name: "Cyber Crime",
    nameHi: "साइबर क्राइम",
    number: "1930",
    description: "Online fraud reporting",
    descriptionHi: "ऑनलाइन फ्रॉड रिपोर्ट",
    icon: AlertTriangle,
    color: "45 90% 50%"
  },
  {
    name: "RBI Helpline",
    nameHi: "RBI हेल्पलाइन",
    number: "14440",
    description: "Banking complaints",
    descriptionHi: "बैंकिंग शिकायतें",
    icon: Phone,
    color: "220 70% 45%"
  }
];

const faqs = [
  {
    q: "Ye app kya karti hai?",
    qHi: "यह ऐप क्या करती है?",
    a: "Ye app aapko sarkari kaam ka step-by-step guide deti hai. Koi form submit nahi hota, sirf sahi jaankari milti hai.",
    aHi: "यह ऐप आपको सरकारी काम का स्टेप-बाय-स्टेप गाइड देती है। कोई फॉर्म सबमिट नहीं होता, सिर्फ सही जानकारी मिलती है।"
  },
  {
    q: "Kya ye app government ki official app hai?",
    qHi: "क्या यह ऐप सरकार की आधिकारिक ऐप है?",
    a: "Nahi, ye sirf guidance app hai. Official kaam ke liye government websites par jaayein.",
    aHi: "नहीं, यह सिर्फ गाइडेंस ऐप है। आधिकारिक काम के लिए सरकारी वेबसाइटों पर जाएं।"
  },
  {
    q: "Kya mujhe koi fees deni hogi?",
    qHi: "क्या मुझे कोई फीस देनी होगी?",
    a: "Ye app bilkul FREE hai. Government services ki apni fees hoti hai jo official portals par pay hoti hai.",
    aHi: "यह ऐप बिल्कुल FREE है। सरकारी सेवाओं की अपनी फीस होती है जो आधिकारिक पोर्टल पर पे होती है।"
  },
  {
    q: "Mera data safe hai?",
    qHi: "मेरा डेटा सुरक्षित है?",
    a: "Haan. Ye app koi personal data collect nahi karti. Sab kuch local hai.",
    aHi: "हां। यह ऐप कोई पर्सनल डेटा कलेक्ट नहीं करती। सब कुछ लोकल है।"
  }
];

const features = [
  {
    icon: BookOpen,
    title: "100+ Guides",
    titleHi: "100+ गाइड",
    description: "Step-by-step instructions",
    descriptionHi: "स्टेप-बाय-स्टेप निर्देश"
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    titleHi: "सुरक्षित",
    description: "No data collection",
    descriptionHi: "कोई डेटा संग्रह नहीं"
  },
  {
    icon: CheckCircle2,
    title: "Always Free",
    titleHi: "हमेशा मुफ्त",
    description: "No hidden charges",
    descriptionHi: "कोई छुपा शुल्क नहीं"
  }
];

const HelpPage = () => {
  const { t } = useLanguage();

  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title={t("मदद और FAQs", "Help & FAQs")} showBack />
      
      {/* Premium Hero Banner */}
      <div className="relative overflow-hidden wave-border">
        {/* Gradient Background with Animation */}
        <div 
          className="absolute inset-0 bg-animated-gradient"
          style={{
            background: `linear-gradient(135deg, hsl(262 60% 40%) 0%, hsl(280 65% 35%) 50%, hsl(300 50% 30%) 100%)`,
            backgroundSize: '400% 400%'
          }}
        />
        
        {/* Moving Dots Pattern */}
        <div className="absolute inset-0 moving-dots opacity-20" />
        
        {/* Animated Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-white/10 blur-2xl continuous-float" />
          <div className="absolute -left-8 -bottom-8 w-36 h-36 rounded-full bg-accent/20 blur-xl continuous-float" style={{ animationDelay: '1s' }} />
          <div className="absolute right-8 bottom-4 w-20 h-20 rounded-full bg-white/10 scale-pulse" />
          <div className="absolute left-1/3 top-6 w-4 h-4 rounded-full bg-accent/60 bounce-continuous" />
          <div className="absolute right-1/4 top-10 w-3 h-3 rounded-full bg-white/50 bounce-continuous" style={{ animationDelay: '0.5s' }} />
          {/* Orbiting elements */}
          <div className="absolute right-20 top-16 w-4 h-4 rounded-full bg-accent/50 orbit" />
          <div className="absolute left-16 bottom-20 w-3 h-3 rounded-full bg-white/40 orbit" style={{ animationDelay: '5s' }} />
          {/* Animated gradient orbs */}
          <div className="absolute right-4 top-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 blur-2xl blob scale-pulse" />
          <div className="absolute left-0 bottom-0 w-28 h-28 rounded-full bg-gradient-to-tr from-white/20 to-transparent blur-xl blob" style={{ animationDelay: '2s' }} />
          {/* Shimmer wave */}
          <div className="absolute inset-0 shimmer-wave" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 p-6 pt-8 pb-10">
          <div className="flex items-start gap-4">
            {/* App Logo */}
            <div 
              className="w-24 h-24 rounded-2xl flex items-center justify-center shrink-0 opacity-0 animate-scale-up overflow-hidden"
              style={{ 
                animationDelay: '100ms',
                animationFillMode: 'forwards'
              }}
            >
              <img 
                src={appLogo} 
                alt="Sarkari Sahayak Logo" 
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}>
                <Sparkles className="w-4 h-4 text-accent rotate-gentle neon-glow" />
                <span className="text-xs font-semibold text-accent uppercase tracking-wider color-cycle">
                  {t("सहायता केंद्र", "Help Center")}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-1 leading-tight opacity-0 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                {t("कैसे मदद करें?", "How can we help?")}
              </h2>
              <p className="text-sm text-white/80 leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: '250ms', animationFillMode: 'forwards' }}>
                {t(
                  "हेल्पलाइन, FAQs और ऐप की जानकारी",
                  "Helplines, FAQs and app information"
                )}
              </p>
            </div>
          </div>
          
          {/* Feature Stats */}
          <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/10 opacity-0 animate-slide-up" style={{ animationDelay: '350ms', animationFillMode: 'forwards' }}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex-1 text-center">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-1.5">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-xs font-bold text-white">{t(feature.titleHi, feature.title)}</div>
                  <div className="text-2xs text-white/60">{t(feature.descriptionHi, feature.description)}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <main className="px-4 py-6 space-y-6">
        {/* Emergency Helplines */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 px-1 opacity-0 animate-fade-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
              <Phone className="w-4 h-4 text-success animate-bounce-subtle" />
            </div>
            <h2 className="text-lg font-bold text-foreground">
              {t("आपातकालीन हेल्पलाइन", "Emergency Helplines")}
            </h2>
          </div>
          <div className="space-y-2">
            {helplines.map((helpline, index) => {
              const Icon = helpline.icon;
              return (
                <button
                  key={helpline.number}
                  onClick={() => handleCall(helpline.number)}
                  className="w-full bg-card rounded-2xl p-4 shadow-card flex items-center gap-4 text-left transition-all touch-action-manipulation active:scale-[0.98] card-hover-effect opacity-0 animate-fade-up relative overflow-hidden group border border-border/50"
                  style={{ 
                    animationDelay: `${150 + index * 60}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  {/* Accent line */}
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl transition-all duration-300 group-hover:w-1.5"
                    style={{ backgroundColor: `hsl(${helpline.color})` }}
                  />
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, hsl(${helpline.color} / 0.05) 0%, transparent 100%)`
                      }}
                    />
                  </div>
                  
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 relative overflow-hidden"
                    style={{ 
                      background: `linear-gradient(135deg, hsl(${helpline.color}) 0%, hsl(${helpline.color} / 0.8) 100%)`,
                      boxShadow: `0 4px 14px -4px hsl(${helpline.color} / 0.4)`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent" />
                    <Icon className="w-6 h-6 text-white relative z-10" />
                  </div>
                  <div className="flex-1 relative z-10">
                    <h3 className="font-bold text-foreground">
                      {t(helpline.nameHi, helpline.name)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t(helpline.descriptionHi, helpline.description)}
                    </p>
                  </div>
                  <div className="text-right relative z-10">
                    <span 
                      className="font-bold text-lg"
                      style={{ color: `hsl(${helpline.color})` }}
                    >
                      {helpline.number}
                    </span>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 justify-end">
                      <Phone className="w-3 h-3" />
                      {t("कॉल करें", "Tap to call")}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 px-1 opacity-0 animate-fade-up" style={{ animationDelay: '450ms', animationFillMode: 'forwards' }}>
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
              <HelpCircle className="w-4 h-4 text-accent animate-bounce-subtle" />
            </div>
            <h2 className="text-lg font-bold text-foreground">
              {t("अक्सर पूछे जाने वाले सवाल", "FAQs")}
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-4 shadow-card border border-border/50 opacity-0 animate-fade-up card-hover-effect relative overflow-hidden group"
                style={{ 
                  animationDelay: `${500 + index * 60}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/5 to-transparent rounded-bl-full" />
                
                <h3 className="font-bold text-foreground mb-2 flex items-start gap-2 relative z-10">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <ChevronRight className="w-4 h-4 text-accent" />
                  </div>
                  {t(faq.qHi, faq.q)}
                </h3>
                <p className="text-sm text-muted-foreground pl-8 leading-relaxed relative z-10">
                  {t(faq.aHi, faq.a)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div 
          className="relative rounded-2xl overflow-hidden opacity-0 animate-fade-up" 
          style={{ animationDelay: "700ms", animationFillMode: 'forwards' }}
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10" />
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-accent/10 blur-2xl animate-float" />
            <div className="absolute -left-4 -bottom-4 w-24 h-24 rounded-full bg-primary/10 blur-xl animate-float particle-delay-1" />
          </div>
          
          <div className="relative z-10 p-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary animate-pulse-subtle" />
              </div>
              <div>
                <h2 className="font-bold text-foreground text-lg">
                  {t("ऐप के बारे में", "About This App")}
                </h2>
                <p className="text-xs text-muted-foreground">सरकारी सहायक</p>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">सरकारी सहायक</strong> {t(
                "एक मुफ्त गाइडेंस ऐप है जो भारतीय नागरिकों को सरकारी और डिजिटल सेवाओं को समझने में मदद करती है।",
                "is a free guidance app that helps Indian citizens understand government and digital services."
              )}
            </p>
            
            <div className="flex items-center gap-2 p-3 rounded-xl bg-warning/10 border border-warning/20">
              <AlertTriangle className="w-5 h-5 text-warning shrink-0" />
              <p className="text-xs text-muted-foreground">
                {t(
                  "यह ऐप सरकार से संबद्ध नहीं है। आधिकारिक काम हमेशा सरकारी पोर्टलों पर करें।",
                  "This app has no government affiliation. Always do official work on government portals."
                )}
              </p>
            </div>
            
            <div className="flex items-center justify-between pt-3 border-t border-border/50">
              <p className="text-xs text-muted-foreground">
                Version 1.0 • Made with ❤️ for India
              </p>
              <a 
                href="#"
                className="text-xs text-primary font-medium flex items-center gap-1 hover:underline"
              >
                <ExternalLink className="w-3 h-3" />
                {t("और जानें", "Learn More")}
              </a>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default HelpPage;