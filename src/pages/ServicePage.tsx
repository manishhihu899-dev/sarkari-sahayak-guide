import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { SubServiceCard } from "@/components/SubServiceCard";
import { ServiceModule } from "@/components/ServiceModule";
import { AppFooter } from "@/components/AppFooter";
import { BottomNav } from "@/components/BottomNav";
import { getServiceById } from "@/data/services";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

const ServicePage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();

  // Defense-in-depth: only allow safe slug characters
  const safeServiceId = serviceId?.match(/^[a-z0-9-]{1,64}$/i)?.[0] ?? "";
  const service = getServiceById(safeServiceId);

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">{t("Service nahi mila", "Service not found")}</p>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title={t(service.titleHi, service.title)} showBack />
      
      {/* Premium Animated Theme Banner */}
      <div className="relative overflow-hidden wave-border">
        {/* Gradient Background with Animation */}
        <div 
          className="absolute inset-0 bg-animated-gradient"
          style={{
            background: `linear-gradient(135deg, hsl(${service.themeColor}) 0%, hsl(${service.themeColor} / 0.8) 50%, hsl(${service.themeColor} / 0.6) 100%)`,
            backgroundSize: '400% 400%'
          }}
        />
        
        {/* Moving Dots Pattern */}
        <div className="absolute inset-0 moving-dots opacity-20" />
        
        {/* Animated Decorative patterns */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-white/10 blur-2xl continuous-float" />
          <div className="absolute -left-8 -bottom-8 w-36 h-36 rounded-full bg-white/15 blur-xl continuous-float" style={{ animationDelay: '1s' }} />
          <div className="absolute right-8 bottom-4 w-20 h-20 rounded-full bg-white/10 scale-pulse" />
          <div className="absolute left-1/3 top-6 w-4 h-4 rounded-full bg-white/40 bounce-continuous" />
          <div className="absolute right-1/4 top-10 w-3 h-3 rounded-full bg-white/50 bounce-continuous" style={{ animationDelay: '0.5s' }} />
          {/* Orbiting elements */}
          <div className="absolute right-20 top-20 w-4 h-4 rounded-full bg-white/40 orbit" />
          <div className="absolute left-16 bottom-16 w-3 h-3 rounded-full bg-white/50 orbit" style={{ animationDelay: '5s' }} />
          {/* Animated gradient orbs */}
          <div className="absolute right-0 bottom-0 w-40 h-40 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-2xl blob scale-pulse" />
          <div className="absolute left-0 top-0 w-32 h-32 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-xl blob" style={{ animationDelay: '2s' }} />
          {/* Shimmer wave */}
          <div className="absolute inset-0 shimmer-wave" />
        </div>
        
        <div className="relative z-10 p-6 pt-8 pb-16">
          <div className="flex items-start gap-4">
            {/* Floating Icon Card */}
            <div 
              className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 opacity-0 animate-scale-up shadow-2xl relative overflow-hidden"
              style={{ 
                background: `linear-gradient(145deg, hsl(${service.themeColor}) 0%, hsl(${service.themeColor} / 0.85) 100%)`,
                boxShadow: `0 12px 40px -8px hsl(${service.themeColor} / 0.5)`,
                animationDelay: '100ms',
                animationFillMode: 'forwards'
              }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
              <Icon className="w-10 h-10 text-white relative z-10 drop-shadow-lg" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}>
                <Sparkles className="w-4 h-4 text-white/90 rotate-gentle neon-glow" />
                <span className="text-xs font-semibold text-white/90 uppercase tracking-wider">
                  Sarkari Sahayak
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-1 leading-tight opacity-0 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                {service.titleHi}
              </h2>
              <p className="text-sm text-white/80 leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: '250ms', animationFillMode: 'forwards' }}>
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <main className="px-4 pt-6 pb-6 space-y-6">
        {/* Sub Services */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1 opacity-0 animate-fade-up" style={{ animationDelay: '400ms' }}>
            <h2 className="text-base font-bold text-foreground">
              {t("Kya karna hai? Chunein:", "What do you want to do? Choose:")}
            </h2>
            <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
              {service.subServices.length} {t("options", "options")}
            </span>
          </div>
          {service.subServices.map((sub, index) => (
            <SubServiceCard
              key={sub.id}
              title={sub.title}
              titleHi={sub.titleHi}
              description={sub.description}
              onClick={() => navigate(`/service/${serviceId}/${sub.id}`)}
              delay={450 + index * 60}
            />
          ))}
        </div>

        <ServiceModule context={service.title} />
      </main>

      <AppFooter />
      <BottomNav />
    </div>
  );
};

export default ServicePage;