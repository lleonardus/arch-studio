import { Hero } from "./components/Hero";
import { ContactDetailsSection } from "./components/contact-details/ContactDetailsSection";
import { ContactFormSection } from "./components/ContactFormSection";

export function Contact() {
  return (
    <main className="mt-8 tablet:mr-[98px] tablet:mt-14">
      <Hero />
      <ContactDetailsSection />
      <ContactFormSection />
    </main>
  );
}
