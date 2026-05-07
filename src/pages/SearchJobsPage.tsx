import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { SearchBar } from "@/components/SearchBar";
import { JobCard } from "@/components/JobCard";
import { SubServiceCard } from "@/components/SubServiceCard";
import { searchJobs, jobListings } from "@/data/jobs";
import { services, searchServices } from "@/data/services";
import { useLanguage } from "@/hooks/use-language";
import { TrendingUp, Briefcase, FileText } from "lucide-react";

const SearchJobsPage = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const { t } = useLanguage();

  const jobResults = query.length > 1 ? searchJobs(query) : [];
  const serviceResults = useMemo(
    () => (query.length > 1 ? searchServices(query) : []),
    [query]
  );

  const findParentId = (subId: string) =>
    services.find(s => s.subServices.some(ss => ss.id === subId))?.id;

  const popularSearches = [
    "SSC", "IBPS", "Railway", "UPSC", "SBI", "Police",
    "PM Awas", "Mudra Loan", "Ujjwala", "DigiLocker", "UMANG", "MyScheme", "e-Shram", "GST Portal"
  ];

  const totalResults = jobResults.length + serviceResults.length;

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title={t("नौकरी खोजें", "Search Jobs")} showBack />
      <div className="px-4 py-4 space-y-4">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder={t("नौकरी, योजना, पोर्टल खोजें...", "Search jobs, schemes, portals...")}
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
          <div className="space-y-5">
            <p className="text-sm text-muted-foreground">
              {totalResults > 0
                ? `${totalResults} ${t("परिणाम मिले", "results found")}`
                : t("कोई परिणाम नहीं मिला", "No results found")}
            </p>

            {jobResults.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-1.5 mb-3">
                  <Briefcase className="w-4 h-4 text-accent" />
                  {t("नौकरियां", "Jobs")} ({jobResults.length})
                </h3>
                <div className="space-y-3">
                  {jobResults.map((job, i) => (
                    <JobCard key={job.id} job={job} delay={i * 60} />
                  ))}
                </div>
              </div>
            )}

            {serviceResults.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-1.5 mb-3">
                  <FileText className="w-4 h-4 text-success" />
                  {t("योजनाएं और पोर्टल", "Schemes & Portals")} ({serviceResults.length})
                </h3>
                <div className="space-y-3">
                  {serviceResults.map((sub, i) => {
                    const parentId = findParentId(sub.id);
                    if (!parentId) return null;
                    return (
                      <SubServiceCard
                        key={sub.id}
                        title={sub.title}
                        titleHi={sub.titleHi}
                        description={sub.description}
                        onClick={() => navigate(`/service/${parentId}/${sub.id}`)}
                        delay={i * 40}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
};

export default SearchJobsPage;
