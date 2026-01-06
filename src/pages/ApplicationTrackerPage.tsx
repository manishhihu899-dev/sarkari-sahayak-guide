import { useState } from "react";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { useLanguage } from "@/hooks/use-language";
import { useApplications, SavedApplication } from "@/hooks/use-applications";
import { 
  ClipboardList, Plus, ExternalLink, Trash2, X, 
  FileText, Calendar, StickyNote, ChevronRight
} from "lucide-react";
import { services } from "@/data/services";

// Portal URLs for different schemes
const schemePortals: Record<string, { name: string; url: string; statusPath?: string }> = {
  "pm-kisan": { name: "PM Kisan Portal", url: "https://pmkisan.gov.in", statusPath: "/beneficiarystatus" },
  "pm-awas": { name: "PM Awas Portal", url: "https://pmaymis.gov.in", statusPath: "/track-application" },
  "ayushman-bharat": { name: "Ayushman Bharat", url: "https://pmjay.gov.in" },
  "sukanya-samriddhi": { name: "India Post", url: "https://www.indiapost.gov.in" },
  "atal-pension": { name: "NSDL CRA", url: "https://enps.nsdl.com" },
  "jan-dhan": { name: "PMJDY Portal", url: "https://pmjdy.gov.in" },
  "mudra-loan": { name: "Mudra Portal", url: "https://www.mudra.org.in" },
};

const ApplicationTrackerPage = () => {
  const { t, language } = useLanguage();
  const { applications, addApplication, removeApplication } = useApplications();
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedScheme, setSelectedScheme] = useState("");
  const [applicationId, setApplicationId] = useState("");
  const [notes, setNotes] = useState("");

  // Get all schemes for dropdown
  const allSchemes = services
    .filter(s => s.category === "schemes")
    .flatMap(service =>
      service.subServices.map(sub => ({
        id: sub.id,
        name: sub.title,
        nameHi: sub.titleHi,
        parentId: service.id,
        portalUrl: schemePortals[sub.id]?.url || sub.officialWebsite,
      }))
    );

  const handleAddApplication = () => {
    if (!selectedScheme || !applicationId.trim()) return;

    const scheme = allSchemes.find(s => s.id === selectedScheme);
    if (!scheme) return;

    addApplication({
      applicationId: applicationId.trim(),
      schemeName: scheme.name,
      schemeNameHi: scheme.nameHi,
      schemeId: scheme.id,
      parentServiceId: scheme.parentId,
      portalUrl: scheme.portalUrl,
      notes: notes.trim() || undefined,
    });

    // Reset form
    setSelectedScheme("");
    setApplicationId("");
    setNotes("");
    setShowAddForm(false);
  };

  const getPortalInfo = (schemeId: string) => {
    return schemePortals[schemeId] || null;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "hi" ? "hi-IN" : "en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title={t("आवेदन ट्रैकर", "Application Tracker")} showBack />

      {/* Hero Banner */}
      <div
        className="relative overflow-hidden py-6 px-4"
        style={{
          background: `linear-gradient(135deg, hsl(200 80% 45%) 0%, hsl(200 80% 30%) 100%)`,
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-white/10" />
          <div className="absolute left-1/4 bottom-0 w-16 h-16 rounded-full bg-white/5" />
        </div>

        <div className="relative z-10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <ClipboardList className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-white">
              {t("अपने आवेदन ट्रैक करें", "Track Your Applications")}
            </h2>
            <p className="text-white/80 text-sm">
              {t(
                `${applications.length} आवेदन सेव किए`,
                `${applications.length} applications saved`
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* Add New Button */}
        {!showAddForm && (
          <button
            onClick={() => setShowAddForm(true)}
            className="w-full mb-4 p-4 bg-accent/10 border-2 border-dashed border-accent/30 rounded-2xl flex items-center justify-center gap-2 text-accent font-medium hover:bg-accent/20 transition-colors active:scale-[0.98] opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <Plus className="w-5 h-5" />
            {t("नया आवेदन जोड़ें", "Add New Application")}
          </button>
        )}

        {/* Add Form */}
        {showAddForm && (
          <div
            className="mb-4 p-4 bg-card rounded-2xl border border-border shadow-card opacity-0 animate-scale-up"
            style={{ animationDelay: "0.05s", animationFillMode: "forwards" }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">
                {t("नया आवेदन जोड़ें", "Add New Application")}
              </h3>
              <button
                onClick={() => setShowAddForm(false)}
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            <div className="space-y-3">
              {/* Scheme Select */}
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1 block">
                  {t("योजना चुनें", "Select Scheme")}
                </label>
                <select
                  value={selectedScheme}
                  onChange={e => setSelectedScheme(e.target.value)}
                  className="w-full p-3 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">{t("-- योजना चुनें --", "-- Select Scheme --")}</option>
                  {allSchemes.map(scheme => (
                    <option key={scheme.id} value={scheme.id}>
                      {language === "hi" ? scheme.nameHi : scheme.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Application ID */}
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1 block">
                  {t("आवेदन ID / रेफरेंस नंबर", "Application ID / Reference No.")}
                </label>
                <input
                  type="text"
                  value={applicationId}
                  onChange={e => setApplicationId(e.target.value)}
                  placeholder={t("जैसे: PMKISAN12345678", "e.g., PMKISAN12345678")}
                  className="w-full p-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  maxLength={50}
                />
              </div>

              {/* Notes */}
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1 block">
                  {t("नोट्स (वैकल्पिक)", "Notes (Optional)")}
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  placeholder={t("कोई भी याद रखने वाली बात", "Any reminder notes")}
                  className="w-full p-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  maxLength={100}
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleAddApplication}
                disabled={!selectedScheme || !applicationId.trim()}
                className="w-full p-3 bg-accent text-accent-foreground rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] transition-transform"
              >
                {t("सेव करें", "Save")}
              </button>
            </div>
          </div>
        )}

        {/* Applications List */}
        {applications.length > 0 ? (
          <div className="space-y-3">
            {applications.map((app, index) => (
              <ApplicationCard
                key={app.id}
                application={app}
                portalInfo={getPortalInfo(app.schemeId)}
                formatDate={formatDate}
                onRemove={() => removeApplication(app.id)}
                delay={0.1 + index * 0.05}
                language={language}
                t={t}
              />
            ))}
          </div>
        ) : (
          !showAddForm && (
            <div
              className="text-center py-12 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
            >
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <ClipboardList className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {t("कोई आवेदन सेव नहीं है", "No applications saved")}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t(
                  "अपने आवेदन ID यहाँ सेव करें ताकि आसानी से ट्रैक कर सकें",
                  "Save your application IDs here to track them easily"
                )}
              </p>
            </div>
          )
        )}
      </div>

      <BottomNav />
    </div>
  );
};

// Application Card Component
interface ApplicationCardProps {
  application: SavedApplication;
  portalInfo: { name: string; url: string; statusPath?: string } | null;
  formatDate: (date: string) => string;
  onRemove: () => void;
  delay: number;
  language: string;
  t: (hi: string, en: string) => string;
}

const ApplicationCard = ({
  application,
  portalInfo,
  formatDate,
  onRemove,
  delay,
  language,
  t,
}: ApplicationCardProps) => {
  const statusUrl = portalInfo
    ? `${portalInfo.url}${portalInfo.statusPath || ""}`
    : application.portalUrl;

  return (
    <div
      className="bg-card rounded-2xl border border-border shadow-card overflow-hidden opacity-0 animate-fade-up"
      style={{ animationDelay: `${delay}s`, animationFillMode: "forwards" }}
    >
      {/* Header */}
      <div className="p-4 border-b border-border/50">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground text-base leading-tight">
              {language === "hi" ? application.schemeNameHi : application.schemeName}
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <FileText className="w-4 h-4 text-accent shrink-0" />
              <span className="text-sm font-mono text-foreground bg-accent/10 px-2 py-0.5 rounded">
                {application.applicationId}
              </span>
            </div>
          </div>
          <button
            onClick={onRemove}
            className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 hover:bg-red-500/20 transition-colors shrink-0"
            aria-label={t("हटाएं", "Remove")}
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {formatDate(application.dateAdded)}
          </span>
          {application.notes && (
            <span className="flex items-center gap-1">
              <StickyNote className="w-3.5 h-3.5" />
              {application.notes}
            </span>
          )}
        </div>
      </div>

      {/* Action Button */}
      <a
        href={statusUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between p-3 bg-accent/5 hover:bg-accent/10 transition-colors"
      >
        <div className="flex items-center gap-2">
          <ExternalLink className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-accent">
            {t("स्टेटस चेक करें", "Check Status")}
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <span>{portalInfo?.name || t("आधिकारिक पोर्टल", "Official Portal")}</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </a>
    </div>
  );
};

export default ApplicationTrackerPage;
