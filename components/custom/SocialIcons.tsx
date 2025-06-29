import Link from "next/link";
import { Mail, Instagram, Twitter, Dribbble } from "lucide-react";

export function SocialIcons() {
  return (
    <div className="absolute left-8 lg:left-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center space-y-4">
      <div className="transform -rotate-90 origin-top-left whitespace-nowrap text-muted-foreground text-sm tracking-widest mb-16">
        @williamrey
      </div>
      <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
        <Mail className="h-5 w-5" />
      </Link>
      <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
        <Instagram className="h-5 w-5" />
      </Link>
      <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
        <Twitter className="h-5 w-5" />
      </Link>
      <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
        <Dribbble className="h-5 w-5" />
      </Link>
      <div className="h-20 w-px bg-muted-foreground/50 mt-4"></div>
    </div>
  );
}