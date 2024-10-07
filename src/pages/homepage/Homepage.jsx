import { Hero } from "./components/hero/Hero";
import { WelcomeSection } from "./components/WelcomeSection";
import { AboutUsSection } from "./components/AboutUsSection";
import { PortfolioSection } from "./components/PortfolioSection";

export function Homepage() {
  return (
    <main className="mt-8 tablet:mt-14">
      <Hero />
      <WelcomeSection />
      <AboutUsSection />
      <PortfolioSection />
    </main>
  );
}
