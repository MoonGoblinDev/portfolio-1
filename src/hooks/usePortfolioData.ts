import { useEffect, useState } from "react";
import { Assets, Project, Socials, Badge } from "@/types";

const DATA_PATHS = {
  projects: `${import.meta.env.BASE_URL}data/projects.json`,
  socials: `${import.meta.env.BASE_URL}data/socials.json`,
  assets: `${import.meta.env.BASE_URL}data/assets.json`,
  badges: `${import.meta.env.BASE_URL}data/badge.json`,
};

export const usePortfolioData = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [socials, setSocials] = useState<Socials | null>(null);
  const [assets, setAssets] = useState<Assets | null>(null);
  const [badges, setBadges] = useState<Badge[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const [projectsRes, socialsRes, assetsRes, badgesRes] = await Promise.all([
          fetch(DATA_PATHS.projects),
          fetch(DATA_PATHS.socials),
          fetch(DATA_PATHS.assets),
          fetch(DATA_PATHS.badges),
        ]);

        if (!projectsRes.ok || !socialsRes.ok || !assetsRes.ok || !badgesRes.ok) {
          throw new Error("One or more content endpoints returned an error");
        }

        const [projectsData, socialsData, assetsData, badgesData] = await Promise.all([
          projectsRes.json(),
          socialsRes.json(),
          assetsRes.json(),
          badgesRes.json(),
        ]);

        if (!isMounted) return;

        setProjects(projectsData);
        setSocials(socialsData);
        setAssets(assetsData);
        setBadges(badgesData);
      } catch (error) {
        console.error("Failed to load content:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { projects, socials, assets, badges, loading };
};
