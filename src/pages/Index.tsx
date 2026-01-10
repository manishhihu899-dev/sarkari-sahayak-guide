import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { ServiceCard } from "@/components/ServiceCard";
import { BottomNav } from "@/components/BottomNav";
import { services, searchServices } from "@/data/services";
import { SubServiceCard } from "@/components/SubServiceCard";
import { useLanguage } from "@/hooks/use-language";
import { Shield, Sparkles } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useLanguage();

  const searchResults = searchQuery.length > 1 ? searchServices(searchQuery) : [];

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header />
      
      <main className="px-4 py-6 space-y-6">
        {/* Search */}
        <SearchBar 
          value={searchQuery} 
          onChange={setSearchQuery}
          placeholder={t("Search: Aadhaar, PAN, Passport...", "Search: Aadhaar, PAN, Passport...")}
        />

        {/* Search Results */}
        {searchQuery.length > 1 && (
          <div className="space-y-3">
            <h2 className="text-sm font-medium text-muted-foreground px-1">
              {searchResults.length > 0 
                ? t(`${searchResults.length} results mile`, `${searchResults.length} results found`)
                : t("Kuch nahi mila", "No results found")
              }
            </h2>
            {searchResults.map((sub, index) => (
              <SubServiceCard
                key={sub.id}
                title={sub.title}
                titleHi={sub.titleHi}
                description={sub.description}
                onClick={() => {
                  const parentService = services.find(s => 
                    s.subServices.some(ss => ss.id === sub.id)
                  );
                  if (parentService) {
                    navigate(`/service/${parentService.id}/${sub.id}`);
                  }
                }}
                delay={index * 50}
              />
            ))}
          </div>
        )}

        {/* Popular Services - Show when not searching */}
        {searchQuery.length <= 1 && (
          <>
            {/* Premium Hero Banner */}
            <div className="relative rounded-3xl overflow-hidden opacity-0 animate-scale-up">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/70" />
              
              {/* Animated Decorative Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-white/5 blur-2xl animate-float" />
                <div className="absolute -left-8 -bottom-8 w-36 h-36 rounded-full bg-accent/20 blur-xl animate-float particle-delay-2" />
                <div className="absolute right-8 bottom-4 w-20 h-20 rounded-full bg-white/10 animate-pulse-subtle" />
                <div className="absolute left-1/3 top-4 w-3 h-3 rounded-full bg-white/30 animate-bounce-subtle" />
                <div className="absolute right-1/4 top-8 w-2 h-2 rounded-full bg-accent/50 animate-bounce-subtle particle-delay-1" />
                {/* Animated gradient orb */}
                <div className="absolute right-0 top-0 w-40 h-40 rounded-full bg-gradient-to-br from-accent/30 to-transparent blur-2xl animate-morph blob" />
                {/* Shimmer line */}
                <div className="absolute inset-0 effect-shine" />
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center shrink-0 border border-white/20 opacity-0 animate-scale-up effect-shine" style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}>
                    <Shield className="w-7 h-7 text-white icon-bounce" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                      <Sparkles className="w-4 h-4 text-accent animate-pulse-subtle" />
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                        {t("Digital India", "Digital India")}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2 leading-tight opacity-0 animate-fade-up" style={{ animationDelay: '250ms', animationFillMode: 'forwards' }}>
                      {t("🇮🇳 Swagat hai!", "🇮🇳 Welcome!")}
                    </h2>
                    <p className="text-sm text-white/85 leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
                      {t(
                        "Aadhaar, PAN, Passport, Bank - sabhi sarkari kaam ka step-by-step guide. Koi form nahi, koi fees nahi.",
                        "Aadhaar, PAN, Passport, Bank - step-by-step guide for all govt services. No forms, no fees."
                      )}
                    </p>
                  </div>
                </div>
                
                {/* Stats Row */}
                <div className="flex items-center gap-4 mt-5 pt-4 border-t border-white/10 opacity-0 animate-slide-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
                  <div className="flex-1 text-center group">
                    <div className="text-xl font-bold text-white group-hover:scale-110 transition-transform">15+</div>
                    <div className="text-2xs text-white/70 uppercase tracking-wide">{t("Services", "Services")}</div>
                  </div>
                  <div className="w-px h-8 bg-white/20" />
                  <div className="flex-1 text-center group">
                    <div className="text-xl font-bold text-white group-hover:scale-110 transition-transform">100+</div>
                    <div className="text-2xs text-white/70 uppercase tracking-wide">{t("Guides", "Guides")}</div>
                  </div>
                  <div className="w-px h-8 bg-white/20" />
                  <div className="flex-1 text-center group">
                    <div className="text-xl font-bold text-accent animate-pulse-subtle">FREE</div>
                    <div className="text-2xs text-white/70 uppercase tracking-wide">{t("Humesha", "Always")}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-1 opacity-0 animate-fade-up" style={{ animationDelay: '450ms' }}>
                <h2 className="text-lg font-bold text-foreground">
                  {t("Sabhi Services", "All Services")}
                </h2>
                <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                  {services.length} {t("services", "services")}
                </span>
              </div>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    title={service.title}
                    titleHi={service.titleHi}
                    description={service.description}
                    icon={service.icon}
                    themeColor={service.themeColor}
                    onClick={() => navigate(`/service/${service.id}`)}
                    delay={500 + index * 60}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;