import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { ServiceCard } from "@/components/ServiceCard";
import { BottomNav } from "@/components/BottomNav";
import { QuickActions } from "@/components/QuickActions";
import { FloatingParticles } from "@/components/FloatingParticles";
import { services, searchServices } from "@/data/services";
import { SubServiceCard } from "@/components/SubServiceCard";
import { useLanguage } from "@/hooks/use-language";
import { Sparkles, Zap, Shield, Users, CheckCircle2 } from "lucide-react";
import appLogo from "@/assets/app-logo.png";
import govtEmblem from "@/assets/govt-emblem.png";

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useLanguage();
  const searchResults = searchQuery.length > 1 ? searchServices(searchQuery) : [];
  
  return (
    <div className="min-h-screen bg-background pb-24 relative">
      {/* Background Floating Particles */}
      <FloatingParticles />
      
      <Header />
      
      <main className="px-4 py-6 space-y-6 relative z-10">
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
                : t("Kuch nahi mila", "No results found")}
            </h2>
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

        {/* Popular Services - Show when not searching */}
        {searchQuery.length <= 1 && (
          <>
            {/* Professional Animated Hero Banner */}
            <div className="relative rounded-2xl overflow-hidden opacity-0 animate-scale-in" style={{ animationFillMode: 'forwards' }}>
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent/70 animate-gradient-shift" />
              
              {/* Subtle Dot Pattern */}
              <div className="absolute inset-0 opacity-15">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '20px 20px'
                }} />
              </div>
              
              {/* Floating Decorative Blobs */}
              <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-white/15 blur-3xl animate-float-slow" />
              <div className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-accent/25 blur-2xl animate-float-slow" style={{ animationDelay: '2s' }} />
              <div className="absolute right-8 bottom-8 w-20 h-20 rounded-full bg-white/10 blur-xl animate-pulse-soft" />
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
              
              {/* Tricolor Top Border */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-white to-green-600" />
              
              {/* Content */}
              <div className="relative z-10 p-5 pt-6">
                <div className="flex items-start gap-4">
                  {/* App Logo with Glow */}
                  <div className="w-20 h-20 rounded-xl flex items-center justify-center shrink-0 overflow-hidden bg-white/10 backdrop-blur-sm shadow-lg animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                    <img src={appLogo} alt="Sarkari Sahayak Logo" className="w-full h-full object-contain drop-shadow-md" />
                  </div>
                  <div className="flex-1">
                    {/* Trust Badge with Pulse */}
                    <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full w-fit mb-2 animate-fade-in" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
                      <Shield className="w-3 h-3 text-green-400 animate-pulse-soft" />
                      <span className="text-[10px] font-semibold text-white tracking-wide">
                        {t("100% Free & Secure", "100% Free & Secure")}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-1.5 animate-fade-in" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
                      {t("🇮🇳 Swagat hai!", "🇮🇳 Welcome!")}
                    </h2>
                    <p className="text-sm text-white/90 leading-relaxed animate-fade-in" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
                      {t("Aadhaar, PAN, Passport - sabhi sarkari kaam ka easy guide.", "Aadhaar, PAN, Passport - easy guide for all govt services.")}
                    </p>
                  </div>
                </div>
                
                {/* Stats Row with Stagger Animation */}
                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/20">
                  <div className="flex-1 text-center opacity-0 animate-fade-in" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
                    <div className="flex items-center justify-center gap-1">
                      <Zap className="w-4 h-4 text-accent" />
                      <span className="text-lg font-bold text-white">15+</span>
                    </div>
                    <div className="text-xs text-white/75">{t("Services", "Services")}</div>
                  </div>
                  <div className="w-px h-10 bg-white/30" />
                  <div className="flex-1 text-center opacity-0 animate-fade-in" style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}>
                    <div className="flex items-center justify-center gap-1">
                      <Users className="w-4 h-4 text-white/80" />
                      <span className="text-lg font-bold text-white">100+</span>
                    </div>
                    <div className="text-xs text-white/75">{t("Guides", "Guides")}</div>
                  </div>
                  <div className="w-px h-10 bg-white/30" />
                  <div className="flex-1 text-center opacity-0 animate-fade-in" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
                    <div className="flex items-center justify-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <span className="text-lg font-bold text-green-400">FREE</span>
                    </div>
                    <div className="text-xs text-white/75">{t("Humesha", "Always")}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Government Verification Badge */}
            <div className="flex items-center justify-center gap-3 py-3 opacity-0 animate-fade-up" style={{
              animationDelay: '600ms',
              animationFillMode: 'forwards'
            }}>
              <div className="flex items-center gap-2 bg-gradient-to-r from-success/10 via-success/5 to-transparent px-4 py-2 rounded-full border border-success/20 shimmer-wave">
                <img src={govtEmblem} alt="Government Emblem" className="w-6 h-6 object-contain opacity-70" />
                <span className="text-xs font-medium text-success flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 neon-glow" />
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
                  <Sparkles className="w-5 h-5 text-accent icon-bounce" />
                  {t("Sabhi Services", "All Services")}
                </h2>
                <span className="text-xs font-medium bg-accent/10 text-accent px-3 py-1.5 rounded-full">
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
                    delay={700 + index * 50} 
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
