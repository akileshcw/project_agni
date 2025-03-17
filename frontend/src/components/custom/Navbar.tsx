import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="lg:max-w-5xl md:max-w-xl py-4 px-2 flex justify-between items-center rounded-full absolute left-1/5 w-full bg-white top-2 shadow-lg">
      {/* logo */}
      <div>
        <h2 className="text-2xl font-bold ml-4">Agni</h2>
      </div>

      <div>
        <ul className="flex items-center justify-center gap-4 text-xl">
          <li>Home</li>
          <li>Student</li>
          <li>Recruiters</li>
          <li>Pricing</li>
        </ul>
      </div>

      <div className="mr-2">
        <Button>Login</Button>
      </div>
      {/* mobile menu sheet */}
      <div className="mr-2 lg:hidden">
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
