import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { StepCard } from "@/components/StepCard";
import { InfoSection } from "@/components/InfoSection";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { getSubServiceById } from "@/data/services";
import { 
  FileText, 
  CheckCircle, 
  AlertTriangle, 
  Globe, 
  Building,
  Bookmark,
  Share2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useBookmarks } from "@/hooks/use-bookmarks";
import { useLanguage } from "@/hooks/use-language";

const SubServicePage = () => {
  const { serviceId, subServiceId } = useParams();
  const { toast } = useToast();
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { t } = useLanguage();
  
  const subService = getSubServiceById(serviceId || "", subServiceId || "");
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  
  const bookmarked = isBookmarked(serviceId || "", subServiceId || "");

  if (!subService) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Service not found</p>
      </div>
    );
  }

  const toggleStep = (step: number) => {
    setCompletedSteps(prev => 
      prev.includes(step) 
        ? prev.filter(s => s !== step)
        : [...prev, step]
    );
  };

  const handleBookmark = () => {
    const nowBookmarked = toggleBookmark(
      serviceId || "",
      subServiceId || "",
      subService.title,
      subService.titleHi
    );
    toast({
      title: nowBookmarked 
        ? t("Bookmarked! ✓", "बुकमार्क हो गया! ✓") 
        : t("Bookmark removed", "बुकमार्क हटा दिया"),
      description: nowBookmarked 
        ? t("This service is saved to your bookmarks", "यह सेवा आपके बुकमार्क में सेव हो गई")
        : t("This service was removed from bookmarks", "यह सेवा बुकमार्क से हटा दी गई"),
    });
  };

  const handleShare = () => {
    toast({
      title: "Link copied! ✓",
      description: "Link clipboard mein copy ho gaya",
    });
  };

  const progress = Math.round((completedSteps.length / subService.steps.length) * 100);

  return (
    <div className="min-h-screen bg-background pb-32">
      <Header title={subService.titleHi} showBack showShare onShare={handleShare} />
      
      <main className="px-4 py-6 space-y-6">
        {/* Title & Description */}
        <div className="animate-fade-up">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            {subService.titleHi}
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            {subService.description}
          </p>
        </div>

        {/* Disclaimer */}
        <DisclaimerBanner />

        {/* Progress Bar */}
        <div className="bg-card rounded-xl p-4 shadow-card animate-fade-up" style={{ animationDelay: "50ms" }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">Progress</span>
            <span className="text-sm font-bold text-accent">{progress}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-accent rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            {completedSteps.length} / {subService.steps.length} steps done - Tap step to mark complete
          </p>
        </div>

        {/* Eligibility (if exists) */}
        {subService.eligibility && subService.eligibility.length > 0 && (
          <InfoSection
            icon={CheckCircle}
            title="Kaun Apply Kar Sakta Hai"
            items={subService.eligibility}
            variant="success"
            delay={100}
          />
        )}

        {/* Required Documents */}
        <InfoSection
          icon={FileText}
          title="Zaruri Documents"
          items={subService.documents}
          delay={150}
        />

        {/* Steps */}
        <div className="space-y-1">
          <h2 className="text-lg font-semibold text-foreground mb-4 animate-fade-up" style={{ animationDelay: "200ms" }}>
            Step-by-Step Process
          </h2>
          {subService.steps.map((step, index) => (
            <StepCard
              key={step.step}
              step={step.step}
              title={step.title}
              description={step.description}
              isCompleted={completedSteps.includes(step.step)}
              onToggle={() => toggleStep(step.step)}
              delay={250 + index * 50}
            />
          ))}
        </div>

        {/* Official Links */}
        <div className="bg-card rounded-xl p-4 shadow-card space-y-3 animate-fade-up" style={{ animationDelay: "400ms" }}>
          <h3 className="font-semibold text-foreground flex items-center gap-2">
            <Building className="w-5 h-5 text-primary" />
            Official Information
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <Globe className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
              <div>
                <span className="text-muted-foreground">Website: </span>
                <a 
                  href={subService.officialWebsite} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2"
                >
                  {subService.officialWebsite.replace("https://", "")}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Building className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
              <div>
                <span className="text-muted-foreground">Office: </span>
                <span className="text-foreground">{subService.officeName}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Warnings */}
        <InfoSection
          icon={AlertTriangle}
          title="⚠️ Dhyan Rakhein"
          items={subService.warnings}
          variant="warning"
          delay={450}
        />

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button 
            variant={bookmarked ? "default" : "outline"} 
            className="flex-1"
            onClick={handleBookmark}
          >
            <Bookmark className={`w-5 h-5 ${bookmarked ? "fill-current" : ""}`} />
            {bookmarked ? t("Saved", "सेव है") : t("Save", "सेव करें")}
          </Button>
          <Button 
            variant="accent" 
            className="flex-1"
            onClick={() => window.open(subService.officialWebsite, "_blank")}
          >
            <Globe className="w-5 h-5" />
            Official Site
          </Button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default SubServicePage;
