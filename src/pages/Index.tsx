import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { ServiceCard } from "@/components/ServiceCard";
import { BottomNav } from "@/components/BottomNav";
import { services, searchServices } from "@/data/services";
import { SubServiceCard } from "@/components/SubServiceCard";
import { useLanguage } from "@/hooks/use-language";
import { Sparkles, Zap, Shield, Users, CheckCircle2 } from "lucide-react";
import appLogo from "@/assets/app-logo.png";
import govtEmblem from "@/assets/govt-emblem.png";
const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const {
    t
  } = useLanguage();
  const searchResults = searchQuery.length > 1 ? searchServices(searchQuery) : [];
  return <div className="min-h-screen bg-background pb-24">
      <Header />
      
      <main className="px-4 py-6 space-y-6">
        {/* Search */}
        <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder={t("Search: Aadhaar, PAN, Passport...", "Search: Aadhaar, PAN, Passport...")} />

        {/* Search Results */}
        {searchQuery.length > 1 && <div className="space-y-3">
            <h2 className="text-sm font-medium text-muted-foreground px-1">
              {searchResults.length > 0 ? t(`${searchResults.length} results mile`, `${searchResults.length} results found`) : t("Kuch nahi mila", "No results found")}
            </h2>
            {searchResults.map((sub, index) => <SubServiceCard key={sub.id} title={sub.title} titleHi={sub.titleHi} description={sub.description} onClick={() => {
          const parentService = services.find(s => s.subServices.some(ss => ss.id === sub.id));
          if (parentService) {
            navigate(`/service/${parentService.id}/${sub.id}`);
          }
        }} delay={index * 50} />)}
          </div>}

        {/* Popular Services - Show when not searching */}
        {searchQuery.length <= 1 && <>
            {/* Clean Professional Hero Banner */}
            <div className="relative rounded-2xl overflow-hidden opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
              {/* Simple Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
              
              {/* Subtle Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '24px 24px'
                }} />
              </div>
              
              {/* Subtle Decorative Blob */}
              <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-accent/20 blur-2xl" />
              
              {/* Tricolor Top Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-600" />
              
              {/* Content */}
              <div className="relative z-10 p-5 pt-6">
                <div className="flex items-start gap-4">
                  {/* App Logo */}
                  <div className="w-20 h-20 rounded-xl flex items-center justify-center shrink-0 overflow-hidden bg-white/10 backdrop-blur-sm">
                    <img src={appLogo} alt="Sarkari Sahayak Logo" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    {/* Trust Badge */}
                    <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-2 py-1 rounded-full w-fit mb-2">
                      <Shield className="w-3 h-3 text-green-400" />
                      <span className="text-[10px] font-medium text-white">
                        {t("100% Free & Secure", "100% Free & Secure")}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-1.5">
                      {t("🇮🇳 Swagat hai!", "🇮🇳 Welcome!")}
                    </h2>
                    <p className="text-sm text-white/85 leading-relaxed">
                      {t("Aadhaar, PAN, Passport - sabhi sarkari kaam ka easy guide.", "Aadhaar, PAN, Passport - easy guide for all govt services.")}
                    </p>
                  </div>
                </div>
                
                {/* Stats Row */}
                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/20">
                  <div className="flex-1 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Zap className="w-4 h-4 text-accent" />
                      <span className="text-lg font-bold text-white">15+</span>
                    </div>
                    <div className="text-xs text-white/70">{t("Services", "Services")}</div>
                  </div>
                  <div className="w-px h-10 bg-white/30" />
                  <div className="flex-1 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Users className="w-4 h-4 text-white/80" />
                      <span className="text-lg font-bold text-white">100+</span>
                    </div>
                    <div className="text-xs text-white/70">{t("Guides", "Guides")}</div>
                  </div>
                  <div className="w-px h-10 bg-white/30" />
                  <div className="flex-1 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <span className="text-lg font-bold text-green-400">FREE</span>
                    </div>
                    <div className="text-xs text-white/70">{t("Humesha", "Always")}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions with 3D Cards */}
            

            {/* Government Verification Badge */}
            <div className="flex items-center justify-center gap-3 py-3 opacity-0 animate-fade-up" style={{
          animationDelay: '600ms',
          animationFillMode: 'forwards'
        }}>
              <div className="flex items-center gap-2 bg-gradient-to-r from-success/10 via-success/5 to-transparent px-4 py-2 rounded-full border border-success/20">
                <img src={govtEmblem} alt="Government Emblem" className="w-6 h-6 object-contain opacity-70" />
                <span className="text-xs font-medium text-success flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 verified-tick" />
                  {t("Verified Information", "Verified Information")}
                </span>
              </div>
            </div>

            {/* Services Grid with Enhanced Cards */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-1 opacity-0 animate-fade-up" style={{
            animationDelay: '650ms',
            animationFillMode: 'forwards'
          }}>
                <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                  {t("Sabhi Services", "All Services")}
                </h2>
                <span className="text-xs font-medium text-muted-foreground bg-accent/10 text-accent px-3 py-1.5 rounded-full">
                  {services.length} {t("services", "services")}
                </span>
              </div>
              <div className="space-y-3">
                {services.map((service, index) => <ServiceCard key={service.id} title={service.title} titleHi={service.titleHi} description={service.description} icon={service.icon} themeColor={service.themeColor} onClick={() => navigate(`/service/${service.id}`)} delay={700 + index * 50} />)}
              </div>
            </div>
          </>}
      </main>

      <BottomNav />
    </div>;
};
export default Index;