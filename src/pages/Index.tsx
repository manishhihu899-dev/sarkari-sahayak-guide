import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { ServiceCard } from "@/components/ServiceCard";
import { BottomNav } from "@/components/BottomNav";
import { services, searchServices } from "@/data/services";
import { SubServiceCard } from "@/components/SubServiceCard";
import { useLanguage } from "@/hooks/use-language";
import { Shield, Users, FileCheck, Landmark, Award } from "lucide-react";

const AnimatedCounter = ({ target, delay = 0, suffix = "" }: {target: number;delay?: number;suffix?: string;}) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 30));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [started, target]);

  return (
    <span className={`tabular-nums ${started ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
      {count}{suffix}
    </span>);

};

const TypingText = ({ texts, className = "" }: {texts: string[];className?: string;}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const speed = isDeleting ? 30 : 60;

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <span className={className}>
      {texts[textIndex].substring(0, charIndex)}
      <span className="typing-cursor" />
    </span>);

};

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useLanguage();
  const searchResults = searchQuery.length > 1 ? searchServices(searchQuery) : [];

  const typingTexts = ["Aadhaar Card", "PAN Card", "Passport", "Voter ID", "Bank KYC", "Driving License"];

  const stats = [
  { icon: FileCheck, value: 15, suffix: "+", label: t("सेवाएं", "Services"), delay: 200 },
  { icon: Users, value: 100, suffix: "+", label: t("गाइड्स", "Guides"), delay: 400 },
  { icon: Award, value: 10, suffix: "+", label: t("योजनाएं", "Schemes"), delay: 600 }];


  return (
    <div className="min-h-screen bg-background pb-20">
      <Header />
      
      <main className="px-4 py-5 space-y-6 max-w-lg mx-auto">
        {/* Search */}
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder={t("Search: Aadhaar, PAN, Passport...", "Search: Aadhaar, PAN, Passport...")} />


        {/* Search Results */}
        {searchQuery.length > 1 &&
        <div className="space-y-2">
            <p className="text-xs font-medium text-muted-foreground px-1">
              {searchResults.length > 0 ?
            t(`${searchResults.length} results mile`, `${searchResults.length} results found`) :
            t("Kuch nahi mila", "No results found")}
            </p>
            {searchResults.map((sub, index) =>
          <SubServiceCard
            key={sub.id}
            title={sub.title}
            titleHi={sub.titleHi}
            description={sub.description}
            onClick={() => {
              const parentService = services.find((s) => s.subServices.some((ss) => ss.id === sub.id));
              if (parentService) {
                navigate(`/service/${parentService.id}/${sub.id}`);
              }
            }}
            delay={index * 50} />

          )}
          </div>
        }

        {/* Main Content */}
        {searchQuery.length <= 1 &&
        <>
            {/* Welcome Banner */}
            <div className="opacity-0 animate-fade-in-blur" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              <div className="text-center space-y-2 py-3">
                <div className="inline-flex items-center gap-1.5 bg-primary/8 text-primary px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider opacity-0 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                  <Shield className="w-3 h-3" />
                  {t("सत्यमेव जयते", "Satyameva Jayate")}
                </div>
                
                <h2 className="text-xl font-extrabold text-foreground opacity-0 animate-fade-in-blur" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
                  {t("🇮🇳 आपका स्वागत है!", "🇮🇳 Welcome to India's")}
                </h2>

                <div className="text-lg font-bold text-primary h-7 opacity-0 animate-fade-in-blur" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
                  <TypingText texts={typingTexts} />
                </div>

                <p className="text-sm text-muted-foreground font-medium max-w-[280px] mx-auto opacity-0 animate-fade-in-blur" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
                  {t(
                  "Sabhi sarkari services ka step-by-step guide — bilkul free!",
                  "Step-by-step guide for all government services — completely free!"
                )}
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat, index) => {}















            )}
            </div>

            {/* Govt Notice Bar */}
            <div className="flex items-center gap-3 bg-primary/5 border border-primary/10 rounded-xl px-4 py-2.5 opacity-0 animate-slide-in-left" style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}>
              <Landmark className="w-4 h-4 text-primary shrink-0" />
              <p className="text-xs font-medium text-foreground/80">
                {t(
                "Yeh ek unofficial guide app hai — sabhi links official govt websites ke hain.",
                "This is an unofficial guide — all links direct to official govt websites."
              )}
              </p>
            </div>

            {/* Services */}
            <div className="space-y-3">
              <div className="flex items-center justify-between px-0.5 opacity-0 animate-fade-up" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
                <h2 className="text-base font-bold text-foreground">
                  {t("सभी सेवाएं", "All Services")}
                </h2>
                <span className="text-[11px] font-semibold text-primary bg-primary/8 px-2.5 py-0.5 rounded-full">
                  {services.length} {t("उपलब्ध", "available")}
                </span>
              </div>
              <div className="grid gap-2.5">
                {services.map((service, index) =>
              <ServiceCard
                key={service.id}
                title={service.title}
                titleHi={service.titleHi}
                description={service.description}
                icon={service.icon}
                themeColor={service.themeColor}
                onClick={() => navigate(`/service/${service.id}`)}
                delay={850 + index * 60} />

              )}
              </div>
            </div>

            {/* Footer Text */}
            <div className="text-center pt-2 pb-4 opacity-0 animate-fade-in-blur" style={{ animationDelay: '1800ms', animationFillMode: 'forwards' }}>
              <p className="text-[10px] text-muted-foreground/60 font-medium">
                {t("डिजिटल इंडिया पहल के अनुरूप", "In line with Digital India Initiative")}
              </p>
              <div className="tricolor-stripe mt-3 rounded-full max-w-[60px] mx-auto" />
            </div>
          </>
        }
      </main>

      <BottomNav />
    </div>);

};

export default Index;