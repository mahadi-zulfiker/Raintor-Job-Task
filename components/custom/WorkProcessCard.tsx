import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface WorkProcessCardProps {
  title: string;
  description: string;
  colorClass?: string;
  isClickable?: boolean;
}

export function WorkProcessCard({ title, description, colorClass, isClickable = true }: WorkProcessCardProps) {
  return (
    <Card className={cn(
      "rounded-2xl p-6 flex flex-col justify-between transition-all duration-300",
      colorClass ? colorClass : "bg-card border-none dark:bg-black",
      isClickable && "hover:scale-[1.02] hover:shadow-lg"
    )}>
      <CardContent className="p-0">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-foreground">
            {title}
          </h3>
          {isClickable && (
            <Link href="#" className="flex items-center text-muted-foreground hover:text-foreground transition-colors group">
              <span className="mr-2 text-sm">Read More</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
        <p className="text-muted-foreground text-base">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}