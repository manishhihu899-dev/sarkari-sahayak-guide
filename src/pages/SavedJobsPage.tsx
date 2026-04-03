import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { JobCard } from "@/components/JobCard";
import { useSavedJobs } from "@/hooks/use-saved-jobs";
import { useLanguage } from "@/hooks/use-language";
import { Bookmark } from "lucide-react";

const SavedJobsPage = () => {
  const { savedJobs } = useSavedJobs();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title={t("सेव की गई नौकरियां", "Saved Jobs")} showBack />
      <div className="px-4 py-4">
        {savedJobs.length > 0 ? (
          <div className="space-y-3">
            {savedJobs.map((job, i) => (
              <JobCard key={job.id} job={job} delay={i * 80} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
            <Bookmark className="w-12 h-12 mb-4 opacity-30" />
            <p className="text-lg font-medium">{t("कोई सेव नहीं", "No saved jobs")}</p>
            <p className="text-sm mt-1">{t("जॉब कार्ड पर बुकमार्क आइकन दबाएं", "Tap the bookmark icon on any job card")}</p>
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
};

export default SavedJobsPage;
