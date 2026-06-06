import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { Mail, Globe, Shield, MessageCircle, Clock, AlertTriangle, HelpCircle, Lock } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title="Contact Us" showBack />
      <main className="px-4 py-5 space-y-4">
        <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-5 shadow-elevated">
          <h2 className="text-lg font-bold mb-1">Hum se baat karein</h2>
          <p className="text-sm text-white/85">
            Koi sawaal, suggestion, bug report ya privacy concern ho — humein zaroor batayein. Hum 48 ghante ke andar reply karne ki koshish karte hain.
          </p>
        </div>

        {/* Email */}
        <a
          href="mailto:support@sarkarisahayak.app"
          className="flex items-center gap-3 bg-card border border-border rounded-2xl p-4 shadow-card hover:shadow-elevated transition-all active:scale-[0.99]"
        >
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground">Email Support</p>
            <p className="text-xs text-muted-foreground truncate">support@sarkarisahayak.app</p>
          </div>
        </a>

        {/* Feedback */}
        <a
          href="/feedback"
          className="flex items-center gap-3 bg-card border border-border rounded-2xl p-4 shadow-card hover:shadow-elevated transition-all active:scale-[0.99]"
        >
          <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-success" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground">Feedback bhejein</p>
            <p className="text-xs text-muted-foreground">Suggestions ya bug report karein</p>
          </div>
        </a>

        {/* Help */}
        <a
          href="/help"
          className="flex items-center gap-3 bg-card border border-border rounded-2xl p-4 shadow-card hover:shadow-elevated transition-all active:scale-[0.99]"
        >
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
            <HelpCircle className="w-5 h-5 text-cyan-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground">Help Center / FAQ</p>
            <p className="text-xs text-muted-foreground">Common sawaalon ke jawab</p>
          </div>
        </a>

        {/* Website */}
        <div className="flex items-center gap-3 bg-card border border-border rounded-2xl p-4 shadow-card">
          <div className="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center">
            <Globe className="w-5 h-5 text-warning" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground">Website</p>
            <p className="text-xs text-muted-foreground truncate">sarkarisahayak.lovable.app</p>
          </div>
        </div>

        {/* Response time */}
        <div className="bg-card border border-border rounded-2xl p-4 shadow-card space-y-3">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-semibold text-foreground">Response Time</h3>
          </div>
          <ul className="text-xs text-muted-foreground space-y-1.5 leading-relaxed">
            <li>• <strong>General queries:</strong> 24–48 ghante</li>
            <li>• <strong>Bug reports:</strong> 1–3 din</li>
            <li>• <strong>Privacy / Data requests:</strong> 7 din ke andar</li>
            <li>• <strong>Feature suggestions:</strong> Hum review karte hain, lekin reply guarantee nahi</li>
          </ul>
        </div>

        {/* What to include */}
        <div className="bg-card border border-border rounded-2xl p-4 shadow-card space-y-2">
          <h3 className="text-sm font-semibold text-foreground">Email mein kya bhejein?</h3>
          <ul className="text-xs text-muted-foreground space-y-1.5 leading-relaxed list-disc pl-5">
            <li>Aapka sawaal ya issue clear words mein</li>
            <li>App version (More → bottom mein dikhega)</li>
            <li>Phone model aur Android/browser version</li>
            <li>Screenshot agar possible ho</li>
            <li><strong>Kabhi bhi</strong> Aadhaar, OTP, bank details ya password share NA karein</li>
          </ul>
        </div>

        {/* Privacy note */}
        <div className="flex items-start gap-2 bg-primary/5 border border-primary/20 rounded-xl p-3">
          <Lock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <p className="text-[11px] text-foreground/80 leading-relaxed">
            Aapke emails sirf support ke liye use hote hain. Hum aapka email kabhi kisi third party ko share ya sell nahi karte. Detail ke liye Privacy Policy dekhein.
          </p>
        </div>

        {/* Fraud warning */}
        <div className="flex items-start gap-2 bg-destructive/10 border border-destructive/30 rounded-xl p-3">
          <AlertTriangle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
          <p className="text-[11px] text-foreground/80 leading-relaxed">
            <strong>Fraud Alert:</strong> Sarkari Sahayak kabhi bhi paisa, OTP, Aadhaar ya documents nahi maangta. Aisi koi call/SMS aaye to turant <strong>1930</strong> par report karein ya cybercrime.gov.in par jayein.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="flex items-start gap-2 bg-warning/10 border border-warning/30 rounded-xl p-3">
          <Shield className="w-4 h-4 text-warning shrink-0 mt-0.5" />
          <p className="text-[11px] text-foreground/80 leading-relaxed">
            Ye sirf guidance ke liye hai. Ye app kisi bhi sarkari organization se affiliated nahi hai.
          </p>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default ContactPage;
