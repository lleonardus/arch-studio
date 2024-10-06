import { Hero } from "./components/hero/Hero";
import { WelcomeSection } from "./components/WelcomeSection";
import { AboutUsSection } from "./components/AboutUsSection";
import { PortfolioSection } from "./components/PortfolioSection";

export function Homepage() {
  return (
    <main>
      <Hero />
      <WelcomeSection />
      <AboutUsSection />
      <PortfolioSection />
    </main>
  );
}
