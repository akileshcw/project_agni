import { createFileRoute } from "@tanstack/react-router";
import "@/components/custom/HeroSection/Hero.css";
import HeroSection from "@/components/custom/HeroSection/Hero";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="hero-section">
      <HeroSection />
    </div>
  );
}
