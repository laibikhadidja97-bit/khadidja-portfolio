import type { Metadata } from "next";
import ProjectShowcase from "@/components/ProjectShowcase";
import { artisanShowcase, artisanScreenshots } from "@/lib/data";

export const metadata: Metadata = {
  title: `${artisanShowcase.title} — Showcase`,
  description: artisanShowcase.intro,
};

export default function ArtisanShowcasePage() {
  return (
    <ProjectShowcase
      showcase={artisanShowcase}
      screenshots={artisanScreenshots}
    />
  );
}
