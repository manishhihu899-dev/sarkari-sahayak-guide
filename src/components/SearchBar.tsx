import { Search, X } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar = ({ value, onChange, placeholder = "Aadhaar, PAN, Passport..." }: SearchBarProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div 
      className={`relative transition-all duration-200 ${
        isFocused ? "scale-[1.01]" : ""
      }`}
    >
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <Search className={`w-5 h-5 transition-colors duration-200 ${isFocused ? "text-primary" : "text-muted-foreground"}`} strokeWidth={1.75} />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className="w-full h-14 pl-12 pr-12 bg-card rounded-2xl border border-border/60 shadow-card text-foreground placeholder:text-muted-foreground text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-200"
      />
      {value && (
        <button 
          onClick={() => onChange("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 hover:bg-secondary rounded-lg transition-colors duration-200"
        >
          <X className="w-4 h-4 text-muted-foreground" strokeWidth={2} />
        </button>
      )}
    </div>
  );
};
