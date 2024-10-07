import { Hero } from "./components/Hero";
import { HeritageSection } from "./components/HeritageSection";
import { LeadersSection } from "./components/LeadersSection";

export function AboutUs() {
  return (
    <main className="mt-8 tablet:mr-[98px] tablet:mt-14">
      <Hero />
      <HeritageSection />
      <LeadersSection />
    </main>
  );
}
