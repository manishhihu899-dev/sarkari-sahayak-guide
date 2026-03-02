import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { SearchBar } from "@/components/SearchBar";
import { useLanguage } from "@/hooks/use-language";
import { govtCategories, govtPortals, searchGovtPortals, type GovtPortal } from "@/data/govt-directory";
import { ExternalLink, Globe, CheckCircle2, Landmark } from "lucide-react";
import govtEmblem from "@/assets/govt-emblem.png";

const GovtDirectoryPage = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPortals = useMemo(() => {
    let results = searchQuery.length >= 2 ? searchGovtPortals(searchQuery) : govtPortals;
    if (selectedCategory) {
      results = results.filter(p => p.category === selectedCategory);
    }
    return results;
  }, [searchQuery, selectedCategory]);

  const groupedPortals = useMemo(() => {
    if (searchQuery.length >= 2) return null;
    const groups: Record<string, GovtPortal[]> = {};
    filteredPortals.forEach(p => {
      if (!groups[p.category]) groups[p.category] = [];
      groups[p.category].push(p);
    });
    return groups;
  }, [filteredPortals, searchQuery]);

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title={t("सरकारी डायरेक्टरी", "Govt Directory")} showBack />

      <main className="px-4 py-6 space-y-5">
        {/* Hero Banner */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent/60" />
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-white to-green-600" />
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
          <div className="relative z-10 p-5">
            <div className="flex items-center gap-3 mb-3">
              <img src={govtEmblem} alt="Govt Emblem" className="w-10 h-10 object-contain opacity-80" />
              <div>
                <h2 className="text-lg font-bold text-white">{t("🇮🇳 सरकारी पोर्टल डायरेक्टरी", "🇮🇳 Government Portal Directory")}</h2>
                <p className="text-xs text-white/80">{t("100+ सरकारी सेवाएं एक जगह", "100+ government services in one place")}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 pt-3 border-t border-white/20">
              <div className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-white/70" />
                <span className="text-sm font-bold text-white">{govtPortals.length}+</span>
                <span className="text-xs text-white/70">{t("पोर्टल", "Portals")}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Landmark className="w-4 h-4 text-white/70" />
                <span className="text-sm font-bold text-white">{govtCategories.length}</span>
                <span className="text-xs text-white/70">{t("श्रेणियां", "Categories")}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span className="text-xs text-white/80">{t("सत्यापित लिंक", "Verified Links")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder={t("IRCTC, PAN, Passport... खोजें", "Search IRCTC, PAN, Passport...")} />

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-none">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all shrink-0 ${
              !selectedCategory ? "bg-primary text-primary-foreground" : "bg-card text-foreground border border-border"
            }`}
          >
            {t("सभी", "All")}
          </button>
          {govtCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all shrink-0 flex items-center gap-1.5 ${
                selectedCategory === cat.id ? "bg-primary text-primary-foreground" : "bg-card text-foreground border border-border"
              }`}
            >
              <cat.icon className="w-3.5 h-3.5" />
              {language === "hi" ? cat.nameHi : cat.name}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-xs text-muted-foreground px-1">
          {filteredPortals.length} {t("पोर्टल मिले", "portals found")}
        </p>

        {/* Portals List */}
        {searchQuery.length >= 2 || selectedCategory ? (
          <div className="space-y-2">
            {filteredPortals.map((portal, index) => (
              <PortalCard key={portal.id} portal={portal} language={language} delay={index * 30} />
            ))}
            {filteredPortals.length === 0 && (
              <div className="py-12 text-center">
                <Globe className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
                <p className="text-muted-foreground">{t("कोई पोर्टल नहीं मिला", "No portals found")}</p>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            {groupedPortals && govtCategories.map(cat => {
              const portals = groupedPortals[cat.id];
              if (!portals || portals.length === 0) return null;
              return (
                <div key={cat.id}>
                  <div className="flex items-center gap-2 mb-3 px-1">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `hsl(${cat.color} / 0.15)` }}>
                      <cat.icon className="w-4 h-4" style={{ color: `hsl(${cat.color})` }} />
                    </div>
                    <h3 className="text-sm font-bold text-foreground">
                      {language === "hi" ? cat.nameHi : cat.name}
                    </h3>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{portals.length}</span>
                  </div>
                  <div className="space-y-2">
                    {portals.map((portal, index) => (
                      <PortalCard key={portal.id} portal={portal} language={language} delay={index * 20} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
      <BottomNav />
    </div>
  );
};

const PortalCard = ({ portal, language, delay }: { portal: GovtPortal; language: string; delay: number }) => (
  <a
    href={portal.url}
    target="_blank"
    rel="noopener noreferrer"
    className="block p-3.5 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all group animate-fade-up"
    style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
  >
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
        <portal.icon className="w-5 h-5 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
          {language === "hi" ? portal.nameHi : portal.name}
        </h4>
        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
          {language === "hi" ? portal.descriptionHi : portal.description}
        </p>
        <div className="flex items-center gap-1.5 mt-1.5">
          <span className="text-[10px] font-medium text-success bg-success/10 px-1.5 py-0.5 rounded">
            {portal.url.replace("https://", "").replace("www.", "").split("/")[0]}
          </span>
        </div>
      </div>
      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
    </div>
  </a>
);

export default GovtDirectoryPage;
