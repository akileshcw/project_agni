import { toast } from "sonner";
import { Button } from "./components/ui/button";
import Navbar from "./components/custom/Navbar";

function App() {
  return (
    <>
      <header className="relative">
        <Navbar />
      </header>
      <main className="bg-blue-500 flex flex-col items-center justify-center min-h-screen gap-8 overflow-hidden">
        <h1 className="text-7xl font-bold text-center drop-shadow-2xl">
          hello world
        </h1>
        <Button
          onClick={() => {
            toast.success("Do you get the toast?");
          }}
          size="lg"
        >
          Click me
        </Button>
      </main>
    </>
  );
}

export default App;
