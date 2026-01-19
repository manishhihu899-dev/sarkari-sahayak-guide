import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { StepCard } from "@/components/StepCard";
import { InfoSection } from "@/components/InfoSection";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { getSubServiceById, getServiceById } from "@/data/services";
import { 
  FileText, 
  CheckCircle, 
  AlertTriangle, 
  Globe, 
  Building,
  Bookmark,
  XCircle,
  HelpCircle,
  Info,
  Sparkles,
  Volume2,
  VolumeX,
  Loader2,
  Headphones,
  RefreshCw,
  Pause,
  Play,
  ExternalLink,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useBookmarks } from "@/hooks/use-bookmarks";
import { useLanguage } from "@/hooks/use-language";
import { useSpeakProcess } from "@/hooks/use-speak-process";

const SubServicePage = () => {
  const { serviceId, subServiceId } = useParams();
  const { toast } = useToast();
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { t, language } = useLanguage();
  const { 
    isLoading: isSpeechLoading, 
    isSpeaking, 
    isPaused,
    generateAndSpeak, 
    stopSpeaking,
    retrySpeaking,
    togglePause,
    hasCache
  } = useSpeakProcess();
  
  const subService = getSubServiceById(serviceId || "", subServiceId || "");
  const parentService = getServiceById(serviceId || "");
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  
  const bookmarked = isBookmarked(serviceId || "", subServiceId || "");
  
  // Check if this is a scheme page - hide process/steps for schemes
  const isScheme = serviceId === "schemes";
  
  // Get theme color from parent service
  const themeColor = parentService?.themeColor || "220 65% 28%";

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

  const progress = Math.round((completedSteps.length / subService.steps.length) * 100);

  return (
    <div className="min-h-screen bg-background pb-32">
      <Header title={t(subService.titleHi, subService.title)} showBack />
      
      {/* Premium Animated Theme Banner */}
      <div className="relative overflow-hidden wave-border">
        {/* Gradient Background with Animation */}
        <div 
          className="absolute inset-0 bg-animated-gradient"
          style={{
            background: `linear-gradient(135deg, hsl(${themeColor}) 0%, hsl(${themeColor} / 0.8) 50%, hsl(${themeColor} / 0.6) 100%)`,
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
          {/* Shimmer wave */}
          <div className="absolute inset-0 shimmer-wave" />
        </div>
        
        <div className="relative z-10 p-6 pt-6 pb-8">
          <div className="flex items-center gap-2 mb-3 opacity-0 animate-fade-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            <Sparkles className="w-4 h-4 text-white/90 rotate-gentle neon-glow" />
            <span className="text-xs font-semibold text-white/90 uppercase tracking-wider">
              Sarkari Sahayak
            </span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2 leading-tight opacity-0 animate-fade-up" style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}>
            {subService.titleHi}
          </h1>
          <p className="text-sm text-white/80 leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            {subService.description}
          </p>
        </div>
      </div>
      
      <main className="px-4 py-6 space-y-6">

        {/* Disclaimer */}
        <DisclaimerBanner />

        {/* Progress Bar - Hide for schemes */}
        {!isScheme && (
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
        )}

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

        {/* Steps - Hide for schemes (but keep voice option for schemes) */}
        {!isScheme ? (
          <div className="space-y-1">
            {/* Header with Listen Button */}
            <div className="flex items-center justify-between mb-4 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                {t("📋 Step-by-Step Process", "📋 Step-by-Step Process")}
              </h2>
              
              {/* Listen to Process Button */}
              <div className="flex items-center gap-2">
                {/* Retry Button - Show after first listen */}
                {!isSpeaking && !isSpeechLoading && hasCache(subService.steps, language === "hi" ? subService.titleHi : subService.title) && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={retrySpeaking}
                    className="flex items-center gap-1"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span className="hidden sm:inline">{t("फिर से", "Retry")}</span>
                  </Button>
                )}
                
                <Button
                  variant={isSpeaking ? "destructive" : "default"}
                  size="sm"
                  onClick={() => {
                    if (isSpeaking) {
                      stopSpeaking();
                    } else {
                      generateAndSpeak(subService.steps, language === "hi" ? subService.titleHi : subService.title);
                      toast({
                        title: t("🎧 Process sunein", "🎧 Listen to Process"),
                        description: hasCache(subService.steps, language === "hi" ? subService.titleHi : subService.title)
                          ? t("Turant shuru ho raha hai!", "Starting immediately!")
                          : t("2-3 seconds wait karein...", "Wait 2-3 seconds..."),
                      });
                    }
                  }}
                  disabled={isSpeechLoading}
                  className="flex items-center gap-2"
                >
                  {isSpeechLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span className="hidden sm:inline">{t("Loading...", "Loading...")}</span>
                    </>
                  ) : isSpeaking ? (
                    <>
                      <VolumeX className="w-4 h-4" />
                      <span className="hidden sm:inline">{t("रोकें", "Stop")}</span>
                    </>
                  ) : (
                    <>
                      <Headphones className="w-4 h-4" />
                      <span className="hidden sm:inline">{t("🎧 सुनें", "🎧 Listen")}</span>
                    </>
                  )}
                </Button>
              </div>
            </div>
            
            {/* Speaking indicator with controls */}
            {isSpeaking && (
              <div className="bg-gradient-to-r from-accent/10 to-success/10 border border-accent/20 rounded-xl p-4 mb-4 animate-fade-up">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center scale-pulse">
                    <Volume2 className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">
                      {isPaused 
                        ? t("⏸️ Voice paused hai", "⏸️ Voice is paused")
                        : t("🔊 Process sun rahe hain...", "🔊 Listening to process...")
                      }
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t("App background mein bhi chalta rahega!", "Works in background too!")}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* Pause/Resume Button */}
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={togglePause}
                      className="w-10 h-10 rounded-full"
                    >
                      {isPaused ? (
                        <Play className="w-5 h-5" />
                      ) : (
                        <Pause className="w-5 h-5" />
                      )}
                    </Button>
                  </div>
                </div>
                
                {/* Website tip */}
                <div className="mt-3 pt-3 border-t border-accent/20">
                  <p className="text-xs text-muted-foreground flex items-start gap-2">
                    <ExternalLink className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                    <span>
                      {t(
                        "💡 Tip: Neeche 'Official Site' button dabayein - voice sunte-sunte website par kaam karein!",
                        "💡 Tip: Click 'Official Site' below - work on website while listening!"
                      )}
                    </span>
                  </p>
                </div>
              </div>
            )}
            
            {subService.steps.map((step, index) => (
              <StepCard
                key={step.step}
                step={step.step}
                title={step.title}
                description={step.description}
                isCompleted={completedSteps.includes(step.step)}
                onToggle={() => toggleStep(step.step)}
                delay={250 + index * 50}
                totalSteps={subService.steps.length}
              />
            ))}
          </div>
        ) : (
          <div className="bg-card rounded-xl p-4 shadow-card animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-base font-semibold text-foreground">
                  {t("🎧 Yojana ka process sunein", "🎧 Listen to scheme process")}
                </h2>
                <p className="text-xs text-muted-foreground mt-1">
                  {t(
                    "Ye sirf guidance ke liye hai, form official website ya office par hi bharein.",
                    "Ye sirf guidance ke liye hai, form official website ya office par hi bharein."
                  )}
                </p>
              </div>
              <Button
                variant={isSpeaking ? "destructive" : "outline"}
                size="sm"
                onClick={() => {
                  if (isSpeaking) {
                    stopSpeaking();
                  } else {
                    generateAndSpeak(subService.steps, language === "hi" ? subService.titleHi : subService.title);
                    toast({
                      title: t("🎧 Process sunein", "🎧 Listen to Process"),
                      description: t(
                        "Thoda wait karein, process tayyar ho raha hai...",
                        "Please wait, preparing audio..."
                      ),
                    });
                  }
                }}
                disabled={isSpeechLoading}
                className="flex items-center gap-2"
              >
                {isSpeechLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="hidden sm:inline">{t("Loading...", "Loading...")}</span>
                  </>
                ) : isSpeaking ? (
                  <>
                    <VolumeX className="w-4 h-4" />
                    <span className="hidden sm:inline">{t("रोकें", "Stop")}</span>
                  </>
                ) : (
                  <>
                    <Headphones className="w-4 h-4" />
                    <span className="hidden sm:inline">{t("सुनें", "Listen")}</span>
                  </>
                )}
              </Button>
            </div>
            {isSpeaking && (
              <div className="mt-3 bg-accent/10 border border-accent/20 rounded-xl p-3 flex items-center gap-3 animate-fade-up">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Volume2 className="w-5 h-5 text-accent animate-pulse" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    {t("🔊 Process sun rahe hain...", "🔊 Listening to process...")}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t("Dhyan se sunein, bahut aasan hai!", "Listen carefully, it's very easy!")}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

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

        {/* Common Mistakes Section */}
        {subService.commonMistakes && subService.commonMistakes.length > 0 && (
          <InfoSection
            icon={XCircle}
            title="❌ Galtiyan jo nahi karni"
            items={subService.commonMistakes}
            variant="error"
            delay={500}
          />
        )}

        {/* Problem Reasons Section */}
        {subService.problemReasons && subService.problemReasons.length > 0 && (
          <InfoSection
            icon={HelpCircle}
            title="⚠️ Exact problem ka reason"
            items={subService.problemReasons}
            delay={550}
          />
        )}

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

        {/* Disclaimer Note */}
        <div className="bg-muted/50 rounded-xl p-4 border border-border/50 animate-fade-up" style={{ animationDelay: "700ms" }}>
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t(
                "हम सिर्फ सरकारी स्रोतों से गाइडेंस देते हैं। हम कोई फीस नहीं लेते।",
                "We only provide guidance using official government sources. We do not charge any fees."
              )}
            </p>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default SubServicePage;
