import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export const InterstitialAd = () => {
  const location = useLocation();
  const prevPath = useRef(location.pathname);
  const navCount = useRef(0);

  useEffect(() => {
    if (location.pathname !== prevPath.current) {
      prevPath.current = location.pathname;
      navCount.current += 1;

      // Show interstitial every 3 page navigations to avoid being intrusive
      if (navCount.current % 3 === 0) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.error("Interstitial ad error:", e);
        }
      }
    }
  }, [location.pathname]);

  // Google AdSense page-level ads handle interstitials automatically
  // when the script is loaded with the publisher ID
  return null;
};
