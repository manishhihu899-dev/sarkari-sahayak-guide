import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { 
  Phone, 
  Globe, 
  Shield, 
  HelpCircle,
  ChevronRight,
  AlertTriangle
} from "lucide-react";

const helplines = [
  {
    name: "Aadhaar Helpline",
    number: "1947",
    description: "UIDAI Support",
    icon: Shield
  },
  {
    name: "Income Tax Helpline",
    number: "1800-103-4455",
    description: "PAN & Tax queries",
    icon: Phone
  },
  {
    name: "Passport Seva",
    number: "1800-258-1800",
    description: "Passport queries",
    icon: Globe
  },
  {
    name: "Cyber Crime",
    number: "1930",
    description: "Online fraud reporting",
    icon: AlertTriangle
  },
  {
    name: "RBI Helpline",
    number: "14440",
    description: "Banking complaints",
    icon: Phone
  }
];

const faqs = [
  {
    q: "Ye app kya karti hai?",
    a: "Ye app aapko sarkari kaam ka step-by-step guide deti hai. Koi form submit nahi hota, sirf sahi jaankari milti hai."
  },
  {
    q: "Kya ye app government ki official app hai?",
    a: "Nahi, ye sirf guidance app hai. Official kaam ke liye government websites par jaayein."
  },
  {
    q: "Kya mujhe koi fees deni hogi?",
    a: "Ye app bilkul FREE hai. Government services ki apni fees hoti hai jo official portals par pay hoti hai."
  },
  {
    q: "Mera data safe hai?",
    a: "Haan. Ye app koi personal data collect nahi karti. Sab kuch local hai."
  }
];

const HelpPage = () => {
  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title="Help & FAQs" showBack />
      
      <main className="px-4 py-6 space-y-6">
        {/* Emergency Helplines */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Phone className="w-5 h-5 text-accent" />
            Emergency Helplines
          </h2>
          <div className="space-y-2">
            {helplines.map((helpline, index) => {
              const Icon = helpline.icon;
              return (
                <button
                  key={helpline.number}
                  onClick={() => handleCall(helpline.number)}
                  className="w-full bg-card rounded-xl p-4 shadow-card flex items-center gap-4 text-left hover:bg-secondary/50 transition-colors animate-fade-up touch-action-manipulation"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-success" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">
                      {helpline.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {helpline.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-primary text-lg">
                      {helpline.number}
                    </span>
                    <p className="text-xs text-muted-foreground">Tap to call</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-accent" />
            FAQs - Aksar Puchhe Sawaal
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-4 shadow-card animate-fade-up"
                style={{ animationDelay: `${(helplines.length + index) * 50}ms` }}
              >
                <h3 className="font-semibold text-foreground mb-2 flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-sm text-muted-foreground pl-7 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* About */}
        <div className="bg-primary/5 rounded-xl p-5 space-y-3 animate-fade-up" style={{ animationDelay: "400ms" }}>
          <h2 className="font-semibold text-foreground">
            About This App
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong>सरकारी सहायक</strong> ek free guidance app hai jo Indian citizens ko government aur digital services samajhne mein madad karti hai. 
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Ye app koi government affiliation nahi rakhti. Sirf jaankari ke liye hai. Official kaam hamesha government portals par karein.
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            Version 1.0 • Made with ❤️ for India
          </p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default HelpPage;
