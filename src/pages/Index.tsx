import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield } from "lucide-react";
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
    <div className="min-h-screen bg-background pb-28">
      <Header />
      
      <main className="px-5 py-6 space-y-6 max-w-lg mx-auto">
        {/* Search */}
        <SearchBar 
          value={searchQuery} 
          onChange={setSearchQuery}
          placeholder={t("खोजें: Aadhaar, PAN, Passport...", "Search: Aadhaar, PAN, Passport...")}
        />

        {/* Search Results */}
        {searchQuery.length > 1 && (
          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground px-1">
              {searchResults.length > 0 
                ? t(`${searchResults.length} परिणाम मिले`, `${searchResults.length} results found`)
                : t("कुछ नहीं मिला", "No results found")
              }
            </p>
            <div className="space-y-3">
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
                  delay={index * 40}
                />
              ))}
            </div>
          </div>
        )}

        {/* Main Content - Show when not searching */}
        {searchQuery.length <= 1 && (
          <>
            {/* Hero Banner - Clean & Trustworthy */}
            <div className="bg-primary rounded-2xl p-6 text-primary-foreground animate-scale-in shadow-elevated overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-foreground/15 flex items-center justify-center">
                    <Shield className="w-4 h-4" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-semibold text-primary-foreground/80 uppercase tracking-wide">
                    {t("भरोसेमंद गाइड", "Trusted Guide")}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold mb-2 tracking-tight">
                  {t("नमस्ते! स्वागत है 🙏", "Namaste! Welcome 🙏")}
                </h2>
                <p className="text-sm text-primary-foreground/85 leading-relaxed font-medium">
                  {t(
                    "Aadhaar, PAN, Passport, Bank - सभी सरकारी कामों की step-by-step जानकारी। कोई form नहीं, कोई fees नहीं।",
                    "Aadhaar, PAN, Passport, Bank - step-by-step guide for all govt services. No forms, no fees."
                  )}
                </p>
              </div>
            </div>

            {/* Services Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-1">
                <h2 className="text-lg font-bold text-foreground tracking-tight">
                  {t("सभी सेवाएं", "All Services")}
                </h2>
                <span className="text-xs font-medium text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">
                  {services.length} {t("सेवाएं", "services")}
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
                    onClick={() => navigate(`/service/${service.id}`)}
                    delay={index * 40}
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
