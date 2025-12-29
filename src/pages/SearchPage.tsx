import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { SubServiceCard } from "@/components/SubServiceCard";
import { BottomNav } from "@/components/BottomNav";
import { services, searchServices } from "@/data/services";
import { Search } from "lucide-react";

const popularSearches = [
  "Aadhaar update",
  "PAN card",
  "Passport apply",
  "Bank KYC",
  "PM Kisan",
  "SIM port"
];

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = searchQuery.length > 1 ? searchServices(searchQuery) : [];

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title="Search" showBack />
      
      <main className="px-4 py-6 space-y-6">
        <SearchBar 
          value={searchQuery} 
          onChange={setSearchQuery}
          placeholder="Service dhundhein..."
        />

        {searchQuery.length <= 1 ? (
          /* Popular Searches */
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-foreground">
              Popular Searches
            </h2>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchQuery(term)}
                  className="px-4 py-2 bg-card rounded-full text-sm text-foreground shadow-card hover:bg-secondary transition-colors touch-action-manipulation"
                >
                  {term}
                </button>
              ))}
            </div>

            {/* Recent hint */}
            <div className="flex items-center justify-center gap-2 py-12 text-muted-foreground">
              <Search className="w-12 h-12 opacity-30" />
            </div>
            <p className="text-center text-muted-foreground text-sm">
              Type karo aur instantly results dekho
            </p>
          </div>
        ) : (
          /* Search Results */
          <div className="space-y-3">
            <h2 className="text-sm font-medium text-muted-foreground">
              {searchResults.length > 0 
                ? `${searchResults.length} results for "${searchQuery}"`
                : `No results for "${searchQuery}"`
              }
            </h2>
            {searchResults.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-muted-foreground">
                  Kuch aur try karein jaise "Aadhaar" ya "Passport"
                </p>
              </div>
            )}
            {searchResults.map((sub, index) => (
              <SubServiceCard
                key={sub.id}
                title={sub.title}
                titleHi={sub.titleHi}
                description={sub.description}
                onClick={() => {
                  const parentService = services.find(s => 
                    s.subServices.some(ss => ss.id === sub.id)
                  );
                  if (parentService) {
                    navigate(`/service/${parentService.id}/${sub.id}`);
                  }
                }}
                delay={index * 50}
              />
            ))}
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default SearchPage;
