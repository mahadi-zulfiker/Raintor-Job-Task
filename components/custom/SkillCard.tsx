// components/custom/SkillCard.tsx
// Make sure this is a client component if it uses client-side hooks/state
// "use client"; // Uncomment if this component needs client-side features directly

import { cn } from "@/lib/utils"; // Assuming you have a utility for class merging
import { LucideIcon, ArrowRight } from "lucide-react"; // Import ArrowRight for consistency
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui Button

interface SkillCardProps {
  title: string;
  description: string;
  icon: LucideIcon; // Type for Lucide icons
  className?: string;
  isLoading?: boolean; // New prop for loading state
}

export function SkillCard({ title, description, icon: Icon, className, isLoading }: SkillCardProps) {
  if (isLoading) {
    return (
      <div className={cn("bg-card p-6 rounded-lg shadow-lg flex flex-col space-y-4", className)}>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-10 w-10 rounded-full" /> {/* Icon skeleton */}
          <Skeleton className="h-6 w-3/4" /> {/* Title skeleton */}
        </div>
        <Skeleton className="h-4 w-full" /> {/* Description line 1 */}
        <Skeleton className="h-4 w-5/6" /> {/* Description line 2 */}
        <Skeleton className="h-10 w-24 rounded-full self-end" /> {/* Button skeleton */}
      </div>
    );
  }

  return (
    <div className={cn("bg-card p-6 rounded-lg shadow-lg border border-border hover:shadow-xl transition-all duration-300", className)}>
      <div className="flex items-center mb-4 space-x-4">
        <div className="p-3 bg-primary text-primary-foreground rounded-full">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-muted-foreground mb-6">{description}</p>
      {/* Added a placeholder "Read More" button for accessibility and completeness */}
      <Button variant="ghost" className="text-primary hover:underline group px-0 py-0 h-auto" aria-label={`Learn more about ${title}`}>
        Read More
        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
}

// Ensure Skeleton component is imported or defined if not using shadcn/ui
import { Skeleton } from '@/components/ui/skeleton';