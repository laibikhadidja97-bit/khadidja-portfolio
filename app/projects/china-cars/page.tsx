import type { Metadata } from "next";
import ProjectShowcase from "@/components/ProjectShowcase";
import { chinaCarsShowcase, chinaCarsScreenshots } from "@/lib/data";

export const metadata: Metadata = {
  title: `${chinaCarsShowcase.title} — Showcase`,
  description: chinaCarsShowcase.intro,
};

export default function ChinaCarsShowcasePage() {
  return (
    <ProjectShowcase
      showcase={chinaCarsShowcase}
      screenshots={chinaCarsScreenshots}
    />
  );
}
