import { useState } from "react";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { SearchBar } from "@/components/SearchBar";
import { JobCard } from "@/components/JobCard";
import { searchJobs, jobListings } from "@/data/jobs";
import { useLanguage } from "@/hooks/use-language";
import { Search, TrendingUp } from "lucide-react";

const SearchJobsPage = () => {
  const [query, setQuery] = useState("");
  const { t } = useLanguage();
  const results = query.length > 1 ? searchJobs(query) : [];

  const popularSearches = ["SSC", "IBPS", "Railway", "UPSC", "SBI", "Police"];

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title={t("नौकरी खोजें", "Search Jobs")} showBack />
      <div className="px-4 py-4 space-y-4">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder={t("SSC, IBPS, Railway खोजें...", "Search SSC, IBPS, Railway...")}
        />

        {query.length <= 1 && (
          <div>
            <h3 className="text-sm font-medium text-muted-foreground flex items-center gap-1.5 mb-3">
              <TrendingUp className="w-4 h-4" />
              {t("लोकप्रिय खोज", "Popular Searches")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map(s => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  className="px-3 py-1.5 rounded-full bg-muted text-sm text-muted-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>

            <h3 className="text-sm font-medium text-muted-foreground mt-6 mb-3">
              {t("सभी नौकरियां", "All Jobs")} ({jobListings.length})
            </h3>
            <div className="space-y-3">
              {jobListings.slice(0, 5).map((job, i) => (
                <JobCard key={job.id} job={job} delay={i * 80} />
              ))}
            </div>
          </div>
        )}

        {query.length > 1 && (
          <div>
            <p className="text-sm text-muted-foreground mb-3">
              {results.length > 0
                ? `${results.length} ${t("परिणाम मिले", "results found")}`
                : t("कोई परिणाम नहीं मिला", "No results found")}
            </p>
            <div className="space-y-3">
              {results.map((job, i) => (
                <JobCard key={job.id} job={job} delay={i * 80} />
              ))}
            </div>
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
};

export default SearchJobsPage;
