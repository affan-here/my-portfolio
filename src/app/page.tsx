import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBanner from "@/components/StatsBanner";
import SocialBar from "@/components/SocialBar";
import ServicesAccordion from "@/components/ServicesAccordion";
import ProjectsBento from "@/components/ProjectsBento";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactSection from "@/components/ContactSection";
import TechMarquee from "@/components/TechMarquee";
import { NeuralBackground } from "@/components/animations/NeuralBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg text-white selection:bg-crimson-accent selection:text-white relative">
      <NeuralBackground />
      <Navbar />
      <SocialBar />
      <Hero />
      <StatsBanner />
      <TechMarquee />
      <ServicesAccordion />
      <ProjectsBento />
      <ExperienceTimeline />
      <ContactSection />
    </main>
  );
}
