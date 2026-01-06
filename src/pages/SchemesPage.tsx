import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { useLanguage } from "@/hooks/use-language";
import { useNavigate } from "react-router-dom";
import { services } from "@/data/services";
import { SubServiceCard } from "@/components/SubServiceCard";
import { Gift } from "lucide-react";

const SchemesPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  // Collect all government schemes from services
  const allSchemes = services
    .filter(service => service.category === "schemes")
    .flatMap(service => 
      service.subServices.map(sub => ({
        ...sub,
        parentId: service.id,
        themeColor: service.themeColor
      }))
    );

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title={t("सरकारी योजनाएं", "Government Schemes")} showBack />
      
      {/* Hero Banner */}
      <div 
        className="relative overflow-hidden py-8 px-4"
        style={{
          background: `linear-gradient(135deg, hsl(142 60% 40%) 0%, hsl(142 60% 30%) 100%)`
        }}
      >
        {/* Decorative patterns */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-white/10 opacity-0 animate-scale-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }} />
          <div className="absolute left-1/4 bottom-0 w-24 h-24 rounded-full bg-white/5 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }} />
          <div className="absolute right-1/3 top-1/2 w-16 h-16 rounded-full bg-white/5 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }} />
        </div>
        
        <div className="relative z-10 flex items-center gap-4">
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg opacity-0 animate-scale-up"
            style={{ 
              background: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(8px)',
              animationDelay: '0.1s',
              animationFillMode: 'forwards'
            }}
          >
            <Gift className="w-8 h-8 text-white opacity-0 animate-float" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white opacity-0 animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              {t("सभी सरकारी योजनाएं", "All Government Schemes")}
            </h2>
            <p className="text-white/80 text-sm mt-1 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              {t(`${allSchemes.length} योजनाएं उपलब्ध`, `${allSchemes.length} schemes available`)}
            </p>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="space-y-3">
          {allSchemes.map((scheme, index) => (
            <SubServiceCard
              key={scheme.id}
              title={scheme.title}
              titleHi={scheme.titleHi}
              description={scheme.description}
              onClick={() => navigate(`/service/${scheme.parentId}/${scheme.id}`)}
              delay={index * 50}
            />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default SchemesPage;
