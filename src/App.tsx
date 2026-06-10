import { useState, useCallback } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";
import { LanguageProvider } from "@/hooks/use-language";
import { BookmarkProvider } from "@/hooks/use-bookmarks";
import { ApplicationsProvider } from "@/hooks/use-applications";
import { SavedJobsProvider } from "@/hooks/use-saved-jobs";
import { SplashScreen } from "@/components/SplashScreen";
import { OnboardingSlides } from "@/components/OnboardingSlides";
import { IntroVideo } from "@/components/IntroVideo";
import { NetworkStatus } from "@/components/NetworkStatus";
import { useEffect } from "react";
import Index from "./pages/Index";
import ServicePage from "./pages/ServicePage";
import SubServicePage from "./pages/SubServicePage";
import SearchPage from "./pages/SearchPage";
import CategoriesPage from "./pages/CategoriesPage";
import SchemesPage from "./pages/SchemesPage";
import EligibilityCheckerPage from "./pages/EligibilityCheckerPage";
import ApplicationTrackerPage from "./pages/ApplicationTrackerPage";
import HelpPage from "./pages/HelpPage";
import SavedPage from "./pages/SavedPage";
import GovtDirectoryPage from "./pages/GovtDirectoryPage";
import JobsPage from "./pages/JobsPage";
import SavedJobsPage from "./pages/SavedJobsPage";
import SearchJobsPage from "./pages/SearchJobsPage";
import AboutPage from "./pages/AboutPage";
import MorePage from "./pages/MorePage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import ContactPage from "./pages/ContactPage";
import FeedbackPage from "./pages/FeedbackPage";
import UpdatesPage from "./pages/UpdatesPage";
import ResourcesPage from "./pages/ResourcesPage";
import PremiumPage from "./pages/PremiumPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showIntro, setShowIntro] = useState(() => !localStorage.getItem("intro_done_v2"));
  const [introReplay, setIntroReplay] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(() => !localStorage.getItem("onboarding_done"));
  const handleSplashComplete = useCallback(() => setShowSplash(false), []);
  const handleIntroComplete = useCallback(() => { setShowIntro(false); setIntroReplay(false); }, []);
  const handleOnboardingComplete = useCallback(() => setShowOnboarding(false), []);

  useEffect(() => {
    const handler = () => { setIntroReplay(true); setShowIntro(true); };
    window.addEventListener("replay-intro", handler);
    return () => window.removeEventListener("replay-intro", handler);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <BookmarkProvider>
            <ApplicationsProvider>
              <SavedJobsProvider>
                <TooltipProvider>
                  <Toaster />
                  <Sonner />
                  <NetworkStatus />
                  {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
                  {!showSplash && showIntro && <IntroVideo onComplete={handleIntroComplete} isReplay={introReplay} />}
                  {!showSplash && !showIntro && showOnboarding && <OnboardingSlides onComplete={handleOnboardingComplete} />}
                  <BrowserRouter>
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/service/:serviceId" element={<ServicePage />} />
                      <Route path="/service/:serviceId/:subServiceId" element={<SubServicePage />} />
                      <Route path="/search" element={<SearchPage />} />
                      <Route path="/categories" element={<CategoriesPage />} />
                      <Route path="/schemes" element={<SchemesPage />} />
                      <Route path="/eligibility-checker" element={<EligibilityCheckerPage />} />
                      <Route path="/application-tracker" element={<ApplicationTrackerPage />} />
                      <Route path="/saved" element={<SavedPage />} />
                      <Route path="/govt-directory" element={<GovtDirectoryPage />} />
                      <Route path="/help" element={<HelpPage />} />
                      <Route path="/jobs" element={<JobsPage />} />
                      <Route path="/saved-jobs" element={<SavedJobsPage />} />
                      <Route path="/search-jobs" element={<SearchJobsPage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/more" element={<MorePage />} />
                      <Route path="/privacy" element={<PrivacyPage />} />
                      <Route path="/terms" element={<TermsPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/feedback" element={<FeedbackPage />} />
                      <Route path="/updates" element={<UpdatesPage />} />
                      <Route path="/resources" element={<ResourcesPage />} />
                      <Route path="/premium" element={<PremiumPage />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </BrowserRouter>
                </TooltipProvider>
              </SavedJobsProvider>
            </ApplicationsProvider>
          </BookmarkProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
