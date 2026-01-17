import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { ServiceCard } from "@/components/ServiceCard";
import { BottomNav } from "@/components/BottomNav";
import { services, searchServices } from "@/data/services";
import { SubServiceCard } from "@/components/SubServiceCard";
import { useLanguage } from "@/hooks/use-language";
import { Sparkles } from "lucide-react";
import appLogo from "@/assets/app-logo.png";

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
            <div className="relative rounded-3xl overflow-hidden opacity-0 animate-scale-up wave-border">
              {/* Gradient Background with Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/70 bg-animated-gradient" style={{ backgroundSize: '400% 400%' }} />
              
              {/* Moving Dots Pattern */}
              <div className="absolute inset-0 moving-dots opacity-30" />
              
              {/* Animated Decorative Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-white/10 blur-2xl continuous-float" />
                <div className="absolute -left-8 -bottom-8 w-36 h-36 rounded-full bg-accent/30 blur-xl continuous-float" style={{ animationDelay: '1s' }} />
                <div className="absolute right-8 bottom-4 w-20 h-20 rounded-full bg-white/15 scale-pulse" />
                <div className="absolute left-1/3 top-4 w-4 h-4 rounded-full bg-accent/60 bounce-continuous" />
                <div className="absolute right-1/4 top-8 w-3 h-3 rounded-full bg-white/50 bounce-continuous" style={{ animationDelay: '0.5s' }} />
                <div className="absolute left-8 top-12 w-2 h-2 rounded-full bg-accent/70 bounce-continuous" style={{ animationDelay: '1s' }} />
                {/* Orbiting elements */}
                <div className="absolute right-16 top-16 w-4 h-4 rounded-full bg-accent/50 orbit" />
                <div className="absolute left-20 bottom-20 w-3 h-3 rounded-full bg-white/40 orbit" style={{ animationDelay: '5s' }} />
                {/* Animated gradient orbs */}
                <div className="absolute right-0 top-0 w-40 h-40 rounded-full bg-gradient-to-br from-accent/40 to-transparent blur-2xl blob scale-pulse" />
                <div className="absolute left-0 bottom-0 w-32 h-32 rounded-full bg-gradient-to-tr from-white/20 to-transparent blur-xl blob" style={{ animationDelay: '2s' }} />
                {/* Shimmer wave */}
                <div className="absolute inset-0 shimmer-wave" />
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-6">
                <div className="flex items-start gap-4">
                  {/* App Logo */}
                  <div 
                    className="w-24 h-24 rounded-2xl flex items-center justify-center shrink-0 opacity-0 animate-scale-up overflow-hidden bg-white/95 shadow-lg backdrop-blur-sm p-1.5"
                    style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}
                  >
                    <img 
                      src={appLogo} 
                      alt="Sarkari Sahayak Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                      <Sparkles className="w-4 h-4 text-accent rotate-gentle neon-glow" />
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider color-cycle">
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
                
                <div className="flex items-center gap-4 mt-5 pt-4 border-t border-white/10 opacity-0 animate-slide-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
                  <div className="flex-1 text-center group cursor-pointer">
                    <div className="text-xl font-bold text-white group-hover:scale-110 transition-transform scale-pulse">15+</div>
                    <div className="text-2xs text-white/70 uppercase tracking-wide fade-pulse">{t("Services", "Services")}</div>
                  </div>
                  <div className="w-px h-8 bg-accent/50 fade-pulse" />
                  <div className="flex-1 text-center group cursor-pointer">
                    <div className="text-xl font-bold text-white group-hover:scale-110 transition-transform scale-pulse" style={{ animationDelay: '0.3s' }}>100+</div>
                    <div className="text-2xs text-white/70 uppercase tracking-wide fade-pulse">{t("Guides", "Guides")}</div>
                  </div>
                  <div className="w-px h-8 bg-accent/50 fade-pulse" />
                  <div className="flex-1 text-center group cursor-pointer">
                    <div className="text-xl font-bold text-accent neon-glow scale-pulse" style={{ animationDelay: '0.6s' }}>FREE</div>
                    <div className="text-2xs text-white/70 uppercase tracking-wide fade-pulse">{t("Humesha", "Always")}</div>
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