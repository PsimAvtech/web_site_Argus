import { HeroSection } from "@/components/sections/HeroSection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { WhyArgusSection } from "@/components/sections/WhyArgusSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { SiteNav } from "@/components/ui/SiteNav";

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main>
        <HeroSection />
      <IntegrationsSection />
      <WorkflowSection />
      <IndustriesSection />
      <ProjectsSection />
      <WhyArgusSection />
      <EcosystemSection />
      </main>
    </>
  );
}
