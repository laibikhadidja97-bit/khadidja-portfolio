import type { Metadata } from "next";
import ProjectShowcase from "@/components/ProjectShowcase";
import { erpShowcase, erpScreenshots } from "@/lib/data";

export const metadata: Metadata = {
  title: `${erpShowcase.title} — Showcase`,
  description: erpShowcase.intro,
};

export default function ErpShowcasePage() {
  return <ProjectShowcase showcase={erpShowcase} screenshots={erpScreenshots} />;
}
