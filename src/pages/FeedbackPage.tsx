import { useState } from "react";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { Send, Shield, CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const FeedbackPage = () => {
  const [type, setType] = useState<"suggestion" | "bug" | "content">("suggestion");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim().length < 5) {
      toast({ title: "Thoda detail mein likhein", description: "Kam se kam 5 character" });
      return;
    }
    // Local-only: store last feedback
    try {
      const list = JSON.parse(localStorage.getItem("ss_feedback") || "[]");
      list.push({ type, message, at: Date.now() });
      localStorage.setItem("ss_feedback", JSON.stringify(list.slice(-20)));
    } catch {}
    setSent(true);
    setMessage("");
    toast({ title: "Shukriya!", description: "Aapka feedback save ho gaya." });
  };

  const types: { id: typeof type; label: string }[] = [
    { id: "suggestion", label: "Suggestion" },
    { id: "bug", label: "Bug / Issue" },
    { id: "content", label: "Content galti" },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title="Feedback / Report Issue" showBack />
      <main className="px-4 py-5 space-y-4">
        {sent ? (
          <div className="bg-success/10 border border-success/30 rounded-2xl p-5 text-center">
            <CheckCircle2 className="w-10 h-10 text-success mx-auto mb-2" />
            <h2 className="text-base font-semibold text-foreground">Feedback received</h2>
            <p className="text-xs text-muted-foreground mt-1">Hum jaldi review karenge.</p>
            <button onClick={() => setSent(false)} className="mt-4 text-xs font-semibold text-primary">
              Naya feedback bhejein
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Type</label>
              <div className="flex gap-2 mt-2">
                {types.map(t => (
                  <button
                    type="button"
                    key={t.id}
                    onClick={() => setType(t.id)}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      type === t.id
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card text-foreground border-border"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Aapka message</label>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                rows={6}
                placeholder="Apni baat yahan likhein..."
                className="mt-2 w-full bg-card border border-border rounded-2xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground rounded-2xl py-3 font-semibold flex items-center justify-center gap-2 active:scale-[0.99] shadow-card"
            >
              <Send className="w-4 h-4" /> Bhejein
            </button>
          </form>
        )}

        <div className="flex items-start gap-2 bg-warning/10 border border-warning/30 rounded-xl p-3">
          <Shield className="w-4 h-4 text-warning shrink-0 mt-0.5" />
          <p className="text-[11px] text-foreground/80 leading-relaxed">
            Personal info (Aadhaar, OTP, password) yahan share na karein. Ye sirf guidance app hai.
          </p>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default FeedbackPage;
