import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="lg:max-w-3xl md:max-w-xl py-4 px-2 flex justify-between items-center rounded-full absolute md:-translate-x-1/2 md:left-1/2 bg-white top-2 shadow-lg w-full">
      {/* logo */}
      <div>
        <h2 className="text-2xl font-bold ml-4">Agni</h2>
      </div>

      {/* medium screen list */}
      <div className="hidden md:flex">
        <ul className="flex items-center justify-center gap-4 text-xl">
          <li>Home</li>
          <li>Student</li>
          <li>Recruiters</li>
          <li>Pricing</li>
        </ul>
      </div>

      {/* medium screen and above login */}

      <div className="mr-2 hidden md:flex">
        <Button
          onClick={() => {
            console.log("Login button clicked");
          }}
        >
          Login
        </Button>
      </div>

      {/* mobile menu sheet */}
      <div className="mr-2 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="border-2 p-8">
            <ul className="space-y-8 text-2xl font-normal">
              <li>Home</li>
              <li>Student</li>
              <li>Recruiters</li>
              <li>Pricing</li>
              <li className="w-full">
                <Button size="lg">Login</Button>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
