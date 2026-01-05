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
      
      {/* Theme Banner */}
      <div 
        className="relative h-32 overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, hsl(${service.themeColor}) 0%, hsl(${service.themeColor} / 0.7) 100%)` 
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/20" />
          <div className="absolute -left-4 -bottom-4 w-24 h-24 rounded-full bg-white/20" />
          <div className="absolute right-1/4 bottom-2 w-16 h-16 rounded-full bg-white/15" />
        </div>
        
        {/* Floating Icon */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div 
            className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg border-4 border-background"
            style={{ backgroundColor: `hsl(${service.themeColor})` }}
          >
            <Icon className="w-10 h-10 text-white" />
          </div>
        </div>
      </div>
      
      <main className="px-4 pt-14 pb-6 space-y-6">
        {/* Service Title */}
        <div className="text-center animate-fade-up">
          <h1 className="text-xl font-bold text-foreground">
            {service.titleHi}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {service.description}
          </p>
        </div>

        {/* Sub Services */}
        <div className="space-y-3">
          <h2 className="text-base font-semibold text-foreground px-1">
            Kya karna hai? Chunein:
          </h2>
          {service.subServices.map((sub, index) => (
            <SubServiceCard
              key={sub.id}
              title={sub.title}
              titleHi={sub.titleHi}
              description={sub.description}
              onClick={() => navigate(`/service/${serviceId}/${sub.id}`)}
              delay={index * 50}
            />
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default ServicePage;
