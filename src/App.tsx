import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { InterstitialAd } from "@/components/InterstitialAd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";
import { LanguageProvider } from "@/hooks/use-language";
import { BookmarkProvider } from "@/hooks/use-bookmarks";
import { ApplicationsProvider } from "@/hooks/use-applications";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <BookmarkProvider>
          <ApplicationsProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <InterstitialAd />
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
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </ApplicationsProvider>
        </BookmarkProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
