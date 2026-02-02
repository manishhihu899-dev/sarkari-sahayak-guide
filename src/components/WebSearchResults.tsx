import { ExternalLink, Globe, Loader2, AlertCircle, FileText } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { WebSearchResult } from "@/lib/api/web-search";

interface WebSearchResultsProps {
  results: WebSearchResult[];
  isLoading: boolean;
  error?: string;
  query: string;
}

export const WebSearchResults = ({ results, isLoading, error, query }: WebSearchResultsProps) => {
  const { t } = useLanguage();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" />
        </div>
        <p className="mt-4 text-muted-foreground text-sm">
          {t("Sarkari websites se dhundh rahe hain...", "Searching government websites...")}
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-8 animate-fade-in">
        <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center mb-3">
          <AlertCircle className="w-7 h-7 text-destructive" />
        </div>
        <p className="text-destructive font-medium">{t("Search mein error", "Search error")}</p>
        <p className="text-sm text-muted-foreground mt-1">{error}</p>
      </div>
    );
  }

  if (results.length === 0) {
    return null;
  }

  return (
    <div className="space-y-3 animate-fade-in">
      <div className="flex items-center gap-2 px-1">
        <Globe className="w-4 h-4 text-primary" />
        <h3 className="text-sm font-semibold text-foreground">
          {t("Web se Results", "Web Results")}
        </h3>
        <span className="text-xs text-muted-foreground bg-primary/10 px-2 py-0.5 rounded-full">
          {results.length} {t("results", "results")}
        </span>
      </div>

      <div className="space-y-2">
        {results.map((result, index) => (
          <a
            key={index}
            href={result.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-card rounded-xl border border-border/50 shadow-card hover:shadow-elevated transition-all duration-200 hover:scale-[1.01] group animate-fade-up"
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
  );
};
