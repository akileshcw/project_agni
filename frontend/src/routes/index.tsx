import { createFileRoute } from "@tanstack/react-router";
import "@/components/custom/HeroSection/Hero.css";
import '@/App.css';
{/*import HeroSection from "@/components/custom/HeroSection/Hero";
import Testimonials from "@/components/custom/Testimonials/Testimonials";
import Footer from "@/components/custom/FooterSection/Footer";
import Preview from "@/components/custom/PreviewSection/Preview";
import FAQ from "@/components/custom/FAQSection/FAQ";
import Process from "@/components/custom/ProcessSection/Process";
import { Recruiter } from "@/components/custom/RecruiterSection/Recruiter";
*/}
import Login from "@/components/custom/LoginPage/Login";
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
    <div className="landing-page">
    {/*<HeroSection />
    <Process />
    <Preview/>
    <Recruiter />
    <Testimonials />
    <FAQ />
    <Footer />*/}
    <Login />
    </div>
       
    </>
     
  );
}
