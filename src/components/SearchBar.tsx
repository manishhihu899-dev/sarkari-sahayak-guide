import { Search, X, ExternalLink, Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  showWebSearch?: boolean;
}

export const SearchBar = ({ 
  value, 
  onChange, 
  placeholder = "Aadhaar, PAN, Passport...",
  showWebSearch = true
}: SearchBarProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const { t } = useLanguage();

  const handleWebSearch = () => {
    if (value.trim()) {
      // Open Google search with government-focused query
      const query = encodeURIComponent(`${value} India government official site scheme service`);
      window.open(`https://www.google.com/search?q=${query}`, '_blank');
    }
  };

  return (
    <div className="space-y-2">
      <div 
        className={`relative transition-all duration-200 ${
          isFocused ? "scale-[1.02]" : ""
        }`}
      >
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <Search className={`w-5 h-5 transition-colors ${isFocused ? "text-primary" : "text-muted-foreground"}`} />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full h-14 pl-12 pr-12 bg-card rounded-xl shadow-card text-foreground placeholder:text-muted-foreground text-base focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
        />
        {value && (
          <button 
            onClick={() => onChange("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        )}
      </div>
      
      {/* Web Search Button - Shows when there's a query */}
      {showWebSearch && value.trim().length > 1 && (
        <button
          onClick={handleWebSearch}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl shadow-card hover:shadow-elevated transition-all touch-action-manipulation animate-fade-in group"
        >
          <Globe className="w-5 h-5 group-hover:animate-pulse" />
          <span className="font-medium">
            {t("Google par dhundhein", "Search on Google")}
          </span>
          <ExternalLink className="w-4 h-4 opacity-70" />
        </button>
      )}
    </div>
  );
};