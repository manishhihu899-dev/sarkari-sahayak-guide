import { LucideIcon } from "lucide-react";

interface InfoSectionProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  variant?: "default" | "warning" | "success";
  delay?: number;
}

export const InfoSection = ({ 
  icon: Icon, 
  title, 
  items, 
  variant = "default",
  delay = 0 
}: InfoSectionProps) => {
  const variants = {
    default: {
      bg: "bg-secondary",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      bullet: "bg-primary/40"
    },
    warning: {
      bg: "bg-warning/10",
      iconBg: "bg-warning/20",
      iconColor: "text-warning-foreground",
      bullet: "bg-warning"
    },
    success: {
      bg: "bg-success/10",
      iconBg: "bg-success/20",
      iconColor: "text-success",
      bullet: "bg-success"
    }
  };

  const style = variants[variant];

  return (
    <div 
      className={`rounded-xl p-4 ${style.bg} animate-fade-up`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-10 h-10 rounded-lg ${style.iconBg} flex items-center justify-center`}>
          <Icon className={`w-5 h-5 ${style.iconColor}`} />
        </div>
        <h3 className="font-semibold text-foreground">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-foreground/90">
            <span className={`w-1.5 h-1.5 rounded-full ${style.bullet} mt-2 shrink-0`} />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
