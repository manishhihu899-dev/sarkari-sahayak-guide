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
import { ArrowRight, Shield, Zap, Users } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useLanguage();
  const searchResults = searchQuery.length > 1 ? searchServices(searchQuery) : [];
  
  return (
    <div className="min-h-screen bg-background pb-20">
      <Header />
      
      <main className="px-4 py-5 space-y-5 max-w-lg mx-auto">
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
            <div className="rounded-xl bg-primary p-5 text-primary-foreground opacity-0 animate-scale-in" style={{ animationFillMode: 'forwards' }}>
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-4 h-4 text-primary-foreground/70" />
                <span className="text-[11px] font-medium text-primary-foreground/70 uppercase tracking-wider">
                  {t("100% Free & Secure", "100% Free & Secure")}
                </span>
              </div>
              <h2 className="text-xl font-bold mb-1.5">
                {t("🇮🇳 Swagat hai!", "🇮🇳 Welcome!")}
              </h2>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                {t("Aadhaar, PAN, Passport - sabhi sarkari kaam ka easy guide.", "Aadhaar, PAN, Passport - easy guide for all govt services.")}
              </p>
              
              <div className="flex items-center gap-4 mt-4 pt-3 border-t border-primary-foreground/15">
                <div className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-primary-foreground/60" />
                  <span className="text-xs font-medium">15+ {t("Services", "Services")}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-primary-foreground/60" />
                  <span className="text-xs font-medium">100+ {t("Guides", "Guides")}</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-3">
              <div className="flex items-center justify-between px-0.5 opacity-0 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                <h2 className="text-sm font-semibold text-foreground">
                  {t("Sabhi Services", "All Services")}
                </h2>
                <span className="text-[11px] font-medium text-muted-foreground">
                  {services.length} {t("available", "available")}
                </span>
              </div>
              <div className="space-y-2">
                {services.map((service, index) => (
                  <ServiceCard 
                    key={service.id} 
                    title={service.title} 
                    titleHi={service.titleHi} 
                    description={service.description} 
                    icon={service.icon} 
                    themeColor={service.themeColor} 
                    onClick={() => navigate(`/service/${service.id}`)} 
                    delay={250 + index * 40} 
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
