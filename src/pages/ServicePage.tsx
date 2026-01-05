import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { SubServiceCard } from "@/components/SubServiceCard";
import { BottomNav } from "@/components/BottomNav";
import { getServiceById } from "@/data/services";

const ServicePage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  
  const service = getServiceById(serviceId || "");

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Service not found</p>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title={service.titleHi} showBack />
      
      {/* Full Theme Banner */}
      <div 
        className="relative h-44 overflow-hidden opacity-0 animate-fade-in"
        style={{ 
          background: `linear-gradient(135deg, hsl(${service.themeColor}) 0%, hsl(${service.themeColor} / 0.75) 50%, hsl(${service.themeColor} / 0.5) 100%)` 
        }}
      >
        {/* Decorative Pattern */}
        <div className="absolute inset-0">
          <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-white/10 blur-xl animate-float" />
          <div className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-white/10 blur-lg" />
          <div className="absolute right-1/4 bottom-6 w-20 h-20 rounded-full bg-white/5 animate-pulse-subtle" />
          <div className="absolute left-1/3 top-6 w-4 h-4 rounded-full bg-white/20" />
          <div className="absolute right-12 top-10 w-2 h-2 rounded-full bg-white/30" />
          <div className="absolute left-8 bottom-10 w-3 h-3 rounded-full bg-white/15" />
        </div>
        
        {/* Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        
        {/* Floating Icon Card */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 opacity-0 animate-scale-up" style={{ animationDelay: '200ms' }}>
          <div 
            className="w-24 h-24 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-background relative overflow-hidden"
            style={{ 
              background: `linear-gradient(145deg, hsl(${service.themeColor}) 0%, hsl(${service.themeColor} / 0.85) 100%)`,
              boxShadow: `0 12px 40px -8px hsl(${service.themeColor} / 0.5)`
            }}
          >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
            <Icon className="w-12 h-12 text-white relative z-10 drop-shadow-lg" />
          </div>
        </div>
      </div>
      
      <main className="px-4 pt-16 pb-6 space-y-6">
        {/* Service Title */}
        <div className="text-center opacity-0 animate-fade-up" style={{ animationDelay: '300ms' }}>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">
            {service.titleHi}
          </h1>
          <p className="text-sm text-muted-foreground mt-2 max-w-xs mx-auto leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Sub Services */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1 opacity-0 animate-fade-up" style={{ animationDelay: '400ms' }}>
            <h2 className="text-base font-bold text-foreground">
              Kya karna hai? Chunein:
            </h2>
            <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
              {service.subServices.length} options
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
      </main>

      <BottomNav />
    </div>
  );
};

export default ServicePage;