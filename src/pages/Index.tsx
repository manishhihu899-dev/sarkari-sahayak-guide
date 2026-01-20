import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { ServiceCard } from "@/components/ServiceCard";
import { BottomNav } from "@/components/BottomNav";
import { services, searchServices } from "@/data/services";
import { SubServiceCard } from "@/components/SubServiceCard";
import { useLanguage } from "@/hooks/use-language";
import { Sparkles, Star, Zap, Shield, Users, TrendingUp, CheckCircle2, Lock, BadgeCheck } from "lucide-react";
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
            {/* Ultra Premium Government Hero Banner */}
            <div className="relative rounded-3xl overflow-hidden opacity-0 animate-scale-up gradient-border">
              {/* Multi-layer Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent/70 bg-animated-gradient" style={{
            backgroundSize: '400% 400%'
          }} />
              
              {/* Hexagon Pattern Overlay */}
              <div className="absolute inset-0 hexagon-pattern" />
              
              {/* Sliding Pattern Overlay */}
              <div className="absolute inset-0 sliding-pattern opacity-40" />
              
              {/* Moving Dots Pattern */}
              <div className="absolute inset-0 moving-dots opacity-25" />
              
              {/* Digital Rain Effect */}
              <div className="absolute inset-0 digital-rain" />
              
              {/* Spotlight Effect */}
              <div className="absolute inset-0 spotlight" />
              
              {/* Ripple Wave Effect */}
              <div className="absolute inset-0 ripple-wave" />
              
              {/* Animated Decorative Elements */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Ashoka Chakra Watermark */}
                <div className="absolute -right-20 -top-20 w-64 h-64 opacity-[0.08]">
                  <svg viewBox="0 0 100 100" className="w-full h-full ashoka-chakra">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="2" />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="white" strokeWidth="1" />
                    <circle cx="50" cy="50" r="8" fill="white" />
                    {[...Array(24)].map((_, i) => <line key={i} x1="50" y1="15" x2="50" y2="42" stroke="white" strokeWidth="2" transform={`rotate(${i * 15} 50 50)`} />)}
                  </svg>
                </div>
                
                {/* Large Morphing Blobs */}
                <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-white/10 blur-3xl blob continuous-float" />
                <div className="absolute -left-12 -bottom-12 w-44 h-44 rounded-full bg-accent/30 blur-2xl blob" style={{
              animationDelay: '2s'
            }} />
                
                {/* Glowing Orbs */}
                <div className="absolute right-8 bottom-8 w-24 h-24 rounded-full bg-white/15 scale-pulse neon-glow" />
                <div className="absolute left-1/4 top-8 w-16 h-16 rounded-full bg-accent/40 breathing" />
                
                {/* Floating Particles */}
                <div className="absolute left-1/3 top-6 w-4 h-4 rounded-full bg-accent/70 bounce-continuous particle" />
                <div className="absolute right-1/4 top-12 w-3 h-3 rounded-full bg-white/60 bounce-continuous particle-delay-1" />
                <div className="absolute left-12 top-16 w-2 h-2 rounded-full bg-accent/80 bounce-continuous particle-delay-2" />
                <div className="absolute right-12 bottom-16 w-3 h-3 rounded-full bg-white/50 bounce-continuous particle-delay-3" />
                
                {/* Floating Government Icons */}
                <div className="absolute left-4 bottom-24 opacity-20">
                  <Shield className="w-6 h-6 text-white float-govt-icon" />
                </div>
                <div className="absolute right-1/3 top-4 opacity-15">
                  <BadgeCheck className="w-5 h-5 text-accent float-govt-icon" style={{
                animationDelay: '1.5s'
              }} />
                </div>
                
                {/* Orbiting Elements */}
                <div className="absolute right-20 top-20 w-4 h-4 rounded-full bg-accent/60 orbit" />
                <div className="absolute left-24 bottom-24 w-3 h-3 rounded-full bg-white/50 orbit" style={{
              animationDelay: '5s'
            }} />
                
                {/* Gradient Orbs with Glow */}
                <div className="absolute right-0 top-0 w-48 h-48 rounded-full bg-gradient-to-br from-accent/50 to-transparent blur-3xl blob scale-pulse" />
                <div className="absolute left-0 bottom-0 w-40 h-40 rounded-full bg-gradient-to-tr from-white/25 to-transparent blur-2xl blob" style={{
              animationDelay: '3s'
            }} />
                
                {/* Shimmer Wave */}
                <div className="absolute inset-0 shimmer-wave" />
              </div>
              
              {/* Tricolor Ribbon at Top */}
              <div className="absolute top-0 left-0 right-0 h-1.5 tricolor-wave" />
              
              {/* Waving Border at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 wave-border" />
              
              {/* Content */}
              <div className="relative z-10 p-6 pt-8 pb-8">
                <div className="flex items-start gap-4">
                  {/* App Logo with Enhanced Glow */}
                  <div className="w-24 h-24 rounded-2xl flex items-center justify-center shrink-0 opacity-0 animate-scale-up overflow-hidden pulse-ring govt-seal-glow" style={{
                animationDelay: '150ms',
                animationFillMode: 'forwards'
              }}>
                    <img src={appLogo} alt="Sarkari Sahayak Logo" className="w-full h-full object-contain drop-shadow-lg float-icon" />
                  </div>
                  <div className="flex-1">
                    {/* Government Trust Badge */}
                    <div className="flex items-center gap-2 mb-2 opacity-0 animate-fade-up" style={{
                  animationDelay: '200ms',
                  animationFillMode: 'forwards'
                }}>
                      <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full secure-badge">
                        <Lock className="w-3 h-3 text-success" />
                        <span className="text-[10px] font-bold text-white uppercase tracking-wide">
                          {t("100% Secure", "100% Secure")}
                        </span>
                        <CheckCircle2 className="w-3 h-3 text-success verified-tick" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2 opacity-0 animate-fade-up" style={{
                  animationDelay: '250ms',
                  animationFillMode: 'forwards'
                }}>
                      <Sparkles className="w-4 h-4 text-accent rotate-gentle neon-glow" />
                      <span className="text-xs font-bold text-accent uppercase tracking-widest color-cycle glow-text">
                        {t("Digital India", "Digital India")}
                      </span>
                      <Star className="w-3 h-3 text-white/70 scale-pulse" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2 leading-tight opacity-0 animate-fade-up" style={{
                  animationDelay: '300ms',
                  animationFillMode: 'forwards'
                }}>
                      {t("🇮🇳 Swagat hai!", "🇮🇳 Welcome!")}
                    </h2>
                    <p className="text-sm text-white/90 leading-relaxed opacity-0 animate-fade-up" style={{
                  animationDelay: '350ms',
                  animationFillMode: 'forwards'
                }}>
                      {t("Aadhaar, PAN, Passport, Bank - sabhi sarkari kaam ka step-by-step guide. Koi form nahi, koi fees nahi.", "Aadhaar, PAN, Passport, Bank - step-by-step guide for all govt services. No forms, no fees.")}
                    </p>
                  </div>
                </div>
                
                {/* Stats Row with 3D Effect */}
                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/20 opacity-0 animate-slide-up" style={{
              animationDelay: '450ms',
              animationFillMode: 'forwards'
            }}>
                  <div className="flex-1 text-center group cursor-pointer hover:scale-105 transition-transform card-3d bg-white/5 rounded-xl p-2 backdrop-blur-sm">
                    <div className="flex items-center justify-center gap-1">
                      <Zap className="w-4 h-4 text-accent scale-pulse" />
                      <span className="text-xl font-bold text-white counter-animate">15+</span>
                    </div>
                    <div className="text-2xs text-white/80 uppercase tracking-wide fade-pulse">{t("Services", "Services")}</div>
                  </div>
                  <div className="w-px h-12 bg-accent/40 fade-pulse" />
                  <div className="flex-1 text-center group cursor-pointer hover:scale-105 transition-transform card-3d bg-white/5 rounded-xl p-2 backdrop-blur-sm">
                    <div className="flex items-center justify-center gap-1">
                      <Users className="w-4 h-4 text-white/80 scale-pulse" style={{
                    animationDelay: '0.2s'
                  }} />
                      <span className="text-xl font-bold text-white counter-animate" style={{
                    animationDelay: '0.1s'
                  }}>100+</span>
                    </div>
                    <div className="text-2xs text-white/80 uppercase tracking-wide fade-pulse">{t("Guides", "Guides")}</div>
                  </div>
                  <div className="w-px h-12 bg-accent/40 fade-pulse" />
                  <div className="flex-1 text-center group cursor-pointer hover:scale-105 transition-transform card-3d bg-white/5 rounded-xl p-2 backdrop-blur-sm">
                    <div className="flex items-center justify-center gap-1">
                      <Shield className="w-4 h-4 text-success neon-glow" />
                      <span className="text-xl font-bold text-success neon-glow counter-animate" style={{
                    animationDelay: '0.2s'
                  }}>FREE</span>
                    </div>
                    <div className="text-2xs text-white/80 uppercase tracking-wide fade-pulse">{t("Humesha", "Always")}</div>
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