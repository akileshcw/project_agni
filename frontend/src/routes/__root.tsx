import MyButton from "@/components/custom/HeaderSection/LoginButton";
import Logo from "@/components/custom/HeaderSection/Logo";
import Navbar from "@/components/custom/HeaderSection/Navbar";
import HeroSection from "@/components/custom/HeroSection/Hero";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import '@/App.css';
export const Route = createRootRoute({
  component: () => (
    <>
    <div className="page">
       <div className='header'>
        <Logo />
        <Navbar />
        <MyButton />
       </div>
       <br></br>
      
       </div>
       
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});
