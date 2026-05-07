import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { Bell, Calendar, Shield, Briefcase, Gift, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const updates = [
  {
    icon: Briefcase,
    color: "text-primary bg-primary/10",
    title: "Naye Sarkari Job openings",
    desc: "SSC, IBPS, Railway aur Police bharti ke latest notifications",
    date: "Aaj",
    path: "/jobs",
  },
  {
    icon: Gift,
    color: "text-success bg-success/10",
    title: "PM Kisan 17vi kisht update",
    desc: "Eligibility aur status check karne ka tarika",
    path: "/schemes",
    date: "2 din pehle",
  },
  {
    icon: FileText,
    color: "text-warning bg-warning/10",
    title: "Aadhaar update charges revised",
    desc: "Online free update available till December 2026",
    path: "/categories",
    date: "1 hafta pehle",
  },
  {
    icon: Calendar,
    color: "text-primary bg-primary/10",
    title: "Ayushman card naye registrations",
    desc: "70+ age ke senior citizens automatically eligible",
    path: "/schemes",
    date: "2 hafte pehle",
  },
];

const UpdatesPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title="Latest Updates" showBack />
      <main className="px-4 py-5 space-y-4">
        <div className="flex items-center gap-3 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-4 shadow-elevated">
          <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center">
            <Bell className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h2 className="text-base font-bold">Sarkari News & Alerts</h2>
            <p className="text-xs text-white/85">Schemes, jobs aur services ki taza updates</p>
          </div>
        </div>

        <div className="space-y-3">
          {updates.map((u, i) => (
            <button
              key={i}
              onClick={() => navigate(u.path)}
              className="w-full text-left bg-card border border-border rounded-2xl p-4 shadow-card hover:shadow-elevated transition-all active:scale-[0.99]"
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${u.color}`}>
                  <u.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-foreground line-clamp-1">{u.title}</p>
                    <span className="text-[10px] text-muted-foreground shrink-0">{u.date}</span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">{u.desc}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="flex items-start gap-2 bg-warning/10 border border-warning/30 rounded-xl p-3">
          <Shield className="w-4 h-4 text-warning shrink-0 mt-0.5" />
          <p className="text-[11px] text-foreground/80 leading-relaxed">
            Ye updates publicly available sources se hain. Final jaankari official portal par check karein.
          </p>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default UpdatesPage;
