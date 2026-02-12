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

        {/* All Services */}
        {searchQuery.length <= 1 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between px-0.5 opacity-0 animate-fade-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
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
                  delay={150 + index * 40} 
                />
              ))}
            </div>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;
