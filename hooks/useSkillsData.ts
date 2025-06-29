import { useState, useEffect } from "react";
import { Skill } from "@/lib/types";
import { Code, Smartphone, LayoutGrid } from "lucide-react"; // Import icons

export const useSkillsData = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      setLoading(true);
      setError(null);
      try {
        await new Promise((resolve) =>
          setTimeout(resolve, Math.random() * 2000 + 500)
        ); // 0.5s to 2.5s delay

        if (Math.random() > 0.8) {
          throw new Error("Failed to load skills data. Please try again.");
        }

        const mockSkills: Skill[] = [
          {
            id: "1",
            title: "HTML & CSS",
            description:
              "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
            icon: Code,
          },
          {
            id: "2",
            title: "Javascript",
            description:
              "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
            icon: Smartphone,
          },
          {
            id: "3",
            title: "Webflow",
            description:
              "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
            icon: LayoutGrid,
          },
        ];
        setSkills(mockSkills);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error("An unknown error occurred."));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return { skills, loading, error };
};
