import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { services } from "@/data/services";
import { useLanguage } from "@/hooks/use-language";
import { Sparkles } from "lucide-react";
import appLogo from "@/assets/new-app-logo.png";

const CategoriesPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title={t("सभी श्रेणियां", "All Categories")} showBack />
      
      {/* Premium Hero Banner */}
      <div className="relative overflow-hidden wave-border">
        {/* Gradient Background with Animation */}
        <div 
          className="absolute inset-0 bg-animated-gradient"
          style={{
            background: `linear-gradient(135deg, hsl(220 65% 28%) 0%, hsl(200 70% 35%) 50%, hsl(180 60% 30%) 100%)`,
            backgroundSize: '400% 400%'
          }}
        />
        
        {/* Moving Dots Pattern */}
        <div className="absolute inset-0 moving-dots opacity-20" />
        
        {/* Animated Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-white/10 blur-2xl continuous-float" />
          <div className="absolute -left-8 -bottom-8 w-36 h-36 rounded-full bg-accent/20 blur-xl continuous-float" style={{ animationDelay: '1s' }} />
          <div className="absolute right-8 bottom-4 w-20 h-20 rounded-full bg-white/10 scale-pulse" />
          <div className="absolute left-1/3 top-6 w-4 h-4 rounded-full bg-accent/60 bounce-continuous" />
          <div className="absolute right-1/4 top-10 w-3 h-3 rounded-full bg-white/50 bounce-continuous" style={{ animationDelay: '0.5s' }} />
          {/* Orbiting elements */}
          <div className="absolute left-16 top-12 w-4 h-4 rounded-full bg-accent/50 orbit" />
          <div className="absolute right-20 bottom-16 w-3 h-3 rounded-full bg-white/40 orbit" style={{ animationDelay: '5s' }} />
          {/* Animated gradient orbs */}
          <div className="absolute right-4 top-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 blur-2xl blob scale-pulse" />
          <div className="absolute left-0 bottom-0 w-28 h-28 rounded-full bg-gradient-to-tr from-white/20 to-transparent blur-xl blob" style={{ animationDelay: '2s' }} />
          {/* Shimmer wave */}
          <div className="absolute inset-0 shimmer-wave" />
        </div>
        
        <div className="relative z-10 p-6 py-8">
          <div className="flex items-center gap-4">
            {/* App Logo */}
            <div 
              className="w-24 h-24 rounded-3xl flex items-center justify-center shrink-0 opacity-0 animate-scale-up overflow-hidden relative group"
              style={{ 
                animationDelay: '100ms',
                animationFillMode: 'forwards'
              }}
            >
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-white/20 to-primary/40 rounded-3xl blur-lg scale-pulse opacity-60" />
              <div className="absolute inset-0 bg-white/10 rounded-3xl" />
              <img 
                src={appLogo} 
                alt="Sarkari Sahayak Logo" 
                className="w-24 h-24 object-contain drop-shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500 continuous-float"
                style={{ filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))' }}
              />
              {/* Sparkle effects */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full bounce-continuous opacity-80" style={{ animationDelay: '0s' }} />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full bounce-continuous opacity-70" style={{ animationDelay: '0.5s' }} />
              <div className="absolute top-1/2 -right-2 w-2 h-2 bg-accent/80 rounded-full scale-pulse opacity-60" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1 opacity-0 animate-fade-up" style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}>
                <Sparkles className="w-4 h-4 text-accent rotate-gentle neon-glow" />
                <span className="text-xs font-semibold text-accent uppercase tracking-wider color-cycle">
                  {t("सभी सेवाएं", "All Services")}
                </span>
              </div>
              <h2 className="text-xl font-bold text-white leading-tight opacity-0 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                {t("श्रेणियां ब्राउज़ करें", "Browse Categories")}
              </h2>
              <p className="text-sm text-white/70 mt-0.5 opacity-0 animate-fade-up" style={{ animationDelay: '250ms', animationFillMode: 'forwards' }}>
                {services.length} {t("सेवाएं उपलब्ध", "services available")}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <main className="px-4 py-6">
        <div className="grid grid-cols-2 gap-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => navigate(`/service/${service.id}`)}
                className="bg-card rounded-2xl p-5 shadow-card transition-all flex flex-col items-center gap-3 text-center opacity-0 animate-scale-up touch-action-manipulation active:scale-[0.98] relative overflow-hidden border border-border/50 group card-hover-effect"
                style={{ 
                  animationDelay: `${100 + index * 60}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Accent line with glow */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ backgroundColor: `hsl(${service.themeColor})` }}
                />
                
                {/* Subtle background gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(145deg, hsl(${service.themeColor} / 0.08) 0%, transparent 100%)`
                  }}
                />
                
                {/* Floating particles on hover */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent/20 opacity-0 group-hover:opacity-100 animate-float particle-delay-1" />
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 animate-float particle-delay-2" />
                
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg relative overflow-hidden"
                  style={{ 
                    background: `linear-gradient(135deg, hsl(${service.themeColor}) 0%, hsl(${service.themeColor} / 0.8) 100%)`,
                    boxShadow: `0 4px 14px -4px hsl(${service.themeColor} / 0.4)`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent" />
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 effect-shine" />
                  <Icon className="w-7 h-7 text-white relative z-10" />
                </div>
                <div className="relative z-10">
                  <h3 className="font-bold text-foreground text-sm leading-tight">
                    {service.titleHi}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {service.title}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default CategoriesPage;