import { Skeleton } from '@/components/ui/skeleton';
import { cn } from "@/lib/utils";
import { LucideIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SkillCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    className?: string;
    isLoading?: boolean;
}

export function SkillCard({ title, description, icon: Icon, className, isLoading }: SkillCardProps) {
    if (isLoading) {
        return (
            <div className={cn("bg-card p-6 rounded-lg shadow-lg flex flex-col space-y-4", className)}>
                <div className="flex items-center space-x-4">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <Skeleton className="h-6 w-3/4" />
                </div>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-10 w-24 rounded-full self-end" />
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
            <Button variant="ghost" className="text-primary hover:underline group px-0 py-0 h-auto" aria-label={`Learn more about ${title}`}>
                Read More
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
        </div>
    );
}
