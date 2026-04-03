import { Bookmark, BookmarkCheck, ExternalLink, Calendar, Users, Clock, Award } from "lucide-react";
import { JobListing } from "@/data/jobs";
import { useSavedJobs } from "@/hooks/use-saved-jobs";
import { useLanguage } from "@/hooks/use-language";
import { useToast } from "@/hooks/use-toast";

interface JobCardProps {
  job: JobListing;
  delay?: number;
}

export const JobCard = ({ job, delay = 0 }: JobCardProps) => {
  const { isJobSaved, toggleSaveJob } = useSavedJobs();
  const { t } = useLanguage();
  const { toast } = useToast();
  const saved = isJobSaved(job.id);

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nowSaved = toggleSaveJob(job);
    toast({
      title: nowSaved ? t("सेव किया गया!", "Saved!") : t("हटा दिया गया", "Removed"),
      description: nowSaved ? t("यह जॉब सेव हो गई", "Job saved successfully") : t("सेव से हटा दिया", "Removed from saved"),
    });
  };

  const handleView = () => {
    window.open(job.url, "_blank", "noopener,noreferrer");
  };

  const categoryColors = {
    latest: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    result: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
    "admit-card": "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  };

  const categoryLabels = {
    latest: t("नई भर्ती", "Latest Job"),
    result: t("परिणाम", "Result"),
    "admit-card": t("एडमिट कार्ड", "Admit Card"),
  };

  return (
    <div
      className="bg-card border border-border rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 opacity-0 animate-fade-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${categoryColors[job.category]}`}>
              {categoryLabels[job.category]}
            </span>
            {job.isNew && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/10 text-red-500 border border-red-500/20 animate-pulse">
                NEW
              </span>
            )}
          </div>
          <h3 className="font-semibold text-sm text-foreground line-clamp-2 mb-1">
            {t(job.titleHi, job.title)}
          </h3>
          <p className="text-xs text-muted-foreground mb-2">
            {t(job.departmentHi, job.department)}
          </p>
          <p className="text-xs text-muted-foreground/80 line-clamp-2 mb-3">
            {t(job.descriptionHi, job.description)}
          </p>

          <div className="flex items-center gap-3 flex-wrap text-[11px] text-muted-foreground">
            {job.vacancies && (
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3" /> {job.vacancies.toLocaleString()} {t("पद", "Posts")}
              </span>
            )}
            {job.lastDate && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" /> {t("अंतिम तिथि:", "Last Date:")} {job.lastDate}
              </span>
            )}
            {job.resultDate && (
              <span className="flex items-center gap-1">
                <Award className="w-3 h-3" /> {job.resultDate}
              </span>
            )}
            {job.examDate && (
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" /> {t("परीक्षा:", "Exam:")} {job.examDate}
              </span>
            )}
          </div>
        </div>

        <button
          onClick={handleSave}
          className="shrink-0 w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors"
        >
          {saved ? (
            <BookmarkCheck className="w-4 h-4 text-accent" />
          ) : (
            <Bookmark className="w-4 h-4 text-muted-foreground" />
          )}
        </button>
      </div>

      <button
        onClick={handleView}
        className="mt-3 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
      >
        <ExternalLink className="w-4 h-4" />
        {t("विवरण देखें", "View Details")}
      </button>
    </div>
  );
};
