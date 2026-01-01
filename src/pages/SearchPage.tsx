import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { SubServiceCard } from "@/components/SubServiceCard";
import { BottomNav } from "@/components/BottomNav";
import { services, categories, searchServices } from "@/data/services";
import { Search, Filter, X } from "lucide-react";

const popularSearches = [
  "Aadhaar update",
  "PAN card",
  "Passport apply",
  "Bank KYC",
  "PM Kisan",
  "SIM port"
];

const commonDocuments = [
  { id: "aadhaar", label: "Aadhaar Card" },
  { id: "pan", label: "PAN Card" },
  { id: "passport", label: "Passport" },
  { id: "voter", label: "Voter ID" },
  { id: "bank", label: "Bank Account" },
  { id: "birth", label: "Birth Certificate" },
  { id: "ration", label: "Ration Card" },
];

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDocuments, setSelectedDocuments] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(c => c !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleDocument = (docId: string) => {
    setSelectedDocuments(prev => 
      prev.includes(docId) 
        ? prev.filter(d => d !== docId)
        : [...prev, docId]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedDocuments([]);
  };

  const activeFiltersCount = selectedCategories.length + selectedDocuments.length;

  const filteredResults = useMemo(() => {
    let results = searchQuery.length > 1 ? searchServices(searchQuery) : [];

    // Filter by category
    if (selectedCategories.length > 0) {
      results = results.filter(sub => {
        const parentService = services.find(s => 
          s.subServices.some(ss => ss.id === sub.id)
        );
        return parentService && selectedCategories.includes(parentService.category);
      });
    }

    // Filter by documents
    if (selectedDocuments.length > 0) {
      results = results.filter(sub => {
        const docs = sub.documents.join(" ").toLowerCase();
        return selectedDocuments.some(docId => {
          const docLabel = commonDocuments.find(d => d.id === docId)?.label.toLowerCase() || "";
          return docs.includes(docLabel) || docs.includes(docId);
        });
      });
    }

    return results;
  }, [searchQuery, selectedCategories, selectedDocuments]);

  // Get all subservices for browsing when no search query
  const allSubServices = useMemo(() => {
    let all = services.flatMap(s => 
      s.subServices.map(sub => ({ ...sub, parentId: s.id, parentCategory: s.category }))
    );

    if (selectedCategories.length > 0) {
      all = all.filter(sub => selectedCategories.includes(sub.parentCategory));
    }

    if (selectedDocuments.length > 0) {
      all = all.filter(sub => {
        const docs = sub.documents.join(" ").toLowerCase();
        return selectedDocuments.some(docId => {
          const docLabel = commonDocuments.find(d => d.id === docId)?.label.toLowerCase() || "";
          return docs.includes(docLabel) || docs.includes(docId);
        });
      });
    }

    return all;
  }, [selectedCategories, selectedDocuments]);

  const hasActiveFilters = activeFiltersCount > 0;
  const showFilteredBrowse = hasActiveFilters && searchQuery.length <= 1;

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title="Search" showBack />
      
      <main className="px-4 py-6 space-y-4">
        <div className="flex gap-2">
          <div className="flex-1">
            <SearchBar 
              value={searchQuery} 
              onChange={setSearchQuery}
              placeholder="Service dhundhein..."
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center justify-center w-12 h-12 rounded-xl transition-colors touch-action-manipulation ${
              showFilters || hasActiveFilters
                ? "bg-primary text-primary-foreground"
                : "bg-card text-foreground shadow-card"
            }`}
          >
            <Filter className="w-5 h-5" />
            {activeFiltersCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="bg-card rounded-xl p-4 shadow-card space-y-4 animate-fade-in">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-foreground">Filters</h3>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  <X className="w-4 h-4" />
                  Clear all
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">Category</h4>
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, -1).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => toggleCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-colors touch-action-manipulation ${
                      selectedCategories.includes(cat.id)
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {cat.nameHi}
                  </button>
                ))}
              </div>
            </div>

            {/* Document Filter */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">Document Type</h4>
              <div className="flex flex-wrap gap-2">
                {commonDocuments.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => toggleDocument(doc.id)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-colors touch-action-manipulation ${
                      selectedDocuments.includes(doc.id)
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {doc.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Active Filters Pills */}
        {hasActiveFilters && !showFilters && (
          <div className="flex flex-wrap gap-2">
            {selectedCategories.map(catId => {
              const cat = categories.find(c => c.id === catId);
              return cat ? (
                <button
                  key={catId}
                  onClick={() => toggleCategory(catId)}
                  className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {cat.nameHi}
                  <X className="w-3 h-3" />
                </button>
              ) : null;
            })}
            {selectedDocuments.map(docId => {
              const doc = commonDocuments.find(d => d.id === docId);
              return doc ? (
                <button
                  key={docId}
                  onClick={() => toggleDocument(docId)}
                  className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {doc.label}
                  <X className="w-3 h-3" />
                </button>
              ) : null;
            })}
          </div>
        )}

        {showFilteredBrowse ? (
          /* Filtered Browse Results */
          <div className="space-y-3">
            <h2 className="text-sm font-medium text-muted-foreground">
              {allSubServices.length} services found
            </h2>
            {allSubServices.map((sub, index) => (
              <SubServiceCard
                key={sub.id}
                title={sub.title}
                titleHi={sub.titleHi}
                description={sub.description}
                onClick={() => navigate(`/service/${sub.parentId}/${sub.id}`)}
                delay={index * 30}
              />
            ))}
          </div>
        ) : searchQuery.length <= 1 ? (
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
              {filteredResults.length > 0 
                ? `${filteredResults.length} results for "${searchQuery}"`
                : `No results for "${searchQuery}"`
              }
            </h2>
            {filteredResults.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-muted-foreground">
                  {hasActiveFilters 
                    ? "Filters change karke try karein"
                    : "Kuch aur try karein jaise \"Aadhaar\" ya \"Passport\""
                  }
                </p>
              </div>
            )}
            {filteredResults.map((sub, index) => (
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
