import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdBannerProps {
  slot: string;
  format?: "auto" | "fluid" | "rectangle" | "horizontal" | "vertical";
  className?: string;
  responsive?: boolean;
}

export const AdBanner = ({ slot, format = "auto", className = "", responsive = true }: AdBannerProps) => {
  const adRef = useRef<HTMLDivElement>(null);
  const pushed = useRef(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (pushed.current || hasError) return;
    try {
      if (typeof window !== "undefined" && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushed.current = true;
      }
    } catch (e) {
      console.warn("AdSense not available:", e);
      setHasError(true);
    }
  }, [hasError]);

  // Don't render anything if AdSense isn't available
  if (hasError) return null;

  return (
    <div className={`ad-container overflow-hidden ${className}`} ref={adRef}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", minHeight: "50px" }}
        data-ad-client="ca-pub-4559437819704446"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
};
