import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { Bell, Calendar, Shield, Briefcase, Gift, FileText, CreditCard, GraduationCap, Heart, Home, Sparkles, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type Category = "all" | "jobs" | "schemes" | "services" | "alerts";

const updates = [
  {
    icon: Sparkles,
    color: "text-purple-600 bg-purple-500/10",
    title: "App Version 1.1.3 Released",
    desc: "Naya intro video, Privacy Policy, Terms & Conditions aur Contact page add kiye gaye",
    date: "Aaj",
    badge: "NEW",
    category: "alerts" as Category,
    path: "/more",
  },
  {
    icon: Briefcase,
    color: "text-primary bg-primary/10",
    title: "SSC CGL 2026 Notification Out",
    desc: "Tier-1 exam June-July 2026. Online apply ki last date jald announce hogi",
    date: "Aaj",
    badge: "HOT",
    category: "jobs" as Category,
    path: "/jobs",
  },
  {
    icon: Briefcase,
    color: "text-indigo-500 bg-indigo-500/10",
    title: "Railway RRB NTPC 2026 Bharti",
    desc: "35,000+ posts ke liye notification, 10th/12th pass eligible",
    date: "Kal",
    badge: "NEW",
    category: "jobs" as Category,
    path: "/jobs",
  },
  {
    icon: Briefcase,
    color: "text-blue-500 bg-blue-500/10",
    title: "IBPS PO/Clerk 2026 Recruitment",
    desc: "Public sector banks me 8,000+ vacancies, graduates apply kar sakte hain",
    date: "2 din pehle",
    category: "jobs" as Category,
    path: "/jobs",
  },
  {
    icon: Gift,
    color: "text-success bg-success/10",
    title: "PM Kisan 17vi kisht update",
    desc: "Eligibility aur status check karne ka tarika",
    date: "3 din pehle",
    category: "schemes" as Category,
    path: "/schemes",
  },
  {
    icon: Heart,
    color: "text-rose-500 bg-rose-500/10",
    title: "Ayushman Bharat 70+ Senior Card",
    desc: "70 saal se upar ke sabhi senior citizens ko 5 lakh ka free health cover",
    date: "4 din pehle",
    badge: "IMP",
    category: "schemes" as Category,
    path: "/schemes",
  },
  {
    icon: Home,
    color: "text-amber-500 bg-amber-500/10",
    title: "PM Awas Yojana 2.0 Launched",
    desc: "Urban aur Gramin dono me naye registrations open, ₹2.5 lakh tak subsidy",
    date: "5 din pehle",
    category: "schemes" as Category,
    path: "/schemes",
  },
  {
    icon: GraduationCap,
    color: "text-teal-500 bg-teal-500/10",
    title: "PM Scholarship 2026 Open",
    desc: "Class 9-12 aur college students ke liye ₹12,000 tak annual scholarship",
    date: "1 hafta pehle",
    category: "schemes" as Category,
    path: "/schemes",
  },
  {
    icon: CreditCard,
    color: "text-warning bg-warning/10",
    title: "Aadhaar Free Online Update",
    desc: "Document update online bilkul free, December 2026 tak available",
    date: "1 hafta pehle",
    category: "services" as Category,
    path: "/categories",
  },
  {
    icon: FileText,
    color: "text-emerald-500 bg-emerald-500/10",
    title: "PAN-Aadhaar Linking Mandatory",
    desc: "Agar abhi tak link nahi kiya, ₹1,000 late fee ke saath kar sakte hain",
    date: "10 din pehle",
    category: "services" as Category,
    path: "/categories",
  },
  {
    icon: FileText,
    color: "text-cyan-500 bg-cyan-500/10",
    title: "Driving License Renewal Online",
    desc: "Ab Parivahan portal se ghar baithe DL renew karein, 30 din me delivery",
    date: "2 hafte pehle",
    category: "services" as Category,
    path: "/categories",
  },
  {
    icon: Calendar,
    color: "text-pink-500 bg-pink-500/10",
    title: "Voter ID Online Apply",
    desc: "18+ youth Form 6 online bhar sakte hain, 30 din me card milega",
    date: "3 hafte pehle",
    category: "services" as Category,
    path: "/categories",
  },
  {
    icon: TrendingUp,
    color: "text-orange-500 bg-orange-500/10",
    title: "Sukanya Samriddhi Interest Rate",
    desc: "Q1 2026-27 me 8.2% interest rate continue, beti ke future ke liye best",
    date: "3 hafte pehle",
    category: "schemes" as Category,
    path: "/schemes",
  },
];

const filters: { key: Category; label: string }[] = [
  { key: "all", label: "Sabhi" },
  { key: "alerts", label: "Alerts" },
  { key: "jobs", label: "Jobs" },
  { key: "schemes", label: "Yojnaye" },
  { key: "services", label: "Services" },
];

const UpdatesPage = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all" ? updates : updates.filter((u) => u.category === active);

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
          <span className="text-[10px] font-bold bg-white/20 px-2 py-1 rounded-full">{updates.length}</span>
        </div>

        {/* Filter chips */}
        <div className="flex gap-2 overflow-x-auto -mx-4 px-4 pb-1 scrollbar-hide">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold border transition-all active:scale-95 ${
                active === f.key
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "bg-card text-muted-foreground border-border hover:bg-muted/50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filtered.map((u, i) => (
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
                  {u.badge && (
                    <span
                      className={`inline-block mt-2 text-[9px] font-bold px-2 py-0.5 rounded-full ${
                        u.badge === "NEW"
                          ? "bg-success/15 text-success"
                          : u.badge === "HOT"
                          ? "bg-destructive/15 text-destructive"
                          : "bg-warning/15 text-warning"
                      }`}
                    >
                      {u.badge}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-10 text-muted-foreground text-sm">
              Is category me abhi koi update nahi hai
            </div>
          )}
        </div>

        <div className="flex items-start gap-2 bg-warning/10 border border-warning/30 rounded-xl p-3">
          <Shield className="w-4 h-4 text-warning shrink-0 mt-0.5" />
          <p className="text-[11px] text-foreground/80 leading-relaxed">
            Ye updates publicly available sources se hain. Final jaankari official portal par check karein. Ye sirf guidance ke liye hai.
          </p>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default UpdatesPage;
