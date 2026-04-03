import { useState } from "react";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { JobCard } from "@/components/JobCard";
import { getJobsByCategory } from "@/data/jobs";
import { useLanguage } from "@/hooks/use-language";
import { Briefcase, Award, FileText } from "lucide-react";

type TabType = "latest" | "result" | "admit-card";

const JobsPage = () => {
  const [activeTab, setActiveTab] = useState<TabType>("latest");
  const { t } = useLanguage();

  const tabs = [
    { id: "latest" as TabType, label: t("नई भर्ती", "Latest Jobs"), icon: Briefcase },
    { id: "result" as TabType, label: t("परिणाम", "Results"), icon: Award },
    { id: "admit-card" as TabType, label: t("एडमिट कार्ड", "Admit Card"), icon: FileText },
  ];

  const jobs = getJobsByCategory(activeTab);

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title={t("सरकारी नौकरी", "Government Jobs")} showBack />
      <div className="px-4 py-4">
        {/* Tabs */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Job listings */}
        <div className="space-y-3">
          {jobs.map((job, i) => (
            <JobCard key={job.id} job={job} delay={i * 80} />
          ))}
          {jobs.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <p>{t("कोई डेटा नहीं मिला", "No data found")}</p>
            </div>
          )}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default JobsPage;
