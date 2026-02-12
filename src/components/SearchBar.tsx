import { Search, X } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar = ({ 
  value, 
  onChange, 
  placeholder = "Aadhaar, PAN, Passport..."
}: SearchBarProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative opacity-0 animate-fade-up" style={{ animationDelay: '50ms', animationFillMode: 'forwards' }}>
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <Search className={`w-[18px] h-[18px] transition-colors duration-200 ${isFocused ? "text-primary" : "text-muted-foreground/60"}`} />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className="w-full h-12 pl-11 pr-11 bg-card rounded-2xl text-foreground placeholder:text-muted-foreground/50 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/15 border border-border/60 focus:border-primary/30 transition-all shadow-card"
      />
      {value && (
        <button 
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-secondary rounded-lg transition-colors"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>
      )}
    </div>
  );
};
