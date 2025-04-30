import { createFileRoute } from "@tanstack/react-router";
import "@/components/custom/HeroSection/Hero.css";
import '@/App.css';
{/*import Footer from "@/components/custom/FooterSection/Footer";
import Preview from "@/components/custom/PreviewSection/Preview";
import FAQ from "@/components/custom/FAQSection/FAQ";
import Process from "@/components/custom/ProcessSection/Process";
import { Recruiter } from "@/components/custom/RecruiterSection/Recruiter";
import SignUp from "@/components/custom/LoginPage/SignUp";*/}
import DashboardUser from "@/components/custom/Dashboard/DashboardUser";
{/*import HeroSection from "@/components/custom/HeroSection/Hero";
import Testimonials from "@/components/custom/Testimonials/Testimonials";*/}
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
    <div className="landing-page">
  {/* <HeroSection />
    <Preview/>
    <Process />
    <Recruiter />
    <FAQ />
    <Footer />
   <SignUp />*/}
   <DashboardUser />
   {/*<Testimonials />*/}
    </div>
       
    </>
     
  );
}
