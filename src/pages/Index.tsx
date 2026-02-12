import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { ServiceCard } from "@/components/ServiceCard";
import { BottomNav } from "@/components/BottomNav";
import { QuickActions } from "@/components/QuickActions";
import { services, searchServices } from "@/data/services";
import { SubServiceCard } from "@/components/SubServiceCard";
import { useLanguage } from "@/hooks/use-language";
import { ArrowRight, Sparkles, TrendingUp, BookOpen } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useLanguage();
  const searchResults = searchQuery.length > 1 ? searchServices(searchQuery) : [];
  
  return (
    <div className="min-h-screen bg-background pb-20">
      <Header />
      
      <main className="px-4 py-5 space-y-6 max-w-lg mx-auto">
        {/* Search */}
        <SearchBar 
          value={searchQuery} 
          onChange={setSearchQuery} 
          placeholder={t("Search: Aadhaar, PAN, Passport...", "Search: Aadhaar, PAN, Passport...")} 
        />

        {/* Search Results */}
        {searchQuery.length > 1 && (
          <div className="space-y-2">
            <p className="text-xs font-medium text-muted-foreground px-1">
              {searchResults.length > 0 
                ? t(`${searchResults.length} results mile`, `${searchResults.length} results found`) 
                : t("Kuch nahi mila", "No results found")}
            </p>
            {searchResults.map((sub, index) => (
              <SubServiceCard 
                key={sub.id} 
                title={sub.title} 
                titleHi={sub.titleHi} 
                description={sub.description} 
                onClick={() => {
                  const parentService = services.find(s => s.subServices.some(ss => ss.id === sub.id));
                  if (parentService) {
                    navigate(`/service/${parentService.id}/${sub.id}`);
                  }
                }} 
                delay={index * 50} 
              />
            ))}
          </div>
        )}

        {/* Main Content */}
        {searchQuery.length <= 1 && (
          <>
            {/* Hero Card */}
            <div 
              className="relative rounded-2xl overflow-hidden opacity-0 animate-scale-in"
              style={{ animationFillMode: 'forwards' }}
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent opacity-90" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(var(--accent)/0.4),_transparent_50%)]" />
              
              {/* Content */}
              <div className="relative p-6 text-primary-foreground">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1.5 bg-primary-foreground/15 rounded-full px-3 py-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-semibold uppercase tracking-wider">
                      {t("100% Free & Secure", "100% Free & Secure")}
                    </span>
                  </div>
                </div>
                
                <h2 className="text-2xl font-extrabold mb-2 leading-tight">
                  {t("🇮🇳 Swagat hai!", "🇮🇳 Welcome!")}
                </h2>
                <p className="text-sm text-primary-foreground/85 leading-relaxed max-w-[280px]">
                  {t("Aadhaar, PAN, Passport - sabhi sarkari kaam ka easy guide.", "Aadhaar, PAN, Passport - easy guide for all govt services.")}
                </p>
                
                <div className="flex items-center gap-5 mt-5 pt-4 border-t border-primary-foreground/15">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-primary-foreground/15 flex items-center justify-center">
                      <TrendingUp className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-semibold">15+ {t("Services", "Services")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-primary-foreground/15 flex items-center justify-center">
                      <BookOpen className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-semibold">100+ {t("Guides", "Guides")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-3">
              <div className="flex items-center justify-between px-0.5 opacity-0 animate-fade-up" style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}>
                <h2 className="text-base font-bold text-foreground">
                  {t("Sabhi Services", "All Services")}
                </h2>
                <span className="text-xs font-medium text-muted-foreground bg-secondary px-2.5 py-0.5 rounded-full">
                  {services.length} {t("available", "available")}
                </span>
              </div>
              <div className="grid gap-2.5">
                {services.map((service, index) => (
                  <ServiceCard 
                    key={service.id} 
                    title={service.title} 
                    titleHi={service.titleHi} 
                    description={service.description} 
                    icon={service.icon} 
                    themeColor={service.themeColor} 
                    onClick={() => navigate(`/service/${service.id}`)} 
                    delay={200 + index * 50} 
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </main>

      <QuickActions />
      <BottomNav />
    </div>
  );
};

export default Index;
