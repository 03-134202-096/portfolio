import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { PublicationsCompact } from "@/components/sections/publications-compact";
import { PortfolioCarousel } from "@/components/sections/portfolio-carousel";
import { SkillsCompact } from "@/components/sections/skills-compact";
import { ContactCompact } from "@/components/sections/contact-compact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <PublicationsCompact />
      <PortfolioCarousel />
      <SkillsCompact />
      <ContactCompact />
      <Footer />
    </main>
  );
}
