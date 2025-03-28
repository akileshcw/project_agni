import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import "@/App.css";
import Logo from "@/components/custom/HeaderSection/Logo";
import Navbar from "@/components/custom/HeaderSection/Navbar";
import MyButton from "@/components/custom/HeaderSection/LoginButton";
export const Route = createRootRoute({
  component: () => (
    <>
      <div className="header">
        <Logo />
        <Navbar />
        <MyButton />
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
