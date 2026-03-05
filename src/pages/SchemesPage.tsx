import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { useLanguage } from "@/hooks/use-language";
import { useNavigate } from "react-router-dom";
import { services } from "@/data/services";
import { SchemeCard } from "@/components/SchemeCard";
import appLogo from "@/assets/app-logo.png";
import {
  Gift,
  Sparkles,
  ClipboardList,
  Wheat,
  Home,
  Heart,
  PiggyBank,
  Landmark,
  Banknote,
  GraduationCap,
  Briefcase,
  Shield,
  Utensils,
  IndianRupee,
  TrendingUp,
  Wallet,
  HardHat,
  Flame,
  FileText,
  LucideIcon,
  Umbrella,
  ShieldCheck,
  Coins,
  CircleDollarSign,
  CloudRain,
  Droplets,
  Leaf,
  FlaskConical,
  TreePine,
  ShoppingCart,
  Sprout,
  Fish,
  Stethoscope,
  Pill,
  Apple,
  Syringe,
  HeartPulse,
  Smartphone,
  Building,
  Construction,
  Store,
  Users,
  Waves,
  Trash2,
  Recycle,
  GlassWater,
  Pickaxe,
  Wrench,
  Monitor,
  Baby,
  HandHeart,
  HomeIcon,
  ShieldHalf,
  Package,
  Coffee,
  Scale,
  School,
  Award,
  BookOpen,
  Library,
  Lightbulb,
  Sun,
  Zap,
  Wind,
  Globe,
  Wifi,
  FolderOpen,
  AppWindow,
  MapPin,
  Fingerprint,
  CreditCard,
  Plane,
  Receipt,
  Search,
  Car
} from "lucide-react";

// Map scheme IDs to their icons and benefits
const schemeDataMap: Record<string, {icon: LucideIcon; benefit?: string; color?: string;}> = {
  // Finance
  "pm-kisan": { icon: Wheat, benefit: "₹6,000/year", color: "45 90% 45%" },
  "jan-dhan": { icon: Landmark, benefit: "Zero balance", color: "220 75% 50%" },
  "mudra-loan": { icon: Banknote, benefit: "Up to ₹10 Lakh", color: "160 70% 40%" },
  "atal-pension": { icon: Shield, benefit: "₹1-5K/month", color: "200 80% 45%" },
  "pm-jeevan-jyoti-bima": { icon: Umbrella, benefit: "₹2L life cover", color: "280 65% 50%" },
  "pm-suraksha-bima": { icon: ShieldCheck, benefit: "₹2L @ ₹20/yr", color: "150 70% 40%" },
  "sukanya-samriddhi": { icon: PiggyBank, benefit: "8.2% interest", color: "320 70% 50%" },
  "sovereign-gold-bond": { icon: Coins, benefit: "2.5% + gold", color: "40 85% 50%" },
  "gold-monetization": { icon: CircleDollarSign, benefit: "Gold interest", color: "35 80% 45%" },
  "stand-up-india": { icon: Briefcase, benefit: "Up to ₹1 Cr", color: "180 60% 45%" },
  "epf-services": { icon: Wallet, benefit: "Retirement fund", color: "210 75% 50%" },
  "income-tax-filing": { icon: FileText, benefit: "Tax filing", color: "240 60% 50%" },

  // Agriculture
  "pm-fasal-bima": { icon: CloudRain, benefit: "Crop insurance", color: "120 60% 40%" },
  "pm-krishi-sinchai": { icon: Droplets, benefit: "Irrigation subsidy", color: "195 75% 45%" },
  "soil-health-card": { icon: FlaskConical, benefit: "Free testing", color: "80 60% 40%" },
  "paramparagat-krishi": { icon: Leaf, benefit: "₹50K/hectare", color: "130 65% 35%" },
  "e-nam": { icon: ShoppingCart, benefit: "Best price", color: "25 70% 45%" },
  "rashtriya-krishi-vikas": { icon: Sprout, benefit: "Agri development", color: "100 65% 40%" },
  "food-security-mission": { icon: Wheat, benefit: "Productivity up", color: "50 75% 45%" },
  "sustainable-agriculture": { icon: TreePine, benefit: "Climate resilient", color: "155 60% 38%" },
  "blue-revolution": { icon: Fish, benefit: "40-60% subsidy", color: "205 70% 50%" },

  // Health
  "ayushman-bharat": { icon: Heart, benefit: "₹5 Lakh cover", color: "350 80% 50%" },
  "national-health-mission": { icon: Stethoscope, benefit: "Free healthcare", color: "340 70% 48%" },
  "janaushadhi": { icon: Pill, benefit: "50-90% sasta", color: "170 65% 42%" },
  "poshan-abhiyaan": { icon: Apple, benefit: "Free nutrition", color: "15 80% 50%" },
  "mission-indradhanush": { icon: Syringe, benefit: "Free vaccines", color: "260 65% 55%" },
  "tb-free-india": { icon: HeartPulse, benefit: "₹500/month", color: "0 70% 45%" },
  "digital-health-mission": { icon: Smartphone, benefit: "ABHA Card", color: "215 70% 50%" },

  // Housing & Urban
  "pm-awas-yojana": { icon: Home, benefit: "₹1.2-2.5 Lakh", color: "25 85% 50%" },
  "smart-cities": { icon: Building, benefit: "100 cities", color: "230 65% 50%" },
  "amrut-scheme": { icon: Construction, benefit: "Water & sewerage", color: "190 60% 45%" },
  "pm-svanidhi": { icon: Store, benefit: "₹10K-50K loan", color: "30 75% 48%" },
  "day-nulm": { icon: Users, benefit: "Skill + loan", color: "250 60% 50%" },

  // Water & Sanitation
  "jal-jeevan-mission": { icon: Waves, benefit: "Tap water", color: "200 75% 50%" },
  "swachh-bharat-urban": { icon: Trash2, benefit: "₹12-15K subsidy", color: "140 65% 42%" },
  "swachh-bharat-gramin": { icon: Recycle, benefit: "₹12K subsidy", color: "145 60% 40%" },
  "namami-gange": { icon: GlassWater, benefit: "Ganga cleaning", color: "185 70% 45%" },
  "rural-drinking-water": { icon: Droplets, benefit: "Safe water", color: "195 65% 48%" },

  // Employment
  "mgnrega": { icon: Pickaxe, benefit: "100 din kaam", color: "28 75% 45%" },
  "pm-kaushal-vikas": { icon: GraduationCap, benefit: "Free training", color: "270 70% 55%" },
  "skill-india-mission": { icon: Wrench, benefit: "Free skills", color: "265 65% 50%" },
  "ddu-gky": { icon: HardHat, benefit: "₹6K+ job", color: "35 80% 50%" },
  "national-career-service": { icon: Monitor, benefit: "Free jobs", color: "220 70% 48%" },

  // Women & Child
  "beti-bachao": { icon: Baby, benefit: "Girl welfare", color: "330 70% 50%" },
  "pm-matru-vandana": { icon: HandHeart, benefit: "₹5-11K cash", color: "345 75% 50%" },
  "one-stop-centre": { icon: HomeIcon, benefit: "24x7 help", color: "355 65% 48%" },
  "working-women-hostel": { icon: Building, benefit: "Safe hostel", color: "290 55% 50%" },
  "mission-shakti": { icon: ShieldHalf, benefit: "Women power", color: "310 65% 50%" },

  // Food Security
  "pm-garib-kalyan-anna": { icon: Package, benefit: "5kg free", color: "20 80% 48%" },
  "antyodaya-anna": { icon: Utensils, benefit: "35kg @ ₹2-3", color: "15 85% 50%" },
  "pds-system": { icon: ShoppingCart, benefit: "Subsidized food", color: "22 70% 45%" },
  "mid-day-meal": { icon: Coffee, benefit: "Free meal", color: "32 75% 48%" },
  "nsap": { icon: Scale, benefit: "Pension", color: "210 55% 45%" },

  // Education
  "samagra-shiksha": { icon: School, benefit: "Free books", color: "225 70% 50%" },
  "pm-shri-schools": { icon: Award, benefit: "Model schools", color: "45 80% 48%" },
  "nmcm-scholarship": { icon: BookOpen, benefit: "₹12K/year", color: "235 65% 50%" },
  "nsp-schemes": { icon: Library, benefit: "100+ schemes", color: "255 60% 50%" },
  "vidya-lakshmi": { icon: GraduationCap, benefit: "Edu loan", color: "215 65% 48%" },

  // Energy
  "pm-ujjwala": { icon: Flame, benefit: "Free LPG", color: "10 85% 55%" },
  "ujala-led": { icon: Lightbulb, benefit: "Sasti LED", color: "55 80% 50%" },
  "national-solar-mission": { icon: Sun, benefit: "Solar subsidy", color: "40 90% 50%" },
  "pm-kusum": { icon: Zap, benefit: "Solar pump", color: "48 85% 48%" },
  "green-india-mission": { icon: TreePine, benefit: "Forest cover", color: "135 60% 38%" },
  "lpg-gas-subsidy": { icon: Flame, benefit: "DBT subsidy", color: "10 85% 55%" },

  // Digital & Technology
  "digital-india": { icon: Globe, benefit: "Digital services", color: "215 80% 50%" },
  "bharatnet": { icon: Wifi, benefit: "Village internet", color: "200 70% 45%" },
  "digilocker-service": { icon: FolderOpen, benefit: "Free storage", color: "225 65% 48%" },
  "umang-app": { icon: AppWindow, benefit: "1200+ services", color: "260 70% 50%" },
  "csc-centres": { icon: MapPin, benefit: "4L+ centres", color: "145 60% 42%" },

  // Online Services
  "aadhaar-services": { icon: Fingerprint, benefit: "Free enrollment", color: "24 95% 50%" },
  "pan-card-services": { icon: CreditCard, benefit: "₹107 only", color: "210 80% 45%" },
  "passport-seva": { icon: Plane, benefit: "₹1,500", color: "0 70% 45%" },
  "e-shram": { icon: HardHat, benefit: "₹2L insurance", color: "35 80% 50%" },
  "gst-portal": { icon: Receipt, benefit: "Tax compliance", color: "170 60% 42%" },
  "myscheme-portal": { icon: Search, benefit: "200+ schemes", color: "142 60% 40%" },
};

const SchemesPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  // Collect all government schemes from services
  const allSchemes = services
    .filter((service) => service.category === "schemes")
    .flatMap((service) =>
      service.subServices.map((sub) => {
        const schemeData = schemeDataMap[sub.id] || { icon: Gift };
        return {
          ...sub,
          parentId: service.id,
          themeColor: schemeData.color || service.themeColor,
          icon: schemeData.icon,
          benefit: schemeData.benefit,
        };
      })
    );

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title={t("सरकारी योजनाएं", "Government Schemes")} showBack />

      {/* Premium Hero Banner */}
      <div className="relative overflow-hidden wave-border">
        <div
          className="absolute inset-0 bg-animated-gradient"
          style={{
            background: `linear-gradient(135deg, hsl(142 60% 35%) 0%, hsl(142 70% 25%) 50%, hsl(160 60% 20%) 100%)`,
            backgroundSize: "400% 400%",
          }}
        />
        <div className="absolute inset-0 moving-dots opacity-20" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-white/10 blur-2xl continuous-float" />
          <div className="absolute -left-8 -bottom-8 w-36 h-36 rounded-full bg-accent/20 blur-xl continuous-float" style={{ animationDelay: "1s" }} />
          <div className="absolute right-8 bottom-4 w-20 h-20 rounded-full bg-white/10 scale-pulse" />
          <div className="absolute left-1/3 top-6 w-4 h-4 rounded-full bg-accent/60 bounce-continuous" />
          <div className="absolute right-1/4 top-10 w-3 h-3 rounded-full bg-white/50 bounce-continuous" style={{ animationDelay: "0.5s" }} />
          <div className="absolute right-20 top-20 w-4 h-4 rounded-full bg-accent/60 orbit" />
          <div className="absolute left-16 bottom-16 w-3 h-3 rounded-full bg-white/50 orbit" style={{ animationDelay: "5s" }} />
          <div className="absolute right-0 bottom-0 w-40 h-40 rounded-full bg-gradient-to-br from-accent/30 to-success/30 blur-2xl blob scale-pulse" />
          <div className="absolute left-0 top-0 w-32 h-32 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-xl blob" style={{ animationDelay: "2s" }} />
          <div className="absolute inset-0 shimmer-wave" />
        </div>

        <div className="relative z-10 p-6 pt-8 pb-10">
          <div className="flex items-start gap-4">
            <div
              className="w-24 h-24 rounded-2xl flex items-center justify-center shrink-0 opacity-0 animate-scale-up overflow-hidden"
              style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
            >
              <img src={appLogo} alt="Sarkari Sahayak Logo" className="w-full h-full object-contain drop-shadow-lg" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2 opacity-0 animate-fade-up" style={{ animationDelay: "150ms", animationFillMode: "forwards" }}>
                <span className="text-xs font-semibold text-accent uppercase tracking-wider color-cycle">
                  {t("भारत सरकार", "Govt. of India")}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-1 leading-tight opacity-0 animate-fade-up" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
                {t("सरकारी योजनाएं", "Government Schemes")}
              </h2>
              <p className="text-sm text-white/80 leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: "250ms", animationFillMode: "forwards" }}>
                {t("आपके लिए सभी सरकारी लाभ एक जगह", "All government benefits at one place")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/10 opacity-0 animate-slide-up" style={{ animationDelay: "350ms", animationFillMode: "forwards" }}>
            <div className="flex-1 text-center group cursor-pointer">
              <div className="text-xl font-bold text-white group-hover:scale-110 transition-transform scale-pulse">{allSchemes.length}</div>
              <div className="text-xs text-white/70 uppercase tracking-wide fade-pulse">{t("योजनाएं", "Schemes")}</div>
            </div>
            <div className="w-px h-8 bg-accent/50 fade-pulse" />
            <div className="flex-1 text-center group cursor-pointer">
              <div className="text-xl font-bold text-accent flex items-center justify-center gap-1 group-hover:scale-110 transition-transform neon-glow scale-pulse" style={{ animationDelay: "0.3s" }}>
                <IndianRupee className="w-4 h-4 bounce-continuous" />
                <span>Lakhs</span>
              </div>
              <div className="text-xs text-white/70 uppercase tracking-wide fade-pulse">{t("लाभ", "Benefits")}</div>
            </div>
            <div className="w-px h-8 bg-accent/50 fade-pulse" />
            <div className="flex-1 text-center group cursor-pointer">
              <div className="text-xl font-bold text-white flex items-center justify-center gap-1 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-4 h-4 text-accent bounce-continuous neon-glow" />
              </div>
              <div className="text-xs text-white/70 uppercase tracking-wide fade-pulse">{t("आसान", "Easy")}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => navigate("/eligibility-checker")}
            className="p-4 rounded-2xl flex flex-col items-center gap-2 text-center shadow-lg hover:shadow-xl transition-all active:scale-[0.98] opacity-0 animate-fade-up relative overflow-hidden border border-purple-500/20"
            style={{
              background: "linear-gradient(135deg, hsl(280 70% 50%) 0%, hsl(320 70% 50%) 100%)",
              animationDelay: "100ms",
              animationFillMode: "forwards",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center relative z-10">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="relative z-10">
              <h3 className="font-bold text-white text-sm">{t("पात्रता जांचें", "Check Eligibility")}</h3>
              <p className="text-white/80 text-xs mt-0.5">{t("कौन सी योजना सही है?", "Which scheme fits?")}</p>
            </div>
          </button>

          <button
            onClick={() => navigate("/application-tracker")}
            className="p-4 rounded-2xl flex flex-col items-center gap-2 text-center shadow-lg hover:shadow-xl transition-all active:scale-[0.98] opacity-0 animate-fade-up relative overflow-hidden border border-blue-500/20"
            style={{
              background: "linear-gradient(135deg, hsl(200 80% 50%) 0%, hsl(180 70% 45%) 100%)",
              animationDelay: "150ms",
              animationFillMode: "forwards",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center relative z-10">
              <ClipboardList className="w-6 h-6 text-white" />
            </div>
            <div className="relative z-10">
              <h3 className="font-bold text-white text-sm">{t("आवेदन ट्रैक करें", "Track Applications")}</h3>
              <p className="text-white/80 text-xs mt-0.5">{t("स्टेटस देखें", "Check status")}</p>
            </div>
          </button>
        </div>

        {/* Schemes List Header */}
        <div className="flex items-center justify-between px-1 opacity-0 animate-fade-up" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
          <h3 className="text-lg font-bold text-foreground">{t("सभी योजनाएं", "All Schemes")}</h3>
          <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
            {allSchemes.length} {t("योजनाएं", "schemes")}
          </span>
        </div>

        {/* Schemes Grid */}
        <div className="space-y-3">
          {allSchemes.map((scheme, index) => (
            <SchemeCard
              key={scheme.id}
              title={scheme.title}
              titleHi={scheme.titleHi}
              description={scheme.description}
              onClick={() => navigate(`/service/${scheme.parentId}/${scheme.id}`)}
              delay={250 + index * 40}
              icon={scheme.icon}
              themeColor={scheme.themeColor}
              benefit={scheme.benefit}
            />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default SchemesPage;
