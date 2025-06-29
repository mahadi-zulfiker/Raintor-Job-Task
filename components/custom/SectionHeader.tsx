import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionHeaderProps {
  title: ReactNode;
  subtitle?: string;
  showArrow?: boolean;
  arrowText?: string;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  showArrow = false,
  arrowText,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col md:flex-row justify-between mb-8", className)}>
      <div className="flex items-center mb-4 md:mb-0">
        {showArrow && (
          <div className="flex items-center space-x-2 text-foreground border border-muted-foreground rounded-full px-4 py-2 mr-4 md:mr-8 whitespace-nowrap">
            <ArrowDown className="h-4 w-4" />
            <span className="text-sm font-medium">{arrowText || "Scroll Down"}</span>
          </div>
        )}
        <h2 className="text-4xl lg:text-6xl font-bold text-foreground">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-sm mt-4 md:mt-0 text-left md:text-right">
          {subtitle}
        </p>
      )}
    </div>
  );
}