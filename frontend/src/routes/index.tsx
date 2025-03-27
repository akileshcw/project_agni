import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Navbar from "@/components/custom/Navbar";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [body, setBody] = useState([]);

  const fetchBody = async () => {
    try {
      const res = await fetch("http://localhost:3002/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: "karthika" }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      toast.success("Data fetched successfully");
      setMessage(data.message);
      setBody(data.receivedBody);
      console.log("the data received from backend is", data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // toast.error(error.message);
    }
  };

  useEffect(() => {
    console.log("use effect is running");
    fetchBody();
  }, []);

  return (
    <>
      <header className="relative">
        <Navbar />
      </header>
      <main className="bg-blue-500 flex flex-col items-center justify-center min-h-screen gap-8 overflow-hidden">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "backInOut" }}
          className="text-7xl font-bold text-center drop-shadow-2xl border-2 border-green-500"
        >
          hello world
        </motion.h1>
        <Button
          onClick={() => {
            toast.success("Do you get the toast?");
          }}
          size="lg"
        >
          Click me
        </Button>
        <h1 className="text-4xl font-bold text-center text-white drop-shadow-2xl">
          This is the count
        </h1>
        <h2 className="text-3xl font-bold text-center drop-shadow-2xl">
          {count}
        </h2>
        <div className="flex items-center gap-4">
          <Button
            onClick={() => setCount((prev) => prev + 1)}
            className="active:scale-90 transition-all duration-300 bg-green-500 hover:bg-green-400"
          >
            Increment
          </Button>
          <Button
            variant="destructive"
            disabled={count === 0}
            className="active:scale-90 transition-all duration-300"
            onClick={() => {
              if (count === 0) {
                toast.error("Count cannot be less than 0");
                return;
              }
              setCount((prev) => prev - 1);
            }}
          >
            Decrement
          </Button>
        </div>
        <div>
          <p className="border-2 border-red-500 rounded shadow p-2">
            The message from server is <br />
            <span className="text-white underline-offset-2 decoration-amber-400 decoration-1">
              {message}
            </span>
          </p>
          <p>Total items in the body: {body.length}</p>
          {/* {body.map((item, index) => (
            <p key={item.key}>
              {index + 1}: Key : {item.key} | Value: {item.value}
            </p>
          ))} */}
        </div>
      </main>
    </>
  );
}
