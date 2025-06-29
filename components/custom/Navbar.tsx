"use client";

import Link from "next/link";
import { useState } from "react"; // Import useState
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { ArrowRight, Moon, Sun, Menu, X } from "lucide-react"; // Import X for close icon

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 lg:px-20 py-6 flex justify-between items-center bg-background/80 backdrop-blur-sm">
        <Link href="/" className="text-2xl font-bold text-foreground">
          DEVLP.ME
        </Link>
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="#home" className="text-foreground transition-colors text-lg font-medium">
            Home
          </Link>
          <Link href="#about" className="text-foreground transition-colors text-lg font-medium">
            About
          </Link>
          <Link href="#portfolio" className="text-foreground transition-colors text-lg font-medium">
            Portfolio
          </Link>
          <Link href="#blog" className="text-foreground transition-colors text-lg font-medium">
            Blog
          </Link>
          <Button variant="outline" className="rounded-full px-6 py-2 border-primary-foreground h-10">
            <span className="mr-2">Start Project</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center lg:ml-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? (
              <Sun className="h-6 w-6 text-foreground" />
            ) : (
              <Moon className="h-6 w-6 text-foreground" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          {/* Mobile Menu Button */}
          <div className="lg:hidden ml-2">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              <Menu className="h-6 w-6 text-foreground" />
              <span className="sr-only">Open mobile menu</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4"
            onClick={toggleMobileMenu} // Use toggle to close
          >
            <X className="h-8 w-8 text-foreground" />
            <span className="sr-only">Close mobile menu</span>
          </Button>

          <div className="flex flex-col space-y-6 text-center">
            <Link
              href="#home"
              className="text-foreground text-3xl font-bold transition-colors"
              onClick={closeMobileMenu} // Close menu on link click
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-foreground text-3xl font-bold transition-colors"
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link
              href="#portfolio"
              className="text-foreground text-3xl font-bold transition-colors"
              onClick={closeMobileMenu}
            >
              Portfolio
            </Link>
            <Link
              href="#blog"
              className="text-foreground text-3xl font-bold transition-colors"
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
            <Button
              variant="outline"
              className="rounded-full px-8 py-4 border-primary-foreground h-auto text-xl mt-8"
              onClick={closeMobileMenu}
            >
              <span className="mr-2">Start Project</span>
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}