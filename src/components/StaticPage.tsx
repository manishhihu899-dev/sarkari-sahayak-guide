import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { Shield } from "lucide-react";
import { ReactNode } from "react";

interface StaticPageProps {
  title: string;
  intro?: string;
  sections: { heading: string; body: ReactNode }[];
}

export const StaticPage = ({ title, intro, sections }: StaticPageProps) => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title={title} showBack />
      <main className="px-4 py-5 space-y-5">
        <div className="flex items-start gap-2 bg-warning/10 border border-warning/30 rounded-xl p-3">
          <Shield className="w-4 h-4 text-warning shrink-0 mt-0.5" />
          <p className="text-[11px] text-foreground/80 leading-relaxed">
            Ye sirf guidance ke liye hai. This app is NOT an official government app — it only provides guidance and links to official websites.
          </p>
        </div>

        {intro && (
          <p className="text-sm text-muted-foreground leading-relaxed">{intro}</p>
        )}

        {sections.map((s, i) => (
          <section key={i} className="bg-card border border-border rounded-2xl p-4 shadow-card space-y-2">
            <h2 className="text-base font-semibold text-foreground">{s.heading}</h2>
            <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
              {s.body}
            </div>
          </section>
        ))}

        <p className="text-[11px] text-muted-foreground text-center pt-2">
          Last updated: May 2026
        </p>
      </main>
      <BottomNav />
    </div>
  );
};
