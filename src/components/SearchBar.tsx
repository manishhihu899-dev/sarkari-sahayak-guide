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
  );
};