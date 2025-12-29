import { ArrowLeft, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  showShare?: boolean;
  onShare?: () => void;
}

export const Header = ({ title, showBack = false, showShare = false, onShare }: HeaderProps) => {
  const navigate = useNavigate();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title || "Sarkaari Sahayak",
          text: "Ye dekho - sarkari kaam ka easy guide",
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      onShare?.();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-hero px-4 py-4 shadow-elevated">
      <div className="flex items-center gap-3">
        {showBack && (
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors touch-action-manipulation active:scale-95"
          >
            <ArrowLeft className="w-5 h-5 text-primary-foreground" />
          </button>
        )}
        <div className="flex-1">
          {title ? (
            <h1 className="text-lg font-semibold text-primary-foreground line-clamp-1">
              {title}
            </h1>
          ) : (
            <div>
              <h1 className="text-xl font-bold text-primary-foreground">
                सरकारी सहायक
              </h1>
              <p className="text-xs text-primary-foreground/80 mt-0.5">
                Ek hi app mein sabhi sarkari kaam ka guide
              </p>
            </div>
          )}
        </div>
        {showShare && (
          <button 
            onClick={handleShare}
            className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors touch-action-manipulation active:scale-95"
          >
            <Share2 className="w-5 h-5 text-primary-foreground" />
          </button>
        )}
      </div>
    </header>
  );
};
