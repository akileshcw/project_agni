import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import "@/components/custom/HeaderSection/Header.css";
{/*import Header from "@/components/custom/HeaderSection/Header";*/}
export const Route = createRootRoute({
  component: () => (
    <>
      
      {/*<Header />*/}
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
