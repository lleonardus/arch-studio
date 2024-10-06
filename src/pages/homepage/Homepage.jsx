import { Hero } from "./components/hero/Hero";
import { WelcomeSection } from "./components/WelcomeSection";
import { AboutUsSection } from "./components/AboutUsSection";

export function Homepage() {
  return (
    <main>
      <Hero />
      <WelcomeSection />
      <AboutUsSection />
    </main>
  );
}
