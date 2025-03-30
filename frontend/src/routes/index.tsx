import { createFileRoute } from "@tanstack/react-router";
import "@/components/custom/HeroSection/Hero.css";
import HeroSection from "@/components/custom/HeroSection/Hero";
import Testimonials from "@/components/custom/Testimonials/Testimonials";
import '@/App.css';
import Footer from "@/components/custom/FooterSection/Footer";
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
    <div className="landing-page">
    <HeroSection />
    <Testimonials />
    <Footer />
    </div>
       
    </>
     
  );
}
