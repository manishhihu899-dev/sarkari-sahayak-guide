import { useState, useEffect, useRef, useCallback } from "react";
import { Search, X, Loader2, TrendingUp, Globe, ExternalLink, FileText, Mic, MicOff } from "lucide-react";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLanguage } from "@/hooks/use-language";
import { searchWeb, WebSearchResult } from "@/lib/api/web-search";

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Extend Window interface for Speech Recognition
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
  onstart: (() => void) | null;
}

declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognition;
    webkitSpeechRecognition: new () => SpeechRecognition;
  }
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
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // Check for speech recognition support
  useEffect(() => {
    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    setSpeechSupported(!!SpeechRecognitionAPI);
    
    if (SpeechRecognitionAPI) {
      recognitionRef.current = new SpeechRecognitionAPI();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = language === "hi" ? "hi-IN" : "en-IN";
      
      recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript;
        setQuery(transcript);
        performSearch(transcript);
      };
      
      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };
      
      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, [language]);

  // Auto-focus input when modal opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
      setWebResults([]);
      setError(null);
      setHasSearched(false);
      setIsListening(false);
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    }
  }, [open]);

  // Toggle voice recognition
  const toggleVoiceSearch = () => {
    if (!recognitionRef.current) return;
    
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.lang = language === "hi" ? "hi-IN" : "en-IN";
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

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
        className="h-[100dvh] p-0 border-0 rounded-t-2xl overflow-hidden bg-background"
      >
        {/* Header */}
        <div className="relative border-b border-border bg-card">
          {/* Tricolor stripe */}
          <div className="h-0.5 flex">
            <div className="flex-1 bg-[#FF9933]" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-[#138808]" />
          </div>
          
          <div className="flex items-center justify-between px-4 py-3">
            <SheetTitle className="text-base font-semibold text-foreground flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Search className="w-4 h-4 text-primary" />
              </div>
              {t("सर्च करें", "Search")}
            </SheetTitle>
            <button 
              onClick={() => onOpenChange(false)}
              className="w-8 h-8 flex items-center justify-center hover:bg-muted rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Search Input */}
        <div className="px-4 py-4 bg-card/50">
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              {isLoading ? (
                <Loader2 className="w-5 h-5 text-primary animate-spin" />
              ) : (
                <Search className="w-5 h-5 text-muted-foreground" />
              )}
            </div>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder={t("कुछ भी सर्च करें...", "Search anything...")}
              className="w-full h-12 pl-11 pr-24 bg-background rounded-xl text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all border border-border"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
              {query && (
                <button 
                  onClick={handleClear}
                  className="w-8 h-8 flex items-center justify-center hover:bg-muted rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              )}
              {speechSupported && (
                <button 
                  onClick={toggleVoiceSearch}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all ${
                    isListening 
                      ? "bg-destructive text-destructive-foreground animate-pulse" 
                      : "hover:bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isListening ? (
                    <MicOff className="w-4 h-4" />
                  ) : (
                    <Mic className="w-4 h-4" />
                  )}
                </button>
              )}
            </div>
          </div>
          
          {/* Listening indicator */}
          {isListening && (
            <div className="mt-2 flex items-center justify-center gap-2 text-sm text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {t("सुन रहे हैं...", "Listening...")}
            </div>
          )}
        </div>

        {/* Content Area */}
        <ScrollArea className="h-[calc(100dvh-160px)] px-4">
          {/* Popular Searches */}
          {!query && !hasSearched && (
            <div className="py-4 animate-fade-in">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  {t("लोकप्रिय", "Popular")}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((tag, index) => (
                  <button
                    key={index}
                    onClick={() => handleTagClick(tag)}
                    className="px-3 py-1.5 bg-muted rounded-full text-xs font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {language === "hi" ? tag.hi : tag.en}
                  </button>
                ))}
              </div>

              {/* Tips */}
              <div className="mt-6 p-4 bg-muted/50 rounded-xl">
                <h4 className="text-sm font-medium text-foreground mb-2">
                  {t("💡 सर्च टिप्स", "💡 Search Tips")}
                </h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• {t("सरकारी योजनाएं खोजें", "Search government schemes")}</li>
                  <li>• {t("हिंदी या English में टाइप करें", "Type in Hindi or English")}</li>
                  {speechSupported && (
                    <li>• {t("माइक बटन से बोलकर सर्च करें", "Use mic button for voice search")}</li>
                  )}
                </ul>
              </div>
            </div>
          )}

          {/* Loading State */}
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Loader2 className="w-6 h-6 text-primary animate-spin" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                {t("खोज रहे हैं...", "Searching...")}
              </p>
            </div>
          )}

          {/* Error State */}
          {error && !isLoading && (
            <div className="flex flex-col items-center justify-center py-8 animate-fade-in">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-3">
                <X className="w-6 h-6 text-destructive" />
              </div>
              <p className="text-sm font-medium text-destructive">{t("त्रुटि", "Error")}</p>
              <p className="text-xs text-muted-foreground mt-1">{error}</p>
            </div>
          )}

          {/* Results */}
          {!isLoading && !error && webResults.length > 0 && (
            <div className="py-4 space-y-3 animate-fade-in">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {t("परिणाम", "Results")}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {webResults.length} {t("मिले", "found")}
                </span>
              </div>

              <div className="space-y-2 pb-8">
                {webResults.map((result, index) => (
                  <a
                    key={index}
                    href={result.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-sm transition-all group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <FileText className="w-4 h-4 text-primary" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="text-[10px] font-medium text-success bg-success/10 px-1.5 py-0.5 rounded">
                            {result.source}
                          </span>
                        </div>
                        
                        <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                          {result.title}
                        </h4>
                        
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                          {result.description || result.content}
                        </p>
                      </div>
                      
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {!isLoading && !error && hasSearched && query && webResults.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-3">
                <Search className="w-6 h-6 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium text-foreground">
                {t("कोई परिणाम नहीं", "No results")}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {t("अलग शब्द आज़माएं", "Try different keywords")}
              </p>
            </div>
          )}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};