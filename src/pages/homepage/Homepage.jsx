import { Hero } from "./components/hero/Hero";
import { WelcomeSection } from "./components/WelcomeSection";

export function Homepage() {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <WelcomeSection />
    </main>
  );
}
