import { Info } from "lucide-react";

export const DisclaimerBanner = () => {
  return (
    <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-start gap-3">
      <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
      <p className="text-sm text-foreground/80 leading-relaxed">
        <strong>Note:</strong> Ye sirf guidance ke liye hai. Form official website ya office par hi bharein. Yahan koi form submit nahi hota.
      </p>
    </div>
  );
};
