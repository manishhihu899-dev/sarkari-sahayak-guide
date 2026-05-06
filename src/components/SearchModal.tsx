import { useState, useEffect, useRef, useMemo } from "react";
import { Search, X, TrendingUp, Clock, Trash2 } from "lucide-react";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLanguage } from "@/hooks/use-language";
import { useRecentSearches } from "@/hooks/use-recent-searches";
import { useNavigate } from "react-router-dom";
import { services, searchServices } from "@/data/services";
import { SubServiceCard } from "@/components/SubServiceCard";

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const popularSearches = [
  { hi: "आधार अपडेट", en: "Aadhaar Update" },
  { hi: "पैन कार्ड", en: "PAN Card" },
  { hi: "पासपोर्ट", en: "Passport" },
  { hi: "PM किसान", en: "PM Kisan" },
  { hi: "आयुष्मान भारत", en: "Ayushman Bharat" },
  { hi: "राशन कार्ड", en: "Ration Card" },
  { hi: "वोटर ID", en: "Voter ID" },
  { hi: "ड्राइविंग लाइसेंस", en: "Driving License" },
  { hi: "सरकारी योजना", en: "Government Scheme" },
  { hi: "PM आवास", en: "PM Awas" },
  { hi: "मुद्रा लोन", en: "Mudra Loan" },
  { hi: "उज्ज्वला", en: "Ujjwala" },
  { hi: "DigiLocker", en: "DigiLocker" },
  { hi: "UMANG ऐप", en: "UMANG App" },
  { hi: "MyScheme पोर्टल", en: "MyScheme Portal" },
  { hi: "e-Shram पोर्टल", en: "e-Shram Portal" },
  { hi: "GST पोर्टल", en: "GST Portal" },
];


export const SearchModal = ({ open, onOpenChange }: SearchModalProps) => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { recentSearches, addSearch, removeSearch, clearHistory, hasHistory } = useRecentSearches();

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
    else setQuery("");
  }, [open]);

  const results = useMemo(() => {
    if (query.length < 2) return [];
    addSearch(query);
    return searchServices(query);
  }, [query]);

  const handleTagClick = (tag: { hi: string; en: string }) => {
    setQuery(language === "hi" ? tag.hi : tag.en);
  };

  const handleResultClick = (subId: string) => {
    const parentService = services.find(s => s.subServices.some(ss => ss.id === subId));
    if (parentService) {
      onOpenChange(false);
      navigate(`/service/${parentService.id}/${subId}`);
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-[100dvh] p-0 border-0 rounded-t-2xl overflow-hidden bg-background">
        <div className="relative border-b border-border bg-card">
          <div className="h-0.5 flex">
            <div className="flex-1 bg-[hsl(28_90%_55%)]" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-[hsl(142_70%_38%)]" />
          </div>
          <div className="flex items-center justify-between px-4 py-3">
            <SheetTitle className="text-base font-semibold text-foreground flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Search className="w-4 h-4 text-primary" />
              </div>
              {t("सर्च करें", "Search")}
            </SheetTitle>
            <button onClick={() => onOpenChange(false)} className="w-8 h-8 flex items-center justify-center hover:bg-muted rounded-lg transition-colors">
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        <div className="px-4 py-4 bg-card/50">
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <Search className="w-5 h-5 text-muted-foreground" />
            </div>
            <input ref={inputRef} type="text" value={query} onChange={(e) => setQuery(e.target.value)}
              placeholder={t("कुछ भी सर्च करें...", "Search anything...")}
              className="w-full h-12 pl-11 pr-10 bg-background rounded-xl text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all border border-border" />
            {query && (
              <button onClick={() => setQuery("")} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center hover:bg-muted rounded-lg transition-colors">
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            )}
          </div>
        </div>

        <ScrollArea className="h-[calc(100dvh-160px)] px-4">
          {!query && hasHistory && (
            <div className="py-4 animate-fade-in">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{t("हाल की खोज", "Recent Searches")}</span>
                </div>
                <button onClick={clearHistory} className="text-xs text-muted-foreground hover:text-destructive transition-colors flex items-center gap-1">
                  <Trash2 className="w-3 h-3" /> {t("साफ़ करें", "Clear")}
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((search, index) => (
                  <button key={index} onClick={() => setQuery(search)} className="px-3 py-1.5 bg-muted rounded-full text-xs font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}

          {!query && (
            <div className="py-4 animate-fade-in">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{t("लोकप्रिय", "Popular")}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((tag, index) => (
                  <button key={index} onClick={() => handleTagClick(tag)}
                    className="px-3 py-1.5 bg-muted rounded-full text-xs font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    {language === "hi" ? tag.hi : tag.en}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query.length >= 2 && results.length > 0 && (
            <div className="py-4 space-y-2 animate-fade-in">
              <span className="text-xs font-medium text-muted-foreground">{results.length} {t("मिले", "found")}</span>
              {results.map((sub, index) => (
                <SubServiceCard key={sub.id} title={sub.title} titleHi={sub.titleHi} description={sub.description}
                  onClick={() => handleResultClick(sub.id)} delay={index * 50} />
              ))}
            </div>
          )}

          {query.length >= 2 && results.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-3">
                <Search className="w-6 h-6 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium text-foreground">{t("कोई परिणाम नहीं", "No results")}</p>
              <p className="text-xs text-muted-foreground mt-1">{t("अलग शब्द आज़माएं", "Try different keywords")}</p>
            </div>
          )}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
