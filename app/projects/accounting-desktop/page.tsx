import type { Metadata } from "next";
import ProjectShowcase from "@/components/ProjectShowcase";
import { accountingShowcase, accountingScreenshots } from "@/lib/data";

export const metadata: Metadata = {
  title: `${accountingShowcase.title} — Showcase`,
  description: accountingShowcase.intro,
};

export default function AccountingShowcasePage() {
  return (
    <ProjectShowcase
      showcase={accountingShowcase}
      screenshots={accountingScreenshots}
    />
  );
}
