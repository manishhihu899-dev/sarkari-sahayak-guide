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
      <Header title={service.titleHi} showBack showShare />
      
      <main className="px-4 py-6 space-y-6">
        {/* Service Header */}
        <div className="bg-card rounded-2xl p-5 shadow-card animate-fade-up">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">
                {service.titleHi}
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                {service.description}
              </p>
            </div>
          </div>
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
