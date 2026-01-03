import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { SubServiceCard } from "@/components/SubServiceCard";
import { useBookmarks } from "@/hooks/use-bookmarks";
import { useLanguage } from "@/hooks/use-language";
import { Bookmark } from "lucide-react";

const SavedPage = () => {
  const navigate = useNavigate();
  const { bookmarks } = useBookmarks();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title={t("Saved Services", "सेव की गई सेवाएं")} />
      
      <main className="px-4 py-6 space-y-4">
        {bookmarks.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-up">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <Bookmark className="w-8 h-8 text-muted-foreground" />
            </div>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              {t("No saved services", "कोई सेव की गई सेवा नहीं")}
            </h2>
            <p className="text-muted-foreground text-sm max-w-xs">
              {t(
                "Tap the bookmark icon on any service to save it for quick access later.",
                "किसी भी सेवा पर बुकमार्क आइकन टैप करें ताकि बाद में जल्दी एक्सेस कर सकें।"
              )}
            </p>
          </div>
        ) : (
          <>
            <p className="text-sm text-muted-foreground">
              {t(
                `${bookmarks.length} saved service${bookmarks.length > 1 ? 's' : ''}`,
                `${bookmarks.length} सेव की गई सेवा${bookmarks.length > 1 ? 'एं' : ''}`
              )}
            </p>
            {bookmarks.map((bookmark, index) => (
              <SubServiceCard
                key={`${bookmark.serviceId}-${bookmark.subServiceId}`}
                title={bookmark.title}
                titleHi={bookmark.titleHi}
                description=""
                onClick={() => navigate(`/service/${bookmark.serviceId}/${bookmark.subServiceId}`)}
                delay={index * 50}
              />
            ))}
          </>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default SavedPage;
