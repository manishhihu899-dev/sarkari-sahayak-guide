import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { services } from "@/data/services";

const CategoriesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title="All Categories" showBack />
      
      <main className="px-4 py-6">
        <div className="grid grid-cols-2 gap-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => navigate(`/service/${service.id}`)}
                className="bg-card rounded-2xl p-5 shadow-card hover:shadow-elevated transition-all flex flex-col items-center gap-3 text-center opacity-0 animate-scale-up touch-action-manipulation active:scale-[0.98] relative overflow-hidden border border-border/50 group"
                style={{ 
                  animationDelay: `${index * 60}ms`,
                  background: service.themeColor 
                    ? `linear-gradient(145deg, hsl(${service.themeColor} / 0.06) 0%, transparent 100%)`
                    : undefined
                }}
              >
                {/* Accent line */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ backgroundColor: `hsl(${service.themeColor})` }}
                />
                
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 relative overflow-hidden"
                  style={{ 
                    background: `linear-gradient(135deg, hsl(${service.themeColor}) 0%, hsl(${service.themeColor} / 0.8) 100%)`,
                    boxShadow: `0 4px 14px -4px hsl(${service.themeColor} / 0.4)`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent" />
                  <Icon className="w-7 h-7 text-white relative z-10" />
                </div>
                <div>
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