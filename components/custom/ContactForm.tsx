"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    projectDescription?: string;
    form?: string;
  }>({});

  const validateForm = () => {
    const newErrors: {
      name?: string;
      email?: string;
      projectDescription?: string;
    } = {};
    if (!name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!projectDescription.trim()) {
      newErrors.projectDescription = "Project description is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isSendButtonEnabled = useMemo(() => {
    return (
      name.trim() !== "" &&
      email.trim() !== "" &&
      /\S+@\S+\.\S+/.test(email) &&
      projectDescription.trim() !== "" &&
      !isSubmitting
    );
  }, [name, email, projectDescription, isSubmitting]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!validateForm()) {
      toast.error("Please correct the errors in the form.");
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log({ name, email, projectDescription });

      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setProjectDescription("");
    } catch (error: unknown) {
      console.error("Form submission error:", error);
      let errorMessage = "Failed to send message. Please try again.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      setErrors({ form: errorMessage });
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-xl border border-border/50">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-transparent border-b border-muted-foreground focus:border-primary-foreground focus:ring-0 text-foreground placeholder:text-muted-foreground py-2 text-lg focus:outline-none"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby="name-error"
          />
          {errors.name && (
            <p id="name-error" className="text-red-500 text-sm mt-1">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent border-b border-muted-foreground focus:border-primary-foreground focus:ring-0 text-foreground placeholder:text-muted-foreground py-2 text-lg focus:outline-none"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby="email-error"
          />
          {errors.email && (
            <p id="email-error" className="text-red-500 text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <Textarea
            placeholder="Describe your project"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            className="w-full bg-transparent border-b border-muted-foreground focus:border-primary-foreground focus:ring-0 text-foreground placeholder:text-muted-foreground min-h-[100px] resize-y py-2 text-lg focus:outline-none"
            aria-invalid={errors.projectDescription ? "true" : "false"}
            aria-describedby="description-error"
          />
          {errors.projectDescription && (
            <p id="description-error" className="text-red-500 text-sm mt-1">
              {errors.projectDescription}
            </p>
          )}
        </div>
        {errors.form && (
          <p className="text-red-500 text-sm mt-1 text-center">{errors.form}</p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
          <Button
            type="submit"
            className="w-full sm:flex-1 px-6 py-3 rounded-full bg-primary-foreground text-primary transition-colors h-12 text-base font-semibold cursor-pointer"
            disabled={!isSendButtonEnabled}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" /> Send
              </>
            )}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full sm:flex-1 px-6 py-3 rounded-full border-muted-foreground text-muted-foreground hover:bg-muted-foreground hover:text-background transition-colors h-12 text-base font-semibold"
            disabled={isSubmitting}
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