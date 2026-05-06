import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { SubServiceCard } from "@/components/SubServiceCard";
import { BottomNav } from "@/components/BottomNav";
import { services, categories, searchServices } from "@/data/services";
import { Search, Filter, X, Sparkles, TrendingUp, Zap, Star, Shield } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

const popularSearches = [
  "Aadhaar", "PAN", "Passport", "Bank", "SIM",
  "Scholarship", "PM Awas Yojana", "Ayushman Bharat", "Voter ID", "Ration Card",
  "PM Kisan", "Mudra Loan", "Ujjwala", "MGNREGA", "Atal Pension",
  "Sukanya Samriddhi", "DigiLocker", "UMANG", "MyScheme", "e-Shram",
  "GST Portal", "BharatNet", "CSC", "Digital India", "Jal Jeevan"
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
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDocuments, setSelectedDocuments] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) ? prev.filter(c => c !== categoryId) : [...prev, categoryId]
    );
  };

  const toggleDocument = (docId: string) => {
    setSelectedDocuments(prev => 
      prev.includes(docId) ? prev.filter(d => d !== docId) : [...prev, docId]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedDocuments([]);
  };

  const activeFiltersCount = selectedCategories.length + selectedDocuments.length;

  const filteredResults = useMemo(() => {
    let results = searchQuery.length > 1 ? searchServices(searchQuery) : [];
    if (selectedCategories.length > 0) {
      results = results.filter(sub => {
        const parentService = services.find(s => s.subServices.some(ss => ss.id === sub.id));
        return parentService && selectedCategories.includes(parentService.category);
      });
    }
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
      <Header title={t("खोजें", "Search")} showBack />
      
      <main className="px-4 py-6 space-y-4">
        {/* Search Header */}
        <div className="relative rounded-2xl overflow-hidden mb-4 opacity-0 animate-scale-in" style={{ animationFillMode: 'forwards' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent/60 animate-gradient-shift" />
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '20px 20px'
            }} />
          </div>
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/15 blur-2xl animate-float-slow" />
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-white to-green-600" />
          <div className="relative z-10 p-4">
            <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full w-fit mb-3">
              <Shield className="w-3 h-3 text-green-400" />
              <span className="text-[10px] font-semibold text-white tracking-wide">{t("Secure Search", "Secure Search")}</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Search className="w-5 h-5 text-white/90" />
              <h2 className="text-lg font-bold text-white">{t("🔍 Dhundhein Kuch Bhi", "🔍 Search Anything")}</h2>
            </div>
            <p className="text-sm text-white/85">{t("Aadhaar, PAN, Passport - jo chahiye type karein", "Type what you need - Aadhaar, PAN, Passport")}</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex gap-2">
          <div className="flex-1">
            <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder={t("Service dhundhein...", "Search services...")} />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all ${
              showFilters || hasActiveFilters ? "bg-primary text-primary-foreground shadow-elevated" : "bg-card text-foreground shadow-card hover:bg-secondary"
            }`}
          >
            <Filter className="w-5 h-5" />
          </button>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="bg-card rounded-xl p-4 shadow-card space-y-4 animate-fade-in border border-border/50">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <Filter className="w-4 h-4 text-primary" />
                {t("Filters", "Filters")}
              </h3>
              {hasActiveFilters && (
                <button onClick={clearFilters} className="flex items-center gap-1 text-sm text-destructive hover:underline">
                  <X className="w-4 h-4" /> {t("Clear all", "Clear all")}
                </button>
              )}
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">{t("Category", "Category")}</h4>
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, -1).map((cat) => (
                  <button key={cat.id} onClick={() => toggleCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                      selectedCategories.includes(cat.id) ? "bg-primary text-primary-foreground shadow-md" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}>{cat.nameHi}</button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">{t("Document Type", "Document Type")}</h4>
              <div className="flex flex-wrap gap-2">
                {commonDocuments.map((doc) => (
                  <button key={doc.id} onClick={() => toggleDocument(doc.id)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                      selectedDocuments.includes(doc.id) ? "bg-accent text-accent-foreground shadow-md" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}>{doc.label}</button>
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
                <button key={catId} onClick={() => toggleCategory(catId)} className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {cat.nameHi} <X className="w-3 h-3" />
                </button>
              ) : null;
            })}
            {selectedDocuments.map(docId => {
              const doc = commonDocuments.find(d => d.id === docId);
              return doc ? (
                <button key={docId} onClick={() => toggleDocument(docId)} className="flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  {doc.label} <X className="w-3 h-3" />
                </button>
              ) : null;
            })}
          </div>
        )}

        {showFilteredBrowse ? (
          <div className="space-y-3">
            <h2 className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-success" />
              {allSubServices.length} {t("services found", "services found")}
            </h2>
            {allSubServices.map((sub, index) => (
              <SubServiceCard key={sub.id} title={sub.title} titleHi={sub.titleHi} description={sub.description}
                onClick={() => navigate(`/service/${sub.parentId}/${sub.id}`)} delay={index * 30} />
            ))}
          </div>
        ) : searchQuery.length <= 1 ? (
          <div className="space-y-5">
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                {t("Popular Searches", "Popular Searches")} <span className="text-xs font-normal text-muted-foreground ml-1">🔥</span>
              </h2>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term, index) => (
                  <button key={term} onClick={() => setSearchQuery(term)}
                    className="px-4 py-2.5 bg-card rounded-full text-sm font-medium text-foreground shadow-card hover:shadow-elevated transition-all flex items-center gap-2 animate-bounce-in"
                    style={{ animationDelay: `${150 + index * 60}ms`, animationFillMode: 'forwards' }}>
                    <Zap className="w-3 h-3 text-accent" /> {term}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-accent/5 via-primary/5 to-success/5 rounded-2xl p-4 border border-accent/15 overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/70 rounded-lg flex items-center justify-center shadow-md">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground">{t("Quick Tips", "Quick Tips")}</h3>
                </div>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5"><Sparkles className="w-3 h-3 text-primary" /></div>
                    {t("Hindi ya English mein type karein", "Type in Hindi or English")}
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center shrink-0 mt-0.5"><Zap className="w-3 h-3 text-accent" /></div>
                    {t("Short words use karein - 'PAN' ya 'Aadhaar'", "Use short words - 'PAN' or 'Aadhaar'")}
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-success/10 rounded-full flex items-center justify-center shrink-0 mt-0.5"><Filter className="w-3 h-3 text-success" /></div>
                    {t("Filters se aur better results milenge", "Use filters for better results")}
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 py-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/15 via-accent/10 to-success/10 flex items-center justify-center">
                <Search className="w-10 h-10 text-primary/50" />
              </div>
              <p className="text-center text-muted-foreground text-sm">{t("Type karo aur instantly results dekho", "Type and see instant results")}</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredResults.length > 0 && (
              <div className="space-y-3">
                <h2 className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-success" />
                  {filteredResults.length} {t("app mein mile", "found in app")}
                </h2>
                {filteredResults.map((sub, index) => {
                  const parentService = services.find(s => s.subServices.some(ss => ss.id === sub.id));
                  return (
                    <SubServiceCard key={sub.id} title={sub.title} titleHi={sub.titleHi} description={sub.description}
                      onClick={() => { if (parentService) navigate(`/service/${parentService.id}/${sub.id}`); }}
                      delay={index * 50} />
                  );
                })}
              </div>
            )}
            {filteredResults.length === 0 && (
              <div className="py-8 text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-muted/50 mx-auto mb-4 flex items-center justify-center">
                  <Search className="w-8 h-8 text-muted-foreground/50" />
                </div>
                <p className="text-muted-foreground">{t("Kuch aur type karein jaise 'PM Awas' ya 'Scholarship'", "Try something else like 'PM Awas' or 'Scholarship'")}</p>
              </div>
            )}
          </div>
        )}
      </main>
      <BottomNav />
    </div>
  );
};

export default SearchPage;
