import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { ServiceCard } from "@/components/ServiceCard";
import { BottomNav } from "@/components/BottomNav";
import { services, searchServices } from "@/data/services";
import { SubServiceCard } from "@/components/SubServiceCard";
import { useLanguage } from "@/hooks/use-language";

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
            {/* Hero Banner */}
            <div className="bg-gradient-accent rounded-2xl p-5 text-accent-foreground animate-scale-in">
              <h2 className="text-xl font-bold mb-2">
                {t("🇮🇳 Swagat hai!", "🇮🇳 Welcome!")}
              </h2>
              <p className="text-sm opacity-90 leading-relaxed">
                {t(
                  "Aadhaar, PAN, Passport, Bank - sabhi sarkari kaam ka step-by-step guide. Koi form nahi, koi fees nahi - sirf sahi jaankari.",
                  "Aadhaar, PAN, Passport, Bank - step-by-step guide for all govt services. No forms, no fees - just the right information."
                )}
              </p>
            </div>

            {/* Services Grid */}
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground px-1">
                {t("Sabhi Services", "All Services")}
              </h2>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    title={service.title}
                    titleHi={service.titleHi}
                    description={service.description}
                    icon={service.icon}
                    onClick={() => navigate(`/service/${service.id}`)}
                    delay={index * 50}
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
