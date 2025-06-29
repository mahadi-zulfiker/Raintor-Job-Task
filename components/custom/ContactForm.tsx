"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted!");
  };

  return (
    <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-xl border border-border/50">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            type="text"
            placeholder="Enter your name"
            className="w-full bg-transparent border-b border-muted-foreground focus:border-primary-foreground focus:ring-0 text-foreground placeholder:text-muted-foreground py-2 text-lg focus:outline-none"
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Your email address"
            className="w-full bg-transparent border-b border-muted-foreground focus:border-primary-foreground focus:ring-0 text-foreground placeholder:text-muted-foreground py-2 text-lg focus:outline-none"
          />
        </div>
        <div>
          <Textarea
            placeholder="Describe your project"
            className="w-full bg-transparent border-b border-muted-foreground focus:border-primary-foreground focus:ring-0 text-foreground placeholder:text-muted-foreground min-h-[100px] resize-y py-2 text-lg focus:outline-none"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
          <Button
            type="submit"
            className="w-full sm:flex-1 px-6 py-3 rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors h-12 text-base font-semibold"
          >
            <Send className="h-5 w-5 mr-2" /> Send
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full sm:flex-1 px-6 py-3 rounded-full border-muted-foreground text-muted-foreground hover:bg-muted-foreground hover:text-background transition-colors h-12 text-base font-semibold"
          >
            <Phone className="h-5 w-5 mr-2" /> Contact me
          </Button>
        </div>
      </form>
      <div className="mt-8 text-center text-sm text-muted-foreground flex flex-wrap items-center justify-center space-x-4">
        <span>@williamrey</span>
        <Link href="#" className="hover:text-foreground transition-colors">
          <Facebook className="h-5 w-5" />
        </Link>
        <Link href="#" className="hover:text-foreground transition-colors">
          <Instagram className="h-5 w-5" />
        </Link>
        <Link href="#" className="hover:text-foreground transition-colors">
          <Twitter className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}