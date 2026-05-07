import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

export const AppFooter = () => (
  <footer className="mt-6 bg-card border-t border-border px-4 py-5 space-y-3">
    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs">
      <Link to="/privacy" className="text-muted-foreground hover:text-primary font-medium">Privacy Policy</Link>
      <span className="text-border">·</span>
      <Link to="/terms" className="text-muted-foreground hover:text-primary font-medium">Terms</Link>
      <span className="text-border">·</span>
      <Link to="/contact" className="text-muted-foreground hover:text-primary font-medium">Contact</Link>
      <span className="text-border">·</span>
      <Link to="/feedback" className="text-muted-foreground hover:text-primary font-medium">Feedback</Link>
      <span className="text-border">·</span>
      <Link to="/about" className="text-muted-foreground hover:text-primary font-medium">About</Link>
    </div>
    <div className="flex items-start gap-2 bg-warning/10 border border-warning/30 rounded-xl p-2.5">
      <Shield className="w-3.5 h-3.5 text-warning shrink-0 mt-0.5" />
      <p className="text-[10px] text-foreground/75 leading-relaxed">
        This app is NOT an official government app. It only provides guidance and links to official websites. Ye sirf guidance ke liye hai.
      </p>
    </div>
    <p className="text-[10px] text-muted-foreground text-center">
      © 2026 Sarkari Sahayak · Made for Indian citizens
    </p>
  </footer>
);
