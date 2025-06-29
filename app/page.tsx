"use client";

import { Navbar } from "@/components/custom/Navbar";
import { Footer } from "@/components/custom/Footer";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/custom/SectionHeader";
import { SkillCard } from "@/components/custom/SkillCard";
import { WorkProcessCard } from "@/components/custom/WorkProcessCard";
import { SocialIcons } from "@/components/custom/SocialIcons";
import { ContactForm } from "@/components/custom/ContactForm";
import Image from "next/image";
import ErrorBoundary from "@/components/ErrorBoundary";
import { useSkillsData } from "@/hooks/useSkillsData";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { Code, ArrowRight, Phone, LucideIcon } from "lucide-react";

type AnimatedSectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

const AnimatedSection = ({ children, id, className = "" }: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default function HomePage() {
  const { skills, loading, error } = useSkillsData();

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Navbar />

      {/* Hero Section */}
      <AnimatedSection
        id="home"
        className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-dark-background-custom"
      >
        <Image
          src="/banner.png"
          alt="Abstract Gradient Background"
          fill
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
          priority
        />
        <SocialIcons />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full relative z-10">
          <div className="flex-1 text-center md:text-left md:ml-20 lg:ml-0">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6"
            >
              Trusted{" "}
              <span className="bg-black text-white px-2 py-1 rounded-lg">
                Partner
              </span>{" "}
              for
              <br />
              Your Website{" "}
              <span className="bg-black text-white px-2 py-1 rounded-lg">
                Develop.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-md mx-auto md:mx-0"
            >
              Building the world&apos;s best marketing websites for over a
              decade. Your trusted partner for strategy, design, and dev.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button
                variant="outline"
                className="rounded-full px-8 py-4 text-lg border-2 border-purple-600 text-purple-600 bg-transparent hover:bg-purple-50 hover:text-purple-700 transition-colors"
                aria-label="Schedule a Call for your project"
              >
                <Phone className="h-5 w-5 mr-2" /> Schedule a Call
              </Button>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection
        id="skills"
        className="py-20 px-4 lg:px-20 bg-dark-background-custom text-white glowing-section-bg"
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title={
              <span>
                <span className="text-5xl lg:text-6xl font-bold leading-tight">
                  My Extensive
                  <br />
                  List of Skills
                </span>
              </span>
            }
            subtitle="Building the world's best Marketing Your trusted partner for strategy, design, and dev."
            showArrow
            arrowText="Why Choose me"
            className="flex-col md:flex-row md:items-end mb-12"
          />

          {/* Error Boundary for Skills Section */}
          <ErrorBoundary>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {loading ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <SkillCard
                    key={`skeleton-${index}`}
                    title=""
                    description=""
                    icon={Code}
                    isLoading
                  />
                ))
              ) : error ? (
                <div className="col-span-full text-center text-red-500 p-8 rounded-lg border border-red-700 bg-red-900/20">
                  <p className="font-semibold text-lg mb-2">
                    Error loading skills:
                  </p>
                  <p className="text-sm">{error.message}</p>
                  <Button
                    onClick={() => window.location.reload()}
                    className="mt-4"
                  >
                    Reload Page
                  </Button>
                </div>
              ) : (
                skills.map((skill) => (
                  <SkillCard
                    key={skill.id}
                    title={skill.title}
                    description={skill.description}
                    icon={
                      typeof skill.icon === "string"
                        ? Code
                        : (skill.icon as LucideIcon)
                    }
                  />
                ))
              )}
            </div>
          </ErrorBoundary>

          <div className="flex justify-end space-x-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-muted-foreground text-foreground hover:bg-foreground hover:text-background w-12 h-12"
              aria-label="Previous skill"
            >
              <ArrowRight className="h-5 w-5 rotate-180" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-muted-foreground text-foreground hover:bg-foreground hover:text-background w-12 h-12"
              aria-label="Next skill"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection
        id="about"
        className="py-20 px-4 lg:px-20 bg-background glowing-section-bg"
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title={
              <span className="text-left text-black text-[clamp(2.5rem,7vw,4.5rem)] leading-none font-bold">
                {" "}
                I&apos;ve been{" "}
                <span className="bg-black text-white px-3 py-1 inline-block rounded-lg leading-none">
                  Developing
                </span>
                <br />
                Websites since{" "}
                <span className="bg-black text-white px-3 py-1 inline-block rounded-lg leading-none">
                  2013
                </span>
              </span>
            }
          />
          <div className="absolute top-8 right-4 lg:right-20 flex items-center space-x-2 text-foreground">
            <button className="rounded-full border border-current p-2 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
            <span className="text-lg">About</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-xl text-left mt-8 mb-12">
            {" "}
            We start every new client interaction with an in-depth discovery
            call where we get to know each other and recommend the best course
            of action.
          </p>
          <h3 className="text-lg font-semibold text-muted-foreground mb-8 text-left uppercase">
            PREVIOUSLY WORKED ON
          </h3>{" "}
          <div className="flex flex-wrap gap-4 justify-start">
            <Button
              variant="outline"
              className="rounded-full border-muted-foreground text-foreground hover:bg-foreground hover:text-background px-7 py-3"
            >
              {" "}
              awwwards.
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-muted-foreground text-foreground hover:bg-foreground hover:text-background px-7 py-3"
            >
              {" "}
              CSS WINNER
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-muted-foreground text-foreground hover:bg-foreground hover:text-background px-7 py-3"
            >
              {" "}
              thoughtworks
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-muted-foreground text-foreground hover:bg-foreground hover:text-background px-7 py-3"
            >
              {" "}
              facebook
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-muted-foreground text-foreground hover:bg-foreground hover:text-background px-7 py-3"
            >
              {" "}
              CSSDesignAwards
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-muted-foreground text-foreground hover:bg-foreground hover:text-background px-7 py-3"
            >
              {" "}
              AUTODESK
            </Button>
          </div>
        </div>
      </AnimatedSection>
      {/* Work Process Section */}
      <AnimatedSection
        id="work-process"
        className="py-20 px-4 lg:px-20 bg-background glowing-section-bg"
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="My Work Process"
            showArrow
            arrowText="Work Process"
            className="mb-12 items-start md:items-center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <WorkProcessCard
              title="Discovery"
              description="We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action."
            />
            <WorkProcessCard
              title="Strategy"
              description="Every end-to-end project of ours begins with a tEspoke pre-build strateu. From brand ID consultation to in-depth ccxle reviews we're here to set the stage for success."
              colorClass="bg-lime-custom text-dark-background-custom"
              isClickable={false}
            />
            <WorkProcessCard
              title="Design"
              description="After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval."
            />
            <WorkProcessCard
              title="Build"
              description="Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project."
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection
        id="contact"
        className="py-20 px-4 lg:px-20 bg-dark-background-custom text-white glowing-section-bg"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title={
                <span>
                  <span className="text-5xl lg:text-6xl font-bold leading-tight">
                    Interested in
                    <br />
                    <span className="bg-white text-black px-2 py-1 rounded-lg">
                      work
                    </span>{" "}
                    together?
                  </span>
                </span>
              }
              showArrow
              arrowText="Contact"
              className="mb-8 items-start"
            />
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              We start every new client interaction with an in-depth discovery
              call where we get to know each other
            </p>
            <Button
              variant="outline"
              className="rounded-full px-8 py-4 text-lg border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
              aria-label="Schedule a Call to discuss collaboration"
            >
              Schedule a Call
            </Button>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
}