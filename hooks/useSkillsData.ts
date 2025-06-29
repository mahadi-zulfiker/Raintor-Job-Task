// hooks/useSkills/useSkillsData.ts
import { useState, useEffect } from 'react';
import { Skill } from '@/lib/types';
import { Code, Smartphone, LayoutGrid } from 'lucide-react'; // Import icons

/**
 * A custom hook to fetch and manage skills data.
 * Simulates an asynchronous API call.
 */
export const useSkillsData = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      setLoading(true);
      setError(null);
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, Math.random() * 2000 + 500)); // 0.5s to 2.5s delay

        // Simulate a potential error
        if (Math.random() > 0.8) { // 20% chance of error
          throw new Error('Failed to load skills data. Please try again.');
        }

        // Mock data for skills
        const mockSkills: Skill[] = [
          {
            id: '1',
            title: 'HTML & CSS',
            description: 'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis',
            icon: Code,
          },
          {
            id: '2',
            title: 'Javascript',
            description: 'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis',
            icon: Smartphone,
          },
          {
            id: '3',
            title: 'Webflow',
            description: 'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis',
            icon: LayoutGrid,
          },
          // Add more skills if you want to see potential virtualization benefits,
          // though for just 3, it's not strictly necessary.
          // { id: '4', title: 'React', description: 'Building dynamic user interfaces.', icon: Code },
          // { id: '5', title: 'Next.js', description: 'Full-stack React framework.', icon: Smartphone },
        ];
        setSkills(mockSkills);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error('An unknown error occurred.'));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []); // Empty dependency array means this effect runs once on mount

  return { skills, loading, error };
};