import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { useLanguage } from "@/hooks/use-language";
import { useNavigate } from "react-router-dom";
import { services } from "@/data/services";
import { SubServiceCard } from "@/components/SubServiceCard";
import { 
  Gift, 
  Sparkles, 
  ChevronRight, 
  ClipboardList,
  Wheat,
  Home,
  Heart,
  PiggyBank,
  Landmark,
  Banknote,
  Users,
  Baby,
  GraduationCap,
  Briefcase,
  Shield,
  Utensils,
  LucideIcon
} from "lucide-react";

// Map scheme IDs to their icons
const schemeIconMap: Record<string, LucideIcon> = {
  "pm-kisan": Wheat,
  "pm-awas": Home,
  "ayushman-bharat": Heart,
  "sukanya-samriddhi": PiggyBank,
  "atal-pension": Shield,
  "jan-dhan": Landmark,
  "mudra-loan": Banknote,
  "ujjwala": Utensils,
  "scholarship": GraduationCap,
  "maternity-benefit": Baby,
  "employment": Briefcase,
};

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
        themeColor: service.themeColor,
        icon: schemeIconMap[sub.id] || Gift
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
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {/* Eligibility Checker CTA */}
          <button
            onClick={() => navigate("/eligibility-checker")}
            className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex flex-col items-center gap-2 text-center shadow-lg hover:shadow-xl transition-all active:scale-[0.98] opacity-0 animate-fade-up"
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">
                {t("पात्रता जांचें", "Check Eligibility")}
              </h3>
              <p className="text-white/80 text-xs mt-0.5">
                {t("कौन सी योजना?", "Which scheme?")}
              </p>
            </div>
          </button>

          {/* Application Tracker CTA */}
          <button
            onClick={() => navigate("/application-tracker")}
            className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex flex-col items-center gap-2 text-center shadow-lg hover:shadow-xl transition-all active:scale-[0.98] opacity-0 animate-fade-up"
            style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
          >
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <ClipboardList className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">
                {t("आवेदन ट्रैक", "Track Applications")}
              </h3>
              <p className="text-white/80 text-xs mt-0.5">
                {t("स्टेटस देखें", "Check status")}
              </p>
            </div>
          </button>
        </div>

        <h3 className="text-base font-semibold text-foreground mb-3 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          {t("सभी योजनाएं", "All Schemes")}
        </h3>
        <div className="space-y-3">
          {allSchemes.map((scheme, index) => (
            <SubServiceCard
              key={scheme.id}
              title={scheme.title}
              titleHi={scheme.titleHi}
              description={scheme.description}
              onClick={() => navigate(`/service/${scheme.parentId}/${scheme.id}`)}
              delay={150 + index * 50}
              icon={scheme.icon}
              themeColor={scheme.themeColor}
            />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default SchemesPage;
