import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { Mail, Globe, Shield, MessageCircle } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title="Contact Us" showBack />
      <main className="px-4 py-5 space-y-4">
        <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-5 shadow-elevated">
          <h2 className="text-lg font-bold mb-1">Hum se baat karein</h2>
          <p className="text-sm text-white/85">Koi sawaal, suggestion ya issue ho — humein zaroor batayein.</p>
        </div>

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

        <div className="flex items-center gap-3 bg-card border border-border rounded-2xl p-4 shadow-card">
          <div className="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center">
            <Globe className="w-5 h-5 text-warning" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground">Website</p>
            <p className="text-xs text-muted-foreground truncate">sarkarisahayak.lovable.app</p>
          </div>
        </div>

        <div className="flex items-start gap-2 bg-warning/10 border border-warning/30 rounded-xl p-3 mt-4">
          <Shield className="w-4 h-4 text-warning shrink-0 mt-0.5" />
          <p className="text-[11px] text-foreground/80 leading-relaxed">
            Ye sirf guidance ke liye hai. Hum kabhi paisa, OTP ya documents nahi maangte.
          </p>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default ContactPage;
