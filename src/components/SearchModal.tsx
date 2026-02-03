import { useState, useEffect, useRef, useCallback } from "react";
import { Search, X, Loader2, TrendingUp, Globe, ExternalLink, FileText } from "lucide-react";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLanguage } from "@/hooks/use-language";
import { searchWeb, WebSearchResult } from "@/lib/api/web-search";

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
];

export const SearchModal = ({ open, onOpenChange }: SearchModalProps) => {
  const { t, language } = useLanguage();
  const [query, setQuery] = useState("");
  const [webResults, setWebResults] = useState<WebSearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-focus input when modal opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      // Reset state when closed
      setQuery("");
      setWebResults([]);
      setError(null);
      setHasSearched(false);
    }
  }, [open]);

  // Debounced web search
  const performSearch = useCallback(async (searchQuery: string) => {
    if (searchQuery.length < 3) {
      setWebResults([]);
      setHasSearched(false);
      return;
    }

    setIsLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const response = await searchWeb(searchQuery, 8);
      if (response.success && response.results) {
        setWebResults(response.results);
      } else {
        setError(response.error || "Search failed");
        setWebResults([]);
      }
    } catch (err) {
      setError("Search failed");
      setWebResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Handle input change with debounce
  const handleInputChange = (value: string) => {
    setQuery(value);
    
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      performSearch(value);
    }, 800);
  };

  // Handle popular tag click
  const handleTagClick = (tag: { hi: string; en: string }) => {
    const searchTerm = language === "hi" ? tag.hi : tag.en;
    setQuery(searchTerm);
    performSearch(searchTerm);
  };

  // Handle clear
  const handleClear = () => {
    setQuery("");
    setWebResults([]);
    setError(null);
    setHasSearched(false);
    inputRef.current?.focus();
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent 
        side="bottom" 
        className="h-[100dvh] p-0 border-0 rounded-t-3xl overflow-hidden"
      >
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />
        <div className="absolute top-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float-slow pointer-events-none" />
        <div className="absolute top-40 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float-slow pointer-events-none" style={{ animationDelay: '1s' }} />

        {/* Header with Tricolor */}
        <div className="relative">
          <div className="h-1 flex">
            <div className="flex-1 bg-[#FF9933]" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-[#138808]" />
          </div>
          
          <div className="flex items-center justify-between px-4 py-3 bg-card/80 backdrop-blur-sm border-b border-border/50">
            <SheetTitle className="text-lg font-bold text-foreground flex items-center gap-2">
              <Search className="w-5 h-5 text-primary" />
              {t("सर्च करें", "Search")}
            </SheetTitle>
            <button 
              onClick={() => onOpenChange(false)}
              className="p-2 hover:bg-muted rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Search Input */}
        <div className="px-4 py-4 relative z-10">
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              {isLoading ? (
                <Loader2 className="w-6 h-6 text-primary animate-spin" />
              ) : (
                <Search className="w-6 h-6 text-primary transition-colors" />
              )}
            </div>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder={t("कुछ भी सर्च करें... आधार, पैन, पासपोर्ट", "Search anything... Aadhaar, PAN, Passport")}
              className="w-full h-14 pl-14 pr-14 bg-card rounded-2xl shadow-lg text-foreground placeholder:text-muted-foreground text-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all border border-border/50"
            />
            {query && (
              <button 
                onClick={handleClear}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            )}
          </div>
        </div>

        {/* Content Area */}
        <ScrollArea className="h-[calc(100dvh-180px)] px-4">
          {/* Popular Searches - Show when no query */}
          {!query && !hasSearched && (
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-foreground">
                  {t("लोकप्रिय सर्च", "Popular Searches")}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((tag, index) => (
                  <button
                    key={index}
                    onClick={() => handleTagClick(tag)}
                    className="px-4 py-2 bg-card rounded-full border border-border/50 text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-sm"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {language === "hi" ? tag.hi : tag.en}
                  </button>
                ))}
              </div>

              {/* Tips */}
              <div className="mt-8 p-4 bg-accent/10 rounded-xl border border-accent/20">
                <h4 className="font-semibold text-foreground mb-2">
                  {t("💡 टिप्स", "💡 Tips")}
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• {t("कोई भी सरकारी योजना खोजें", "Search any government scheme")}</li>
                  <li>• {t("सरकारी वेबसाइट से सीधे रिजल्ट", "Results directly from govt websites")}</li>
                  <li>• {t("हिंदी या English में टाइप करें", "Type in Hindi or English")}</li>
                </ul>
              </div>
            </div>
          )}

          {/* Loading State */}
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Loader2 className="w-8 h-8 text-primary animate-spin" />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" />
              </div>
              <p className="mt-4 text-muted-foreground text-sm">
                {t("सरकारी वेबसाइट से खोज रहे हैं...", "Searching government websites...")}
              </p>
            </div>
          )}

          {/* Error State */}
          {error && !isLoading && (
            <div className="flex flex-col items-center justify-center py-8 animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center mb-3">
                <X className="w-7 h-7 text-destructive" />
              </div>
              <p className="text-destructive font-medium">{t("खोज में त्रुटि", "Search error")}</p>
              <p className="text-sm text-muted-foreground mt-1">{error}</p>
            </div>
          )}

          {/* Results */}
          {!isLoading && !error && webResults.length > 0 && (
            <div className="space-y-3 animate-fade-in pb-8">
              <div className="flex items-center gap-2 px-1">
                <Globe className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-semibold text-foreground">
                  {t("सरकारी वेबसाइट से", "From Government Websites")}
                </h3>
                <span className="text-xs text-muted-foreground bg-primary/10 px-2 py-0.5 rounded-full">
                  {webResults.length} {t("परिणाम", "results")}
                </span>
              </div>

              <div className="space-y-2">
                {webResults.map((result, index) => (
                  <a
                    key={index}
                    href={result.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-card rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.01] group animate-fade-up"
                    style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'forwards' }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center shrink-0">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-success font-medium bg-success/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Globe className="w-3 h-3" />
                            {result.source}
                          </span>
                        </div>
                        
                        <h4 className="font-semibold text-foreground text-sm leading-tight group-hover:text-primary transition-colors line-clamp-2">
                          {result.title}
                        </h4>
                        
                        <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">
                          {result.description || result.content}
                        </p>
                      </div>
                      
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {!isLoading && !error && hasSearched && query && webResults.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="font-medium text-foreground">
                {t("कोई परिणाम नहीं मिला", "No results found")}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {t("अलग शब्द से खोजें", "Try different keywords")}
              </p>
            </div>
          )}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
